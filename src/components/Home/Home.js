import './style.css'
const Home = () => {

return (
<>
<div>
    <div style={{ backgroundColor: 'white', height: 500 }}
        className="home-warpper">
        <div className="backdrop">

        </div>
        <div class="button-center">
            <span className="down">&darr;</span>
        </div>
        <div className='container'>
            <div className='branch'>
                <div>
                    <a className='d-flex' style={{ textDecoration: 'none',
                        color: 'black' }}>
                        <div style={{
                            height: 40, width: 40, backgroundColor: 'blue',
                            borderRadius: 100, textAlign: 'center'
                            }}>
                            <span>R</span>
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
            <h5 style={{color:'blue' , fontWeight:900}}>
                HEY I ! I AM
            </h5>
            <h1>Ronaldo Fredrickson</h1>
            <h4 style={{ fontWeight: '900' }}>I'm a <span className='typingcss'>DEVELOPER</span></h4>
        </div>
    </div>

</div>

</>

)
}
export default Home;