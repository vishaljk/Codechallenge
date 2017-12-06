import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from './store/rootreducer'
import registerServiceWorker from './registerServiceWorker';
import WebFont from 'webfontloader';
WebFont.load({ google: { families: ['Material Icons', 'Open Sans'] } });

const store=createStore(rootReducer);

ReactDOM.render(<Provider store={store}>
<App /></Provider>, document.getElementById('root'));
registerServiceWorker();
