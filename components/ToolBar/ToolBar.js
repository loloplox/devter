import React from "react";
import { GiHearts } from "react-icons/gi";
import { FaComment } from "react-icons/fa";
import { RiShareForwardFill } from "react-icons/ri";
import Button from "../Button/Button";

function ToolBar(props) {
    return (
        <>
            <div className="toolbar">
                <Button content={<GiHearts />} width="15%" heigth="30px" fontSize="15px" margin="auto" />
                <Button content={<FaComment />} width="15%" heigth="30px" fontSize="15px" margin="auto" />
                <Button content={<RiShareForwardFill />} width="15%" heigth="30px" fontSize="15px" margin="auto" />
            </div>
            
            <style jsx>{`
              .toolbar {
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
              }
            `}</style>
        </>
    );
}

export default ToolBar;
