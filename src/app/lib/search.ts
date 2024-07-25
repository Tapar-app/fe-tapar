import axios from "axios";

interface SearchResult {
  id: number;
  name: string;
  icon: string;
  shoppingCenter: {
    id: number;
    name: string;
    active: boolean;
  };
}

const fetchSearchResults = async (
  keyword: string,
  shoppingCenterId?: number
): Promise<SearchResult[]> => {
  let url = `https://api.tapar.az/category/search?keyword=${keyword}`;
  if (shoppingCenterId) {
    url += `&shoppingCenterId=${shoppingCenterId}`;
  }
  const { data } = await axios.get(url);
  return data.object;
};

export default fetchSearchResults;
