import React from 'react'

function TipOption() {
    return (
        <div className=''>
            <form action="#">
                <p>
                    <label>
                        <input name="group1" type="radio" checked />
                        <span>10%</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input name="group1" type="radio" />
                        <span>15%</span>
                    </label>
                </p>
                <div class="input-field col s6">
                    <input className='black' placeholder="Otro" id="first_name" type="text" class="validate" />
                </div>
            </form>
        </div>
    )
}

export default TipOption;