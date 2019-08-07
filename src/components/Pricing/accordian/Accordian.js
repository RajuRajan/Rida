import React, { Component } from 'react';
import { accordianData } from './AccordianData';
import downblack from '../../../assets/images/down.svg';


export default class Accordian extends Component {
    render() {
        return (
            <div>
                 {
                accordianData.map((value, index) => {
                  return (
                    <div>
                      <div className={value.classname} role="tab" id={value.id}>
                        <h4 className="panel-title flex">
                          <div className="left-img">
                            <a role="button" data-toggle="collapse" data-parent="#accordion" href={value.href}
                              aria-expanded="true" aria-controls={value.ariacontrols}>
                              <img src={value.icon} /><span>{value.name}</span>
                            </a>
                          </div>
                          <div className="down"><a role="button" data-toggle="collapse" data-parent="#accordion"
                            href={value.href} aria-expanded="true" aria-controls={value.ariacontrols}>
                            <img src={downblack} />
                          </a></div>
                        </h4>
                      </div>
                      <div id={value.ariacontrols} className="panel-collapse collapse in" role="tabpanel" aria-labelledby={value.id}>
                        <div className="panel-body">{value.body}</div>
                      </div>
                    </div>
                  )
                }
                )}
            </div>
        )
    }
}
