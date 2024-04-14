import React from 'react'

import PropTypes from 'prop-types'

import './question14.css'

const Question14 = (props) => {
  return (
    <div className="question14-container">
      <span className="question14-text heading3">{props.question}</span>
      <span className="bodySmall">{props.answer}</span>
    </div>
  )
}

Question14.defaultProps = {
  question: 'What types of cars do you sell?',
  answer:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.',
}

Question14.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
}

export default Question14
