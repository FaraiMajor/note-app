import React, { useState } from "react";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';


export default function Note({ text, date, deleteNote, editNote }) {
    return (
        <div className="note">
            <div className="note--body">{text}</div>
            <div className="note--footer">

                {/* when button is clicked we update editNote id and pass the ID to createNote so we can edit that specific note */}
                <EditOutlinedIcon
                    className="note--edit"
                    onClick={editNote}
                    aria-hidden="true"
                />
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