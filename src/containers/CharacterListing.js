import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CharacterComponent from "./CharacterComponent";
import axios from "axios";
import { setCharacters } from "../redux/actions/characterActions";

const CharacterListing = () => {
  const characters = useSelector((state) => state);
  const dispatch = useDispatch();
  // console.log(characters);

  const fetchCharacters = async () => {
    const response = await axios
      .get("https://rickandmortyapi.com/api/character")
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(setCharacters(response.data.results));
    console.log(response);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);
  // console.log("Characters:", characters);

  //   console.log(characters);
  return (
    <div>
      <h1 className="text-center my-4">Character List </h1>
      <CharacterComponent />
    </div>
  );
};

export default CharacterListing;
