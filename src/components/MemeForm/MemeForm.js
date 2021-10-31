import React, {useState} from "react";
import {Container, Form, Button} from "react-bootstrap";
import { v4 as uuid } from "uuid";

const MemeForm = (props) => {
    const initialFormState = {url: "", topText: "", bottomText: ""}
    const [formData, setFormData] = useState(initialFormState);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addMeme({ ...formData, id: uuid() });
        setFormData(initialFormState);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({
          ...formData,
          [name]: value,
        }));
    };

    return (
        <div align="center">
            <h1>Create a Meme</h1>
            <Container style={{display: "table-caption"}}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Image Url</Form.Label>
                        <Form.Control 
                            value={formData.url}
                            name="url"
                            onChange={handleChange}
                            type="text" 
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Top Text</Form.Label>
                        <Form.Control 
                            value={formData.topText}
                            name="topText"
                            onChange={handleChange}
                            type="text" 
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Bottom Text</Form.Label>
                        <Form.Control 
                            value={formData.bottomText}
                            onChange={handleChange}
                            name="bottomText"
                            type="text" 
                        />
                    </Form.Group>
                    <div align="center">
                        <Button variant="primary" type="submit">
                            Submit
                        </Button> 
                    </div>    
                </Form>
            </Container>
        </div>
    )
}

export default MemeForm;