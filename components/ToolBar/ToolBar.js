import React from "react";
import { GiHearts } from "react-icons/gi";
import { FaComment } from "react-icons/fa";
import { RiShareForwardFill } from "react-icons/ri";
import Button from "../Button/Button";

function ToolBar({ likesCount = 0, sharedCounts = 0 }) {
    return (
        <>
            <div className="toolbar">
                <Button icon={<GiHearts />} content={likesCount} width="15%" heigth="30px" fontSize="15px"
                        margin="auto" />
                <Button icon={<FaComment />} width="15%" heigth="30px" fontSize="15px" margin="auto" />
                <Button icon={<RiShareForwardFill />} content={sharedCounts} width="15%" heigth="30px" fontSize="15px"
                        margin="auto" />
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
