import React from "react";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

export default function Note({ text, date, deleteNote }) {
    return (
        <div className="note">
            <div className="note--body">{text}</div>
            <div className="note--footer">
                <small>{date}</small>
                <DeleteForeverOutlinedIcon
                    className="note--delete"
                    onClick={deleteNote}
                    aria-hidden="true"
                ></DeleteForeverOutlinedIcon>
            </div>
        </div>
    )
}