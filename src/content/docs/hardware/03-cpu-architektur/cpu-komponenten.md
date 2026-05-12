---
title: CPU-Komponenten
description: Detaillierter Überblick über CPU-Bauteile
---

Dieser Artikel bietet einen detaillierten Überblick über alle wichtigen Komponenten einer modernen CPU.

## 🧩 Übersicht der Komponenten

### Recheneinheiten (Execution Units)

#### ALU (Arithmetic Logic Unit)

- Mathematische Operationen: +, -, ×, ÷, Modulo
- Logische Operationen: AND, OR, NOT, XOR
- Bitverschiebungen: <<, >>
- Vergleichsoperationen: <, >, ==, !=

#### FPU (Floating Point Unit)

- Spezialisten für Dezimal-Arithmetik
- IEEE 754 Standard
- Nicht auf allen älteren CPUs (z.B. Intel 386)
- Moderne CPUs: immer integriert
- Leistung: FLOPS (Floating Point Operations Per Second)

### Control Path

#### Fetching (Befehl holen)

1. Program Counter (PC) zeigt auf nächsten Befehl
2. Instruktion aus L1-Cache oder RAM holen
3. PC inkrementieren (für nächste Instruktion)

#### Decoding (Befehl dekodieren)

1. IDU erkennt Befehlstyp
2. Mikrocode wird generiert
3. Operanden-Adressen bestimmt

#### Execution (Befehl ausführen)

1. Daten von Register/RAM laden
2. Operation in ALU/FPU durchführen
3. Ergebnis speichern

#### Write-Back (Ergebnis zurückschreiben)

1. Register aktualisieren
2. Flags setzen (für bedingte Sprünge)

---

## 📦 Speicherkomponenten

### Register (CPU-intern)

- **Größe:** 8-256 Bit (abhängig von Architektur)
- **Anzahl:** Typisch 8-32 verschiedene Register
- **Zweck:** Direkter Zugriff durch ALU
- **Typ:** Allgemein, Spezial (PC, Stack Pointer, Flags)

### L1-Cache

- **Size:** 32-64 KB pro Kern
- **Latenz:** ~1-4 Taktzyklen
- **Getrennt:** Instruction Cache + Data Cache
- **Write Policy:** Write-Back oder Write-Through

### L2/L3-Cache

- **Size:** L2: 256 KB - 1 MB, L3: 8-20 MB
- **Latenz:** L2 ~10-20 Zyklen, L3: ~40-75 Zyklen
- **Shared:** L3 oft zwischen allen Kernen geteilt

---

## ⚡ Taktung & Pipelining

### Taktfrequenz

- Gemessen in GHz (Gigahertz)
- Moderne CPUs: 2-5 GHz Standard
- Höher = schneller, aber auch wärmer

### Pipelining

Befehle werden in Stufen aufgeteilt:

```
Fetch → Decode → Execute → Memory → Write-Back
```

**Vorteil:** Während Befehl 1 in ALU ist, wird Befehl 5 bereits gefetcht

**Problem:** Pipeline-Stalls bei Branches

---

## 🔗 Weiterführende Links

- [CPU & Architektur](/03-cpu-architektur/)
- [Cache & Register](/03-cpu-architektur/cache-und-register/)
- [RISC vs. CISC](/03-cpu-architektur/risc-vs-cisc/)
