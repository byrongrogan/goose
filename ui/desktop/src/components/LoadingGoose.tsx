import React, { useMemo } from 'react';
import GooseLogo from './GooseLogo';

const LoadingGoose = () => {
  // Get the app branding from appConfig for the loading message
  const appBranding = useMemo(() => {
    try {
      return window.appConfig.get('GOOSE_DESKTOP_BRAND') || 'goose';
    } catch (e) {
      return 'goose';
    }
  }, []);

  return (
    <div className="w-full pb-[2px]">
      <div
        data-testid="loading-indicator"
        className="flex items-center text-xs text-textStandard mb-2 mt-2 animate-[appear_250ms_ease-in_forwards]"
      >
        <GooseLogo className="mr-2" size="small" hover={false} />
        {appBranding.toLowerCase()} is working on it…
      </div>
    </div>
  );
};

export default LoadingGoose;
