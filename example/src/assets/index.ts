import ABlock from './a.svg';
import AOffBlock from './a-off.svg';
import BBlock from './b.svg';
import BOffBlock from './b-off.svg';
import CBlock from './c.svg';
import COffBlock from './c-off.svg';
import DBlock from './d.svg';
import DOffBlock from './d-off.svg';
import EBlock from './e.svg';
import EOffBlock from './e-off.svg';
import FBlock from './f.svg';
import FOffBlock from './f-off.svg';
import GBlock from './g.svg';
import GOffBlock from './g-off.svg';
import { CustomBlockType } from 'rn-countdown';
export const customBlocks: CustomBlockType = {
  a: {
    asset: ABlock,
    customOffAsset: true,
    offAsset: AOffBlock,
    position: { top: 8 },
  },
  b: {
    asset: BBlock,
    customOffAsset: true,
    offAsset: BOffBlock,
    position: {},
  },
  c: {
    asset: CBlock,
    customOffAsset: true,
    offAsset: COffBlock,
    position: { bottom: 8, right: 3 },
  },
  d: {
    asset: DBlock,
    customOffAsset: true,
    offAsset: DOffBlock,
    position: { bottom: 17, right: 6 },
  },
  e: {
    asset: EBlock,
    customOffAsset: true,
    offAsset: EOffBlock,
    position: { right: 6, bottom: 8 },
  },
  f: {
    asset: FBlock,
    customOffAsset: true,
    offAsset: FOffBlock,
    position: { right: 2 },
  },
  g: {
    asset: GBlock,
    customOffAsset: true,
    offAsset: GOffBlock,
    position: { left: 1, bottom: 4 },
  },
};
