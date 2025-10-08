import React from "react";
import { Link } from "react-router-dom";
import parser from "html-react-parser";
import { showFormattedDate } from "../../utils"
import DeleteButton from "../buttons/DeleteButton";
import ArchiveButton from "../buttons/ArchiveButton";


function NoteItem({
  id, title, createdAt, body, onDelete, archived, onToggleArchive, archiveMode
}) {
  return (
    <div className="note-item">
      <h3 className="note-item__title">
        <Link to={`/notes/${id}`}>
          {title}
        </Link>
      </h3>
      <p className="note-item__createdAt">{showFormattedDate(createdAt)}</p>
      <p className="note-item__body">{parser(body)}</p>

      <div className="note-item__footer">
        <ArchiveButton
          noteId={id}
          archived={archived}
          onToggle={onToggleArchive}
          mode={archiveMode}
        />
        <DeleteButton
          noteId={id}
          onDelete={onDelete}
        />
      </div>
    </div>
  );
}

export default NoteItem;


