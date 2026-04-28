import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black py-12 text-zinc-400">
      <div className="mx-auto max-w-5xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-sm font-semibold text-white">Muslich.</p>
          <p className="text-sm mt-1">Pendidik Vokasi & Software Developer.</p>
        </div>
        
        <div className="flex items-center gap-6 text-sm">
          <Link href="https://github.com/muslich" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            GitHub
          </Link>
          <Link href="https://linkedin.com/in/muslich" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            LinkedIn
          </Link>
        </div>

        <div className="text-sm text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} Muslich. All rights reserved.</p>
          <p className="mt-1">E-Portfolio UTS PPL Terbimbing.</p>
        </div>
      </div>
    </footer>
  );
}
