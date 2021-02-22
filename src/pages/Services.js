import React from "react";
import {
  services,
  classes,
  equipment,
  spaces,
} from "../components/serviceList";

class Services extends React.Component {
  state = {
    serviceId: undefined,
    serviceName: undefined,
  };

  handleServiceClick(event) {
    // event.preventDefault();
    console.log(this.state.serviceName);
    this.setState(() => ({
      serviceName: event.target.value,
    }));
    console.log(this.state.serviceName);
  }

  render() {
    return (
      <div className="service__container">
        <div className="service">
          <div className="service__component">
            <div className="service__component-header">Rental Services</div>
            <div className="service__component-descr">
              Rent a variety of services through BCS. Need catering? Home care?
              Animal Care? We got you covered.
            </div>
            <div className="service__component-list">
              List of services available:
              {services.map((service) => (
                <div key={service.id}>
                  <a
                    href="service-item-info"
                    className="service__list--item"
                    onClick={() => {
                      this.handleServiceClick;
                    }}
                  >
                    {service.name}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="service__component">
            <div className="service__component-header">Rental Equipment</div>
            <div className="service__component-descr">
              Rent a variety of equipment through BCS. Need event equipment?
              Tables? Seating? Stages? We got you covered.
            </div>
            <div className="service__component-list">
              List of rental equipment available:
              {equipment.map((equip) => (
                <div key={equip.id}>
                  <a href="/service-item-info" className="service__list--item">
                    {equip.name}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="service__component">
            <div className="service__component-header">Rental Space</div>
            <div className="service__component-descr">
              Rent space at the BCS Center. Need space for a graduation?
              Wedding? Birthday? Party? We got you covered.
            </div>
            <div className="service__component-list">
              List of rental spaces available:
              {spaces.map((space) => (
                <div key={space.id}>
                  <a href="/service-item-info" className="service__list--item">
                    {space.name}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="service__component">
            <div className="service__component-header">Classes</div>
            <div className="service__component-descr">
              Looking for art or language classes? We offer classes languages,
              arts, and some technical skills, catering to a variety of skill
              levels from novice to expert.
            </div>
            <div className="service__component-list">
              List of classes available:
              {classes.map((class_name) => (
                <div key={class_name.id}>
                  <a href="/service-item-info" className="service__list--item">
                    {class_name.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
