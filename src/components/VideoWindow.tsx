import React from 'react';
import { DraggableWindow } from './DraggableWindow';

interface VideoWindowProps {
  id: number;
  onClose: () => void;
  style?: React.CSSProperties;
}

export function VideoWindow({ id, onClose, style }: VideoWindowProps) {
  return (
    <DraggableWindow
      id={`video-${id}`}
      title={`Video ${id}`}
      onClose={onClose}
      style={{ ...style, width: '480px', height: '360px' }}
    >
      <div className="w-full h-[calc(100%-48px)] bg-yap-gray flex items-center justify-center text-yap-primary">
        <p className="text-center">Video Player Example<br />(Add your video component here)</p>
      </div>
    </DraggableWindow>
  );
}