import React from 'react';
import LayoutProviders from '@theme/Layout/Provider';
import Navbar from '@theme/Navbar';
import Footer from '@theme/Footer';
import styles from './styles.module.css';

interface Props {
  children: React.ReactNode;
}

export default function Layout(props: Props) {
  const { children } = props;
  return (
    <LayoutProviders>
      <Navbar />
      <div className={styles.mainContent}>
        {children}
      </div>
      {/* <Footer /> */}
    </LayoutProviders>
  );
}