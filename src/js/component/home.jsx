import React from "react";
import { Input } from "./Input.jsx";

//create your first component
const Home = () => {
	return (
		<div className="center">
			<h1>Todo</h1>
			<div className="container">
				<Input className="input"/>
			</div>
		</div>
	);
};

export default Home;