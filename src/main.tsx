import React, {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom';
import App from './App.tsx'
import {Provider} from "react-redux";
import store from "./redux/store";
import './index.css'
import './i18n.js'
import Loading from "./components/Loading";


ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <BrowserRouter>
            <Suspense fallback={<Loading/>}>
                <App/>
            </Suspense>
        </BrowserRouter>
    </Provider>
)
