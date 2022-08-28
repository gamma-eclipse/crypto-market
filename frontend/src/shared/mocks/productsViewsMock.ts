import { IProductView } from 'shared/types';

const MINECRAFT_GRASS_IMAGE_URL =
  'https://w7.pngwing.com/pngs/456/94/png-transparent-minecraft-pocket-edition-computer-icons-desktop-block-angle-video-game-grass.png';

export const productViewsMock: IProductView[] = [
  {
    id: '5',
    name: 'golden helmet',
    category: 'armor',
    shortDescription: 'great defense armor',
    image: {
      url: MINECRAFT_GRASS_IMAGE_URL,
    },
    price: 23,
  },
  {
    id: '10',
    name: 'grass block',
    category: 'block',
    shortDescription: 'small block of grass',
    image: {
      url: MINECRAFT_GRASS_IMAGE_URL,
    },
    price: 5123,
  },
  {
    id: '15',
    name: 'hoe',
    category: 'weapon',
    shortDescription: 'da hoe?',
    image: {
      url: MINECRAFT_GRASS_IMAGE_URL,
    },
    price: 324,
  },
  {
    id: '20',
    name: 'wooden sword',
    category: 'weapon',
    shortDescription: 'basic sword for noobs like you',
    image: {
      url: MINECRAFT_GRASS_IMAGE_URL,
    },
    price: 123,
  },
];
