import React from 'react'
import './portfolio.css'
import IMG1 from '../../Assets/project_pic_1.png'
import IMG2 from '../../Assets/project_pic_2.png'
import pic1 from '../../Assets/my-bg.png'

/* const  data = [
  {
    id: 1,
    image: pic1,
    title: "Somewhat",
    github: "www.github.com",
    demo: 'link'
  }
  {
    id:2,
  }

]
*/
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5 className='text-light'>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
{/* Dynamically Generated Portfolio using map method*/}
        {/* 
          {
            data.map(({id, image, title, github, demo}) => {
              return (
                <article key={id} className='portfolio_item'>
                  <div className="portfolio_item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h3> {title} </h3>
                  <div className="portfolio_item-cta">
                    <a href={github}> Github </a>
                    <a href={demo}> Live Demo </a>
                  </div>
                </article>
              )
            })
          }
         */}
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
          <img src={IMG1} alt="" />
          </div>
          <h4>E-Commerce Website</h4>
          <div className="portfolio_item-cta">
            <a href="#" className='btn' target="_blank">Github</a>
            <a href="https://www.luxorcabinet.com/" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
          <img src={IMG2} alt="" />
          </div>
          <h4>E-Commerce website.
            Under Development</h4>
          <div className="portfolio_item-cta">
            <a href="https://github.com/Mezbah15/dhaka-mart" className='btn' target="_blank">Github</a>
            <a href="https://mezbah15.github.io/dhaka-mart/" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className="portfolio_item-image">
          <img src={pic1} alt="" />
          </div>
          <h4>Under Development</h4>
          <div className="portfolio_item-cta">
            <a href="#" className='btn' target="_blank">Github</a>
            <a href="#" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio