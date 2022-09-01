import React from "react";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const CharacterComponent = (props) => {
  const characters = useSelector((state) => state.allCharacters.characters);
  const renderList = characters.map((character) => {
    const { id, name, image } = character;
    return (
      <div key={id}>
        <Col className="mt-2">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={image} alt={name} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Button variant="primary">
                <Link to={`/character/${id}`}>Detail</Link>
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
  });

  return (
    <div>
      <Row lg={3} md={2} sm={1}>
        {renderList}
      </Row>
    </div>
  );
};

export default CharacterComponent;
