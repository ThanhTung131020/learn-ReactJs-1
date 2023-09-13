import React from 'react'
import './style.css'
import Card from 'react-bootstrap/Card';
import { HiOutlineLightBulb } from 'react-icons/hi2'
import { hover } from '@testing-library/user-event/dist/hover';
import Background_1 from '../../asset/icon/work-1.jpg'
export default function Services() {

    return (
        <div className='d-block container-title'>
            <div>
                <div className='title'>
                    <h1>Services</h1>
                    <p style={{ color: '#999999', marginTop: 40 }}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                </div>

            </div>

            <div >
                <div className='d-flex card-services' >
                    <div className='col-md-4 ' >
                        <Card style={{ width: '93%', height: 300 }} >
                            <HiOutlineLightBulb style={{ width: 60, height: 60 }} />
                            <h3>WEB DESIGN</h3>
                            <hr />
                            <p style={{ width: '80%' }}>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </Card>
                    </div>
                    <div className='col-md-4 ' >
                        <Card style={{ width: '93%', height: 300 }} >
                            <HiOutlineLightBulb style={{ width: 60, height: 60 }} />
                            <h3>PHOTOGRAPHY</h3>
                            <hr />
                            <p style={{ width: '80%' }}>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </Card>
                    </div>
                    <div className='col-md-4 ' >
                        <Card style={{ width: '100%', height: 300 }} >
                            <HiOutlineLightBulb style={{ width: 60, height: 60 }} />
                            <h3>WEB DEVELOPER</h3>
                            <hr />
                            <p style={{ width: '80%' }}>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </Card>
                    </div>
                </div>
                <div className='d-flex card-services' >
                    <div className='col-md-4 ' >
                        <Card style={{ width: '93%', height: 300 }} >
                            <HiOutlineLightBulb style={{ width: 60, height: 60 }} />
                            <h3>APP DEVELOPER</h3>
                            <hr />
                            <p style={{ width: '80%' }}>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </Card>
                    </div>
                    <div className='col-md-4 ' >
                        <Card style={{ width: '93%', height: 300 }} >
                            <HiOutlineLightBulb style={{ width: 60, height: 60 }} />
                            <h3>BRANDING</h3>
                            <hr />
                            <p style={{ width: '80%' }}>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </Card>
                    </div>
                    <div className='col-md-4 ' >
                        <Card style={{ width: '100%', height: 300 }} >
                            <HiOutlineLightBulb style={{ width: 60, height: 60 }} />
                            <h3>PRODUCT STRATEGY</h3>
                            <hr />
                            <p style={{ width: '80%' }}>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </Card>
                    </div>
                </div>
            </div>

        </div >
    )
}
