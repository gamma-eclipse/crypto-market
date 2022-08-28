export type ICategory = 'block' | 'weapon' | 'armor';
export type IRarity = 1 | 2 | 3 | 4 | 5;

export type IProductView = {
  id: string;
  name: string;
  shortDescription: string;
  category: ICategory;
  price: number;
  image: {
    url: string;
  };
};

export type IEnchant = {
  name: string;
  description: string;
  level: number;
  rarity: IRarity;
};

export type IProductSpecification = {
  description: string;
  complectation: string;
  enchants?: IEnchant[];
};

export type IProduct = IProductView & IProductSpecification;
