import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

export function TutorialApp()
{
    const [access] = useState(new Date());
    return(
        <div className="container-fluid">
            <h3>Tutorial Home</h3>
            <p>Page Last Fetched on : {access.toLocaleTimeString()} </p>
            <BrowserRouter>
            <nav>
                <Link to="/">Home</Link> |
                <Link to="html">HTML</Link> |
                <Link to="css">CSS</Link> |
            </nav>
                <Routes>
                    <Route path="html" element={
                        <div>
                            <h5>HTML</h5>
                            <p>HTML is the standard markup language for Web pages. With HTML you can create your own Website</p>
                        </div>
                    } />

                    <Route path="css" element={
                        <div>
                            <h5>CSS</h5>
                            <p>CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed</p>
                        </div>
                    } />

                    <Route path="/" element={
                        <div>
                            <p>Tutorial Home - We provide HTML, CSS Tutorial</p>
                        </div>
                    } />
                   
                    <Route path="*"  element={
                        <div>
                            <code>Not Found : Tutorial You requested Not Found</code>
                        </div>
                    }/>

                </Routes>
            </BrowserRouter>
        </div>
    )
}
