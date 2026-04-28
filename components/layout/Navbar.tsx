export function Navbar() {
  return (
    <nav
      className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <span className="text-sm font-semibold tracking-tight">
          {/* Logo / Brand — to be built */}
        </span>
        <div className="flex items-center gap-6">
          {/* Nav links — to be built */}
        </div>
      </div>
    </nav>
  );
}
