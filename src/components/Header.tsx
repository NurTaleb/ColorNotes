import React from 'react';
import { BookOpen } from 'lucide-react';

export default function Header() {
  return (
    <div className="flex items-center justify-center mb-8">
      <BookOpen className="text-blue-600 mr-2" size={32} />
      <h1 className="text-3xl font-bold text-gray-800">Student Notes</h1>
    </div>
  );
}