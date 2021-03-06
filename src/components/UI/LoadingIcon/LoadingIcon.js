import React from 'react';
export default function LoadingIcon(props) {
    return(
        <div className = "d-flex justify-content-center">
            <div className = {`spinner-border m-5 text-${props.theme}`} role="status">
                <span className = "sr-only"> Load... </span>
            </div>
        </div>
    );
}