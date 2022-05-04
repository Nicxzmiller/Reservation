import React from 'react'
import "./PropertyList.css"

const PropertyList = () => {
  return (
    <div className='pList'>
        <div className="pListItem">
            <img className='pListImg' src="https://q-xx.bstatic.com/xdata/images/xphoto/300x320/115962930.jpg?k=a0ce444e110a4be257f71de4d995ebccb80f9859cb474120a030fda007ff8b71&o=" alt="" />
            <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>257 Hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img className='pListImg' src="https://q-xx.bstatic.com/xdata/images/xphoto/300x320/115962930.jpg?k=a0ce444e110a4be257f71de4d995ebccb80f9859cb474120a030fda007ff8b71&o=" alt="" />
            <div className="pListTitles">
                <h1>Apartments</h1>
                <h2>23 Apartments</h2>
            </div>
        </div>
        <div className="pListItem">
            <img className='pListImg' src="https://q-xx.bstatic.com/xdata/images/xphoto/300x320/115962930.jpg?k=a0ce444e110a4be257f71de4d995ebccb80f9859cb474120a030fda007ff8b71&o=" alt="" />
            <div className="pListTitles">
                <h1>Resorts</h1>
                <h2>32 Resorts</h2>
            </div>
        </div>
        <div className="pListItem">
            <img className='pListImg' src="https://q-xx.bstatic.com/xdata/images/xphoto/300x320/115962930.jpg?k=a0ce444e110a4be257f71de4d995ebccb80f9859cb474120a030fda007ff8b71&o=" alt="" />
            <div className="pListTitles">
                <h1>Villas</h1>
                <h2>10 Hotels</h2>
            </div>
        </div>
    </div>
  )
}

export default PropertyList