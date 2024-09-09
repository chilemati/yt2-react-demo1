import React from "react";
import "./about.scss";
import chile from "../../assets/react.svg";
import fromPublic from "/vite.svg";
import { Image } from "cloudinary-react";
import { aboutData } from "./aboutData";
import {cloudName,imageCards} from '../../../data/about.json'

const About = () => {
  console.log(cloudName,imageCards)
  return (
    <div id="About">
      <h2>About</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, saepe
        beatae, cupiditate blanditiis dolor quidem assumenda itaque aliquam
        exercitationem magni corporis aspernatur? Est totam, delectus alias
        maxime fugiat veniam voluptates.
      </p>
      <h3>Our Services</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nam
        aliquam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nam
        aliquam.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nam
        aliquam.
      </p>
      <img src={chile} alt="chile vite" />
      <img src={fromPublic} alt="chile vite" />
      <Image cloudName={aboutData.cloudName} publicId={aboutData.image1.url} loading="lazy" className='w-full h-[80vh] ' />
      <Image cloudName={aboutData.cloudName} publicId={aboutData.image2.url} loading="lazy" width="400" height="300" />

      <div className="relative
       w-[50%] h-[40vh] bg-red-200 mx-auto my-5 shadow-lg flexCenterCol ">
        <p>Hover me</p>
        <div className="absolute left-0 top-0 w-full h-full bg-black flexCenterCol invisible group-hover:visible text-white ">
          I show on hover
        </div>
      </div>


    </div>
  );
};

export default About;
