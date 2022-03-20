import React, {
  useState,
  useEffect,
} from 'react';
import {Container, Nav, Navbar, NavDropdown, Form} from "react-bootstrap";

function UploadFile() {

    const [fileName, setFileName] = useState("Upload Boundary File");

    return(
        <>
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Default file input example</Form.Label>
                <Form.Control
                    type="file"
                      className="custom-file-label"
                      id="inputGroupFile01"
                      label={fileName}
                      onChange={(e) => setFileName(e.target.files[0].name)}
                      custom
                />
              </Form.Group>
        </>
    )
}

export default UploadFile;