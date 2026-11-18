import { motion } from "framer-motion";
import MoviePoster from "../ui/MoviePoster";

export default function MovieCard({ movieSelected }) {
  return (
    <motion.article
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className={`flex flex-col w-full max-w-90 group bg-surface border rounded-lg overflow-hidden ${movieSelected ? 'border-primary' : 'border-border'}`}
    >
        <MoviePoster />

    </motion.article>
  );
}
