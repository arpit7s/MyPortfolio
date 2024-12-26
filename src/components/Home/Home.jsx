
import "./Home.css";
import Pic from '../../../src/assets/pic.jpg';

function Home() {
  return (
    <div id="home" className="container">
      <div className="content">
        <img
          src={Pic}
          alt="Arpit Patel"
          className="profile-pic"
        />
        <h1>
          <span class="uppercase">I&apos;</span><span class="lowercase">m</span> <span class="highlight">Arpit Patel,</span>
          <span class="text">frontend developer based in </span><span class="highlight">INDIA</span>.
        </h1>

        <p>
          As a fresher, I’m excited to apply my skills to real-world projects
          and contribute to creating dynamic web experiences. I am always eager
          to learn new technologies and techniques to improve my development skills.
          I enjoy problem-solving and taking on new challenges,
          and I am confident in my ability to adapt and grow as a developer.
        </p>
        <div className="buttons">
          <button className="btn connect">Connect with me</button>
          <a href="https://drive.google.com/file/d/1S4QKqAz4Grepfetnp9TB65sQ6fFkzOLS/view?usp=sharing" target="_blank">
            <button className="btn resume">My resume</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
