import React from 'react'

import PropTypes from 'prop-types'

import './question13.css'

const Question13 = (props) => {
  return (
    <div className="question13-container">
      <span className="question13-text heading3">{props.question}</span>
      <span className="bodySmall">{props.answer}</span>
    </div>
  )
}

Question13.defaultProps = {
  answer:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.',
  question: 'What types of cars do you sell?',
}

Question13.propTypes = {
  answer: PropTypes.string,
  question: PropTypes.string,
}

export default Question13
