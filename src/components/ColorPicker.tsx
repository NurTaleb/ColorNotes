import React from 'react';
import { colorOptions } from '../utils/colors';

interface ColorPickerProps {
  value: string;
  onChange: (color: string) => void;
}

export default function ColorPicker({ value, onChange }: ColorPickerProps) {
  return (
    <div className="flex gap-2">
      {colorOptions.map((option) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={`w-8 h-8 rounded-full ${option.value} border-2 transition-all ${
            value === option.value ? 'border-blue-500 scale-110' : 'border-transparent hover:scale-105'
          }`}
          title={`${option.name} - ${option.label}`}
          type="button"
          aria-label={option.label}
        />
      ))}
    </div>
  );
}