---
title: Codes – BCD, Gray, ASCII
description: Zahlencodes und Zeichencodes in der Digitaltechnik – BCD, Gray-Code, ASCII und warum jeder Code seinen Zweck hat.
---

# Codes – BCD, Gray und ASCII

Nicht jede Anwendung kommt mit reinem Binär aus. Manchmal braucht man besondere Eigenschaften: nur eine Bitstelle soll sich beim Zählen ändern (Gray), dezimale Ziffern sollen direkt codiert werden (BCD), oder Zeichen brauchen eine einheitliche Zuordnung (ASCII). Für jeden Zweck gibt es einen Code.

---

## BCD – Binary Coded Decimal

### Was ist BCD?

BCD codiert jede Dezimalziffer **separat als 4-Bit-Binärzahl** (Nibble). Das klingt ineffizient – ist aber in der Praxis für Displays, Taschenrechner und Zähler praktisch, weil man direkt von Dezimal zu Anzeige gelangt.

### BCD-Tabelle

| Dezimalziffer | BCD (4 Bit) |
|--------------|-------------|
| 0 | 0000 |
| 1 | 0001 |
| 2 | 0010 |
| 3 | 0011 |
| 4 | 0100 |
| 5 | 0101 |
| 6 | 0110 |
| 7 | 0111 |
| 8 | 1000 |
| 9 | 1001 |
| 10–15 | **ungültig** (Don't-Care) |

> **Wichtig:** BCD nutzt nur 10 von 16 möglichen 4-Bit-Kombinationen. Die Werte 1010 bis 1111 (10–15) sind im BCD **verboten** und tauchen als Don't-Care-Zustände im KV-Diagramm auf.

### BCD-Darstellung mehrziffriger Zahlen

Jede Dezimalziffer wird einzeln codiert:

```
Dezimal:  4    7    3
BCD:    0100 0111 0011
```

**Vergleich: BCD vs. reines Binär**

```
473 dezimal
- BCD:   0100 0111 0011   (12 Bit)
- Binär: 0001 1101 1001   (9 Bit reichen, 12 zur Übersicht)
```

BCD ist nicht speichereffizient, aber direkt für 7-Segment-Displays verwendbar.

### BCD-Addition

Beim Addieren zweier BCD-Zahlen kann ein ungültiger Zustand entstehen:

```
  0111  (7)
+ 0110  (6)
------
  1101  (= 13 dezimal, aber 13 ist keine BCD-Ziffer!)

Korrektur: + 0110 (6 addieren)
  1101
+ 0110
------
1 0011  → Übertrag + 3 = "13" in BCD korrekt dargestellt
```

> **Merkhilfe:** Wenn das 4-Bit-Ergebnis > 9 ist oder ein Übertrag entsteht → addiere 6 zur Korrektur.

---

## Gray-Code

### Was ist der Gray-Code?

Der Gray-Code ist ein binärer Code, bei dem sich **beim Zählen immer genau ein Bit ändert** (Ein-Bit-Distanz). Das ist der Grund, warum er im KV-Diagramm verwendet wird.

### Gray-Code vs. Binär im Vergleich

| Dezimal | Binär | Gray-Code |
|---------|-------|-----------|
| 0 | 0000 | 0000 |
| 1 | 0001 | 0001 |
| 2 | 0010 | 0011 |
| 3 | 0011 | 0010 |
| 4 | 0100 | 0110 |
| 5 | 0101 | 0111 |
| 6 | 0110 | 0101 |
| 7 | 0111 | 0100 |
| 8 | 1000 | 1100 |
| 9 | 1001 | 1101 |
| 10 | 1010 | 1111 |
| 11 | 1011 | 1110 |
| 12 | 1100 | 1010 |
| 13 | 1101 | 1011 |
| 14 | 1110 | 1001 |
| 15 | 1111 | 1000 |

> **Beobachtung:** Im normalen Binärcode wechseln beim Übergang z.B. von 7 (0111) zu 8 (1000) **alle vier Bits** gleichzeitig. Im Gray-Code nur eines.

### Warum ist das wichtig?

**Mechanische Encoder (Drehgeber):** In einem optischen oder mechanischen Positionsgeber kann bei normalem Binärcode ein kurzzeitiger Fehlzustand entstehen, wenn mehrere Bits gleichzeitig kippen (Laufzeitunterschiede). Mit Gray-Code ist das ausgeschlossen.

**KV-Diagramme:** Die Spalten/Zeilen folgen Gray-Code-Reihenfolge (00, 01, 11, 10), damit benachbarte Felder wirklich nur ein Bit unterscheiden – das ermöglicht die Gruppenbildung.

### Binär → Gray umrechnen

**Regel:** MSB bleibt gleich. Jedes weitere Gray-Bit = XOR des aktuellen und vorherigen Binär-Bits.

```
Binär:    1  0  1  1
          ↓  ↓  ↓  ↓
Gray:     1  1  1  0

Schritt:
G3 = B3 = 1
G2 = B3 XOR B2 = 1 XOR 0 = 1
G1 = B2 XOR B1 = 0 XOR 1 = 1
G0 = B1 XOR B0 = 1 XOR 1 = 0
```

### Gray → Binär umrechnen

**Regel:** MSB bleibt gleich. Jedes weitere Binär-Bit = XOR des vorherigen Binär-Bits mit dem aktuellen Gray-Bit.

```
Gray:    1  1  1  0
         ↓  ↓  ↓  ↓
Binär:   1  0  1  1

Schritt:
B3 = G3 = 1
B2 = B3 XOR G2 = 1 XOR 1 = 0
B1 = B2 XOR G1 = 0 XOR 1 = 1
B0 = B1 XOR G0 = 1 XOR 0 = 1
```

> **Merkhilfe:** Binär → Gray: von **links nach rechts** XOR-ieren (jeweils mit dem linken Binärbit).  
> Gray → Binär: von **links nach rechts** XOR-ieren (jeweils mit dem linken **Binär**bit).

---

## ASCII – American Standard Code for Information Interchange

### Was ist ASCII?

ASCII ist ein **Zeichencode**, der jedem druckbaren Zeichen (Buchstaben, Ziffern, Sonderzeichen) und einigen Steuerzeichen eine 7-Bit-Zahl (0–127) zuordnet.

### ASCII-Struktur

| Bereich | Dezimal | Beschreibung |
|---------|---------|--------------|
| Steuerzeichen | 0–31 | NUL, TAB, LF, CR, ESC ... |
| Ziffern | 48–57 | '0' bis '9' |
| Großbuchstaben | 65–90 | 'A' bis 'Z' |
| Kleinbuchstaben | 97–122 | 'a' bis 'z' |
| Sonderzeichen | verteilt | Leerzeichen (32), '@' (64), ... |

### Wichtige ASCII-Werte auswendig

| Zeichen | Dezimal | Hex | Binär |
|---------|---------|-----|-------|
| `NUL` | 0 | 0x00 | 00000000 |
| `TAB` | 9 | 0x09 | 00001001 |
| `LF` (Newline) | 10 | 0x0A | 00001010 |
| `CR` (Return) | 13 | 0x0D | 00001101 |
| `ESC` | 27 | 0x1B | 00011011 |
| `Leerzeichen` | 32 | 0x20 | 00100000 |
| `0` | 48 | 0x30 | 00110000 |
| `9` | 57 | 0x39 | 00111001 |
| `A` | 65 | 0x41 | 01000001 |
| `Z` | 90 | 0x5A | 01011010 |
| `a` | 97 | 0x61 | 01100001 |
| `z` | 122 | 0x7A | 01111010 |

### Merktricks für ASCII

> **Ziffern beginnen bei 48:** '0' = 48, also '5' = 53. Formel: Ziffer + 48 = ASCII.

> **Groß/Kleinbuchstaben unterscheiden sich um 32:** 'A' = 65, 'a' = 97. Bit 5 (Wert 32) macht den Unterschied – das ist der Trick für schnelle Groß/Klein-Konvertierung in der Programmierung: `c | 0x20` → Kleinbuchstabe, `c & 0xDF` → Großbuchstabe.

> **Merkhilfe Reihenfolge:** Zahlen kommen vor Großbuchstaben, Großbuchstaben vor Kleinbuchstaben. Alphabetisch sortiert stimmt ASCII mit der visuellen Reihenfolge überein.

### ASCII und seine Nachfolger

Originales ASCII hat 7 Bit (128 Zeichen) – keine Umlaute, keine Sonderzeichen außerhalb des englischen Alphabets.

| Standard | Bits | Zeichen | Umlaute? |
|----------|------|---------|----------|
| ASCII | 7 | 128 | Nein |
| ISO 8859-1 (Latin-1) | 8 | 256 | Ja (ä, ö, ü) |
| UTF-8 | variabel | >1 Mio. | Ja (alle Sprachen) |

> UTF-8 ist **rückwärtskompatibel zu ASCII** – die ersten 128 Zeichen sind identisch.

---

## Vergleich aller drei Codes

| | BCD | Gray | ASCII |
|---|---|---|---|
| Zweck | Dezimalziffern codieren | Zählen ohne Mehrfachwechsel | Zeichen einheitlich darstellen |
| Basis | 4 Bit pro Ziffer | n Bit | 7 Bit (Standard) |
| Besonderheit | Nur 0–9 gültig | Ein-Bit-Distanz | Steuer- + Druckzeichen |
| Anwendung | Displays, Zähler | Drehgeber, KV-Diagramm | Textübertragung, Dateien |

---

## Prüfungsaufgaben

**1. Codiere 365 in BCD.**
```
3    6    5
0011 0110 0101
```

**2. Konvertiere Dezimal 6 in Gray-Code.**
```
6 dezimal = 0110 binär
G3 = 0
G2 = 0 XOR 1 = 1
G1 = 1 XOR 1 = 0
G0 = 1 XOR 0 = 1
→ Gray: 0101
```

**3. Welchen ASCII-Wert hat 'F'?**
```
'A' = 65, 'F' ist der 6. Buchstabe → 65 + 5 = 70
```

**4. Warum verwendet das KV-Diagramm Gray-Code-Reihenfolge?**
```
Damit benachbarte Felder im Diagramm sich nur in einem
Eingangsvariablen-Bit unterscheiden – so können Gruppen
gebildet werden, die jeweils eine Variable eliminieren.
```
