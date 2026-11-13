import * as DialogComponent from "@radix-ui/react-dialog";
import Dock from "./Dock";
import Button from "../ui/Button";
import { X } from "lucide-react";
import MoviePoster from "../ui/MoviePoster";

export default function Dialog() {
  return (
    <DialogComponent.Root>
      <Dock />

      <DialogComponent.Portal>
        <DialogComponent.Overlay className="fixed inset-0 bg-background/80 backdrop-blur-sm z-60" />
        <DialogComponent.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-5xl -translate-x-1/2 -translate-y-1/2 bg-surface rounded-md bg-gray1 p-6 focus:outline-none z-70">
            <MoviePoster />

          <DialogComponent.Close asChild>
            <Button
              variant="ghost"
              className="absolute right-2.5 top-2.5"
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
