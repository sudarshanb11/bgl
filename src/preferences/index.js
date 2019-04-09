import React from 'react'
import './preferences.scss'
import tree from '../assets/icons/icon-tree.png'

const Preferences = () => {
    return (
        <div className='page'>
            <h2>Preferences</h2>
            <section>
                <h3>Receiving information about your policy</h3>
                <p>We provide 24/7 access to your policy information and insurance documents to view and 
                download through our &#60;online self sevices centers&#62; in our ongoing effort to 
                reduce paper waste and support our  environment, however should you need to request 
                a paper copy you can do this at any point during the life time of your policy, whitout
                charge by contacting us or by selecting option here</p>
                <div className='action'>
                    <button className='btn btn-blue'>Email</button>
                    <button className='btn btn-white'>Printed</button>
                    <div className='request'>
                        <div><img src={tree} alt='environment tree' /></div>
                        <div className='caption'>Please consider the environment before requesting 
                        printed documents</div>
                    </div>
                </div>
            </section>
            <section>
                <h3>Exclsuive offers and promotions</h3>
                <p>From time to time we have exclusive offers, promotions and launch new services, if
                you'd like to be kept inoformed (in accordance with our <a href='#' className='font-blue' aria-labelledby='Exclsuive offers and promotions'>Trems &amp; Conditions</a>)
                simply selct how you'd like to be contaced below:</p>
                <div className='contact-option'>
                    <div className='toggle-switch'>
                        <input type='checkbox' id='email' />
                        <label htmlFor='email'>Email</label>
                    </div>
                    <div className='toggle-switch'>
                        <span></span>
                        <input type='checkbox' id='phone' />
                        <label htmlFor='phone'>Phone</label>
                    </div>
                    <div className='toggle-switch'>
                        <span></span>
                        <input type='checkbox' id='post' />
                        <label htmlFor='post'>Post</label>
                    </div>
                    <div className='toggle-switch'>
                        <span></span>
                        <input type='checkbox' id='text' />
                        <label htmlFor='text'>Text / SMS</label>
                    </div>
                </div>
                <a href='#' className='caption font-blue' aria-labelledby='Exclsuive offers and promotions'>How we use your data</a>
            </section>
        </div>
    )
}

export default Preferences