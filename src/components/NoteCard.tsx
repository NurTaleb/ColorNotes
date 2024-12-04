import React from 'react';
import { Trash2, AlertCircle, Clock, BookOpen, CheckCircle } from 'lucide-react';
import { Note } from '../types/note';
import { formatDate } from '../utils/dateFormatter';
import { getColorInfo } from '../utils/colors';

interface NoteCardProps {
  note: Note;
  onDelete: (id: string) => void;
}

export default function NoteCard({ note, onDelete }: NoteCardProps) {
  const colorInfo = getColorInfo(note.color);
  
  const getStatusIcon = () => {
    switch (colorInfo.name) {
      case 'Red': return <AlertCircle size={16} className="text-red-500" />;
      case 'Yellow': return <Clock size={16} className="text-yellow-500" />;
      case 'Green': return <CheckCircle size={16} className="text-green-500" />;
      case 'Blue': return <BookOpen size={16} className="text-blue-500" />;
      default: return null;
    }
  };

  return (
    <div className={`${note.color} rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow`}>
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center gap-2">
          {getStatusIcon()}
          <h3 className="font-semibold text-lg">{note.title}</h3>
        </div>
        <button
          onClick={() => onDelete(note.id)}
          className="text-gray-500 hover:text-red-500 transition-colors"
          aria-label="Delete note"
        >
          <Trash2 size={18} />
        </button>
      </div>
      <p className="text-gray-700 whitespace-pre-wrap">{note.content}</p>
      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
        <span>{formatDate(note.timestamp)}</span>
        <span className="text-xs">{colorInfo.label}</span>
      </div>
    </div>
  );
}