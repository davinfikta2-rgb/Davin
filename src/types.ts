export interface Game {
  id: string;
  name: string;
  category: string;
  image: string;
  icon: string;
  banner: string;
  color: string;
  description: string;
  fields: InputField[];
  items: TopUpItem[];
}

export interface InputField {
  id: string;
  label: string;
  placeholder: string;
  type: 'text' | 'number';
  description?: string;
}

export interface TopUpItem {
  id: string;
  name: string;
  amount: string;
  price: number;
  originalPrice?: number;
  discount?: string;
}

export interface PaymentMethod {
  id: string;
  name: string;
  image: string;
  fee: number;
}
