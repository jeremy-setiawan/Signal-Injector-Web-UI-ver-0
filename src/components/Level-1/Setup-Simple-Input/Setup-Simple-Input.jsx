import React from 'react'
import Switch from '@material-ui/core/Switch';

import './Setup-Simple-Input.css';

import {firestoreDbRef} from '../../../pages/Home/Home-Page'

function SetupSimpleInput(props){
    const [state, setState] = React.useState({
        checkedA: false
      });
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        //console.log(`${props.DOID}_${props.Title} switched to ${event.target.checked}`)
        firestoreDbRef.collection('Signal_Injector').doc(props.DOID).update({[props.Title]:event.target.checked})
        .then(function(){
            console.log("Write success!")
        })
        .catch((error) => {
            console.error("Error updating document: ", error);
        });
      };

    return(
        <section className="setup-container">
            <section className="setup-flex">
                <section className="setup-text">
                    <p className="setup-font">{props.Title}</p>
                    <p className="setup-information">{props.Information}</p>
                </section>
                <section className="setup-attr">
                    <section className="setup-status">
                    </section>
                    <section className="setup-slider-toggle">
                    <p className="setup-toggle-font">{props.OffText}</p>
                    <Switch
                        checked={state.checkedA}
                        onChange={handleChange}
                        name="checkedA"
                        color="primary"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                    <p className="setup-toggle-font">{props.OnText}</p>
                    </section>
                </section>
                
            </section>
            <hr className="setup-separator"/>    
        </section>          
    )
}

export default React.memo(SetupSimpleInput);