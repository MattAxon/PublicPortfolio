import 'bootstrap/dist/css/bootstrap.min.css';


function About() {
  return (
    <div className="aboutPage">
      <div className='pageContent'>
        <h1 className='bigText'>
          Hi, I'm Matt.
        </h1>
        <article className='article'>
          <div className='firstparagraph'>
          <p className='imA'>I'm a full stack dev, high school student, and Kansas City chiefs fan</p>
          </div>
          <p className='secondParagraph'>
            I've been coding for about two years and plan on majoring in computer science and business in college. I'm using this website to display my projects and skills as they develop.
          </p>
          <h5 className='skillsHeader'> </h5>
        </article>
      </div>
    </div>
  );
}

export default About;