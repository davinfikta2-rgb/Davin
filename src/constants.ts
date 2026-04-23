import { Game, PaymentMethod } from './types';

export const GAMES: Game[] = [
  {
    id: 'free-fire',
    name: 'Free Fire',
    category: 'Action',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop',
    icon: '🔥',
    banner: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop',
    color: '#ff4d4d',
    description: 'Top up Free Fire Diamonds with the best prices.',
    fields: [
      { id: 'uid', label: 'User ID', placeholder: 'Masukkan User ID', type: 'text' },
      { id: 'zone', label: 'Zone ID', placeholder: 'Masukkan Zone ID', type: 'text' }
    ],
    items: [
      { id: 'ff-5', name: '5 Diamonds', amount: '5', price: 1000 },
      { id: 'ff-50', name: '50 Diamonds', amount: '50', price: 8000, originalPrice: 10000, discount: '20%' },
      { id: 'ff-140', name: '140 Diamonds', amount: '140', price: 20000 },
      { id: 'ff-355', name: '355 Diamonds', amount: '355', price: 50000, originalPrice: 60000, discount: '15%' },
      { id: 'ff-720', name: '720 Diamonds', amount: '720', price: 100000 },
    ]
  },
  {
    id: 'mobile-legends',
    name: 'Mobile Legends',
    category: 'MOBA',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop',
    icon: '⚔️',
    banner: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop',
    color: '#4db8ff',
    description: 'Beli Diamond Mobile Legends Bang Bang murah dan cepat.',
    fields: [
      { id: 'uid', label: 'User ID', placeholder: '12345678', type: 'text' },
      { id: 'zone', label: 'Server ID', placeholder: '1234', type: 'text' }
    ],
    items: [
      { id: 'ml-3', name: '3 Diamonds', amount: '3', price: 1500 },
      { id: 'ml-12', name: '12 Diamonds', amount: '12', price: 3500 },
      { id: 'ml-28', name: '28 Diamonds', amount: '28', price: 8000 },
      { id: 'ml-85', name: '85 Diamonds', amount: '85', price: 23000 },
      { id: 'ml-185', name: '185 Diamonds', amount: '185', price: 50000 },
    ]
  },
  {
    id: 'roblox',
    name: 'Roblox',
    category: 'Social',
    image: 'https://images.unsplash.com/photo-1605898399728-6644d47379d7?q=80&w=800&auto=format&fit=crop',
    icon: '📦',
    banner: 'https://images.unsplash.com/photo-1605898399728-6644d47379d7?q=80&w=1200&auto=format&fit=crop',
    color: '#34d399',
    description: 'Top up Robux dengan harga termurah.',
    fields: [
      { id: 'username', label: 'Roblox Username', placeholder: 'Masukkan Username', type: 'text' }
    ],
    items: [
      { id: 'rbx-80', name: '80 Robux', amount: '80', price: 15000 },
      { id: 'rbx-400', name: '400 Robux', amount: '400', price: 75000 },
      { id: 'rbx-800', name: '800 Robux', amount: '800', price: 145000 },
    ]
  },
  {
    id: 'pubg-mobile',
    name: 'PUBG Mobile',
    category: 'Battle Royale',
    image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=800&auto=format&fit=crop',
    icon: '🔫',
    banner: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1200&auto=format&fit=crop',
    color: '#fbbf24',
    description: 'Beli UC PUBG Mobile resmi hanya disini.',
    fields: [
      { id: 'uid', label: 'Character ID', placeholder: 'Masukkan ID', type: 'text' }
    ],
    items: [
      { id: 'pubg-32', name: '32 UC', amount: '32', price: 7000 },
      { id: 'pubg-60', name: '60 UC', amount: '60', price: 14000 },
      { id: 'pubg-325', name: '325 UC', amount: '325', price: 70000 },
    ]
  },
  {
    id: 'dota-2',
    name: 'Dota 2',
    category: 'MOBA',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=800&auto=format&fit=crop',
    icon: '👹',
    banner: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=1200&auto=format&fit=crop',
    color: '#ef4444',
    description: 'Steam Wallet IDR untuk beli item Dota 2.',
    fields: [
      { id: 'email', label: 'Steam Email', placeholder: 'Masukkan Email', type: 'text' }
    ],
    items: [
      { id: 'steam-12', name: '12,000 IDR', amount: '12k', price: 13500 },
      { id: 'steam-45', name: '45,000 IDR', amount: '45k', price: 50000 },
      { id: 'steam-60', name: '60,000 IDR', amount: '60k', price: 68000 },
    ]
  },
  {
    id: 'valorant',
    name: 'Valorant',
    category: 'FPS',
    image: 'https://images.unsplash.com/photo-1614027164847-1b2809eb18cb?q=80&w=800&auto=format&fit=crop',
    icon: '🎯',
    banner: 'https://images.unsplash.com/photo-1614027164847-1b2809eb18cb?q=80&w=1200&auto=format&fit=crop',
    color: '#ff4655',
    description: 'Top up Valorant Points (VP) murah dan masuk instan.',
    fields: [
      { id: 'riotid', label: 'Riot ID', placeholder: 'Username#TAG', type: 'text' }
    ],
    items: [
      { id: 'vp-125', name: '125 Valorant Points', amount: '125', price: 15000 },
      { id: 'vp-420', name: '420 Valorant Points', amount: '420', price: 50000 },
      { id: 'vp-1375', name: '1375 Valorant Points', amount: '1375', price: 150000 },
    ]
  }
];

export const PAYMENT_METHODS: PaymentMethod[] = [
  { id: 'qris', name: 'QRIS (All Payment)', image: 'QRIS', fee: 0 },
  { id: 'dana', name: 'DANA', image: 'DANA', fee: 0 },
  { id: 'gopay', name: 'GOPAY', image: 'GOPAY', fee: 0 },
  { id: 'shopeepay', name: 'ShopeePay', image: 'ShopeePay', fee: 0 },
  { id: 'bca', name: 'BCA Transfer', image: 'BCA', fee: 1000 },
];
