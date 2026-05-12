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

const s = {
	wrap: { maxWidth: 640, margin: '1.5rem auto', fontFamily: 'sans-serif' },
	card: { border: '1px solid #334155', borderRadius: 12, padding: '1.5rem', background: 'var(--sl-color-bg, #0f172a)' },
	header: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' },
	title: { fontSize: '1.1rem', fontWeight: 700, margin: 0, color: 'var(--sl-color-text, #e2e8f0)' },
	resetBtn: { fontSize: '0.75rem', background: 'none', border: '1px solid #475569', borderRadius: 6, padding: '0.25rem 0.6rem', cursor: 'pointer', color: '#94a3b8' },
	barWrap: { marginBottom: '1.5rem' },
	barInfo: { display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '0.4rem' },
	barPct: { fontWeight: 700, color: '#38bdf8' },
	barBg: { height: 10, background: '#1e293b', borderRadius: 999, overflow: 'hidden' },
	barFill: (pct) => ({ height: '100%', background: '#0ea5e9', borderRadius: 999, transition: 'width 0.4s ease', width: `${pct}%` }),
	section: { marginBottom: '1.2rem' },
	sectionTitle: { fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#64748b', marginBottom: '0.5rem' },
	item: { display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.4rem 0.5rem', borderRadius: 8, cursor: 'pointer', marginBottom: '0.15rem' },
	checkbox: { width: 16, height: 16, accentColor: '#0ea5e9', cursor: 'pointer', flexShrink: 0 },
	labelDone: { fontSize: '0.875rem', textDecoration: 'line-through', color: '#475569' },
	labelOpen: { fontSize: '0.875rem', color: 'var(--sl-color-text, #cbd5e1)' },
	checkmark: { marginLeft: 'auto', color: '#22c55e', fontSize: '0.8rem' },
	hint: { fontSize: '0.7rem', color: '#475569', marginTop: '1rem' },
};

export default function ProgressTracker() {
	const [checked, setChecked] = useState({});

	useEffect(() => {
		try {
			const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
			setChecked(stored);
		} catch {}
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
		<div style={s.wrap}>
			<div style={s.card}>
				<div style={s.header}>
					<h3 style={s.title}>📋 Lernfortschritt</h3>
					<button style={s.resetBtn} onClick={resetAll}>Zurücksetzen</button>
				</div>

				<div style={s.barWrap}>
					<div style={s.barInfo}>
						<span>{doneCount} von {totalCount} Themen abgeschlossen</span>
						<span style={s.barPct}>{pct}%</span>
					</div>
					<div style={s.barBg}>
						<div style={s.barFill(pct)} />
					</div>
				</div>

				{TOPICS.map(topic => (
					<div key={topic.section} style={s.section}>
						<div style={s.sectionTitle}>{topic.section}</div>
						{topic.items.map(item => (
							<label key={item.id} style={s.item}>
								<input
									type="checkbox"
									style={s.checkbox}
									checked={!!checked[item.id]}
									onChange={() => toggle(item.id)}
								/>
								<span style={checked[item.id] ? s.labelDone : s.labelOpen}>{item.label}</span>
								{checked[item.id] && <span style={s.checkmark}>✓</span>}
							</label>
						))}
					</div>
				))}

				<p style={s.hint}>Fortschritt wird lokal in deinem Browser gespeichert.</p>
			</div>
		</div>
	);
}
