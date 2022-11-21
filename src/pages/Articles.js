
import  React from "react";
import { useDataSSR } from "../useDataSSR";

export const Articles = () => {
    const articles = useDataSSR('articles', ()=>{
           return fetch('http://localhost:8080/api/articles').then(response => response.json())  
    })
    
     
    return (
        <>
        <h1>Articles</h1>
        {articles && articles.map(art => (
            <div key={art.title}>
                <h4>{art.title}</h4>
                <h4>{art.author}</h4>
            </div>
            ))}
       </>
        
);
}