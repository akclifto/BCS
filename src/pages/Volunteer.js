import React from "react";
import {
  services,
  classes,
  equipment,
  spaces,
  volunteerList,
} from "../components/serviceList";

class Volunteer extends React.Component {
  render() {
    return (
      <div className="service__container">
        <div className="service">
          <div className="service__component">
            <div className="service__component-header">Volunteer with BCS</div>
            <div className="service__component-descr">
              Volunteers are vital to our services and our community. We are
              always looking for more volunteers to help out with the community
              services. Click on each service to see more information and where
              you may be able to volunteer.
            </div>
            <div className="service__component-list">
              Volunteer to help with services (may require skill assessment):
              {services.map((service) => (
                <div key={service.id}>
                  <a
                    href="/volunteer-item-info"
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
            <div className="service__component-list">
              Volunteer to teach classes (may require skill assessment):
              {classes.map((class_name) => (
                <div key={class_name.id}>
                  <a
                    href="/volunteer-item-info"
                    className="service__list--item"
                  >
                    {class_name.name}
                  </a>
                </div>
              ))}
            </div>
            <div className="service__component-list">
              Volunteer for more community needs:
              {equipment.map((equip) => (
                <div key={equip.id}>
                  <a
                    href="/volunteer-item-info"
                    className="service__list--item"
                  >
                    {equip.name}
                  </a>
                </div>
              ))}
            </div>
            <div className="service__component-list">
              {volunteerList.map((volunteer) => (
                <div key={volunteer.id}>
                  <a
                    href="/volunteer-item-info"
                    className="service__list--item"
                  >
                    {volunteer.name}
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

export default Volunteer;
