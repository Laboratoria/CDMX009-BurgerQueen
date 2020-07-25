import React, { useState } from 'react';
import './order-finished.css';

function TipOption({ orderFinished }) {

    const [tip, setTip] = useState(null);

    return (
        <form action="#">
            <p>
                <label>
                    <input name="group1" type="radio" checked onClick={() => setTip(1.10)} />
                    <span className='total-order-finished'>10%</span>
                </label>
            </p>
            <p>
                <label>
                    <input name="group1" type="radio" onClick={() => setTip(1.15)} />
                    <span className='total-order-finished'>15%</span>
                </label>
            </p>
            <div>
                <p className='total-order-finished'>Total incluyendo propina: {(orderFinished.total * tip).toFixed(2)}</p>
            </div>
        </form>
    );
}

export default TipOption;