import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs"
import { Animate } from "react-simple-animate";
import "./styles.css"
const Contact = () => {
    return (
        <section className="contact">
            <PageHeaderContent
                headerText="Contact me"
                icon={<BsInfoCircleFill size={40} />}
            />


            <div className="contact-content">
                <Animate
                    play
                    duration={1}
                    delay={0.3}
                    start={{
                        transform: "translateX(-200px)"
                    }}

                    end={{
                        transform: "translateX(0px)"
                    }}
                >

                    <h3 className="contact-content-header-text">Let's Talk</h3>

                </Animate>

                <Animate
                    play
                    duration={1}
                    delay={0.3}
                    start={{
                        transform: "translateX(200px)"
                    }}

                    end={{
                        transform: "translateX(0px)"
                    }}
                >

                    <div className="contact-content-form">

                        <div className="contact-content-form-controls-wrapper">
                            <div>
                                <input required name="name" className="inputName" type="text" />
                                <label htmlFor="name" className="nameLabel">Name</label>
                            </div>
                            <div>
                                <input required name="email" className="inputEmail" type="text" />
                                <label htmlFor="email" className="emailLabel">Email</label>
                            </div>
                            <div>
                                <textarea required name="description" className="inputDescription" type="text" rows="5" />
                                <label htmlFor="description" className="descriptionLabel">Description</label>
                            </div>
                        </div>

                        <button className="contact-button">Submit</button>

                    </div>

                </Animate>


            </div>

        </section>


    )
}

export default Contact