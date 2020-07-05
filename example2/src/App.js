import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

let styles = {
  margin: 'auto',
  width: '850px'
};

function App() {
  return (
      <div style={styles}>
        <Carousel>
          <div>
            <img src="https://www.planetware.com/photos-large/IND/india-top-attractions-taj-mahal.jpg" alt="The Taj Mahal, Agra" />
            <p className="legend">The Taj Mahal, Agra</p>
          </div>
          <div>
            <img src="https://www.planetware.com/photos-large/IND/india-top-attractions-varanasi.jpg" alt="The Holy City of Varanasi"/>
            <p className="legend">The Holy City of Varanasi</p>
          </div>
          <div>
            <img src="https://www.planetware.com/photos-large/IND/india-top-attractions-harmandir-sahib.jpg" alt="Harmandir Sahib: The Golden Temple of Amritsar"/>
            <p className="legend">Harmandir Sahib: The Golden Temple of Amritsar</p>
          </div>
          <div>
            <img src="https://www.planetware.com/photos-large/IND/india-top-attractions-jaisalmer.jpg" alt="The Golden City: Jaisalmer"/>
            <p className="legend">The Golden City: Jaisalmer</p>
          </div>

          <div>
            <img src="https://www.planetware.com/photos-large/IND/india-top-attractions-red-fort.jpg" alt="The Red Fort, New Delhi"/>
            <p className="legend">The Red Fort, New Delhi</p>
          </div>
          <div>
            <img src="https://www.planetware.com/photos-large/IND/india-top-attractions-gateway-india.jpg" alt="Mumbai: The Gateway of India"/>
            <p className="legend">Mumbai: The Gateway of India</p>
          </div>
          <div>
            <img src="https://www.planetware.com/photos-large/IND/india-top-attractions-mecca-masjid.jpg" alt="Mecca Masjid, Hyderabad"/>
            <p className="legend">Mecca Masjid, Hyderabad</p>
          </div>

          <div>
            <img src="https://www.planetware.com/photos-large/IND/india-top-attractions-amer-fort.jpg" alt="Amer Fort, Jaipur"/>
            <p className="legend">Amer Fort, Jaipur</p>
          </div>
          <div>
            <img src="https://www.planetware.com/wpimages/2019/08/india-top-attractions-goa-beaches.jpg" alt="The Beaches of Goa"/>
            <p className="legend">The Beaches of Goa</p>
          </div>
          <div>
            <img src="https://www.planetware.com/photos-large/IND/india-top-attractions-periyar-national-park-wildlife-sanctuary.jpg" alt="Periyar National Park and Wildlife Sanctuary, Madurai"/>
            <p className="legend">Periyar National Park and Wildlife Sanctuary, Madurai</p>
          </div>


          <div>
            <img src="https://www.planetware.com/photos-large/IND/india-top-attractions-agra-fort.jpg" alt="Agra Fort"/>
            <p className="legend">Agra Fort</p>
          </div>
          <div>
            <img src="https://www.planetware.com/photos-large/IND/india-top-attractions-ellora-caves.jpg" alt="The Ellora Caves, Aurangabad"/>
            <p className="legend">The Ellora Caves, Aurangabad</p>
          </div>
          <div>
            <img src="https://www.planetware.com/photos-large/IND/india-top-attractions-mehrangarh-fort.jpg" alt="Mehrangarh Fort, Jodhpur"/>
            <p className="legend">Mehrangarh Fort, Jodhpur</p>
          </div>

          <div>
            <img src="https://www.planetware.com/photos-large/IND/india-top-attractions-mysore-palace.jpg" alt="Mysore Palace"/>
            <p className="legend">Mysore Palace</p>
          </div>
          <div>
            <img src="https://www.planetware.com/photos-large/IND/india-top-attractions-mahabodhi-temple.jpg" alt="Mahabodhi Temple, Bodhgaya"/>
            <p className="legend">Mahabodhi Temple, Bodhgaya</p>
          </div>

        </Carousel>
      </div>
  );
}

export default App;