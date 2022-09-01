import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { selectedCharacter } from "../redux/actions/characterActions";
import { createLocations } from "../redux/actions/locationActions";
import { useDispatch, useSelector } from "react-redux/es/exports";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

const CharacterDetail = () => {
  const character = useSelector((state) => state.character);
  const { name, status, species, gender, image } = character;
  const { characterId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(character);

  const stateLocation = useSelector((state) => state.locations);
  // console.log(stateLocation.locations);
  // const [getLocations, setLocations] = useState([]);
  const [getInputLocations, setInputLocations] = useState("");

  const handleInputLocations = (event) => {
    setInputLocations(event.target.value);

    // console.log(getInputTodo);
  };

  // console.log(stateLocation.locations);
  const handlesubmit = (event) => {
    event.preventDefault();

    const newLocations = {
      locations: getInputLocations,
      character: character,
    };
    eventCreateLocations(newLocations);
    setInputLocations("");
    localStorage.setItem("CharacterLocation", JSON.stringify(stateLocation));
    navigate("/location");
  };

  const eventCreateLocations = (locations) => {
    // setLocations(stateLocation.concat(locations));
    dispatch(createLocations(locations));
    // console.log(stateLocation);
  };

  // console.log(stateLocation);

  const fetchCharacterDetail = async () => {
    const response = await axios
      .get(`https://rickandmortyapi.com/api/character/${characterId}`)
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(selectedCharacter(response.data));
  };
  useEffect(() => {
    if (characterId && characterId !== "") fetchCharacterDetail();
  }, [characterId]);

  // console.log(getLocations);

  return (
    <div>
      <h1 className="text-center my-4">Character Detail</h1>
      {Object.keys(character).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <Card className="mt-5">
          <Row xs={1} sm={1} md={2} lg={2} xl={2}>
            <Col>
              <Card.Img
                variant="top"
                src={image}
                alt={name}
                className="img-fluid"
              />
            </Col>
            <Col>
              <div>
                <h1>{name}</h1>
              </div>
              <p>Status: {status}</p>
              <p>Species: {species}</p>
              <p>Gender: {gender}</p>
              <div>
                <p>Location :</p>
                <form className="todo-form" onSubmit={handlesubmit}>
                  <input
                    type="text"
                    value={getInputLocations}
                    onChange={handleInputLocations}
                    required
                    placeholder="Input character location"
                  />
                  <button type="submit" className="bg-primary mx-2 text-light">
                    Add
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </Card>
      )}
    </div>
  );
};

export default CharacterDetail;
