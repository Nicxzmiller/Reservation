import React, { useState } from 'react'
import './Header.css'
import { FaBed, FaPlane, FaCar, FaTaxi, FaCalendar } from 'react-icons/fa'
import { BsFillPersonFill } from 'react-icons/bs'
import {GrAttraction} from 'react-icons/gr'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns'

export const Header = () => {
const [openDate, setOpenDate ] = useState(false)
const [date, setDate] = useState([
    {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    }
]);

const [openOptions, setOpenOptions] = useState(false)
const [options, setOptions] = useState({
    adult:1,
    children:0,
    room:1,
})

  return (
    <div className='header'>
        <div className="headerContainer">
            <div className="headerList">
                <div className="headerListItem active">
                    <FaBed/>
                    <span>Stays</span>
                </div>
                <div className="headerListItem">
                    <FaPlane/>
                    <span>Flights</span>
                </div>
                <div className="headerListItem">
                    <FaCar/>
                    <span>Car Rentals</span>
                </div>
                <div className="headerListItem">
                    <GrAttraction/>
                    <span>Attractions</span>
                </div>
                <div className="headerListItem">
                    <FaTaxi/>
                    <span>Aiport Taxis</span>
                </div>
            </div>
            <h1 className="headerTitle">A life of discounts? It's Genius</h1>
            <p className="headerDescription">Get rewarded for your travels - Get 10% cashback on your first booking with JosBooking</p>
            <button className="headerButton">Sign in or Register</button>
            <div className="headerSearch">
                <div className="headerSearchItem">
                    <FaBed className="headerIcon" />
                    <input type="text" placeholder="Destination" className="headerSearchInput" />
                </div>
                <div className="headerSearchItem">
                    <FaCalendar className="headerIcon" />
                    <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                    {openDate && <DateRange className="date" editableDateInputs={true} onChange={item => setDate([item.selection])} moveRangeOnFirstSelection={false} ranges={date}/>}
                </div>
                <div className="headerSearchItem">
                    <BsFillPersonFill className="headerIcon" />
                    <span>{`${options.adult} adult • ${options.children} children • ${options.room} room`}</span>
                    <div className="options">
                        <div className="optionItem">
                            <span className="optionText">Adult</span>
                            <button className="optionCounterButton">-</button>
                            <span className="optionCounterNumber">1</span>
                            <button className="optionCounterButton">+</button>
                        </div>
                        <div className="optionItem">
                            <span className="optionText">Children</span>
                            <button className="optionCounterButton">-</button>
                            <span className="optionCounterNumber">0</span>
                            <button className="optionCounterButton">+</button>
                        </div>
                        <div className="optionItem">
                            <span className="optionText">Room</span>
                            <button className="optionCounterButton">-</button>
                            <span className="optionCounterNumber">1</span>
                            <button className="optionCounterButton">+</button>
                        </div>
                    </div>
                </div>
                <div className="headerSearchItem">
                    <button className="headerBtn">Search</button>
                </div>
            </div>
        </div>
    </div>
  )
}
