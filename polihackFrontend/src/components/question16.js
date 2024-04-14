import React from 'react'

import PropTypes from 'prop-types'

import './question16.css'

const Question16 = (props) => {
  return (
    <div className="question16-container">
      <span className="question16-text heading3">{props.question}</span>
      <span className="bodySmall">{props.answer}</span>
    </div>
  )
}

Question16.defaultProps = {
  answer:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.',
  question: 'What types of cars do you sell?',
}

Question16.propTypes = {
  answer: PropTypes.string,
  question: PropTypes.string,
}

export default Question16
