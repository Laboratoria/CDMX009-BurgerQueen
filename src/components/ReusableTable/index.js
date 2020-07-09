import React from 'react';
import Stepper from "@kiwicom/orbit-components/lib/Stepper";
import DateTime from '../DateTime/DateTime';
import IconDelete from '../../assets/imgs/trash.png';



const ReusableTable = () => {
    return (
        <div>
            <img src={IconDelete} alt="" width={35} height={"auto"} />
            <div><DateTime /> </div>
            <div><span>No de Mesa</span></div>
            <div><span>No de Personas</span></div>
            <div><span>No de Orden</span></div>

            <div><span>Café americano   <Stepper minValue={0} maxValue={100} /></span> </div>
            <div><span>Café con leche   <Stepper minValue={0} maxValue={100} /></span> </div>
            <div><span>Café americano   <Stepper minValue={0} maxValue={100} /></span> </div>
            <div><span>Café con leche   <Stepper minValue={0} maxValue={100} /></span> </div>
            <div><span>Café americano   <Stepper minValue={0} maxValue={100} /></span> </div>
            <div><span>Café con leche   <Stepper minValue={0} maxValue={100} /></span> </div>
            <div><span>Café americano   <Stepper minValue={0} maxValue={100} /></span> </div>
        </div>
    );
}
export default ReusableTable;