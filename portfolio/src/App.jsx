import './App.css';
import Foto from './assets/Foto.jpg';
import GitHub from './assets/GitHub.png';
import Linkedin from './assets/Linkedin.jpg';
import Instagram from './assets/instagram.jpg';
function App() {

    return (

        <body>
                <main>
                <div className='all'>


                    <section className='leftPart'>
                        <div className='mainImage'>
                            <img className='foto' src={Foto} alt="Rodrigo's Photo" />
                        </div>
                        <section>
                            <h1 className='Me'>Rodrigo Carvalho Lima</h1>
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
                            <a href='https://www.linkedin.com/in/rodrigo-carvalho-381522299/'>
                                <img className='linkedin' src={Linkedin} alt="Linkedin image" />
                            </a> 
                            <a href='https://github.com/Rodrigo5431'>
                                <img className='git' src={GitHub} alt="GitHub image" />
                            </a>
                            <a href='https://www.instagram.com/rodrigo_karvalho/'>
                                <img className='instagram' src={Instagram} alt="Instagram image" />
                            </a>
                        </div>
                    </section>

                    <section className='rightPart'>
                        <div className='about'>
                            <h1 className='sections'>About Me</h1>
                        </div>
                    </section>
                </div>
                </main>

        </body>
    )
}

export default App;