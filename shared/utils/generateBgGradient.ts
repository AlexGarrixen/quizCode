type SignatureGenerateBgGradient = (
  from: string,
  to: string,
  rotate?: number
) => string;

export const generateBgGradient: SignatureGenerateBgGradient = (
  from,
  to,
  rotate = 210
) => `linear-gradient(${rotate}deg, ${from}, ${to})`;
