import { motion } from "framer-motion";
import MoviePoster from "../ui/MoviePoster";
import Button from "../ui/Button";

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
      <MoviePoster />

      <div className="flex flex-col flex-1 gap-3 p-4"></div>

      <Button className="w-full mt-auto">
        {movieSelected ? "Selecionado" : "Comparar"}
      </Button>
    </motion.article>
  );
}
