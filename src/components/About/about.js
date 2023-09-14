import "./style.css"
const About = () => {
return (
<>
<div style={{ display: 'flex' }}>
    <div className="col-md-6 image">
        <img src="https://preview.colorlib.com/theme/ronaldo/images/about.jpg"
            alt="Italian Trulli" />

    </div>

    <div className="col-md-6 about">
        <h1>About me</h1>
        <p>A small river named Duden flows by their place and supplies it with
            the necessary regelialia.</p>

        <div style={{ display: 'flex', marginTop: 20 }}>
            <div className="col-md-2">
                <p style={{ fontWeight: 'bold' }}>Name:</p>
            </div>
            <div className="col-md-10">
                <p style={{ color: '#999999' }}>
                    Ronaldo </p>
            </div>
        </div>
        <div style={{ display: 'flex', marginTop: 20 }}>
            <div className="col-md-2">
                <p style={{ fontWeight: 'bold' }}>Date of birth:</p>
            </div>
            <div className="col-md-10">
                <p style={{ color: '#999999' }}>
                    November 28, 1989 </p>
            </div>
        </div>
        <div style={{ display: 'flex', marginTop: 20 }}>
            <div className="col-md-2">
                <p style={{ fontWeight: 'bold' }}>Address:</p>
            </div>
            <div className="col-md-10">
                <p style={{ color: '#999999' }}>

                    San Francisco CA 97987 USA</p>
            </div>
        </div>
        <div style={{ display: 'flex', marginTop: 20 }}>
            <div className="col-md-2">
                <p style={{ fontWeight: 'bold' }}>Zip code:</p>
            </div>
            <div className="col-md-10">
                <p style={{ color: '#999999' }}>
                    1000</p>
            </div>
        </div>
        <div style={{ display: 'flex', marginTop: 20 }}>
            <div className="col-md-2">
                <p style={{ fontWeight: 'bold' }}>Email:</p>
            </div>
            <div className="col-md-10">
                <p style={{ color: '#999999' }}>

                    ronaldo@gmail.com</p>
            </div>
        </div>
        <div style={{ display: 'flex', marginTop: 40 }}>
            <div className="col-md-2">
                <p style={{ fontWeight: 'bold' }}>Phone:
                </p>
            </div>
            <div className="col-md-10">
                <p style={{ color: '#999999' }}>
                    +1-2234-5678-9-0</p>
            </div>
        </div>
        <div style={{ display: 'flex', marginTop: 35 }}>
            <div className="col-md-2" style={{ display: 'flex', fontSize: 25 }}>
                <span style={{ fontWeight: '900', color: 'blue', marginRight: 10
                    }}>120
                </span>
                <p> projects</p>

            </div>

        </div>

        <button className="col-md-2 dowloadCV">Dowload CV</button>
    </div>

</div>
<div className="d-flex " style={{alignItems:'center' ,
    justifyContent:'space-evenly' ,paddingLeft:150 , paddingRight:150}}>
    <img style={{width:180, height: 80}}
        src="https://preview.colorlib.com/theme/ronaldo/images/partner-1.png" />
    <img style={{width:180, height: 80}}
        src="https://preview.colorlib.com/theme/ronaldo/images/partner-2.png" />
    <img style={{width:180, height: 80}}
        src="https://preview.colorlib.com/theme/ronaldo/images/partner-3.png" />
    <img style={{width:180, height: 80}}
        src="https://preview.colorlib.com/theme/ronaldo/images/partner-4.png" />
    <img style={{width:180, height: 80}}
        src="https://preview.colorlib.com/theme/ronaldo/images/partner-5.png" />

</div>

</>
)
}
export default About;