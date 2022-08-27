import { Chip, Tooltip, Zoom } from '@mui/material';
import { IEnchant } from 'shared/types';

import { ENCHANTMENT_COLORS } from '../config';
import { romanizeEnchantmentLevel } from '../lib';

type EnchantmentProps = {
  enchant: IEnchant;
};

export const Enchantment = ({ enchant }: EnchantmentProps) => {
  return (
    <Tooltip title={enchant.description} followCursor enterDelay={50} leaveDelay={100} TransitionComponent={Zoom}>
      <Chip
        label={`${enchant.name} ${romanizeEnchantmentLevel(enchant.level)}`}
        style={{
          backgroundColor: ENCHANTMENT_COLORS[enchant.rarity].bg,
          color: ENCHANTMENT_COLORS[enchant.rarity].font,
        }}
      />
    </Tooltip>
  );
};
