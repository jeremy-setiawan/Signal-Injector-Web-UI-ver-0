import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';

import {firestoreDbRef} from '../../../pages/Home/Home-Page';

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};


const PrettoSlider = withStyles({
  root: {
    color: '#0000FF',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

function valuetext(value) {
  return `${value}°C`;
}


export default function DiscreteSlider(props) {
  const [sliderVal, setSliderVal] = useState(0);

  const handleSliderChange = (event, newValue) => {
    //console.log(newValue);
    setSliderVal(newValue);
  }

  const handleSend = () => {
    firestoreDbRef.collection('Signal_Injector').doc(props.AOID).update({ [props.title]: sliderVal })
      .then(function () {
        console.log("Write success!")
      })
      .catch((error) => {
        console.error("Error updating document: ", error);
      });
    //console.log("data updated");
  }

  return (
    <div>
      <PrettoSlider
        defaultValue={props.defaultValue}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={0.5}
        marks
        min={props.minScale}
        max={props.maxScale}
        onChange={handleSliderChange}
      />
      <section className="parameter-send-button-column">
        <section className="parameter-send-button-holder">
          <Button
            variant="contained"
            color="primary"
            onClick={handleSend}
            fullWidth={true}>
            Send
          </Button>
        </section>
      </section>
    </div>
  );
}
