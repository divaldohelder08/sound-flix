import { ChevronLeft,ChevronRight } from "lucide-react"
export default function Main (){
  return (
    <div className="flex-1 p-6 bg-gradient-to-b from-neutral-800 via-stone-900 to-neutral-900">
      <div className="flex gap-3">
        <div className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center">
          <ChevronLeft size={24} />
        </div>
        <div className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center">
          <ChevronRight size={24} />
        </div>
      </div>

      Main
    </div>
  );
}