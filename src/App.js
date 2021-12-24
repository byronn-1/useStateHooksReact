import React from 'react';
// import Accordion from './components/accordion';
// import Search from './components/search';
import Dropdown from './components/Dropdown;'

const items = [
  {
    title: 'What is react?',
    content: 'React is a front end Js framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a fave js library amoug engineers'
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components'
  },
]

export default () => {
  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <Dropdown />
    </div >
  )
};