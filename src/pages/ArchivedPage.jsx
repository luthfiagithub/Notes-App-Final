import React, { useState, useEffect, useContext } from "react";
import { deleteNote, unarchiveNote, getArchivedNotes, } from "../utils/network-data";
import { useSearchParams } from "react-router-dom";
import NoteList from "../components/notes/NoteList";
import BackButton from "../components/buttons/BackButton";
import EmptyState from "../components/ui/EmptyState";
import SearchBar from "../components/search/SearchBar";
import Loader from "../components/ui/Loader";
import translations from "../utils/translations";
import { LocaleContext } from "../context/LocaleContext";

function ArchivedPage() {
  const [notes, setNotes] = useState([]);
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const keyword = searchParams.get("keyword") || "";
  const { locale } = useContext(LocaleContext);
  const t = translations[locale].archivedPage || translations.id


  useEffect(() => {
    async function fetchArchived() {
      const { data } = await getArchivedNotes();
      const archived = data;

      const filtered = keyword
        ? archived.filter(note =>
          note.title.toLowerCase().includes(keyword.toLowerCase())
        )
        : archived;

      setNotes(filtered);
      setLoading(false);

    }

    fetchArchived();
  }, [keyword]);


  async function handleDelete(id) {
    setNotes(prev => prev.filter(n => n.id !== id));
  }

  async function handleUnarchieve(id) {
    await unarchiveNote(id);
    setNotes(prev => prev.filter(n => n.id !== id));
  }

  if (loading) {
    setTimeout(() => setLoading(false), 400);
    return <Loader />;

  }

  return (
    <>
      <div className="page-header">
        <BackButton />
        <h1>{t.title}</h1>
      </div>
      <SearchBar />
      {notes.length === 0 ? (
        <EmptyState message={t.messageEmptyState} />
      ) : (
        <NoteList
          notes={notes}
          onDelete={handleDelete}
          onToggleArchive={handleUnarchieve}
          archiveLabel="Batal Arsip"
          archiveMode="unarchive"
        />
      )}
    </>
  );
}

export default ArchivedPage;

