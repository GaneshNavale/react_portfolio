import React, { Component } from 'react';
import { Container, Row, Animation, Col, Progress, Card, CardBody, Avatar, Mask, Fa, View, Button} from 'mdbreact';
import profile from '../profile.jpg';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    return (
      <Container>
          <Row className="mb-5">
            <Col lg="3" md="12" className="mb-lg-0 mt-5 text-center">
              <Animation type="zoomIn">
                <img src={profile} className="img-fluid rounded-circle mt-5 z-depth-1 profile-img" alt="Responsive image"/>
              </Animation>
              <h5 className="text-uppercase font-weight-bold mt-4 mb-2">Ganesh Navale</h5>
              <p className="black-text">Software Engineer <p className="grey-text">@Edcast, Mumbai</p></p>
              <ul className="list-unstyled mb-3">

                <a className="p-2 fa-lg">
                  <Fa icon="facebook" className="blue-text"/>
                </a>
                <a className="p-2 fa-lg">
                  <Fa icon="twitter" className="blue-text"/>
                </a>
                <a className="p-2 fa-lg">
                  <Fa icon="instagram" className="blue-text"/>
                </a>
              </ul>
            </Col>
            <Col lg="4" md="12" className="mb-lg-0 mt-5 text-center">
              <h3 className="m-5 text-center font-weight-bold text-uppercase">Skills..!</h3>
              <p className="mt-4 text-left">
                <h5 className="">Ruby on Rails</h5>
                <Progress className="" color="success" value={75}></Progress>
                <h5 className="mt-1">JavaScript</h5>
                <Progress className="" color="warning" value={70}></Progress>
                <h5 className="mt-1">HTML & CSS</h5>
                <Progress className="" color="info" value={73}></Progress>
                <h5 className="mt-1">MySQL Database</h5>
                <Progress className="" color="danger" value={73}></Progress>
                <h5 className="mt-1">Rspec</h5>
                <Progress className="" value={80}></Progress>
              </p>
            </Col>
            <Col lg="5" md="12" className="mb-lg-0 mt-5 text-left">
              <h3 className="m-5 text-center font-weight-bold text-uppercase">About Me..!</h3>
              <p className="mt-4 pl-lg-5 text-justify">
                I’m a programmer living in Mumbai. I type on the keyboards and sometimes it makes stuff happen to computers. Then I put it online.
                I love making code readable so that it's easier to change. That involves a lot of refactoring, which I enjoy a lot!
                Currently I work for Edcast and on whatever else I feel like.
                Ruby and RoR are my weapons of choice at the moment.
                In my free time I do experiment with #Golang and also like to work with javascript frontend frameworks like #reactjs
              </p>
            </Col>
          </Row>
      </Container>
    );
  }
}

export default Home;