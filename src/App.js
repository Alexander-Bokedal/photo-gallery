import styled from 'styled-components'; 
import {motion} from 'framer-motion';
import Photographs from './Components/Photographs';
import Erika from './Assets/Erika.jpg';

const Gallery = styled(motion.div)`
display: flex; 
margin: 0 auto;
justify-content: center;
align-items: center;
height: 100vh;
max-width: 300px;
`

function App() {
  return (
   <Gallery>
    <Photographs image={Erika}></Photographs>
   </Gallery>
  );
}

export default App;
