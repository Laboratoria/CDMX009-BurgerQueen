import React from 'react';

const Button = ( { setVisible }  ) => {

    return(
        <div className='col m12 center-align'>
                    <div className="col s3">
                        <button className='dash-btn white-text' onClick={() => { setVisible(true) }}>Desayunos</button>        
                    </div>
                    <div className="col s3">
                        <button className='dash-btn right white-text' onClick={() => { setVisible(false) }}>Comidas</button>
                    </div>
                    <div className="col s3">
                        <button className='dash-btn right white-text'>Comidas</button>
                    </div>
                    <div className="col s3">
                        <button className=' dash-btn right white-text'>Comidas</button>
                    </div>
                    
                </div> 
    )
}

export default Button;
