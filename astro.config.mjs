// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	integrations: [
		react(),
		starlight({
			title: 'IT-Hardware Studienführer',
			description: 'Interaktiver Studienführer zu Hardware-Grundlagen für IT-Azubis',
			social: [{ icon: 'github', label: 'GitHub Repository', href: 'https://github.com' }],
			sidebar: [
				{
					label: '🏠 Start',
					slug: 'index',
				},
				{
					label: '01 Grundlagen',
					items: [
						{ label: 'Übersicht', slug: '01-grundlagen' },
						{ label: 'Evolution der Datenverarbeitung', slug: '01-grundlagen/evolution-datenverarbeitung' },
						{ label: 'Analog vs. Digital', slug: '01-grundlagen/analog-digital' },
						{ label: 'DV-Geräte Kategorien', slug: '01-grundlagen/dv-geraete-kategorien' },
					],
				},
				{
					label: '02 EVA-Prinzip',
					items: [
						{ label: 'Übersicht', slug: '02-eva-prinzip' },
						{ label: 'Eingabeeinheit', slug: '02-eva-prinzip/eingabeeinheit' },
						{ label: 'Verarbeitungseinheit', slug: '02-eva-prinzip/verarbeitungseinheit' },
						{ label: 'Speichereinheit', slug: '02-eva-prinzip/speichereinheit' },
						{ label: 'Ausgabeeinheit', slug: '02-eva-prinzip/ausgabeeinheit' },
					],
				},
				{
					label: '03 CPU & Architektur',
					items: [
						{ label: 'Übersicht', slug: '03-cpu-architektur' },
						{ label: 'CPU-Komponenten', slug: '03-cpu-architektur/cpu-komponenten' },
						{ label: 'RISC vs. CISC', slug: '03-cpu-architektur/risc-vs-cisc' },
						{ label: 'Cache & Register', slug: '03-cpu-architektur/cache-und-register' },
					],
				},
				{
					label: '04 Mainboard & Chipsatz',
					items: [
						{ label: 'Übersicht', slug: '04-mainboard-chipsatz' },
						{ label: 'Leiterbahnen & Meander', slug: '04-mainboard-chipsatz/leiterbahnen-meander' },
						{ label: 'Timer-IC & CMOS-Batterie', slug: '04-mainboard-chipsatz/timer-batterie' },
						{ label: 'Flash-EEPROM & UEFI', slug: '04-mainboard-chipsatz/flash-uefi' },
						{ label: 'Chipsatz Evolution', slug: '04-mainboard-chipsatz/chipsatz-evolution' },
						{ label: 'Speicherhierarchie', slug: '04-mainboard-chipsatz/speicherhierarchie' },
					],
				},
				{
					label: '05 Glossar & Wissen',
					slug: '05-glossar',
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
