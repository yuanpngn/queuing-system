import React from "react";

export default function ProfilePage({ params }: { params: { userId: string } }) {
	return (
		<div className="p-4 text-white">
			<h2 className="text-lg font-semibold">Profile — {params.userId}</h2>
			<p className="text-sm text-white/60">Profile placeholder.</p>
		</div>
	);
}
