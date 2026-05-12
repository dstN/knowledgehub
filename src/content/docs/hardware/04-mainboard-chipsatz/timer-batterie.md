---
title: Timer-IC & CMOS-Batterie
description: Zeitmessung und Stromversorgung für Echtzeituhr
---

## ⏰ Timer-IC (Oscillator)

Das **Timer-IC** ist der "Herzschlag" des Computers.

### Funktion

- Erzeugt **Master-Takt** für ganzes System (typisch 100 MHz oder 200 MHz)
- Dieser Takt wird durch PLL (Phase-Locked Loop) zu höheren Frequenzen multipliziert
- Alle anderen Komponenten synchronisieren sich nach diesem Takt

### Beispiel

```
Timer: 100 MHz
  ↓ (PLL Multiplizierung × 50)
CPU Takt: 5 GHz
  ↓ (Divider)
RAM Takt: 3200 MHz
  ↓ (Divider)
PCIe Takt: 250 MHz
```

### Wichtigkeit

**Ohne Timer-IC:**

- Keine Synchronisation zwischen Komponenten
- Daten ankommen zur falschen Zeit
- System funktioniert gar nicht!

---

## 🔋 CMOS-Batterie

Die **CMOS-Batterie** ist eine kleine Lithium-Knopfzelle (Typ CR2032).

### Aufgaben

1. **RTC (Real Time Clock) mit Strom versorgen**
   - Echtzeituhr läuft weiter, auch ohne Netzteil
   - Speichert aktuelle Zeit/Datum

2. **CMOS-RAM mit Strom versorgen**
   - Speichert BIOS-Einstellungen (Zeit, Bootreihenfolge, etc.)
   - Volatile RAM, braucht Strom zur Erhaltung

### Spannung & Kapazität

- **Spannung:** 3V
- **Kapazität:** ~150-200 mAh
- **Lebensdauer:** 5-10 Jahre (je nach Nutzung)

### Was passiert, wenn Batterie leer ist?

```
1. Systemzeit wird nicht aktualisiert
2. BIOS-Einstellungen gehen verloren
3. Neuer Boot: "Systemzeit ungültig"
4. Hinweis: Batterie muss ersetzt werden
```

---

## 🔌 Zusammenspiel

```
┌─────────────────────────────┐
│ Netzteil (12V)              │
│ Spannungsregler → CMOS (3V) │
└──────────┬──────────────────┘
           │
    ┌──────▼──────────────┐
    │  CMOS-Batterie      │  (Backup)
    └─────────────────────┘
           │
    ┌──────▼──────────────────────┐
    │ RTC + CMOS-RAM (64 Byte)    │
    │ • Echtzeituhr               │
    │ • BIOS-Einstellungen        │
    └─────────────────────────────┘
```

---

## 🔗 Weiterführende Links

- [Mainboard & Chipsatz](/04-mainboard-chipsatz/)
- [Flash-EEPROM & UEFI](/04-mainboard-chipsatz/flash-uefi/)
- [Chipsatz Evolution](/04-mainboard-chipsatz/chipsatz-evolution/)
