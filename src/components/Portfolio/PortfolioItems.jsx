import React from 'react'
import PORTFOLIO1 from '../../assets/photos/portfolio1.jpg'
import PORTFOLIO2 from '../../assets/photos/portfolio2.jpg'
import PORTFOLIO3 from '../../assets/photos/portfolio3.jpg'
import PORTFOLIO4 from '../../assets/photos/portfolio4.jpg'

const data = [
  {
    id: 1,
    img: PORTFOLIO1,
    title: 'Make a Back-end Server',
    gitlink: 'https://github.com/vquang19/F8Sever-learnBackEnd',
    livedemo: ''
  },
  {
    id: 2,
    img: PORTFOLIO2,
    title: 'Make a Portfolio Website',
    gitlink: 'https://github.com/vquang19/Portfolio',
    livedemo: ''
  },
  {
    id: 3,
    img: PORTFOLIO3,
    title: 'Privacy and Policy for SSC',
    gitlink: 'https://github.com/vquang19/SSCPrivacyPolicy',
    livedemo: ''
  },
  {
    id: 4,
    img: PORTFOLIO4,
    title: 'Groove Music For Releax',
    gitlink: 'https://github.com/vquang19/GrooveMusic',
    livedemo: ''
  },


]

const PortfolioItems = () => {

  return (
        <div className="container portfolio__container">
        { data.map(({id, img, title, gitlink, livedemo}) => {
          return (
             <div key={id} className="portfolio__items">
                  <img className='img-480-360' src ={img} alt={title} />
                  <h3>{title}</h3>
                  <div>
                    <a href={gitlink} className='btn padding-left8'>Github</a>
                  </div>
            </div>
          )
        } 
        )}
        </div>  
)
}   
    
export default PortfolioItems;