import TopHeader from '@/components/layout/TopHeader';
import BottomNav from '@/components/layout/BottomNav';
import CourtCard from '@/components/queue/CourtCard';
import QueueRow from '@/components/queue/QueueRow';
import '@/styles/mockup.css';

export default function QueuePage() {
  return (
    <div className="min-h-screen">
      <TopHeader title="Live Queue" />

      <main className="p-4 container">
        <section className="hero mb-5">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div>
              <h1>Friday Queue</h1>
              <p className="small">Live · 12 players · 4 courts active</p>
            </div>
            <button className="button-primary">Join Queue</button>
          </div>
          <div className="court-grid">
            <CourtCard number={1} status="Playing" teams="JR · MG vs KC · PD" score="9–7" timer="14:22" />
            <CourtCard number={2} status="Playing" teams="AL · BM vs RT · NL" score="12–10" timer="7:55" />
            <CourtCard number={3} status="Finishing" teams="SP · GD vs VR · CM" score="20–19" timer="20:01" />
            <CourtCard number={4} status="Playing" teams="LT · HA vs EV · DR" score="4–3" timer="4:30" />
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Queue</h2>
            <span className="badge badge-dlsu">Next players</span>
          </div>
          <div className="queue-list">
            <QueueRow rank={1} initials="JD" name="Juan D." level="B" wait="11:20" games="4" highlight />
            <QueueRow rank={2} initials="AV" name="Ana V." level="B" wait="9:05" games="4" />
            <QueueRow rank={3} initials="RM" name="Rico M." level="A" wait="6:40" games="6" />
            <QueueRow rank={4} initials="SL" name="Sofia L." level="C" wait="4:15" games="2" />
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
