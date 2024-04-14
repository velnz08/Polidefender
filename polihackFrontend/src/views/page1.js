import React from 'react'
import Popup from 'reactjs-popup';
import { Helmet } from 'react-helmet'
import './page1.css'

export const Page1 = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="page1-container">
      <Helmet>
        <title>Page1 - Nimble Incomplete Viper</title>
        <meta property="og:title" content="Page1 - Nimble Incomplete Viper" />
      </Helmet>
      <h1 className="page1-text">LET&apos;S TAKE A QUIZ </h1>
      <span className="page1-text1">
        <span>Powered b</span>
        <span>
          y
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <br></br>
        <span>VirtualHR</span>
      </span>
      <select id="JB" className="page1-select">
        <option value="Option 1">BEGGINER</option>
        <option value="Option 2">INTERMEDIATE</option>
        <option value="Option 3">PROFESSIONAL</option>
      </select>
      <select id="JB" className="page1-select2">
        <option value="Option 1">WORD</option>
        <option value="Option 2">EXCEL</option>
        <option value="Option 3">POWERPOINT</option>
      </select>
      <Popup trigger=
                {
                <button type="button" className="page1-button button">
                SUBMIT
               </button>} 
                modal >
                {   
                    close => (  
                        <div className= 'modal-container'>
                            {/* <div>
                                Welcome to GFG!!!
                            </div> */}
                            <div>
                                <button className = 'modal-buttonstyle' onClick=
                                    {() => close()}>
                                        Close
                                </button>
                            </div>
                        </div>
                    )
                }
            </Popup>
    </div>
  )
}

export default Page1
