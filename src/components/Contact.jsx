import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Footer2 from './Footer2';
import './Contact.css';

function ContactPage() {
  return (
    <div className="contact-container">
      <div className="form-container">
        <div className="form-sous-container">
          <div className="intro">
            <h2>GET IN TOUCH</h2>
            <p>Do you have any specific question?</p>
            <p>You're at the right place!</p>
          </div>

          <Form className="form-contact">
            <div className="line">
              <FormGroup className="formGroup-contact">
                <Label className="label-form-contact" for="firstName">
                  First Name
                </Label>
                <Input type="text" name="text" className="text-area" placeholder="Michel" />
              </FormGroup>
              <FormGroup className="formGroup-contact">
                <Label className="label-form-contact" for="lastName">
                  Last Name
                </Label>
                <Input type="text" name="text" className="text-area" placeholder="Tacos" />
              </FormGroup>
            </div>
            <div className="line">
              <FormGroup className="formGroup-contact">
                <Label className="label-form-contact" for="email">
                  Email
                </Label>
                <Input
                  type="email"
                  name="email"
                  className="text-area-email"
                  placeholder="lovetacos@toto.com"
                />
              </FormGroup>
              <FormGroup className="formGroup-contact">
                <Label className="label-form-contact" for="examplePassword">
                  Phone Number
                </Label>
                <Input
                  type="password"
                  name="password"
                  className="text-area"
                  placeholder="+33712345678"
                />
              </FormGroup>
            </div>
            <div className="line-bottom">
              <FormGroup className="formGroup-contact">
                <Label className="label-form-contact" for="exampleText">
                  Text Area
                </Label>
                <Input
                  type="textarea"
                  name="text"
                  className="text-area"
                  placeholder="Any questions or suggestions"
                  rows="3"
                />
              </FormGroup>
            </div>
          </Form>
          <Button
            outline
            color="danger"
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=spot4sport.wcs@gmail.com"
            target="_blank"
          >
            Submit
          </Button>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

export default ContactPage;
