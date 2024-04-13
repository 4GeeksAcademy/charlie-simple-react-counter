import React from "react";
import { useState, useEffect } from "react";
import Clock from "./Counter";



//create your first component
const Home = () => {

	const [seconds, setSeconds] = useState(0)
	const [minutes, setMinutes] = useState(0)
	const [hours, setHours] = useState(0)


	useEffect(() => {
		const intervalTime = setInterval(() => {
			setSeconds(prevSeconds => (prevSeconds + 1) % 60);
			if (seconds === 59) {
				setMinutes(prevMinutes => (prevMinutes + 1) % 60);
			}
		}, 1000);

		return () => clearInterval(intervalTime);
	}, []);

	useEffect(() => {
		if (seconds === 59) {
			setMinutes(prevMinutes => (prevMinutes + 1) % 60);
		}
	}, [seconds]);

	useEffect(() => {
		if (minutes === 59) {
			setHours(prevHours => prevHours + 1);
		}
	}, [minutes]);


	return (
		<div className="text-center main-container">
			<Clock />
		</div>
	);
};

export default Home;
