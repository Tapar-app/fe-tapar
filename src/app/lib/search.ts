import { SearchResult } from "../types/searchTypes";
import api from "./api";

const apiUrl = "/category";

export const fetchSearchResults = async (
  keyword: string,
  shoppingCenterId?: number
): Promise<SearchResult[]> => {
  let url = `${apiUrl}/search?keyword=${keyword}`;
  if (shoppingCenterId) {
    url += `&shoppingCenterId=${shoppingCenterId}`; // fixed interpolation
  }
  try {
    const { data } = await api.get(url);
    console.log("Fetched results:", data.object);
    return data.object;
  } catch (error) {
    console.error("Error fetching results:", error);
    return [];
  }
};

export const fetchSearchSuggestions = async (
  keyword: string
): Promise<SearchResult[]> => {
  // Ensure the keyword is not empty or undefined before sending the request
  if (!keyword || keyword.trim().length === 0) {
    console.error("Keyword is invalid or empty");
    return [];
  }

  const url = `${apiUrl}/search?keyword=${keyword}`; // fixed interpolation
  try {
    const { data } = await api.get(url);
    console.log("Fetched suggestions:", data.object);
    return data.object.slice(0, 7); // Limit the suggestions to 7
  } catch (error) {
    console.error("Error fetching suggestions:", error);
    return [];
  }
};
