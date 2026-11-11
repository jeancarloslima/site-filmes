import { motion } from "framer-motion";
import { ClapperboardIcon } from "lucide-react";
import DropdownMenu from "../ui/DropdownMenu";

export default function Header() {
  return (
    <header className="h-20 p-4 sticky top-0 bg-surface border-b-2 border-b-border z-50">
      <div className="flex items-center justify-between mx-auto w-full max-w-250">
        <motion.span whileHover={{ scale: 1.05 }} className="flex gap-1.5">
          <ClapperboardIcon />
          <h1 className="font-bold text-xl text-foreground tracking-wide">
            Cinemetrics
          </h1>
        </motion.span>

        <DropdownMenu />
      </div>
    </header>
  );
}
