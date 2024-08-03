import axios from "axios";
import { SearchResult } from "../types/searchTypes";

const defaultSuggestions: SearchResult[] = [
  {
    id: 1,
    name: "Lampalar",
    icon: "lampalar.svg",
    shoppingCenter: { id: 1, name: "Sədərək TM", active: true },
  },
  {
    id: 2,
    name: "Güzgülər",
    icon: "güzgülər.svg",
    shoppingCenter: { id: 2, name: "Binə TM", active: true },
  },
  {
    id: 3,
    name: "Kreslolar",
    icon: "kreslolar.svg",
    shoppingCenter: { id: 3, name: "Laçın TM", active: true },
  },
  {
    id: 4,
    name: "Ofis lampaları",
    icon: "ofis lampaları.svg",
    shoppingCenter: { id: 1, name: "Sədərək TM", active: true },
  },
  {
    id: 5,
    name: "Bitkilər",
    icon: "bitkilər.svg",
    shoppingCenter: { id: 2, name: "Binə TM", active: true },
  },
  {
    id: 6,
    name: "Parketlər",
    icon: "parketlər.svg",
    shoppingCenter: { id: 3, name: "Laçın TM", active: true },
  },
  {
    id: 7,
    name: "Televizor mebeli",
    icon: "televizor mebeli.svg",
    shoppingCenter: { id: 3, name: "Laçın TM", active: true },
  },
];

export const fetchSearchResults = async (
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

export const fetchSearchSuggestions = async (
  keyword: string
): Promise<SearchResult[]> => {
  if (!keyword || keyword === "defaultSuggestions") return defaultSuggestions;
  const url = `https://api.tapar.az/category/search?keyword=${keyword}`;
  try {
    const { data } = await axios.get(url);
    console.log("Fetched suggestions:", data.object);
    return data.object;
  } catch (error) {
    console.error("Error fetching suggestions:", error);
    return [];
  }
};
