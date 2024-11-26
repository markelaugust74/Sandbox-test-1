import React from 'react';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { DraggableWindow } from './DraggableWindow';

interface ChatBoxProps {
  id: number;
  messages: Array<{ username: string; message: string; timestamp: string }>;
  onClose: () => void;
  onSendMessage: (message: string) => void;
  style?: React.CSSProperties;
}

export function ChatBox({ id, messages, onClose, onSendMessage, style }: ChatBoxProps) {
  return (
    <DraggableWindow
      id={`chat-${id}`}
      title={`Chat ${id}`}
      onClose={onClose}
      style={{ ...style, width: '320px', height: '480px' }}
    >
      <div className="h-[calc(100%-48px)] flex flex-col bg-yap-dark">
        <div className="flex-1 overflow-y-auto p-4">
          {messages.map((msg, i) => (
            <ChatMessage key={i} {...msg} />
          ))}
        </div>
        <ChatInput onSendMessage={onSendMessage} />
      </div>
    </DraggableWindow>
  );
}