import React from "react";

export default function TopHeader({ title }: { title?: string }) {
	return (
		<header className="w-full bg-gradient-to-b from-[#0d3d1e] to-transparent p-4">
			<div className="max-w-md mx-auto flex items-center justify-between">
				<div>
					<div className="text-xs text-green-300">Club</div>
					<div className="text-lg font-semibold">{title || "BadSoc"}</div>
				</div>
				<div className="flex items-center gap-2">
					<button className="w-9 h-9 rounded-md bg-white/5" aria-label="settings" />
				</div>
			</div>
		</header>
	);
}
