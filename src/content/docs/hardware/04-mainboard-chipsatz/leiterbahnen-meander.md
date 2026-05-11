---
title: Leiterbahnen & Meander
description: Physikalische Verbindungen auf dem Mainboard
---

# Leiterbahnen & Meander

## 🔗 Leiterbahnen

Leiterbahnen sind die **elektrischen Verbindungen** auf dem Mainboard. Sie verbinden:

- CPU mit RAM
- RAM mit Chipsatz
- Chipsatz mit allen Peripherie-Komponenten

### Struktur

Ein modernes Mainboard hat **8-16 Lagen** (Layers):

```
Layer 1:    Signal
Layer 2:    Ground Plane
Layer 3:    Signal
Layer 4:    Power Plane
...
```

**Größe:** Spuren von 0,1-1 mm Breite, mit Abständen im μm-Bereich

---

## 🌊 Meander (Serpentinen-Verlauf)

Meander sind **absichtlich gezackte Leiterbahnen** zur Laufzeit-Abstimmung.

### Warum Meander?

Bei **parallelen Bussen** (z.B. 64-Bit Datenbus):

```
Normales Layout:
CPU ──┬── D0 ──── RAM
      ├── D1 ──── RAM
      ├── D2 ──── RAM
      └── D3 ──── RAM

Problem: Unterschiedliche Laufzeiten!
D0 könnte 0,1ns früher ankommen als D3
```

**Problem:** Wenn Signale zu unterschiedlichen Zeiten ankommen, ist der Datenwort ungültig

### Lösung: Meander

```
CPU ──┬── D0 ═══════════════════ RAM
      ├── D1 ════════════════════ RAM (meandert)
      ├── D2 ═════════════════════ RAM (noch mehr)
      └── D3 ═════════════════════ RAM (am meisten)

Alle Signale kommen jetzt gleichzeitig an!
```

### Clock Skew

Der Begriff für diesen Laufzeit-Unterschied:

- **Clock Skew:** Zeitlicher Versatz zwischen Signalen
- **Zero Skew Timing:** Alle Signale synchron

**Moderner Ansatz:** Dedicated Clock Lines mit strikter Kontrolle

---

## ⚡ Signal Integrity

Weitere Probleme bei hohen Frequenzen:

### Reflektionen

Signale reflektieren am Ende von Leiterbahnen (wenn nicht terminiert)

**Lösung:** Terminatoren (Widerstände am Ende)

### Crosstalk

Benachbarte Leiterbahnen beeinflussen sich gegenseitig

**Lösung:** Großzügige Abstände, Ground-Plane dazwischen

### EMI (Elektromagnetische Interferenz)

Hochfrequente Signale strahlen Energie ab

**Lösung:** Abschirmung, ordnungsgemäße Layout-Praktiken

---

## 🔗 Weiterführende Links

- [Mainboard & Chipsatz](/04-mainboard-chipsatz/)
- [Timer-IC & CMOS-Batterie](/04-mainboard-chipsatz/timer-batterie/)
- [Chipsatz Evolution](/04-mainboard-chipsatz/chipsatz-evolution/)
