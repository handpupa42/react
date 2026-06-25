import React from 'react';
import type { ReactNode } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

interface LayoutProps {
  children: ReactNode;
  currentPage: 'books' | 'readers' | 'profile';
  onPageChange: (page: 'books' | 'readers' | 'profile') => void;
  booksCount: number;
  readersCount: number;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  currentPage,
  onPageChange,
  booksCount,
  readersCount,
}) => {
  return (
    <div className="page-wrapper">
      <Header
        currentPage={currentPage}
        onPageChange={onPageChange}
        booksCount={booksCount}
        readersCount={readersCount}
      />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;