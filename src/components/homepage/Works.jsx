import React from 'react'
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from '../common/card'

import './styles/works.css'

const Works = () => {
  return (
    <div className="works">
        <Card
            icon={faBriefcase}
            title="Work"
            body={
                <div className="works-body">
                    <div className="work">
                        <img
                            src="./solusi.jpeg"
                            alt="facebook"
                            className="work-image"
                        />
                        <div className="work-title">Solusi 247</div>
                        <div className="work-subtitle">
                            Website Developer
                        </div>
                        <div className="work-duration">2023 - Present</div>
                    </div>

                    <div className="work">
                        <img
                            src="./twitter.png"
                            alt="twitter"
                            className="work-image"
                        />
                        <div className="work-title">Freelance</div>
                        <div className="work-subtitle">
                            Frontend Developer
                        </div>
                        <div className="work-duration">2024 - Present</div>
                    </div>
                </div>
            }
        />
    </div>
  )
}

export default Works