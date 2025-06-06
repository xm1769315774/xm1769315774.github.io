import React from 'react';
import { useLocation } from '@docusaurus/router';
import { MusicProviderWrapper } from '@site/src/context/MusicContext';
import { MusicPlayer } from 'docusaurus-player';
import BrowserOnly from '@docusaurus/BrowserOnly';
function RootContent({ children }) {
  const location = useLocation();
  const isHome = location.pathname === '/';
  // 动态设置 initialLayout
  const initialLayout = isHome ? 'normal' : 'floating';
  return (
    <>
      {children}
     
      <BrowserOnly>
        {() => <MusicPlayer initialLayout={initialLayout} autoPlay={true} />}
      </BrowserOnly>
    </>
  );
}

export default function Root({ children }) {
  return (
    <MusicProviderWrapper>
      <RootContent>{children}</RootContent>
    </MusicProviderWrapper>
  );
}