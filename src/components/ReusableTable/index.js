import React from 'react';
import Stepper from "@kiwicom/orbit-components/lib/Stepper";
import DateTime from '../DateTime/DateTime';
import IconDelete from '../../assets/imgs/trash.png';



const ReusableTable = () => {
    return (
        <div>

            <div><DateTime /> </div>
            <div><span>No de Mesa</span></div>
            <div><span>No de Personas</span></div>
            <div><span>No de Orden</span></div>

            <div>
                <div>Café americano</div>
                <Stepper minValue={0} maxValue={100} />
                <div><img src={IconDelete} alt="" width={35} height={"auto"} /></div>
            </div>

            <div>
                <div>Café con leche</div>
                <Stepper minValue={0} maxValue={100} />
                <div><img src={IconDelete} alt="" width={35} height={"auto"} /></div>
            </div>











        </div>
    );
}
export default ReusableTable;