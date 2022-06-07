export interface Launch {
  id: string;
  name: string;
  details?: string;
  flight_number: number;
  date: string;
  success?: boolean;
  image_url?: string;
}
