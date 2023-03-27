import React from "react";

export default function CreateNote({ noteText, saveNote, inputText, editNoteId }) {
    const charLimit = 150; //character limit for each note
    const charLeft = charLimit - inputText.length;

    return (
        <div className="note new">
            <textarea
                cols="10"
                rows="6"
                placeholder={editNoteId !== "" ? "Update note here..." : "Type note...."}
                maxLength="150"
                value={inputText}  //controls state and makes sure we only show text in state which is none(placeholder) after we save
                onChange={noteText} // changes state when typings
            >
            </textarea>
            <div className="note--footer">
                <span className="label">{charLeft} left</span>
                <button className="note--save" onClick={saveNote}>
                    {/* if editNote id is not empty then we update note otherwise save new note */}
                    {editNoteId !== "" ? "Update" : "Save"}
                </button>
            </div>
        </div>
    )
}