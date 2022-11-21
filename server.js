import 'isomorphic-fetch'
import express from 'express'
import React from 'react';
import { ServerStyleSheet } from 'styled-components'
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './src/App';
import { InitialDataContext } from './src/InitialDataContext';
const path = require("path");
const fs = require("fs");

global.window = {}

const app = express()

app.use(express.static('./build', { index: false }))
const articles = [
    { title: 'Article1', author: 'Pasang' },
    { title: 'Article2', author: 'Eroc' },
    { title: 'Article3', author: 'Mohko' },
];

app.get('/api/articles', (req, res) => {
    res.json(articles)
})

app.get('/*', async(req, res) => {
    const sheet = new ServerStyleSheet()

    const contextObj = { _isServerSide: true, _requests:[], _data:{}}

     renderToString(
        sheet.collectStyles(
            <InitialDataContext.Provider value = {contextObj}>
                <StaticRouter location={req.url}>
                    <App />
                </StaticRouter>
            </InitialDataContext.Provider>
            )
            )

    await Promise.all(contextObj._requests)
    contextObj._isServerSide = false
    delete contextObj._requests

    const reactApp = renderToString(
        sheet.collectStyles(
            <InitialDataContext.Provider value = {contextObj}>
                <StaticRouter location={req.url}>
                    <App />
                </StaticRouter>
            </InitialDataContext.Provider>
            )
            )

    const templateFile = path.resolve('./build/index.html')
    fs.readFile(templateFile, 'utf-8', (err, data) => {
        if (err) {

            console.log(err)
        }

        return res.send(data.replace('<div id ="root"></div>', `<script>window.preloadedData = ${JSON.stringify(contextObj)};</script> <div id = "root">${reactApp}</div>`).replace('{{ styles}}', sheet.getStyleTags()))
    })
});



app.listen(8080, () => { console.log("Server listening at port 8080"); })