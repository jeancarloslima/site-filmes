import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Button from "./Button";
import { User } from "lucide-react";

export default function DropdownMenuComponent() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button>
          <User size={18} />
          Perfil
        </Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={5}
          className="bg-surface border border-border z-100"
        >
          <DropdownMenu.Arrow height={10} width={15} className="fill-border" />

          <DropdownMenu.Item className="p-2 outline-none data-highlighted:bg-border focus-visible:ring-2 focus-visible:ring-primary cursor-pointer">
            Configurações da Conta
          </DropdownMenu.Item>
          <DropdownMenu.Item className="p-2 outline-none data-highlighted:bg-border focus-visible:ring-2 focus-visible:ring-primary cursor-pointer">
            Sair
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
