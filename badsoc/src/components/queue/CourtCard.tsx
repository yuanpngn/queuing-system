import React from "react";

interface CourtCardProps {
  number: number;
  status: "Playing" | "Finishing";
  teams: string;
  score: string;
  timer: string;
}

export default function CourtCard({ number, status, teams, score, timer }: CourtCardProps) {
  return (
    <div className="court-card">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h3>Court {number}</h3>
          <div className="small">{teams}</div>
        </div>
        <span className={`court-status ${status === 'Finishing' ? 'finishing' : 'playing'}`}>
          {status}
        </span>
      </div>
      <div className="mt-4 flex items-end justify-between gap-3">
        <div>
          <div className="text-white/80 text-xs">Score</div>
          <div className="text-lg font-semibold">{score}</div>
        </div>
        <div className="text-right">
          <div className="text-white/80 text-xs">Time</div>
          <div className="text-sm text-white">{timer}</div>
        </div>
      </div>
    </div>
  );
}
