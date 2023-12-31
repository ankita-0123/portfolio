import React, { useState, useRef } from 'react';
import PageHeaderContainer from '../../components/pageHeaderContainer/PageHeaderContainer';
import { BsInfoCircleFill } from 'react-icons/bs';
import { Animate } from 'react-simple-animate';
import './Contact.scss';
import { Form } from 'react-bootstrap';

const Contact = () => {
  const [contact, setContact] = useState([]);
  const nameRef = useRef('');
  const emailRef = useRef('');
  const descriptionRef = useRef('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const contactsSubmitHandler = (event) => {
    event.preventDefault();

    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      description: descriptionRef.current.value,
    };

    setContact([...contact, data]);
    fetch('https://portfolio-b35b1-default-rtdb.firebaseio.com/contactus.json', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          setSubmitSuccess(true);
          nameRef.current.value = '';
          emailRef.current.value = '';
          descriptionRef.current.value = '';
        }
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  return (
    <section className='contact'>
      <PageHeaderContainer headerText='Contact Me' icon={<BsInfoCircleFill size={30} />} />
      <div className='contact__content'>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: 'translateX(-200px)',
          }}
          end={{
            transform: 'translateX(0px)',
          }}
        >
          <h3 className='contact__content__header-text'>Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: 'translateX(200px)',
          }}
          end={{
            transform: 'translateX(0px)',
          }}
        >
          {submitSuccess ? (
            <div className='success-message'>Form submitted successfully!</div>
          ) : (
            <Form className='contact__content__form' onSubmit={contactsSubmitHandler}>
              <div className='contact__content__form__controlswrapper'>
                <div>
                  <input required name='name' className='inputName' type='text' ref={nameRef} />
                  <label htmlFor='name' className='nameLabel'>
                    Name
                  </label>
                </div>
                <div>
                  <input required name='email' className='inputEmail' type='text' ref={emailRef} />
                  <label htmlFor='email' className='emailLabel'>
                    Email
                  </label>
                </div>
                <div>
                  <textarea
                    required
                    name='description'
                    className='inputDescription'
                    type='text'
                    rows='5'
                    ref={descriptionRef}
                  />
                  <label htmlFor='description' className='descriptionLabel'>
                    Description
                  </label>
                </div>
              </div>
              <button type='submit'>Submit</button>
            </Form>
          )}
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
