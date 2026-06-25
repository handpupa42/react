import React from 'react';
import type { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

type Page = 'books' | 'readers' | 'profile';

interface LayoutProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
  booksCount: number;
  readersCount: number;
  children?: ReactNode; // на будущее, не обязателен если используешь Outlet
}

const Layout: React.FC<LayoutProps> = ({ currentPage, onPageChange, booksCount, readersCount }) => {
  return (
    <div className="page-wrapper">
      <Header
        currentPage={currentPage}
        onPageChange={onPageChange}
        booksCount={booksCount}
        readersCount={readersCount}
      />
      <main className="main-content">
        <div className="container">
          <Outlet /> {/* дочерние страницы через маршрутизацию */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;