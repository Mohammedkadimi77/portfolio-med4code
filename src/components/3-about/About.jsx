import './About.css';
import mee from "/public/mee.jpg";
import html from "/public/img/html-5.jpg";
import css from "/public/img/css-3.jpg"
import js from "/public/img/js.jpg"
import react from "/public/img/react.jpg"
import python from "/public/img/python.jpg"
import laravel from '/public/img/laravel.jpg'
import gite from '/public/img/gite.jpg'
import github from '/public/img/github.jpg'
import gitlab from '/public/img/gitlab.jpg'
import mysql from '/public/img/mysql.jpg'
import php from '/public/img/php.jpg'
const About = () => {
    return (
        <div id='about' className='about'>
            <div className='about-title'>
                <h2>About me</h2>
                <h3>MED<span>4</span>CODE</h3>

            </div>
            <div className='about-sections'>
                <div className='about-left'>
                <img src={mee} width={300} alt=''/>
                </div>
                <div className='about-right'>
                    <div className='about-para'>
                        <p>{`Étudiant en deuxième année de Développement Digital, option Web Full-Stack, à l'Institut Spécialisé en Technologie Appliquée Cité de l'Air à El Jadida, Maroc, je suis passionné par les technologies web et les systèmes d'information. Doté d'un fort esprit d'apprentissage et animé par une volonté constante d'innovation, je cherche à approfondir mes compétences en développement web et à relever de nouveaux défis techniques.`}</p>                    </div>
                </div>
            </div>
                <div className='about-skills'>
                    <div className='about-skill'>
                        <img src={html} width={50}/>
                        <img src={css} width={50}/>
                        <img src={js} width={50}/>
                        <img src={react} width={50}/>
                        <img src={python} width={50}/>
                        <img src={laravel} width={50}/>
                        <img src={gite} width={50}/>
                        <img src={github} width={50}/>
                        <img src={gitlab} width={50}/>
                        <img src={mysql} width={50}/>
                        <img src= width={50}/>
                        
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