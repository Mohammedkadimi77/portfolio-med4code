import './section.css';
export default function Section() {
    return (
        <div id='home' className='hero'>
            <img src='/public/me.jpg' alt='' width={250} />
            <h1><span>Bonjour, je suis Mohammed, </span>développeur full-stack basé au Maroc</h1>
            <p>{`Je suis Étudiant en deuxième année Développement Digital, option Web Full-Stack, à l'Institut
Spécialisé en Technologie Appliquée Cité de l'Air à El Jadida, Maroc , je suis passionné par
les technologies web et les systèmes d'information`}</p>
            <div className='hero-action'>
                <div className='hero-connect'><a href='#contact'>Connect with me</a></div>
                <div ><a className='hero-resume' href='https://www.linkedin.com/in/mohammed-kadimi-295727239' target='_blank'>Linkedin</a></div>
            </div>

        </div>
    )
}
