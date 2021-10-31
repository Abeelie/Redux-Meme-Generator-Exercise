import React from "react";
import {Button} from "react-bootstrap";
import "./meme.css"

const Meme = (props) => {

  const handleDeleteMeme = () => props.deleteMeme(props.id);
  
  return (
    <div align="center">
      <div className="container">
        <span className="top-text">{props.topText}</span>
        <img src={props.url} alt="image" />
        <span className="bottom-text">{props.bottomText}</span>
        <div align="center">
            <Button onClick={handleDeleteMeme}>
                DELETE
            </Button>
        </div>
      </div>
    </div>
    )
}

export default Meme;
