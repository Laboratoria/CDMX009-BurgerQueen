import React,  {useState, useEffect} from 'react';
import Button from '../common/Button'

let MenuNavBar = ({setMenuBtn}) => {
  
   let [statusBreakfast,setStatusBreakfast] = useState("active-menu-btn"); 
   let [statusHamburgers,setStatusHamburgers] = useState("menu-nav-btn");
   let [statusDrinks,setStatusDrinks] = useState("menu-nav-btn");
   let [statusSides,setStatusSides] = useState("menu-nav-btn"); 

   function clickBtn(statusBtn, menuBtn){
    setStatusBreakfast("menu-nav-btn");
    setStatusHamburgers("menu-nav-btn");
    setStatusDrinks("menu-nav-btn");
    setStatusSides("menu-nav-btn");
    statusBtn('active-menu-btn');
    setMenuBtn(menuBtn);
  }
   
    return (
      <nav className="menu-nav">
        
        <div>
            <Button 
                className={statusBreakfast} 
                value="Desayunos"
                onClick={(e)=>clickBtn(setStatusBreakfast, 'breakfast')}
            />
            <Button 
                className={statusHamburgers} 
                value="Hamburguesas"
                onClick={(e)=>clickBtn(setStatusHamburgers, 'hamburgers')}
            />
            <Button 
                className={statusDrinks} 
                value="Bebidas"
                onClick={(e)=>clickBtn(setStatusDrinks, 'drinks')}
            />
            <Button 
                className={statusSides} 
                value="Complementos"
                onClick={(e)=>clickBtn(setStatusSides, 'sides')}
            />
           
        </div>
      </nav>
    );
}
 
export default MenuNavBar;
