import React from "react";
import { useSelector } from "react-redux";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const LocationComponent = (props) => {
  console.log(props.value);
  const data = props.value;
  const renderList = data.map((data) => {
    return (
      <div>
        <Col className="mt-2">
          <Card
            style={{ width: "18rem", height: "100%" }}
            className="bg-success"
          >
            <Card.Body>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header style={{ width: "20rem" }}>
                    <p>{data.locations}</p>
                  </Accordion.Header>
                  <Accordion.Body>
                    <h3>{data.character.name}</h3>
                  </Accordion.Body>
                  <Accordion.Body>
                    <div>
                      <img src={data.character.image} className="img-fluid" />
                    </div>
                  </Accordion.Body>
                  <Accordion.Body>
                    <h5>Species : {data.character.species}</h5>
                  </Accordion.Body>
                  <Accordion.Body>
                    <h5>Gender : {data.character.gender}</h5>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
  });

  return (
    <div>
      <h1 className="text-center my-4">Location List </h1>
      <Row lg={3} md={2} sm={1}>
        {renderList}
      </Row>
    </div>
  );
};

export default LocationComponent;
