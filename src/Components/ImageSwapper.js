import React, { useEffect, useState } from "react";
import A from '../images/A.png'
import B from '../images/B.png'
import C from '../images/C.png'
import D from '../images/D.png'
import E from '../images/E.png'


const images = [A, B, C, D, E];

export default function ImageSwapper() {
    const [currentImage, setCurrentImage] = useState(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage(images[Math.floor(Math.random() * images.length)]);
        }, 5000)

        return () => clearInterval(intervalId);
    }, [])

    return (
        <div>
            <img src={currentImage} />
        </div>
    )
}