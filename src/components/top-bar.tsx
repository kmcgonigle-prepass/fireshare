import { cn } from "@/lib/utils";
import { observer } from "mobx-react-lite";
import { Separator } from "@/components/ui";
import { ModeToggle } from "./mode-toggle";

const topNavStyle = [
  "sticky",
  "top-0",
  "z-10",
  "h-full",
  "w-full",
  "flex",
  "items-center",
  "gap-2",
  "px-4",
  "backdrop-blur-md",
  "border-b-1",
  "border-b-grey-7",
];

export const TopBar = observer(() => {
  return (
    <header className={cn("absolute w-full h-16")}>
      <div className={cn(topNavStyle)}>
        <Separator orientation="vertical" className="mr-2 h-4" />
        <ModeToggle />
      </div>
    </header>
  );
});
