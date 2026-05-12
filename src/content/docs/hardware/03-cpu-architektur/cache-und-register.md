---
title: Cache & Register
description: Die schnellsten Speicher der CPU
---

Register und Cache sind die kritischsten Speicher im Computer. Sie überbrücken die Lücke zwischen dem ultraschnellen CPU-Kern und dem langsamen RAM.

## ⚡ Register

### Definition

Register sind **ultraschnelle, kleine Speicher direkt in der CPU**.

### Eigenschaften

- **Größe:** 8-256 Bit (abhängig von CPU-Architektur)
- **Anzahl:** Typisch 8-32 physikalische Register
- **Zugriff:** 0,1-1 Nanosekunde (sofort!)
- **Flüchtig:** Ja, Daten weg bei Stromausfall

### Registertypen

#### Allgemein-Purpose Register

- Speicherung von Operanden und Zwischenergebnissen
- In RISC: Alle Register gleichberechtigt
- In CISC: Einige spezialisiert (z.B. AX für Accumulator)

#### Spezial-Register

- **Program Counter (PC):** Zeigt auf nächsten Befehl
- **Stack Pointer (SP):** Zeigt auf Stack-Ende
- **Flag Register:** Speichert Bedingungen (Zero, Carry, etc.)
- **Base Pointer (BP):** Für Stack-Frames

### Beispiel x86-Architektur

```
32-Bit Register (x86):
┌─────────────────────────┐
│ EAX (Accumulator)       │  Allgemein
│ EBX (Base)              │  Allgemein
│ ECX (Counter)           │  Allgemein
│ EDX (Data)              │  Allgemein
│ ESI (Source Index)      │  Spezialisiert
│ EDI (Destination Index) │  Spezialisiert
│ EBP (Base Pointer)      │  Stack-Verwaltung
│ ESP (Stack Pointer)     │  Stack-Verwaltung
└─────────────────────────┘
```

---

## 💾 Cache

### Warum Cache nötig ist

```
CPU-Kern:    ~ 1 ns Zugriff (Takt)
L1-Cache:    ~ 4 ns Zugriff (4× langsamer)
L2-Cache:    ~ 10 ns Zugriff (10× langsamer)
L3-Cache:    ~ 40-75 ns Zugriff (40-75× langsamer)
RAM:         ~ 100 ns Zugriff (100× langsamer!)
```

**Ohne Cache:** CPU müsste auf RAM warten = gigantische Zeitverschwendung

### Cache-Hierarchie

```
┌──────────────────┐
│ L1 Cache         │  32 KB (pro Kern)
│ (split I + D)    │  ~4 ns
├──────────────────┤
│ L2 Cache         │  256 KB - 1 MB (pro Kern)
│                  │  ~10-20 ns
├──────────────────┤
│ L3 Cache         │  8-20 MB (geteilt)
│                  │  ~40-75 ns
├──────────────────┤
│ RAM (DDR4/DDR5)  │  8-64 GB
│                  │  ~100 ns
└──────────────────┘
```

### L1 Cache (Level 1)

- **Größe:** 32-64 KB pro CPU-Kern
- **Split:** Separate Instruction Cache + Data Cache
- **Latenz:** ~1-4 Taktzyklen
- **Assoziativity:** 8-way (besser als L2/L3)

### L2 Cache (Level 2)

- **Größe:** 256 KB - 1 MB pro CPU-Kern
- **Unified:** Gemischt (Instruktionen und Daten)
- **Latenz:** ~10-20 Taktzyklen
- **Assoziativity:** 4-way

### L3 Cache (Level 3)

- **Größe:** 8-20 MB (großer)
- **Shared:** Geteilt zwischen allen CPU-Kernen
- **Latenz:** ~40-75 Taktzyklen
- **Assoziativity:** 12-20 way

---

## 🔄 Cache-Operationen

### Cache Hit

Wenn gesuchte Daten im Cache sind:

- **Schnell:** Daten sofort verfügbar
- **Rate:** Typisch 90-99% Hit-Rate mit gutem Code

### Cache Miss

Wenn gesuchte Daten nicht im Cache sind:

- **Langsam:** RAM-Zugriff nötig
- **Penalty:** 50-200 Taktzyklen Verzögerung

### Replacement Policy

Wenn Cache voll ist, welche Daten verdrängen?

- **LRU (Least Recently Used):** Am längsten nicht benutzt
- **FIFO (First In, First Out):** Älteste zuerst
- **Random:** Zufällig (überraschend oft gut!)

---

## 💡 Optimierung

### Temporal Locality

Gleiche Daten werden bald wieder benutzt

- **Strategie:** Im Cache behalten

### Spatial Locality

Nahe beieinanderliegende Daten werden oft zusammen genutzt

- **Strategie:** Größere Blocks prefetchen

### Praktische Tipps

1. **Loop-Unrolling:** Weniger Cache-Misses
2. **Array vs. Linked List:** Array besser (Locality)
3. **Predictable Access Patterns:** Prefetching möglich

---

## 🔗 Weiterführende Links

- [CPU & Architektur](/03-cpu-architektur/)
- [CPU-Komponenten](/03-cpu-architektur/cpu-komponenten/)
- [Speicherhierarchie](/04-mainboard-chipsatz/speicherhierarchie/)
