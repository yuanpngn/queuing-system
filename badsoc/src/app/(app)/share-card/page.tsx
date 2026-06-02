import TopHeader from '@/components/layout/TopHeader';
import BottomNav from '@/components/layout/BottomNav';
import '@/styles/mockup.css';

export default function ShareCardPage() {
	return (
		<div className="min-h-screen">
			<TopHeader title="Share Card" />

			<main className="p-4 container share-builder">
				<section className="share-preview">
					<div className="text-sm text-green-200 uppercase tracking-[0.2em] mb-3">BadSoc</div>
					<h2>Miguel G.</h2>
					<p className="small mb-4">Level B · QM</p>
					<div className="grid grid-cols-2 gap-3">
						<div className="card small">63% Win Rate</div>
						<div className="card small">27 Matches</div>
						<div className="card small">17 Wins</div>
						<div className="card small">W4 Streak</div>
					</div>
				</section>

				<section>
					<div className="flex items-center justify-between mb-3">
						<h2 className="text-lg font-semibold">Theme</h2>
						<span className="small">Choose a style</span>
					</div>
					<div className="share-theme">
						<div className="theme-chip active" style={{ background: '#1B6B35' }} />
						<div className="theme-chip" style={{ background: '#0F172A' }} />
						<div className="theme-chip" style={{ background: '#111827' }} />
						<div className="theme-chip" style={{ background: '#4B5563' }} />
					</div>
				</section>

				<section>
					<h2 className="text-lg font-semibold mb-3">Export</h2>
					<div className="share-actions">
						<button className="button-primary">Save PNG</button>
						<button className="button-primary">Stories</button>
						<button className="button-primary">Messenger</button>
					</div>
				</section>
			</main>

			<BottomNav />
		</div>
	);
}
