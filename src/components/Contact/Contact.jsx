import './Contact.css'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


const Contact = () => {


    return (
        <>
            <div class="container-fluid d-flex align-items-center justify-content-center flex-column" style={{ marginBottom: '20px' }}>
                <h3 id="encontrame">Contact me</h3>
                <Container>
                    <Row>
                        <Col xs={12} md={4} className="d-flex align-items-center justify-content-center">
                            <a href="mailto:samuele12601@gmail.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Image src="public/images/gmail.png" width={'15%'} />
                            </a>
                        </Col>
                        <Col xs={12} md={4} className="d-flex align-items-center justify-content-center" >
                            <a href="https://www.linkedin.com/in/samuele-marino-7baa9a27b/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Image src="public/images/linkedin.png" width={'20%'} />
                            </a>
                        </Col>
                        <Col xs={12} md={4} className="d-flex align-items-center justify-content-center">
                            <a href="https://github.com/samuelemarino04" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Image src="public/images/github.png" width={'30%'} />
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    )
}

export default Contact