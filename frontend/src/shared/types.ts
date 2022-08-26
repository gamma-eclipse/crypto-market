export type Category = 'block' | 'weapon' | 'armor';

export type ProductView = {
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
  minecraftId: string;
  enchants: { name: string; description: string; level: number }[];
};
