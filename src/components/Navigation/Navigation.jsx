import { Nav } from 'react-bootstrap'


import './Navigation.css'




const Navigation = () => {


    return (

        <Nav className="navbar navbar-expand-md  navbar-light bg-dark">
            <div className="collapse navbar-collapse justify-content-start">
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link text-white" href="#sobre">About</a></li>
                    <li class="nav-item"><a class="nav-link text-white" href="#portfolio" >Projects</a></li>
                    <li class="nav-item"><a class="nav-link text-white" href="#encontrame">Contact me</a></li>
                </ul>
            </div>
            <div className="justify-content-end">
                <ul class="navbar-nav">
                    <li class="nav-item text-white" style={{ marginRight: '15px' }}>Samuele Marino</li>
                </ul>
            </div>
        </Nav>

    )
}

export default Navigation