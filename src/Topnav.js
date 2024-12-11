import React from "react";

function Topnav({handleNav, showSideNav}){
    return(
        <>
         <section className={`top-nav ${showSideNav ? "shift" : ""}`}>
            <div className="topnav-container">
            <div className="topnav-left">
                <input type="text" placeholder="Search" />
            </div>
            <div className="topnav-right">
                <img src="./message.svg" alt="message-icon" />
                <img src="./notification.svg" alt="notification-icon" />
                <img src="./user.svg" className="user-icon" alt="user-icon" />
                <p>George Martin</p>
                {showSideNav ? (
               <img src="./close-icon.svg" alt="close-icon" className="nav-icon" onClick={handleNav} />
                   ) : (
                <img src="./nav-collapse.svg" alt="nav-icon" className="nav-icon"  onClick={handleNav} />
               )}
                
            </div>
            </div>
            <div className="purple-header">
                <div className="purple-header-left"><p>Cryptocurrency</p></div>
                <div className="purple-header-right">
                    <a href="#home">Home</a>
                    <a href="#crypto">Cryptocurrency</a>
                </div>
            </div>
         </section>
        </>
    );
}

export default Topnav;