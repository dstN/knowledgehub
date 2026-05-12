---
title: De Morgansches Gesetz
description: Die zwei De Morgan-Regeln verstehen, beweisen und anwenden – mit Wahrheitstabellen, Schaltungsumformungen und praktischen Merktricks.
---

# De Morgansches Gesetz

Augustus De Morgan (1806–1871) formulierte zwei Regeln, die das Umformen von negierten Ausdrücken ermöglichen. Sie sind unverzichtbar beim Vereinfachen von Schaltungen und beim Umwandeln zwischen NAND/NOR und AND/OR.

---

## Die zwei Regeln

### Regel 1: Negiertes UND = ODER der Negierten

```
NOT(A · B)  =  NOT(A) + NOT(B)
```
Kurzschreibweise mit Überstrich: `Ā·B̄` steht für NOT(A)·NOT(B)

**Wörtlich:** „Das Ganze negieren ist dasselbe wie jeden Teil einzeln negieren und mit ODER verbinden."

### Regel 2: Negiertes ODER = UND der Negierten

```
NOT(A + B)  =  NOT(A) · NOT(B)
```
Kurzschreibweise: `Ā · B̄`

**Wörtlich:** „Das Ganze negieren ist dasselbe wie jeden Teil einzeln negieren und mit UND verbinden."

---

## Eselsbrücken

> **„Brich den Strich, wechsle das Zeichen"**
>
> Liegt ein langer Überstrich über einem Ausdruck?
> 1. **Brich** den langen Strich in zwei kurze (negiere jeden Term einzeln)
> 2. **Wechsle** das Verknüpfungszeichen: `·` ↔ `+`

Beispiel:
```
      ̄          →  brich den Strich über "A·B"
A · B         →  Ā + B̄       (Zeichen: · wird +)

      ̄
A + B         →  Ā · B̄       (Zeichen: + wird ·)
```

---

## Beweis durch Wahrheitstabelle

### Regel 1: `NOT(A AND B) = NOT(A) OR NOT(B)`

| A | B | A·B | **NOT(A·B)** | Ā | B̄ | **Ā + B̄** |
|---|---|-----|-------------|---|---|----------|
| 0 | 0 | 0 | **1** | 1 | 1 | **1** ✓ |
| 0 | 1 | 0 | **1** | 1 | 0 | **1** ✓ |
| 1 | 0 | 0 | **1** | 0 | 1 | **1** ✓ |
| 1 | 1 | 1 | **0** | 0 | 0 | **0** ✓ |

Beide Spalten sind identisch → Beweis erbracht ✓

### Regel 2: `NOT(A OR B) = NOT(A) AND NOT(B)`

| A | B | A+B | **NOT(A+B)** | Ā | B̄ | **Ā · B̄** |
|---|---|-----|-------------|---|---|----------|
| 0 | 0 | 0 | **1** | 1 | 1 | **1** ✓ |
| 0 | 1 | 1 | **0** | 1 | 0 | **0** ✓ |
| 1 | 0 | 1 | **0** | 0 | 1 | **0** ✓ |
| 1 | 1 | 1 | **0** | 0 | 0 | **0** ✓ |

---

## Erweiterung auf mehr als zwei Variablen

Die Regeln gelten für beliebig viele Variablen:

```
NOT(A · B · C) = Ā + B̄ + C̄
NOT(A + B + C) = Ā · B̄ · C̄
```

**Merkhilfe:** So viele Terme du auch hast – immer den Strich brechen, Zeichen wechseln.

---

## Anwendung: NAND und NOR als universelle Gatter

De Morgan zeigt, warum **NAND** und **NOR** so mächtig sind.

### NAND alleine reicht

```
NOT(A) = NOT(A · A)        → NAND mit beiden Eingängen gleich
       = A NAND A

AND(A,B) = NOT(NOT(A·B))
         = NOT(A NAND B)
         = (A NAND B) NAND (A NAND B)

OR(A,B)  = NOT(Ā · B̄)     [De Morgan Regel 2 rückwärts]
         = NOT(NOT(A) · NOT(B))
         = (A NAND A) NAND (B NAND B)
```

### NOR alleine reicht

```
NOT(A) = A NOR A
OR(A,B) = NOT(NOT(A+B)) = NOT(A NOR B) = (A NOR B) NOR (A NOR B)
AND(A,B) = NOT(Ā + B̄) = NOT(NOT(A) + NOT(B)) = (A NOR A) NOR (B NOR B)
```

> **Praxisrelevanz:** In der Chipfertigung ist NAND die Standard-Zelle. Alle komplexen Chips bestehen intern überwiegend aus NAND-Gittern.

---

## Schaltungsumformung mit De Morgan

**Aufgabe:** Forme die folgende Schaltung nur mit NAND-Gattern auf.

Gegeben: `Y = A·B + C`

Schritt 1: Doppelt negieren (ändert den Wert nicht)
```
Y = NOT(NOT(A·B + C))
```

Schritt 2: De Morgan auf inneres NOT anwenden
```
Y = NOT(NOT(A·B) · NOT(C))
  = NOT((A NAND B) · C̄)
  = (A NAND B) NAND (NOT C)
  = (A NAND B) NAND (C NAND C)
```

→ Realisierbar mit 3 NAND-Gattern!

---

## De Morgan und Programmieren

In nahezu jeder Programmiersprache begegnen dir De Morgan-Regeln:

```python
# Diese beiden Ausdrücke sind äquivalent:
not (a and b)   ==   (not a) or (not b)
not (a or b)    ==   (not a) and (not b)
```

**Praktisches Beispiel:**

```python
# Statt:
if not (x > 0 and y > 0):
    ...
# Kann man schreiben (manchmal lesbarer):
if x <= 0 or y <= 0:
    ...
```

---

## Häufige Fehler

| Falsch ❌ | Richtig ✓ |
|-----------|----------|
| `NOT(A·B) = Ā · B̄` | `NOT(A·B) = Ā + B̄` (Zeichen wechseln!) |
| `NOT(A+B) = Ā + B̄` | `NOT(A+B) = Ā · B̄` (Zeichen wechseln!) |
| `NOT(A·B) = NOT(A) · NOT(B)` | `NOT(A·B) = NOT(A) + NOT(B)` |

> **Der häufigste Fehler:** Den Strich zu brechen, aber das Zeichen NICHT zu wechseln. Beides gehört untrennbar zusammen!

---

## Kompakte Zusammenfassung

```
┌─────────────────────────────────────────────────────────┐
│  DE MORGAN                                              │
│                                                         │
│  Regel 1:  NOT(A · B) = Ā + B̄                          │
│  Regel 2:  NOT(A + B) = Ā · B̄                          │
│                                                         │
│  Merkhilfe: "Brich den Strich, wechsle das Zeichen"    │
│                                                         │
│  · wird + | + wird ·                                   │
│  Strich über dem Ganzen → zwei einzelne Striche        │
└─────────────────────────────────────────────────────────┘
```

---

## Prüfungsaufgaben

**1. Wende De Morgan an: `Y = NOT(A + B + C)`**
```
Y = Ā · B̄ · C̄
```

**2. Forme um: `Y = NOT(Ā · B)`**

Zuerst doppelt negieren, dann De Morgan auf den inneren Teil:
```
Y = NOT(Ā · B)
  = NOT(Ā) + NOT(B)    [De Morgan]
  = A + B̄
```

**3. Beweise mit Wahrheitstabelle für 3 Variablen: `NOT(A·B·C) = Ā + B̄ + C̄`**  
*(Tipp: 8 Zeilen, zwei Spalten vergleichen)*
