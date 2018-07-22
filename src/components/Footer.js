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
                                <a className="fb-ic ml-0"><i className="fa fa-facebook white-text mr-4"> </i></a>
                                <a className="tw-ic"><i className="fa fa-twitter white-text mr-4"> </i></a>
                                <a className="gplus-ic"><i className="fa fa-google-plus white-text mr-4"> </i></a>
                                <a className="li-ic"><i className="fa fa-linkedin white-text mr-4"> </i></a>                                
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