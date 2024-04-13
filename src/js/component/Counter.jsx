import React from "react";
import { useState, useEffect } from "react";


const Clock = () => {

    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [hours, setHours] = useState(0)
    const [isOn, setIsOn] = useState(true)

    const formatTime = (time) => String(time).padStart(2, '0');


    useEffect(() => {
        if (isOn) {
            const intervalTime = setInterval(() => {
                setSeconds(prevSeconds => (prevSeconds + 1) % 60);
            }, 1000);

            return () => clearInterval(intervalTime);
        };
    }, [isOn]);

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


    const handleStop = () => {
        isOn ? setIsOn(false) : ""
    }
    const handleResume = () => {
        !isOn ? setIsOn(true) : ""
    }
    const handleReset = () => {
        setSeconds(0)
        setHours(0)
        setMinutes(0)
    }

    return (
        <div>
            <div className="d-flex bg-dark justify-content-center">
                <p className="card fw-bold fs-1 p-4 py-5 m-3 bg-light">{formatTime(hours)}</p>

                <p className="card fw-bold fs-1 p-4 py-5 m-3 bg-light">{formatTime(minutes)}</p>

                <p className="card fw-bold fs-1 p-4 py-5 m-3 bg-light">{formatTime(seconds)}</p>

                <div className="card p-4 py-5 m-3 bg-light" >
                    <svg className="pt-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" /></svg>
                </div>
            </div>
            <div className="bg-dark p-3 d-flex justify-content-center gap-2">
                <button onClick={handleStop} className="btn btn-danger px-3">STOP</button>
                <button onClick={handleResume} className="btn btn-success px-3">RESUME</button>
                <button onClick={handleReset} className="btn btn-primary px-3">RESET</button>
            </div>
        </div>
    )
}

export default Clock;