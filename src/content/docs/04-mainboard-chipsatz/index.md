---
title: Mainboard & Chipsatz
description: Die Kommunikationszentrale des IT-Systems
---

import MemoryHierarchyChart from '@/components/MemoryHierarchyChart.jsx';

# Mainboard & Chipsatz

Das **Mainboard** verbindet physisch und elektronisch alle Komponenten eines Computers. Es ist die "Kommunikationszentrale" des Systems.

## 🖨️ Was ist ein Mainboard?

Das Mainboard (auch: Motherboard, PCB) ist eine **Leiterplatte**, auf der alle Komponenten miteinander verbunden werden:

- CPU (Prozessor)
- RAM (Arbeitsspeicher)
- Festplatte / SSD
- Grafikkarte
- Soundkarte
- Netzwerk-Interface
- USB-Ports
- Audio-Anschlüsse

## 🔌 Komponenten des Mainboards

### BIOS/UEFI Speicher

- Flash-EEPROM Chip
- Speichert die Firmware
- Wird beim Hochfahren geladen

### CMOS-Batterie

- Kleine Lithium-Batterie (3V)
- Versorgt RTC (Real Time Clock)
- Hält Systemzeit auch ohne Strom

### Taktgeber (Oscillator)

- Quartz-Oszillator (z.B. 100 MHz)
- Erzeugt Master-Takt für ganzes System
- Basis für alle Synchronisation

### Northbridge / Southbridge

**Alte Architektur (Klassisch):**

- Northbridge: Schnelle Komponenten (RAM, Grafik)
- Southbridge: Langsame Komponenten (USB, SATA, Audio)

**Moderne Architektur:**

- PCH (Platform Controller Hub) ersetzt beide
- Alles in einem Chip integriert
- Weniger Latenz

### Spannungsregler (VRM)

- Konvertiert 12V Netzteil → 1-2V für CPU
- Mehrere Phasen für Stabilität
- Wichtig für Übertaktung

---

## 🔄 Bussysteme

### FSB / QPI / DMI

**FSB (Front Side Bus - klassisch):**

- Verbindet CPU mit Northbridge
- Typisch 133-200 MHz

**QPI/UPI (Intel):**

- Point-to-Point statt Bus
- Schneller als FSB
- Proprietär (Intel-spezifisch)

**DMI (Direct Media Interface):**

- Moderne Standard
- Verbindet CPU mit PCH
- Asymmetrisch (schnell auf/ab)

### PCIe (PCI Express)

- Serielle High-Speed Verbindung
- Generation: PCIe 3.0 (8 GT/s) bis PCIe 6.0 (64 GT/s)
- Lanes: x1, x4, x8, x16 (16× schneller)

---

## 📊 Speicherhierarchie Visualisierung

<MemoryHierarchyChart client:load />

---

## 🔗 Weiterführende Links

- [Leiterbahnen & Meander](/04-mainboard-chipsatz/leiterbahnen-meander/)
- [Timer-IC & CMOS-Batterie](/04-mainboard-chipsatz/timer-batterie/)
- [Flash-EEPROM & UEFI](/04-mainboard-chipsatz/flash-uefi/)
- [Chipsatz Evolution](/04-mainboard-chipsatz/chipsatz-evolution/)
- [Speicherhierarchie](/04-mainboard-chipsatz/speicherhierarchie/)
