---
title: Boolesche Algebra
description: Logikgatter, Wahrheitstabellen und Grundgesetze der Booleschen Algebra – mit Schaltzeichen, Beispielen und Lernhilfen.
---

# Boolesche Algebra

George Boole (1815–1864) entwickelte ein mathematisches System für **Ja/Nein-Entscheidungen** – heute die Grundlage jeder digitalen Schaltung. Boolesche Algebra kennt nur zwei Werte: **0 (falsch)** und **1 (wahr)**.

---

## Die drei Grundoperationen

### UND-Verknüpfung (Konjunktion)

**Symbol:** `A · B` oder `A AND B` oder `A ∧ B`  
**Schaltzeichen:** Rechteck mit flachem Ende, Eingang links, Ausgang rechts  
**Deutsch:** „Beide müssen 1 sein"

| A | B | A · B |
|---|---|-------|
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | **1** |

> **Eselsbrücke:** UND = Serienschaltung von Schaltern. Beide müssen gedrückt sein, damit Strom fließt.

### ODER-Verknüpfung (Disjunktion)

**Symbol:** `A + B` oder `A OR B` oder `A ∨ B`  
**Deutsch:** „Mindestens einer muss 1 sein"

| A | B | A + B |
|---|---|-------|
| 0 | 0 | 0 |
| 0 | 1 | **1** |
| 1 | 0 | **1** |
| 1 | 1 | **1** |

> **Eselsbrücke:** ODER = Parallelschaltung. Ein Schalter genügt.

### NICHT-Verknüpfung (Negation / Inversion)

**Symbol:** `Ā` oder `NOT A` oder `¬A`  
**Deutsch:** „Umkehrung"

| A | Ā |
|---|---|
| 0 | 1 |
| 1 | 0 |

> **Merkhilfe:** Das Negationszeichen ist der kleine Strich/Überstrich. Sprich „A quer" für Ā.

---

## Abgeleitete Gatter

Aus den drei Grundoperationen entstehen durch Negation vier weitere, die in der Praxis sogar häufiger vorkommen:

### NAND – NOT AND

**Symbol:** `A · B` mit Negation: `A ↑ B` oder `NAND(A,B)`  
**Formel:** `Y = NOT(A · B) = A̅ ·̅ B̅`

| A | B | A NAND B |
|---|---|---------|
| 0 | 0 | **1** |
| 0 | 1 | **1** |
| 1 | 0 | **1** |
| 1 | 1 | 0 |

> **Wichtig:** NAND ist ein **universelles Gatter** – jede andere Boolesche Funktion lässt sich allein aus NAND-Gattern aufbauen.

### NOR – NOT OR

**Formel:** `Y = NOT(A + B)`

| A | B | A NOR B |
|---|---|--------|
| 0 | 0 | **1** |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 0 |

> **Auch NOR ist universell** – ebenfalls allein ausreichend für alle Schaltungen.

### XOR – Exklusiv-ODER (Antivalenz)

**Symbol:** `A ⊕ B`  
**Deutsch:** „Genau einer muss 1 sein" (nicht beide)

| A | B | A XOR B |
|---|---|--------|
| 0 | 0 | 0 |
| 0 | 1 | **1** |
| 1 | 0 | **1** |
| 1 | 1 | 0 |

> **Praxistipp:** XOR prüft **Ungleichheit**. Findet sich in Paritätsprüfung, Verschlüsselung und Addierern wieder.

### XNOR – Äquivalenz

**Formel:** `Y = NOT(A ⊕ B)`  
**Deutsch:** „Beide gleich → Ausgang 1"

| A | B | A XNOR B |
|---|---|---------|
| 0 | 0 | **1** |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | **1** |

---

## Schaltzeichen-Übersicht (DIN EN 60617)

```
AND:   ┤&├   NAND:  ┤&├○
OR:    ┤≥1├  NOR:   ┤≥1├○
NOT:   ┤1├○  XOR:   ┤=1├
```

> Der kleine Kreis `○` am Ausgang bedeutet immer: **Negation**.

---

## Grundgesetze der Booleschen Algebra

Diese Gesetze ermöglichen die **Vereinfachung** von Schaltausdrücken.

### Neutrale Elemente

```
A + 0 = A       (0 ist neutral bei ODER)
A · 1 = A       (1 ist neutral bei UND)
A + 1 = 1       (1 dominiert bei ODER)
A · 0 = 0       (0 dominiert bei UND)
```

### Idempotenzgesetze

```
A + A = A
A · A = A
```

> **Erklärung:** Etwas mit sich selbst verknüpfen ändert nichts.

### Komplementgesetze

```
A + Ā = 1       (mindestens einer ist immer 1)
A · Ā = 0       (beide gleichzeitig 1 ist unmöglich)
```

### Doppelnegation

```
NOT(NOT A) = A
```

### Kommutativgesetze

```
A + B = B + A
A · B = B · A
```

### Assoziativgesetze

```
(A + B) + C = A + (B + C)
(A · B) · C = A · (B · C)
```

### Distributivgesetze

```
A · (B + C) = A·B + A·C       (UND über ODER)
A + (B · C) = (A+B) · (A+C)  (ODER über UND) ← oft überraschend!
```

### Absorptionsgesetze

```
A + A·B = A                   ("B spielt keine Rolle, wenn A schon da ist")
A · (A + B) = A
```

---

## Kanonische Formen

Aus einer Wahrheitstabelle lassen sich direkt zwei Standardformen ableiten:

### DNF – Disjunktive Normalform (Summe der Produkte, SOP)

Notiere alle Zeilen, wo **Y = 1**, und verknüpfe die Eingangsvariablen mit UND (negiert wenn 0), dann alles mit ODER verbinden.

**Beispiel:**
| A | B | Y |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

Y-1-Zeilen: (A=0,B=1) → **Ā·B**; (A=1,B=0) → **A·B̄**

→ **DNF:** `Y = Ā·B + A·B̄` (das ist XOR!)

### KNF – Konjunktive Normalform (Produkt der Summen, POS)

Notiere alle Zeilen, wo **Y = 0**, und verknüpfe Eingangsvariablen mit ODER (negiert wenn 1), dann alles mit UND verbinden.

---

## Schaltungsvereinfachung – Schritt für Schritt

**Aufgabe:** Vereinfache `Y = A·B + A·B̄`

```
Y = A·B + A·B̄
  = A·(B + B̄)        [Distributivgesetz ausklammern]
  = A·1               [Komplementgesetz: B + B̄ = 1]
  = A                 [Neutrales Element]
```

**Aufgabe:** Vereinfache `Y = (A + B)·(A + C)`

```
Y = (A + B)·(A + C)
  = A + B·C           [Distributivgesetz rückwärts]
```

> **Lerntipp:** Wenn du feststeckst, probiere zuerst **Ausklammern** (Distributivgesetz), dann **Komplementgesetz**, dann **Absorption**.

---

## Boolesche Algebra vs. normale Algebra

| | Boolesche Algebra | Normale Algebra |
|---|---|---|
| Additions-Neutrales | 0 | 0 |
| Multiplikations-Neutrales | 1 | 1 |
| Distributiv UND über ODER | ✓ | ✓ |
| Distributiv ODER über UND | **✓** | ✗ |
| Idempotenz | **✓** | ✗ |
| Komplementgesetz | **✓** | ✗ |

---

## Prüfungstypische Aufgaben

**1. Erstelle die Wahrheitstabelle für `Y = A·B̄ + Ā·B`**

| A | B | Ā | B̄ | A·B̄ | Ā·B | Y |
|---|---|---|---|-----|-----|---|
| 0 | 0 | 1 | 1 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 | 0 | 1 | 1 |
| 1 | 0 | 0 | 1 | 1 | 0 | 1 |
| 1 | 1 | 0 | 0 | 0 | 0 | 0 |

→ Das ist XOR.

**2. Vereinfache: `Y = A·B + A·B̄ + Ā·B`**

```
= A·(B + B̄) + Ā·B
= A·1 + Ā·B
= A + Ā·B
= A + B         [Absorptionsgesetz rückwärts]
```

---

## Zusammenfassung auf einen Blick

```
Grundgatter:     AND → ·     OR → +    NOT → Überstrich
Wichtige Gesetze:
  Komplement:    A + Ā = 1   |   A · Ā = 0
  Absorption:    A + A·B = A
  Doppelnegation: NOT(NOT A) = A
  Universell:    NAND und NOR reichen für alles
```
