import { useContext } from "react";
import Swal from "sweetalert2";


export const showModal = async ({

  type = "info",
  title = "",
  text = "",
  confirmText = "OK",
  cancelText = "Batal",
  showCancel = false,
  confirmColor,
  cancelColor,
  onConfirm,
}) => {
  const icons = {
    success: "success",
    error: "error",
    warning: "warning",
    info: "info",
    question: "question",
  };

  const result = await Swal.fire({
    title,
    text,
    icon: icons[type] || "info",
    showCancelButton: showCancel,
    confirmButtonText: confirmText,
    cancelButtonText: cancelText,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    background: "var(--background)",
    color: "var(--on-background)",
    reverseButtons: true,
    allowOutsideClick: false,
  });

  if (result.isConfirmed && typeof onConfirm === "function") {
    onConfirm();
  }

  return result;
};
