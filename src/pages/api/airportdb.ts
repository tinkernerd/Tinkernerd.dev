import type { APIContext } from "astro";

export const prerender = false; // Ensure this route is server-rendered

export async function GET(context: APIContext) {
  // Build the request URL and extract the airport (ICAO) code
  const url = new URL(context.request.url);
  console.log("Full URL received:", url.toString());

  const airport = url.searchParams.get("airport");
  console.log("Extracted airport param:", airport);

  if (!airport) {
    console.error("No airport code provided!");
    return new Response(JSON.stringify({ error: "Airport code is required" }), { status: 400 });
  }

  // Read your API token from environment variables (set AIRPORTDB_API_TOKEN in your .env file)
  const apiToken = import.meta.env.AIRPORT_DB_KEY;
  console.log("Fetching airport data for:", airport);

  try {
    const response = await fetch(`https://airportdb.io/api/v1/airport/${airport}?apiToken=${apiToken}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch airport data for ${airport}`);
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
      status: 200
    });
  } catch (error: unknown) {
    console.error("Error fetching airport data:", (error as Error).message);
    return new Response(JSON.stringify({ error: "Error fetching airport data" }), { status: 500 });
  }
}
