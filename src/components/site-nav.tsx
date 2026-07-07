import { Bot, ArrowRight } from "lucide-react";

export function SiteNav() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-[#E5D9C0] bg-[#FDFAF4]/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-md bg-[#B8922A] flex items-center justify-center">
            <Bot className="w-4 h-4 text-[#FAF5EB]" />
          </div>
          <span className="font-medium text-[#2A1F0E] tracking-tight">SAP Finance Agents</span>
        </a>
        <a
          href="/#kontakt"
          className="hidden sm:flex items-center gap-2 bg-[#B8922A] hover:bg-[#9E7B22] text-[#FAF5EB] text-sm font-medium px-4 py-2 rounded-lg transition-colors"
        >
          Gespräch vereinbaren <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </nav>
  );
}
