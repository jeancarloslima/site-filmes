import * as PopoverComponent from "@radix-ui/react-popover";
import Button from "./Button";

export default function Popover() {
  return (
    <PopoverComponent.Root>
      <PopoverComponent.Trigger asChild>
        <Button variant="primary" size="lg">
          Adicionar regra
        </Button>
      </PopoverComponent.Trigger>

      <PopoverComponent.Portal>
        <PopoverComponent.Content
          className="bg-surface border border-border p-4 rounded-md shadow-xl z-50 animate-content-show"
          sideOffset={8}
        >
          <div>
            <h3>Ano</h3>
          </div>
        </PopoverComponent.Content>
      </PopoverComponent.Portal>
    </PopoverComponent.Root>
  );
}
