import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import{BsInfoCircleFill} from "react-icons/bs"
const Contact = ()=>{
    return(
        <section className="contact">
           <PageHeaderContent 
           headerText="Contact me"
           icon ={<BsInfoCircleFill size={40}/>}
           />
        </section>
    )
}

export default Contact