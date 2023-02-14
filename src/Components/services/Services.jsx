import React from 'react'
import './services.css'
import {BiCheck} from "react-icons/bi"
const Services = () => {
  return (
    <section id='services'>
      <h5 className='text-light'>What Services I Provide</h5>
      <h2>My Services</h2>

    <div className="container services_container">

        <article className="service">
          <div className="service_header">
            <h3>Web Application Development</h3>
          </div>
          
          <ul className='service_list'>
            <li>
              <BiCheck className="service_list-icon"/> 
              <p>Frontend using React.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/> 
              <p>Dynamic Web APP using Django.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/> 
              <p>MERN Stack web application.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/> 
              <p>WIX Website Development & Drop Shipping.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/> 
              <p>Wordpress Theme Creation & Customization.</p>
            </li>
          </ul>
        </article>
      {/* End web_dev start UI UX design */}
        <article className="service">
          <div className="service_header">
            <h3>UI & UX Design</h3>
          </div>
          
          <ul className='service_list'>
            <li>
              <BiCheck className="service_list-icon"/> 
              <p>User Experience Research.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/> 
              <p>Website Design in Figma.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/> 
              <p>Upcoming...</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/> 
              <p>Upcoming...</p>
            </li>
          </ul>
        </article>
      {/* END of UI UX */}
        <article className="service">
          <div className="service_header">
            <h3>Remote Sensing & GIS</h3>
          </div>
          
          <ul className='service_list'>
            <li>
              <BiCheck className="service_list-icon"/> 
              <p>Web GIS Development.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/> 
              <p>Map Making & Projection & Research.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/> 
              <p>Analyzing spatial data through QGIS & ArcGIS.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon"/> 
              <p>Acquiring....</p>
            </li>
          </ul>
        </article>

    </div>
    </section>
  )
}

export default Services