import React from 'react'

const About = () => {
    const [header] = React.useState({
        subHeading: "About Me",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque consectetur obcaecati ratione! Provident."
    });
    const [state] = React.useState([
        {id: 1, title: 'Name', text: 'Peerapong Srithong'},
        {id: 2, title: 'Email', text: 'srithong.boss@gmail.com'},
        {id: 3, title: 'Phone', text: '+66 80 965 8926'},
        {id: 4, title: 'Line', text: 'shy_bz'},
    ])
    return (
        <div className="about">
            <div className="container">
                <div className="common">
                    <h1 className="mainHeader">{header.subHeading}</h1>
                    <p className="mainContent">{header.text}</p> 
                    <div className="commonBorder"></div>    
                </div>
                <div className="row h-650 alignCenter">
                    <div className="col-6">
                        <div className="about_img">
                            <img src="/images/avatar_cut2.png" alt="man"/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="about_info">
                            <h1>Hi There</h1>
                            <div className="about_info-p1">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut voluptatem reprehenderit error totam, magni, praesentium corporis dolorem eligendi aliquid saepe cumque libero ducimus explicabo esse ipsum laboriosam omnis nemo adipisci?
                            </div>
                            <div className="about_info-p2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ad, natus, dolore consectetur rerum doloremque ipsum quo facilis qui aperiam maiores voluptatem quos ipsa, a fugit cum esse quod soluta?
                            </div>
                        </div>
                        <div className="info_contacts">
                            <div className="row">
                                {state.map(info => (
                                    <div className="col-6">
                                        <strong>{info.title}</strong>
                                        <p>{info.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
