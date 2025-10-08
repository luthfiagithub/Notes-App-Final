import React, { useContext } from "react";
import { deleteNote } from "../../utils/network-data";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { showModal } from "../ui/Modal";
import { LocaleContext } from "../../context/LocaleContext";
import translations from "../../utils/translations";


function DeleteButton({ noteId, onDelete }) {
  const navigate = useNavigate();
  const { locale } = useContext(LocaleContext);
  const t = translations[locale].deleteAlert || translations.id;

  async function handleDelete() {
    await showModal({
      type: "warning",
      title: t.title,
      text: t.message,
      showCancel: true,
      confirmText: t.confirmText,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      onConfirm: async () => {
        await deleteNote(noteId);
        await showModal({
          type: "success",
          title: t.titleSucces,
          text: t.textSuccess,
        });
        if (onDelete) onDelete(noteId);
        navigate("/");
      },
    });
  }

  return (
    <button className="action delete" onClick={handleDelete} title={t.label}>
      <FaTrash />
    </button>
  );
}

export default DeleteButton;