import React from 'react';
import { Plus } from 'lucide-react';

interface AddChatButtonProps {
  onClick: () => void;
  disabled: boolean;
  count: number;
}

export function AddChatButton({ onClick, disabled, count }: AddChatButtonProps) {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <button
        onClick={onClick}
        disabled={disabled}
        className="group relative bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white rounded-full p-6 transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        <Plus className="w-8 h-8" />
        <span className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-gray-900 text-white px-4 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity">
          Add Chat ({count}/10)
        </span>
      </button>
    </div>
  );
}