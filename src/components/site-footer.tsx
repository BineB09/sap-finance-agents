import { Bot } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#E5D9C0] py-8 px-6 bg-[#F5EFE0]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-[#B8922A] flex items-center justify-center">
            <Bot className="w-3 h-3 text-[#FAF5EB]" />
          </div>
          <span className="text-sm text-[#9A7D5A]">SAP Finance Agents</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <a href="/impressum" className="text-[#9A7D5A] text-sm hover:text-[#B8922A] transition-colors">
            Impressum
          </a>
          <a href="/datenschutz" className="text-[#9A7D5A] text-sm hover:text-[#B8922A] transition-colors">
            Datenschutz
          </a>
          <p className="text-[#9A7D5A] text-sm">
            © {new Date().getFullYear()} – Konzept &amp; Exploration
          </p>
        </div>
      </div>
    </footer>
  );
}
