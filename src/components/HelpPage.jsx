import React from 'react';
import { Button } from 'reactstrap';
import './Help.css';
import { NavLink } from 'react-router-dom';
import Footer2 from './Footer2';

function HelpPage() {
  return (
    <div>
      <div className="help-container">
        <div className="help-sous-container">
          <h2 className="title-help-page">HELP</h2>
          <h3 className="subtitle-help-page">Frequently Asked Question</h3>
          <div className="question-answer">
            <p className="question">
              <span className="letter-question">Q&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              What is Spot4Sport ?
            </p>
            <p className="answer">
              <span className="letter-question">
                &nbsp;&nbsp;&nbsp;&nbsp;A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
              We're here to help you find the perfect physical activity and/or the perfect spot for
              it!
            </p>
          </div>
          <div className="question-answer">
            <p className="question">
              <span className="letter-question">Q&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              Is the use of this site free ?
            </p>
            <p className="answer">
              <span className="letter-question">
                &nbsp;&nbsp;&nbsp;&nbsp;A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
              Obviously! We only give you opportunities to discover different places!
            </p>
          </div>
          <div className="question-answer">
            <p className="question">
              <span className="letter-question">Q&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              How can I know the opening hours of my favorite spot ?
            </p>
            <p className="answer">
              <span className="letter-question">
                &nbsp;&nbsp;&nbsp;&nbsp;A&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
              You can access directly your spot's website (if they have one) by clicking its
              address!
            </p>
          </div>
          <Button outline color="danger">
            <NavLink to="/contactus">Or contact us directly...</NavLink>
          </Button>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

export default HelpPage;
