const isDev = process.env.NODE_ENV !== 'production';

export const apiUrl = isDev
  ? 'http://localhost:4001'
  : 'https://quizcode-api.vercel.app';
