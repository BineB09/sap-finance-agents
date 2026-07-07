"use client";

export function CookieReset() {
  return (
    <button
      onClick={() => {
        localStorage.removeItem("cookie-consent");
        window.location.reload();
      }}
      className="text-[#B8922A] hover:underline text-sm"
    >
      Cookie-Einstellungen jetzt ändern
    </button>
  );
}
