import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs"
import { Animate } from "react-simple-animate";
import "./styles.css"
import { DiApple, DiAndroid } from "react-icons/di"
import { FaDev, FaDatabase } from "react-icons/fa"


const About = () => {

    const personalDetails = [
        {
            lablel: "Name",
            value: "Anup Gupta"
        },
        {
            lablel: "Age",
            value: "25"
        },
        {
            lablel: "Address",
            value: "Bangalore India"
        },
        {
            lablel: "Email",
            value: "anup7.tech@gmail.com"
        },
        {
            lablel: "Contact",
            value: "+918953425656"
        },
    ]
    const jobSummary = "I am a Frontend Developer with nearly 3 years of experience specializing in React.js and UI development. I have a strong proficiency in building responsive, user-centric web applications, with extensive experience in creating reusable React components, managing state with hooks, and integrating context APIs. I have a solid background in API integration, including making networking calls, fetching data from RESTful APIs, and handling asynchronous requests to optimize performance. In addition to my front-end skills, I am familiar with backend development in Node.js, building APIs using Express.js to create full-stack applications. I am proficient in JavaScript (ES6+) and Git for version control, and I am continuously expanding my expertise in the MERN stack to enhance my full-stack development capabilities."


    return (
        <section id="about" className="about">
            <PageHeaderContent
                headerText="About me"
                icon={<BsInfoCircleFill size={40} />}
            />


            <div className="about-content">
                <div className="about-content-personalWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: "tranlateY(-900px)"
                        }}
                        end={{
                            transform: "translateX(0px)"
                        }}

                    >
                        <h3>Front end Developer</h3>
                        <p>{jobSummary}</p>

                    </Animate>

                    <h3 className="personalInformation">Personal Information</h3>
                    <ul className="personalInformationUl">
                        {personalDetails.map((item, i) => {
                            return (
                                <li key={i}>
                                    <span className="title">{item.lablel}</span>
                                    <span className="value">{item.value}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <div className="about-content-servicesWrapper">

                    <div className="about-content-servicesWrapper-innerContent">
                        <div>
                            <FaDev color="yellowgreen" size={60} />
                        </div>
                        <div>
                            <FaDatabase color="yellowgreen" size={60} />
                        </div>
                        <div>
                            <DiApple color="yellowgreen" size={60} />
                        </div>
                        <div>
                            <DiAndroid color="yellowgreen" size={60} />
                        </div>
                    </div>

                </div>


            </div>





        </section>
    )
}

export default About