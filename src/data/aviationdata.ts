export interface MetarData {
  raw?: string;
  altimeter?: {
    value: number;
  };
  temperature?: {
    value: number;
  };
  dewpoint?: {
    value: number;
  };
  wind_direction?: {
    repr: string;
  };
  wind_speed?: {
    repr: string;
  };
  visibility?: {
    value: number;
  };
  flight_rules?: string;
  clouds?: {
    repr: string;
  }[];
  density_altitude?: number;
  pressure_altitude?: number;
  relative_humidity?: number;
  remarks?: string;

  // ✅ Add wx_codes for Weather Conditions
  wx_codes?: {
    repr: string;
    value: string;
  }[];

  // ✅ Extend remarks_info to include codes
  remarks_info?: {
    sea_level_pressure?: {
      value: number;
    };
    maximum_temperature_6?: {
      value: number;
    };
    minimum_temperature_6?: {
      value: number;
    };
    precip_36_hours?: {
      value: number;
    };
    pressure_tendency?: {
      tendency: string;
    };
    codes?: {
      repr: string;
      value: string;
    }[];
  };
}
// File: src/data/aviationdata.ts

export interface Frequency {
  id: string;
  airport_ref: string;
  airport_ident: string;
  type: string;
  description: string;
  frequency_mhz: string;
}

export interface Runway {
  id: string;
  airport_ref: string;
  airport_ident: string;
  length_ft: string;
  width_ft: string;
  surface: string;
  lighted: string;
  closed: string;
  le_ident: string;
  le_latitude_deg: string;
  le_longitude_deg: string;
  le_elevation_ft: string;
  le_heading_degT: string;
  le_displaced_threshold_ft?: string;
  he_ident?: string;
  he_latitude_deg?: string;
  he_longitude_deg?: string;
  he_elevation_ft?: string;
  he_heading_degT?: string;
  he_displaced_threshold_ft?: string;
  le_ils?: {
    freq: number;
    course: number;
  };
  he_ils?: {
    freq: number;
    course: number;
  };
}

export interface AirportData {
  ident: string;
  type: string;
  name: string;
  latitude_deg: number;
  longitude_deg: number;
  elevation_ft: string;
  continent: string;
  iso_country: string;
  iso_region: string;
  municipality: string;
  scheduled_service: string;
  gps_code: string;
  iata_code: string;
  local_code: string;
  home_link?: string;
  wikipedia_link?: string;
  keywords: string;
  icao_code: string;
  runways: Runway[];
  freqs: Frequency[];
  country: {
    id: string;
    code: string;
    name: string;
    continent: string;
    wikipedia_link: string;
    keywords: string;
  };
  region: {
    id: string;
    code: string;
    local_code: string;
    name: string;
    continent: string;
    iso_country: string;
    wikipedia_link: string;
    keywords: string;
  };
  navaids: unknown[]; // You can create a specific type if needed
  updatedAt: string;
  station: {
    icao_code: string;
    distance: number;
  };
}
