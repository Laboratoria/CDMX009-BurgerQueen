import React from 'react';

const Experiment = ({food}) => {
    
    const {name, img} = food;

    return (
        <div>
            <img alt= {name} src= {img} onClick={() => console.log('Holi!')}/>
        </div>  
    )
}
export default Experiment;
