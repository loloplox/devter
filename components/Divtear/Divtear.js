import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import Button from "../Button/Button";

function Divtear(props) {
    
    return (
        <>
            <div className="divtear">
                <div className="divtear__image">
                    <img src={props.photo} alt="" />
                </div>
                <div className="divtear__tools">
                    <div className="divtear__write">
                        <TextareaAutosize placeholder="Que estas pensando?"
                                          maxLength="400" />
                    </div>
                    <div className="divtear__button">
                        <Button content="Divt" width="20%" padding="5px 0" margin="10px 0 0 0" />
                    </div>
                </div>
            </div>
            
            <style jsx>{`
              .divtear {
                padding-left: 16px;
                padding-right: 16px;
                display: flex;
                border-bottom: 1px solid #e6e6e6;
              }

              .divtear__image {
                width: 10%;
              }

              .divtear__image img {
                width: 50px;
                border-radius: 10px;
              }

              .divtear__tools {
                width: 90%;
              }

              .divtear__write :global(textarea) {
                width: 100%;
                height: 50px;
                border: none;
                outline: none;
                font-size: 20px;
                overflow: hidden;
              }

              .divtear__button {
                width: 100%;
                display: flex;
                justify-content: end;
                margin-top: 20px;
                margin-bottom: 15px;
              }
            `}</style>
        </>
    );
}

export default Divtear;
