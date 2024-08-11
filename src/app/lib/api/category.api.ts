import api from "@/app/lib/api/index";
import { ResponseType } from "@/app/lib/types";

const categoryBaseUrl = "/category";

export type CategoryBazaar = {
  id: number;
  bazaar: {
    id: number;
    name: string;
  };
  sequenceNumber: number;
  shopNumber: number;
};

export type ChildCategory = {
  id: number;
  name: string;
  image: string;
  icon: string;
};
export type Category = {
  id: number;
  name: string;
  image: string;
  icon: string;
  categoryBazaars: CategoryBazaar[];
  childCategories: ChildCategory[];
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
  async getAllByShoppingCenterId(shoppingCenterId: string) {
    return await api.get(`${categoryBaseUrl}/all/main/sc/${shoppingCenterId}`);
  },
  async searchByKey(keyword: string, shoppingCenterId: string | null) {
    return await api.get<GetCategoriesByKey>(`${categoryBaseUrl}/search`, {
      params: {
        keyword,
        shoppingCenterId,
      },
    });
  },
};
