import React from "react";
import Meme from "../Meme/Meme";
import MemeForm from "../MemeForm/MemeForm";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "react-bootstrap";

const MemeContainer = () => {
    const memes = useSelector(store => store.memes);
    const dispatch = useDispatch();
    const addMeme = (newMeme) => dispatch({ type: "ADD_MEME", meme: newMeme });
    const deleteMeme = (id) => dispatch({type: "REMOVE_MEME", id });
      
    return(
        <div>
            <MemeForm addMeme={addMeme} />
            <Container>
            {memes.map(meme => (
            <Meme
                key={meme.id}
                topText={meme.topText}
                bottomText={meme.bottomText}
                url={meme.url}
                deleteMeme={() => deleteMeme(meme.id)}
                />
            ))}
            </Container>
        </div>
    )
}

export default MemeContainer