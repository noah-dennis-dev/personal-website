/* eslint-disable react/no-unescaped-entities */
import './projects.css'
import GithubLogo from './assets/github.svg';
import Header from './components/header';
import { Link } from 'react-router-dom';

function Projects() {
    return (
        <main>
            <Header />

            <div className="container">
                <h1 className="heading">Projects</h1>
                <p className="desc">Here you can find the projects I have worked on.</p>

                <div className="github">
                    <div className="github-icon-container">
                        <img className="github-icon" src={GithubLogo} draggable="false" />
                    </div>
                    <div className="github-info-container">
                        <p className="github-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam hic nemo
                            dolores, nobis accusantium quisquam, saepe adipisci aliquam consequuntur temporibus quae, sit
                            officia cumque libero? Modi beatae voluptatem accusantium corporis.</p>

                        <Link to="https://github.com/noah-dennis-dev" target="_blank" rel='noreferrer' className="github-cta">View My Github
                            Profile</Link>
                    </div>
                </div>


                <div className="projects-container">
                    <div className="project">
                        <div className="project-text">
                            <h3>Project Name 1</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet quo, fugit voluptas,
                                reprehenderit, voluptatibus quia libero quis non culpa maiores possimus perspiciatis at
                                voluptates dolore esse minus eaque soluta.</p>

                            <div className="action-buttons">
                                <Link className="btn-src" to="#">Source code</Link>
                                <Link className="btn-live" to="#">Live demo</Link>
                                <Link className="btn-desc" to="#">Detailed description</Link>
                            </div>
                        </div>

                        <img
                            src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    </div>

                    <div className="project">
                        <div className="project-text">
                            <h3>Project Name 2</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet quo, fugit voluptas,
                                reprehenderit, voluptatibus quia libero quis non culpa maiores possimus perspiciatis at
                                voluptates dolore esse minus eaque soluta.</p>

                            <div className="action-buttons">
                                <Link className="btn-src" to="#">Source code</Link>
                                <Link className="btn-desc" to="#">Detailed description</Link>
                            </div>
                        </div>

                        <img
                            src="https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    </div>

                    <div className="project">
                        <div className="project-text">
                            <h3>Project Name 3</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet quo, fugit voluptas,
                                reprehenderit, voluptatibus quia libero quis non culpa maiores possimus perspiciatis at
                                voluptates dolore esse minus eaque soluta.</p>

                            <div className="action-buttons">
                                <Link className="btn-src" to="#">Source code</Link>
                                <Link className="btn-live" to="#">Live demo</Link>
                            </div>
                        </div>

                        <img
                            src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    </div>

                </div>
            </div>
        </main>

    )
}

export default Projects
