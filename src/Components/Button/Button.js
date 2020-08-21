import React from 'react'
import '../Button/Button.scss'
import btnRosa from '../../Assets/btnMenu.png'
import btnVerde from '../../Assets/btnHeader.png'
import btnEnter from '../../Assets/btnEnter.png'
import btnMas from '../../Assets/mas.png'

const Button = ({ value, pink = false, green = false, enter= false, mas= false, onClick}) => {
    let src = btnRosa;
    let testId = 'btnRosa'
    let font ='40pt'
    let width = '210px'
    let height = '90'

    if (pink === true) {
        src = btnRosa
        testId = 'btnRosa'
    }else if(green) {
        src = btnVerde
        testId = 'btnVerde'
    }else if (enter){
        src = btnEnter
        testId = 'btnEnter'
        font = '25pt'
        width = '150px'
        height = '60px'
    }else if (mas){
        src = btnMas
        testId = 'btnMas'
        width = '60px'
        height = '40px'
    }

    const style = { 
        backgroundImage: `url(${src})`, 
        backgroundRepeat: 'no-repeat',
        fontSize: `${font}`,
        width: `${width}`,
        height: `${height}`
     }
    return(
    <button data-testid={testId} className='btn' style={style} onClick={onClick}>{value}</button>
    )
}

export default Button