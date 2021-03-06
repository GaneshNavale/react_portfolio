import React, { Component } from 'react';
import { Container, Row, Animation, Col, Progress, Card, CardBody, Avatar, Mask, Fa, View, Button} from 'mdbreact';
import profile from '../profile1.jpeg';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    return (
      <Container fluid className="background">
        <Container>
        <Row>
          <Col lg="5" md="12" className="mb-lg-0 mt-5 text-center">
            <Animation type="zoomIn">
              <img src={profile} className="rounded-circle mt-5 z-depth-1 profile-img" alt="Responsive image"/>
            </Animation>
            <h5 className="text-uppercase font-weight-bold mt-4 mb-2">Ganesh Navale</h5>
            <p>Software Engineer @Tech9, Pune</p>
            <ul className="list-unstyled mb-3">
              <a href='https://github.com/GaneshNavale' className="p-2 fa-lg">
                <Fa icon="github" className="blue-text"/>
              </a>
              <a href='https://www.linkedin.com/in/ganesnavale' className="p-2 fa-lg">
                <Fa icon="linkedin" className="blue-text"/>
              </a>
              <a href='https://stackoverflow.com/users/7804093/ganesh' className="p-2 fa-lg">
                <Fa icon="stack-overflow" className="blue-text"/>
              </a>
              <a href="https://www.facebook.com/navale.ganesh.52" className="p-2 fa-lg">
                <Fa icon="facebook" className="blue-text"/>
              </a>
            </ul>
          </Col>
          <Col lg="7" md="12" className="mb-lg-0 mt-5">
            <h3 className="m-5 text-center font-weight-bold">About Me..!</h3>
            <p className="pl-lg-5 pr-lg-5 mt-lg-0 mt-4 text-justify">
              I’m a programmer living in Pune. I type on the keyboards and sometimes it makes stuff happen to computers. Then I put it online.
              I love making code readable so that it's easier to change. That involves a lot of refactoring, which I enjoy a lot!
              Currently I work for Tech9 and on whatever else I feel like.
              Ruby and RoR are my weapons of choice at the moment.
              In my free time I do experiment with #Golang and also like to work with javascript frontend frameworks like #reactjs
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg="5" md="12" className="mb-lg-0 text-center">
            <h3 className="mt-2 text-center font-weight-bold">Skills..!</h3>
            <p className="text-left">
              <h6 className="mt-1">Ruby on Rails</h6>
              <Progress className="" color="success" value={75}></Progress>
              <h6 className="mt-1">JavaScript</h6>
              <Progress className="" color="warning" value={70}></Progress>
              <h6 className="mt-1">HTML & CSS</h6>
              <Progress className="" color="info" value={67}></Progress>
              <h6 className="mt-1">MySQL/PostgreSQL Database</h6>
              <Progress className="" color="danger" value={73}></Progress>
              <h6 className="mt-1">Rspec/Minitest</h6>
              <Progress className="" value={80}></Progress>
              <h6 className="mt-1">React Js</h6>
              <Progress className="" color="warning" value={40}></Progress>
            </p>
          </Col>
          <Col lg="7" md="12">
            <p className="pl-lg-5 pr-lg-5 text-justify">
              <h3 className="text-center font-weight-bold">Experience..!</h3>
              <h6 className="text-uppercase font-weight-bold mt-4 mb-2 text-justify">Tech9</h6>
              <h6 className="black-text">Software Engineer III / Pune / Dec 2020 - Present</h6>
              <h6 className="text-uppercase font-weight-bold mt-4 mb-2 text-justify">Edcast Asia Pvt. Ltd.</h6>
              <h6 className="black-text">Sr. Software Engineer / Mumbai / March 2018 - Dec 2020</h6>
              <p>Worked on EdCast Content Library to collect content across the web and provide it to users.
                Implemented internal APIs and Developer APIs for mobile and web clients. Developing new features with fast iterations.
                Core part of integration team, Integrating different API's to collect content and make it available for end users.
                Worked as a part of Performance and LiveOps Team which are resposible for live operations and application performance.
              </p>
              <h6 className="text-uppercase font-weight-bold mt-4 mb-2 text-justify">Allerin Tech Pvt. Ltd.</h6>
              <h6 className="black-text">RoR Developer / New Mumbai / June 2016 - Feb 2018</h6>
              <p className="text-justify"> First job after college - started as junior engineer and evolved into senior role.
                Projects included constant feature development, codebase refatoring, app redesign, API migration, etc.
                Briefly trained on Ruby and RoR development with unit testing (Rspec).
              </p>
            </p>
          </Col>
        </Row>
        </Container>
      </Container>
    );
  }
}

export default Home;