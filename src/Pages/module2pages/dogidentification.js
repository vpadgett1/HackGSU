import '../module2pages/module2styling/style.css';
import React, {
    useState,
    useEffect, useRef
} from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';


function Module2_dogidentification() {

    return (
        <div>
            <p>
                Our AI identified it as a Standard Poodle.
            </p>
            <p>
                To Identify the images the AI looks at different features like you did and also these features it learns by itself through a process called training. Training is when the AI is provided different images of an person, place, thing or object and the job of the AI is to discover matching features between the given object and the object it needs to identify.
            </p>

            <div>
                <button onClick={() => window.location.href = '/module2-doglayers'}> Continue </button>
            </div>

        </div>
    );
}

export default Module2_dogidentification;