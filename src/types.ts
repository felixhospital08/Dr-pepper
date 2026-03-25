export interface Product {
  id: string;
  name: string;
  description: string;
  color: string;
  image: string;
  isZero: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: 'creamy-coconut',
    name: 'Creamy Coconut',
    description: 'A tropical twist on the classic 23 flavors.',
    color: '#F5F5DC',
    image: 'https://picsum.photos/seed/coconut/400/600',
    isZero: false,
  },
  {
    id: 'blackberry',
    name: 'Blackberry',
    description: 'Deep, dark, and perfectly carbonated.',
    color: '#4B0082',
    image: 'https://picsum.photos/seed/blackberry/400/600',
    isZero: false,
  },
  {
    id: 'blue-raspberry',
    name: 'Blue Raspberry',
    description: 'Electric blue flavor that pops.',
    color: '#0000FF',
    image: 'https://picsum.photos/seed/bluerasp/400/600',
    isZero: false,
  },
  {
    id: 'classic-zero',
    name: 'Classic Zero',
    description: 'The original 23 flavors, zero sugar.',
    color: '#1a1a1a',
    image: 'https://picsum.photos/seed/classiczero/400/600',
    isZero: true,
  },
  {
    id: 'cherry-zero',
    name: 'Cherry Zero',
    description: 'Sweet cherry goodness, zero sugar.',
    color: '#8B0000',
    image: 'https://picsum.photos/seed/cherryzero/400/600',
    isZero: true,
  },
];
