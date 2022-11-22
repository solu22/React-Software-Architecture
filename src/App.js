import React, { lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom"
// import { Home } from "./pages/Home";
// import { About } from './pages/About';
// import { Articles } from './pages/Articles';
import styled from 'styled-components'

const BlueHeading = styled.h1`
color: blue;
font-size: 24px;
`
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Articles = lazy(() => import('./pages/Articles'))


function App() {
  return (
    <>
      <BlueHeading>Server Side Rendering Example</BlueHeading>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/articles">Articles</Link></li>
      </ul>
      <Suspense fallback = {<p>Loading----</p>}>
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles" element={<Articles />} />
        </Routes>
      </Suspense>

    </>
  );
}

export default App;
