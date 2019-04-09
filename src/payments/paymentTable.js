import React from 'react'
import './paymentTable.scss'

const PaymentTable = () => {
    return (
        <table className='payment-list' cellPadding='0' cellSpacing='0'>
            <thead>
                <tr>
                    <th width='122'>Installment</th>
                    <th width='85'>Due Date</th>
                    <th width='125'>Method</th>
                    <th width='125'>Status</th>
                    <th width='60'>Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Installment 1 0f 12</td>
                    <td>01/08/2016</td>
                    <td>Credit/Debit Card</td>
                    <td><span className='font-green'>Paid, Thank you</span></td>
                    <td>&pound;59.99</td>
                </tr>
                <tr>
                    <td>Installment 2 0f 12</td>
                    <td>01/09/2016</td>
                    <td>Credit/Debit Card</td>
                    <td><span className='font-green'>Paid, Thank you</span></td>
                    <td>&pound;39.99</td>
                </tr>
                <tr className='active'>
                    <td>Installment 3 0f 12</td>
                    <td>01/10/2016</td>
                    <td>Credit/Debit Card</td>
                    <td><span>Pending payment</span></td>
                    <td>&pound;39.99</td>
                </tr>
                <tr>
                    <td>Installment 4 0f 12</td>
                    <td>01/11/2016</td>
                    <td>Credit/Debit Card</td>
                    <td><span className='font-gray'>Scheduled</span></td>
                    <td>&pound;39.99</td>
                </tr>
                <tr>
                    <td>Installment 5 0f 12</td>
                    <td>01/12/2016</td>
                    <td>Credit/Debit Card</td>
                    <td><span className='font-gray'>Scheduled</span></td>
                    <td>&pound;39.99</td>
                </tr>
                <tr>
                    <td>Installment 6 0f 12</td>
                    <td>01/01/2017</td>
                    <td>Credit/Debit Card</td>
                    <td><span className='font-gray'>Scheduled</span></td>
                    <td>&pound;39.99</td>
                </tr>
                <tr>
                    <td>Installment 7 0f 12</td>
                    <td>01/02/2017</td>
                    <td>Credit/Debit Card</td>
                    <td><span className='font-gray'>Scheduled</span></td>
                    <td>&pound;39.99</td>
                </tr>
                <tr>
                    <td>Installment 8 0f 12</td>
                    <td>01/03/2017</td>
                    <td>Credit/Debit Card</td>
                    <td><span className='font-gray'>Scheduled</span></td>
                    <td>&pound;39.99</td>
                </tr>
                <tr>
                    <td>Installment 9 0f 12</td>
                    <td>01/04/2017</td>
                    <td>Credit/Debit Card</td>
                    <td><span className='font-gray'>Scheduled</span></td>
                    <td>&pound;39.99</td>
                </tr>
                <tr>
                    <td>Installment 10 0f 12</td>
                    <td>01/05/2017</td>
                    <td>Credit/Debit Card</td>
                    <td><span className='font-gray'>Scheduled</span></td>
                    <td>&pound;39.99</td>
                </tr>
                <tr>
                    <td>Installment 11 0f 12</td>
                    <td>01/06/2017</td>
                    <td>Credit/Debit Card</td>
                    <td><span className='font-gray'>Scheduled</span></td>
                    <td>&pound;39.99</td>
                </tr>
                <tr>
                    <td>Installment 12 0f 12</td>
                    <td>01/07/2017</td>
                    <td>Credit/Debit Card</td>
                    <td><span className='font-gray'>Scheduled</span></td>
                    <td>&pound;39.99</td>
                </tr>
            </tbody>
        </table>
    )   
}

export default PaymentTable