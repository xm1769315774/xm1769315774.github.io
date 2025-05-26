import { type ReactNode, useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import * as Color4Bg from '@site/src/components/Color4BG/RandomCubesBg.module';
import { useColorMode } from '@docusaurus/theme-common';
import LocalMusicPlayer from '@site/src/components/MusicPlayer';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}


export const HomeBackground = () => {
  const { colorMode } = useColorMode();
  const colorsDay = ["#FBA9B7", "#FBC8BD", "#F4EFDF", "#C5ECD1"];
  const colorsNight = ["#1C1450", "#332D71", "#7D709A", "#1E5286"];

  useEffect(() => {
    const colorbg = new Color4Bg.RandomCubesBg({
      dom: "homePage",
      colors: colorMode === 'dark' ? colorsNight : colorsDay,
      loop: true
    })
    return () => {
      // 清理函数，如果 AmbientLightBg 提供了销毁方法的话
      if (colorbg && typeof colorbg.destroy === 'function') {
        colorbg.destroy();
      }
    };
  }, [colorMode]);

  return (
    <div
      id="homePage"
      className={styles.homePage}
    />
  )
}


export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <HomeBackground />
      <LocalMusicPlayer />
    </Layout>
  );
}
