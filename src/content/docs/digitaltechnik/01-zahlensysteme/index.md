---
title: Zahlensysteme
description: Binär, Dezimal, Hexadezimal und Oktal – Umrechnung, Arithmetik und Zweierkomplementdarstellung mit Merktricks für die Prüfung.
---

# Zahlensysteme

Computer kennen nur zwei Zustände: **Strom fließt (1)** oder **kein Strom (0)**. Alle Zahlen, Texte und Befehle werden darüber abgebildet. Das Verständnis der verschiedenen Zahlensysteme ist deshalb Pflichtprogramm.

---

## Die vier Zahlensysteme im Überblick

| System | Basis | Ziffern | Kürzel |
|--------|-------|---------|--------|
| Dezimal | 10 | 0–9 | (keine) |
| Binär (Dual) | 2 | 0, 1 | `0b` oder Suffix `₂` |
| Oktal | 8 | 0–7 | `0o` oder Suffix `₈` |
| Hexadezimal | 16 | 0–9, A–F | `0x` oder Suffix `₁₆` |

> **Merkhilfe:** In der Informatik begegnen dir fast immer nur Binär und Hex. Oktal ist ein historisches Relikt (PDP-Computer der 1970er), taucht aber gelegentlich noch in Prüfungen auf.

---

## Stellenwertsystem – das Prinzip hinter allem

Jede Stelle hat einen **Wert = Ziffer × Basis^Position**.

**Beispiel Dezimal: 437**
```
4 × 10² + 3 × 10¹ + 7 × 10⁰
= 4×100 + 3×10  + 7×1
= 400   + 30    + 7
= 437
```

**Beispiel Binär: 1011₂**
```
1 × 2³ + 0 × 2² + 1 × 2¹ + 1 × 2⁰
= 8    + 0    + 2    + 1
= 11₁₀
```

> **Lernhilfe:** Die Position von rechts (ab 0 zählen!) gibt die Potenz an. Ganz rechts = 2⁰ = 1. Dann 2, 4, 8, 16, 32, 64, 128 ...

---

## Binär → Dezimal umrechnen

**Methode:** Potenzen von rechts nach links aufaddieren.

```
Binär:   1  1  0  1  0  0  1
         ↓  ↓  ↓  ↓  ↓  ↓  ↓
Potenz: 2⁶ 2⁵ 2⁴ 2³ 2² 2¹ 2⁰
        64  32  16   8   4   2   1

1×64 + 1×32 + 0×16 + 1×8 + 0×4 + 0×2 + 1×1
= 64 + 32 + 8 + 1 = 105
```

**Die Zweierpotenzen auswendig lernen:**

| 2⁰ | 2¹ | 2² | 2³ | 2⁴ | 2⁵ | 2⁶ | 2⁷ | 2⁸ | 2⁹ | 2¹⁰ |
|----|----|----|----|----|----|----|----|----|----|----|
| 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256 | 512 | 1024 |

> **Trick:** Jede Verdopplung = eine Stelle weiter links. Rückwärts: Halbieren.

---

## Dezimal → Binär umrechnen

**Methode: Division durch 2 mit Rest (Hornerschema)**

Teile immer durch 2 und notiere den Rest. Die Reste **von unten nach oben** ergeben die Binärzahl.

**Beispiel: 105 → Binär**
```
105 ÷ 2 = 52  Rest 1  ↑
 52 ÷ 2 = 26  Rest 0  |
 26 ÷ 2 = 13  Rest 0  |
 13 ÷ 2 =  6  Rest 1  |
  6 ÷ 2 =  3  Rest 0  |
  3 ÷ 2 =  1  Rest 1  |
  1 ÷ 2 =  0  Rest 1  ↑

Ergebnis (von unten nach oben): 1101001₂
```

> **Eselsbrücke:** „Rest von unten lesen" – wie ein Stapel, das zuletzt Geschriebene liegt oben.

---

## Hexadezimal – der Informatiker-Shortcut

Hex ist so beliebt, weil **eine Hex-Ziffer genau 4 Bit** darstellt (Nibble).

**Hex-Ziffern:**

| Dezimal | Hex | Binär |
|---------|-----|-------|
| 0 | 0 | 0000 |
| 1 | 1 | 0001 |
| 2 | 2 | 0010 |
| 3 | 3 | 0011 |
| 4 | 4 | 0100 |
| 5 | 5 | 0101 |
| 6 | 6 | 0110 |
| 7 | 7 | 0111 |
| 8 | 8 | 1000 |
| 9 | 9 | 1001 |
| 10 | A | 1010 |
| 11 | B | 1011 |
| 12 | C | 1100 |
| 13 | D | 1101 |
| 14 | E | 1110 |
| 15 | F | 1111 |

> **Merkhilfe für A–F:** „Ab 10 nimm den Buchstaben: A=10, B=11 … F=15". Oder: **A**lte **B**asen **C**omputern **D**ienen **E**ffizient **F**ürwahr.

### Binär ↔ Hex: der schnelle Weg

**Binär → Hex:** Gruppen von **4 Bit** von rechts, jede Gruppe direkt umwandeln.

```
1010 1111 0011₂
 A    F    3   = AF3₁₆
```

**Hex → Binär:** Jede Hex-Ziffer wird direkt in 4 Bit expandiert.

```
2C₁₆ = 0010 1100₂
```

### Hex → Dezimal

```
AF3₁₆ = A×16² + F×16¹ + 3×16⁰
       = 10×256 + 15×16 + 3×1
       = 2560  + 240  + 3
       = 2803₁₀
```

---

## Oktal – kurz und bündig

Basis 8, Ziffern 0–7. Eine Oktalziffer entspricht **3 Bit**.

```
Binär: 110 101 011₂
        6    5   3    → 653₈
```

---

## Binäre Addition

Regeln:
```
0 + 0 = 0
0 + 1 = 1
1 + 0 = 1
1 + 1 = 0  Übertrag 1 (carry)
1 + 1 + 1 = 1  Übertrag 1
```

**Beispiel: 1011 + 0110**
```
  1011
+ 0110
-------
  Überträge:  1 1
  1011
+ 0110
= 10001
```

> Übertrag funktioniert genau wie im Dezimalen – nur dass das "Fass" schon bei 2 überläuft, nicht bei 10.

---

## Zweierkomplement – negative Zahlen im Computer

Computer haben keine "Minus"-Taste. Negative Zahlen werden durch das **Zweierkomplement** dargestellt.

### Warum Zweierkomplement?

- Einfache Hardware (Subtraktion = Addition des Komplements)
- Nur eine Darstellung für 0
- Direktes Weiterrechnen ohne Sonderfälle

### Berechnung des Zweierkomplements

**Methode 1: Invertieren + 1**
1. Alle Bits umkehren (0→1, 1→0)
2. 1 addieren

**Beispiel: −5 in 8-Bit**
```
5 dezimal     = 0000 0101
Bits invertieren = 1111 1010   ← Einerkomplement
+ 1            = 1111 1011   ← Zweierkomplement = −5
```

**Methode 2: Von rechts bis zur ersten 1 alles kopieren, dann Rest invertieren**
```
0000 0101
          ↑ erste 1 von rechts
Bis zur ersten 1 kopieren: ...101
Rest invertieren:          11111...
Ergebnis: 1111 1011
```

### Wertebereich bei n Bit

| Bits | Ohne Vorzeichen | Mit Vorzeichen (Zweierkomplement) |
|------|----------------|----------------------------------|
| 8 | 0 bis 255 | −128 bis +127 |
| 16 | 0 bis 65.535 | −32.768 bis +32.767 |
| 32 | 0 bis ~4,3 Mrd | ~−2,1 Mrd bis ~+2,1 Mrd |

> **Erkennungsmerkmal:** Das **MSB (Most Significant Bit, ganz links)** ist bei negativen Zahlen immer **1**.

### Subtraktion durch Addition des Komplements

```
8 − 5 = 8 + (−5)

8    = 0000 1000
−5   = 1111 1011
     ──────────
       1 0000 0011  → Übertrag ignorieren → 0000 0011 = 3 ✓
```

---

## Übersicht: Umrechnungswege

```
         ┌──────────────┐
         │   Dezimal    │
         └──┬───────┬───┘
       ÷2   │       │   ÷16
     Rest   │       │   Rest
            ▼       ▼
         Binär ←→ Hex
         (4-Bit-Gruppen)
```

---

## Prüfungstypische Aufgaben

**1. Rechne 42₁₀ in Binär um.**
```
42 ÷ 2 = 21 R 0
21 ÷ 2 = 10 R 1
10 ÷ 2 =  5 R 0
 5 ÷ 2 =  2 R 1
 2 ÷ 2 =  1 R 0
 1 ÷ 2 =  0 R 1
→ 101010₂
```

**2. Was ist B4₁₆ in Dezimal?**
```
B×16 + 4×1 = 11×16 + 4 = 176 + 4 = 180₁₀
```

**3. Wie lautet −13 im 8-Bit-Zweierkomplement?**
```
13 = 0000 1101
inv = 1111 0010
+1  = 1111 0011
```

---

## Lernkarte: Auf einen Blick

| Was? | Wie? | Beispiel |
|------|------|---------|
| Binär → Dez | Potenzen aufaddieren | 1011 = 8+2+1 = 11 |
| Dez → Binär | ÷2, Reste von unten lesen | 13 = 1101 |
| Binär → Hex | 4er-Gruppen | 1010 = A |
| Hex → Binär | Jede Ziffer → 4 Bit | F = 1111 |
| Negation | Invertieren + 1 | −5 = 1111 1011 |
