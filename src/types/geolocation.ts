export interface GeoIP {
  asn: string;
  city: string | null;
  code: CodeGeoIp;
  continent: string;
  country: string;
  geonameId: GeoNameId;
  ip: string;
  location: LocationData;
  registeredCountry: string;
  state: string | null;
}

interface CodeGeoIp {
  state: string | null;
  country: string;
  registeredCountry: string;
  continent: string;
}

interface GeoNameId {
  city: string | null;
  state: string | null;
  country: number;
  registeredCountry: number;
  continent: number;
}

interface LocationData {
  accuracy_radius: number;
  latitude: number;
  longitude: number;
  time_zone: string;
}
