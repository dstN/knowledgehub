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

	return (
		<div className="w-full max-w-3xl mx-auto my-6 font-sans">
			<div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
				<h3 className="text-lg font-bold text-slate-800 mb-4">🔢 Binär-Konverter</h3>

				{/* Mode Toggle */}
				<div className="flex gap-2 mb-6">
					{[['dec2bin', 'Dezimal → Binär'], ['bin2dec', 'Binär → Dezimal'], ['ipvis', 'IP-Adresse visualisieren']].map(([m, label]) => (
						<button
							key={m}
							onClick={() => { setMode(m); setError(''); setDec(''); setBin(''); }}
							className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${mode === m ? 'bg-sky-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
						>
							{label}
						</button>
					))}
				</div>

				{/* Dezimal → Binär */}
				{mode === 'dec2bin' && (
					<div>
						<label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-2">Dezimalwert (0–255)</label>
						<input
							type="number"
							min={0} max={255}
							value={dec}
							onChange={e => handleDec(e.target.value)}
							placeholder="z.B. 192"
							className="border border-slate-300 rounded-lg px-4 py-2 text-sm font-mono w-40 focus:outline-none focus:border-sky-500 mb-4"
						/>
						{error && <p className="text-red-500 text-sm mb-3">{error}</p>}
						{bin && (
							<div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
								<div className="text-xs text-slate-400 mb-2 uppercase tracking-wide">Binärdarstellung</div>
								<div className="flex gap-1 flex-wrap">
									{bin.split('').map((bit, i) => (
										<div key={i} className="flex flex-col items-center">
											<span className="text-xs text-slate-400 mb-1">{7 - i}</span>
											<span className={`w-10 h-10 flex items-center justify-center rounded-lg font-mono font-bold text-lg border-2 ${bit === '1' ? 'bg-sky-100 border-sky-400 text-sky-700' : 'bg-slate-100 border-slate-300 text-slate-400'}`}>
												{bit}
											</span>
											<span className="text-xs text-slate-400 mt-1">{Math.pow(2, 7 - i)}</span>
										</div>
									))}
								</div>
								<div className="mt-4 text-sm text-slate-600">
									Summe der aktiven Bits:{' '}
									{bin.split('').map((b, i) => b === '1' ? Math.pow(2, 7 - i) : 0).filter(v => v > 0).join(' + ')} = <strong>{parseInt(bin, 2)}</strong>
								</div>
							</div>
						)}
					</div>
				)}

				{/* Binär → Dezimal */}
				{mode === 'bin2dec' && (
					<div>
						<label className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-2">Binärwert (8 Bit)</label>
						<input
							type="text"
							value={bin}
							onChange={e => handleBin(e.target.value)}
							placeholder="z.B. 11000000"
							maxLength={8}
							className="border border-slate-300 rounded-lg px-4 py-2 text-sm font-mono w-40 focus:outline-none focus:border-sky-500 mb-4"
						/>
						{bin.length === 8 && (
							<div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
								<div className="flex gap-1 flex-wrap mb-4">
									{bin.split('').map((bit, i) => (
										<div key={i} className="flex flex-col items-center">
											<span className="text-xs text-slate-400 mb-1">{7 - i}</span>
											<span className={`w-10 h-10 flex items-center justify-center rounded-lg font-mono font-bold text-lg border-2 ${bit === '1' ? 'bg-sky-100 border-sky-400 text-sky-700' : 'bg-slate-100 border-slate-300 text-slate-400'}`}>
												{bit}
											</span>
											<span className="text-xs text-slate-400 mt-1">{Math.pow(2, 7 - i)}</span>
										</div>
									))}
								</div>
								<div className="text-sm text-slate-600">
									{bin.split('').map((b, i) => b === '1' ? Math.pow(2, 7 - i) : 0).filter(v => v > 0).join(' + ')} = <strong className="text-sky-700 text-lg">{dec}</strong>
								</div>
							</div>
						)}
					</div>
				)}

				{/* IP visualisieren */}
				{mode === 'ipvis' && (
					<div>
						<div className="flex flex-col sm:flex-row gap-4 mb-4">
							<div className="flex flex-col gap-1">
								<label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">IP-Adresse</label>
								<input
									type="text"
									value={ip}
									onChange={e => setIp(e.target.value)}
									placeholder="192.168.1.1"
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
										min={1} max={32}
										onChange={e => setPrefix(e.target.value)}
										className="border border-slate-300 rounded-lg px-3 py-2 text-sm font-mono w-20 focus:outline-none focus:border-sky-500"
									/>
								</div>
							</div>
						</div>

						{ipValid && pfx >= 1 && pfx <= 32 && (
							<div className="bg-slate-50 rounded-xl p-5 border border-slate-200 overflow-x-auto">
								<div className="flex gap-px flex-nowrap min-w-max">
									{ipBinaryFull.split('').map((bit, i) => {
										const isNet = i < pfx;
										const isOctetStart = i % 8 === 0 && i !== 0;
										return (
											<div key={i} className="flex flex-col items-center">
												{isOctetStart && <div className="w-px h-full" />}
												<span className={`w-7 h-8 flex items-center justify-center font-mono font-bold text-sm border ${isNet ? 'bg-sky-200 border-sky-400 text-sky-800' : 'bg-orange-100 border-orange-300 text-orange-700'} ${isOctetStart ? 'ml-2' : ''}`}>
													{bit}
												</span>
											</div>
										);
									})}
								</div>
								<div className="flex gap-4 mt-3 text-xs">
									<span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-sky-200 border border-sky-400 inline-block" /> Netzanteil ({pfx} Bit)</span>
									<span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-orange-100 border border-orange-300 inline-block" /> Hostanteil ({32 - pfx} Bit)</span>
								</div>
								<div className="mt-3 grid grid-cols-4 gap-2">
									{ipOctets.map((o, i) => (
										<div key={i} className="bg-white rounded-lg p-2 border border-slate-200 text-center">
											<div className="font-mono font-bold text-slate-800">{o}</div>
											<div className="font-mono text-xs text-slate-500">{decToBin(o)}</div>
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
