import TopHeader from '@/components/layout/TopHeader';
import BottomNav from '@/components/layout/BottomNav';
import '@/styles/mockup.css';

export default function ProfileIndexPage() {
	return (
		<div className="min-h-screen">
			<TopHeader title="Profile" />

			<main className="p-4 container">
				<section className="profile-header">
					<div className="profile-top">
						<div className="profile-avatar">MG</div>
						<div>
							<div className="text-sm text-green-300 uppercase tracking-[0.18em]">QM</div>
							<h1 className="text-2xl font-semibold">Miguel G.</h1>
							<div className="small">DLSU · BadSoc</div>
						</div>
					</div>
					<div className="profile-meta">
						<div className="profile-metric">
							<span className="text-xl font-semibold">52</span>
							<span className="profile-label">Meets</span>
						</div>
						<div className="profile-metric">
							<span className="text-xl font-semibold">91%</span>
							<span className="profile-label">Attendance</span>
						</div>
						<div className="profile-metric">
							<span className="text-xl font-semibold">7:18</span>
							<span className="profile-label">Avg wait</span>
						</div>
						<div className="profile-metric">
							<span className="text-xl font-semibold">63%</span>
							<span className="profile-label">Win rate</span>
						</div>
					</div>
				</section>

				<section className="mb-4">
					<div className="flex items-center justify-between mb-3">
						<h2 className="text-lg font-semibold">Match Summary</h2>
						<button className="button-primary">Share My Stats Card</button>
					</div>
					<div className="grid grid-cols-2 gap-3">
						<div className="card small">Wins 17</div>
						<div className="card small">Losses 10</div>
						<div className="card small">Level B</div>
						<div className="card small">Streak W4</div>
					</div>
				</section>

				<section>
					<h2 className="text-lg font-semibold mb-3">Recent Activity</h2>
					<div className="space-y-3">
						<div className="card small">Played 4 games at Friday Competitive Queue</div>
						<div className="card small">Reached Level B</div>
						<div className="card small">Uploaded a share card</div>
					</div>
				</section>
			</main>

			<BottomNav />
		</div>
	);
}
