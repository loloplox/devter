import React, { useEffect } from "react";
import Divtear from "../Divtear/Divtear";
import Publication from "../Publication/Publication";

function Content({ divts, setDivts }) {
    
    return (
        <>
            <div className="content">
                <div className="content__title">
                    <h2>Home</h2>
                </div>
                <div className="content__separacion" />
                <Divtear setDivts={setDivts} />
                {divts && divts.map(divt => (
                        <Publication key={divt.id} photo={divt.avatar}
                                     img={divt.img} username={divt.username} email={divt.email}
                                     message={divt.content} likesCount={divt.likesCount}
                                     sharedCounts={divt.sharedCounts} createdAt={divt.createdAt}
                        />
                    )
                )}
            </div>
            
            
            <style jsx>{`
              .content {
                max-width: 600px;
                width: 100%;
                border-left: 1px solid #e6e6e6;
                border-right: 1px solid #e6e6e6;
                margin-left: 280px;
              }

              .content__separacion {
                padding-top: 65px;
              }

              .content__title {
                padding: 16px;
                position: fixed;
                top: 0;
                background-color: rgba(255, 255, 255, 0.65);
                width: 44.5%;
                z-index: 100;
                backdrop-filter: blur(5px);
              }

              .content__title h2 {
                font-size: 20px;
                margin: 0;
              }
            `}</style>
        </>
    );
}

export default Content;
