import { Nav } from 'react-bootstrap'
import './Navigation.css'




const Navigation = () => {


    return (

        <Nav className="navbar navbar-expand-md navbar-light bg-dark">
            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link text-white" href="#sobre">About</a></li>
                    <li class="nav-item"><a class="nav-link text-white" href="#portfolio" >Portfolio</a></li>
                    <li class="nav-item"><a class="nav-link text-white" href="#encontrame">Contact me</a></li>
                </ul>
            </div>
        </Nav>

    )
}

export default Navigation