import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './module/app/app';

ReactDOM.render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>,
  document.getElementById('root')
);

// version: '3'
//
// services:
//   database-web:
// image: 'postgres'
// environment:
//   POSTGRES_USER: web_user
// POSTGRES_PASSWORD: magical_password
// POSTGRES_DB: web_database
// ports:
//   - '5438:5432'
// volumes:
//   - database-data-web:/var/lib/postgresql/data/
// volumes:
// database-data-web:
