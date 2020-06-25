import React from "react";
import Lottie from "lottie-react-web";
import {
   FaUtensils,
   FaBasketballBall,
   FaCar,
   FaCalendarAlt,
   FaLaptopCode,
   FaGraduationCap,
   FaBookReader,
   FaUserTie,
   FaArrowCircleRight,
} from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";

import Navbar from "./components/Navbar";

import dinoAnimation from "./assets/dino.json";
import "./App.scss";
import "./components/Button.scss";

import circleShadow from "./assets/circle-shadow-png-2-original.png";

function App() {
   return (
      <div className="App">
         <Navbar />

         <div className="header-wrapper">
            <section className="header">
               <div className="hero">
                  <h1 className="super">
                     Change the way you interact with the world.
                  </h1>
                  <p>
                     It's time to stop the endless search through your school's
                     website, starting with <b>Drexel University</b>.
                  </p>
               </div>
               <AnchorLink
                  href="#learn-more"
                  class="fancy-button large blueHole zoom half-left-rounded"
               >
                  LEARN MORE
               </AnchorLink>
            </section>
         </div>
         <div className="sections">
            <section className="introduction" id="learn-more">
               <h1>Meet Mario (the Magnificent)</h1>
               <div className="info">
                  Mario is Drexel's magical assistant. You can reach him
                  anywhere at any time! He helps with scheduling appointments,
                  booking room reservations at Drexel facilities, and much more.
                  Check out his skills below, and try our{" "}
                  <AnchorLink href="#mario-demo">
                     <b>demo</b>
                  </AnchorLink>{" "}
                  today!
               </div>
               <div className="animation">
                  <Lottie
                     style={{
                        width: "400px",
                        margin: "0",
                        filter: "drop-shadow( 3px 3px 1px rgba(0, 0, 0, .7))",
                        position: "relative",
                        zIndex: 1,
                     }}
                     options={{
                        animationData: dinoAnimation,
                     }}
                  />
                  <img src={circleShadow} alt="" />
               </div>
            </section>

            <section className="features">
               <div className="card">
                  <FaUserTie className="icon" />
                  <h2>Simple Appointments</h2>
                  <p>
                     We know Drexel students are very busy. Professors are
                     sometimes difficult to reach. You can ask Mario to request
                     appointments from professors, advisors, and other faculty
                     at the blink of an eye.
                  </p>
               </div>
               <div className="card">
                  <FaBookReader className="icon" />
                  <h2>Room Reservations</h2>
                  <p>
                     Do you need to reserve a room for a group meeting or maybe
                     just homework? Mario can do that for you! Just specify the
                     building, date, and time; he’ll take care of the rest!
                  </p>
               </div>
               <div className="card">
                  <FaLaptopCode className="icon" />
                  <h2>CO-OP/Internships</h2>
                  <p>
                     One of the biggest attractions of Drexel is the CO-OP
                     program. Many prospective students would appreciate more
                     information about it on the fly. Mario knows all about it
                     and would love to help!
                  </p>
               </div>
               <div className="card">
                  <FaCalendarAlt className="icon" />
                  <h2>Schedule Information</h2>
                  <p>
                     When is finals week? When is spring break? We know those
                     questions are always running through students’ and parents’
                     minds. Mario can easily answer those questions and more
                     about academic dates.
                  </p>
               </div>
               <div className="card">
                  <FaCar className="icon" />
                  <h2>Campus Parking</h2>
                  <p>
                     Parking is a nightmare in the city, especially if you don't
                     want to pay for indoor parking on campus. Mario is able to
                     suggest least-congested areas for parking, depending on
                     live availablity!
                  </p>
               </div>

               <div className="card">
                  <FaBasketballBall className="icon" />
                  <h2>Events</h2>
                  <p>
                     Drexel campus has an incredible amount of events, such as
                     basketball games, trivia nights and exciting club meetings.
                     Feel free to ask Mario about any of these things!
                  </p>
               </div>
               <div className="card">
                  <FaUtensils className="icon" />
                  <h2>Food Trucks</h2>
                  <p>
                     One of the bonuses of living in the city are the incredibly
                     diverse food trucks. Mario's favorite is Wokworks, but he
                     can help you out no matter your culinary preference!
                  </p>
               </div>
               <div className="card">
                  <FaGraduationCap className="icon" />
                  <h2>General Questions</h2>
                  <p>
                     Mario is extremely smart. Feel free to ask him any
                     questions about Drexel and its incredible programs such as
                     majors, the co-op tracks and much more!
                  </p>
               </div>
            </section>
         </div>

         <section className="demo">
            <div className="container">
               <div className="text" id="mario-demo">
                  <div className="talk">
                     <h2>Want to talk to Mario?</h2>
                     <h3>Here are some examples requests/questions</h3>
                  </div>

                  <ul>
                     <li>Get me a room at the library</li>
                     <li>When do the Dragons play next?</li>
                     <li>When was Drexel founded?</li>
                     <li>Book me an appointment with Professor Alonso</li>
                     <li>What are the best food trucks around campus?</li>
                     <li>Where should I park on campus?</li>
                     <li>
                        What is the difference between the 4 and 5 year track?
                     </li>
                     <li>What time does the library close?</li>
                     <li>What majors are there at Drexel?</li>
                     <li>
                        Get me a room at LeBow College of Business for 4PM
                        tomorrow
                     </li>
                     <li>
                        What is the maximum number of credits that I will be
                        able to transfer into Drexel?
                     </li>
                  </ul>

                  <div className="contactMario">
                     <h3 className="call">
                        Give him a call at <span>(484) 228-1825</span> or use
                        the chatbox!
                     </h3>
                  </div>
               </div>
               <div className="chat">
                  <div className="cover">
                     <Lottie
                        style={{
                           // width: '380px',
                           height: "120px",
                           width: "120px",
                           margin: "0",
                           padding: 0,
                           position: "relative",
                           left: "20px",
                           zIndex: 1,
                        }}
                        options={{
                           animationData: dinoAnimation,
                        }}
                     />
                     <h3>Drexel's Magical Assistant</h3>
                  </div>
                  <iframe
                     class="chatBox"
                     allow="microphone;"
                     width="380"
                     height="520"
                     src="https://console.dialogflow.com/api-client/demo/embedded/ea35979e-86a6-4356-9ead-f84e2435abbe"
                  ></iframe>
               </div>
            </div>
         </section>
         <div className="footer-break" />
         <footer>
            <p>
               Made with ❤️@ <a href="https://dragonhacks.org/">DragonHacks</a>
            </p>
         </footer>
      </div>
   );
}

export default App;
