import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs"
import { skillsData } from "./utils";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import { Line } from "rc-progress";
import "./styles.css"
const Skills = () => {
    return (
        <section className="skills">
            <PageHeaderContent
                headerText="Skills"
                icon={<BsInfoCircleFill size={40} />}
            />

            <div className="skillsContent-Wrapper">
                {
                    skillsData.map((item, i) => {
                        return (
                            <div key={i} className="skills-InnerContent-Wrapper" >
                                <Animate
                                    play
                                    duration={1}
                                    delay={0.3}
                                    start={{
                                        transform: 'translateX(-200px)'
                                    }}
                                    end={{
                                        transform: 'translateX(0px)'
                                    }}
                                >

                                    <h3 className="skills-InnerContent-Wrapper-categoryText">{item.label}</h3>

                                    <div className="">
                                        {item.data.map((skillsItem, j) => {
                                            return (
                                                <AnimateKeyframes
                                                    play
                                                    duration={1}
                                                    delay={.3}
                                                    keyframes={["opacity: 1", "opacity:0"]}
                                                    iterationCount="1"
                                                >
                                                <div className="progressbar-wrapper" key={j}>
                                                   <p>{skillsItem.skillsName}</p>

                                                   <Line
                                                  percent={skillsItem.percentage} 
                                                  strokeWidth="2"
                                                  strokeColor="yellowgreen"
                                                  trailWidth="2"
                                                  strokeLinecap="square"
                                                   />

                                                </div>

                                                </AnimateKeyframes>
                                            )

                                        })}

                                    </div>
                                </Animate>
                            </div>
                        )

                    })
                }

            </div>
        </section>
    )
}

export default Skills