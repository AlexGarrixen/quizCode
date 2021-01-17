import { Category } from '../interfaces';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Javascript',
    topics: ['Data types', 'Fundamentals'],
    bgColor: {
      from: '#5581f1',
      to: '#1153fc',
    },
  },
  {
    id: '2',
    name: 'Css',
    topics: ['Reglas', 'Selectores'],
    bgColor: {
      from: '#c165dd',
      to: '#5c27fe',
    },
  },
  {
    id: '3',
    name: 'Html',
    topics: ['Estructura', 'Etiquetas'],
    bgColor: {
      from: '#ffcb52',
      to: '#ff7802',
    },
  },
  {
    id: '4',
    name: 'React js',
    topics: ['Reactividad', 'State'],
    bgColor: {
      from: '#facd68',
      to: '#fc76b3',
    },
  },
];
