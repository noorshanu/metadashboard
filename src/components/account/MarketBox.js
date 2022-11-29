import React from 'react'

function MarketBox() {
  return (
    <section className='market-box-section'>
        <div className='container'>
            <div className='box-row'>
                <div className='market-box-1-1'>
                    <div className='text-center'>
                        <h1>Top Buyer</h1>
                    </div>
                    <div className='soon'>
                        <h1>Soon...</h1>
                    </div>
                </div>
                <div className='market-box-2-2'>
                <div className='text-center'>
                        <h1>Most Viewed</h1>
                    </div>
                    <div className='soon'>
                        <h1>Soon...</h1>
                    </div>
                </div>
                <div className='market-box-3-3'>
                <div className='text-center'>
                        <h1>Higher Bidder</h1>
                    </div>
                    <div className='soon'>
                        <h1>Soon...</h1>
                    </div>
                </div>



            </div>
            
        </div>
    </section>
  )
}

export default MarketBox