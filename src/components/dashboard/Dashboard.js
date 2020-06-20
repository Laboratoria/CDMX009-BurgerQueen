import React, { Component } from 'react';
import BreakfastCards from '../menuCards/BreakfastCards';

class Dashboard extends Component {
    render() {
        //console.log(this.props);

        return (
            <div className='dashboard container'>
                <div className='row'>
                    <div className='col s12 m6'>
                        <BreakfastCards />
                    </div>
                    <div className='col s12 m5 offset-m1'></div>
                </div>

            </div>
        )
    }
}

export default Dashboard
