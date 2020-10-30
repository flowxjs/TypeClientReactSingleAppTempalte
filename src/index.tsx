import './index.css';
import React, { Fragment } from 'react';
import { bootstrp } from '@typeclient/core';
import { ReactApplication } from '@typeclient/react-sapp';
import { App } from './App';
import * as serviceWorker from './serviceWorker';


const app = new ReactApplication(document.getElementById('root'));

app.render(App);
app.onError((err, ctx?) => {
  return <Fragment>
    <h1>TypeClient Catch Error:</h1>
    { ctx ? <p>Path: {ctx.req.pathname}</p> : null }
    <p><strong>Message</strong></p>
    <pre>{err.stack}</pre>
  </Fragment>
});

bootstrp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
