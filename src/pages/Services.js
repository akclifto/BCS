import React from 'react';
import { randomText, randomHeadline } from '../components/randomLorem';

const Services = () => (

    <div className="service__container">

        <div className="service">

            <div className="service__component">

                <div className="service__component-header">
                    Rental Services
                </div>
                <div className="service__component-descr">
                    Rent a variety of services through BCS.  Need catering?
                    Home care?  Animal Care?
                    We got you covered.
                </div>
                <div className="service__component-list">
                    List of services:
                    <ul className="service__list--head">
                        <a href="#" className="service__list--item">Catering</a><br />
                        <a href="#" className="service__list--item">Home Care</a><br />
                        <a href="#" className="service__list--item">Elderly Care</a><br />
                        <a href="#" className="service__list--item">Animal Care</a><br />
                    </ul>
                </div>

            </div>

            <div className="service__component">
                <div className="service__component-header">
                    Rental Equipment
            </div>
                <div className="service__component-descr">
                    Rent a variety of equipment through BCS.  Need event equipment?
                    Tables? Seating? Stages?  We got you covered.
                </div>
            </div>

            <div className="service__component">
                <div className="service__component-header">
                    Rental Space
            </div>
                <div className="service__component-descr">
                    Rent space at the BCS Center.  Need space for a graduation?
                    Wedding?  Birthday? Party? We got you covered.
                </div>
            </div>

            <div className="service__component">

                <div className="service__component-header">
                    Classes
                </div>
                <div className="service__component-descr">
                    Looking for art or language classes? We offer classes
                    languages, arts, and some technical skills, catering to a variety
                    of skill levels from novice to expert.
                </div>
                <div className="service__component-list">
                    List of Classes:
                    <ul className="service__list--head">
                        <a href="#" className="service__list--item">Spanish</a><br />
                        <a href="#" className="service__list--item">German</a><br />
                        <a href="#" className="service__list--item">French</a><br />
                        <a href="#" className="service__list--item">English</a><br />
                        <a href="#" className="service__list--item">Painting</a><br />
                        <a href="#" className="service__list--item">Sculpting</a><br />
                        <a href="#" className="service__list--item">Design</a><br />
                        <a href="#" className="service__list--item">IT Services</a><br />
                        <a href="#" className="service__list--item">Networking</a><br />
                    </ul>
                </div>

            </div>
        </div>
    </div>
);

export default Services;