import { Category } from '@interfaces';

export const categories: Category[] = [
  {
    _id: '1',
    name: 'Javascript',
    topics: ['Data types', 'Fundamentals'],
    bgGradient: {
      from: '#5581f1',
      to: '#1153fc',
    },
  },
  {
    _id: '2',
    name: 'Css',
    topics: ['Reglas', 'Selectores'],
    bgGradient: {
      from: '#c165dd',
      to: '#5c27fe',
    },
  },
  {
    _id: '3',
    name: 'Html',
    topics: ['Estructura', 'Etiquetas'],
    bgGradient: {
      from: '#ffcb52',
      to: '#ff7802',
    },
  },
  {
    _id: '4',
    name: 'React js',
    topics: ['Reactividad', 'State'],
    bgGradient: {
      from: '#facd68',
      to: '#fc76b3',
    },
  },
];
