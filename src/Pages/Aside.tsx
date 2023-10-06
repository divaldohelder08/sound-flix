import { Separator } from "@/components/ui/separator";
import { Heart, Home, Library, ListMusic, Plus, Podcast, Search } from "lucide-react";
export default function Aside() {
  return (
    <div className="w-64 bg-background p-6">
      <nav className="space-y-8">
        <header className="space-y-5">
          <a className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
            <Home />
            Home
          </a>
          <a className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
            <Search />
            Pesquisar
          </a>
          <a className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
            <Library />
            Libraria
          </a>
        </header>
        <footer className="space-y-5">
          <div className="flex items-center gap-3 text-sm font-bold text-white">
            <div className="h-7 w-7 rounded-sm items-center flex justify-center bg-white">
              {" "}
              <Plus size={20} className="text-zinc-800" />
            </div>
            Criar Playlist
          </div>
          <div className="flex items-center gap-3 text-sm font-bold text-white">
            <div className="h-7 w-7 rounded-sm items-center flex justify-center bg-gradient-to-br from-violet-700 via-indigo-600 to-green-200">
              {" "}
              <Heart size={16.5} />
            </div>
            Sons curtidos
          </div>
          <div className="flex items-center gap-3 text-sm font-bold text-white">
            <div className="h-7 w-7 rounded-sm items-center flex justify-center bg-emerald-900">
              {" "}
              <Podcast size={16.5} className="text-green-600" />
            </div>
            Seus Episódios
          </div>
        </footer>
      </nav>
      <Separator orientation="horizontal" className=" my-6" />
      <nav className="flex flex-col gap-3">
        <a className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100">
          <ListMusic size={18} />
          Plutônio
        </a>
        <a className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100">
          <ListMusic size={18} />
          Plutônio 3
        </a>  <a className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100"><ListMusic size={18} />Plutônio</a>
        <a className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100"><ListMusic size={18} />Plutônio 1 </a>
        <a className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100"><ListMusic size={18} />Plutônio 2</a>
        <a className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100"><ListMusic size={18} />Plutônio 3</a>
      
      </nav>
    </div>
  );
}
