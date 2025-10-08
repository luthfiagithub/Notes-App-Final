import React from "react";
import NoteItem from "./NoteItem";
import EmptyState from "../ui/EmptyState";

function NoteList({ notes, onDelete, onToggleArchive, archiveMode }) {
  if (notes.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="notes-list">
      {notes.slice().reverse().map((note) => (
        <NoteItem
          key={note.id}
          {...note}
          onDelete={onDelete}
          onToggleArchive={onToggleArchive}
          archiveMode={archiveMode}
        />
      ))}
    </div>
  );
}

export default NoteList;
