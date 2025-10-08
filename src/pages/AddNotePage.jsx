import React, { useContext, useState } from "react";
import NoteForm from "../components/notes/NoteForm";
import { addNote } from "../utils/network-data";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/buttons/BackButton";
import Loader from "../components/ui/Loader";
import { LocaleContext } from "../context/LocaleContext";
import translations from "../utils/translations";
import { showModal } from "../components/ui/Modal";


function AddNotePage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { locale } = useContext(LocaleContext);
  const t = translations[locale].addNotePage || translations.id;

  async function handleAddNote(noteData) {
    setLoading(true);
    try {
      await addNote(noteData);
      navigate("/");
    } catch (error) {
      console.error("Gagal menambahkan catatan:", error);
      await showModal({
        type: "error",
        title: t.titleErrorAlert,
        text: error.message,
        confirmText: t.confirmText,
      });
    } finally {
      setLoading(false);
      await showModal({
        type: "success",
        title: t.titleSuccessAlert,
        text: t.textSuccessAlert,
    });
    }
  }
  
  if (loading) {
    return <Loader />;
  }

  return (
    <main>
      <div className="page-header">
        <BackButton />
        <h1>{t.title}</h1>
      </div>
      <NoteForm onSubmit={handleAddNote} />
    </main>
  );
}

export default AddNotePage;