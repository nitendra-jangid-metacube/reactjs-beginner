import React from "react";

export default function Content(props) {
    return (
        <div className="col-lg-9 text-left p-3">
            <h5 style={{textAlign: 'left'}}>{props.post.postTitle}</h5>
            <p style={{textAlign: 'left'}}>{props.post.postDesc}</p>
        </div>
    )
}