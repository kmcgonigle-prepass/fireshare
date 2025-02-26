import { TopBar } from "@/components";
import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { cn } from "./lib/utils";

function App() {
  return (
    <>
      <TopBar className="fixed z-10" />
      <main
        className={cn(
          "w-full",
          "relative flex min-h-svh flex-1 flex-col mt-16"
        )}
      >
        <Outlet />
        <TanStackRouterDevtools />
      </main>
    </>
  );
}

export default App;
