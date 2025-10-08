import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getNote, deleteNote, archiveNote, unarchiveNote } from "../utils/network-data";
import { showFormattedDate } from "../utils";
import DeleteButton from "../components/buttons/DeleteButton";
import BackButton from "../components/buttons/BackButton";
import ArchiveButton from "../components/buttons/ArchiveButton";
import Loader from "../components/ui/Loader";


function DetailPage() {
  const { id } = useParams();
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchNote() {
      setLoading(true);
      const { error, data } = await getNote(id);
      if (!error) setNote(data);
      setLoading(false);

    }
    fetchNote();
  }, [id]);

  async function handleToggleArchive() {
    if (note.archived) {
      await unarchiveNote(note.id);
    } else {
      await archiveNote(note.id);
    }
    navigate("/");
  }

  async function handleDelete() {
    navigate("/");
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="detail-page">
      <div className="page-header">
        <BackButton />
        <h2 className="detail-page__title">{note.title}</h2>
      </div>
      <p className="detail-page__createdAt">
        {showFormattedDate(note.createdAt)}
      </p>
      <p className="detail-page__body">{note.body}</p>

      <div className="detail-page__action">
        <ArchiveButton
          noteId={note.id}
          mode={note.archived ? "unarchive" : "archive"}
          onToggle={handleToggleArchive}
        />
        <DeleteButton noteId={note.id} onDelete={handleDelete} />
      </div>
    </section>
  );
}


export default DetailPage;