import { ClapperboardIcon } from "lucide-react";

interface MoviePosterProps {
    size?: "sm" | "lg";
}

export default function MoviePoster({ size = "sm" } : MoviePosterProps) {
    const sizes = {
        sm: "p-4 rounded-xl bg-surface",
        lg: "w-full aspect-[2.3/3] bg-background rounded-t-xl"
    }

    return (
        <div className={`flex items-center justify-center relative border border-border ${sizes[size]}`}>
            {/* <img src="" alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" /> */}
            <ClapperboardIcon />
        </div>
    )
}