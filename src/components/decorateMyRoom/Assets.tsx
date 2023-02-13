import React from 'react';
import { useQuery } from 'react-query';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { getAssetList } from '../../api/myRoomAPI';
import assetSlice from '../../redux/slices/assetSlice';

function Assets() {
  const dispatch = useAppDispatch();
  const { assetCategoryList, isFetched } = useAppSelector((state) => state.asset);

  const { isLoading } = useQuery('fetchAssetList', getAssetList, {
    enabled: !isFetched,
    onSuccess: (data) => {
      if (data.status !== 200 || data.result === null) {
        return;
      }

      dispatch(assetSlice.actions.saveAssetResult(data.result));
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex-1 flex flex-col p-[1.5%] bg-deepGray gap-[25px]">
      {assetCategoryList.map((assetCategory) => (
        <div key={assetCategory.name} className="h-[25%] p-[2%] bg-[white]">
          <div className="font-semibold">{assetCategory.name}</div>
          <div className="flex gap-2">
            {assetCategory.assetList.map((asset, i) => (
              <div
                key={asset.name}
                className="cursor-pointer"
                onClick={() => dispatch(assetSlice.actions.selectAsset(asset))}
              >
                <img src={asset.thumbnail} alt={asset.name} className="w-[60px] h-[60px]" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Assets;
