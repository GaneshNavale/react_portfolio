import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Fa, Button, Input } from 'mdbreact';

class Contact extends Component {
  render() {
    return(
      <Container className="p-lg-5">
        <Card className="p-lg-5">
          <CardBody>
            <Row>
              <Col lg="8" sm="6">
                <form>
                  <Row>
                    <Col sm="6">
                      <div className="sm-form mb-0">
                        <Input type="text" id="contact-name" label="Your name" />
                      </div>
                    </Col>
                    <Col sm="6">
                      <div className="sm-form mb-0">
                        <Input type="text" id="contact-email" label="Your email" />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm="12">
                      <div className="sm-form mb-0">
                        <Input type="text" id="contact-subject" label="Subject" />
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col ms="12">
                      <div className="sm-form mb-0">
                        <Input type="textarea" id="contact-message" label="Your message" />
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center text-sm-left">
                    <Button color="primary" size="md">Send</Button>
                  </div>
                </form>
            </Col>
            <Col lg="4" sm="6" className="p-5 text-center">
              <ul className="list-unstyled">
                <li>
                  <Fa icon="map-marker" size="2x" className="blue-text"/>
                  <p className="black-text">Mumbai, India</p>
                </li>
                <li>
                  <Fa icon="phone" size="2x" className="blue-text mt-4"/>
                  <p className="black-text">+91 9637414895</p>
                </li>
                <li>
                  <Fa icon="envelope" size="2x" className="blue-text mt-4"/>
                  <p className="black-text">navaleganesh2011@gmail.com</p>
                </li>
              </ul>
            </Col>
          </Row>
        </CardBody>
      </Card>
      </Container>
    );
  };
}

export default Contact;