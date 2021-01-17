export interface Category {
  id: string;
  name: string;
  topics: string[];
  bgColor: {
    from: string;
    to: string;
  };
}
