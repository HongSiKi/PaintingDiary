import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Asset, AssetCategory, AssetObject } from '../../api/myRoom';

interface AssetState {
  assetCategoryList: AssetCategory[];
  isFetched: boolean;

  background: string | null;
  floor: Asset | null;
  assetList: AssetObject[];

  backgroundDefault: string | null;
  floorDefault: string | null;
  assetDefault: string | null;
}

const assetInitialState: AssetState = {
  assetCategoryList: [],
  isFetched: false,

  background: null,
  floor: null,
  assetList: [],

  backgroundDefault: null,
  floorDefault: null,
  assetDefault: null,
};

const assetSlice = createSlice({
  name: 'asset',
  initialState: assetInitialState,
  reducers: {
    saveAssetResult: (state, action: PayloadAction<AssetCategory[]>) => {
      state.assetCategoryList = action.payload;
      state.isFetched = true;

      state.assetCategoryList.forEach((assetCategory) => {
        if (assetCategory.type === 'BACKGROUND') {
          state.backgroundDefault = assetCategory.default;
        } else if (assetCategory.type === 'FLOOR') {
          state.floorDefault = assetCategory.default;
        } else if (assetCategory.type === 'ASSET') {
          state.floorDefault = assetCategory.default;
        }
      });
    },

    selectAsset: (state, action: PayloadAction<Asset>) => {
      // TODO: asset type 별로 별도 처리
      const asset = action.payload;
      if (asset.type === 'PHOTO_FLOOR_2D') {
        state.floor = asset;
      } else {
        const assetObject: AssetObject = {
          ...asset,
          position: [0, 0.0001, 0],
          rotation: [-Math.PI / 2, 0, 0],
          geometry: [20, 20],
        };
        state.assetList = [...state.assetList, assetObject];
      }
    },
  },
});

export default assetSlice;
