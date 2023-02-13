import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Asset, AssetCategory, AssetObject } from '../../api/myRoom';

interface AssetState {
  assetCategoryList: AssetCategory[];
  isFetched: boolean;
  assetList: AssetObject[];
}

const assetInitialState: AssetState = {
  assetCategoryList: [],
  isFetched: false,
  assetList: [],
};

const assetSlice = createSlice({
  name: 'asset',
  initialState: assetInitialState,
  reducers: {
    saveAssetResult: (state, action: PayloadAction<AssetCategory[]>) => {
      state.assetCategoryList = action.payload;
      state.isFetched = true;
    },

    selectAsset: (state, action: PayloadAction<Asset>) => {
      // TODO: asset type 별로 별도 처리
      const assetObject: AssetObject = {
        ...action.payload,
        position: [0, 0, 0],
        rotation: [-Math.PI / 2, 0, 0],
        geometry: [20, 0, 20],
      };
      console.log(assetObject);
      state.assetList = [...state.assetList, assetObject];
    },
  },
});

export default assetSlice;
