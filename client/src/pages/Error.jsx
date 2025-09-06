import React from "react";
import './css/Error.css'

const Error = () => {
    return (
        <>
            <div className="simple-container">
                <h1 className="simple-title">404</h1>
                <p className="simple-message">Sorry, page not found</p>
                <div className="button-group">
                    <a href="/" className="simple-link">Go to Home</a>
                    <a href="/contact" className="simple-button">Report Error</a>
                </div>
            </div>
          
        </>
    )
};
export default Error;