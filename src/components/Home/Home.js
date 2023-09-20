import React from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import classes from "./Home.module.css";

const Home = (props) => {
	return (
		<Card className={classes.home}>
			<h1>Welcome back!</h1>
			<Button className={classes.button} onClick={props.onLogout}>
				Sign Out
			</Button>
		</Card>
	);
};

export default Home;
