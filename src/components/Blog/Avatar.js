import React from "react";

export default function Avatar(props) {
    return (
        <div className="col-lg-2">
            <img src={props.post.imgUrl} width="75" className="rounded-5 m-1" title={props.post.userName}/>
        </div>
    )
}