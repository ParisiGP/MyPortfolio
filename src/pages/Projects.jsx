import TodoUrl from '../assets/TodoPRJ.png';
import CalculatorUrl from '../assets/CalculatorPRJ.png';
import MovieURL from '../assets/MoviePRJ.png';

const navbar = () => {

  var PresentationDiv = document.getElementById('Presentation');
  var Image = document.getElementById('MyImg');
  var ProjectsDiv = document.getElementById('Projects');
  var BackButton = document.getElementById('BackFull');
  var Projects = document.getElementById('ConteinerProjects');

  if (!PresentationDiv.classList.contains('sidebar')) {

    PresentationDiv.classList.add('sidebar');
    PresentationDiv.classList.remove('presentation');

    Image.classList.add('myImgSidebar');
    Image.classList.remove('myImg');

    ProjectsDiv.classList.add('projectFull');
    ProjectsDiv.classList.remove('projectsHome');

    BackButton.style.display = 'block';
    Projects.style.display = 'flex';
  }

  console.log(PresentationDiv.classList)
}

const Projects = () => {
  return (
      <div id='Projects' className='projectsHome' onClick={navbar}>

        <h1>Projetos</h1>
        <h2>Clique para mais</h2>

        <div id="ConteinerProjects" className="conteinerProjects">

          <div className="projectCard">
            <h3 className="ProjectName">Projeto To Do</h3>
            <div className="projectImage">
              <img src= {TodoUrl} alt="Foto não encontrada" />
            </div>
            <p className='projectDiscription'>Formulario To Do, feito em React+Vite</p>
              <a href="https://parisigp.github.io/todo_react_vite/"  rel="noopener noreferrer"><button className='btSeeMore'>Visitar projeto</button></a>      
          </div>

          <div className="projectCard">
            <h3 className="ProjectName">Calculadora</h3>
            <div className="projectImage">
              <img src= {CalculatorUrl} alt="Foto não encontrada" />
            </div>
            <p className='projectDiscription'>Calculadora feita em HTML, CSS e Javascript</p>
              <a href="https://parisigp.github.io/Calculadora/" rel="noopener noreferrer"><button className='btSeeMore'>Visitar projeto</button></a>
          </div>

          <div className="projectCard">
            <h3 className="ProjectName">Projeto</h3>
            <div className="projectImage">
              <img src= {MovieURL} alt="Foto não encontrada" />
            </div>
            <p className='projectDiscription'>Catalogo de filmes com barra de pesquisa por API </p>
              <a target='_blank' href="https://parisigp.github.io/PRJ_CatalogoFilmes/" rel="noopener noreferrer"><button className='btSeeMore'>Visitar projeto</button></a>
          </div>

        </div>
      </div>

  )
}

export default Projects