import * as DialogComponent from "@radix-ui/react-dialog";
import Dock from "./Dock";

export default function Dialog() {
    return (
        <DialogComponent.Root>
            <Dock />
            <DialogComponent.Portal>
                <DialogComponent.Overlay className="fixed inset-0 bg-background/80 backdrop-blur-sm" />
                <DialogComponent.Content>

                </DialogComponent.Content>
            </DialogComponent.Portal>
        </DialogComponent.Root>
    )
}