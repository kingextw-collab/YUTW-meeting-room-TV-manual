
import React, { useState, useCallback, useMemo } from 'react';
import { DECISION_TREE } from './constants';
import { DecisionNode } from './types';
import { ChevronLeft, Home, BookOpen, Monitor, Laptop, Video, Info } from 'lucide-react';

const App: React.FC = () => {
  const [currentNodeId, setCurrentNodeId] = useState<string>("1");
  const [history, setHistory] = useState<string[]>([]);

  const currentNode = useMemo(() => DECISION_TREE[currentNodeId], [currentNodeId]);

  const handleSelect = useCallback((nextId: string) => {
    setHistory(prev => [...prev, currentNodeId]);
    setCurrentNodeId(nextId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentNodeId]);

  const handleBack = useCallback(() => {
    if (history.length > 0) {
      const prevId = history[history.length - 1];
      setHistory(prev => prev.slice(0, -1));
      setCurrentNodeId(prevId);
    }
  }, [history]);

  const handleHome = useCallback(() => {
    setHistory([]);
    setCurrentNodeId("1");
  }, []);

  // Helper to render content with highlights and images
  const renderStepContent = (text: string) => {
    // 1. Highlight terms in [brackets]
    // 2. Detect (對應照片 XXX.jpg) and turn into image placeholders
    
    const parts = text.split(/(\[.*?\]|\(對應照片\s.*?\.\w+\))/g);

    return parts.map((part, index) => {
      if (part.startsWith('[') && part.endsWith(']')) {
        return (
          <span key={index} className="px-1.5 py-0.5 rounded bg-blue-100 text-blue-700 font-bold border border-blue-200">
            {part.slice(1, -1)}
          </span>
        );
      } else if (part.startsWith('(對應照片') && part.endsWith(')')) {
        const fileName = part.match(/\s(.*?)\)$/)?.[1] || "圖片";
        return (
          <div key={index} className="my-4 p-4 border-2 border-dashed border-slate-300 rounded-xl bg-slate-100 flex flex-col items-center justify-center space-y-2 group transition-all hover:border-blue-400 hover:bg-blue-50">
            <Monitor className="w-8 h-8 text-slate-400 group-hover:text-blue-500" />
            <span className="text-sm font-medium text-slate-500 group-hover:text-blue-600">
              [示意圖位：{fileName}]
            </span>
            <img 
              src={`https://picsum.photos/seed/${fileName}/800/450`} 
              alt={fileName} 
              className="mt-2 rounded-lg shadow-sm border border-slate-200 max-w-full h-auto"
            />
          </div>
        );
      } else if (part.startsWith('「') && part.endsWith('」')) {
         return <span key={index} className="text-orange-600 font-bold underline decoration-orange-300 underline-offset-4">{part}</span>;
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="min-h-screen flex flex-col max-w-2xl mx-auto shadow-2xl bg-white border-x border-slate-200">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-blue-600 text-white px-6 py-4 flex items-center justify-between shadow-md">
        <div className="flex items-center space-x-3">
          <BookOpen className="w-6 h-6" />
          <h1 className="text-lg font-bold tracking-tight">設備操作指南</h1>
        </div>
        {history.length > 0 && (
          <button 
            onClick={handleHome}
            className="p-2 hover:bg-blue-700 rounded-full transition-colors"
            title="回首頁"
          >
            <Home className="w-5 h-5" />
          </button>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        {/* Progress bar / Breadcrumbs */}
        <div className="mb-8 flex items-center text-xs font-medium text-slate-400 uppercase tracking-widest">
            <span>第 {history.length + 1} 步</span>
            <div className="flex-1 h-px bg-slate-100 mx-4"></div>
            <span>{currentNode.title}</span>
        </div>

        {/* Transitioning Card */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h2 className="text-2xl font-extrabold text-slate-800 mb-6 flex items-center gap-2">
            {currentNode.isFinal ? <Info className="text-blue-500" /> : <Monitor className="text-blue-500" />}
            {currentNode.title}
          </h2>

          {currentNode.question && (
            <p className="text-lg text-slate-600 mb-8 font-medium border-l-4 border-blue-500 pl-4 py-1">
              {currentNode.question}
            </p>
          )}

          {currentNode.options && (
            <div className="grid grid-cols-1 gap-4">
              {currentNode.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(option.nextId)}
                  className="group relative flex items-center justify-between p-5 bg-white border-2 border-slate-200 rounded-2xl text-left hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 shadow-sm active:scale-95"
                >
                  <span className="text-lg font-bold text-slate-700 group-hover:text-blue-700">{option.label}</span>
                  <div className="bg-slate-100 p-2 rounded-xl group-hover:bg-blue-100 transition-colors">
                    {option.label.includes("筆電") || option.label.includes("自帶") ? <Laptop className="w-5 h-5 text-slate-400 group-hover:text-blue-600" /> : 
                     option.label.includes("視訊") ? <Video className="w-5 h-5 text-slate-400 group-hover:text-blue-600" /> :
                     <Monitor className="w-5 h-5 text-slate-400 group-hover:text-blue-600" />}
                  </div>
                </button>
              ))}
            </div>
          )}

          {currentNode.isFinal && currentNode.content && (
            <div className="prose prose-slate max-w-none">
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-3xl leading-relaxed text-slate-700 space-y-4 shadow-inner">
                {renderStepContent(currentNode.content)}
              </div>
              <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-xl flex items-start space-x-3">
                <Info className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-yellow-700 leading-normal">
                  完成以上步驟後即可開始您的會議。若仍有問題，請聯絡 IT 部門支援。
                </p>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer / Navigation */}
      <footer className="p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-4">
        {history.length > 0 ? (
          <button
            onClick={handleBack}
            className="flex-1 flex items-center justify-center space-x-2 py-3 px-4 bg-white border border-slate-300 rounded-xl text-slate-600 font-bold hover:bg-slate-50 transition-colors shadow-sm active:bg-slate-100"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>回上一步</span>
          </button>
        ) : (
          <div className="flex-1 text-xs text-slate-400 text-center font-medium">
            開始引導流程，請選擇您的所在地
          </div>
        )}
        
        {currentNode.isFinal && (
          <button
            onClick={handleHome}
            className="flex-1 flex items-center justify-center space-x-2 py-3 px-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg active:scale-95"
          >
            <Home className="w-5 h-5" />
            <span>回到首頁</span>
          </button>
        )}
      </footer>
    </div>
  );
};

export default App;
