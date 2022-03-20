import React, { useEffect, useState } from "react";
import A from '../images/A 2.png'
import B from '../images/B 2.png'
import C from '../images/C 2.png'
import D from '../images/D 2.png'
import E from '../images/E 2.png'
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

const images = [A, B, C, D, E];

export default function ImageSwapper() {
    const [currentImage, setCurrentImage] = useState(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage(images[Math.floor(Math.random() * images.length)]);
        }, 3000)

        return () => clearInterval(intervalId);
    }, [])

    return (
        <Container className='mb-8' >
            <div className='container-fluid'>
                <img src={currentImage} className='d-block w-100' />
            </div>

        </Container>
    )
}