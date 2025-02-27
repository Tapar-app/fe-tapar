import api from '@/lib/api/index';
import { ResponseType } from '@/lib/types';

const categoryBaseUrl = '/category';

export type Category = {
  id: number;
  name: string;
  image: string;
  icon: string;
  bazaarGroups: CategoryBazaar[];
  childCategories: ChildCategory[];
};

export type CategoryBazaar = {
  bazaarId: number;
  bazaarDetails: {
    sequenceNumber: number;
    shopNumbers: number[];
  }[];
  bazaarName: string;
};

export type ChildCategory = {
  id: number;
  name: string;
  image: string;
  icon: string;
};

export interface GetAllCategoriesByShoppingCenter extends ResponseType {
  object: Category[];
}

export type SearchCategoryItem = {
  id: 0;
  name: string;
  icon: string;
  shoppingCenter: {
    id: number;
    name: string;
    active: boolean;
  };
};

export interface GetCategoriesByKey extends ResponseType {
  object: SearchCategoryItem[];
}
export const CategoryApi = {
  async getAll(shoppingCenterId: number | null) {
    return await api.get<GetAllCategoriesByShoppingCenter>(
      `${categoryBaseUrl}/all/main${
        shoppingCenterId ? `?shoppingCenterId=${shoppingCenterId}` : ''
      }`
    );
  },
  async getCategoryInformation(
    shoppingCenterId: string | null,
    categoryId: string
  ) {
    return await api.get<Category>(
      `${categoryBaseUrl}/sc/${shoppingCenterId}/category/${categoryId}`
    );
  },
  async searchByKey(keyword: string, shoppingCenterId: string | null) {
    return await api.get<GetCategoriesByKey>(`${categoryBaseUrl}/search`, {
      params: {
        keyword,
        shoppingCenterId,
      },
    });
  },

  async getByShoppingCenter(shoppingCenterId: string | null) {
    return await api.get<GetAllCategoriesByShoppingCenter>(
      `${categoryBaseUrl}/sc/${shoppingCenterId}`
    );
  },
};
