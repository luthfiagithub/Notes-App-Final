import React, { useState, useEffect, useContext } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getActiveNotes, deleteNote, archiveNote } from '../utils/network-data';
import NoteList from "../components/notes/NoteList";
import SearchBar from "../components/search/SearchBar";
import Loader from "../components/ui/Loader";
import { LocaleContext } from "../context/LocaleContext";
import translations from "../utils/translations";


function HomePage() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";
  const { locale } = useContext(LocaleContext);
  const t = translations[locale].homePage || translations.id;

  if (!t) {
    return <Loader message="Loading translations.."/> 
  }

  useEffect(() => {
    async function fetchNotes() {
      setLoading(true);
      const { error, data } = await getActiveNotes();
      if (!error) {
        setNotes(data);
      }
      setLoading(false);
    }
    fetchNotes();
  }, []);


  async function handleDelete(id) {
    setNotes((prev) => prev.filter((n) => n.id !== id));
  }

  async function handleToggleArchive(id) {
    await archiveNote(id);
    setNotes((prev) => prev.filter((n) => n.id !== id));
  }

  if (loading) {
    return <Loader />;
  }

  const filteredNotes = keyword
    ? notes.filter(note =>
      note.title.toLowerCase().includes(keyword.toLowerCase())
    )
    : notes;


  return (
    <>
      <div className="homepage-header">
        <h1>{t.title}</h1>
        <Link to="/notes/new" className="add-note-container">
          <div className="add-note-text">{t.addNote}</div>
          <div className="add-note-plus">
            <span>+</span>
          </div>
        </Link>
      </div>
      <SearchBar />
      <NoteList
        notes={filteredNotes}
        onDelete={handleDelete}
        onToggleArchive={handleToggleArchive}
        archiveMode="archive"
      />
    </>
  );
}

export default HomePage;