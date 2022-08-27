import { Chip } from '@mui/material';
import { IEnchant } from 'shared/types';

import { ENCHANTMENT_COLORS } from '../config';
import { romanizeEnchantmentLevel } from '../lib';

type EnchantmentProps = {
  enchant: IEnchant;
};

export const Enchantment = ({ enchant }: EnchantmentProps) => {
  return (
    <Chip
      label={`${enchant.name} ${romanizeEnchantmentLevel(enchant.level)}`}
      style={{
        backgroundColor: ENCHANTMENT_COLORS[enchant.rarity].bg,
        color: ENCHANTMENT_COLORS[enchant.rarity].font,
      }}
    />
  );
};
