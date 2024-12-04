export interface Note {
  id: string;
  title: string;
  content: string;
  color: string;
  timestamp: number;
}

export type ColorOption = {
  name: string;
  value: string;
  label: string;
};