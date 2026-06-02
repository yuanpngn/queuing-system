import React from "react";

export default function MeetPage({ params }: { params: { meetId: string } }) {
	return (
		<div className="p-4 text-white">
			<h2 className="text-lg font-semibold">Meet {params.meetId}</h2>
			<p className="text-sm text-white/60">Meet details placeholder.</p>
		</div>
	);
}
