import React, { useEffect, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import Button from "../Button/Button";
import useUser from "../../hooks/useUser";
import { addDivt, fetchLatestDivts, uploadImage } from "../../firebase/client";
import { getDownloadURL } from "firebase/storage";

const DRAG_IMAGE_STATES = {
    ERROR: -1,
    NONE: 0,
    DRAG_OVER: 1,
    UPLOADING: 2,
    COMPLETE: 3
};

function Divtear(props) {
    const [message, setMessage] = useState("");
    const user = useUser();
    
    const [drag, setDrag] = useState(DRAG_IMAGE_STATES.NONE);
    const [task, setTask] = useState(null);
    const [imgUrl, setImgUrl] = useState(null);
    
    
    useEffect(() => {
        if (task) {
            let onProgress = () => {
            };
            let onError = () => {
                console.log("error");
            };
            let onComplete = () => {
                console.log("complete");
                getDownloadURL(task.snapshot.ref).then(setImgUrl);
            };
            
            task.on("state_changed", onProgress, onError, onComplete);
        }
    }, [task]);
    
    
    function handleChange(e) {
        const { value } = e.target;
        setMessage(value);
    }
    
    function handleDragEnter(e) {
        e.preventDefault();
        setDrag(DRAG_IMAGE_STATES.DRAG_OVER);
    }
    
    function handleDragLeave(e) {
        e.preventDefault();
        setDrag(DRAG_IMAGE_STATES.NONE);
    }
    
    function handleDrop(e) {
        e.preventDefault();
        setDrag(DRAG_IMAGE_STATES.NONE);
        
        const file = e.dataTransfer.files[0];
        const task = uploadImage(file);
        
        setTask(task);
    }
    
    
    function handleSubmit(e) {
        e.preventDefault();
        addDivt({
            avatar: user.photo,
            content: message,
            userId: user.uid,
            username: user.name,
            email: user.email,
            img: imgUrl
        }).then(() => {
            fetchLatestDivts().then(props.setDivts);
            setMessage("");
            setImgUrl(null);
        });
    }
    
    
    return (
        <>
            <div className="divtear">
                <div className="divtear__image">
                    {user ? <img src={user.photo} alt="img" /> :
                        <img src="https://acegif.com/wp-content/uploads/loading-25.gif" alt="img" />}
                </div>
                <div className="divtear__tools">
                    <form onSubmit={handleSubmit}>
                        <div className="divtear__write">
                            <TextareaAutosize placeholder="Que estas pensando?"
                                              maxLength="400" value={message} onChange={handleChange}
                                              onDragEnter={(e) => handleDragEnter(e)}
                                              onDragLeave={(e) => handleDragLeave(e)} onDrop={(e) => handleDrop(e)} />
                            {imgUrl && <section>
                                <button onClick={() => setImgUrl(null)}>x</button>
                                <img src={imgUrl} alt="img" />
                            </section>}
                        </div>
                        <div className="divtear__button">
                            <Button disabled={message.length === 0} content="Divt" width="20%" padding="5px 0"
                                    margin="10px 0 0 0" />
                        </div>
                    </form>
                </div>
            </div>
            
            <style jsx>{`
              .divtear {
                padding-left: 16px;
                padding-right: 16px;
                display: flex;
                border-bottom: 1px solid #e6e6e6;
              }

              section {
                position: relative;
              }

              section img {
                width: 100%;
              }

              section button {
                background-color: rgba(0, 0, 0, 0.7);
                border-radius: 10px;
                width: 50px;
                height: 50px;
                font-size: 24px;
                color: #fff;
                top: 15px;
                position: absolute;
                right: 10px;
                border: 0;
                cursor: pointer;
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
                border: ${drag === DRAG_IMAGE_STATES.DRAG_OVER ? "3px dashed #e6e6e6" : "3px solid transparent"};
                outline: none;
                font-size: 20px;
                overflow: hidden;
                resize: none;
                max-width: 100%;
                min-height: 50px;
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
