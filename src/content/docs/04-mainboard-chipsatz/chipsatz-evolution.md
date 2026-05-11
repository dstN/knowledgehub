---
title: Chipsatz Evolution
description: Von Northbridge/Southbridge zu modernen Integrated Hubs
---

# Chipsatz Evolution

Der **Chipsatz** hat sich über Jahrzehnte massiv verändert. Diese Seite zeigt die Entwicklung.

## 📊 Phase 1: Northbridge/Southbridge (1990er-2000er)

### Architektur

```
CPU
├─ FSB (100-133 MHz)
└─► Northbridge (schnell)
    ├─ RAM ◄──► (DDR266-DDR400)
    ├─ PCI-Express (x16)
    └─► DMI (2-4 Gbps)
        └─► Southbridge (langsam)
            ├─ USB 1.1/2.0
            ├─ SATA (1,5 Gbps)
            ├─ PATA (IDE)
            ├─ Audio
            └─ Ethernet
```

### Charakteristiken

- **Northbridge:** "Fast Chipset"
  - Nahe bei CPU
  - Hohe Latenz bei RAM-Zugriff
  
- **Southbridge:** "Legacy Chipset"
  - Weit weg von CPU
  - USB, Audio, SATA

### Problem

- Zwei Chips nötig = Komplexität
- Bottleneck zwischen Nord und Süd

---

## 📊 Phase 2: MCH + ICH (2000er-2010er)

**MCH:** Memory Controller Hub (ersetzt Northbridge)  
**ICH:** I/O Controller Hub (ersetzt Southbridge)

### Verbesserung

- Memory Controller wird in **die CPU selbst** integriert
- Schnellere RAM-Zugriffe (direkter von CPU)
- MCH/ICH über DMI verbunden

---

## 📊 Phase 3: PCH (2010er-heute)

**PCH:** Platform Controller Hub (alles in einem)

### Moderne Architektur

```
CPU (mit integriertem Memory Controller)
├─ DMI 4.0 / Thunderbolt (bis 32 Gbps)
└─► PCH (Single Chip!)
    ├─ USB 3.2 (bis 20 Gbps)
    ├─ SATA (6 Gbps)
    ├─ NVMe/M.2 (PCIe 4.0 bis 64 Gbps)
    ├─ PCIe Lanes
    ├─ Audio
    ├─ Ethernet (bis 10 GbE)
    └─ WiFi/BT
```

### Vorteile

✅ **Ein Chip:** Weniger Komplexität  
✅ **Schneller:** Integrierter Memory Controller  
✅ **Energieeffizient:** Weniger Komponenten  
✅ **Moderne Standards:** USB 3.2, PCIe 4.0/5.0

---

## 📊 Phase 4: Thinker/Tiger Lakes (2020er)

Noch stärkere Integration:

- **Compute Stack:** CPU + GPU + Memory Controller + PCH zusammengefasst
- **7nm/5nm Prozesse:** Alles auf einem Chip möglich
- **Thunderbolt 4:** Ultimative Konnektivität

### Beispiel: Apple M1/M2

```
Ein Monolith-Chip mit:
├─ CPU (8 Kerne)
├─ GPU (10 Kerne)
├─ Neural Engine
├─ Media Engines
└─ Alle Controller integriert
```

---

## 📈 Entwicklungstrend

| Ära | Architektur | Chips | Effizienz | Komplexität |
|-----|-------------|-------|-----------|------------|
| 1990er | NB+SB | 2+ | Niedrig | Hoch |
| 2000er | MCH+ICH | 2-3 | Mittel | Hoch |
| 2010er | PCH | 1-2 | Hoch | Mittel |
| 2020er | SoC | 1 | Sehr hoch | Niedrig |

**Trend:** Alles an Bord, weniger separate Komponenten!

---

## 🔗 Weiterführende Links

- [Mainboard & Chipsatz](/04-mainboard-chipsatz/)
- [Timer-IC & CMOS-Batterie](/04-mainboard-chipsatz/timer-batterie/)
- [Speicherhierarchie](/04-mainboard-chipsatz/speicherhierarchie/)
