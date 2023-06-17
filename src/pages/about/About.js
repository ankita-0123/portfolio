import React from 'react'
import PageHeaderContainer from '../../components/pageHeaderContainer/PageHeaderContainer';
import { BsInfoCircleFill } from 'react-icons/bs';
import { Animate } from "react-simple-animate";
import "./About.scss";
import {IoLogoJavascript} from "react-icons/io";
import { FaCss3Alt, FaReact } from "react-icons/fa"
import {AiFillHtml5} from "react-icons/ai";

const personalDetails = [
  {
    label: "Name :",
    value: "Pragyan Paramita Patra",
  },
  {
    label: "Age :",
    value: "23",
  },
  {
    label: "Address :",
    value: "Odisha",
  },
  {
    label: "Email :",
    value: "pragyanparamita1449@gmail.com",
  },
  {
    label: "Contact No :",
    value: "8637224474",
  },
];
const jobSummary =
  "To obtain a responsible position as a Frontend Developer in an innovative environment where I could invest my knowledge and upskill myself taking up new challenges and building best solutions.";
const About = () => {
  return (
    <section className='about'>
      <PageHeaderContainer
      headerText = "About Me"
      icon = {<BsInfoCircleFill size={30}/>}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Front End Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaCss3Alt size={50} color="var( ---yellow-theme-main-color)" />
              </div>
              <div>
                <IoLogoJavascript size={50} color="var( ---yellow-theme-main-color)" />
              </div>
              <div>
                <FaReact size={50} color="var( ---yellow-theme-main-color)" />
              </div>
              <div>
                <AiFillHtml5 size={50} color="var( ---yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>

  )
}

export default About;
