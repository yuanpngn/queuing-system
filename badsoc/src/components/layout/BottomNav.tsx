import React from "react";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#0a0f0a] border-t border-white/5 p-2">
      <div className="max-w-md mx-auto flex justify-between">
        {['Home','Meets','Queue','Profile','Share'].map((label)=> (
          <div key={label} className={`flex-1 text-center py-2 text-xs text-white/60`}>{label}</div>
        ))}
      </div>
    </nav>
  );
}
