
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-zinc-800">
          <Sparkles className="w-10 h-10 text-yellow-400" />
        </div>
        
        <h1 className="text-4xl font-bold text-white tracking-tight">
          Hello World
        </h1>
        
        <p className="text-zinc-400 text-lg">
          欢迎使用基于 React + TypeScript + Vite 的现代 Web 应用模板
        </p>
        
        <Button className="gap-2 bg-zinc-100 text-zinc-950 hover:bg-zinc-200">
          <Sparkles className="w-4 h-4" />
          开始探索
        </Button>
      </div>
    </div>
  );
};

export default Home;
