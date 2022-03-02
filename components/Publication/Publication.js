import React from "react";
import Image from "next/image";
import ToolBar from "../ToolBar/ToolBar";
import useTimeAgo from "../../hooks/useTimeAgo";

function Publication({ photo, username, email, img, createdAt, message, likesCount, sharedCounts }) {
    const timeAgo = useTimeAgo(createdAt);
    
    return (
        <>
            <div className="publication">
                <div className="publication__header">
                    <div className="publication__image">
                        <Image src={photo} width="50" height="50" alt="image" />
                    </div>
                    <div className="publication__user">
                        <h5 className="publication__username">{username}</h5>
                        <h5 className="publication__email">{email}</h5>
                    </div>
                    <div className="publication__hour">
                        {timeAgo}
                    </div>
                </div>
                <div className="publication_body">
                    <div className="publication__content">
                        <p>{message}</p>
                        {img && <article>
                            <img src={img} alt="img" />
                        </article>}
                    </div>
                    <ToolBar likesCount={likesCount} sharedCounts={sharedCounts} />
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
                width: 60%;
              }

              .publication__user * {
                font-size: 15px;
                margin: 0;
              }

              .publication__email {
                color: #9f9f9f;
                font-weight: normal;
              }

              .publication__hour {
                width: 30%;
                text-align: end;
                color: #707173;
                font-weight: normal;
                font-size: 14px;
              }

              .publication__content p {
                color: #727272;
              }

              .publication__content article img {
                width: 100%;
              }

              .publication__content article {
                margin-bottom: 15px;
              }
            
            `}</style>
        </>
    );
}

export default Publication;
