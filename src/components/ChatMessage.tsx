import React from 'react';

interface ChatMessageProps {
  username: string;
  message: string;
  timestamp: string;
}

export function ChatMessage({ username, message, timestamp }: ChatMessageProps) {
  return (
    <div className="mb-3 animate-[slideIn_0.3s_ease-out]">
      <span className="font-semibold text-yap-primary">{username}</span>
      <span className="text-gray-500 text-xs ml-2">{timestamp}</span>
      <p className="text-gray-300 mt-1">{message}</p>
    </div>
  );
}