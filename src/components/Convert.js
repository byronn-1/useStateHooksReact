import React, { useState, useEffect } from 'react';

const Convert = ({ language, text }) => {

  useEffect(() => {
    console.log('new Lang')
  }, [language, text])
  return (
    <div>

    </div>

  )
}

export default Convert;