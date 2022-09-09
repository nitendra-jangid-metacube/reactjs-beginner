import React from "react";
import Avatar from "./Avatar";
import Content from "./Content";
import Social from "./Social";

export default function BlogCard(props) {
    return (
        <div className="row text-bg-info shadow p-3 mb-5 rounded">
            <Avatar post={props.post} />
            <Content post={props.post} />
            <Social post={props.post} />
        </div>
    )
}