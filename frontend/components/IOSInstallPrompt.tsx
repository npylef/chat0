'use client';

import { useState, useEffect } from 'react';
import { X, Share } from 'lucide-react';
import { Button } from './ui/button';

export function IOSInstallPrompt() {
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    const hasSeenPrompt = localStorage.getItem('ios-install-prompt-seen');
    
    if (isIOS && !isStandalone && !hasSeenPrompt) {
      setTimeout(() => setShowPrompt(true), 2000);
    }
  }, []);

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem('ios-install-prompt-seen', 'true');
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 animate-in slide-in-from-bottom-5">
      <div className="bg-background border rounded-lg shadow-lg p-4 max-w-sm mx-auto">
        <div className="flex items-start justify-between">
          <div className="flex-1 pr-4">
            <h3 className="font-semibold text-sm mb-1">Install Chat0</h3>
            <p className="text-xs text-muted-foreground mb-3">
              Add to Home Screen for the best experience
            </p>
            <div className="space-y-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <Share className="h-3 w-3" />
                <span>Tap the share button</span>
              </div>
              <div>Then select "Add to Home Screen"</div>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 -mt-1 -mr-1"
            onClick={handleDismiss}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}