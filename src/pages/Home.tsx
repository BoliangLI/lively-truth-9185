
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10">
          <Sparkles className="w-10 h-10 text-primary" />
        </div>
        
        <h1 className="text-4xl font-bold text-foreground tracking-tight">
          Hello World
        </h1>
        
        <p className="text-muted-foreground text-lg">
          欢迎使用基于 React + TypeScript + Vite 的现代 Web 应用模板
        </p>
        
        <Button className="gap-2">
          <Sparkles className="w-4 h-4" />
          开始探索
        </Button>
      </div>
    </div>
  );
};

export default Home;
