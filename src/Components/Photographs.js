import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled.div`
  display: inline-block; /* Ensures the wrapper only takes up the content's width */
  transition: opacity 2s ease-in-out;
`;

const Words = styled(motion.div)`
font-size: 20px;
font-weight: bold;
text-align: center;
`

const Name = styled(motion.div)`
font-size: 30px;
font-weight: bold;
text-align:center;
`

const Photograph = styled(motion.div)`
  &:hover {
    box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.5);
  }
`;

function Photographs({ image }) {
  return (
    <Wrapper>
        <Words
         initial={{ opacity: 0, scale: 0.8 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 2, delay: 0.5 }}>Smart</Words>
        <Words
         initial={{ opacity: 0, scale: 0.8 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 2, delay: 2.5 }}>Snäll</Words>
        <Words
         initial={{ opacity: 0, scale: 0.8 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 2, delay: 4.5 }}>Gammal</Words>
      <Photograph
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 6.5 }}
      >
        <img src={image} alt="Photograph" />
      </Photograph>
      <Name
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 8.5 }}>Grattis Erika!</Name>
    </Wrapper>
  );
}

export default Photographs;
