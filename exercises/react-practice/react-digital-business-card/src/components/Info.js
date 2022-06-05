import React from "react"

export default function Info(){
    return (
        <div className="info">
            <img src={require('/home/tonyeherrera/g/assignments/exercises/react-practice/react-digital-business-card/src/components/images/BusinessCardPhoto.jpg')}  className="info--image" alt="User Image"/>
            <h3 className="info--name">Tony E. Herrera</h3>
            <h4 className="info--title">Full Stack Developer</h4>
            <h6 className="info--web_address">linkedin.com/in/tony-the-dev/</h6>
            <div className="info--buttons">
                <button className="info--email_button">
                    <img src={require('/home/tonyeherrera/g/assignments/exercises/react-practice/react-digital-business-card/src/components/images/Mail.png')} alt="Email Icon"/>Email
                </button>
                <button className="info--linked_in_button">
                    <img src={require('/home/tonyeherrera/g/assignments/exercises/react-practice/react-digital-business-card/src/components/images/linkedin.png')} alt="LinkedIn Icon"/>LinkedIn
                </button>
            </div>
        </div>
    )
}