// A handleClick function that will increment the score by 1
// and immediately set the clicked-on mole to no longer display 
// (we will pass this down only to Mole components)

// A ternary that will determine which child to render

import Mole from './Mole'

function MoleContainer(props){
    return (
        <div>
            <h2> Mole Container </h2>
            <Mole />
        </div>
    )
}

export default MoleContainer;
