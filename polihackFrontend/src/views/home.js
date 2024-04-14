import React, { useState, useEffect }  from 'react'

import { Helmet } from 'react-helmet'
import logo from "../Pages/human-resources-200h.jpg";
import { GoogleLogin } from '@react-oauth/google';
import {GoogleOAuthProvider} from '@react-oauth/google';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import emailjs from "@emailjs/browser";

import './home.css'
import { useNavigate } from "react-router-dom";
export const Home = (props) => {
  const [ user, setUser ] = useState([]);
  const [ profile, setProfile ] = useState([]);
  const navigate = useNavigate();
const logOut = () => {
    googleLogout();
    setProfile(null);
};
useEffect(() => {emailjs.init("ukEzStqPEsUJaH2C4")

}, []);
const [fullName, setFullName] = React.useState("");
const [emailContact, setEmailContact] = React.useState("");
const [mesgContact, setMesgContact] = React.useState("");
function changeFullName(event) {

  setFullName(event.target.value);
}
function changeEmailContact(event) {

  setEmailContact(event.target.value);
}
function changeMsgContact(event) {

  setMesgContact(event.target.value);
}

const sendEmail=(e)=>{
emailjs.sendForm('service_jpga8ug','template_atre9qw',e.target,'053GWtL930ymPop29');
}

  return (
    <div className="home-container">
      <div className="home-hero">
        <div className="heroContainer home-hero1">
          <div className="home-container02">
            <h1 className="home-hero-heading heading1">Welcome to OnTrack</h1>
            <div className="home-btn-group">
              <a href='#price'><button className="buttonFilled">Get Started</button></a>
              <a href='#info'> <button className="buttonFilled">Learn More →</button></a>
              {/* <GoogleOAuthProvider clientId="356982236497-spocr77dk2jjc6isjfi0t375olc7d6si.apps.googleusercontent.com">
                  <GoogleLogin
                    onSuccess={ (credentialResponse) =>{console.log(credentialResponse)}}
                    onError={() => {console.log('Login Failed')}}
                  />
              </GoogleOAuthProvider> */}
            </div>
          </div>
        </div>
      </div>
      <div id="info" className="home-features">
        <div className="featuresContainer">
          <div className="home-features1">
            <div className="home-container03">
              <span className="overline">
                <span>features</span>
                <br></br>
              </span>
              <h2 className="home-features-heading heading2" >Key Features</h2>
              <span className="home-features-sub-heading bodyLarge">
                <span>
                  <span>
                    <span>
                      Discover how our platform can simplify your experience as
                      a new employer
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <div className="home-feature-card2 featuresCard">
              <svg viewBox="0 0 1024 1024" className="featuresIcon">
                <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
              </svg>
              <div className="home-container06">
                <h3 className="home-text37">Live Chat Support</h3>
                <span> Connect with our team instantly for any queries or assistance</span>
              </div>
              
            </div>
            {/* <div className="home-feature-card1 featuresCard">
              <svg viewBox="0 0 1024 1024" className="featuresIcon">
                <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
              </svg>
              <div className="home-container05">
                <h3 className="home-text35 heading3">
                  Skill Development Packages
                </h3>
                <span className="bodySmall">
                  Choose from a variety of packages to enhance your skills and
                  knowledge
                </span>
              </div>
            </div> */}
            <div className="home-feature-card2 featuresCard">
              <svg viewBox="0 0 1024 1024" className="featuresIcon">
                <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
              </svg>
              <div className="home-container06">
                <h3 className="home-text37">Automated OnBording Procces</h3>
                <span>Easy orientation, instant acces to info, unlimited help</span>
              </div>
              
            </div>
            <div className="home-feature-card2 featuresCard">
              <svg viewBox="0 0 1024 1024" className="featuresIcon">
                <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
              </svg>
              <div className="home-container06">
                <h3 className="home-text37">Performance Management Portal (UnderWork)</h3>
                <span>Track goals, receive feedback, excel. Upgrade now!</span>
              </div>
              
            </div>
            <div className="home-container07"></div>
          </div>
        </div>
      </div>
      <div id="price" className="home-pricing" >
        <div className="pricingContainer">
          <div className="home-container08">
            <span className="overline" >
              <span >Pricing</span>
              <br></br>
            </span>
            <h2 className="heading2" >Choose the Right Plan for You</h2>
            <span className="home-pricing-sub-heading bodyLarge">
              <span>
                <span>
                  Unlock the full potential of finding your dream employer with
                  our plans
                </span>
              </span>
            </span>
          </div>
          <div className="home-container09">
            <div className="freePricingCard home-pricing-card" >
              <div className="home-container10">
                <span className="home-text44 heading3">Custom</span>
                <span className="bodySmall">We fold to your needs</span>
              </div>
              <div className="home-container11">
                <span className="home-text45">
                  <span>From $</span>
                  <span></span>
                </span>
                <span  className="home-free-plan-price">49</span>
                <span className="home-text56">/ month</span>
              </div>
              <div className="home-container12">
                
                <div className="home-container14">
                  <span className="home-text49">✔ Customized helper</span>
                </div>
                <div className="home-container15">
                  <span className="home-text50">✔ Training Support</span>
                </div>
                <div className="home-container16">
                  <span className="home-text51">✔ Live Support</span>
                </div>
                <div className="home-container16">
                  <span className="home-text51">✔ And more..</span>
                </div>
              </div>
              <a href="#contactNow"><button className="home-button buttonOutline">
                Continue with a chat
              </button></a>
            </div>
            <div className="basicPricingCard home-pricing-card1">
              <div className="home-container17">
                <span className="home-text52 heading3">BASIC</span>
                <span className="bodySmall">
                  Enhanced information and communication
                </span>
              </div>
              <div className="home-container18">
                <span className="home-text53">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home-basic-plan-pricing">299</span>
                <span className="home-text56">/ month</span>
              </div>
              <div className="home-container19">
                <div className="home-container20">
                  <span className="home-text57">✔ Up to 6 accounts</span>
                </div>
                <div className="home-container21">
                  <span className="home-text58">✔ Unlimeted Data Usage</span>
                </div>
                <div className="home-container22">
                  <span className="home-text59">✔Customized helper</span>
                </div>
                <div className="home-container23">
                  <span className="home-text60">✔Training Support</span>
                </div>
                <div className="home-container24">
                  <span className="home-text61">✔Live Support</span>
                </div>
              </div>
              <a href="#contactNow"><button className="home-button1 buttonFilledSecondary">
                Try the Basic plan
              </button></a>
            </div>
            <div className="proPricingCard home-pricing-card2">
              <div className="home-container25">
                <span className="home-text62 heading3">
                  <span>PRO</span>
                  <br></br>
                </span>
                <span className="bodySmall">Premium access and support</span>
              </div>
              <div className="home-container26">
                <span className="home-text65">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home-pro-plan-pricing">599</span>
                <span className="home-text68">/ month</span>
              </div>
              <div className="home-container27">
                <div className="home-container28">
                  <span className="home-text69">✔Up to 15 accounts</span>
                </div>
                <div className="home-container29">
                  <span className="home-text70">✔Unlimeted Data Usage</span>
                </div>
                <div className="home-container30">
                  <span className="home-text71">✔Customized helpe</span>
                </div>
                <div className="home-container31">
                  <span className="home-text72">✔</span>
                  <span className="bodySmall">Training Support</span>
                </div>
                <div className="home-container32">
                  <span className="home-text73">✔</span>
                  <span className="bodySmall">Live Support</span>
                </div>
              </div>
             <a href="#contactNow">
               <button className="home-button2 buttonFilledSecondary">
                Try the PRO plan
              </button></a>
            </div>
          </div>
        </div>
      </div>
      <footer>
      <div className="container" id="contactNow">
        <h1>Contact Us</h1>
  <form onSubmit={sendEmail}>

    
    <input type="text" id="fname"  placeholder="Your full name.." onChange={changeFullName} required></input>

    
    <input type="text" id="lname"  placeholder="Your email.."onChange={changeEmailContact} required></input>

   

    <textarea id="subject" name="subject" placeholder="Write something.." onChange={changeMsgContact} required ></textarea>

    <input type="submit" value="Submit"></input>

  </form>
</div>
      </footer>
      
     
    </div>
  )
}

export default Home
