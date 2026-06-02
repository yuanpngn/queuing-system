import TopHeader from '@/components/layout/TopHeader';
import BottomNav from '@/components/layout/BottomNav';
import MeetCard from '@/components/meet/MeetCard';

export default function MockupPage() {
  return (
    <div className="min-h-screen bg-[#0a0f0a] text-white">
      <TopHeader title="BadSoc · DLSU" />
      <main className="p-4 max-w-md mx-auto">
        <div className="mb-4">
          <MeetCard />
        </div>
        <section className="mt-6">
          <h3 className="text-sm text-gray-300 mb-2">Activity</h3>
          <div className="space-y-3">
            <div className="bg-white/3 rounded-md p-3 text-xs">Miguel reached Level B</div>
            <div className="bg-white/3 rounded-md p-3 text-xs">Friday Queue is now Open</div>
            <div className="bg-white/3 rounded-md p-3 text-xs">Kyla shared a stat card</div>
          </div>
        </section>
      </main>
      <BottomNav />
    </div>
  );
}
