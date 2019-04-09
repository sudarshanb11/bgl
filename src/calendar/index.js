import React, {Component} from 'react'
import './calendar.scss'
import WeekTitle from './weekTitle'
import moment from 'moment'

class DatePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeDate: moment(), 
            selectDate: ''
        }
    }
    nextMonth = () => {
        this.setState ({
            activeDate : this.state.activeDate.clone().add(1, 'month')
        })
    }
    prevMonth = () => {
        this.setState ({
            activeDate : this.state.activeDate.clone().add(-1, 'month')
        })
    }
    selectDate = (val) => {
        const date = this.state.activeDate.date(val).format('MM/DD/YYYY')
        this.setState({
            selectDate: date
        })
        this.props.onDateChange(date)
    }
    render () {
        const renderWeeks = []
        const {activeDate} = this.state
        const monthLabel = activeDate.format('MMMM YYYY')
        const lastDay = activeDate.clone().endOf('month').get('date')
        const offset = activeDate.clone().startOf('month').get('day')
        let dayCount = 7 - offset + 1
        const currentMonth = moment().get('month')
        const currentYear =  moment().get('year')
        const activeMonth = activeDate.get('month')
        const activeYear = activeDate.get('year')

        let current =  (activeMonth === currentMonth &&  activeYear === currentYear) ? moment().get('date') : -1

        for(let i=0; i<5; i++) {
            renderWeeks.push(
                <Week 
                key={i}
                current={current} 
                start={dayCount} 
                end={dayCount + 6 > lastDay ? lastDay : dayCount + 6} 
                offset={0} 
                activeMonth={activeMonth}
                activeYear={activeYear}
                selectDate={this.selectDate}
                activeEnd={this.props.activeEnd} />
            )
            dayCount += 7
        }
        return (
            <div className='date-picker'>
                <div className='title'>Start Date</div>
                <div className='content'>
                    <table>
                        <thead>
                            <tr>
                                <th><i onClick={this.prevMonth} className="fas fa-chevron-left"></i></th>
                                <th colSpan='5'><span className='month'>{monthLabel}</span></th>
                                <th><i onClick={this.nextMonth} className="fas fa-chevron-right"></i></th>
                            </tr>
                            <WeekTitle />
                        </thead>
                        <tbody>
                            <Week start={1} 
                                current={current} 
                                end={7 - offset} 
                                offset={offset} 
                                activeMonth={activeMonth}
                                activeYear={activeYear}
                                selectDate={this.selectDate}
                                activeEnd={this.props.activeEnd}
                            />
                            {renderWeeks}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    } 
}
const Week = (props) => {
    var startDate = moment()
    var endDate =   moment().add(60, 'day')
    const makeActive = (current) => {
        let currentDate = moment().date(current).month(props.activeMonth).year(props.activeYear)
        if (currentDate.isBetween(startDate, endDate) || currentDate.isSame(startDate) ||  currentDate.isSame(endDate)) {
            return (<div className={current === props.current ? 'active' : ''} 
                onClick={() => props.selectDate(current)}>{current}</div>)
        } else {
            return <div className='disabled'>{current}</div>
        }
    }
    const returnArray = []
    for(let i = 0; i < props.offset; i++) {
        returnArray.push(<td key={i+'Empty'}><div></div></td>)
    }
    for(let begin=props.start; begin <= props.end;begin++) {
        returnArray.push(
            <td key={begin}>
                { makeActive(begin) }
            </td>
        )
    }
    return <tr>{returnArray}</tr>
}

export default DatePicker
