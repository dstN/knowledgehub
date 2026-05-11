import { useState, useEffect } from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadarController, RadialLinearScale, PointElement, LineElement, Filler, Legend, Tooltip, TooltipItem } from 'chart.js';

ChartJS.register(RadarController, RadialLinearScale, PointElement, LineElement, Filler, Legend, Tooltip);

export default function ArchitectureChart() {
	const [chartData, setChartData] = useState(null);

	useEffect(() => {
		const data = {
			labels: ['Befehlskomplexität', 'Anzahl d. Register', 'Code-Länge (Software)', 'Hardware-Komplexität', 'Geschwindigkeit (Zyklen/Befehl)'],
			datasets: [
				{
					label: 'RISC',
					data: [2, 9, 8, 3, 9],
					backgroundColor: 'rgba(2, 132, 199, 0.2)',
					borderColor: 'rgba(2, 132, 199, 1)',
					pointBackgroundColor: 'rgba(2, 132, 199, 1)',
					borderWidth: 2,
					pointRadius: 4,
					pointHoverRadius: 6,
				},
				{
					label: 'CISC',
					data: [9, 3, 3, 9, 4],
					backgroundColor: 'rgba(71, 85, 105, 0.2)',
					borderColor: 'rgba(71, 85, 105, 1)',
					pointBackgroundColor: 'rgba(71, 85, 105, 1)',
					borderWidth: 2,
					pointRadius: 4,
					pointHoverRadius: 6,
				},
			],
		};

		setChartData(data);
	}, []);

	if (!chartData) return <div>Laden...</div>;

	return (
		<div className="w-full max-w-2xl mx-auto bg-white p-6 rounded-lg border border-slate-200">
			<Radar
				data={chartData}
				options={{
					responsive: true,
					maintainAspectRatio: true,
					scales: {
						r: {
							angleLines: { color: 'rgba(0, 0, 0, 0.1)' },
							grid: { color: 'rgba(0, 0, 0, 0.1)' },
							pointLabels: {
								font: { family: "'Inter', sans-serif", size: 11 },
								color: '#475569',
							},
							ticks: { display: false, min: 0, max: 10 },
						},
					},
					plugins: {
						legend: {
							position: 'bottom',
							labels: { font: { family: "'Inter', sans-serif" } },
						},
						tooltip: {
							callbacks: {
								label: function (context) {
									let label = context.dataset.label || '';
									if (label) label += ': ';
									if (context.dataIndex === 0) label += context.raw > 5 ? 'Hoch (Mächtige Befehle)' : 'Niedrig (Einfache Befehle)';
									if (context.dataIndex === 1) label += context.raw > 5 ? 'Viele (Effizienz)' : 'Wenige';
									if (context.dataIndex === 4) label += context.raw > 5 ? 'Schnell (~1 Taktzyklus)' : 'Langsam (Mehrere Taktzyklen)';
									return label;
								},
							},
						},
					},
				}}
			/>
			<div className="mt-4 text-sm text-slate-600 text-center">Vergleich konzeptioneller Eigenschaften von RISC und CISC Architekturen (Skala 1-10)</div>
		</div>
	);
}
