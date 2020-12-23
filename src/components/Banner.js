import React from 'react'
import { FaFacebookF, FaTwitter, FaPinterest, FaInstagram , FaPlay} from 'react-icons/fa';


const Banner = () => {
    const [state] = React.useState({
        title: 'I am Peerapong', 
        text: 'I\'m Peerapong, developer with short time experience in this field',
        image: '/images/avatar_cut2.png'
    });
    return <header className="header">
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <div className="header_content">
                        <div className="header_section">
                            <ul className="header_ul">
                                <li>
                                    <FaFacebookF />
                                </li>
                                <li>
                                    <FaTwitter />
                                </li>
                                <li>
                                    <FaPinterest />
                                </li>
                                <li>
                                    <FaInstagram />
                                </li>
                                <li>
                                    <FaFacebookF />
                                </li>
                            </ul>
                            <h1>{state.title}</h1>
                            <p>{state.text}</p>
                            <div className="header_buttons">
                                <a href="/" className="btn btn-outline ">
                                    My Portfolio
                                </a>
                                &nbsp;&nbsp;&nbsp;
                                <a href="/" className="btn btn-smart">
                                    <FaPlay className="play" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="banner_img">
                        <img src={state.image} alt="avatar"/>
                    </div>
                </div>
            </div>
        </div>
    </header> 
};

export default Banner
