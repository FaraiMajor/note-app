import React from "react";

export default function CreateNote({ noteText, saveNote, inputText }) {
    const charLimit = 150; //character limit for each note
    const charLeft = charLimit - inputText.length;

    return (
        <div className="note new">
            <textarea
                cols="10"
                rows="6"
                placeholder="Type note...."
                maxLength="150"
                value={inputText}
                onChange={noteText}
            >
            </textarea>
            <div className="note--footer">
                <span className="label">{charLeft} left</span>
                <button className="note--save" onClick={saveNote}>
                    Save
                </button>
            </div>
        </div>
    )
}