import { IProduct } from 'shared/types';

const MINECRAFT_GRASS_IMAGE_URL =
  'https://w7.pngwing.com/pngs/456/94/png-transparent-minecraft-pocket-edition-computer-icons-desktop-block-angle-video-game-grass.png';

export const productMock: IProduct = {
  id: '20',
  name: 'wooden sword',
  category: 'weapon',
  shortDescription: 'basic sword for noobs like you',
  image: {
    url: MINECRAFT_GRASS_IMAGE_URL,
  },
  price: 123,
  description:
    'basic sword for noobs like you. You seriosly want to buy this one? Get a diamond sword and slay ender dragon.',
  complectation: 'bare sword with a box and polish instruments',
  enchants: [
    {
      name: 'Cleaving',
      description: 'Increases damage and shield stunning.',
      level: 3,
      rarity: 3,
    },
    {
      name: 'sharpness',
      description: 'Increases damage and shield stunning.',
      level: 5,
      rarity: 5,
    },
  ],
};
