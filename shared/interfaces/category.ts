export interface Category {
  _id: string;
  name: string;
  topics: string[];
  bgGradient: {
    from: string;
    to: string;
  };
}
