import React from 'react';

export type PossibleFramePositions = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g';
export type Sizes = 'sm' | 'md' | 'lg';
export type CustomStyle = {
  color?: string;
  fillColor?: string;
};
export type CustomFrameAssets = {
  a: React.FC;
  aFilled: React.FC;
  b: React.FC;
  bFilled: React.FC;
  c: React.FC;
  cFilled: React.FC;
  d: React.FC;
  dFilled: React.FC;
  e: React.FC;
  eFilled: React.FC;
  f: React.FC;
  fFilled: React.FC;
  g: React.FC;
  gFilled: React.FC;
};

export type CustomBlockAssets = { block?: React.FC; filledBlock?: React.FC };
