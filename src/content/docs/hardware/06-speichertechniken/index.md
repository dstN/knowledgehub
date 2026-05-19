---
title: Speichertechniken
description: Von Lochkarten bis zur SSD – historische Entwicklung der Speichermedien, Funktionsweise optischer Datenträger und der Vergleich moderner Speichertechnologien.
---

Speichermedien sind das fundamentale Gedächtnis eines jeden Computersystems. Ihre Entwicklung über Jahrzehnte spiegelt den technologischen Fortschritt der IT-Branche wider – von mechanischen Lochkarten bis hin zu milliardenteuren NAND-Flash-Chips.

## Historische Meilensteine der Speichermedien

Die Reise moderner Datenspeicherung begann lange vor dem Personal Computer. Jede Generation löste ein spezifisches Problem ihrer Zeit und legte damit das Fundament für die nächste Technologie.

| Jahrzehnt | Medium | Prinzip | Bedeutung |
|-----------|--------|---------|-----------|
| 18.–20. Jhd. | **Lochkarten** | Mechanische Perforation | Frühe Tabelliermaschinen und erste Computer |
| 1930er/40er | **Magnetische Trommel** | Rotierende magnetisierte Trommel | Erste praktische Speicher für Elektronik-Rechner |
| 1950er | **Magnetband** | Lineare magnetische Beschichtung | Backup-Medium & Primärspeicher in Großrechnern |
| 1950er | **Kernspeicher** | Gitter magnetischer Ferrit-Kerne | Erster großer Direktzugriffsspeicher (RAM) |
| 1970er | **Diskette (Floppy)** | Flexible magnetisierte Scheibe | Portabler Datenaustausch, System-Boot |
| 1950er–60er | **Festplattenlaufwerk (HDD)** | Rotierende magnetische Platten | Deutlich höhere Kapazität & Zugriffsgeschwindigkeit |
| 1950er–60er | **Transistor-RAM** | Halbleiter-Transistoren | Technologische Basis für modernes DRAM |

> **Kernspeicher (1950er):** Der erste weitverbreitete RAM-Typ der Computergeschichte. Kleine magnetische Ferritringe waren in einem zweidimensionalen Gitter angeordnet – jeder Ring speicherte ein einzelnes Bit. Das Umpolen des Magnetfelds durch einen stromdurchflossenen Draht realisierte Schreib- und Lesezugriffe.

---

## Optische Datenträger

Optische Medien nutzen **Laserlicht** zur Datenspeicherung. Die Oberfläche des Datenträgers besitzt eine spiralförmige Spur aus mikroskopisch kleinen Vertiefungen (**Pits**) und flachen Bereichen (**Lands**).

### Funktionsweise des Lesevorgangs

1. Ein Laserstrahl tastet die rotierende Scheibenoberfläche spiralförmig von innen nach außen ab.
2. **Übergang Pit ↔ Land:** Das Licht wird gestreut → Signal interpretiert als Pegelwechsel (entspricht Bit `1`).
3. **Ebene Fläche (Land oder Pit-Boden):** Das Licht wird direkt reflektiert → keine Pegelwechsel (entspricht Bit `0`).
4. Eine **Photodiode** misst die Intensität der Reflexionen und wandelt das Signal in digitale Daten um.

### Vergleich der Standards: CD, DVD, Blu-ray

| Kriterium | CD | DVD | Blu-ray |
|-----------|----|-----|---------|
| Laser-Wellenlänge | 780 nm (Infrarot) | 650 nm (Rot) | 405 nm (Blau) |
| Typische Kapazität | **700 MB** | **4,7 GB** | **25 GB** |
| Spurabstand | 1,6 µm | 0,74 µm | 0,32 µm |

> **Merksatz:** Je kürzer die Wellenlänge des Lasers, desto feiner lassen sich Pits und Lands auflösen – und desto höher ist die erreichbare Speicherdichte.

### Varianten optischer Medien

- **ROM (Read-Only Memory):** Werkseitig durch Pressen hergestellt. Daten sind permanent und unveränderbar. Beispiele: Audio-CD, Kauf-DVD, Spiele-Disc.
- **R (Recordable):** Einmalig beschreibbar. Ein Schreib-Laser verändert eine organische Farbstoffschicht dauerhaft und erzeugt so künstliche Pits.
- **RW (Rewritable):** Mehrfach wiederbeschreibbar. Nutzt eine **Phase-Change-Schicht**, die durch gezielte Wärmezufuhr zwischen einem *kristallinen* (stark reflektierend) und einem *amorphen* (schwach reflektierend) Zustand wechseln kann.

### Bewertung optischer Speicher

| | Vorteile | Nachteile |
|-|---------|-----------|
| **Kosten** | Sehr günstig in der Massenproduktion | Lesegeräte werden immer seltener verbaut |
| **Portabilität** | Leicht, kompakt, kein Akku nötig | Empfindlich gegen Kratzer und UV-Strahlung |
| **Langlebigkeit** | Jahrzehnte bei kühler/dunkler Lagerung | Datenverfall durch Oxidation der Metallschicht möglich |
| **Geschwindigkeit** | — | Deutlich langsamer als HDD/SSD |

---

## Evolution zu modernen Speichertechnologien

Die historischen und optischen Medien wurden in modernen IT-Infrastrukturen weitgehend durch hocheffiziente Halbleiterspeicher verdrängt:

### DRAM (Dynamic Random Access Memory)

**Volatiler** Arbeitsspeicher – Daten gehen beim Abschalten des Stroms verloren. DRAM-Zellen bestehen je aus einem Transistor und einem Kondensator, der sich durch Leckströme entlädt und daher kontinuierlich **aufgefrischt** (refreshed) werden muss. DRAM ist der Standard-RAM-Typ in Computern und Smartphones.

### NAND-Flash

**Nicht-volatiler** Halbleiterspeicher – Daten bleiben ohne Stromversorgung erhalten. Basis für USB-Sticks, Speicherkarten (SD, microSD) und SSDs. Daten werden in Floating-Gate-Transistoren als Ladungen gespeichert.

### Solid-State-Drives (SSDs)

SSDs kombinieren NAND-Flash-Chips mit einem dedizierten Controller-Chip. Im Vergleich zur HDD:

| Kriterium | HDD | SSD |
|-----------|-----|-----|
| Mechanik | Rotierende Scheiben, Schreib-/Lesekopf | Keine beweglichen Teile |
| Zugriffszeit | 5–10 ms | < 0,1 ms |
| Sequenzieller Durchsatz | 100–200 MB/s | 500–7.000 MB/s (NVMe) |
| Stoßfestigkeit | Gering | Hoch |
| Lebensdauer | Mechanischer Verschleiß | Begrenzte Schreib-Zyklen (TBW) |
| Kosten/GB | Günstig | Teurer (aber fallende Preise) |
