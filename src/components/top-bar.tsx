import { cn } from "@/lib/utils";
import { observer } from "mobx-react-lite";
import { Separator } from "@/components/ui";
import { ModeToggle } from "./mode-toggle";
import { Link } from "@tanstack/react-router";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface TopBarProps extends React.ComponentPropsWithRef<"header"> {}

export const TopBar = observer(({ className, ...rest }: TopBarProps) => {
  return (
    <header className={cn("w-full h-16", className)} {...rest}>
      <div
        className={cn(
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
          "border-b-grey-7"
        )}
      >
        <Separator orientation="vertical" className="mr-2 h-4" />
        <div className="flex justify-between w-full items-center">
          <div className="flex gap-2">
            <Link to="/" className="[&.active]:font-bold">
              Home
            </Link>{" "}
            <Link to="/about" className="[&.active]:font-bold">
              About
            </Link>
          </div>

          <ModeToggle />
        </div>
      </div>
    </header>
  );
});
