import React from 'react';
import { DraggableWindow } from './DraggableWindow';

interface FriendsWindowProps {
  id: number;
  onClose: () => void;
  style?: React.CSSProperties;
}

export function FriendsWindow({ id, onClose, style }: FriendsWindowProps) {
  return (
    <DraggableWindow
      id={`friends-${id}`}
      title="Friends"
      onClose={onClose}
      style={{ ...style, width: '300px', height: '400px' }}
    >
      <div className="p-4 bg-yap-dark h-full">
        <p className="text-center text-yap-primary">Friends Example</p>
      </div>
    </DraggableWindow>
  );
}