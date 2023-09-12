import React from 'react'
import './style.css'
import { TfiGift } from 'react-icons/tfi'

import Education from './Education/Education'
import Experience from './Experience/Experience'
import Skill from './Skills/Skill'
import Awards from './Awards/Awards'
export default function NavHoziontal() {
    return (
        <div>
            <div style={{ display: 'flex', marginLeft: 110, marginRight: 110 }}>
                <div className='col-md-2' >
                    <ul className='navHozi'>
                        <li>
                            Education
                        </li>
                        <li>
                            Experience
                        </li>
                        <li>
                            Skill
                        </li>
                        <li>
                            Awards
                        </li>
                    </ul>
                </div>
                <div className='col-md-10'>
                    <Education />
                    <Experience />
                    <Skill />
                    <Awards />

                </div>



            </div>
        </div>

    )
}
