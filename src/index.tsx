import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import Service from './services/services';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);

Service();