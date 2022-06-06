export interface Launch {
  id: string;
  name: string;
  details?: string;
  flightNumber: number;
  date: string;
  success: boolean;
  imageUrl?: string;
}
