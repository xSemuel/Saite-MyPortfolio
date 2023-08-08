import { useParams } from 'react-router-dom';
import BtnGitHub from '../components/btnGitHub/BtnGitHub';
import projectList from '../helpers/projectList'

const Projectpage = () => {
    const {id} = useParams();
    const viewProject = [...projectList].find((item) => item.id === Number(id)) 
    const { imgBig, title, skills, gitHubLink } = viewProject;

    return ( 
        <main className="section">
            <div className="container">
                <div className="project-details">

                    <h1 className="title-1">{title}</h1>
                    <img src={imgBig} alt={title} className="project-details__cover" />

                    <div className="project-details__desc">
                        <p>{skills}</p>
                    </div>

                    {gitHubLink && (<BtnGitHub link="https://github.com" />)}
                    
                </div>
            </div>
        </main>
    );
}
 
export default Projectpage;