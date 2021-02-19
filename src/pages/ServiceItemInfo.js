import React from 'react';
import { randomText } from '../components/randomLorem';

const ServiceItemInfo = (props) => {

    return (
        <div className="container">
            
            <div className="serviceItem">
                <h3 className="serviceItem__head">Service Item: NAMED-ITEM placeholder</h3>
                <div className="serviceItem__descr">
                    More in depth information about selected service item:
                    <div className="serviceItem__text">
                        <p>{randomText()}</p>
                        <p>{randomText()}</p>
                        <p>{randomText()}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceItemInfo;