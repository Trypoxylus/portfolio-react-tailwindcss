import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <header className="text-gray-700 border-b border-gray-200">
        <div className="container flex mx-auto p-5 flex-col md:flex-row items-center">
          <a href="a" className="font-medium text-gray-900 mb-4 md:mb-0">
            <span className="text-xl ml-3">JCode</span>
          </a>
          <nav className="md:ml-auto text-base">
            <a href="#home" className="mr-5 hover:text-blue-300 duration-300">
              Home
            </a>
            <a href="#about" className="mr-5 hover:text-blue-300 duration-300">
              About
            </a>
            <a href="#skills" className="mr-5 hover:text-blue-300 duration-300">
              Skills
            </a>
            <a href="#contact" className="hover:text-blue-300 duration-300">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section>
        <div>
          <div>
            <h1>
              Hi,
              <br />
              I'm JCode
              <br />
              Web Developer.
            </h1>
            <p></p>
            <button></button>
          </div>
          <div></div>
        </div>
      </section>
    </>
  );
}

export default App;
