import BaseResponse from './response';
import { AssetResponse } from './myRoom';

export const getAssetList = (): Promise<BaseResponse<AssetResponse>> => {
  // return customFetch(FETCH_ASSETS_URL, { credentials: 'include' });

  const tempResult = {
    result: [
      {
        name: '배경',
        assetList: [],
      },
      {
        name: '바닥',
        assetList: [
          {
            src: 'https://media.istockphoto.com/id/182361617/ko/%EC%82%AC%EC%A7%84/%EB%85%B9%EC%83%89-%EC%9E%94%EB%94%94-%ED%95%84%EB%93%9C.jpg?s=612x612&w=0&k=20&c=lw1NIq87i72IEGCJwT0JoJqeNs6JhgyFiIgryPNVAQI=',
            name: '잔디',
            thumbnail:
              'https://media.istockphoto.com/id/182361617/ko/%EC%82%AC%EC%A7%84/%EB%85%B9%EC%83%89-%EC%9E%94%EB%94%94-%ED%95%84%EB%93%9C.jpg?s=612x612&w=0&k=20&c=lw1NIq87i72IEGCJwT0JoJqeNs6JhgyFiIgryPNVAQI=',
            type: 'PHOTO_FLOOR_2D' as const,
          },
        ],
      },
      {
        name: '소품',
        assetList: [],
      },
    ],
    status: 200,
  };
  return new Promise((resolve) => {
    resolve(tempResult);
  });
};
