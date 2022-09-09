import React, { useState } from "react";

export default function CommentRight(props) {
    return (
        <><h3 className="pt-3">
            <img width='30' src={'assets/images/icon-chat-red.png'} /> {props.selectedComment.commentTitle}
        </h3>
        <hr />
        <div className="col h-auto text-left">
            {props.selectedComment.commentDesc}
        </div></>
    )
}
