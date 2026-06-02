import TopHeader from '@/components/layout/TopHeader';
import BottomNav from '@/components/layout/BottomNav';
import MeetCard from '@/components/meet/MeetCard';
import '@/styles/mockup.css';

export default function MockupPage() {
  return (
    <div className="min-h-screen">
      <TopHeader title="BadSoc · DLSU" />
      <main className="p-4 container">
        <div className="mb-4 card">
          <MeetCard />
        </div>
        <section className="mt-6">
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
