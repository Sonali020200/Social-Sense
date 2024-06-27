import Link from "next/link";

import { cn } from "@/lib/utils";

export function MainNav({ className, ...props }) {
  return (
    <nav
      className={cn(
        "flex items-center justify-center space-x-4 lg:space-x-6",
        className
      )}
      {...props}
    >
      <div className="w-8 h-8 rounded-full border-4 border-yellow-600"></div>
      <Link
        href="#"
        className="text-center py-2 px-2 bg-yellow-200 text-yellow-600 text-sm font-medium transition-colors hover:text-primary"
      >
        Home{" "}
      </Link>
      <Link
        href="#"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Dashboard
      </Link>
      <Link
        href="#"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Projects
      </Link>
      <Link
        href="#"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Tasks
      </Link>
      <Link
        href="#"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Reporting
      </Link>
      <Link
        href="#"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Users
      </Link>
    </nav>
  );
}
