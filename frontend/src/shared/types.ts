export type Category = 'block' | 'weapon' | 'armor';
export type Rarity = 1 | 2 | 3 | 4 | 5;

export type ProductView = {
  id: string;
  name: string;
  shortDescription: string;
  category: Category;
  price: number;
  image: {
    url: string;
  };
};

export type ProductSpecification = {
  description: string;
  complectation: string;
  enchants?: { name: string; description: string; level: number; rarity: Rarity }[];
};

export type Product = ProductView & ProductSpecification;
