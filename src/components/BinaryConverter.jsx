import { useState } from 'react';

function toBin(n) { return (n >>> 0).toString(2).padStart(8, '0'); }
function toDec(b) { return parseInt(b, 2); }

export default function BinaryConverter() {
	const [mode, setMode] = useState('dec2bin');
	const [decVal, setDecVal] = useState('');
	const [binVal, setBinVal] = useState('');
	const [ip, setIp] = useState('192.168.1.1');
	const [prefix, setPrefix] = useState(24);
	const [error, setError] = useState('');

	function onDecChange(val) {
		setError('');
		setDecVal(val);
		if (val === '') { setBinVal(''); return; }
		const n = parseInt(val, 10);
		if (isNaN(n) || n < 0 || n > 255) { setError('Wert 0–255 eingeben.'); setBinVal(''); return; }
		setBinVal(toBin(n));
	}

	function onBinChange(val) {
		setError('');
		const clean = val.replace(/[^01]/g, '').slice(0, 8);
		setBinVal(clean);
		if (clean.length === 8) setDecVal(String(toDec(clean)));
		else setDecVal('');
	}

	const ipOctets = ip.split('.').map(o => { const n = parseInt(o, 10); return isNaN(n) ? 0 : Math.min(255, n); });
	const ipValid = /^(\d{1,3}\.){3}\d{1,3}$/.test(ip) && ipOctets.every(o => o <= 255);
	const pfx = parseInt(prefix, 10);
	const ipBinaryFull = ipOctets.map(o => toBin(o)).join('');

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

	return (
		<div style={S.wrap}>
			<div style={S.card}>
				<div style={S.tabs}>
					{[['dec2bin', 'Dezimal → Binär'], ['bin2dec', 'Binär → Dezimal'], ['ipvis', 'IP visualisieren']].map(([m, label]) => (
						<button key={m} style={mode === m ? S.tabActive : S.tabInactive}
							onClick={() => { setMode(m); setError(''); setDecVal(''); setBinVal(''); }}>
							{label}
						</button>
					))}
				</div>

				{mode === 'dec2bin' && (
					<div>
						<label style={S.fieldLabel}>Dezimalwert (0–255)</label>
						<input style={S.input} type="text" inputMode="numeric" value={decVal}
							onChange={e => onDecChange(e.target.value)} placeholder="z.B. 192" />
						{error && <p style={S.error}>{error}</p>}
						<div style={S.resultBox}>
							<div style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Binärdarstellung</div>
							{binVal.length === 8 ? (
								<>
									<div style={S.bitRow}>
										{binVal.split('').map((bit, i) => (
											<div key={i} style={S.bitWrap}>
												<span style={S.bitPos}>{7 - i}</span>
												<span style={bit === '1' ? S.bit1 : S.bit0}>{bit}</span>
												<span style={S.bitVal}>{Math.pow(2, 7 - i)}</span>
											</div>
										))}
									</div>
									<div style={S.sumLine}>
										{binVal.split('').map((b, i) => b === '1' ? Math.pow(2, 7 - i) : 0).filter(v => v > 0).join(' + ')}
										{' = '}<span style={S.sumResult}>{toDec(binVal)}</span>
									</div>
								</>
							) : (
								<p style={{ color: '#475569', fontStyle: 'italic', fontSize: '0.85rem', margin: 0 }}>Gib oben einen Wert ein → das Ergebnis erscheint hier.</p>
							)}
						</div>
					</div>
				)}

				{mode === 'bin2dec' && (
					<div>
						<label style={S.fieldLabel}>Binärwert (8 Bit, nur 0 und 1)</label>
						<input style={S.inputWide} type="text" value={binVal} maxLength={8}
							onChange={e => onBinChange(e.target.value)} placeholder="z.B. 11000000" />
						<div style={S.resultBox}>
							<div style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Dezimaldarstellung</div>
							{binVal.length === 8 ? (
								<>
									<div style={S.bitRow}>
										{binVal.split('').map((bit, i) => (
											<div key={i} style={S.bitWrap}>
												<span style={S.bitPos}>{7 - i}</span>
												<span style={bit === '1' ? S.bit1 : S.bit0}>{bit}</span>
												<span style={S.bitVal}>{Math.pow(2, 7 - i)}</span>
											</div>
										))}
									</div>
									<div style={S.sumLine}>
										{binVal.split('').map((b, i) => b === '1' ? Math.pow(2, 7 - i) : 0).filter(v => v > 0).join(' + ')}
										{' = '}<span style={S.sumResult}>{decVal}</span>
									</div>
								</>
							) : (
								<p style={{ color: '#475569', fontStyle: 'italic', fontSize: '0.85rem', margin: 0 }}>Gib oben 8 Bits ein (z.B. 11000000) → das Ergebnis erscheint hier.</p>
							)}
						</div>
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
										min={1} max={32} onChange={e => setPrefix(Number(e.target.value))} />
								</div>
							</div>
						</div>
						{ipValid && pfx >= 1 && pfx <= 32 && (
							<div style={S.resultBox}>
								<div style={S.ipBitRow}>
									{ipBinaryFull.split('').map((bit, i) => {
										const isNet = i < pfx;
										const sep = i % 8 === 0 && i !== 0;
										return (
											<span key={i} style={{ display: 'inline-flex' }}>
												{sep && <span style={S.ipBitSep} />}
												<span style={isNet ? S.ipBitNet : S.ipBitHost}>{bit}</span>
											</span>
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
											<div style={S.octetBin}>{toBin(o)}</div>
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
