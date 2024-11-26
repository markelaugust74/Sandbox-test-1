import React, { FormEvent } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

export function ChatInput({ onSendMessage }: ChatInputProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.currentTarget.elements.namedItem('message') as HTMLInputElement;
    if (input.value.trim()) {
      onSendMessage(input.value);
      input.value = '';
    }
  };

  return (
    <form className="p-3 border-t border-yap-light" onSubmit={handleSubmit}>
      <div className="flex gap-2">
        <input
          type="text"
          name="message"
          className="flex-1 px-3 py-2 bg-yap-gray border border-yap-light rounded-lg text-white
            focus:outline-none focus:ring-2 focus:ring-yap-primary focus:border-transparent
            placeholder-gray-400"
          placeholder="Type a message..."
        />
        <button
          type="submit"
          className="bg-yap-gray hover:bg-yap-light text-yap-primary rounded-lg px-4 py-2 
            transition-colors border border-yap-primary/20 hover:border-yap-primary"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
}