/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import './home.css'
import Header from './components/header';
import { Link } from 'react-router-dom'

function App() {
  const [selectedTechnology, setSelectedTechnology] = useState(0);

  return (
    <main>
      <Header />
      <div className="section">
        <div className="container">
          <div className="hero">
            <h2 className="hero-introduction">Hi, my name is</h2>
            <h1 className="hero-name">Noah Dennis</h1>
            <p className="hero-para">
              I'm a software developer from the UK in my first year of college studying Computer
              Science, Maths, Further Maths, and Music Technology.
              I have a passion for building high-quality applications and working on challenging
              problems.
              <br /><br />
              I'm excited to continue building my skills and knowledge and I'm always looking for new ways to
              improve as a software developer.
            </p>

            <Link className="hero-cta" to="/projects">View my projects!</Link>
          </div>
        </div>
        <div className="container">
          <h2 className="technologies-heading">Technologies I've been using</h2>
          <p className="technologies-para">Here you can find a list of the technologies I have been using recently.</p>

          <div className="technologies-container">
            <ul id="technologies-list">
              <li onClick={() => setSelectedTechnology(0)} className={selectedTechnology == 0 ? "selected-technology-name" : ""}><span>Javascript</span></li>
              <li onClick={() => setSelectedTechnology(1)} className={selectedTechnology == 1 ? "selected-technology-name" : ""}><span>C#</span></li>
              <li onClick={() => setSelectedTechnology(2)} className={selectedTechnology == 2 ? "selected-technology-name" : ""}><span>ExpressJS</span></li>
              <li onClick={() => setSelectedTechnology(3)} className={selectedTechnology == 3 ? "selected-technology-name" : ""}><span>ReactJS</span></li>
              <li onClick={() => setSelectedTechnology(4)} className={selectedTechnology == 4 ? "selected-technology-name" : ""}><span>Java</span></li>
              <li onClick={() => setSelectedTechnology(5)} className={selectedTechnology == 5 ? "selected-technology-name" : ""}><span>SQL</span></li>
            </ul>
            <div id="selected-technology-item" style={{ translate: `0 ${selectedTechnology * 2.75}rem` }}></div>

            <div className="technologies-desc">
              <div id="technologies-titles">
                <h3 className={selectedTechnology == 0 ? "show" : ""}>Javascript</h3>
                <h3 className={selectedTechnology == 1 ? "show" : ""}>C#</h3>
                <h3 className={selectedTechnology == 2 ? "show" : ""}>ExpressJS</h3>
                <h3 className={selectedTechnology == 3 ? "show" : ""}>ReactJS</h3>
                <h3 className={selectedTechnology == 4 ? "show" : ""}>Java</h3>
                <h3 className={selectedTechnology == 5 ? "show" : ""}>SQL</h3>
              </div>
              <div id="technologies-descriptions">
                <p className={selectedTechnology == 0 ? "show" : ""}>JavaScript is my go-to programming language for the majority of my projects.
                  As it is very versatile and has wide support among the programming community, JavaScript has
                  empowered me to create many web applications using frameworks such as ExpressJS or React.
                  It has also allowed me to experiment with other app distribution types such as when I spent
                  time delving into mobile app development using React Native. JavaScript's ubiquity and
                  continual evolution makes it an essential tool in my programming arsenal!</p>

                <p className={selectedTechnology == 1 ? "show" : ""}>I have a strong foundation in C# due to it being taught as the main language in the college
                  Computer Science curriculum. I've come to the point of really enjoying to use C# for various
                  programming projects and it has proven its worth to me in various domains,
                  such as desktop applications, web development (using ASP.NET) and game development.
                  One of the main benefits I have started to appreciate about C# is its strong typing system
                  as it incredibly useful when working on larger scale projects as it enhances code
                  reliability. Additionally, I have found C#'s support for object-oriented programming
                  (OOP) very well implemented compared to Javascript therefore I will tend to prefer C# for
                  OOP intensive problems.</p>

                <p className={selectedTechnology == 2 ? "show" : ""}>ExpressJS Para, Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste asperiores
                  soluta qui suscipit
                  maiores pariatur recusandae distinctio iure veritatis et! Asperiores provident aut itaque
                  sapiente. Ipsam eius esse repudiandae itaque.</p>

                <p className={selectedTechnology == 3 ? "show" : ""}>ReactJS Para, Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste asperiores
                  soluta qui suscipit
                  maiores pariatur recusandae distinctio iure veritatis et! Asperiores provident aut itaque
                  sapiente. Ipsam eius esse repudiandae itaque.</p>

                <p className={selectedTechnology == 4 ? "show" : ""}>Java Para, Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste asperiores
                  soluta qui suscipit
                  maiores pariatur recusandae distinctio iure veritatis et! Asperiores provident aut itaque
                  sapiente. Ipsam eius esse repudiandae itaque.</p>

                <p className={selectedTechnology == 5 ? "show" : ""}>SQL Para, Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste asperiores
                  soluta qui suscipit
                  maiores pariatur recusandae distinctio iure veritatis et! Asperiores provident aut itaque
                  sapiente. Ipsam eius esse repudiandae itaque.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

  )
}

export default App
