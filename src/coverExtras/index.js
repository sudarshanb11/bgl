import React from 'react'
import './coverExtras.scss'
import breakdown from '../assets/icons/icon-breakdown.png'
import grc from '../assets/icons/icon-grc.png'
import keycare from '../assets/icons/icon-keycare.png'
import legalprotection from '../assets/icons/icon-legalprotection.png'
import pncd from '../assets/icons/icon-pncd.png'
import priceprotect from '../assets/icons/icon-priceprotect.png'

const CoverExtras = () => {
    return (
        <div className='cover'>
            <h2>Cover extras</h2>
            <div className='cover-content'>
                <div className='cover-item'>
                    <div className='img-container'>
                        <img src={pncd} alt='Protected no claims discount' />
                    </div>
                    <h3 className='font-semibold'>Protected no claims discount</h3>
                    <a href='#' aria-labelledby='Protected no claims discoun'>More informtaion</a>
                </div>
                <div className='cover-item'>
                    <div className='img-container'>
                        <img src={grc} alt='Guaranteed replacement vehicle' />
                    </div>
                    <h3 className='font-semibold'>Guaranteed replacement vehicle</h3>
                    <a href='#' aria-labelledby='Guaranteed replacement vehicle'>More informtaion</a>
                </div>
                <div className='cover-item'>
                    <div className='img-container'>
                        <img src={legalprotection} alt='Motor legal protection' />
                    </div>
                    <h3 className='font-semibold'>Motor legal protection</h3>
                    <a href='#' aria-labelledby='Motor legal protection'>More informtaion</a>
                </div>
                <div className='cover-item'>
                    <div className='img-container'>
                        <img src={breakdown} alt='Breakdown' />
                    </div>
                    <h3 className='font-semibold'>Breakdown</h3>
                    <a href='#' aria-labelledby='Breakdown'>More informtaion</a>
                </div>
                <div className='cover-item'>
                    <div className='img-container'>
                        <img src={keycare} alt='Keycare' />
                    </div>
                    <h3 className='font-semibold'>Keycare</h3>
                    <a href='#' aria-labelledby='Keycare'>More informtaion</a>
                </div>
                <div className='cover-item'>
                    <div className='img-container'>
                        <img src={priceprotect} alt='Price protect' />
                    </div>
                    <h3 className='font-semibold'>Price protect</h3>
                    <a href='#' aria-labelledby='Price protect'>More informtaion</a>
                </div>
            </div>
        </div>
    )
}

export default CoverExtras
