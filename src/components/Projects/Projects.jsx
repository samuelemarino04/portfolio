import './Projects.css'
import Button from 'react-bootstrap/Button'

const Projects = () => {


    return (
        <>

            <section class="portfolio container-fluid">
                <h2 id="portfolio">Projects</h2>
                <div class="container contenedor-portfolio d-md-flex flex-md-wrap">
                    <article>
                        <div class="jod-desc">
                            <h3>Videogame 2D</h3>
                            <p>Javascript, HTML, CSS</p>
                            <Button variant="outline-success" href="https://github.com/samuelemarino04/LabVideoJuego">Repository</Button>
                            <Button variant="outline-info" href="https://samuelemarino04.github.io/LabVideoJuego/">Web</Button>
                        </div>
                        <img src="public/images/2Dvideogame.png" class="img-fluid" />
                    </article>

                    <article>
                        <div class="jod-desc">
                            <h3>Web page</h3>
                            <p>Node.js, Express, HBS, MongoDB, Google places API</p>
                            <Button variant="outline-success" href="https://github.com/samuelemarino04/M2Project">Repository</Button>
                            <Button variant="outline-info" href="https://onlypizzas.fly.dev/">Web</Button>
                        </div>
                        <img src="public/images/onlypizza.png" class="img-fluid" />
                    </article>
                    <article>
                        <div class="jod-desc">
                            <h3>Single page application</h3>
                            <p>React.js, node.js, CSS</p>
                            <Button variant="outline-success" href="https://github.com/samuelemarino04/Q-support-client">Client Repository</Button>
                            <Button variant="outline-success" href="https://github.com/samuelemarino04/Q-support-server">Server Repository</Button>
                            <Button variant="outline-info" href="https://creativesqplus.netlify.app/">Web</Button>
                        </div>
                        <img src="public/images/singlepage.png" class="img-fluid" />
                    </article>
                    <article>
                        <div class="jod-desc">
                            <h3>Devops Project</h3>
                            <p>Azure, Docker, Terraform, Kubernetes, Prometheus, Grafana</p>
                            <Button variant="outline-success" href="https://github.com/samuelemarino04/DevOpsProject">Repository</Button>
                            <Button variant="outline-primary" href="https://www.canva.com/design/DAF3CMZI3lU/Mhe6wX5tqPkpjIXR96GpQw/view?utm_content=DAF3CMZI3lU&utm_campaign=designshare&utm_medium=link&utm_source=editor">Presentation</Button>
                        </div>
                        <img src="public/images/Devops2.png" class="img-fluid" />

                    </article>
                </div>
            </section>
        </>
    )
}

export default Projects