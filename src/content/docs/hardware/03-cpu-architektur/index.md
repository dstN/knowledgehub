---
title: CPU & Architektur
description: Das Gehirn des Computers und seine internen Strukturen
---

import ArchitectureChart from '@/components/ArchitectureChart.jsx';

In diesem Abschnitt tauchen wir tief in die **Central Processing Unit (CPU)** ein. Sie lernen die internen Funktionseinheiten kennen und vergleichen die zwei dominierenden Designphilosophien: **RISC** und **CISC**.

## 🧠 Was ist eine CPU?

Die **CPU** ist das Herzstück jedes Computers. Sie:

- Führt Programmbefehle aus
- Führt Berechnungen durch
- Verwaltet Datenflüsse
- Trifft Entscheidungen basierend auf Bedingungen

## 🔧 Interne CPU-Komponenten

### 1. ALU (Arithmetic Logic Unit)

**Funktion:** Das "Rechenwerk"

- Führt mathematische Operationen durch (+, -, ×, ÷)
- Führt logische Operationen durch (AND, OR, NOT, XOR)
- Eine der **ältesten** Komponenten (existiert seit ENIAC 1946)

**Takt:** Kann eine Operation pro Taktzyklus durchführen

---

### 2. Steuerwerk (Control Unit)

**Funktion:** Der "Dirigent" der CPU

- Dekodiert Befehle
- Koordiniert den Datenfluss zwischen allen Komponenten
- Kontrolliert den Programmfluss (Sprünge, Schleifen)
- Erzeugt Steuersignale für alle anderen Teile

---

### 3. IDU (Instruction Decode Unit)

**Funktion:** Befehlsübersetzung

- Übersetzt Programmbefehle (z.B. "ADD A, B") in Mikrocode
- Nutzt internes ROM mit Befehlssätzen
- Abstrahiert unterschiedliche Hochsprachen

**Wichtig:** Ohne IDU müssten alle Befehle in Maschinencode geschrieben werden!

---

### 4. FPU (Floating Point Unit)

**Funktion:** Spezialisierte Gleitkomma-Rechnung

- Für wissenschaftliche Berechnungen
- Operationen mit Dezimalzahlen (3.14159...)
- Leistung gemessen in **FLOPS** (Floating Point Operations Per Second)

**Beispiele:**

- 1 GHz CPU: ~1 Gigaflop
- GPU: Mehrere Teraflops möglich

---

### 5. Cache & Register

#### Register

- **Extrem schnell:** Direkter Zugriff von CPU (0,1-1 ns)
- **Klein:** Nur wenige Kilobyte
- **Funktion:** Speicherung von aktuellen Operandenergebnissen

#### Cache

- **Schnell:** ~1-10 ns Zugriff (je nach Level)
- **Größer:** L1: 32 KB, L2: 256 KB, L3: 8-20 MB
- **Multi-Level:**
  - **L1:** Sehr klein, sehr schnell (pro CPU-Kern)
  - **L2:** Mittel (pro CPU-Kern)
  - **L3:** Groß, geteilt zwischen Kernen

**Cache-Funktion:** Überbrückt Lücke zwischen CPU (fast) und RAM (langsam)

---

## ⚙️ CPU-Architektur: RISC vs. CISC

### 🏛️ CISC - Complex Instruction Set Computing

**Philosophie:** Ein Befehl soll mächtig sein

**Eigenschaften:**

- **Umfassender Befehlssatz:** 200-400+ verschiedene Befehle
- **Mächtige Einzelbefehle:** Ein Befehl kann viel bewirken
- **Variable Befehlslänge:** Befehle haben unterschiedliche Länge
- **Viele CPU-Transistoren:** Für alle möglichen Befehle nötig

**Vorteil:**

- Weniger Befehle nötig für komplexe Aufgaben
- Software einfacher zu schreiben

**Nachteil:**

- Jeder Befehl braucht mehrere Taktzyklen
- CPU-Design komplex und energieintensiv
- Weniger Register (um Kosten zu sparen)

**Beispiele:** x86, x64 (Intel, AMD)

---

### 🚀 RISC - Reduced Instruction Set Computing

**Philosophie:** Befehle sollen einfach und schnell sein

**Eigenschaften:**

- **Kleiner Befehlssatz:** 50-100 Befehle
- **Einfache Befehle:** Ein Befehl macht eine Sache
- **Feste Befehlslänge:** Standardisierte Größe (z.B. 32 Bit)
- **Viele Register:** Für effiziente Datenflussoptimierung

**Vorteil:**

- Ein Befehl = ein Taktzyklus möglich
- Einfacheres CPU-Design
- Weniger Energieverbrauch
- Pipeline-Optimierung leichter

**Nachteil:**

- Komplexe Aufgaben benötigen mehr Befehle
- Höherer Code-Overhead
- Braucht mehr Register

**Beispiele:** ARM, RISC-V, MIPS

---

### 🎯 Vergleich im Radar-Diagramm

<ArchitectureChart client:load />

_Das Diagramm zeigt konzeptionelle Unterschiede in verschiedenen Dimensionen._

---

## 📊 Tabellarischer Vergleich

| Aspekt                   | CISC           | RISC           |
| ------------------------ | -------------- | -------------- |
| **Befehlssatz-Größe**    | Groß (200-400) | Klein (50-100) |
| **Befehle pro Operatio** | Wenige         | Viele          |
| **Zyklen pro Befehl**    | Mehrere (2-10) | Meist 1        |
| **Register-Anzahl**      | Wenig (8-16)   | Viele (32+)    |
| **Code-Länge**           | Kürzer         | Länger         |
| **Hardware-Komplexität** | Hoch           | Niedrig        |
| **Energie-Verbrauch**    | Höher          | Niedriger      |
| **Laufzeit**             | Mittel         | Schnell        |

---

## 🔗 Weiterführende Links

- [CPU-Komponenten](/03-cpu-architektur/cpu-komponenten/)
- [RISC vs. CISC](/03-cpu-architektur/risc-vs-cisc/)
- [Cache & Register](/03-cpu-architektur/cache-und-register/)
- [Verarbeitungseinheit](/02-eva-prinzip/verarbeitungseinheit/)
