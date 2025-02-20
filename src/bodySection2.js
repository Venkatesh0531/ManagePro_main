import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import './ManageProSection.css';
function AdditionalContent() {
  return (
    <div style={{ paddingTop: 0, paddingBottom: 64 }}>
      <div>
        <div style={{ maxWidth: "100%" }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ marginTop: 0 }}>
              <h2>
                <br /><br /><light>Deliver your best work</light> <b>with ManagePro</b>
              </h2>
            </div>
            <div>
              <div>
                No credit card needed &nbsp; ✦ &nbsp; Unlimited time on Free plan
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WhyUseManagePro() {
  return (
    <Container>
      <Row>
        <Col md={8}>
          <Card>
            <Card.Body>
              <h2>Why Company Uses ManagePro</h2>
              <p>
                ManagePro is an indispensable tool for our company, offering a wide range of benefits:
              </p>
              <ul>
                <li>Efficient Project Management</li>
                <li>Task Tracking and Assignments</li>
                <li>Resource Allocation</li>
                <li>Real-time Collaboration</li>
                <li>Performance Analytics</li>
              </ul>
              <p>
                These features help us streamline our workflow, enhance productivity, and ensure successful project delivery. ManagePro keeps our teams aligned and empowers us to make data-driven decisions.
              </p>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className='cardv' >
            <Card.Body>
              <ReactPlayer
                url="https://youtu.be/cxAjsK0dh5I"
                width="450px"
                height="310px"
                controls
              /></Card.Body>
              <Card.Title className='cardtitle'>Watch Video. Get Started!.....</Card.Title>
          </Card>
        </Col>
      </Row>
      <AdditionalContent />
    </Container>
  );
}

export default WhyUseManagePro;
