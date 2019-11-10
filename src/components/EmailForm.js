/* eslint-disable jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for  */

import React, { Fragment, PureComponent } from 'react'
import axios from 'axios'
import validator from 'validator'

import {
  email as ariesEmailAddress,
} from '../../cms/general/contact'

class EmailForm extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      failure: false,
      formEmail: '',
      formMessage: '',
      formName: '',
      formSubject: '',
      loading: false,
      success: false,
      valid: false,
    }
  }

  setStateAsync = (state) => {
    return new Promise((resolve) => {
      this.setState(state, resolve)
    })
  }

  handleChangeName = async (event) => {
    await this.setStateAsync({ formName: event.target.value })
    await this.validate()
  }

  handleChangeEmail = async (event) => {
    await this.setStateAsync({ formEmail: event.target.value })
    await this.validate()
  }

  handleChangeSubject = async (event) => {
    await this.setStateAsync({ formSubject: event.target.value })
    await this.validate()
  }

  handleChangeMessage = async (event) => {
    await this.setStateAsync({ formMessage: event.target.value })
    await this.validate()
  }

  send = async () => {
    const {
      formEmail,
      formMessage,
      formName,
      formSubject,
      loading,
      valid,
    } = this.state

    if (valid && !loading) {
      await this.setState({
        loading: false,
        success: false,
        failure: false,
      })

      try {
        await this.setStateAsync({ loading: true })

        const emailToSendTo = 'jaredreich+ariestest@gmail.com'
        // const emailToSendTo = ariesEmailAddress;
        await axios.post('https://digital89.com/.netlify/functions/email', {
          from: { email: 'mail@digital89.com', name: 'ariesairflo.com' },
          replyTo: { email: formEmail, name: formName },
          subject: formSubject || `A message from ${formName}`,
          text: `${formMessage}\n\n----------\n\nName: ${formName}\nEmail: ${formEmail}`,
          to: [{ email: emailToSendTo, name: 'Aries Airflo' }],
        })

        await this.setStateAsync({
          formEmail: '',
          formMessage: '',
          formName: '',
          formSubject: '',
          loading: false,
          success: true,
          valid: false,
        })
      } catch (error) {
        await this.setStateAsync({
          loading: false,
          failure: true,
        })
      }
    }
  }

  validate = async () => {
    const {
      formEmail,
      formMessage,
      formName,
    } = this.state

    await this.setStateAsync({
      failure: false,
      success: false,
      valid: true,
    })

    if (
      !formName.length ||
      !validator.isEmail(formEmail) ||
      !formMessage.length
    ) {
      await this.setStateAsync({
        valid: false,
      })
    }
  }

  render () {
    const {
      formEmail,
      formMessage,
      formName,
      formSubject,
      loading,
      valid,
    } = this.state

    return (
      <Fragment>

        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              onChange={this.handleChangeName}
              value={formName}
              className="input"
              type="text"
              placeholder="Jane Doe"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              onChange={this.handleChangeEmail}
              value={formEmail}
              className="input"
              type="email"
              placeholder="janedoe@gmail.com"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Subject (optional)</label>
          <div className="control">
            <input
              onChange={this.handleChangeSubject}
              value={formSubject}
              className="input"
              type="text"
              placeholder="Enter your subject"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea
              id="form-message"
              className="textarea"
              onChange={this.handleChangeMessage}
              value={formMessage}
              placeholder="Ask us anything!"
            />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <button
              className="button is-primary"
              onClick={this.send}
              disabled={!valid || loading}
              type="button"
            >
              <span>Submit</span>
              {loading && (
                <span className="loader-container">
                  <span>&nbsp;&nbsp;</span>
                  <img className="loader-icon rotate" src="images/loader.svg" alt="Loading Icon" />
                </span>

              )}
            </button>
          </div>
        </div>

        <style jsx>
          {`
            #form-message {
              min-height: 200px;
            }

            .loader-container {
              align-items: center;
              display: flex;
            }
            .loader-icon {
              height: 20px;

              animation-name: rotate;
              animation-duration: 2s;
              animation-iteration-count: infinite;
              animation-timing-function: linear;
            }

            @keyframes rotate {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(360deg);
              }
            }
          `}
        </style>

      </Fragment>
    )
  }
}

export default EmailForm
