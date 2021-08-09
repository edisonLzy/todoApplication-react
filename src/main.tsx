import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { initRem } from './utils/rem';
import './index.css';
import App from './App';

// 移动端适配初始化
initRem();

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
