import React, { useState, useCallback } from 'react';
import { DndContext } from '@dnd-kit/core';
import { Navbar } from './components/Navbar';
import { ChatBox } from './components/ChatBox';
import { VideoWindow } from './components/VideoWindow';
import { FriendsWindow } from './components/FriendsWindow';

interface ChatBoxData {
  id: number;
  messages: Array<{ username: string; message: string; timestamp: string }>;
  position: { x: number; y: number };
}

interface WindowData {
  id: number;
  position: { x: number; y: number };
}

function App() {
  const [chatBoxes, setChatBoxes] = useState<ChatBoxData[]>([]);
  const [videoWindows, setVideoWindows] = useState<WindowData[]>([]);
  const [friendsWindow, setFriendsWindow] = useState<WindowData | null>(null);
  const [nextId, setNextId] = useState(1);

  const addChatBox = useCallback(() => {
    if (chatBoxes.length >= 10) return;
    
    setChatBoxes(prev => [...prev, {
      id: nextId,
      messages: [],
      position: {
        x: 100 + (nextId * 30) % 300,
        y: 100 + (nextId * 30) % 200
      }
    }]);
    setNextId(prev => prev + 1);
  }, [chatBoxes.length, nextId]);

  const addVideoWindow = useCallback(() => {
    setVideoWindows(prev => [...prev, {
      id: nextId,
      position: {
        x: 150 + (nextId * 30) % 300,
        y: 150 + (nextId * 30) % 200
      }
    }]);
    setNextId(prev => prev + 1);
  }, [nextId]);

  const addFriendsWindow = useCallback(() => {
    if (friendsWindow) return;
    
    setFriendsWindow({
      id: nextId,
      position: { x: 200, y: 200 }
    });
    setNextId(prev => prev + 1);
  }, [friendsWindow, nextId]);

  const removeChatBox = useCallback((id: number) => {
    setChatBoxes(prev => prev.filter(box => box.id !== id));
  }, []);

  const removeVideoWindow = useCallback((id: number) => {
    setVideoWindows(prev => prev.filter(window => window.id !== id));
  }, []);

  const removeFriendsWindow = useCallback(() => {
    setFriendsWindow(null);
  }, []);

  const addMessage = useCallback((boxId: number, message: string) => {
    setChatBoxes(prev => prev.map(box => {
      if (box.id !== boxId) return box;
      return {
        ...box,
        messages: [...box.messages, {
          username: 'You',
          message,
          timestamp: new Date().toLocaleTimeString()
        }]
      };
    }));
  }, []);

  const handleDragEnd = useCallback((event: any) => {
    const { active, delta } = event;
    const [type, id] = active.id.split('-');
    const numId = parseInt(id);

    if (type === 'chat') {
      setChatBoxes(prev => prev.map(box => {
        if (box.id !== numId) return box;
        return {
          ...box,
          position: {
            x: box.position.x + delta.x,
            y: box.position.y + delta.y
          }
        };
      }));
    } else if (type === 'video') {
      setVideoWindows(prev => prev.map(window => {
        if (window.id !== numId) return window;
        return {
          ...window,
          position: {
            x: window.position.x + delta.x,
            y: window.position.y + delta.y
          }
        };
      }));
    } else if (type === 'friends' && friendsWindow) {
      setFriendsWindow({
        ...friendsWindow,
        position: {
          x: friendsWindow.position.x + delta.x,
          y: friendsWindow.position.y + delta.y
        }
      });
    }
  }, [friendsWindow]);

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="min-h-screen bg-yap-dark pt-16">
        <Navbar
          onAddChat={addChatBox}
          onAddVideo={addVideoWindow}
          onAddFriends={addFriendsWindow}
        />

        {chatBoxes.map((box) => (
          <ChatBox
            key={box.id}
            id={box.id}
            messages={box.messages}
            onClose={() => removeChatBox(box.id)}
            onSendMessage={(message) => addMessage(box.id, message)}
            style={{
              left: box.position.x,
              top: box.position.y,
              zIndex: box.id
            }}
          />
        ))}

        {videoWindows.map((window) => (
          <VideoWindow
            key={window.id}
            id={window.id}
            onClose={() => removeVideoWindow(window.id)}
            style={{
              left: window.position.x,
              top: window.position.y,
              zIndex: window.id
            }}
          />
        ))}

        {friendsWindow && (
          <FriendsWindow
            id={friendsWindow.id}
            onClose={removeFriendsWindow}
            style={{
              left: friendsWindow.position.x,
              top: friendsWindow.position.y,
              zIndex: friendsWindow.id
            }}
          />
        )}
      </div>
    </DndContext>
  );
}

export default App;