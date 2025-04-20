// Success response type for a single location item
export interface Location {
  id: number;
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  url: string;
}

// Success response: an array of locations
export type SuccessResponse = Location[];

// Error response structure
export interface ErrorResponse {
  error: {
    code: number;
    message: string;
  };
}

// Combined response type
export type ApiResponse = SuccessResponse | ErrorResponse;
