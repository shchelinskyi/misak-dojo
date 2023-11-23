import React, {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {Provider} from "react-redux";
import store from "./redux/store";
import './index.css'
import './i18n.js'


ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <Suspense fallback={<div>Loading...</div>}>
            <App/>
        </Suspense>
    </Provider>,
)
