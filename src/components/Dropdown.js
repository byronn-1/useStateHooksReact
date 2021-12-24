import React from 'react';

const dropdown = ({ options }) => {
  const renderedOptions = options.map((option) => {
    return (
      <div key={option.value}
        className='item'>
        {option.label}
      </div>
    )
  })
  return (
    <div className='ui form'>
      <div className='field'>
        <label className='label'>Select a color</label>
        <div className='ui selection dropdown visable active '>
          <i className='dropdown icon'></i>
          <div className='text'>Select Colour</div>
          <div className='menu visable transition'>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  )
}