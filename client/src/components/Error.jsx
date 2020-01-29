import React from 'react';
import {Link} from 'react-router-dom'
import video from '../assets/video.mp4'

const ErrorPage = () => {
    return (
        <div className="error">
            <div className="error-content">
                <h2 className="display-3">Error 404</h2>
                <h6>Page Not Found</h6>
                <span className="text-lead display">
                    Click <Link className="text-danger" to='/'>Here</Link> to go Home
                </span>
            </div>
        </div>
    )
}

export default ErrorPage
