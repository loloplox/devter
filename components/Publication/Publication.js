import React from "react";
import Image from "next/image";
import ToolBar from "../ToolBar/ToolBar";

function Publication(props) {
    return (
        <>
            <div className="publication">
                <div className="publication__header">
                    <div className="publication__image">
                        <Image src={props.photo} width="50" height="50" alt="image" />
                    </div>
                    <div className="publication__user">
                        <h5 className="publication__username">{props.username}</h5>
                        <h5 className="publication__email">{props.email}</h5>
                    </div>
                </div>
                <div className="publication_body">
                    <div className="publication__content">
                        <p>{props.message}</p>
                    </div>
                    <ToolBar />
                </div>
            </div>
            
            <style jsx>{`
              .publication {
                width: 100%;
                padding: 16px;
                border-bottom: 1px solid #e6e6e6;
              }

              .publication__header {
                display: flex;
                width: 100%;
              }

              .publication__image {
                width: 10%;
              }

              .publication__image :global(img) {
                border-radius: 10px;
              }

              .publication__user {
              }

              .publication__user * {
                font-size: 15px;
                margin: 0;
              }

              .publication__email {
                color: #9f9f9f;
                font-weight: normal;
              }

              .publication__content p {
                color: #727272;
              }
            
            `}</style>
        </>
    );
}

export default Publication;
