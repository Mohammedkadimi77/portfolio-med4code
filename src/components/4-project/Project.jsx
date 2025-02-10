import './Project.css'
import p1 from "/project/p1.jpg";
import p2 from "/project/p2.jpg";
const Project = () => {
    return (
        <div id='project' className='mywork'>
            <div className="mywork-title">
                <h2>My Project</h2>
                <h3>MED<span>4</span>CODE</h3>
            </div>
            <div className="mywork-container">
                <div className="project1">
                    <div className='left'>
                        <h1>school website</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores expedita, corpor</p>
                        <button>SHOW WEBSITE <span className='icon-arrow-right'></span></button>
                    </div>
                    <div className="right">
                        <img src={p1} width={700} alt="" />
                    </div>
                </div>
                <div className="project2">
                    <div className='left'>
                        <h1>Tic Tac Toe</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores expedita, corporis consectetur laborum adipisci omnis nesciunt quod ipsa pariatur, distinctio quasi modi quas assumenda nulla perspiciatis, cumque fugiat nihil odit facilis!</p>
                        <button>SHOW WEBSITE <span className='icon-arrow-right'></span></button>

                    </div>
                    <div className="right">
                        <img src={p2} width={700} alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Project;