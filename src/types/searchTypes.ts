export interface SearchResult {
  id: number;
  name: string;
  icon: string;
  shoppingCenter: {
    id: number;
    name: string;
    active: boolean;
  };
}
