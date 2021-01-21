export interface Question {
  _id: string;
  categoryId: string;
  name: string;
  response: string;
  options: { _id: string; option: string; content: string }[];
}
