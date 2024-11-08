import React from "react";
import Ddivider from "../globals/divider/Ddivider";
import "./Healthy.css";
import Navbar from "../globals/Navbar/Navbar";
import rmuscle from "../../assets/healthy/r_body.png";
import body from "../../assets/healthy/body.png";
import Footer from "../globals/footer/Footer";

function Healthy() {
  return (
    <>
      <Navbar />
      <div className="healthy-container">
        <div className="tasty-content">
          <Ddivider />
          <h1>Our Beauty</h1>
          <Ddivider />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            fugiat delectus impedit laborum nulla at natus illum, nesciunt animi
            sit amet suscipit error in fugit molestias? Sint ipsam voluptate
            placeat! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Veritatis libero ipsa dignissimos voluptatem odit obcaecati quaerat
            asperiores ex aperiam sapiente reiciendis eaque quisquam quia
            voluptas quam optio, eligendi omnis. Quam.
          </p>
          <button>
            <svg
              width="35"
              height="35"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="30" cy="30" r="30" fill="white" fill-opacity="0.18" />
              <path
                opacity="0.5"
                d="M36.118 36.7233L30.6256 41.7939L30.6256 12H29.3744L29.3744 41.7939L23.882 36.7233L23 37.5376L30 44L37 37.5376L36.118 36.7233Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="recipes-container">
        <div className="recipes-title">
          <Ddivider />
          <h1>Our Recipes</h1>
          <Ddivider />
        </div>

        <div className="recipes-muscle">
          <div className="right-muscle">
            <img src={rmuscle} />
          </div>

          <div className="left-body">
            <span>test</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit sequi praesentium ut quis eligendi numquam pariatur
              nobis est aliquam asperiores? Facere tenetur amet laudantium iure
              eveniet necessitatibus maiores odio repellat?
            </p>
          </div>
        </div>

        <div className="recipes-body">
          <div className="left-body">
            <span>test</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit sequi praesentium ut quis eligendi numquam pariatur
              nobis est aliquam asperiores? Facere tenetur amet laudantium iure
              eveniet necessitatibus maiores odio repellat?
            </p>
          </div>
          <div className="right-body">
            <img src={body} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Healthy;
