import { useState } from "react";
import "./App.css";
import ReactMarkdown from "react-markdown";
import avatar from "./assets/avatar.jpg";

function App() {
  const [markdown, setMarkdown] = useState();
  import("./md/josepht273.md").then((res) => {
    fetch(res.default)
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  });

  return (
    <>
      <div className="container">
        <div className="contentCenter">
          <img src={avatar} className="round" alt="Joseph Tadesse" />
          <ul>
            <h2>Joseph Tadesse</h2>
            <li>
              Hey their👋, My name is Joseph Tadesse AKA JosephT273. I&apos;m
              Junior full stack developer.
            </li>
            <li className="link">
              <a href="https://linktr.ee/josepht273">JosephT273 Linktree</a>
            </li>
          </ul>
        </div>
        <ReactMarkdown className="markdown">{markdown}</ReactMarkdown>
      </div>
      <div className="socialLinks">
        <a href="https://facebook.com/jospht273">
          <i className="fa fa-brands fa-facebook"></i>
        </a>

        <a href="https://x.com/josepht273">
          <i className="fa fa-brands fa-twitter"></i>
        </a>

        <a href="https://linkedin.com/in/josepht273">
          <i className="fa fa-brands fa-linkedin"></i>
        </a>

        <a href="https://instagram.com/joe.tade">
          <i className="fa fa-brands fa-instagram"></i>
        </a>

        <a href="https://reddit.com/user/josepht273">
          <i className="fa reddit fa-brands fa-reddit"></i>
        </a>
        <a href="https://t.me/josepht273">
          <i className="fa fa-brands fa-telegram"></i>
        </a>
      </div>
    </>
  );
}

export default App;
