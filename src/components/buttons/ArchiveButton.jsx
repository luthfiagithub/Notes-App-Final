import React, { useContext } from "react";
import { FaBoxArchive } from "react-icons/fa6";
import { archiveNote, unarchiveNote } from "../../utils/network-data";
import { LocaleContext } from "../../context/LocaleContext";
import translations from "../../utils/translations";


function ArchiveButton({ noteId, onToggle, mode="archive" }) {
  const { locale } = useContext(LocaleContext);
  const t = translations[locale].archivedPage || translations.id;

  async function handleToggle() {
  if (mode === "unarchive") {
    await unarchiveNote(noteId);
  } else {
    await archiveNote(noteId);
  }

  if (onToggle) onToggle(noteId);
}


  const isUnarchive = mode === "unarchive";

  return (
    <button
      className={`action archive ${isUnarchive ? "unarchive" : ""}`}
      onClick={handleToggle}
      title={isUnarchive ? t.titleUnarchived : t.titleArchived}
    >
      <FaBoxArchive />
    </button>
  );
}


export default ArchiveButton;