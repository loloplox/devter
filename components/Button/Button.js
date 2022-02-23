import React from "react";

function Button({ width, heigth, content, fontSize, padding, margin, fontWeight }) {
    
    return (
        <>
            <button>
                {content}
            </button>
            
            <style jsx>{`
              button {
                border: none;
                height: ${heigth};
                width: ${width};
                cursor: pointer;
                border-radius: 10px;
                font-size: ${fontSize};
                padding: ${padding};
                margin: ${margin};
                font-weight: ${fontWeight};
              }

              button:hover {
                transition: all 0.2s ease-in-out;
                background-color: #e6e6e6;
              }
            `}</style>
        </>
    );
}

export default Button;
