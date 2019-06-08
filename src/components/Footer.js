import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';

class FooterPage extends React.Component {
    render(){
        return(
            <Footer color="unique-color-dark" className="mt-0 page-footer font-small pt-0">
                <div style={{backgroundColor: '#6351ce'}}>
                    <Container>
                        <Row className="py-4 d-flex align-items-center">
                            <Col md="6" lg="4" className="text-center text-md-left">
                                <i className="fa fa-envelope mr-3"> navaleganesh2011@gmail.com </i>
                                <i className="fa fa-phone mr-3"> +91 9637414895 </i>
                            </Col>
                            <Col md="6" lg="8" className="text-center text-md-right">
                                <a href='https://github.com/GaneshNavale'> <i className="fa fa-github white-text mr-4"> </i></a>
                                <a href='https://www.linkedin.com/in/ganesnavale'><i className="fa fa-linkedin white-text mr-4"> </i></a>
                                <a href='https://stackoverflow.com/users/7804093/ganesh'><i className="fa fa-stack-overflow white-text mr-4"> </i></a>
                                <a href='https://www.facebook.com/navale.ganesh.52'><i className="fa fa-facebook white-text mr-4"> </i></a>

                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="footer-copyright text-center py-3">
                    <Container fluid>
                        Copyright &copy; {(new Date().getFullYear())} | Ganesh Navale. All Right Reserved.
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default FooterPage;