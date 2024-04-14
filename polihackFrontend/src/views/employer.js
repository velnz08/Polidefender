import React from 'react'

import { Helmet } from 'react-helmet'

import FeatureCard4 from '../components/feature-card4'
import Question12 from '../components/question12'
import './employer.css'

const Employer = (props) => {
  return (
    <div className="employer-container">
      <Helmet>
        <title>employer - Nimble Incomplete Viper</title>
        <meta
          property="og:title"
          content="employer - Nimble Incomplete Viper"
        />
      </Helmet>
      <div className="employer-header">
        <header
          data-thq="thq-navbar"
          className="navbarContainer employer-navbar-interactive"
        >
          <div className="employer-container1">
            <img
              alt="image"
              src="/human-resources-200h.png"
              className="employer-image"
            />
          </div>
          <div data-thq="thq-navbar-nav" className="employer-desktop-menu">
            <nav className="employer-links">
              <span className="employer-logo">
                <span>VirtualHR</span>
                <br></br>
              </span>
            </nav>
            <div className="employer-buttons">
              <button className="employer-login buttonFlat">Login</button>
              <button className="buttonFilled">Register</button>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="employer-burger-menu">
            <svg viewBox="0 0 1024 1024" className="employer-icon socialIcons">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div
            data-thq="thq-mobile-menu"
            className="employer-mobile-menu1 mobileMenu"
          >
            <div className="employer-nav">
              <div className="employer-top">
                <span className="logo">EMPLOYERS</span>
                <div data-thq="thq-close-menu" className="employer-close-menu">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="employer-icon02 socialIcons"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="employer-links1">
                <span className="employer-nav12 bodySmall">Home</span>
                <span className="employer-nav22 bodySmall">About Us</span>
                <span className="employer-nav32 bodySmall">Services</span>
                <span className="employer-nav42 bodySmall">FAQ</span>
                <span className="employer-nav52 bodySmall">Contact</span>
              </nav>
              <div className="employer-buttons1">
                <button className="buttonFlat">Login</button>
                <button className="buttonFilled">Register</button>
              </div>
            </div>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="employer-icon04 socialIcons"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="employer-icon06 socialIcons"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="employer-icon08 socialIcons"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="employer-hero">
        <div className="heroContainer employer-hero1">
          <div className="employer-container2">
            <h1 className="employer-hero-heading heading1">
              Streamline Your Hiring Process with VirtualHR
            </h1>
            <span className="employer-hero-sub-heading bodyLarge">
              <span>
                <span>
                  <span>Find the Right Candidates Efficiently</span>
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
            <div className="employer-btn-group">
              <button className="buttonFilled">Get Started Now</button>
              <button className="buttonFlat">Learn More →</button>
            </div>
          </div>
        </div>
      </div>
      <div className="employer-gallery"></div>
      <div className="employer-features">
        <div className="featuresContainer">
          <div className="employer-features1">
            <div className="employer-container3">
              <span className="overline">
                <span>features</span>
                <br></br>
              </span>
              <h2 className="employer-features-heading heading2">
                Key Features of VirtualHR
              </h2>
              <span className="employer-features-sub-heading bodyLarge">
                <span>
                  <span>
                    <span>
                      Discover how VirtualHR can simplify your hiring process
                      and help you find the best candidates
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
            <div className="employer-container4">
              <FeatureCard4
                heading="Resume Review Services"
                subHeading="Get professional feedback on resumes to attract top talent"
              ></FeatureCard4>
              <FeatureCard4
                heading="Networking Events Access"
                subHeading="Connect with industry professionals and potential candidates"
              ></FeatureCard4>
              <FeatureCard4
                heading="Customized Hiring Plans"
                subHeading="Tailored plans to suit the specific needs of your business"
              ></FeatureCard4>
              <FeatureCard4
                heading="User-Friendly Interface"
                subHeading="Intuitive platform for easy navigation and efficient hiring process"
              ></FeatureCard4>
            </div>
          </div>
        </div>
      </div>
      <div className="employer-banner">
        <div className="bannerContainer employer-banner1">
          <h1 className="employer-banner-heading heading2">
            Streamline Your Hiring Process with VirtualHR
          </h1>
          <span className="employer-banner-sub-heading bodySmall">
            <span>
              <span>
                <span>
                  VirtualHR offers a range of plans tailored to meet the hiring
                  needs of small businesses and large corporations. From resume
                  review services to exclusive networking events access,
                  VirtualHR is your one-stop solution for finding the right
                  candidates efficiently. Simplify your recruitment process and
                  make the best hires with VirtualHR.
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
          <button className="buttonFilled">Learn More</button>
        </div>
      </div>
      <div className="employer-faq">
        <div className="faqContainer">
          <div className="employer-faq1">
            <textarea className="employer-textarea textarea"></textarea>
            <div className="employer-container5">
              <span className="overline">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="employer-text50 heading2">Common questions</h2>
              <span className="employer-text51 bodyLarge">
                <span>
                  Here are some of the most common questions that we get.
                </span>
                <br></br>
              </span>
            </div>
            <div className="employer-container6">
              <Question12
                answer="VirtualHR is a platform designed to streamline the hiring process for employers by offering different plans with features like resume review services and networking events access."
                question="What is VirtualHR?"
              ></Question12>
              <Question12
                answer="VirtualHR provides a user-friendly experience for small businesses and large corporations to find the right candidates efficiently, saving time and resources in the hiring process."
                question="How can VirtualHR benefit my business?"
              ></Question12>
              <Question12
                answer="VirtualHR plans include resume review services, access to networking events, and other tools to help employers connect with potential candidates and streamline the hiring process."
                question="What features are included in VirtualHR plans?"
              ></Question12>
              <Question12
                answer="Yes, VirtualHR is designed to cater to the needs of both small businesses and large corporations, providing scalable solutions to meet various hiring requirements."
                question="Is VirtualHR suitable for small businesses?"
              ></Question12>
              <Question12
                answer="To get started with VirtualHR, simply choose a plan that suits your business needs, sign up for an account, and begin utilizing the platform's features to enhance your hiring process."
                question="How do I get started with VirtualHR?"
              ></Question12>
            </div>
          </div>
        </div>
      </div>
      <footer className="employer-footer footerContainer">
        <div className="employer-container7">
          <span className="logo">EMPLOYEE</span>
          <nav className="employer-nav1">
            <span className="bodySmall">Home</span>
            <span className="employer-nav221 bodySmall">About Us</span>
            <span className="employer-nav321 bodySmall">Services</span>
            <span className="employer-nav421 bodySmall">FAQ</span>
            <span className="employer-nav521 bodySmall">Contact</span>
          </nav>
        </div>
        <div className="employer-separator"></div>
        <div className="employer-container8">
          <span className="bodySmall employer-text54">
            © 2024 VirtualHR, All Rights Reserved.
          </span>
          <div className="employer-icon-group1"></div>
        </div>
      </footer>
    </div>
  )
}

export default Employer
