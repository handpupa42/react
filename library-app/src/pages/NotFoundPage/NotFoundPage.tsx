import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => (
  <div>
    <h2>404 — Страница не найдена</h2>
    <p>Перейти на <Link to="/books">главную</Link></p>
  </div>
);

export default NotFoundPage;