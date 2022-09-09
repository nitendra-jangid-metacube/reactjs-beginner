import React, { useState } from "react";
import CommentRight from "./CommentRight";

export default function CommentContent(props) {
    let [counter, setCounter] = useState(0);
    return (
        <div className="row border" style={{minHeight:'400px'}}>
            <div className="col-md-4 my-2">
                <ul className="nav nav-pills">
                    {props.commentData.map((value, index) => <li onClick={() => showDesc(index)} style={{cursor: 'pointer'}} class={"nav-item nav-link left-box border-bottom"+((index===counter)?' active':'')}>
                        <h5 className="m-1"> <img width='20' src={'assets/images/icon-chat-blue.png'} /> Comment {index+1}</h5>
                    </li>)}
                </ul>
            </div>
            <div className="col-md-8 text-bg-info">
                <CommentRight selectedComment={props.commentData[counter]}/>
            </div>
        </div>
    )
    
    function showDesc(index) {
        setCounter(index);
    }
}
