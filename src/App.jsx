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

      <section className="text-gray-700" id="home">
        <div className="flex containe mx-auto py-20 px-5 flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16 text-center md:text-left">
            <h1 className="text-3xl sm;text-6xl text-gray-900 font-medium mb-4">
              Hi,
              <br />
              I'm JCode
              <br />
              Web Developer.
            </h1>
            <p className="mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos maxime tempora animi odit! Quas eaque nesciunt vitae
              ea animi veniam optio, fugit corrupti, a, porro voluptas quisquam
              ipsam quasi debitis!
            </p>
            <button className="text-white bg-green-500 py-2 px-6 border-0 rounded text-lg">
              Contact
            </button>
          </div>
          <div className="md:w-1/2 lg:max-w-lg w-5/6">
            <img src="./img/icon.jpg" alt="" />
          </div>
        </div>
      </section>

      <section className="text-gray-700 border-t border-gray-200">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-2xl sm:text-3xl mb-2 text-gray-900">
              About Me
            </h1>
            <p className="pb-10">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusantium maxime aut perspiciatis minima eveniet recusandae
              tempora libero rem consequuntur veritatis. Amet assumenda deserunt
              dolor aspernatur nemo ab, provident molestiae deleniti!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet,
              facilis. Ipsa maiores esse est illo reprehenderit omnis repellat,
              distinctio fuga, aliquid nihil voluptates tempore unde assumenda
              dolorum enim officia dolores, cumque modi. Velit ipsam odit ea
              excepturi doloribus beatae ullam architecto soluta earum harum
              cumque suscipit quo, ab ipsa dolor voluptatibus quod! Quis, iusto
              eveniet. Aperiam laboriosam vitae cupiditate. Et obcaecati ab
              voluptatum similique, totam animi, dolor corporis ipsa reiciendis
              incidunt nihil aspernatur pariatur iusto! Adipisci voluptate
              accusamus inventore laborum blanditiis sed voluptas itaque
              perferendis eveniet, at, repudiandae perspiciatis rerum sit
              voluptatum tempora voluptatibus quisquam illo tempore cupiditate
              reiciendis. Quia?
            </p>
          </div>

          {/* div tag for cards */}
          <div className="flex flex-wrap">
            <div className="md:w-1/3 p-4">
              <div className="bg-green-100 rounded-lg p-8">
                <div className="flex items-center">
                  <div className="bg-gray-500 text-white rounded-full mr-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 17C14.2091 17 16 15.2091 16 13H8C8 15.2091 9.79086 17 12 17Z"
                        fill="currentColor"
                      />
                      <path
                        d="M10 10C10 10.5523 9.55228 11 9 11C8.44772 11 8 10.5523 8 10C8 9.44772 8.44772 9 9 9C9.55228 9 10 9.44772 10 10Z"
                        fill="currentColor"
                      />
                      <path
                        d="M15 11C15.5523 11 16 10.5523 16 10C16 9.44772 15.5523 9 15 9C14.4477 9 14 9.44772 14 10C14 10.5523 14.4477 11 15 11Z"
                        fill="currentColor"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium">
                    Web Developer
                  </h2>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores odio esse suscipit veritatis quae eveniet quos quis
                    totam deleniti sint.
                  </p>
                  <a href="#" className="flex mt-3 text-green-500">
                    Read more
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.0519 14.8285L13.4661 16.2427L17.7088 12L13.4661 7.7574L12.0519 9.17161L13.8804 11H6.34321V13H13.8803L12.0519 14.8285Z"
                        fill="currentColor"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M19.7782 19.7782C24.0739 15.4824 24.0739 8.51759 19.7782 4.22183C15.4824 -0.0739417 8.51759 -0.0739417 4.22183 4.22183C-0.0739417 8.51759 -0.0739417 15.4824 4.22183 19.7782C8.51759 24.0739 15.4824 24.0739 19.7782 19.7782ZM18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604C2.12132 9.15076 2.12132 14.8492 5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 p-4">
              <div className="bg-green-100 rounded-lg p-8">
                <div className="flex items-center">
                  <div className="bg-gray-500 text-white rounded-full mr-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 17C14.2091 17 16 15.2091 16 13H8C8 15.2091 9.79086 17 12 17Z"
                        fill="currentColor"
                      />
                      <path
                        d="M10 10C10 10.5523 9.55228 11 9 11C8.44772 11 8 10.5523 8 10C8 9.44772 8.44772 9 9 9C9.55228 9 10 9.44772 10 10Z"
                        fill="currentColor"
                      />
                      <path
                        d="M15 11C15.5523 11 16 10.5523 16 10C16 9.44772 15.5523 9 15 9C14.4477 9 14 9.44772 14 10C14 10.5523 14.4477 11 15 11Z"
                        fill="currentColor"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium">
                    Web Developer
                  </h2>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores odio esse suscipit veritatis quae eveniet quos quis
                    totam deleniti sint.
                  </p>
                  <a href="#" className="flex mt-3 text-green-500">
                    Read more
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.0519 14.8285L13.4661 16.2427L17.7088 12L13.4661 7.7574L12.0519 9.17161L13.8804 11H6.34321V13H13.8803L12.0519 14.8285Z"
                        fill="currentColor"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M19.7782 19.7782C24.0739 15.4824 24.0739 8.51759 19.7782 4.22183C15.4824 -0.0739417 8.51759 -0.0739417 4.22183 4.22183C-0.0739417 8.51759 -0.0739417 15.4824 4.22183 19.7782C8.51759 24.0739 15.4824 24.0739 19.7782 19.7782ZM18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604C2.12132 9.15076 2.12132 14.8492 5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 p-4">
              <div className="bg-green-100 rounded-lg p-8">
                <div className="flex items-center">
                  <div className="bg-gray-500 text-white rounded-full mr-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 17C14.2091 17 16 15.2091 16 13H8C8 15.2091 9.79086 17 12 17Z"
                        fill="currentColor"
                      />
                      <path
                        d="M10 10C10 10.5523 9.55228 11 9 11C8.44772 11 8 10.5523 8 10C8 9.44772 8.44772 9 9 9C9.55228 9 10 9.44772 10 10Z"
                        fill="currentColor"
                      />
                      <path
                        d="M15 11C15.5523 11 16 10.5523 16 10C16 9.44772 15.5523 9 15 9C14.4477 9 14 9.44772 14 10C14 10.5523 14.4477 11 15 11Z"
                        fill="currentColor"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium">
                    Web Developer
                  </h2>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolores odio esse suscipit veritatis quae eveniet quos quis
                    totam deleniti sint.
                  </p>
                  <a href="#" className="flex mt-3 text-green-500">
                    Read more
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.0519 14.8285L13.4661 16.2427L17.7088 12L13.4661 7.7574L12.0519 9.17161L13.8804 11H6.34321V13H13.8803L12.0519 14.8285Z"
                        fill="currentColor"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M19.7782 19.7782C24.0739 15.4824 24.0739 8.51759 19.7782 4.22183C15.4824 -0.0739417 8.51759 -0.0739417 4.22183 4.22183C-0.0739417 8.51759 -0.0739417 15.4824 4.22183 19.7782C8.51759 24.0739 15.4824 24.0739 19.7782 19.7782ZM18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604C2.12132 9.15076 2.12132 14.8492 5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-700 border-t border-gray-200">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          {/*left side*/}
          <div>
            <img src="./img/pc-portfolio.jpg" alt="" className="rounded" />
          </div>
          {/*right side*/}
          <div>
            <h1>My Skills</h1>
            <div>
              <h2>HTML, CSS</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
