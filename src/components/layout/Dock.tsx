import { motion } from "framer-motion"
import Button from "../ui/Button"

export default function Dock () {
    return (
        <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} className="w-[90%] h-20 p-4 fixed flex justify-between items-center bottom-5 left-[50%] right-[50%] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-primary/90 backdrop-blur-md z-40">
            <span>2 filmes selecionados</span>
            <Button>
                Abrir mesa
            </Button>
        </motion.div>
    )
}