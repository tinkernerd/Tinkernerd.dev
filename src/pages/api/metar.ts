import type { APIContext } from "astro";

export const prerender = false; // ✅ Ensures this route is server-rendered

export async function GET(context: APIContext) {
    // ✅ Get the correct request URL manually
    const url = new URL(context.request.url);
    // ✅ Extract query parameters from the request URL
    const airport = url.searchParams.get("airport");
    if (!airport) {
        return new Response(JSON.stringify({ error: "Airport code is required" }), { status: 400 });
    }

    const apiKey = import.meta.env.AVWX_API_KEY;
    try {
        const response = await fetch(`https://avwx.rest/api/metar/${airport}`, {
            method: "GET",
            headers: {
                "Authorization": `BEARER ${apiKey}`,
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) throw new Error(`Failed to fetch METAR for ${airport}`);

        const data = await response.json();
        return new Response(JSON.stringify(data), {
            headers: { "Content-Type": "application/json" },
            status: 200
        });
    } catch (error: unknown) {
        return new Response(JSON.stringify({ error: "Error fetching METAR data" }), { status: 500 });
    }
}
