import express from 'express'
import React from 'react';
import {ServerStyleSheet} from 'styled-components'
import { renderToString} from 'react-dom/server';
import { StaticRouter} from 'react-router-dom/server';
import App from './src/App';
const path = require("path");
const fs = require("fs");

const app = express()

app.use(express.static('./build', {index:false}))

app.get('/*', (req,res)=>{
const sheet = new ServerStyleSheet()

const reactApp = renderToString(
    sheet.collectStyles(
        <StaticRouter location = {req.url}>
            <App />
        </StaticRouter>
    )
        
    )

    const templateFile = path.resolve('./build/index.html')
    fs.readFile(templateFile, 'utf-8', (err, data)=>{
        if(err){
            
           console.log(err)
        }
        return res.send(data.replace('<div id ="root"></div>',`<div id = "root">${reactApp}</div>`).replace('{{ styles}}',sheet.getStyleTags()))
    })
});



app.listen(8080, ()=>{ console.log("Server listening at port 8080");})