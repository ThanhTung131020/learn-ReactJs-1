import './style.css'
const Home = () => {

    return (
        <>
            <div>
                <div style={{ backgroundColor: '#e1dce9', height: 500 }}>
                    <div className='container'  >
                        <div className='branch'  >
                            <div >
                                <a className='d-flex' style={{ textDecoration: 'none', color: 'black' }}>
                                    <div style={{
                                        height: 40, width: 40, backgroundColor: 'blue', borderRadius: 100, textAlign: 'center'
                                    }}>
                                        <span >R</span>
                                    </div>

                                    onaldo</a>
                            </div>
                        </div>
                        <div className='navBar'>
                            <ul>
                                <li>
                                    Home
                                </li>
                                <li>
                                    About
                                </li>
                                <li>
                                    Resume
                                </li>
                                <li>
                                    Services
                                </li>
                                <li>
                                    Projects
                                </li>
                                <li>
                                    My Blog
                                </li>
                                <li>
                                    Contact
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className='status text-center'>
                        <span>
                            HEY I ! I AM
                        </span>
                        <h1>Ronaldo Fredrickson</h1>
                        <h4 style={{ fontWeight: '900' }}>I'm a <span>DEVELOPER</span></h4>
                    </div>
                </div>


            </div>



        </>



    )
}
export default Home;