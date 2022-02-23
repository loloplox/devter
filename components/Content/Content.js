import React from "react";
import Divtear from "../Divtear/Divtear";
import Publication from "../Publication/Publication";

function Content(props) {
    return (
        <>
            <div className="content">
                <div className="content__title">
                    <h2>Home</h2>
                </div>
                <div className="content__separacion"></div>
                <Divtear photo="https://picsum.photos/200" />
                <Publication photo="https://picsum.photos/200" username="Rodrigo Maldonado Vasquez"
                             email="rodrigomaldonadov8@gmail.com"
                             message="Donec efficitur ultricies urna non interdum. Integer semper, eros quis sollicitudin volutpat, quam magna dapibus urna, eget imperdiet neque lacus non augue. Donec odio arcu, tincidunt sed lacus et, auctor mollis nunc. Sed cursus felis nec tempor porttitor. Donec sodales ornare venenatis. Integer fermentum ultrices enim, eu accumsan orci facilisis id. Nullam ipsum massa, cursus sed urna in" />
                <Publication photo="https://picsum.photos/200" username="Rodrigo Maldonado Vasquez"
                             email="rodrigomaldonadov8@gmail.com"
                             message="Donec efficitur ultricies urna non interdum. Integer semper, eros quis sollicitudin volutpat, quam magna dapibus urna, eget imperdiet neque lacus non augue. Donec odio arcu, tincidunt sed lacus et, auctor mollis nunc. Sed cursus felis nec tempor porttitor. Donec sodales ornare venenatis. Integer fermentum ultrices enim, eu accumsan orci facilisis id. Nullam ipsum massa, cursus sed urna in" />
                <Publication photo="https://picsum.photos/200" username="Rodrigo Maldonado Vasquez"
                             email="rodrigomaldonadov8@gmail.com"
                             message="Donec efficitur ultricies urna non interdum. Integer semper, eros quis sollicitudin volutpat, quam magna dapibus urna, eget imperdiet neque lacus non augue. Donec odio arcu, tincidunt sed lacus et, auctor mollis nunc. Sed cursus felis nec tempor porttitor. Donec sodales ornare venenatis. Integer fermentum ultrices enim, eu accumsan orci facilisis id. Nullam ipsum massa, cursus sed urna in" />
                <Publication photo="https://picsum.photos/200" username="Rodrigo Maldonado Vasquez"
                             email="rodrigomaldonadov8@gmail.com"
                             message="Donec efficitur ultricies urna non interdum. Integer semper, eros quis sollicitudin volutpat, quam magna dapibus urna, eget imperdiet neque lacus non augue. Donec odio arcu, tincidunt sed lacus et, auctor mollis nunc. Sed cursus felis nec tempor porttitor. Donec sodales ornare venenatis. Integer fermentum ultrices enim, eu accumsan orci facilisis id. Nullam ipsum massa, cursus sed urna in" />
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
