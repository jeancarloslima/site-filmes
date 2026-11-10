import { motion } from "framer-motion";

interface MiniCardProps {
    text: string;
}

export default function MiniCard({ text }: MiniCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      layout
      className="flex justify-between bg-surface border border-border rounded-md p-3"
    >
        <span>{text}</span>
        <button className="w-5 hover:cursor-pointer">X</button>
    </motion.div>
  );
}
