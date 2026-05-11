import { useState, useEffect } from 'react';
import { Bubble } from 'react-chartjs-2';
import { Chart as ChartJS, BubbleController, CartesianScaleBase, LinearScale, PointElement, Legend, Tooltip, Title } from 'chart.js';

ChartJS.register(BubbleController, LinearScale, PointElement, Legend, Tooltip, Title);

export default function MemoryHierarchyChart() {
	const [chartData, setChartData] = useState(null);

	useEffect(() => {
		const data = {
			datasets: [
				{
					label: 'Register',
					data: [{ x: 100, y: 1, r: 8 }],
					backgroundColor: '#ef4444',
					borderColor: '#dc2626',
					borderWidth: 2,
				},
				{
					label: 'L1/L2 Cache',
					data: [{ x: 80, y: 10, r: 12 }],
					backgroundColor: '#f97316',
					borderColor: '#ea580c',
					borderWidth: 2,
				},
				{
					label: 'Arbeitsspeicher (RAM)',
					data: [{ x: 40, y: 60, r: 25 }],
					backgroundColor: '#0284c7',
					borderColor: '#0369a1',
					borderWidth: 2,
				},
				{
					label: 'SSD / HDD',
					data: [{ x: 10, y: 100, r: 40 }],
					backgroundColor: '#64748b',
					borderColor: '#475569',
					borderWidth: 2,
				},
			],
		};

		setChartData(data);
	}, []);

	if (!chartData) return <div>Laden...</div>;

	return (
		<div className="w-full max-w-2xl mx-auto bg-white p-6 rounded-lg border border-slate-200">
			<Bubble
				data={chartData}
				options={{
					responsive: true,
					maintainAspectRatio: true,
					scales: {
						x: {
							title: { display: true, text: 'Geschwindigkeit (Zugriffszeit) → Schnell', font: { family: "'Inter', sans-serif" } },
							ticks: { display: false },
							grid: { display: false },
							min: 0,
							max: 110,
						},
						y: {
							title: { display: true, text: 'Speicherkapazität → Groß', font: { family: "'Inter', sans-serif" } },
							ticks: { display: false },
							grid: { display: false },
							min: 0,
							max: 120,
						},
					},
					plugins: {
						legend: { position: 'bottom', labels: { font: { family: "'Inter', sans-serif" } } },
						tooltip: {
							callbacks: {
								label: function (context) {
									return context.dataset.label;
								},
							},
						},
					},
				}}
			/>
			<div className="mt-4 text-sm text-slate-600 text-center">Speicherhierarchie: Größere Blasen = Größere Kapazität | Position zeigt Geschwindigkeits-Kapazitäts-Tradeoff</div>
			<div className="mt-4 bg-blue-50 p-3 rounded border border-blue-200 text-sm text-slate-700">
				<strong>💡 Beobachtung:</strong> Je schneller der Speicher, desto kleiner. Je größer der Speicher, desto langsamer. Computer nutzen alle Ebenen kombiniert.
			</div>
		</div>
	);
}
