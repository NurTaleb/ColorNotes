import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import { Note } from '../types/note';
import { colorOptions } from '../utils/colors';
import ColorPicker from './ColorPicker';

interface NoteFormProps {
  onAddNote: (note: Note) => void;
}

export default function NoteForm({ onAddNote }: NoteFormProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [color, setColor] = useState(colorOptions[0].value); // Default to blue (Study materials)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    const newNote: Note = {
      id: Date.now().toString(),
      title: title.trim(),
      content: content.trim(),
      color,
      timestamp: Date.now(),
    };

    onAddNote(newNote);
    setTitle('');
    setContent('');
    setColor(colorOptions[0].value); // Reset to blue (Study materials)
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm mb-8">
      <div className="space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Note Title"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Note Content"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32"
        />
        <div className="flex items-center justify-between">
          <ColorPicker value={color} onChange={setColor} />
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <PlusCircle size={20} />
            Add Note
          </button>
        </div>
      </div>
    </form>
  );
}