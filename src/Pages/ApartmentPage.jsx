import React from 'react' ;
import "./ApartmentPage.scss";

function ApartmentPage() {
  return (
    <div className='apartment-page'>
        <div>
            <img src="https://picsum.photos/800/400" alt="" />
        </div>
            <div className='apartment_header'>
            <div className='apartment_title'>
        <h1>Crazy loft on the Canal Saint-Martin</h1>
        <h2>Paris, Ile de france </h2>
        <div className='apartment_tags'>
                <span >Cozy</span>
                <span >Canal</span>
                <span >Paris 10</span>
                </div>
                </div>
                <div className="apartment_owner">
                    <div className='apartment_owner_details'>
                    <h3> 
                    <span> Alexandre</span> 
                    <span>Dumas</span>
                    </h3>
                    <div className="apartment_owner_badge"></div>
                    </div>
                    <div className='apartment_owner_stars'>
                    <span className='on'>★</span>
                    <span className='on'>★</span>
                    <span className='on'>★</span>
                    <span className='off'>★</span>
                    <span className='off'>★</span>
                    </div>
                    </div>
                    </div>
                    <div className="apartment_description">
                        <p>Description</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem odit, quidem blanditiis architecto debitis 
                            suscipit harum tempore quibusdam ratione vitae numquam saepe, quam quis placeat nam excepturi aut autem temporibus aliquid at commodi 
                            doloribus beatae explicabo. Maiores, atque harum voluptas quod eveniet tempora illum iste repellat ea, fugiat est voluptates?</p>
                    </div>
                    <div className="apartment_description">
                        <p>Description</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem odit, quidem blanditiis architecto debitis 
                            suscipit harum tempore quibusdam ratione vitae numquam saepe, quam quis placeat nam excepturi aut autem temporibus aliquid at commodi 
                            doloribus beatae explicabo. Maiores, atque harum voluptas quod eveniet tempora illum iste repellat ea, fugiat est voluptates?</p>
                    </div>
            </div>
       
  )
}

export default ApartmentPage