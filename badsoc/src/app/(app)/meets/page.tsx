import TopHeader from '@/components/layout/TopHeader';
import BottomNav from '@/components/layout/BottomNav';
import MeetCard from '@/components/meet/MeetCard';
import '@/styles/mockup.css';

export default function MeetsPage() {
  return (
    <div className="min-h-screen">
      <TopHeader title="Meets" />

      <main className="p-4 container">
        <section className="hero mb-5">
          <h1>Meets</h1>
          <p>Browse upcoming sessions, manage your queue invitations, and keep the club schedule close.</p>
        </section>

        <div className="tab-nav mb-4">
          <button className="tab-btn active">Upcoming</button>
          <button className="tab-btn">My Meets</button>
          <button className="tab-btn">Past</button>
        </div>

        <div className="space-y-4">
          <MeetCard />
          <MeetCard />
          <MeetCard />
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
