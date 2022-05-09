import React, { useState } from 'react'
import './Header.css'
import { FaBed, FaPlane, FaCar, FaTaxi, FaCalendar } from 'react-icons/fa'
import { BsFillPersonFill } from 'react-icons/bs'
import {GrAttraction} from 'react-icons/gr'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'

export const Header = ({type}) => {
const [openDate, setOpenDate ] = useState(false)
const [destination, setDestination ] = useState("")
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
});

const navigate = useNavigate()

const handleOption = (name, operation) => {
    setOptions(prev=>{return{
        ...prev, [name]: operation === "i" ? options[name] + 1 : options[name] - 1
    }})
}

const handleSearch = () => {
    navigate("/hotels", {state:{destination, date, options}})
}

  return (
    <div className='header'>
        <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
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
                    <span>Airport Taxis</span>
                </div>
            </div>
            { type !== "list" &&
                <>
                    <h1 className="headerTitle">A life of discounts? It's Genius</h1>
                    <p className="headerDescription">Get rewarded for your travels - Get 10% cashback on your first booking with JosBooking</p>
                    <button className="headerButton">Sign in or Register</button>
                    <div className="headerSearch">
                        <div className="headerSearchItem">
                            <FaBed className="headerIcon" />
                            <input type="text" placeholder="Destination" className="headerSearchInput"  onChange={(e) => setDestination(e.target.value)}/>
                        </div>
                        <div className="headerSearchItem">
                            <FaCalendar className="headerIcon" />
                            <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                            {openDate && <DateRange className="date" editableDateInputs={true} onChange={item => setDate([item.selection])} moveRangeOnFirstSelection={false} ranges={date}/>}
                        </div>
                        <div className="headerSearchItem">
                            <BsFillPersonFill className="headerIcon" />
                            <span className="headerSearchText" onClick={() => setOpenOptions(!openOptions)}>{`${options.adult} adult • ${options.children} children • ${options.room} room`}</span>
                            {openOptions && <div className="options">
                            <div className="optionItem">
                                <span className="optionText">Adult</span>
                                <div className="optionCounter">
                                    <button disabled={options.adult <= 1} className="optionCounterButton" onClick={() =>handleOption("adult", "d")}>-</button>
                                    <span className="optionCounterNumber">{options.adult}</span>
                                    <button className="optionCounterButton" onClick={() =>handleOption("adult", "i")}>+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Children</span>
                                <div className="optionCounter">
                                    <button disabled={options.children <= 0} className="optionCounterButton" onClick={() =>handleOption("children", "d")}>-</button>
                                    <span className="optionCounterNumber">{options.children}</span>
                                    <button className="optionCounterButton" onClick={() =>handleOption("children", "i")}>+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Room</span>
                                <div className="optionCounter">                         
                                    <button disabled={options.room <= 0} className="optionCounterButton" onClick={() =>handleOption("room", "d")}>-</button>
                                    <span className="optionCounterNumber">{options.room}</span>
                                    <button className="optionCounterButton" onClick={() =>handleOption("room", "i")}>+</button>
                                </div>
                            </div>
                        </div>}
                            
                        </div>
                        <div className="headerSearchItem">
                            <button className="headerButton" onClick={handleSearch}>Search</button>
                        </div>
                    </div>
                </>
            }
        </div>
    </div>
  )
}
