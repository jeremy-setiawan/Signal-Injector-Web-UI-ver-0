import React from 'react';

import './Value-Simple-Container.css';


function ValueSimpleContainer(props){
    return(
        <section className="holder"/** Holder*/>
            <section  /**Name */>
                <p className="value-name">{props.title}</p>
            </section>
            <hr className="separator"/>
            <section className="value-unit-subholder"/** Value and Unit */>
                <section className="value-pos" /** Value */>
                    <p className="value" >{props.value}</p>
                </section>
                <section className="unit-pos"/** unit */>
                    <p className="unit">{props.unit}</p>
                </section>
            </section>
            <section  /** additional information */>
                <p className="additional-information">{props.information}</p>
            </section>
        </section>
    );
}

export default ValueSimpleContainer;