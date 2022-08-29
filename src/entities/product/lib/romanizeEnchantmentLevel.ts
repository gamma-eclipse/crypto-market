export const romanizeEnchantmentLevel = (level: number): string => {
  return ['I', 'II', 'III', 'IV', 'V'][level - 1];
};
