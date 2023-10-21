import '../styles/AOC2023.css';
import adventOfCode from '../assets/adventofcode.png';
import Nav from '../components/nav';
import { useEffect, useState } from 'react';

function App() {
    const [differenceObj, setDifferenceObj] = useState({});

    let day = parseInt(window.location.pathname.split('/').pop());
    let endDate = new Date();
    endDate.setFullYear(2023, 11, day);
    endDate.setHours(5, 0, 0);

    useEffect(() => {
        updateTime();
        const interval = setInterval(() => updateTime(Date.now()), 1000);
        return () => {
            clearInterval(interval);
        };
    }, [])

    function updateTime() {
        let startDate = new Date();
        let differenceSeconds = (endDate.getTime() - startDate.getTime()) / 1000;
        const days = Math.floor(differenceSeconds / (60 * 60 * 24));
        const hours = Math.floor(differenceSeconds / (60 * 60) - days * 24);
        const minutes = Math.floor(differenceSeconds / 60 - hours * 60 - days * 24 * 60);
        const seconds = Math.floor(differenceSeconds - minutes * 60 - hours * 60 * 60 - days * 24 * 60 * 60);
        setDifferenceObj({ days, hours, minutes, seconds });
    }

    if (!Array.from(Array(25).keys()).includes(day - 1)) {
        return (<p>Unknown Day</p>)
    }

    return (
        <>
            <Nav />

            <main>
                <h1 className='title' src={adventOfCode}>Advent of Code - Day {day}</h1>
                <p className='aoc-day-status'>Will be released in {differenceObj.days} days, {differenceObj.hours} hours, {differenceObj.minutes} minutes, {differenceObj.seconds} seconds</p>
            </main>
        </>
    )
}

export default App
