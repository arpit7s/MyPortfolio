import React from 'react';
import './MyLatestWork.css';
import quote from "../../../src/assets/quote.jpeg";
import resume from "../../../src/assets/resume.png";
import whether from "../../../src/assets/whether.jpeg";
import task from "../../../src/assets/task.png";
import timer from "../../../src/assets/timer.png";
import spotify from "../../../src/assets/spotify.png";
const MyLatestWork = () => {
    return (
        <div id="portfolio" className="container">
            <h2 className="title">My Latest Work</h2>
            <div className="work-grid">
                <a href="https://mavericks-cv.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <div className="card">
                        <img src={resume} alt="Resume_Builder" />
                        <div className="card-content">
                            <h3>Build professional resumes with tailored templates and expert advice.</h3>
                            <div className="links">
                                <a href="https://mavericks-cv.netlify.app/" target="_blank" rel="noopener noreferrer">Live Site</a>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/arpit7s/SpotifyClone" target="_blank" rel="noopener noreferrer">
                    <div className="card">
                        <img src={spotify} alt="spotify" />
                        <div className="card-content">
                            <h3>Spotify is a popular music streaming service that allows users to access a vast library of songs, albums, and podcasts.</h3>
                            <div className="links">
                                <a href="https://github.com/arpit7s/SpotifyClone" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="https://fabulous-marigold-3489fc.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <div className="card">
                        <img src={task} alt="task" />
                        <div className="card-content">
                            <h3>A task manager is a productivity tool that helps users organize, track, and manage their tasks and responsibilities.</h3>
                            <div className="links">
                                <a href="https://github.com/arpit7s/TaskManager" target="_blank" rel="noopener noreferrer">GitHub</a>
                                <a href="https://fabulous-marigold-3489fc.netlify.app/" target="_blank" rel="noopener noreferrer">Live Site</a>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="https://stately-alfajores-51f10f.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <div className="card">
                        <img src={timer} alt="timer" />
                        <div className="card-content">
                            <h3>A timer is a device or software application that counts down or counts up to measure time.</h3>
                            <div className="links">
                                <a href="https://github.com/arpit7s/Timer_Application" target="_blank" rel="noopener noreferrer">GitHub</a>
                                <a href="https://stately-alfajores-51f10f.netlify.app/" target="_blank" rel="noopener noreferrer">Live Site</a>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/arpit7s/Quotes" target="_blank" rel="noopener noreferrer">
                    <div className="card">
                        <img src={quote} alt="quotes" />
                        <div className="card-content">
                            <h3>A quote is a statement or expression that is repeated or cited, often because it holds significant meaning, wisdom, or insight.</h3>
                            <div className="links">
                                <a href="https://github.com/arpit7s/Quotes" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="https://github.com/arpit7s/wheatherappNodejs" target="_blank" rel="noopener noreferrer">
                    <div className="card">
                        <img src={whether} alt="whether" />
                        <div className="card-content">
                            <h3>Event-Driven State Chart for Weather Application</h3>
                            <div className="links">
                                <a href="https://github.com/arpit7s/wheatherappNodejs" target="_blank" rel="noopener noreferrer">GitHub</a>
                            </div>
                        </div>
                    </div>
                </a>
            </div>

            <button className="get-more-btn">
                Show More →
            </button>

        </div>
    );
};

export default MyLatestWork;
