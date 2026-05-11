import { useState } from 'react';

export default function EVADiagram() {
	const [activeBox, setActiveBox] = useState(null);

	const evaData = {
		E: {
			title: 'Eingabeeinheit',
			desc: 'Nimmt strukturierte Daten vom Benutzer oder anderen Systemen entgegen.',
			examples: ['Tastatur', 'Maus', 'Scanner', 'Barcode-Leser', 'Mikrofon', 'Sensoren'],
		},
		V: {
			title: 'Verarbeitungseinheit',
			desc: 'Verarbeitet die Eingabedaten nach festgelegten Regeln. Der Kern des IT-Systems.',
			examples: ['Hauptprozessor (CPU)', 'Chipsatz', 'Grafikkern', 'Co-Prozessoren'],
		},
		S: {
			title: 'Speichereinheit',
			desc: 'Steht im ständigen Austausch mit der Verarbeitungseinheit zur Zwischen- und Langzeitspeicherung.',
			examples: ['Arbeitsspeicher (RAM)', 'Festplatten / SSDs', 'Flash-EEPROM (BIOS/UEFI)'],
		},
		A: {
			title: 'Ausgabeeinheit',
			desc: 'Gibt die erzeugten Ergebnisse an den Benutzer oder ein anderes System weiter.',
			examples: ['Display / Monitor', 'Drucker', 'Lautsprecher', 'Netzwerk-Interface'],
		},
	};

	return (
		<div className="w-full max-w-4xl mx-auto">
			{/* Diagram Section */}
			<div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8 p-6 bg-white rounded-lg border border-slate-200">
				{/* Eingabe */}
				<div onClick={() => setActiveBox('E')} className={`w-40 h-32 rounded-lg flex flex-col items-center justify-center cursor-pointer transition-all ${activeBox === 'E' ? 'bg-sky-100 border-2 border-sky-600 shadow-lg' : 'bg-white border-2 border-slate-300 hover:border-sky-400'}`}>
					<span className="text-2xl mb-2">📥</span>
					<span className="font-bold text-slate-900">Eingabe</span>
				</div>

				{/* Arrow */}
				<div className="text-3xl text-slate-400 rotate-90 md:rotate-0">→</div>

				{/* Verarbeitung & Speicher */}
				<div className="flex flex-col gap-4">
					<div onClick={() => setActiveBox('V')} className={`w-40 h-32 rounded-lg flex flex-col items-center justify-center cursor-pointer transition-all ${activeBox === 'V' ? 'bg-sky-100 border-2 border-sky-600 shadow-lg' : 'bg-white border-2 border-slate-300 hover:border-sky-400'}`}>
						<span className="text-2xl mb-2">⚙️</span>
						<span className="font-bold text-slate-900">Verarbeitung</span>
					</div>

					<div className="text-xl text-slate-400 text-center">⇅</div>

					<div onClick={() => setActiveBox('S')} className={`w-40 h-32 rounded-lg flex flex-col items-center justify-center cursor-pointer transition-all ${activeBox === 'S' ? 'bg-sky-100 border-2 border-sky-600 shadow-lg' : 'bg-white border-2 border-slate-300 hover:border-sky-400'}`}>
						<span className="text-2xl mb-2">💾</span>
						<span className="font-bold text-slate-900">Speicherung</span>
					</div>
				</div>

				{/* Arrow */}
				<div className="text-3xl text-slate-400 rotate-90 md:rotate-0">→</div>

				{/* Ausgabe */}
				<div onClick={() => setActiveBox('A')} className={`w-40 h-32 rounded-lg flex flex-col items-center justify-center cursor-pointer transition-all ${activeBox === 'A' ? 'bg-sky-100 border-2 border-sky-600 shadow-lg' : 'bg-white border-2 border-slate-300 hover:border-sky-400'}`}>
					<span className="text-2xl mb-2">📤</span>
					<span className="font-bold text-slate-900">Ausgabe</span>
				</div>
			</div>

			{/* Details Panel */}
			<div className="bg-gradient-to-br from-sky-50 to-blue-50 p-6 rounded-lg border border-sky-200 min-h-40">
				{activeBox ? (
					<div>
						<h4 className="text-lg font-bold text-sky-700 mb-2">{evaData[activeBox].title}</h4>
						<p className="text-slate-700 mb-4">{evaData[activeBox].desc}</p>
						<div>
							<h5 className="text-sm font-semibold text-slate-900 mb-2">Beispiele / Komponenten:</h5>
							<div className="flex flex-wrap gap-2">
								{evaData[activeBox].examples.map((example, i) => (
									<span key={i} className="inline-block bg-sky-200 text-slate-800 text-xs px-3 py-1 rounded-full">
										{example}
									</span>
								))}
							</div>
						</div>
					</div>
				) : (
					<div className="text-center text-slate-500 italic">Klicken Sie auf einen Block im Diagramm oben, um Details zu den Hardware-Komponenten anzuzeigen.</div>
				)}
			</div>

			{/* Instructions */}
			<div className="mt-4 text-center text-sm text-slate-600">💡 Tip: Klicken Sie auf jeden Block, um mehr zu erfahren</div>
		</div>
	);
}
