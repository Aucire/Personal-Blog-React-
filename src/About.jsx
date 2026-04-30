import pic from "./assets/image.png"

const About=({name})=>{
    return(
        <section className="about">
            <img src={pic} alt="Blog-logo"/>
            <div className="info">
                <h1>Personal blog by <span>{name}</span></h1>
                <p>The concepts of Front-End Web Development</p>               
            </div>
        </section>
    )
}
export default About;