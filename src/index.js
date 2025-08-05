import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/app';



const root = ReactDOM.createRoot(document.getElementById('root')); // получаем корневой элемент приложения
// создаём корневой элемент React приложения и связываем его с элементом с id 'root'
// ReactDOM.createRoot() используется для создания корневого элемента приложения
// root - это объект, который будет использоваться для рендеринга компонентов React в DOM
// root.render() используется для рендеринга компонента App в корневой элемент приложения
root.render(
  <App/>
);


