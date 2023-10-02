import { useState } from 'react';

import Box from './Box';
import Plane from './Plane';


const Game = () => {

    const [ gameProgress, setGameProgress ] = useState({box1: false, box2: false}),
        [ box1Clicked, setBox1Clicked ] = useState(false);

    console.log('gameProgress', gameProgress);

    console.log('box1Clicked', box1Clicked);


    return (	
        <>	
            <Box id='box1' setBox1Clicked={setBox1Clicked} gameProgress={gameProgress} setGameProgress={setGameProgress} positionX={2} positionY={2} color='brown' />
            <Box id='box2' gameProgress={gameProgress} setGameProgress={setGameProgress} positionX={1} positionY={2} color='orange' />
            <Box positionX={1} positionY={1} positionZ={1} width={4} height={4} depth={4} color='white' opacity={0.5} bounceOnClick={false} />
            <Plane />
        </>
    )
}

export default Game;