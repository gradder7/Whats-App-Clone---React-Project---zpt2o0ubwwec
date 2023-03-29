import React from 'react'
import Sidebar from './Sidebar'
import "../css/Home.css";
function Home({currentUser,signOut}) {
  return (
    <div className="home">
      <div className="home-container">
        {/* sidebar */}
        <Sidebar currentUser={currentUser} signOut={signOut} />
        {/* a container with whs app logo */}
        <div className="home-bg">
          <img
            src="https://hindubabynames.info/downloads/wp-content/themes/hbn_download/download/social-media/whatsapp-logo.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
