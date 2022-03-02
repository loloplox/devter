import React from "react";

function Button({ width, heigth, content, fontSize, padding, margin, fontWeight, disabled, icon }) {
    
    return (
        <>
            <button disabled={disabled}>
                {icon} {content}
            </button>
            
            <style jsx>{`
              button {
                border: none;
                height: ${heigth};
                width: ${width};
                cursor: ${disabled ? "auto" : "pointer"};
                border-radius: 10px;
                font-size: ${fontSize};
                padding: ${padding};
                margin: ${margin};
                font-weight: ${fontWeight};
              }

              button:hover {
                transition: ${!disabled && "all 0.2s ease-in-out"};
                background-color: ${!disabled && "#e6e6e6"};
              }
            `}</style>
        </>
    );
}

export default Button;
