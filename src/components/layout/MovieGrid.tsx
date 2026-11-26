import { AnimatePresence, motion } from "framer-motion";
import MovieCard from "./MovieCard";

export default function MovieGrid() {
  return (
    <motion.div className="flex flex-1 justify-center md:justify-start flex-wrap gap-6">
      <AnimatePresence mode="popLayout">
        <MovieCard movieSelected={true} />
        <MovieCard movieSelected={false} />
        <MovieCard movieSelected={false} />
        <MovieCard movieSelected={false} />
        <MovieCard movieSelected={false} />
        <MovieCard movieSelected={true} />
        <MovieCard movieSelected={false} />
        <MovieCard movieSelected={true} />
      </AnimatePresence>
    </motion.div>
  );
}
