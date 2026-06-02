import TopHeader from '@/components/layout/TopHeader';
import BottomNav from '@/components/layout/BottomNav';
import MeetCard from '@/components/meet/MeetCard';
import '@/styles/mockup.css';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <TopHeader title="BadSoc · DLSU" />

      <main className="p-4 container">
        <section className="hero mb-5">
          <h1>Club Home</h1>
          <p>Live badminton queue updates, meet activity, and club social momentum.</p>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-num">4</div>
              <div className="stat-label">Courts live</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">12</div>
              <div className="stat-label">In queue</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">Open</div>
              <div className="stat-label">Queue status</div>
            </div>
          </div>
        </section>

        <section className="mb-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold">Featured Meet</h2>
            <span className="badge badge-dlsu">Level B</span>
          </div>
          <MeetCard />
        </section>

        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold">Activity</h2>
            <span className="badge badge-dlsu">Live</span>
          </div>
          <div className="space-y-3">
            <div className="card small">Miguel reached Level B</div>
            <div className="card small">Friday Queue is now Open</div>
            <div className="card small">Kyla shared a stat card</div>
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
