import React, { ReactNode } from 'react';
import { X, GripHorizontal } from 'lucide-react';
import { useDraggable } from '@dnd-kit/core';

interface DraggableWindowProps {
  id: string;
  title: string;
  onClose: () => void;
  children: ReactNode;
  style?: React.CSSProperties;
}

export function DraggableWindow({ id, title, onClose, children, style }: DraggableWindowProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id,
  });

  const windowStyle: React.CSSProperties = {
    ...style,
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      className={`fixed bg-yap-dark rounded-lg shadow-2xl opacity-0 animate-[fadeIn_0.3s_ease-out_forwards] resize overflow-hidden
        ${isDragging ? 'border-2 border-dashed border-yap-primary bg-yap-primary/10' : 'border border-yap-light'}`}
      style={windowStyle}
    >
      <div
        className={`flex items-center justify-between bg-yap-gray text-white p-3 rounded-t-lg cursor-move
          ${isDragging ? 'opacity-50' : ''}`}
        {...attributes}
        {...listeners}
      >
        <div className="flex items-center gap-2">
          <GripHorizontal className="w-4 h-4 text-yap-primary" />
          <span className="font-medium text-yap-primary">{title}</span>
        </div>
        <button
          onClick={onClose}
          className="hover:bg-yap-primary/20 rounded p-1 transition-colors"
        >
          <X className="w-4 h-4 text-yap-primary" />
        </button>
      </div>
      <div className={isDragging ? 'opacity-50' : ''}>
        {children}
      </div>
    </div>
  );
}