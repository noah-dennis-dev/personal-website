import '../styles/AOC2023.css';
import Nav from '../components/nav';
import { useState, useEffect } from 'react';

function App() {
    const [differenceObj, setDifferenceObj] = useState({});

    let endDate = new Date();
    endDate.setFullYear(2023, 11, 1);
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


    return (
        <>
            <Nav />

            <main>
                <h1 className='title'>Advent of Code</h1>
                <p className='aoc-para'><a href='https://adventofcode.com/' className='text-green'>Advent of Code</a> is an annual set of Christmas-themed computer programming challenges that follow an Advent calendar. The programming puzzles cover a variety of skill sets and skill levels and can be solved using any programming language.<br /><br />
                    This year, in <span className='glow'>2023</span>, I will be taking part in the challenge and uploading my solutions and thoughts to each of the problems.</p>


                <table className='aoc-table'>
                    <thead>
                        <tr>
                            <th>Day</th>
                            <th>Status</th>
                            <th>Page</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from(Array(25).keys()).map((i) => {
                            return (<tr key={i + 1}>
                                <td>Day {i + 1}</td>
                                <td>{differenceObj.days + i > -1 ? `Will be released in ${differenceObj.days + i} days, ${differenceObj.hours} hours, ${differenceObj.minutes} minutes, ${differenceObj.seconds} seconds` : 'Released'}</td>
                                <td><a className='aoc-day-page' href={`/advent-of-code-2023/${i + 1}`}>Visit Page</a></td>
                            </tr>)
                        })}

                    </tbody>
                </table>
            </main>
        </>
    )
}

export default App
