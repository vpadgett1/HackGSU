import '../module2pages/module2styling/style.css';
import React, {
  useState,
  useEffect,useRef
} from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';


function Module2_page4 () {

  return (
    <div>
        <li>
        AI models are made up of what is called layers and this class of models are called Deep Learning Convolutional Neural Network because they have a lot of layers where as the layer numbers increase we get to identify more complex things from the image.
        </li>
        <li>
        The initial layers identify things like edges which are lines in images and color changes over the image
        </li>
        <li>
        The middle layers mostly identify textures we need to look to make a decision
        </li>
        <li>
        The higher regions look at things like depth and shadowing and similar higher order features
        </li>
        <li>
        The top layers look more into things like regions of the image that might contain the features like whiskers of a cat, or teeth of a dog.
        </li>
        <li>
        AI models are made up of layers. As the layers of an image increase, we can identify more complex things from the image. For example, instead of identifying the stripes on the cat selected we can identify the eyes of the cat.  This is called a Deep Learning Convolutional Neural Network.
        </li>
        <li>
        The initial layers identify parts of the image like edges and color changes inside an image.
        </li>
        <li>
        The middle layers mostly identify textures we need to look to make a decision.
        </li>
        <li>
        The higher regions look at things like depth and shadowing and similar higher order features.
        </li>
        <li>
        The top layers look more into things like regions of the image that might contain the features like whiskers of a cat, or teeth of a dog.
        </li>

    </div>
  );
}

export default Module2_page4;