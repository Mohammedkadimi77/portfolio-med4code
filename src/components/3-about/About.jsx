import './About.css';
const About = () => {
    return (
        <div id='about' className='about'>
            <div className='about-title'>
                <h2>About me</h2>
                <h3>MED<span>4</span>CODE</h3>

            </div>
            <div className='about-sections'>
                <div className='about-left'>
                <img src='/public/mee.jpg' width={300} alt=''/>
                </div>
                <div className='about-right'>
                    <div className='about-para'>
                        <p>{`Étudiant en deuxième année de Développement Digital, option Web Full-Stack, à l'Institut Spécialisé en Technologie Appliquée Cité de l'Air à El Jadida, Maroc, je suis passionné par les technologies web et les systèmes d'information. Doté d'un fort esprit d'apprentissage et animé par une volonté constante d'innovation, je cherche à approfondir mes compétences en développement web et à relever de nouveaux défis techniques.`}</p>                    </div>
                </div>
            </div>
                <div className='about-skills'>
                    <div className='about-skill'>
                        <img src='/public/img/html-5.jpg' width={50}/>
                        <img src='/public/img/css-3.jpg' width={50}/>
                        <img src='/public/img/js.jpg' width={50}/>
                        <img src='/public/img/react.jpg' width={50}/>
                        <img src='/public/img/python.jpg' width={50}/>
                        <img src='/public/img/laravel.jpg' width={50}/>
                        <img src='/public/img/gite.jpg' width={50}/>
                        <img src='/public/img/github.jpg' width={50}/>
                        <img src='/public/img/gitlab.jpg' width={50}/>
                        <img src='/public/img/mysql.jpg' width={50}/>
                        <img src='/public/img/php.jpg' width={50}/>
                        
                    </div>
                </div>
                <div className='about-achievements'>
                    <div className='about-achievement'>
                        <h1>2+</h1>
                        <p>Years of experience</p>
                    </div>
                    <hr/>
                    <div className='about-achievement'>
                    <h1>10+</h1>
                    <p>Projects completed</p>
                    </div>
                </div>
        </div>
    )
}
export default About;