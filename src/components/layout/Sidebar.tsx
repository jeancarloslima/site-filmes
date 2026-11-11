import { Search } from "lucide-react";
import Popover from "../ui/Popover";
import { AnimatePresence } from "framer-motion";
import MiniCard from "../ui/MiniCard";
import Button from "../ui/Button";

export default function Sidebar() {
    return (
        <aside className="min-h-200 w-full max-w-90 flex flex-col mx-auto md:mx-0 gap-4 p-6 relative rounded-xl border border-border bg-surface">
            <h2 className="flex items-center justify-center gap-4 text-muted text-xl"><Search/> Construtor de Queries</h2>
            
            <Popover />

            <div className="flex flex-col gap-3">
                <AnimatePresence>
                    <MiniCard key="filtro-acao" text="Gênero: Ação" />
                </AnimatePresence>
            </div>

            <div className="flex justify-center mt-auto pt-2 border-t-2 border-border">
                <Button variant="ghost">
                    Limpar Filtros
                </Button>
            </div>
        </aside>
    )
}