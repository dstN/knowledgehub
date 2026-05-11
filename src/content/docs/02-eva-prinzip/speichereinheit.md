---
title: Speichereinheit
description: Wo Computer Daten speichern
---

# Speichereinheit (Storage/S)

Die **Speichereinheit** speichert Daten während und nach der Verarbeitung. Sie ist für Zwischen- und Langzeitspeicherung zuständig.

## 🎯 Funktion

Die Speichereinheit muss balancieren zwischen:

- **Geschwindigkeit**: Wie schnell auf Daten zugegriffen werden kann
- **Kapazität**: Wie viel Daten gespeichert werden können
- **Persistenz**: Wie lange Daten erhalten bleiben
- **Kosten**: Preis pro Speichereinheit

## 📦 Speicherhierarchie

```
┌─────────────────────────────────────┐
│ Register (CPU)                      │ ← Schnellst, kleinst
│ L1/L2/L3 Cache                      │
│ Arbeitsspeicher (RAM)               │
│ SSD / Festplatte                    │
│ Cloud / Externe Speicher            │ ← Langsamst, größt
└─────────────────────────────────────┘
```

### RAM (Arbeitsspeicher)

**Eigenschaften:**

- Flüchtig (Daten weg bei Stromausfall)
- Schnell: ~10-20 ns Zugriff
- Typisch: 4-64 GB bei modernen Systemen
- Direkt angebunden an CPU

### SSD (Solid State Drive)

**Eigenschaften:**

- Persistent (Daten bleiben auch ohne Strom)
- Schnell: ~100 μs Zugriff (1000× langsamer als RAM)
- Große Kapazität: 256 GB - 2 TB
- Kein Verschleiß (keine beweglichen Teile)

### Festplatte (HDD)

**Eigenschaften:**

- Persistent
- Langsam: ~5-10 ms Zugriff (noch 50× langsamer als SSD)
- Sehr große Kapazität: Mehrere TB billig
- Verschleiß durch Rotation möglich

## 🔄 Speichermanagement

### Virtuelle Speicher

- Wenn RAM voll: Daten auf Festplatte auslagern (Swapping)
- Betriebssystem verwaltet transparent
- Langsamer, aber mehr Speicher verfügbar

### Cache-Strategien

- **Temporal Locality**: Kürzlich genutzte Daten bleiben im Cache
- **Spatial Locality**: Nahe beieinanderliegende Daten zusammenfassen
- **Replacement Policy**: Welche Daten verdrängen bei Platzmangel

## 🔗 Weiterführende Links

- [Das EVA-Prinzip Übersicht](/02-eva-prinzip/)
- [Mainboard & Chipsatz](/04-mainboard-chipsatz/speicherhierarchie/)
- [Ausgabeeinheit](/02-eva-prinzip/ausgabeeinheit/)
