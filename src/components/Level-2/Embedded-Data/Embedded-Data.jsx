import React from 'react';
import {CardDisplay} from '../../Level-1';

import './Embedded-Data.css';

function EmbeddedData(){
    return(
        <section className="extra-container">
            <section className="title-pos">
                <h1 className="title">Extra Menu</h1>
            </section>
            <hr className="temperature-separator"/>
            <section className="card-content-holder">
                    <CardDisplay 
                    Title={"Event"} 
                    Information={"Event is process flag"} 
                    ImageLink={"https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"} 
                    />
                    <CardDisplay
                    Title={"Parameter"} 
                    Information={"Parameter is variable which change limit process"} 
                    ImageLink={"https://wallpapercave.com/wp/wp2203889.jpg"} 
                    />
                    <CardDisplay
                    Title={"Status"} 
                    Information={"Status is major setting for process"} 
                    ImageLink={"https://c4.wallpaperflare.com/wallpaper/956/222/441/technics-wallpaper-preview.jpg"} 
                    />
                    <CardDisplay
                    Title={"History"} 
                    Information={"History is menu which user can view History"} 
                    ImageLink={"https://www.wellesleyfreelibrary.org/wp-content/uploads/2016/01/history-wallpaper.png"} 
                    />
            </section>
            <br/>
            <br/>
            <br/>
        </section>
    )
}

export default EmbeddedData;