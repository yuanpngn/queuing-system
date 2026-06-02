import React from "react";

export default function MeetCard() {
  return (
    <article className="bg-gradient-to-br from-[#0f2f18] to-[#071006] rounded-xl p-4 border border-green-800/40">
      <div className="flex items-start gap-3">
        <div className="avatar bg-green-600 text-white flex items-center justify-center rounded-md w-12 h-12">MG</div>
        <div className="flex-1">
          <div className="text-xs text-green-300">Today · 6:00 PM</div>
          <h4 className="font-semibold text-lg">Friday Competitive Queue</h4>
          <div className="text-sm text-white/60 mt-1">DLSU Sports Complex · Courts 1–4</div>
        </div>
        <div>
          <button className="bg-green-600 px-3 py-1 rounded-md">Join Queue</button>
        </div>
      </div>
    </article>
  );
}
