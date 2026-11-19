import { ClapperboardIcon } from "lucide-react";

interface MoviePosterProps {
    size?: "sm" | "lg";
}

export default function MoviePoster({ size = "sm" } : MoviePosterProps) {
    const sizes = {
        sm: "p-4",
        lg: "w-full aspect-[2/3]"
    }

    return (
        <div className={`flex items-center justify-center bg-background relative border border-border rounded-xl ${sizes[size]}`}>
            {/* <img src="" alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" /> */}
            <ClapperboardIcon />
        </div>
    )
}