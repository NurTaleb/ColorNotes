import React from 'react';
import { BookPlus } from 'lucide-react';

export default function EmptyState() {
  return (
    <div className="text-center py-12 bg-white rounded-lg shadow-sm">
      <BookPlus className="mx-auto text-gray-400 mb-4" size={48} />
      <h3 className="text-lg font-medium text-gray-900 mb-2">No notes yet</h3>
      <p className="text-gray-500">
        Start by adding your first note above!
      </p>
    </div>
  );
}