import React from "react";
import './Error.scss';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

const ErrorPage = () => {
    return (
        <div className="errorpage">
            <div className="error">
                <h1>ERROR <span className="code">404</span></h1>
                <h3>Page not found...</h3>
                <Button variant="outlined"><Link className="linkHome" to={'/'}>HOME</Link></Button>
            </div>
        </div>
    )
}

export default ErrorPage;