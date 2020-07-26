import React, { useState } from 'react'

function TipOption({ orderFinished }) {

    const [tip, setTip] = useState(null)

    return (
        <form action="#">
            <p>
                <label>
                    <input name="group1" type="radio" checked onClick={() => setTip(1.10)} />
                    <span>10%</span>
                </label>
            </p>
            <p>
                <label>
                    <input name="group1" type="radio" onClick={() => setTip(1.15)} />
                    <span>15%</span>
                </label>
            </p>
            <div className="input-field col s6">
                <input className='black' placeholder="Otro" id="first_name" type="text" className="validate" onClick={() => setTip()} />
            </div>
            <div>
                <p>Total incluyendo propina: {(orderFinished.total * tip).toFixed(2)}</p>
            </div>
        </form>
    )
}

export default TipOption;