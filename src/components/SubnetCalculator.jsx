import { useState } from 'react';

function ipToInt(ip) {
	return ip.split('.').reduce((acc, octet) => (acc << 8) + parseInt(octet, 10), 0) >>> 0;
}

function intToIp(int) {
	return [(int >>> 24) & 255, (int >>> 16) & 255, (int >>> 8) & 255, int & 255].join('.');
}

function intToBinary(int) {
	return (int >>> 0).toString(2).padStart(32, '0').match(/.{8}/g).join('.');
}

function isValidIp(ip) {
	return /^(\d{1,3}\.){3}\d{1,3}$/.test(ip) && ip.split('.').every(o => parseInt(o) <= 255);
}

export default function SubnetCalculator() {
	const [ip, setIp] = useState('192.168.1.0');
	const [prefix, setPrefix] = useState(24);
	const [subnets, setSubnets] = useState(1);
	const [result, setResult] = useState(null);
	const [error, setError] = useState('');

	function calculate() {
		setError('');
		if (!isValidIp(ip)) { setError('Ungültige IP-Adresse.'); return; }
		const pfx = parseInt(prefix);
		if (pfx < 1 || pfx > 30) { setError('Präfix muss zwischen 1 und 30 liegen.'); return; }

		const ipInt = ipToInt(ip);
		const mask = pfx === 0 ? 0 : (0xFFFFFFFF << (32 - pfx)) >>> 0;
		const networkInt = (ipInt & mask) >>> 0;
		const broadcast = (networkInt | (~mask >>> 0)) >>> 0;
		const totalHosts = Math.pow(2, 32 - pfx);
		const usableHosts = totalHosts - 2;

		// Subnetting
		const neededSubnets = parseInt(subnets);
		let subnetBits = 0;
		while (Math.pow(2, subnetBits) < neededSubnets) subnetBits++;
		const newPrefix = pfx + subnetBits;
		const subnetList = [];

		if (newPrefix <= 30) {
			const subnetCount = Math.pow(2, subnetBits);
			const subnetSize = Math.pow(2, 32 - newPrefix);
			const newMask = newPrefix === 0 ? 0 : (0xFFFFFFFF << (32 - newPrefix)) >>> 0;

			for (let i = 0; i < subnetCount; i++) {
				const netInt = (networkInt + i * subnetSize) >>> 0;
				const bcInt = (netInt + subnetSize - 1) >>> 0;
				subnetList.push({
					network: intToIp(netInt),
					first: intToIp((netInt + 1) >>> 0),
					last: intToIp((bcInt - 1) >>> 0),
					broadcast: intToIp(bcInt),
					mask: intToIp(newMask),
					prefix: newPrefix,
				});
			}
		}

		setResult({
			network: intToIp(networkInt),
			broadcast: intToIp(broadcast),
			mask: intToIp(mask),
			first: intToIp((networkInt + 1) >>> 0),
			last: intToIp((broadcast - 1) >>> 0),
			totalHosts,
			usableHosts,
			networkBin: intToBinary(networkInt),
			maskBin: intToBinary(mask),
			subnetBits,
			newPrefix,
			subnetList,
		});
	}

	const S = {
		wrap: { maxWidth: 860, margin: '1.5rem auto', fontFamily: 'sans-serif' },
		card: { border: '1px solid #334155', borderRadius: 12, padding: '1.5rem', marginBottom: '1rem', background: 'var(--sl-color-bg, #0f172a)' },
		row: { display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'flex-end' },
		fieldWrap: { display: 'flex', flexDirection: 'column', gap: '0.3rem' },
		fieldLabel: { fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#64748b' },
		input: { border: '1px solid #475569', borderRadius: 8, padding: '0.4rem 0.7rem', fontSize: '0.875rem', fontFamily: 'monospace', background: '#1e293b', color: '#e2e8f0', width: 160 },
		inputSmall: { border: '1px solid #475569', borderRadius: 8, padding: '0.4rem 0.7rem', fontSize: '0.875rem', fontFamily: 'monospace', background: '#1e293b', color: '#e2e8f0', width: 80 },
		prefixRow: { display: 'flex', alignItems: 'center', gap: '0.25rem' },
		slash: { fontFamily: 'monospace', color: '#94a3b8', fontSize: '1rem' },
		btn: { background: '#0284c7', color: '#fff', border: 'none', borderRadius: 8, padding: '0.5rem 1.2rem', fontWeight: 700, fontSize: '0.875rem', cursor: 'pointer' },
		error: { color: '#f87171', fontSize: '0.85rem', marginTop: '0.75rem' },
		resultCard: { border: '1px solid #1d4ed8', borderRadius: 12, padding: '1.5rem', marginBottom: '1rem', background: '#0c1a3a' },
		resultTitle: { fontWeight: 700, color: '#38bdf8', marginBottom: '1rem', fontSize: '1rem' },
		grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.6rem', marginBottom: '1rem' },
		cell: { border: '1px solid #1e3a5f', borderRadius: 8, padding: '0.6rem 0.75rem', background: '#0f172a' },
		cellLabel: { fontSize: '0.7rem', color: '#64748b', marginBottom: '0.2rem' },
		cellVal: { fontFamily: 'monospace', fontWeight: 600, fontSize: '0.875rem', color: '#e2e8f0' },
		binBox: { border: '1px solid #1e3a5f', borderRadius: 8, padding: '0.75rem', fontFamily: 'monospace', fontSize: '0.8rem', background: '#0f172a', color: '#94a3b8' },
		binLabel: { color: '#475569', marginBottom: '0.2rem' },
		tableWrap: { overflowX: 'auto' },
		table: { width: '100%', fontFamily: 'monospace', fontSize: '0.85rem', borderCollapse: 'collapse' },
		th: { textAlign: 'left', padding: '0.4rem 0.6rem', fontSize: '0.7rem', textTransform: 'uppercase', color: '#64748b', borderBottom: '1px solid #1e293b' },
		tdNum: { padding: '0.4rem 0.6rem', color: '#475569' },
		tdNet: { padding: '0.4rem 0.6rem', fontWeight: 700, color: '#38bdf8' },
		tdNormal: { padding: '0.4rem 0.6rem', color: '#94a3b8' },
		tdBc: { padding: '0.4rem 0.6rem', color: '#fb923c' },
		trEven: { background: '#0f172a' },
		trOdd: { background: '#0c1524' },
		warn: { border: '1px solid #7f1d1d', borderRadius: 10, padding: '0.75rem 1rem', color: '#fca5a5', fontSize: '0.875rem', background: '#1c0a0a' },
	};

	return (
		<div style={S.wrap}>
			<div style={S.card}>
				<div style={S.row}>
					<div style={S.fieldWrap}>
						<span style={S.fieldLabel}>IP-Adresse</span>
						<input style={S.input} type="text" value={ip} onChange={e => setIp(e.target.value)} placeholder="192.168.1.0" />
					</div>
					<div style={S.fieldWrap}>
						<span style={S.fieldLabel}>Präfix</span>
						<div style={S.prefixRow}>
							<span style={S.slash}>/</span>
							<input style={S.inputSmall} type="number" value={prefix} min={1} max={30} onChange={e => setPrefix(e.target.value)} />
						</div>
					</div>
					<div style={S.fieldWrap}>
						<span style={S.fieldLabel}>Gewünschte Subnetze</span>
						<input style={S.inputSmall} type="number" value={subnets} min={1} max={256} onChange={e => setSubnets(e.target.value)} />
					</div>
					<button style={S.btn} onClick={calculate}>Berechnen</button>
				</div>
				{error && <p style={S.error}>{error}</p>}
			</div>

			<div style={S.resultCard}>
				<div style={S.resultTitle}>Ergebnis</div>
				{result ? (
					<>
						<div style={{ fontSize: '0.85rem', color: '#38bdf8', marginBottom: '0.75rem', fontWeight: 600 }}>
							Ausgangsnetz: {result.network}/{prefix}
						</div>
						<div style={S.grid}>
							{[
								['Netzadresse', result.network],
								['Broadcast', result.broadcast],
								['Subnetzmaske', result.mask],
								['Erste nutzbare IP', result.first],
								['Letzte nutzbare IP', result.last],
								['Nutzbare Hosts', result.usableHosts.toLocaleString('de')],
							].map(([label, val]) => (
								<div key={label} style={S.cell}>
									<div style={S.cellLabel}>{label}</div>
									<div style={S.cellVal}>{val}</div>
								</div>
							))}
						</div>
						<div style={S.binBox}>
							<div style={S.binLabel}>Netzadresse (binär):</div>
							<div style={{ marginBottom: '0.5rem' }}>{result.networkBin}</div>
							<div style={S.binLabel}>Subnetzmaske (binär):</div>
							<div>{result.maskBin}</div>
						</div>

						{result.newPrefix > 30 && (
							<div style={{ ...S.warn, marginTop: '1rem' }}>
								⚠️ Für {subnets} Subnetze wäre Präfix /{result.newPrefix} nötig – größer als /30, nicht sinnvoll einsetzbar.
							</div>
						)}

						{result.subnetList.length > 0 && (
							<div style={{ marginTop: '1.25rem' }}>
								<div style={{ fontWeight: 700, color: '#e2e8f0', marginBottom: '0.25rem' }}>
									Subnetting: {result.subnetBits} Bit(s) geliehen → {result.subnetList.length} Subnetze (/{result.newPrefix})
								</div>
								<div style={{ fontSize: '0.8rem', color: '#64748b', marginBottom: '0.75rem' }}>
									Neue Maske: {result.subnetList[0].mask} | Hosts/Subnetz: {(Math.pow(2, 32 - result.newPrefix) - 2).toLocaleString('de')}
								</div>
								<div style={S.tableWrap}>
									<table style={S.table}>
										<thead>
											<tr>
												<th style={S.th}>#</th>
												<th style={S.th}>Netzadresse</th>
												<th style={S.th}>Erste IP</th>
												<th style={S.th}>Letzte IP</th>
												<th style={S.th}>Broadcast</th>
											</tr>
										</thead>
										<tbody>
											{result.subnetList.map((sn, i) => (
												<tr key={i} style={i % 2 === 0 ? S.trEven : S.trOdd}>
													<td style={S.tdNum}>{i + 1}</td>
													<td style={S.tdNet}>{sn.network}</td>
													<td style={S.tdNormal}>{sn.first}</td>
													<td style={S.tdNormal}>{sn.last}</td>
													<td style={S.tdBc}>{sn.broadcast}</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							</div>
						)}
					</>
				) : (
					<p style={{ color: '#475569', fontStyle: 'italic', fontSize: '0.875rem', margin: 0 }}>
						Gib oben eine IP-Adresse und einen Präfix ein, dann klick auf <strong style={{ color: '#94a3b8' }}>Berechnen</strong> → das Ergebnis erscheint hier.
					</p>
				)}
			</div>
		</div>
	);
}
