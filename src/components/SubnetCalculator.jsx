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

	return (
		<div className="w-full max-w-4xl mx-auto my-6 font-sans">
			{/* Input */}
			<div className="bg-white border border-slate-200 rounded-xl p-6 mb-4 shadow-sm">
				<h3 className="text-lg font-bold text-slate-800 mb-4">🧮 Subnetz-Rechner</h3>
				<div className="flex flex-col sm:flex-row gap-4 flex-wrap">
					<div className="flex flex-col gap-1">
						<label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">IP-Adresse</label>
						<input
							type="text"
							value={ip}
							onChange={e => setIp(e.target.value)}
							placeholder="192.168.1.0"
							className="border border-slate-300 rounded-lg px-3 py-2 text-sm font-mono w-40 focus:outline-none focus:border-sky-500"
						/>
					</div>
					<div className="flex flex-col gap-1">
						<label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Präfix</label>
						<div className="flex items-center gap-1">
							<span className="text-slate-400 font-mono">/</span>
							<input
								type="number"
								value={prefix}
								min={1} max={30}
								onChange={e => setPrefix(e.target.value)}
								className="border border-slate-300 rounded-lg px-3 py-2 text-sm font-mono w-20 focus:outline-none focus:border-sky-500"
							/>
						</div>
					</div>
					<div className="flex flex-col gap-1">
						<label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Gewünschte Subnetze</label>
						<input
							type="number"
							value={subnets}
							min={1} max={256}
							onChange={e => setSubnets(e.target.value)}
							className="border border-slate-300 rounded-lg px-3 py-2 text-sm font-mono w-28 focus:outline-none focus:border-sky-500"
						/>
					</div>
					<div className="flex flex-col justify-end">
						<button
							onClick={calculate}
							className="bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 py-2 rounded-lg text-sm transition-colors"
						>
							Berechnen
						</button>
					</div>
				</div>
				{error && <p className="mt-3 text-red-600 text-sm font-medium">{error}</p>}
			</div>

			{result && (
				<>
					{/* Netz-Übersicht */}
					<div className="bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-200 rounded-xl p-6 mb-4">
						<h4 className="font-bold text-sky-800 mb-4">Ausgangsnetz: {result.network}/{prefix}</h4>
						<div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
							{[
								['Netzadresse', result.network],
								['Broadcast', result.broadcast],
								['Subnetzmaske', result.mask],
								['Erste nutzbare IP', result.first],
								['Letzte nutzbare IP', result.last],
								['Nutzbare Hosts', result.usableHosts.toLocaleString('de')],
							].map(([label, val]) => (
								<div key={label} className="bg-white rounded-lg p-3 border border-sky-100">
									<div className="text-xs text-slate-500 mb-1">{label}</div>
									<div className="font-mono font-semibold text-slate-800 text-sm">{val}</div>
								</div>
							))}
						</div>
						<div className="bg-white rounded-lg p-3 border border-sky-100 font-mono text-xs text-slate-600">
							<div className="text-slate-400 mb-1">Netzadresse (binär):</div>
							<div>{result.networkBin}</div>
							<div className="text-slate-400 mt-2 mb-1">Subnetzmaske (binär):</div>
							<div>{result.maskBin}</div>
						</div>
					</div>

					{/* Subnetting-Ergebnis */}
					{result.subnetList.length > 0 && (
						<div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
							<h4 className="font-bold text-slate-800 mb-1">
								Subnetting: {result.subnetBits} Bit(s) geliehen → {result.subnetList.length} Subnetze (/{result.newPrefix})
							</h4>
							<p className="text-xs text-slate-500 mb-4">
								Neue Maske: {result.subnetList[0].mask} &nbsp;|&nbsp; Hosts/Subnetz: {(Math.pow(2, 32 - result.newPrefix) - 2).toLocaleString('de')}
							</p>
							<div className="overflow-x-auto">
								<table className="w-full text-sm font-mono">
									<thead>
										<tr className="bg-slate-50 text-slate-600 text-xs uppercase">
											<th className="text-left p-2 font-semibold">#</th>
											<th className="text-left p-2 font-semibold">Netzadresse</th>
											<th className="text-left p-2 font-semibold">Erste IP</th>
											<th className="text-left p-2 font-semibold">Letzte IP</th>
											<th className="text-left p-2 font-semibold">Broadcast</th>
										</tr>
									</thead>
									<tbody>
										{result.subnetList.map((s, i) => (
											<tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
												<td className="p-2 text-slate-400">{i + 1}</td>
												<td className="p-2 font-semibold text-sky-700">{s.network}</td>
												<td className="p-2 text-slate-700">{s.first}</td>
												<td className="p-2 text-slate-700">{s.last}</td>
												<td className="p-2 text-orange-600">{s.broadcast}</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					)}
					{result.newPrefix > 30 && (
						<div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm">
							⚠️ Für {subnets} Subnetze wäre Präfix /{result.newPrefix} nötig – das ist größer als /30 und damit nicht sinnvoll einsetzbar.
						</div>
					)}
				</>
			)}
		</div>
	);
}
