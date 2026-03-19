
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Clock } from "lucide-react";
import { format } from "date-fns";
import { zhCN } from "date-fns/locale";

const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="text-center space-y-8 max-w-md relative z-10">
        {/* 图标 */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-zinc-800/80 backdrop-blur-sm border border-zinc-700 shadow-lg shadow-yellow-500/10">
          <Sparkles className="w-10 h-10 text-yellow-400" />
        </div>
        
        {/* 标题 */}
        <div className="space-y-2">
          <h1 className="text-5xl font-bold text-white tracking-tight">
            Hello World
          </h1>
          <p className="text-zinc-400 text-lg">
            欢迎使用基于 React + TypeScript + Vite 的现代 Web 应用模板
          </p>
        </div>
        
        {/* 时间展示 */}
        <div className="flex items-center justify-center gap-2 py-4">
          <Clock className="w-5 h-5 text-yellow-400" />
          <div className="text-left">
            <div className="text-2xl font-mono font-semibold text-white">
              {format(currentTime, "HH:mm:ss")}
            </div>
            <div className="text-sm text-zinc-500">
              {format(currentTime, "yyyy 年 MM 月 dd 日 EEEE", { locale: zhCN })}
            </div>
          </div>
        </div>
        
        {/* 按钮 */}
        <Button className="gap-2 bg-zinc-100 text-zinc-950 hover:bg-zinc-200 transition-all duration-300 hover:scale-105 shadow-lg shadow-zinc-500/20">
          <Sparkles className="w-4 h-4" />
          开始探索
        </Button>
      </div>
    </div>
  );
};

export default Home;
