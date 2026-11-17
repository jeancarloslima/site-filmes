import * as DialogComponent from "@radix-ui/react-dialog";
import Dock from "./Dock";
import Button from "../ui/Button";
import { X } from "lucide-react";
import MoviePoster from "../ui/MoviePoster";

interface DialogProps {
  numberOfFilms: number;
}

export default function Dialog({ numberOfFilms }: DialogProps) {
  return (
    <DialogComponent.Root>
      <Dock />

      <DialogComponent.Portal>
        <DialogComponent.Overlay className="fixed inset-0 bg-background/80 backdrop-blur-sm z-60" />
        <DialogComponent.Content
          className={`grid gap-5 fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-5xl -translate-x-1/2 -translate-y-1/2 bg-surface rounded-md p-6 pt-13 focus:outline-none z-70 ${numberOfFilms === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}
        >
          <div className="flex flex-col gap-3 text-center">
            <MoviePoster />
            <h2 className="text-lg font-semibold">Exemplo de título</h2>
            <span>2026</span>

            <ul className="flex flex-col pt-3">
              <li className="p-3 bg-primary border border-border rounded-t-lg">
                Orçamento: 100.000.000
              </li>
              <li className="p-3 border border-border">
                Bilheteria: 212.000.000
              </li>
              <li className="p-3 border border-border">Nota: 7.7</li>
              <li className="p-3 border border-border rounded-b-lg">
                Duração: 113 min
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3 text-center">
            <MoviePoster />
            <h2 className="text-lg font-semibold">Exemplo de título</h2>
            <span>2026</span>

            <ul className="flex flex-col pt-3">
              <li className="p-3 bg-primary border border-border rounded-t-lg">
                Orçamento: 100.000.000
              </li>
              <li className="p-3 border border-border">
                Bilheteria: 212.000.000
              </li>
              <li className="p-3 border border-border">Nota: 7.7</li>
              <li className="p-3 border border-border rounded-b-lg">
                Duração: 113 min
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3 text-center">
            <MoviePoster />
            <h2 className="text-lg font-semibold">Exemplo de título</h2>
            <span>2026</span>

            <ul className="flex flex-col pt-3">
              <li className="p-3 bg-primary border border-border rounded-t-lg">
                Orçamento: 100.000.000
              </li>
              <li className="p-3 border border-border">
                Bilheteria: 212.000.000
              </li>
              <li className="p-3 border border-border">Nota: 7.7</li>
              <li className="p-3 border border-border rounded-b-lg">
                Duração: 113 min
              </li>
            </ul>
          </div>

          <DialogComponent.Close asChild>
            <Button
              variant="ghost"
              className="absolute right-2 top-2"
              aria-label="Close"
            >
              <X />
            </Button>
          </DialogComponent.Close>
        </DialogComponent.Content>
      </DialogComponent.Portal>
    </DialogComponent.Root>
  );
}
