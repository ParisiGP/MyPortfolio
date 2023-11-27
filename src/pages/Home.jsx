import MyFoto from '../assets/MinhaFoto.jpeg';
import './Home.css'
import { FaGithub, FaLinkedin, FaFileWord, FaArrowLeft } from "react-icons/fa";


const Home = () => {

  

  const navbar = () => {

    var PresentationDiv = document.getElementById('Presentation');
    var Image = document.getElementById('MyImg');
    var ProjectsDiv = document.getElementById('Projects');
    var BackButton = document.getElementById('BackFull');

    if (!PresentationDiv.classList.contains('sidebar')) {
      PresentationDiv.classList.add('sidebar');
      PresentationDiv.classList.remove('presentation');
      Image.classList.add('myImgSidebar');
      Image.classList.remove('myImg');
      ProjectsDiv.classList.add('projectFull');
      ProjectsDiv.classList.remove('projectsHome');
      BackButton.style.display = 'block';
    }

    console.log(PresentationDiv.classList)
  }

  const BackHome = () => {

    var PresentationDiv = document.getElementById('Presentation');
    var Image = document.getElementById('MyImg');
    var ProjectsDiv = document.getElementById('Projects');
    var BackButton = document.getElementById('BackFull');

    if (PresentationDiv.classList.contains('sidebar')) {
      PresentationDiv.classList.remove('sidebar');
      PresentationDiv.classList.add('presentation');
      Image.classList.remove('myImgSidebar');
      Image.classList.add('myImg');
      ProjectsDiv.classList.remove('projectFull');
      ProjectsDiv.classList.add('projectsHome');
      BackButton.style.display = 'none';
    }
  }


  return (
    <div className="home">
      <div id='Presentation' className="presentation">
        <button id='BackFull' className='backFull' onClick={BackHome}><FaArrowLeft /></button>
        <div id='MyImg' className="myImg">
          <img src={MyFoto} alt="MyPhoto" />
        </div>
        <div className='name'>
          <h1>Gustavo Parisi</h1>
          <h2>Desenvolvedor Web</h2>
        </div>
        <ul className='contact'>
          <li><a href="https://github.com/ParisiGP" target="_blank"><FaGithub /></a></li>
          <li><a href="https://www.linkedin.com/in/gustavo-parisi-de-carvalho/" target="_blank"><FaLinkedin /></a></li>
          <li><a href="https://docs.google.com/document/d/1KmBtYGmW_HMpyO7BNRkFM6TpBk4GdDruYTy_M2oHytA/edit?usp=sharing" target="_blank"><FaFileWord /></a></li>
        </ul>
      </div>

      <div id='Projects' className='projectsHome' onClick={navbar}>
        <h1>Projetos</h1>
      </div>
    </div>
  )
}

export default Home