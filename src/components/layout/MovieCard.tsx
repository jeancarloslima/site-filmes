import { motion } from "framer-motion";
import MoviePoster from "../ui/MoviePoster";
import Button from "../ui/Button";
import { StarIcon } from "lucide-react";

interface MovieCardProps {
  movieSelected: boolean;
}

export default function MovieCard({ movieSelected }: MovieCardProps) {
  return (
    <motion.article
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className={`flex flex-col w-full max-w-75 group bg-surface border rounded-lg overflow-hidden ${movieSelected ? "border-primary" : "border-border"}`}
    >
      <MoviePoster size="lg" />

      <div className="flex flex-col flex-1 gap-3 p-4">
        <h2 className="text-lg font-semibold text-foreground truncate">Título do Filme</h2>
        <span className="flex items-center justify-between text-sm text-muted">
            <span>2026</span>
            <span className="flex items-center gap-1">
                <StarIcon fill="#FFDE21" size={16} />
                4.3
            </span>
        </span>
      </div>

      <Button className="w-full mt-auto rounded-none" variant={movieSelected ? "primary" : "secondary"}>
        {movieSelected ? "Selecionado" : "Comparar"}
      </Button>
    </motion.article>
  );
}
