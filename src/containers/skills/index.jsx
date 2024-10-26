import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import {BsInfoCircleFill} from "react-icons/bs"
const Skills = () => {
    return (
        <section className="skills">
            <PageHeaderContent
                headerText="Skills"
                icon={<BsInfoCircleFill size={40} />}
            />
        </section>
    )
}

export default Skills