import React from "react";

interface QueueRowProps {
  rank: number;
  initials: string;
  name: string;
  level: string;
  wait: string;
  games?: string;
  highlight?: boolean;
}

export default function QueueRow({ rank, initials, name, level, wait, games, highlight }: QueueRowProps) {
  return (
    <div className={`queue-row ${highlight ? 'bg-white/5' : ''}`}>
      <div className="row-rank">{rank}</div>
      <div className="row-avatar">{initials}</div>
      <div className="row-content">
        <span className="row-name">{name}</span>
        <span className="row-meta">Level {level} · {wait} wait{games ? ` · ${games} games` : ''}</span>
      </div>
      <div className="row-badge">{rank === 1 ? 'Next' : 'Waiting'}</div>
    </div>
  );
}
