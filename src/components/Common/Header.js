import * as React from "react";
import { Link } from "react-router-dom";

export default function Header() {
return (
	<nav className="navbar navbar-expand-lg navbar-dark bg-info mb-5">
		<div className="container-fluid">
			<a className="navbar-brand text-dark" href="#">ReactJS</a>
			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarScroll">
			<ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
				<li className="nav-item">
					<Link className="nav-link text-dark" aria-current="page" to={"/timer"}>Timer</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link text-dark" aria-current="page" to={"/blog"}>Blog</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link text-dark" aria-current="page" to={"/comment"}>Comment</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link text-dark" aria-current="page" to={"/user-form"}>User Form</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link text-dark" aria-current="page" to={"/todo/list"}>ToDo</Link>
				</li>
			</ul>
			</div>
		</div>
		</nav>
);
}