import './Projects.css'

const Projects = () => {


    return (
        <>

            <section class="portfolio container-fluid">
                <h2 id="portfolio">Portfolio</h2>
                <div class="container contenedor-portfolio d-md-flex flex-md-wrap">
                    <article>
                        <div class="jod-desc">
                            <h3>Videogame 2D</h3>
                            <p>Javascript, HTML, CSS</p>
                        </div>
                        <img src="public/images/2Dvideogame.png" class="img-fluid" />  
                    </article>
                    <a href="https://github.com/samuelemarino04/LabVideoJuego">Repo</a>
                    <a href="https://samuelemarino04.github.io/LabVideoJuego/">Web</a>
                    <article>
                        <div class="jod-desc">
                            <h3>Web page</h3>
                            <p>Node.js, Express, HBS, MongoDB, Google places API</p>
                        </div>
                        <img src="public/images/onlypizza.png" class="img-fluid" />
                    </article>
                     <a href="https://github.com/samuelemarino04/M2Project">Repo</a>
                     <a href="https://onlypizzas.fly.dev/">Web</a>
                    <article>
                        <div class="jod-desc">
                            <h3>Single page application</h3>
                            <p>React.js, node.js, CSS</p>
                        </div>
                        <img src="public/images/singlepage.png" class="img-fluid" />
                    </article>
                    <a href="https://github.com/samuelemarino04/Q-support-client">Repo Client</a>
                    <a href="https://github.com/samuelemarino04/Q-support-server">Repo Server</a>
                    <a href="https://creativesqplus.netlify.app/">Web</a>
                </div>
            </section>
        </>
    )
}

export default Projects