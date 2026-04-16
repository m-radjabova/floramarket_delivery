export interface Flower {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: 'seasonal' | 'hit' | 'discount';
  tag?: 'NEW' | 'SALE' | 'POPULAR' | 'VIP';
  palette: string;
  size: 'Small' | 'Medium' | 'Large' | 'Standard' | 'Box';
}

export const flowers: Flower[] = [
  {
    id: '1',
    name: 'Breath of Sunrise',
    price: 160,
    oldPrice: 190,
    image: 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&q=80&w=900',
    category: 'seasonal',
    tag: 'NEW',
    palette: 'Pink & White',
    size: 'Medium',
  },
  {
    id: '2',
    name: 'Blush Rose Symphony',
    price: 125,
    image: 'https://images.unsplash.com/photo-1591886960571-74d43a9d4166?auto=format&fit=crop&q=80&w=900',
    category: 'seasonal',
    palette: 'Rose Pink',
    size: 'Standard',
  },
  {
    id: '3',
    name: 'Spring Blossom Harmony',
    price: 189,
    oldPrice: 240,
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&q=80&w=900',
    category: 'seasonal',
    tag: 'SALE',
    palette: 'Mixed Pastels',
    size: 'Large',
  },
  {
  id: '4',
  name: 'Crimson Love Story',
  price: 155,
  image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&q=80&w=900',
  category: 'hit',
  palette: 'Deep Red',
  size: 'Standard',
},
  {
    id: '5',
    name: 'Pure Tulip Dream',
    price: 143,
    oldPrice: 165,
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=900',
    category: 'discount',
    tag: 'SALE',
    palette: 'White',
    size: 'Medium',
  },
  {
    id: '6',
    name: 'Sunset Whisper',
    price: 150,
    image: 'https://images.unsplash.com/photo-1558241477-8490a61bd8be?auto=format&fit=crop&q=80&w=900',
    category: 'discount',
    palette: 'Peach & Coral',
    size: 'Standard',
  },
  {
    id: '7',
    name: 'Peony Heaven Cloud',
    price: 210,
    image: 'https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&q=80&w=900',
    category: 'hit',
    tag: 'POPULAR',
    palette: 'Soft Pink',
    size: 'Large',
  },
  {
    id: '8',
    name: 'Emerald Garden Bliss',
    price: 172,
    image: 'https://images.unsplash.com/photo-1487070183336-b863922373d4?auto=format&fit=crop&q=80&w=900',
    category: 'seasonal',
    palette: 'Green & Cream',
    size: 'Medium',
  },
  {
    id: '9',
    name: 'Golden Petal Whisper',
    price: 138,
    oldPrice: 160,
    image: 'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&q=80&w=900',
    category: 'discount',
    palette: 'Golden Yellow',
    size: 'Small',
  },
  {
    id: '10',
    name: 'Moonlight Elegance Box',
    price: 195,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=900',
    category: 'hit',
    tag: 'VIP',
    palette: 'White & Beige',
    size: 'Box',
  },
  {
    id: '11',
    name: 'Signature Bloom Collection',
    price: 224,
    image: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&q=80&w=900',
    category: 'hit',
    palette: 'Soft Pink',
    size: 'Large',
  },
  {
    id: '12',
    name: 'Lavender Serenity',
    price: 147,
    image: 'https://images.unsplash.com/photo-1494972308805-463bc619d34e?auto=format&fit=crop&q=80&w=900',
    category: 'discount',
    palette: 'Lavender',
    size: 'Medium',
  },
];