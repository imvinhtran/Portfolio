import React from 'react'
import PORTFOLIO1 from '../../assets/photos/portfolio1.jpg'
import PORTFOLIO2 from '../../assets/photos/portfolio2.jpg'
import PORTFOLIO3 from '../../assets/photos/portfolio3.jpg'
import PORTFOLIO4 from '../../assets/photos/portfolio4.jpg'
import PORTFOLIO5 from '../../assets/photos/portfolio5.png'
import PORTFOLIO6 from '../../assets/photos/portfolio6.jpg'

const data = [
  {
    id: 1,
    img: PORTFOLIO1,
    title: 'Ctypyo Currency Dashboard & Financial Visualization',
    gitlink: 'https://github.com/',
    livedemo: ''
  },
  {
    id: 2,
    img: PORTFOLIO2,
    title: 'Ctypyo Currency Dashboard & Financial Visualization',
    gitlink: 'https://github.com/',
    livedemo: ''
  },
  {
    id: 3,
    img: PORTFOLIO3,
    title: 'Ctypyo Currency Dashboard & Financial Visualization',
    gitlink: 'https://github.com/',
    livedemo: ''
  },
  {
    id: 4,
    img: PORTFOLIO4,
    title: 'Ctypyo Currency Dashboard & Financial Visualization',
    gitlink: 'https://github.com/',
    livedemo: ''
  },
  {
    id: 5,
    img: PORTFOLIO5,
    title: 'Ctypyo Currency Dashboard & Financial Visualization',
    gitlink: 'https://github.com/',
    livedemo: ''
  },
  {
    id: 6,
    img: PORTFOLIO6,
    title: 'Ctypyo Currency Dashboard & Financial Visualization',
    gitlink: 'https://github.com/',
    livedemo: ''
  }

]

const PortfolioItems = () => {

  return (
        <div className="container portfolio__container">
        { data.map(({id, img, title, gitlink, livedemo}) => {
          return (
             <div key={id} className="portfolio__items">
                  <img src ={img} alt={title} />
                  <h3>{title}</h3>
                  <div>
                    <a href={gitlink} className='btn padding-left8'>Github</a>
                    <a href={livedemo} className='btn btn-primary'>Live Demo</a>
                  </div>
            </div>
          )
        } 
        )}
        </div>  
)
}   
    
export default PortfolioItems;