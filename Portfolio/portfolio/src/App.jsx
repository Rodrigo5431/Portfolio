import './App.css';
import './reset.css';
import js from './assets/js.png';
import html from './assets/HTML.png';
import css from './assets/CSS.png';

function App(){

    return(
        
    <body>
        <header>
            <div className='images'>
                <img src={js} alt="" />
                <img src={html} alt="" />
                <img src={css} alt="" />
            </div>
        </header>
        <main>
            <h1>Olá, Meu nome é Rodrigo, e seja bem vindo ao meu Portfólio</h1>
        </main>

    </body>
);
}

export default App;
