---
title: Karnaugh-Veitch-Diagramme
description: Boolesche Ausdrücke systematisch minimieren mit KV-Diagrammen – von 2 bis 4 Variablen, Don't-Care-Zustände, Gruppenbildung und SOP/POS ableiten.
---

# Karnaugh-Veitch-Diagramme (KV-Diagramme)

Das Karnaugh-Veitch-Diagramm (auch KV-Map oder KV-Diagramm) ist ein grafisches Verfahren zur **Minimierung boolescher Ausdrücke**. Ziel: die kleinstmögliche Schaltung mit den wenigsten Gattern.

> **Erfunden von:** Maurice Karnaugh (1953, Bell Labs) und Edward Veitch (1952) – unabhängig voneinander. In Europa meist „KV-Diagramm", im anglophonen Raum „Karnaugh Map".

---

## Warum minimieren?

Weniger Gatter = weniger Chip-Fläche, niedrigerer Energieverbrauch, schnellere Schaltzeiten. In der industriellen Chipfertigung ist jedes eingesparte Gatter ein wirtschaftlicher Vorteil.

Beispiel ohne Minimierung: `Y = Ā·B̄·C̄ + Ā·B̄·C + Ā·B·C̄ + Ā·B·C`  
Nach Minimierung: `Y = Ā` (eine einzige Negation!)

---

## Grundprinzip

Ein KV-Diagramm ordnet alle möglichen Eingangskombinationen so in einem Raster an, dass sich **benachbarte Felder in genau einem Bit unterscheiden** (Gray-Code-Anordnung). Gruppen von Einsen können dann zusammengefasst und vereinfacht werden.

---

## 2-Variablen KV-Diagramm

```
      B=0   B=1
A=0 | AB=00 | AB=01 |
A=1 | AB=10 | AB=11 |
```

**Nummerierung mit Mintermnummern:**
```
      B
   0     1
 ┌────┬────┐
A│ m0 │ m1 │  0
 ├────┼────┤
 │ m2 │ m3 │  1
 └────┴────┘
```

| Minterm | A | B |
|---------|---|---|
| m0 | 0 | 0 |
| m1 | 0 | 1 |
| m2 | 1 | 0 |
| m3 | 1 | 1 |

---

## 3-Variablen KV-Diagramm

**Wichtig:** Die Spalten folgen dem **Gray-Code** (nicht 00, 01, 10, 11, sondern **00, 01, 11, 10**), damit je zwei benachbarte Felder nur ein Bit verschieden sind.

```
         BC
      00  01  11  10
    ┌───┬───┬───┬───┐
A=0 │ 0 │ 1 │ 3 │ 2 │
    ├───┼───┼───┼───┤
A=1 │ 4 │ 5 │ 7 │ 6 │
    └───┴───┴───┴───┘
```

> **Achtung:** Das Raster ist **torusförmig** – die linke und rechte Kante sind benachbart, ebenso oben und unten!

---

## 4-Variablen KV-Diagramm (Prüfungsstandard)

```
         CD
      00  01  11  10
    ┌───┬───┬───┬───┐
AB  │   │   │   │   │
00  │ 0 │ 1 │ 3 │ 2 │
    ├───┼───┼───┼───┤
01  │ 4 │ 5 │ 7 │ 6 │
    ├───┼───┼───┼───┤
11  │12 │13 │15 │14 │
    ├───┼───┼───┼───┤
10  │ 8 │ 9 │11 │10 │
    └───┴───┴───┴───┘
```

**Insgesamt:** 16 Felder für 4 Variablen (2⁴ = 16 Kombinationen).

---

## Gruppenbildung – die Regeln

Gruppen von Einsen dürfen zusammengefasst werden, wenn sie folgende Regeln erfüllen:

### Gültige Gruppengrößen

| Größe | Eingesparte Bits | Verbleibende Variablen |
|-------|-----------------|------------------------|
| 1 Feld | 0 Bits | alle 4 (bei 4 Var.) |
| 2 Felder | 1 Bit | 3 Variablen |
| 4 Felder | 2 Bits | 2 Variablen |
| 8 Felder | 3 Bits | 1 Variable |
| 16 Felder | 4 Bits | 0 Variablen → Y = 1 |

**Gruppen müssen immer eine 2er-Potenz groß sein: 1, 2, 4, 8, 16 ...**

### Erlaubte Formen

- Rechteckig (auch quadratisch)
- Über Rand wickeln (links↔rechts, oben↔unten)
- Über Ecken (alle vier Ecken = gültige 4er-Gruppe!)
- **Nicht:** L-Formen, T-Formen, Diagonalen

### Optimierungsstrategie

1. **So groß wie möglich** gruppieren
2. **So wenige Gruppen wie nötig** verwenden
3. Jede 1 muss in **mindestens einer** Gruppe sein
4. Redundante Gruppen (alle Einsen schon in anderen Gruppen abgedeckt) weglassen

---

## Term aus einer Gruppe ableiten

Schaue auf die Variablen, die **innerhalb der Gruppe konstant** sind:
- Variable immer 0 → negiert aufschreiben (z.B. `Ā`)
- Variable immer 1 → normal aufschreiben (z.B. `A`)
- Variable wechselt → **weglassen** (die Variable ist eliminiert!)

**Beispiel** (4 Variablen, 4er-Gruppe):
```
Felder: m0, m1, m4, m5
A B C D:
0 0 0 0  ← m0
0 0 0 1  ← m1
0 1 0 0  ← m4
0 1 0 1  ← m5

A:  immer 0 → Ā
B:  wechselt (0,0,1,1) → weglassen
C:  immer 0 → C̄
D:  wechselt (0,1,0,1) → weglassen

→ Term: Ā · C̄
```

---

## Vollständiges Beispiel: 4 Variablen

**Gegeben:** Folgende Minterme sollen zu 1 werden:  
m(0, 1, 2, 3, 8, 9, 10, 11)

**Schritt 1: Einsen eintragen**
```
         CD
      00  01  11  10
    ┌───┬───┬───┬───┐
AB  │   │   │   │   │
00  │ 1 │ 1 │ 1 │ 1 │
    ├───┼───┼───┼───┤
01  │ 0 │ 0 │ 0 │ 0 │
    ├───┼───┼───┼───┤
11  │ 0 │ 0 │ 0 │ 0 │
    ├───┼───┼───┼───┤
10  │ 1 │ 1 │ 1 │ 1 │
    └───┴───┴───┴───┘
```

**Schritt 2: Gruppen bilden**
- Obere Reihe (m0–m3): 4er-Gruppe → A=0, B=0, C und D wechseln → `Ā · B̄`  
- Untere Reihe (m8–m11): 4er-Gruppe → A=1, B=0, C und D wechseln → `A · B̄`  
- Oder: beide zusammen (Rand-Wrap, 8er-Gruppe) → nur B=0 konstant → `B̄`

**Schritt 3: Terme mit ODER verbinden**

→ **Minimales Ergebnis: `Y = B̄`** (eine einzige Variable!)

---

## Don't-Care-Zustände (×)

Manche Eingangs-Kombinationen kommen in der Praxis nie vor (z.B. bei BCD-Code: 10–15 sind ungültig). Diese werden als **Don't-Care (×)** markiert.

**Don't-Care dürfen beliebig** (als 0 oder 1) behandelt werden – je nachdem, ob sie eine Gruppe vergrößern oder nicht.

```
         CD
      00  01  11  10
    ┌───┬───┬───┬───┐
AB  │   │   │   │   │
00  │ 1 │ 0 │ × │ 0 │
    ├───┼───┼───┼───┤
01  │ 1 │ 0 │ × │ 0 │
    ├───┼───┼───┼───┤
11  │ × │ × │ × │ × │
    ├───┼───┼───┼───┤
10  │ 0 │ 0 │ × │ 0 │
    └───┴───┴───┴───┘
```

Hier können wir Don't-Cares nutzen, um Gruppen zu vergrößern und damit die Schaltung weiter zu vereinfachen.

> **Wichtig:** Gruppen **müssen nicht** alle Don't-Cares einschließen – nur wenn es hilft!

---

## SOP vs. POS aus dem KV-Diagramm

### SOP (Sum of Products, DNF) – Einsen gruppieren

1. Alle Felder mit **1** gruppieren
2. Jeden Term addieren (ODER): `Y = T1 + T2 + ...`

### POS (Product of Sums, KNF) – Nullen gruppieren

1. Alle Felder mit **0** gruppieren
2. Jeden Term (negiert nach De Morgan) multiplizieren (UND)
3. Ergebnis: `Y = (A+B) · (C+D̄) · ...`

> **Wann POS günstiger?** Wenn weniger Nullen als Einsen vorhanden sind.

---

## Grenzen des KV-Diagramms

| Variablen | Felder | Handhabbar? |
|-----------|--------|-------------|
| 2 | 4 | Sehr einfach |
| 3 | 8 | Einfach |
| 4 | 16 | Prüfungsstandard |
| 5 | 32 | Sehr komplex, selten von Hand |
| ≥6 | ≥64 | Algorithmus (Quine-McCluskey) nötig |

---

## Lernhilfen und Merktricks

> **„Gruppen müssen rechteckig sein, aber das Raster ist rund"** – immer daran denken, dass Ränder zusammengehören.

> **Schrittfolge für die Prüfung:**
> 1. Wahrheitstabelle → Minterme aufschreiben
> 2. Minterme ins KV-Diagramm eintragen
> 3. Größtmögliche Gruppen bilden (2er-Potenzen)
> 4. Terme ablesen (konstante Variablen)
> 5. Terme mit + verbinden

> **Häufiger Fehler:** 3er- oder 5er-Gruppen bilden. Nur 2er-Potenzen sind erlaubt!

---

## Prüfungsaufgabe komplett durchgerechnet

**Aufgabe:** Minimiere für Minterme m(1, 3, 5, 7, 9, 11, 13, 15) bei 4 Variablen A, B, C, D.

**Einsetzen ins KV-Diagramm:**
```
         CD
      00  01  11  10
    ┌───┬───┬───┬───┐
AB  │   │   │   │   │
00  │ 0 │ 1 │ 1 │ 0 │
    ├───┼───┼───┼───┤
01  │ 0 │ 1 │ 1 │ 0 │
    ├───┼───┼───┼───┤
11  │ 0 │ 1 │ 1 │ 0 │
    ├───┼───┼───┼───┤
10  │ 0 │ 1 │ 1 │ 0 │
    └───┴───┴───┴───┘
```

**Gruppe:** Die beiden mittleren Spalten (CD=01 und CD=11) bilden eine 8er-Gruppe über alle Reihen.

→ A, B wechseln → weglassen  
→ C=0/1 wechselt → weglassen  
→ D=1 konstant → **D**

**Ergebnis: `Y = D`** – alle Minterme haben D=1!
