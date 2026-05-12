---
title: Halb- und Volladdierer
description: Wie Computer addieren – Halbaddierer, Volladdierer, Ripple-Carry-Addierer und der Weg zur ALU, mit Schaltungen, Wahrheitstabellen und Lernhilfen.
---

# Halb- und Volladdierer

Computer können nichts außer addieren. Buchstäblich. Subtraktion ist Addition mit negativen Zahlen (Zweierkomplement), Multiplikation sind Additionen und Shifts, Division ebenfalls. Alles basiert auf dem **Addierer** – der wichtigsten Schaltung in jedem Prozessor.

---

## Der Halbaddierer (HA – Half Adder)

Ein Halbaddierer addiert **zwei 1-Bit-Zahlen** und liefert:
- **Summe S** (das niederwertige Bit des Ergebnisses)
- **Übertrag Cout** (carry out, das höherwertige Bit)

### Wahrheitstabelle

| A | B | S (Summe) | Cout (Übertrag) |
|---|---|-----------|----------------|
| 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | **1** |

**Erklärung für 1+1:**  
Im Dezimalen: 1 + 1 = 2 = `10` in Binär → Summe ist 0, Übertrag ist 1.

### Boolesche Funktionen

Aus der Wahrheitstabelle direkt ablesen:

```
S    = A ⊕ B        (XOR – Summe ohne Übertrag)
Cout = A · B        (AND – Übertrag nur wenn beide 1)
```

### Schaltung

```
A ─┬── [XOR] ── S
B ─┤
   └── [AND] ── Cout
```

> **Merkhilfe:** Halbaddierer = 1 XOR + 1 AND. Summe=XOR, Übertrag=AND.

### Warum „Halb"?

Weil ein Halbaddierer **keinen eingehenden Übertrag verarbeiten kann**. Er kann nur Bit-Stelle 0 (das niederwertigste Bit) berechnen. Für alle weiteren Stellen braucht man einen Volladdierer.

---

## Der Volladdierer (VA – Full Adder)

Ein Volladdierer addiert **drei 1-Bit-Zahlen**:
- A (Bit aus Summand 1)
- B (Bit aus Summand 2)
- **Cin** (Carry In – eingehender Übertrag von der vorherigen Stelle)

Ergebnis:
- **S** (Summe)
- **Cout** (Carry Out – ausgehender Übertrag)

### Wahrheitstabelle

| A | B | Cin | S | Cout |
|---|---|-----|---|------|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 1 | 0 |
| 0 | 1 | 0 | 1 | 0 |
| 0 | 1 | 1 | 0 | **1** |
| 1 | 0 | 0 | 1 | 0 |
| 1 | 0 | 1 | 0 | **1** |
| 1 | 1 | 0 | 0 | **1** |
| 1 | 1 | 1 | 1 | **1** |

**Kontrolle:** 1 + 1 + 1 = 3 = `11` in Binär → S=1, Cout=1 ✓

### Boolesche Funktionen

```
S    = A ⊕ B ⊕ Cin
Cout = (A · B) + (A · Cin) + (B · Cin)
```

**Alternative Formel für Cout (Majority-Funktion):**
```
Cout = 1, wenn mindestens zwei der drei Eingänge 1 sind
```

### Schaltung aus zwei Halbaddierern

```
A ──┬──────────────────────────────────┐
B ──┤──────────────────────────────┐   │
   [HA1]                          │   │
    ├── S1 ──┐                    │   │
    └── C1 ──┴──── [OR] ─── Cout  │   │
Cin ──────── [HA2]                │   │
              ├── S ─────────── S │   │
              └── C2 ──────────── ┘   │
                                      │
```

Vereinfacht:
```
S = (A ⊕ B) ⊕ Cin     ← zweimal XOR
Cout = C1 + C2
     = (A·B) + ((A⊕B)·Cin)
```

> **Merkhilfe:** Volladdierer = 2 Halbaddierer + 1 OR-Gatter.

### Schaltungsskizze

```
A ─┐
   ├─[HA]─┬─ S1 ─┐
B ─┘       │      ├─[HA]─── S
           │ Cin─┘      │
           │             └─[OR]─── Cout
           └─────────────────────┘
```

---

## Ripple-Carry-Addierer (RCA)

Um mehrstellige Binärzahlen zu addieren, werden Volladdierer **in Reihe** geschaltet. Der Cout einer Stufe wird zum Cin der nächsten.

### Beispiel: 4-Bit-Addierer

```
A3 B3   A2 B2   A1 B1   A0 B0
 │  │    │  │    │  │    │  │
 [VA]    [VA]    [VA]   [HA]
 │  │    │  │    │  │    │  │
S3 Cout→Cin S2 Cout→Cin S1 Cout→Cin S0 Cout=0
```

**Reihenschaltung:**
```
Bit 0:  HA  → S0, C0
Bit 1:  VA(A1, B1, C0)  → S1, C1
Bit 2:  VA(A2, B2, C1)  → S2, C2
Bit 3:  VA(A3, B3, C2)  → S3, C3 (= finaler Übertrag)
```

### Rechenbeispiel: 1011 + 0110

```
  1011  (= 11)
+ 0110  (= 6)
──────
Bit 0:  1+0 = 1, C=0
Bit 1:  1+1+0 = 0, C=1
Bit 2:  0+1+1 = 0, C=1
Bit 3:  1+0+1 = 0, C=1
Übertrag = 1

→ 10001 = 17 ✓
```

### Problem: Carry-Ripple-Verzögerung

Der Übertrag muss von Bit 0 bis Bit n „durchrieseln" (ripple). Bei einem 64-Bit-Addierer bedeutet das 64 × Gatterverzögerung.

**Lösung in modernen CPUs:** Carry-Lookahead-Addierer (CLA) berechnen alle Überträge parallel.

---

## Subtrahierer – Addition des Zweierkomplements

Computer subtrahieren **nicht wirklich** – sie addieren das Zweierkomplement:

```
A - B = A + (NOT B) + 1
```

**Schaltung eines Subtrahierers:**
- Alle Bits von B invertieren (NOT)
- Cin der ersten Stufe auf 1 setzen (+1)

Das ist der Grund, warum in CPUs oft ein **Adder/Subtractor** als kombinierte Einheit existiert:
- Subtraktionsmodus: XOR-Gatter vor B (flippt alle Bits wenn Steuersignal = 1), Cin = 1

---

## ALU – Arithmetic Logic Unit

Die ALU (Rechenwerk) des Prozessors basiert im Kern auf Addierern und kombiniert sie mit logischen Operationen:

```
┌─────────────────────────────────────┐
│  ALU                                │
│                                     │
│  Operationen:                       │
│  ADD, SUB, AND, OR, NOT, XOR, SHL, SHR │
│                                     │
│  Kern: Parallel-Addierer            │
└─────────────────────────────────────┘
```

---

## Vergleich: HA vs. VA

| | Halbaddierer | Volladdierer |
|---|---|---|
| Eingänge | 2 (A, B) | 3 (A, B, Cin) |
| Ausgänge | 2 (S, Cout) | 2 (S, Cout) |
| Gatter | 1 XOR + 1 AND | 2 XOR + 2 AND + 1 OR |
| Verwendung | Bit-Stelle 0 | Alle höheren Stellen |
| Carry verarbeiten? | Nein | Ja |

---

## Lernkarten

> **Halbaddierer:**  
> S = A ⊕ B  
> Cout = A · B  
> „XOR für Summe, AND für Carry"

> **Volladdierer:**  
> S = A ⊕ B ⊕ Cin  
> Cout = (A·B) + (Cin·(A⊕B))  
> = 2 Halbaddierer + 1 OR

> **Ripple-Carry:** n Volladdierer in Reihe → Cout wird Cin der nächsten Stufe

---

## Prüfungsaufgaben

**1. Erstelle die Wahrheitstabelle eines Halbaddierers.**  
*(Antwort: siehe oben – 4 Zeilen, S = XOR, Cout = AND)*

**2. Wie viele Gatter braucht ein 4-Bit-Ripple-Carry-Addierer?**  
```
1 × HA (3 Gatter: 1 XOR + 1 AND + 0 OR)
3 × VA (je 5 Gatter: 2 XOR + 2 AND + 1 OR)
Gesamt: 3 + 3×5 = 18 Gatter
```

**3. Berechne 1010 + 0111 mit einem 4-Bit-Addierer.**
```
Bit 0: 0+1 = 1, C=0
Bit 1: 1+1+0 = 0, C=1
Bit 2: 0+1+1 = 0, C=1
Bit 3: 1+0+1 = 0, C=1
→ 10001 = 17 (Überlauf bei 4-Bit-Darstellung!)
```
