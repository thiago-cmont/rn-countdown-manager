import React from 'react';
import { ViewStyle } from 'react-native';

export type PossibleFramePositions = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g';
export type Sizes = 'sm' | 'md' | 'lg';
export type CustomStyle = {
  color?: string;
  offColor?: string;
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

export type BlockAssetType = {
  asset: React.FC;
  customOffAsset?: boolean;
  offAsset?: React.FC;
  position?: Pick<ViewStyle, 'top' | 'bottom' | 'left' | 'right'>;
};
export type CustomBlockType = {
  a: BlockAssetType;
  b: BlockAssetType;
  c: BlockAssetType;
  d: BlockAssetType;
  e: BlockAssetType;
  f: BlockAssetType;
  g: BlockAssetType;
};
