import './App.css';
import Foto from './assets/Foto.jpg';
import GitHub from './assets/GitHub.png';
import Linkedin from './assets/Linkedin.jpg';
import Instagram from './assets/instagram.jpg';
function App(){

    return(
        
    <body>
        <main>
            <div className='mainImage'>
                <img className='foto' src={Foto} alt="Rodrigo's Photo" /> 
            </div>
            <section>
                <h1 className='aboutMe'>Rodrigo Carvalho Lima</h1>
                <div className='description'>
                <h3>Full Stack Developer</h3>
                </div>
            </section>
            <section className='contact'>
                <h2>Email</h2>
                <h4>rodrigokarvalho12890@gmail.com</h4>
                <h2>Telefone</h2>
                <h4>(24) 99279-8292</h4>
                <h2>Localização</h2>
                <h4>Petrópolis - RJ</h4>
            </section>
            <div className='image'>
            <img className='git' src={GitHub} alt="GitHub image" /> 
            <img className='linkedin' src={Linkedin} alt="Linkedin image" /> 
            <img className='instagram' src={Instagram} alt="Instagram image" /> 
            </div>
        </main>
    </body>
)
}

export default App;