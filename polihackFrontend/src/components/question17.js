import React from 'react'

import PropTypes from 'prop-types'

import './question17.css'

const Question17 = (props) => {
  return (
    <div className="question17-container">
      <span className="question17-text heading3">{props.question}</span>
      <span className="bodySmall">{props.answer}</span>
    </div>
  )
}

Question17.defaultProps = {
  answer:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.',
  question: 'What types of cars do you sell?',
}

Question17.propTypes = {
  answer: PropTypes.string,
  question: PropTypes.string,
}

export default Question17
