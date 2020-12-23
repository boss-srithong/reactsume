import React from 'react'
import {FaGithub} from "react-icons/fa";
const Services = () => {
        const [header] = React.useState({
            mainHeader: "SERVICES", 
            subHeading: "My Services", 
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempore veritatis porro alias, quae voluptates iste cum."
        });
        const [state] = React.useState([
            {
                id:1, 
                icon: "FaGithub",
                heading: "Web Development",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempore veritatis porro alias, quae voluptates iste cum.",
            },
            {
                id:2, 
                icon: "FaGithub",
                heading: "Photography",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempore veritatis porro alias, quae voluptates iste cum.",
            },
            {
                id:3, 
                icon: "FaGithub",
                heading: "Web Design",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempore veritatis porro alias, quae voluptates iste cum.",
            },
            {
                id:4, 
                icon: "FaGithub",
                heading: "FaGithub",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempore veritatis porro alias, quae voluptates iste cum.",
            },
            {
                id:5, 
                icon: "FaGithub",
                heading: "FaGithub",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempore veritatis porro alias, quae voluptates iste cum.",
            },
            {
                id:6, 
                icon: "FaGithub",
                heading: "FaGithub",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempore veritatis porro alias, quae voluptates iste cum.",
            },
        ]);
    return (
        <div className="services">
            <div className="container">
                <div className="services_header">
                    <div className="common">
                        <h3 className="heading">{header.mainHeader}</h3>
                        <h1 className="mainHeader">{header.subHeading}</h1>
                        <p className="mainContent">{header.text}</p> 
                        <div className="commonBorder"></div>    
                    </div>

                    <div className="row bgMain">
                        {state.map(info => (
                            <div className="col-4 bgMain">
                                <div className="services_box">
                                    <FaGithub className="commonIcons" />
                                    <div className="services_box-header">{info.heading}</div>
                                    <div className="service_box-p">{info.text}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Services;