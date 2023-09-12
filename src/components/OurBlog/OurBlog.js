import React from 'react'
import { BsFillChatLeftTextFill } from 'react-icons/bs';

export default function OurBlog() {
    return (
        <div>
            <div>
                <div className='title'>
                    <h1 style={{ marginTop: 100 }}>Our Blog</h1>
                    <p style={{ color: '#999999', marginTop: 40 }}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                </div>

            </div>
            <div className='d-flex' style={{ alignItems: 'center', justifyContent: 'space-between', marginLeft: 120, marginRight: 120 }} >
                <div className='col-md-4' style={{ width: 400 }} >
                    <div className='row'>
                        <img src='https://preview.colorlib.com/theme/ronaldo/images/image_1.jpg' style={{ height: 300 }} />
                        <a style={{ fontSize: 20 }}>
                            Why Lead Generation is Key for Business Growth</a>
                        <div className='d-flex' style={{ color: 'blue', fontSize: 16, fontWeight: 600 }}>
                            <span style={{}}>sept.12, 2019 </span>
                            <a style={{ marginLeft: 10 }}>Admin</a>
                            <span className='icon-chat' style={{ marginLeft: 10, marginRight: 10 }}><BsFillChatLeftTextFill /></span>
                            3
                        </div>
                        <p style={{ color: '#999999', marginTop: 20 }}>
                            A small river named Duden flows by their place and supplies it with the necessary regelialia.
                        </p>

                    </div>



                </div>
                <div className='col-md-4' style={{ width: 400 }} >
                    <div className='row'>
                        <img src='https://preview.colorlib.com/theme/ronaldo/images/image_2.jpg' style={{ height: 300 }} />
                        <a style={{ fontSize: 20 }}>
                            Why Lead Generation is Key for Business Growth</a>
                        <div className='d-flex' style={{ color: 'blue', fontSize: 16, fontWeight: 600 }}>
                            <span style={{}}>sept.12, 2019 </span>
                            <a style={{ marginLeft: 10 }}>Admin</a>
                            <span className='icon-chat' style={{ marginLeft: 10, marginRight: 10 }}><BsFillChatLeftTextFill /></span>
                            3
                        </div>
                        <p style={{ color: '#999999', marginTop: 20 }}>
                            A small river named Duden flows by their place and supplies it with the necessary regelialia.
                        </p>

                    </div>



                </div>
                <div className='col-md-4' style={{ width: 400 }} >
                    <div className='row'>
                        <img src='https://preview.colorlib.com/theme/ronaldo/images/image_3.jpg' style={{ height: 300 }} />
                        <a style={{ fontSize: 20 }}>
                            Why Lead Generation is Key for Business Growth</a>
                        <div className='d-flex' style={{ color: 'blue', fontSize: 16, fontWeight: 600 }}>
                            <span style={{}}>sept.12, 2019 </span>
                            <a style={{ marginLeft: 10 }}>Admin</a>
                            <span className='icon-chat' style={{ marginLeft: 10, marginRight: 10 }}><BsFillChatLeftTextFill /></span>
                            3
                        </div>
                        <p style={{ color: '#999999', marginTop: 20 }}>
                            A small river named Duden flows by their place and supplies it with the necessary regelialia.
                        </p>

                    </div>



                </div>
            </div>
            <div style={{ backgroundImage: `url("https://preview.colorlib.com/theme/ronaldo/images/bg_1.jpg")`, height: 300, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                <div style={{ textAlign: 'center' }}>
                    <div className='d-flex' style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ color: 'white', fontSize: 40, fontWeight: 900, marginRight: 10 }}>I'm</span>
                        <span style={{ color: ' #a0f669', fontSize: 40, fontWeight: 900 }}>Available</span>
                        <span style={{ color: 'white', fontSize: 40, fontWeight: 900, marginRight: 10 }}>for freelancing</span>
                    </div>
                    <p style={{ color: 'white', fontSize: 20 }}>
                        A small river named Duden flows by their place and supplies it with the necessary regelialia
                    </p>
                    <div className='d-flex' style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#3e64ff', width: 150, height: 50, borderRadius: 20, marginLeft: 'auto', marginRight: 'auto' }}>
                        <a style={{ fontSize: 12, fontWeight: 'bold', color: 'white' }}>HERE ME</a>
                    </div>
                </div>


            </div>
        </div>
    )
}
