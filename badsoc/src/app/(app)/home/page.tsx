import TopHeader from '@/components/layout/TopHeader';
import BottomNav from '@/components/layout/BottomNav';
import MeetCard from '@/components/meet/MeetCard';
import '@/styles/mockup.css';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <TopHeader title="BadSoc · DLSU" />

      <main className="p-4 container">
        <section className="mb-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold">Club Home</h1>
              <div className="small">De La Salle University · Taft</div>
            </div>
            <div className="badge badge-dlsu">Level B</div>
          </div>
        </section>

        <section className="mb-4">
          <MeetCard />
        </section>

        <section>
          <h3 className="small mb-2">Activity</h3>
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