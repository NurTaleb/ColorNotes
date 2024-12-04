import { Note } from '../types/note';

export const saveNotes = (notes: Note[]): void => {
  localStorage.setItem('studentNotes', JSON.stringify(notes));
};

export const loadNotes = (): Note[] => {
  const saved = localStorage.getItem('studentNotes');
  return saved ? JSON.parse(saved) : [];
};