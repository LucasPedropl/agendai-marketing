export interface Shop {
  id: number;
  name: string;
  rating: number;
  address: string;
  img: string;
}

export interface Service {
  id: number;
  name: string;
  description: string;
  price: number;
  duration: string;
}

export interface Professional {
  id: number;
  name: string;
  role: string;
}

export interface BookingData {
  shop: Shop | null;
  service: Service | null;
  pro: Professional | null;
  date: string | null; // Format: DD/MM/YYYY
  time: string | null;
}

export interface Appointment extends BookingData {
  id: number;
  status: 'Pendente' | 'Confirmado' | 'Cancelado';
}
