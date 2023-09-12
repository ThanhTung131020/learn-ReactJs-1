import React from 'react'
import './style.css'
import Card from 'react-bootstrap/Card'
import { AiOutlineFire } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'
import { FaRegPaperPlane } from 'react-icons/fa6'
import { IoEarthOutline } from 'react-icons/io5'
export default function Contact() {
    return (
        <div>
            <div>
                <div className='title'>
                    <h1 style={{ marginTop: 100 }}>Our Projects</h1>
                    <p style={{ color: '#999999', marginTop: 40 }}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                </div>
                <div className='d-flex' style={{ alignItems: 'center', justifyContent: 'center', marginLeft: 100, marginRight: 100 }}>
                    <div className='col-md-3'>
                        <Card style={{ textAlign: 'center', alignItems: 'center', height: 300 }} >
                            <div className='d-flex' style={{ width: 100, height: 100, borderRadius: 100, background: 'blue', justifyContent: 'center', alignItems: 'center' }}>
                                <AiOutlineFire style={{ color: 'white', height: 50, width: 50 }} />
                            </div>
                            <h3 style={{ marginTop: 20 }}>address</h3>
                            <p style={{ color: '#999999', marginTop: 20 }}>198 West 21th Street, Suite 721 New York NY 10016</p>
                        </Card>


                    </div>
                    <div className='col-md-3'>
                        <Card style={{ textAlign: 'center', alignItems: 'center', height: 300 }} >
                            <div className='d-flex' style={{ width: 100, height: 100, borderRadius: 100, background: 'blue', justifyContent: 'center', alignItems: 'center' }}>
                                <BsTelephone style={{ color: 'white', height: 50, width: 50 }} />
                            </div>
                            <h3 style={{ marginTop: 20 }}>Contact Number</h3>
                            <p style={{ color: '#3e64ff', marginTop: 20 }}>+ 1235 2355 98</p>
                        </Card>

                    </div>
                    <div className='col-md-3'>
                        <Card style={{ textAlign: 'center', alignItems: 'center', height: 300 }} >
                            <div className='d-flex' style={{ width: 100, height: 100, borderRadius: 100, background: 'blue', justifyContent: 'center', alignItems: 'center' }}>
                                <FaRegPaperPlane style={{ color: 'white', height: 50, width: 50 }} />
                            </div>
                            <h3 style={{ marginTop: 20 }}>Email address</h3>
                            <p style={{ color: '#3e64ff', marginTop: 20 }}>info@yoursite.com</p>
                        </Card>

                    </div>
                    <div className='col-md-3'>
                        <Card style={{ textAlign: 'center', alignItems: 'center', height: 300 }} >
                            <div className='d-flex' style={{ width: 100, height: 100, borderRadius: 100, background: 'blue', justifyContent: 'center', alignItems: 'center' }}>
                                <AiOutlineFire style={{ color: 'white', height: 50, width: 50 }} />
                            </div>
                            <h3 style={{ marginTop: 20 }}>Website</h3>
                            <p style={{ color: '#3e64ff', marginTop: 20 }}>yoursite.com</p>
                        </Card>
                    </div>
                </div>
            </div>
            <div className='d-flex'>
                <div className='col-md-6' style={{ marginRight: 30 }}>
                    <img src='https://preview.colorlib.com/theme/ronaldo/images/about.jpg' />
                </div>

                <form className='col-md-6 d-block' style={{ marginTop: 70 }}>
                    <input type='text' style={{ height: 50, borderRadius: 5, width: '70%', border: '0.2px solid ' }} placeholder='Your name' />
                    <input type='text' style={{ height: 50, borderRadius: 5, width: '70%', border: '0.2px solid ', marginTop: 20 }} placeholder='Your email' />
                    <input type='text' style={{ height: 50, borderRadius: 5, width: '70%', border: '0.2px solid ', marginTop: 20 }} placeholder='Subject' />
                    <textarea style={{ width: '70%', height: 200, marginTop: 20, borderRadius: 5 }} placeholder='Message' />
                    <div style={{ width: '70%', marginTop: 20 }}>
                        <input type='submit' style={{ height: 50, width: 200, backgroundColor: 'blue', borderRadius: 20, color: 'white', border: 'none', fontSize: 12, fontWeight: 'bold' }} value="SEND MESSAGE" />
                    </div>

                </form>

            </div>
        </div>
    )
}
