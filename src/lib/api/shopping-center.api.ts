import api from '@/lib/api/index';
import { ResponseType } from '@/lib/types';

const shoppingCenterBaseUrl = '/shopping-center';

export type ShoppingCenter = {
  id: number;
  name: string;
  location: string;
  mapLink: string;
  isActive: boolean;
};

export interface GetAllShoppingCentersResponse extends ResponseType {
  object: ShoppingCenter[];
}
export interface GetShoppingCenterByIdResponse extends ResponseType {
  object: {
    id: number;
    name: string;
  };
}
export const ShoppingCenterApi = {
  async getAll() {
    return await api.get<GetAllShoppingCentersResponse>(
      `${shoppingCenterBaseUrl}/all`
    );
  },
  async getById(shoppingCenterId: string) {
    return await api.get<GetShoppingCenterByIdResponse>(
      `${shoppingCenterBaseUrl}/get/bazaar/sc/${shoppingCenterId}`
    );
  },
};
