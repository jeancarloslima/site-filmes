import { motion } from "framer-motion";

export default function MovieCard({ movieSelected }) {
  return (
    <motion.article
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className={`flex flex-col group bg-surface border rounded-lg overflow-hidden ${movieSelected ? 'border-primary' : 'border-border'}`}
    ></motion.article>
  );
}
