---
title: RISC vs. CISC
description: Vergleich der zwei dominierenden CPU-Architekturen
---

# RISC vs. CISC - Die große Debatte

Der Konflikt zwischen RISC und CISC ist seit den 1980ern einer der größten in der Computerarchitektur. Diese Seite fasst die wichtigsten Unterschiede zusammen.

## 📖 Historischer Kontext

### CISC-Ära (1970er-1990er)

- Intel x86: Dominantin auf PCs
- Philosophie: "Eine Instruktion = ein Makro"
- Trend: Immer mehr Befehle hinzufügen

### RISC-Revolution (1980er-1990er)

- Berkeley RISC, Stanford MIPS Projekte
- Konträr-Philosophie: "Keep It Simple"
- Trend: Weniger, aber schneller Befehle

### Moderne Synthese (2000er-heute)

- CISC hat RISC-Prinzipien übernommen (Decoder)
- RISC hat CISC-Features übernommen (mehr Befehle)
- Hybrid-Ansätze

---

## 🎯 Kernphilosophien

### CISC: "Ein Befehl soll viel können"

```
Pseudocode (CISC):
MOV AX, [Memory]    # Ein Befehl: Speicher → Register
ADD BX, AX
MOV [Memory], BX
```

**Resultat:** 3 Befehle reichen

### RISC: "Jeder Befehl ist einfach"

```
Pseudocode (RISC):
LOAD R1, Memory     # Speicher → Register
ADD R2, R1, R0
STORE R2, Memory
```

**Resultat:** 3 Befehle (aber einfacher)

---

## ⚙️ Design-Unterschiede

### Hardware-Komplexität

**CISC:**

- Komplexer Decoder
- Viele Transistoren für alle Befehle
- Schwer zu optimieren

**RISC:**

- Einfacher Decoder
- Weniger Transistoren
- Leichter zu optimieren

### Register

**CISC:**

- Wenig Register (x86: 8)
- Register für spezielle Aufgaben
- Memory als zusätzliche Register (langsam)

**RISC:**

- Viele Register (MIPS: 32, ARM: 32)
- Alle Register gleich
- Weniger Speicherzugriffe

### Speicherzugriff

**CISC:**

- Viele Befehle mit Memory-Operanden
- Load/Store gemischt in Befehlen

**RISC:**

- Nur explizite LOAD/STORE Befehle
- Load-Store Architektur

---

## 📊 Praktischer Vergleich

| Metrik                      | CISC     | RISC         |
| --------------------------- | -------- | ------------ |
| **Befehlsgröße (Bits)**     | 8-64     | 32-64 (fest) |
| **Decoder-Latenz**          | Länger   | Kürzer       |
| **Instruktion Parallelism** | Schwer   | Leicht       |
| **Cache-Effizienz**         | Mittel   | Besser       |
| **Power/Performance**       | Schlecht | Gut          |

---

## 🌍 Moderne Beispiele

### CISC

- **Intel x86/x64**: Noch immer dominant auf Desktops/Servers
- **AMD Ryzen**: Auch CISC (mit RISC-like Dekoder)

### RISC

- **ARM**: Dominant in Smartphones (iPhone, Android)
- **Apple M1/M2**: ARM-basiert, ultra-effizient
- **RISC-V**: Offene Architektur, wachsend

---

## 💡 Fazit

**Es gibt keinen klaren Sieger:**

- CISC dominiert noch auf Desktop/Server (Legacy)
- RISC gewinnt bei Mobile (Effizienz, Performance)
- Moderne CPUs kombinieren Aspekte von beiden

**Trend:** RISC-Prinzipien (Einfachheit, Parallelismus) gewinnen, wegen Energieeffizienz und Skalierbarkeit.

---

## 🔗 Weiterführende Links

- [CPU & Architektur](/03-cpu-architektur/)
- [CPU-Komponenten](/03-cpu-architektur/cpu-komponenten/)
- [Cache & Register](/03-cpu-architektur/cache-und-register/)
