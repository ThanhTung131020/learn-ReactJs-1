import "./style.css"
const About = () => {
    return (
        <>
            <div style={{ display: 'flex' }}>
                <div className="col-md-6 image" >
                    <img src="https://preview.colorlib.com/theme/ronaldo/images/about.jpg" alt="Italian Trulli" />

                </div>
                <div className="col-md-6 about" >
                    <h1>About me</h1>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>

                    <div style={{ display: 'flex', marginTop: 20 }}>
                        <div className="col-md-2">
                            <p style={{ fontWeight: 'bold' }}>Name:</p>
                        </div>
                        <div className="col-md-10">
                            <p>
                                Ronaldo   </p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', marginTop: 20 }}>
                        <div className="col-md-2">
                            <p style={{ fontWeight: 'bold' }}>Date of birth:</p>
                        </div>
                        <div className="col-md-10">
                            <p>
                                November 28, 1989   </p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', marginTop: 20 }}>
                        <div className="col-md-2">
                            <p style={{ fontWeight: 'bold' }}>Address:</p>
                        </div>
                        <div className="col-md-10">
                            <p>

                                San Francisco CA 97987 USA</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', marginTop: 20 }}>
                        <div className="col-md-2">
                            <p style={{ fontWeight: 'bold' }}>Zip code:</p>
                        </div>
                        <div className="col-md-10">
                            <p>
                                1000</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', marginTop: 20 }}>
                        <div className="col-md-2">
                            <p style={{ fontWeight: 'bold' }}>Email:</p>
                        </div>
                        <div className="col-md-10">
                            <p>

                                ronaldo@gmail.com</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', marginTop: 40 }}>
                        <div className="col-md-2">
                            <p style={{ fontWeight: 'bold' }}>Phone:
                            </p>
                        </div>
                        <div className="col-md-10">
                            <p>
                                +1-2234-5678-9-0</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', marginTop: 35 }}>
                        <div className="col-md-2" style={{ display: 'flex', fontSize: 25 }}>
                            <span style={{ fontWeight: 'bold', color: 'blue', }}>120
                            </span>
                            <p> projects</p>

                        </div>

                    </div>

                    <button className="col-md-2 dowloadCV">Dowload CV</button>
                </div>

            </div>
            <div className="col-md-12" style={{ display: 'flex', margin: 100, alignItems: 'center' }}>
                <div className="col-md-12" style={{ display: 'flex' }}>
                    <div className="col-md-2"><img src="https://preview.colorlib.com/theme/ronaldo/images/partner-1.png" /></div>
                    <div className="col-md-2" ><img src="https://preview.colorlib.com/theme/ronaldo/images/partner-2.png" /></div>
                    <div className="col-md-2" ><img src="https://preview.colorlib.com/theme/ronaldo/images/partner-3.png" /></div>
                    <div className="col-md-2" ><img src="https://preview.colorlib.com/theme/ronaldo/images/partner-4.png" /></div>
                    <div className="col-md-2"><img src="https://preview.colorlib.com/theme/ronaldo/images/partner-5.png" /></div>

                </div>
            </div>

        </>
    )
}
export default About;