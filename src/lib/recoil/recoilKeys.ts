export const RecoilKeys = {
  THEME: 'theme',
  ID: 'id',
} as const;

export type RecoilKeys = (typeof RecoilKeys)[keyof typeof RecoilKeys];
