// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	integrations: [
		react(),
		starlight({
			title: 'CaveHub',
			description: 'Lernplattform für Fachinformatiker – Umschulung',
			social: [{ icon: 'github', label: 'GitHub Repository', href: 'https://github.com' }],
			sidebar: [
				{
					label: 'Start',
					slug: 'index',
				},
				{
					label: 'Systemtechnik',
					items: [
						{
							label: 'Hardware',
							items: [
								{
									label: '01 Grundlagen',
									items: [
										{ label: 'Übersicht', slug: 'hardware/01-grundlagen' },
										{ label: 'Evolution der Datenverarbeitung', slug: 'hardware/01-grundlagen/evolution-datenverarbeitung' },
										{ label: 'Analog vs. Digital', slug: 'hardware/01-grundlagen/analog-digital' },
										{ label: 'DV-Geräte Kategorien', slug: 'hardware/01-grundlagen/dv-geraete-kategorien' },
									],
								},
								{
									label: '02 EVA-Prinzip',
									items: [
										{ label: 'Übersicht', slug: 'hardware/02-eva-prinzip' },
										{ label: 'Eingabeeinheit', slug: 'hardware/02-eva-prinzip/eingabeeinheit' },
										{ label: 'Verarbeitungseinheit', slug: 'hardware/02-eva-prinzip/verarbeitungseinheit' },
										{ label: 'Speichereinheit', slug: 'hardware/02-eva-prinzip/speichereinheit' },
										{ label: 'Ausgabeeinheit', slug: 'hardware/02-eva-prinzip/ausgabeeinheit' },
									],
								},
								{
									label: '03 CPU & Architektur',
									items: [
										{ label: 'Übersicht', slug: 'hardware/03-cpu-architektur' },
										{ label: 'CPU-Komponenten', slug: 'hardware/03-cpu-architektur/cpu-komponenten' },
										{ label: 'RISC vs. CISC', slug: 'hardware/03-cpu-architektur/risc-vs-cisc' },
										{ label: 'Cache & Register', slug: 'hardware/03-cpu-architektur/cache-und-register' },
									],
								},
								{
									label: '04 Mainboard & Chipsatz',
									items: [
										{ label: 'Übersicht', slug: 'hardware/04-mainboard-chipsatz' },
										{ label: 'Leiterbahnen & Meander', slug: 'hardware/04-mainboard-chipsatz/leiterbahnen-meander' },
										{ label: 'Timer-IC & CMOS-Batterie', slug: 'hardware/04-mainboard-chipsatz/timer-batterie' },
										{ label: 'Flash-EEPROM & UEFI', slug: 'hardware/04-mainboard-chipsatz/flash-uefi' },
										{ label: 'Chipsatz Evolution', slug: 'hardware/04-mainboard-chipsatz/chipsatz-evolution' },
										{ label: 'Speicherhierarchie', slug: 'hardware/04-mainboard-chipsatz/speicherhierarchie' },
									],
								},
								{
									label: '05 Glossar & Wissen',
									slug: 'hardware/05-glossar',
								},
							],
						},
					],
				},
				{
					label: 'Netzwerke & Kommunikation',
					items: [
						{
							label: 'OSI-Modell',
							items: [
								{ label: 'Übersicht', slug: 'osi' },
								{ label: 'Schicht 1 – Bitübertragung', slug: 'osi/01-bitübertragung' },
								{ label: 'Schicht 2 – Sicherung', slug: 'osi/02-sicherung' },
								{ label: 'Schicht 3 – Vermittlung', slug: 'osi/03-vermittlung' },
								{ label: 'Schicht 4 – Transport', slug: 'osi/04-transport' },
								{ label: 'Schicht 5 – Sitzung', slug: 'osi/05-sitzung' },
								{ label: 'Schicht 6 – Darstellung', slug: 'osi/06-darstellung' },
								{ label: 'Schicht 7 – Anwendung', slug: 'osi/07-anwendung' },
								{ label: 'Glossar', slug: 'osi/glossar' },
							],
						},
						{
							label: '01 Subnetting & CIDR',
							items: [
								{ label: 'Übersicht & Subnetting', slug: 'netzwerke/01-subnetting' },
								{ label: 'CIDR – Classless Inter-Domain Routing', slug: 'netzwerke/01-subnetting/cidr' },
								{ label: 'Schritt-für-Schritt-Berechnung', slug: 'netzwerke/01-subnetting/berechnung' },
							],
						},
					],
				},
			],
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'Deutsch',
					lang: 'de',
				},
			},
		}),
	],
	output: 'static',
});
