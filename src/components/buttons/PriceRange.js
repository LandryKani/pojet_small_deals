import React from 'react'
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

function PriceRange() {
      // Our States
  const [value, setValue] =  React.useState([500,10000]);
  
  // Changing State when volume increases/decreases
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
    console.log(newValue)
  };
  
  return (
    <>
        <div style={{
        padding: '20px'
    }}>
      {/* <Typography id="range-slider" gutterBottom>
        Select Price Range:
      </Typography> */}
      <Slider
        value={value}
        onChange={rangeSelector}
        valueLabelDisplay="auto"
      />
      Your range of Price is between {value[0]} /- and {value[1]} /-
    </div>
    </>
  )
}

export default PriceRange