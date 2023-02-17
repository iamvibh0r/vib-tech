import React from "react";
import vg from "../assests/svg.svg";
import { AiFillGoogleCircle , AiFillAmazonCircle , AiFillYoutube , AiFillInstagram } from "react-icons/ai"

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Vib-Tech</h1>
          <p>Solution to all your Problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase to
            problem solving ability in children.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            LET’S INTRODUCE ABOUT MYSELF As a Full Stack developer intern at
            ICEICO TECHNOLOGIES PVT.LTD, I am eager to learn and grow in the
            field of web development. My passion for technology and commitment
            to delivering high-quality solutions make me a valuable asset for
            any project. Based in Nagpur, Maharashtra, India, I am taking
            advantage of this opportunity to work with experienced professionals
            to hone my skills and gain a deeper understanding of the industry.
            My expertise in various technologies, including (provide the
            technologies you know) , gives me the confidence to tackle any
            challenge and deliver outstanding results. I am highly motivated,
            results-driven, and always strive to exceed expectations.
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{ animationDelay:"0.3s" }}>
                    <AiFillGoogleCircle />
                    <p>Google</p>
                </div>
                <div style={{ animationDelay:"0.5s" }}>
                    <AiFillAmazonCircle />
                    <p>Amazon</p>
                </div>
                <div style={{ animationDelay:"0.7s" }}>
                    <AiFillYoutube />
                    <p>Youtube</p>
                </div>
                <div style={{ animationDelay:"0.9s" }}>
                    <AiFillInstagram />
                    <p>Instagram</p>
                </div>
            </article>
        </div>
      </div>
    </>
  );
};

export default Home;
