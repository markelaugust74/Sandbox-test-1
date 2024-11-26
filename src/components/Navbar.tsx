import React from 'react';
import { MessageSquarePlus, Video, Users } from 'lucide-react';

interface NavbarProps {
  onAddChat: () => void;
  onAddVideo: () => void;
  onAddFriends: () => void;
}

export function Navbar({ onAddChat, onAddVideo, onAddFriends }: NavbarProps) {
  return (
    <div className="fixed top-0 left-0 right-0 bg-yap-dark border-b border-yap-light shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-yap-primary tracking-wider">YAP</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onAddChat}
              className="flex items-center gap-2 px-4 py-2 bg-yap-gray text-yap-primary rounded-lg 
                hover:bg-yap-light transition-colors border border-yap-primary/20 hover:border-yap-primary"
            >
              <MessageSquarePlus className="w-5 h-5" />
              <span>Chat</span>
            </button>
            <button
              onClick={onAddVideo}
              className="flex items-center gap-2 px-4 py-2 bg-yap-gray text-yap-primary rounded-lg 
                hover:bg-yap-light transition-colors border border-yap-primary/20 hover:border-yap-primary"
            >
              <Video className="w-5 h-5" />
              <span>Video</span>
            </button>
            <button
              onClick={onAddFriends}
              className="flex items-center gap-2 px-4 py-2 bg-yap-gray text-yap-primary rounded-lg 
                hover:bg-yap-light transition-colors border border-yap-primary/20 hover:border-yap-primary"
            >
              <Users className="w-5 h-5" />
              <span>Friends</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}