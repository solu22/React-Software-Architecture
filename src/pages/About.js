import React, { useState, lazy, Suspense } from "react";
import ErrorBoundary from "../ErrorBoundary";
// import Test1 from "../components/Test1";
// import Test2 from "../components/Test2";

const Test1 = lazy(() => import('../components/Test1'))
const Test2 = lazy(() => import('../components/Test2'))


export const About = () => {
    const [show, setShow] = useState(false)
    return (
        <>
            <h1>About</h1>
            {show && (
                <ErrorBoundary>
                    <Suspense fallback={<p>loading components</p>}>
                    <Test1 />
                    <Test2 />
                </Suspense>
                </ErrorBoundary>
                
            )}
            <button onClick={()=> setShow(!show)}>Show components</button>
        </>
    )
}

export default About