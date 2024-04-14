import React from 'react'

import PropTypes from 'prop-types'

import './question18.css'

const Question18 = (props) => {
  return (
    <div className="question18-container">
      <span className="question18-text heading3">{props.question}</span>
      <span className="bodySmall">{props.answer}</span>
    </div>
  )
}

Question18.defaultProps = {
  answer:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.',
  question: 'What types of cars do you sell?',
}

Question18.propTypes = {
  answer: PropTypes.string,
  question: PropTypes.string,
}

export default Question18
