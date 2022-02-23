import React from "react"

function Avatar(props) {
    const boxShadow = props.shadow && "0px 20px 30px #dcd8d8"
    const border = props.border && "1px solid #e1e1e1"

    return (
        <>
            <div className="avatar">
                <div>
                    <img className="avatar__image" src={props.photo} />
                </div>
                <div>
                    <p className="avatar__name">{props.name}</p>
                    <p className="avatar__email">{props.email}</p>
                </div>
            </div>

            <style jsx>{`
                .avatar {
                    border-radius: 20px;
                    box-shadow: ${boxShadow};
                    border: ${border};
                    display: flex;
                    place-items: center;
                    padding: 10px;
                }

                .avatar__image {
                    width: 35px;
                    height: 35px;
                    margin-right: 5px;
                    border-radius: 5px;
                }

                .avatar__name {
                    margin: 0;
                    font-size: 14px;
                }

                .avatar__email {
                    margin: 0;
                    font-size: 10px;
                    color: gray;
                }
            `}</style>
        </>
    )
}

export default Avatar
