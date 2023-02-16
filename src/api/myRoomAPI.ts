import BaseResponse from './response';
import { AssetResponse } from './myRoom';

export const getAssetList = (): Promise<BaseResponse<AssetResponse>> => {
  // return customFetch(FETCH_ASSETS_URL, { credentials: 'include' });

  const tempResult = {
    result: [
      // {
      //   name: '배경',
      //   type: 'BACKGROUND' as const,
      //   default: null,
      //   assetList: [],
      // },
      {
        name: '바닥',
        type: 'FLOOR' as const,
        default:
          'https://media.istockphoto.com/id/1197671817/ko/%EC%82%AC%EC%A7%84/%EC%98%A4%EB%9E%98%EB%90%9C-%EB%B2%BD-%ED%85%8D%EC%8A%A4%EC%B2%98-%EC%8B%9C%EB%A9%98%ED%8A%B8-%EB%8D%94%EB%9F%AC%EC%9A%B4-%ED%9A%8C%EC%83%89-%EA%B2%80%EC%9D%80-%EB%B0%B0%EA%B2%BD-%EC%B6%94%EC%83%81-%ED%9A%8C%EC%83%89%EA%B3%BC-%EC%8B%A4%EB%B2%84-%EC%83%89%EC%83%81-%EB%94%94%EC%9E%90%EC%9D%B8%EC%9D%80-%ED%9D%B0%EC%83%89-%EB%B0%B0%EA%B2%BD%EA%B3%BC-%EB%B9%9B%EC%9E%85%EB%8B%88%EB%8B%A4.jpg?s=612x612&w=0&k=20&c=qlN-Ey_FNuYwP8z55XdRSTydAHCX4OqM-NsSgrxCLd4=',
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
        type: 'ASSET' as const,
        default:
          'https://media.istockphoto.com/id/1197671817/ko/%EC%82%AC%EC%A7%84/%EC%98%A4%EB%9E%98%EB%90%9C-%EB%B2%BD-%ED%85%8D%EC%8A%A4%EC%B2%98-%EC%8B%9C%EB%A9%98%ED%8A%B8-%EB%8D%94%EB%9F%AC%EC%9A%B4-%ED%9A%8C%EC%83%89-%EA%B2%80%EC%9D%80-%EB%B0%B0%EA%B2%BD-%EC%B6%94%EC%83%81-%ED%9A%8C%EC%83%89%EA%B3%BC-%EC%8B%A4%EB%B2%84-%EC%83%89%EC%83%81-%EB%94%94%EC%9E%90%EC%9D%B8%EC%9D%80-%ED%9D%B0%EC%83%89-%EB%B0%B0%EA%B2%BD%EA%B3%BC-%EB%B9%9B%EC%9E%85%EB%8B%88%EB%8B%A4.jpg?s=612x612&w=0&k=20&c=qlN-Ey_FNuYwP8z55XdRSTydAHCX4OqM-NsSgrxCLd4=',
        assetList: [
          {
            src: 'https://raw.githubusercontent.com/HongSiKi/PaintingDiary/main/public/images/Logo.jpeg',
            name: '춘식',
            thumbnail:
              'https://github.com/HongSiKi/PaintingDiary/blob/main/public/images/Logo.jpeg?raw=true',
            type: 'PHOTO_ASSET_2D' as const,
          },
        ],
      },
    ],
    status: 200,
  };
  return new Promise((resolve) => {
    resolve(tempResult);
  });
};
