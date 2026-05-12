---
title: Speicherhierarchie
description: Geschwindigkeit vs. Kapazität - Das Speicher-Dilemma
---

## 📐 Das Speicher-Dilemma

Die Informatik steht vor einem fundamental Konflikt:

- **Schnelle Speicher:** Teuer, klein
- **Große Speicher:** Billig, langsam

### Auswahl

```
Option A: Alles aus schnellem Speicher (Register)
Kosten: ~1000 Euro pro GB
Kapazität: Max. 1 MB möglich
→ Nicht praktizierbar

Option B: Alles aus langsamem Speicher (Festplatte)
Kosten: ~0,05 Euro pro GB
Kapazität: 10+ TB möglich
Nachteil: CPU ist 1000× schneller als Festplatte
→ CPU wartet ständig
```

### Lösung: Hierarchie

**Nutze mehrere Speicherebenen!**

```
Register (ultraschnell) ←─── CPU arbeitet damit
     ↓
L1 Cache (schnell)
     ↓
L2 Cache (mittel-schnell)
     ↓
L3 Cache (mittel)
     ↓
RAM (langsam relativ zu CPU)
     ↓
SSD (sehr langsam)
     ↓
Festplatte (extrem langsam)
```

---

## ⚡ Speichergeschwindigkeiten

### Absolute Zugriffzeiten

```
Register:    0,1 ns   (1 CPU-Taktzyklus @ 10 GHz)
L1 Cache:    1 ns     (10 Taktzyklen)
L2 Cache:    10 ns    (100 Taktzyklen)
L3 Cache:    40 ns    (400 Taktzyklen)
RAM (DDR5):  60-80 ns (600-800 Taktzyklen!)
SSD:         100 μs   (1.000.000 Taktzyklen!)
HDD:         5 ms     (50.000.000 Taktzyklen!)
```

### Relativer Vergleich

```
Register:    1×
L1 Cache:    10×
L2 Cache:    100×
L3 Cache:    400×
RAM:         600×
SSD:         1.000.000×
HDD:         50.000.000×
```

**Fazit:** RAM-Zugriff ist bereits 600× langsamer als Register!

---

## 📊 Typische Speicherkonfiguration (2024)

```
Intel i9-14900K:
├─ Register: 512 Bit (64 Bytes)
├─ L1 Cache: 384 KB (32 KB × 12 Kerne)
├─ L2 Cache: 7.5 MB (640 KB × 12 Kerne)
├─ L3 Cache: 36 MB (geteilt)
├─ RAM: 192 GB (DDR5-6400)
├─ SSD: 2 TB (NVMe PCIe 4.0)
└─ Externe: 100+ TB möglich
```

---

## 🔄 Cache-Prinzipien

### Inclusion Property

L3-Cache enthält alles aus L2, L2 enthält alles aus L1

```
Register ⊂ L1 ⊂ L2 ⊂ L3 ⊂ RAM ⊂ SSD
```

### Write Policies

**Write-Through:**

- Daten in Cache UND RAM geschrieben
- Langsamer, sicherer

**Write-Back:**

- Daten nur in Cache geschrieben
- RAM wird später aktualisiert
- Schneller, aber Daten-Verlust-Risiko

---

## 💡 Praktische Implikationen

### 1. Warum "Defragmentierung" bei SSDs unnötig ist

SSD hat random access (100 μs), egal ob linear oder zufällig  
→ Defragmentierung bringt keinen Vorteil

### 2. Warum Festplatte immer noch schneller bei Sequential Read

```
Sequential HDD: 100-200 MB/s
Random SSD:     100-300 MB/s
Sequential SSD: 3000-7000 MB/s (!)
```

SSDs sind 30-70× schneller im Sequential Mode!

### 3. Warum Kaffee nicht hilft 😅

```
CPU wartet auf RAM:  400 Taktzyklen
                    = 40 Nanosekunden
                    = 0,00004 Millisekunden

Kaffee brauchte:    ~5 Sekunden zur Lippe
                    = 5.000.000.000 Nanosekunden
```

---

## 🔗 Weiterführende Links

- [Mainboard & Chipsatz](/04-mainboard-chipsatz/)
- [Cache & Register](/03-cpu-architektur/cache-und-register/)
- [Speichereinheit](/02-eva-prinzip/speichereinheit/)
