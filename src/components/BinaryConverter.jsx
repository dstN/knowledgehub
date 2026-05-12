import { useState } from 'react';

function decToBin(n) {
	return n.toString(2).padStart(8, '0');
}

function binToDec(b) {
	return parseInt(b, 2);
}

function highlight(bin, count) {
	const net = bin.slice(0, count);
	const host = bin.slice(count);
	return { net, host };
}

export default function BinaryConverter() {
	const [mode, setMode] = useState('dec2bin');
	const [dec, setDec] = useState('');
	const [bin, setBin] = useState('');
	const [ip, setIp] = useState('192.168.1.1');
	const [prefix, setPrefix] = useState(24);
	const [error, setError] = useState('');

	function handleDec(val) {
		setError('');
		setDec(val);
		const n = parseInt(val);
		if (val === '') { setBin(''); return; }
		if (isNaN(n) || n < 0 || n > 255) { setError('Wert muss zwischen 0 und 255 liegen.'); setBin(''); return; }
		setBin(decToBin(n));
	}

	function handleBin(val) {
		setError('');
		const clean = val.replace(/[^01]/g, '').slice(0, 8);
		setBin(clean);
		if (clean.length === 8) setDec(binToDec(clean).toString());
		else setDec('');
	}

	const ipOctets = ip.split('.').map(o => parseInt(o) || 0);
	const ipValid = /^(\d{1,3}\.){3}\d{1,3}$/.test(ip) && ipOctets.every(o => o <= 255);
	const pfx = parseInt(prefix);
	const ipBinaryFull = ipOctets.map(o => decToBin(o)).join('');

	const S = {
		wrap: { maxWidth: 720, margin: '1.5rem auto', fontFamily: 'sans-serif' },
		card: { border: '1px solid #334155', borderRadius: 12, padding: '1.5rem', background: 'var(--sl-color-bg, #0f172a)' },
		tabs: { display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' },
		tabActive: { background: '#0284c7', color: '#fff', border: 'none', borderRadius: 8, padding: '0.4rem 0.85rem', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer' },
		tabInactive: { background: '#1e293b', color: '#94a3b8', border: '1px solid #334155', borderRadius: 8, padding: '0.4rem 0.85rem', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer' },
		fieldLabel: { fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#64748b', display: 'block', marginBottom: '0.4rem' },
		input: { border: '1px solid #475569', borderRadius: 8, padding: '0.45rem 0.8rem', fontSize: '0.9rem', fontFamily: 'monospace', background: '#1e293b', color: '#e2e8f0', width: 200, marginBottom: '1rem' },
		inputWide: { border: '1px solid #475569', borderRadius: 8, padding: '0.45rem 0.8rem', fontSize: '0.9rem', fontFamily: 'monospace', background: '#1e293b', color: '#e2e8f0', width: 260, marginBottom: '1rem' },
		error: { color: '#f87171', fontSize: '0.85rem', marginBottom: '0.75rem' },
		resultBox: { border: '1px solid #1e293b', borderRadius: 10, padding: '1rem 1.25rem', background: '#0c1524' },
		bitRow: { display: 'flex', gap: 4, flexWrap: 'wrap', marginBottom: '0.75rem' },
		bitWrap: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 },
		bitPos: { fontSize: '0.6rem', color: '#64748b' },
		bit1: { width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 6, fontFamily: 'monospace', fontWeight: 700, fontSize: '1rem', border: '2px solid #0ea5e9', background: '#0c2d4a', color: '#38bdf8' },
		bit0: { width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 6, fontFamily: 'monospace', fontWeight: 700, fontSize: '1rem', border: '2px solid #334155', background: '#1e293b', color: '#475569' },
		bitVal: { fontSize: '0.6rem', color: '#64748b' },
		sumLine: { fontSize: '0.875rem', color: '#94a3b8', marginTop: '0.5rem' },
		sumResult: { fontWeight: 700, color: '#38bdf8', fontSize: '1.1rem' },
		ipBitNet: { width: 22, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'monospace', fontWeight: 700, fontSize: '0.8rem', border: '1px solid #0ea5e9', background: '#0c2d4a', color: '#38bdf8' },
		ipBitHost: { width: 22, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'monospace', fontWeight: 700, fontSize: '0.8rem', border: '1px solid #92400e', background: '#1c0f00', color: '#fb923c' },
		ipBitSep: { width: 8 },
		ipBitRow: { display: 'flex', flexWrap: 'nowrap', overflowX: 'auto', paddingBottom: '0.5rem', gap: 1 },
		legend: { display: 'flex', gap: '1.5rem', marginTop: '0.75rem', fontSize: '0.75rem', color: '#94a3b8' },
		legendDot: (bg, border) => ({ display: 'inline-block', width: 12, height: 12, background: bg, border: `1px solid ${border}`, borderRadius: 3, marginRight: 4 }),
		octetGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem', marginTop: '0.75rem' },
		octetCell: { border: '1px solid #1e293b', borderRadius: 8, padding: '0.5rem', textAlign: 'center', background: '#0f172a' },
		octetDec: { fontFamily: 'monospace', fontWeight: 700, color: '#e2e8f0', fontSize: '1rem' },
		octetBin: { fontFamily: 'monospace', fontSize: '0.7rem', color: '#64748b', marginTop: 2 },
		fieldRow: { display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'flex-start', marginBottom: '0.5rem' },
		prefixRow: { display: 'flex', alignItems: 'center', gap: '0.25rem' },
		slash: { fontFamily: 'monospace', color: '#94a3b8' },
	};

	function BitDisplay({ bits }) {
		return (
			<div style={S.bitRow}>
				{bits.split('').map((bit, i) => (
					<div key={i} style={S.bitWrap}>
						<span style={S.bitPos}>{7 - i}</span>
						<span style={bit === '1' ? S.bit1 : S.bit0}>{bit}</span>
						<span style={S.bitVal}>{Math.pow(2, 7 - i)}</span>
					</div>
				))}
			</div>
		);
	}

	return (
		<div style={S.wrap}>
			<div style={S.card}>
				<div style={S.tabs}>
					{[['dec2bin', 'Dezimal → Binär'], ['bin2dec', 'Binär → Dezimal'], ['ipvis', 'IP visualisieren']].map(([m, label]) => (
						<button key={m} style={mode === m ? S.tabActive : S.tabInactive}
							onClick={() => { setMode(m); setError(''); setDec(''); setBin(''); }}>
							{label}
						</button>
					))}
				</div>

				{mode === 'dec2bin' && (
					<div>
						<label style={S.fieldLabel}>Dezimalwert (0–255)</label>
						<input style={S.input} type="number" min={0} max={255} value={dec}
							onChange={e => handleDec(e.target.value)} placeholder="z.B. 192" />
						{error && <p style={S.error}>{error}</p>}
						{bin && (
							<div style={S.resultBox}>
								<div style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Binärdarstellung</div>
								<BitDisplay bits={bin} />
								<div style={S.sumLine}>
									{bin.split('').map((b, i) => b === '1' ? Math.pow(2, 7 - i) : 0).filter(v => v > 0).join(' + ')}
									{' = '}<span style={S.sumResult}>{parseInt(bin, 2)}</span>
								</div>
							</div>
						)}
					</div>
				)}

				{mode === 'bin2dec' && (
					<div>
						<label style={S.fieldLabel}>Binärwert (8 Bit)</label>
						<input style={S.inputWide} type="text" value={bin} maxLength={8}
							onChange={e => handleBin(e.target.value)} placeholder="z.B. 11000000" />
						{bin.length === 8 && (
							<div style={S.resultBox}>
								<BitDisplay bits={bin} />
								<div style={S.sumLine}>
									{bin.split('').map((b, i) => b === '1' ? Math.pow(2, 7 - i) : 0).filter(v => v > 0).join(' + ')}
									{' = '}<span style={S.sumResult}>{dec}</span>
								</div>
							</div>
						)}
					</div>
				)}

				{mode === 'ipvis' && (
					<div>
						<div style={S.fieldRow}>
							<div>
								<label style={S.fieldLabel}>IP-Adresse</label>
								<input style={S.input} type="text" value={ip}
									onChange={e => setIp(e.target.value)} placeholder="192.168.1.1" />
							</div>
							<div>
								<label style={S.fieldLabel}>Präfix</label>
								<div style={S.prefixRow}>
									<span style={S.slash}>/</span>
									<input style={{ ...S.input, width: 70, marginBottom: 0 }} type="number" value={prefix}
										min={1} max={32} onChange={e => setPrefix(e.target.value)} />
								</div>
							</div>
						</div>
						{ipValid && pfx >= 1 && pfx <= 32 && (
							<div style={S.resultBox}>
								<div style={S.ipBitRow}>
									{ipBinaryFull.split('').map((bit, i) => {
										const isNet = i < pfx;
										const isOctetStart = i % 8 === 0 && i !== 0;
										return (
											<>
												{isOctetStart && <div key={`sep-${i}`} style={S.ipBitSep} />}
												<span key={i} style={isNet ? S.ipBitNet : S.ipBitHost}>{bit}</span>
											</>
										);
									})}
								</div>
								<div style={S.legend}>
									<span><span style={S.legendDot('#0c2d4a', '#0ea5e9')} />Netzanteil ({pfx} Bit)</span>
									<span><span style={S.legendDot('#1c0f00', '#92400e')} />Hostanteil ({32 - pfx} Bit)</span>
								</div>
								<div style={S.octetGrid}>
									{ipOctets.map((o, i) => (
										<div key={i} style={S.octetCell}>
											<div style={S.octetDec}>{o}</div>
											<div style={S.octetBin}>{decToBin(o)}</div>
										</div>
									))}
								</div>
							</div>
						)}
					</div>
				)}
			</div>
		</div>
	);
}
