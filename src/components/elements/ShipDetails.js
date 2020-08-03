import React from 'react'

const ShipDetails = ( {item, markSelected }) => {

            return markSelected ? (
                <div>
                    <h2>You selected:</h2>
                    <img src={item.img} alt="" />
                </div>
            ) : (
                <h3> No selection yet</h3>
            )
    
}

export default ShipDetails
