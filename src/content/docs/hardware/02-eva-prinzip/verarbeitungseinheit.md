---
title: Verarbeitungseinheit
description: Das Herzstück des Computers - die CPU
---

Die **Verarbeitungseinheit** ist das **Gehirn des Computers**. Sie verarbeitet die Eingabedaten nach festgelegten Regeln (Programm) und erzeugt Ergebnisse.

## 🎯 Aufgabe

Die Verarbeitungseinheit führt folgende Operationen aus:

1. **Arithmetische Operationen**: Addition, Subtraktion, Multiplikation, Division
2. **Logische Operationen**: UND, ODER, NICHT, Vergleiche
3. **Datenbewegung**: Daten zwischen RAM, Cache, Registern verschieben
4. **Kontrollfluss**: Entscheidungen (IF/ELSE), Schleifen, Sprünge
5. **Speicherzugriff**: Lesen/Schreiben von Arbeitsspeicher

## 🔧 Komponenten einer CPU

### Arithmetic Logic Unit (ALU)

- **Funktion**: Führt mathematische und logische Berechnungen durch
- **Operationen**: +, -, \*, /, AND, OR, NOT, Bit-Shifts
- **Geschwindigkeit**: Wenige Nanosekunden pro Operation

### Steuerwerk (Control Unit)

- **Funktion**: Dirigiert alle anderen Komponenten
- **Aufgabe**: Befehle dekodieren und koordinieren
- **Takt**: Arbeitet synchron mit dem Systemtakt

### Instruction Decode Unit (IDU)

- **Funktion**: Übersetzt Programmbefehle in Mikrocode
- **ROM**: Interner Speicher mit Befehlssätzen
- **Mikrocode**: Vereinfachte, ausführbare Befehle

### Cache & Register

- **Register**: Extrem schneller Speicher (0,1-1 ns Zugriff)
- **L1-Cache**: Klein (32 KB), sehr schnell
- **L2/L3-Cache**: Größer (256 KB - 8 MB), schnell

## 📊 Taktfrequenz

Die CPU arbeitet nach einem **systemweiten Takt** (Clock):

- **1 GHz** = 1 Milliarde Takte pro Sekunde
- **Moderne CPUs**: 2-5 GHz
- **Jeder Taktzyklus**: Erlaubt eine einfache Operation

> Höhere Taktfrequenz = schneller, aber auch mehr Wärmeerzeugung

## 🔗 Weiterführende Links

- [Das EVA-Prinzip Übersicht](/02-eva-prinzip/)
- [CPU & Architektur](/03-cpu-architektur/)
- [Speichereinheit](/02-eva-prinzip/speichereinheit/)
