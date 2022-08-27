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

export type IEnchant = {
  name: string;
  description: string;
  level: number;
  rarity: Rarity;
};

export type ProductSpecification = {
  description: string;
  complectation: string;
  enchants?: IEnchant[];
};

export type IProduct = ProductView & ProductSpecification;
