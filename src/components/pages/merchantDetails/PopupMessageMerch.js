import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../buttons/Button.styled'

function PopupMessageMerch() {
  return (
    <>
      <div className="block__form">
            <form action="#">
                <div className="bloc-field">
                    <label for="name">Your name</label><br />
                    <input type="text" name="username" className="text-field" />
                </div>
                <div className="bloc-field">
                    <label for="email">Your email</label><br />
                    <input type="email" name="email" className="text-field" />
                </div>
                <div className="bloc-field">
                    <label for="number">Phone number</label><br />
                    <input type="number" name="number" className="text-field" />
                </div>
                <div className="bloc-field">
                    <label for="message">Message</label><br />
                    <textarea name="textarea" className="text-field" ></textarea>
                </div>
                <div className="display-flex-center">
                    <Link to="#">
                        <Button
                            title='Send'
                            variant="link"
                            href="/fr/#"
                            maxWidth="300px"
                            margin='0'
                            padding="7px"
                        />
                    </Link>
                </div>
            </form>
        </div>
    </>
  )
}

export default PopupMessageMerch
