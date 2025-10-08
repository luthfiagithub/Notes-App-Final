import React, { useContext } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { showModal } from "../ui/Modal";
import { LocaleContext } from "../../context/LocaleContext";
import translations from "../../utils/translations";


function LogoutButton({ logout, authedUser }) {
  const { locale } = useContext(LocaleContext);
  const t = translations[locale].logout || translations.id;

  async function handleLogout() {
    await showModal({
      locale,
      type: "question",
      title: t.title,
      text: t.text,
      showCancel: true,
      confirmText: t.confirmText,
      cancelText: t.cancelText,
      onConfirm: () => {
        if (logout) logout();
      },
    });
  }

  return (
    <button className="button-logout" onClick={handleLogout} title={t.label}>
      <FaSignOutAlt />
      <span>{authedUser?.name || "User"}</span>
    </button>
  );
}

export default LogoutButton;
