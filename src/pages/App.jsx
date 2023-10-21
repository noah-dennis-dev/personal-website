import '../styles/App.css';
import adventOfCode from '../assets/adventofcode.png';
import Nav from '../components/nav';

function App() {


  return (
    <>
      <Nav />

      <main>
        <section className='hero'>
          <h1 className='hero-title'>NOAH DENNIS</h1>
          <p className='hero-para'>
            I'm a software engineer from the UK in my second year of college studying Computer Science, Maths, Further Maths, and Music Technology.
            I have a passion for building high-quality applications and finding unique solutions to complex problems.
          </p>
        </section>

        <section className='aoc-section'>
          <img className='aoc-logo' src={adventOfCode} />
          <div>
            <p className='aoc-para'><a href='https://adventofcode.com/' className='text-green'>Advent of Code</a> Advent of Code is an annual set of Christmas-themed computer programming challenges that follow an Advent calendar. The programming puzzles cover a variety of skill sets and skill levels and can be solved using any programming language.<br /><br />
              This year, in <span className='glow'>2023</span>, I will be taking part in the challenge and uploading my solutions and thoughts to each of the problems.</p>
            <a href='/advent-of-code-2023' className='aoc-cta'>Visit my AoC page</a>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
