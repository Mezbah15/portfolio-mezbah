import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from "react-icons/bs";
import {FaWix} from "react-icons/fa"
import {DiWordpress} from "react-icons/di"
import {FaShopify} from "react-icons/fa"
import {FiFigma} from "react-icons/fi"
import {SiMaterialui} from "react-icons/si"
import {RiGatsbyFill} from "react-icons/ri"
import {SiQgis} from "react-icons/si"
import {SiMongodb} from "react-icons/si"
import {SiLeaflet} from "react-icons/si"
const experience = () => {
  return (
    <section id='experience'>
      <h5 className='text-light'> What skills I have</h5>
      <h2>My Experience</h2>

      <div className='container experience_container'>

        <div className="experience_frontend">
          <h2>Frontend Development</h2>
          <div className="experience_content">

            <article className='experience_details'>
              <BsPatchCheckFill className='experience-icons'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience-icons'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience-icons'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience-icons'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience-icons'/>
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience-icons'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

{/* END OF FRONTEND */}

        <div className="experience_backend">
          <h2>Backend Development</h2>
          <div className="experience_content">

            <article className='experience_details'>
              <BsPatchCheckFill className='experience-icons'/>
              <div>
                <h4>Nodejs</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience-icons' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience-icons' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience-icons'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience-icons' />
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience-icons'/>
              <div>
                <h4>Django</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
        </div>

{/* END OF BACKEND */}    

          <div className="experience_ui&cms">
          <h2>UI UX and CMS</h2>
          <div className="experience_content">

            <article className='experience_details'>
              <FiFigma className='experience-icons'/>
              <div>
                <h4>FIGMA</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <SiMaterialui className='experience-icons'/>
              <div>
                <h4>MATERIAL UI</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <FaWix className='experience-icons'/>
              <div>
                <h4>WIX</h4>
                <small className='text-light'>Cloud Based CMS</small>
              </div>
            </article>
            <article className='experience_details'>
              <DiWordpress className='experience-icons'/>
              <div>
                <h4>WORDPRESS</h4>
                <small className='text-light'>Woo-commerce</small>
              </div>
            </article>
            <article className='experience_details'>
              <FaShopify className='experience-icons'/>
              <div>
                <h4>SHOPIFY</h4>
                <small className='text-light'>E-commerce</small>
              </div>
            </article>
            <article className='experience_details'>
              <RiGatsbyFill className='experience-icons'/>
              <div>
                <h4>Gatsby</h4>
                <small className='text-light'>React Framework</small>
              </div>
            </article>
          </div>
        </div>   

{/*End of UI UX CMS....  Starts GIS and RS*/}

         <div className="experience_gis&rs">
          <h2>GIS and Remote Sensing</h2>
          <div className="experience_content">

            <article className='experience_details'>
              <SiQgis className='experience-icons'/>
              <div>
                <h4>QGIS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience-icons' />
              <div>
                <h4>ArcGIS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <SiMongodb className='experience-icons' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Spatial Database</small>
              </div>
            </article>
            <article className='experience_details'>
              <SiLeaflet className='experience-icons'/>
              <div>
                <h4>Leaflet</h4>
                <small className='text-light'>Web Mapping jsLibrary</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience-icons' />
              <div>
                <h4>Projection</h4>
                <small className='text-light'>Pro</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience-icons'/>
              <div>
                <h4>Python Console</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default experience