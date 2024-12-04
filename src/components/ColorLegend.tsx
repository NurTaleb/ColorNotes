import React from 'react';
import { AlertCircle, Clock, BookOpen, CheckCircle } from 'lucide-react';
import { colorOptions } from '../utils/colors';

export default function ColorLegend() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Red': return <AlertCircle size={16} className="text-red-500" />;
      case 'Yellow': return <Clock size={16} className="text-yellow-500" />;
      case 'Green': return <CheckCircle size={16} className="text-green-500" />;
      case 'Blue': return <BookOpen size={16} className="text-blue-500" />;
      default: return null;
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
      <h2 className="text-sm font-medium text-gray-700 mb-3">Note Categories:</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {colorOptions.map((option) => (
          <div
            key={option.value}
            className={`${option.value} rounded-md p-2 flex items-center gap-2`}
          >
            {getIcon(option.name)}
            <span className="text-sm text-gray-700">{option.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}