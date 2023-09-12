import React from 'react'
import './style.css'
import Card from 'react-bootstrap/Card';
import { HiOutlineLightBulb } from 'react-icons/hi2'
import { hover } from '@testing-library/user-event/dist/hover';
import Background_1 from '../../asset/icon/work-1.jpg'
export default function OurProjects() {
    return (
        <div>
            <div>
                <div className='title'>
                    <h1 style={{ marginTop: 100 }}>Our Projects</h1>
                    <p style={{ color: '#999999', marginTop: 40 }}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                </div>
                <div className='card-ourprojects'>
                    <div className='d-flex ' >
                        <div class="col-md-4" style={{ backgroundImage: `url(${Background_1})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: 300 }} >

                        </div>
                        <div class="col-md-4" style={{ backgroundImage: `url(${Background_1})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: 300 }} >

                        </div>
                        <div class="col-md-4" style={{ backgroundImage: `url(${Background_1})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: 300 }} >

                        </div>
                    </div>
                    <div className='d-flex ' >
                        <div class="col-md-4" style={{ backgroundImage: `url(${Background_1})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: 300 }} >

                        </div>
                        <div class="col-md-4" style={{ backgroundImage: `url(${Background_1})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: 300 }} >

                        </div>
                        <div class="col-md-4" style={{ backgroundImage: `url(${Background_1})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: 300 }} >

                        </div>
                    </div>
                </div>

            </div>
            <div className='d-flex' style={{ marginTop: 100 }}>
                <div className='col-md-3'>
                    <Card style={{ height: 100, display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90%' }}>
                        <div className='d-block our-project-card' >
                            <h2>1,200</h2>
                            <p>Complete Projects</p>
                        </div>
                    </Card>
                </div>
                <div className='col-md-3'>
                    <Card style={{ height: 100, display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90%' }}>
                        <div className='d-block our-project-card' >
                            <h2>1,200</h2>
                            <p>Complete Projects</p>
                        </div>
                    </Card>
                </div>
                <div className='col-md-3'>
                    <Card style={{ height: 100, display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90%' }}>
                        <div className='d-block our-project-card'>
                            <h2>1,200</h2>
                            <p>Happy Customers</p>
                        </div>
                    </Card>
                </div>
                <div className='col-md-3'>
                    <Card style={{ height: 100, display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90%' }}>
                        <div className='d-block our-project-card'>
                            <h2>50000</h2>
                            <p>Cups of coffee</p>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}
