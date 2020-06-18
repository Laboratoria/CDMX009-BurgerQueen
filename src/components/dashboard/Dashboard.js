import React, { Component } from 'react';
import Cards from '../menuCards/Cards';

class Dashboard extends Component {
    render() {
        //console.log(this.props);

        return(
            <div className='dashboard container'>
                <div className='row'>
                    <div className='col s12 m6'>
                        <Cards />
                    </div>
                    <div className='col s12 m5 offset-m1'></div>
                </div>

            </div>
        )
    }
}

export default Dashboard
