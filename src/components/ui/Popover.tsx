import * as PopoverComponent from "@radix-ui/react-popover";
import Button from "./Button";

export default function Popover() {
    return (
        <PopoverComponent.Root>
            <PopoverComponent.Trigger asChild>
                <Button>
                    Adicionar regra
                </Button>
            </PopoverComponent.Trigger>

            <PopoverComponent.Content>
                <div>
                    <h3>Ano</h3>
                </div>
            </PopoverComponent.Content>
        </PopoverComponent.Root>
    )
}