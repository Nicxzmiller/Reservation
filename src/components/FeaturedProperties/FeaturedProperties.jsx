import React from 'react'
import "./FeaturedProperties.css"

const FeaturedProperties = () => {
  return (
    <div className="fpList">
      <div className="fp">
        <img className='pListImg' src="https://cf.bstatic.com/xdata/images/hotel/max500/34497879.jpg?k=d27391d1eaeb691fafed1ae7fd6cedcfa7d2634113ed446614bd2389ecb1bfc6&o=" alt="" />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Italy</span>
        <span className="fpPrice">$110 Per Night</span>
        <div className="fpRating">
          <button>7.5</button>
          <span>Great</span>
        </div>
      </div>
      <div className="fp">
        <img className='pListImg' src="https://cf.bstatic.com/xdata/images/hotel/max500/34497879.jpg?k=d27391d1eaeb691fafed1ae7fd6cedcfa7d2634113ed446614bd2389ecb1bfc6&o=" alt="" />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Spain</span>
        <span className="fpPrice">$210 Per Night</span>
        <div className="fpRating">
          <button>7.5</button>
          <span>Great</span>
        </div>
      </div>
      <div className="fp">
        <img className='pListImg' src="https://cf.bstatic.com/xdata/images/hotel/max500/34497879.jpg?k=d27391d1eaeb691fafed1ae7fd6cedcfa7d2634113ed446614bd2389ecb1bfc6&o=" alt="" />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Germany</span>
        <span className="fpPrice">$80 Per Night</span>
        <div className="fpRating">
          <button>7.5</button>
          <span>Great</span>
        </div>
      </div>
      <div className="fp">
        <img className='pListImg' src="https://cf.bstatic.com/xdata/images/hotel/max500/34497879.jpg?k=d27391d1eaeb691fafed1ae7fd6cedcfa7d2634113ed446614bd2389ecb1bfc6&o=" alt="" />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Valancia</span>
        <span className="fpPrice">$40 Per Night</span>
        <div className="fpRating">
          <button>7.5</button>
          <span>Great</span>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProperties