import React from 'react'
import PaymentTable from './paymentTable'
import './payments.scss'
import car from '../assets/icons/icon-car.png'
import card from '../assets/icons/icon-card.png'

const Payments = () => {
    return (
        <div className='page'>
            <section>
                <h2>Next payment</h2>
                <div className='segment'>
                    <div className='part-left'>
                        <div>
                            <img src={car} alt='Car' />
                        </div>
                        <div>
                            <div className='caption'>Vaxhuall Astra, BX62 VZV</div>
                            <div className='caption font-bold font-dark'>Pending payment</div>
                            <div className='caption'>Monthly, Credit/Debit Card</div>
                        </div>
                    </div>
                    <div className='part-right text-right'>
                        <div className='caption'>Installment 3 of 12</div>
                        <div className='caption'>Due 01/10/2016</div>
                        <div className='headline font-bold font-dark'>&pound;39.99</div>
                    </div>
                </div>
            </section>
            <section>
                <h2>Payment method</h2>
                <div className='segment'>
                    <div className='part-left'>
                        <div>
                            <img src={card} alt='Credit/Debit Card'/>
                        </div>
                        <div>
                            <div className='caption'>Credit/Debit Card</div>
                            <div className='caption font-semibold font-dark'>Card number: **** **** **** 1111</div>
                            <div className='caption font-semibold font-dark'>Name on the card: Mr J Smith </div>
                        </div>
                    </div>
                    <div className='part-right text-right '>
                        <button className='btn btn-small btn-block btn-white'>Change Payment Method</button>
                        <button className='btn btn-small btn-block btn-white'>Change Payment Date</button>
                    </div>
                </div>
            </section>
            <section>
                <h2>Payment schedule</h2>
                <div className='table-container'>
                    <PaymentTable />
                </div>
            </section>
        </div>
    )
}

export default Payments
