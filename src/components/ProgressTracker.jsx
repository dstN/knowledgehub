import { useState, useEffect } from 'react';

const TOPICS = [
	{
		section: 'Systemtechnik – Hardware',
		items: [
			{ id: 'hw-grundlagen', label: 'Grundlagen der Hardware', url: '/hardware/01-grundlagen/' },
			{ id: 'hw-eva', label: 'EVA-Prinzip', url: '/hardware/02-eva-prinzip/' },
			{ id: 'hw-cpu', label: 'CPU & Architektur', url: '/hardware/03-cpu-architektur/' },
			{ id: 'hw-mainboard', label: 'Mainboard & Chipsatz', url: '/hardware/04-mainboard-chipsatz/' },
			{ id: 'hw-glossar', label: 'Glossar Hardware', url: '/hardware/05-glossar/' },
		],
	},
	{
		section: 'Netzwerke – OSI-Modell',
		items: [
			{ id: 'osi-overview', label: 'OSI-Modell Übersicht', url: '/osi/' },
			{ id: 'osi-1', label: 'Schicht 1 – Bitübertragung', url: '/osi/01-bitübertragung/' },
			{ id: 'osi-2', label: 'Schicht 2 – Sicherung', url: '/osi/02-sicherung/' },
			{ id: 'osi-3', label: 'Schicht 3 – Vermittlung', url: '/osi/03-vermittlung/' },
			{ id: 'osi-4', label: 'Schicht 4 – Transport', url: '/osi/04-transport/' },
			{ id: 'osi-5', label: 'Schicht 5 – Sitzung', url: '/osi/05-sitzung/' },
			{ id: 'osi-6', label: 'Schicht 6 – Darstellung', url: '/osi/06-darstellung/' },
			{ id: 'osi-7', label: 'Schicht 7 – Anwendung', url: '/osi/07-anwendung/' },
			{ id: 'osi-glossar', label: 'OSI-Glossar', url: '/osi/glossar/' },
		],
	},
	{
		section: 'Netzwerke – Subnetting & CIDR',
		items: [
			{ id: 'net-subnetting', label: 'Subnetting Grundlagen', url: '/netzwerke/01-subnetting/' },
			{ id: 'net-cidr', label: 'CIDR – Classless Inter-Domain Routing', url: '/netzwerke/01-subnetting/cidr/' },
			{ id: 'net-berechnung', label: 'Schritt-für-Schritt-Berechnung', url: '/netzwerke/01-subnetting/berechnung/' },
		],
	},
];

const STORAGE_KEY = 'cavehub_progress';

export default function ProgressTracker() {
	const [checked, setChecked] = useState({});

	useEffect(() => {
		try {
			const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
			setChecked(stored);
		} catch { }
	}, []);

	function toggle(id) {
		setChecked(prev => {
			const next = { ...prev, [id]: !prev[id] };
			localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
			return next;
		});
	}

	function resetAll() {
		setChecked({});
		localStorage.removeItem(STORAGE_KEY);
	}

	const allItems = TOPICS.flatMap(t => t.items);
	const doneCount = allItems.filter(i => checked[i.id]).length;
	const totalCount = allItems.length;
	const pct = Math.round((doneCount / totalCount) * 100);

	return (
		<div className="w-full max-w-2xl mx-auto my-6 font-sans">
			<div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
				<div className="flex items-center justify-between mb-4">
					<h3 className="text-lg font-bold text-slate-800">📋 Lernfortschritt</h3>
					<button onClick={resetAll} className="text-xs text-slate-400 hover:text-red-500 transition-colors">
						Zurücksetzen
					</button>
				</div>

				{/* Progress Bar */}
				<div className="mb-6">
					<div className="flex justify-between text-sm text-slate-600 mb-1">
						<span>{doneCount} von {totalCount} Themen abgeschlossen</span>
						<span className="font-semibold text-sky-600">{pct}%</span>
					</div>
					<div className="h-3 bg-slate-100 rounded-full overflow-hidden">
						<div
							className="h-full bg-sky-500 rounded-full transition-all duration-500"
							style={{ width: `${pct}%` }}
						/>
					</div>
				</div>

				{/* Topics */}
				{TOPICS.map(topic => (
					<div key={topic.section} className="mb-5">
						<h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">{topic.section}</h4>
						<div className="flex flex-col gap-1">
							{topic.items.map(item => (
								<label
									key={item.id}
									className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 cursor-pointer group"
								>
									<input
										type="checkbox"
										checked={!!checked[item.id]}
										onChange={() => toggle(item.id)}
										className="w-4 h-4 accent-sky-600 cursor-pointer"
									/>
									<span className={`text-sm transition-colors ${checked[item.id] ? 'line-through text-slate-400' : 'text-slate-700 group-hover:text-sky-600'}`}>
										{item.label}
									</span>
									{checked[item.id] && <span className="ml-auto text-green-500 text-xs">✓</span>}
								</label>
							))}
						</div>
					</div>
				))}

				<p className="text-xs text-slate-400 mt-4">Fortschritt wird lokal in deinem Browser gespeichert.</p>
			</div>
		</div>
	);
}
