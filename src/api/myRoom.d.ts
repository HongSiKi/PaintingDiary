export enum AssetType {
  PHOTO_ASSET_2D = 0,
  PHOTO_FLOOR_2D = 1,
  PHOTO_BACKGROUND_2D = 2,
  OBJECT_2D = 3,
  OBJECT_3D = 4,
}

export interface Asset {
  name: string;
  src: string;
  thumbnail: string;
  type:
    | AssetType
    | 'PHOTO_ASSET_2D'
    | 'PHOTO_FLOOR_2D'
    | 'PHOTO_BACKGROUND_2D'
    | 'OBJECT_2D'
    | 'OBJECT_3D';
}

export interface AssetObject extends Asset {
  position: [number, number, number];
  rotation: [number, number, number];
  geometry: [number, number, number];
}

export interface AssetCategory {
  name: string;
  assetList: Asset[];
}

export type AssetResponse = AssetCategory[];
