import React from "react";
import Content from "../Content/Content";
import Slider from "../Slider/Slider";

function Main(props) {
    return (
        <>
            <div className="main">
                <Content />
                <Slider />
            </div>
            <style jsx>{`
              .main {
                max-width: 990px;
                width: 100%;
              }
            `}</style>
        </>
    
    );
}

export default Main;
