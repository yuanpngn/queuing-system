import React from "react";

export default function QueuePage() {
  return (
    <div className="p-4 text-white">
      <h2 className="text-lg font-semibold">Live Queue</h2>
      <p className="text-sm text-white/60">Live queue mockup placeholder.</p>
      <div className="mt-4 space-y-2">
        <div className="card small">1. Juan D. — 11:20 wait</div>
        <div className="card small">2. Ana V. — 9:05 wait</div>
        <div className="card small">3. Rico M. — 6:40 wait</div>
      </div>
    </div>
  );
}
