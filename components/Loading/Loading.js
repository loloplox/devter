import React from "react";
import Image from "next/image";

function Loading(props) {
    return (
        <>
            <div className="loading">
                <Image src="/logo.svg" width="70px" height="70px" alt="img" />
            </div>
            
            <style jsx>{`
              .loading {
                width: 100vw;
                height: 100vh;
                background-color: white;
                position: absolute;
                place-content: center;
                display: flex;
              }

              .loading :global(img) {
                margin: auto;
              }
            `}</style>
        </>
    );
}

export default Loading;
