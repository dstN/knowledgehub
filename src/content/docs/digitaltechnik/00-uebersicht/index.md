---
title: Digitaltechnik – Übersicht
description: Alle Kapitel der Digitaltechnik auf einen Blick – mit Lernzielen, Schwierigkeitsgrad und empfohlener Reihenfolge.
---

# Digitaltechnik – Übersicht

Digitaltechnik ist das Fundament, auf dem jeder Computer aufbaut. Du wirst hier verstehen, wie ein Rechner auf der untersten Ebene funktioniert – von Nullen und Einsen über logische Verknüpfungen bis hin zu echten Schaltungen.

> **Für wen?** Dieses Kapitel richtet sich an Fachinformatiker im ersten Ausbildungsjahr. Die Inhalte orientieren sich am Lehrplan für die IHK-Prüfung.

---

## Empfohlene Reihenfolge

Die Kapitel bauen aufeinander auf. Halte dich möglichst an diese Reihenfolge – wer KV-Diagramme ohne Boolesche Algebra lernt, schaufelt sich selbst eine Grube.

```
Zahlensysteme
    ↓
Boolesche Algebra
    ↓
De Morgansches Gesetz
    ↓
KV-Diagramme          ← (braucht Boolesche Algebra + De Morgan)
    ↓
Codes                 ← (braucht Zahlensysteme)
    ↓
Halb- & Volladdierer  ← (braucht Boolesche Algebra + Zahlensysteme)
    ↓
Flipflops & Schaltwerke ← (braucht Boolesche Algebra + Addierer)
```

---

## Kapitelübersicht

### 01 – Zahlensysteme
**Schwierigkeit:** ★☆☆ – Einstieg

Binär, Dezimal, Hexadezimal, Oktal, Umrechnung, Zweierkomplement.

**Nach diesem Kapitel kannst du...**
- Zahlen zwischen Binär, Dezimal und Hexadezimal umrechnen
- Den Divisionsalgorithmus (÷2 mit Rest) sicher anwenden
- Negative Zahlen im Zweierkomplement darstellen
- Erklären, warum Computer kein Minus kennen

---

### 02 – Boolesche Algebra
**Schwierigkeit:** ★★☆ – Grundlage für alles weitere

Logikgatter (AND, OR, NOT, NAND, NOR, XOR), Wahrheitstabellen, Gesetze, DNF/KNF.

**Nach diesem Kapitel kannst du...**
- Alle 7 Standardgatter mit Wahrheitstabelle beschreiben
- Boolesche Ausdrücke mit den Grundgesetzen vereinfachen
- Eine Wahrheitstabelle in eine DNF-Formel übersetzen
- Erklären, warum NAND und NOR universell sind

---

### 03 – De Morgansches Gesetz
**Schwierigkeit:** ★★☆ – kurz, aber prüfungsrelevant

Die zwei Regeln, Beweise, Anwendung auf Schaltungsumformung.

**Nach diesem Kapitel kannst du...**
- Beide De Morgan-Regeln auswendig und mit Begründung angeben
- Negierte Ausdrücke sicher umformen
- Eine beliebige Schaltung nur mit NAND-Gattern realisieren
- Den häufigsten Fehler (Zeichen nicht wechseln) aktiv vermeiden

---

### 04 – KV-Diagramme
**Schwierigkeit:** ★★★ – Übungssache

Minimierung boolescher Ausdrücke grafisch, 2/3/4 Variablen, Don't-Care.

**Nach diesem Kapitel kannst du...**
- Ein KV-Diagramm für 2 bis 4 Variablen korrekt aufstellen
- Gültige Gruppen (2er-Potenzen, rechteckig, Randwrap) identifizieren
- Aus einer Gruppe den minimierten Term ablesen
- Don't-Care-Zustände sinnvoll für Vereinfachungen nutzen
- SOP- und POS-Form aus dem Diagramm ableiten

---

### 05 – Codes (BCD, Gray, ASCII)
**Schwierigkeit:** ★☆☆ – Faktenwissen

Zahlencodes und Zeichencodes, die über reines Binär hinausgehen.

**Nach diesem Kapitel kannst du...**
- BCD-Code erklären und in Dezimal umrechnen
- Den Gray-Code von normalem Binär unterscheiden
- Die ASCII-Tabelle grob einordnen (Kontrollzeichen, Ziffern, Buchstaben)
- Erklären, warum im KV-Diagramm Gray-Code verwendet wird

---

### 06 – Halb- & Volladdierer
**Schwierigkeit:** ★★☆ – Schaltungsdesign

Wie Computer addieren – von einem Bit bis zum n-Bit-Addierer.

**Nach diesem Kapitel kannst du...**
- Halbaddierer und Volladdierer mit Wahrheitstabelle erklären
- Die booleschen Formeln S = A XOR B und Cout = A AND B herleiten
- Einen 4-Bit-Ripple-Carry-Addierer skizzieren
- Erklären, wie Subtraktion als Addition realisiert wird

---

### 07 – Flipflops & Schaltwerke
**Schwierigkeit:** ★★★ – sequentielle Logik

RS-Flipflop, D-Flipflop, JK-Flipflop, Unterschied zu Schaltnetzen.

**Nach diesem Kapitel kannst du...**
- Den Unterschied zwischen Schaltnetz und Schaltwerk nennen
- RS-, D- und JK-Flipflops anhand ihrer Wahrheitstabellen erklären
- Den verbotenen Zustand beim RS-FF identifizieren
- Einfache Schaltwerke (Zähler, Register) konzeptionell beschreiben

---

## Quick-Reference: Die wichtigsten Formeln

| Thema | Formel / Regel |
|-------|---------------|
| Binär → Dez | Potenzen aufaddieren: 1011 = 8+2+1 = 11 |
| Dez → Binär | ÷2, Reste von unten lesen |
| Zweierkomplement | Invertieren + 1 |
| AND | A · B = 1 nur wenn beide 1 |
| OR | A + B = 0 nur wenn beide 0 |
| De Morgan 1 | NOT(A · B) = NOT(A) + NOT(B) |
| De Morgan 2 | NOT(A + B) = NOT(A) · NOT(B) |
| Halbaddierer | S = A XOR B, Cout = A AND B |
| Volladdierer | S = A XOR B XOR Cin |
| KV-Gruppen | Nur 2er-Potenzen: 1, 2, 4, 8, 16 |

---

## Prüfungsrelevanz

Diese Themen tauchen regelmäßig in IHK-Prüfungen auf:

| Thema | Häufigkeit | Typische Aufgabe |
|-------|-----------|-----------------|
| Zahlensysteme | ★★★ | Umrechnung Binär ↔ Hex ↔ Dez |
| Boolesche Algebra | ★★★ | Wahrheitstabelle, Vereinfachung |
| De Morgan | ★★☆ | Ausdruck umformen, NAND-Realisierung |
| KV-Diagramm | ★★★ | Minimierung aus Mintermliste |
| Addierer | ★★☆ | Schaltung skizzieren, Wahrheitstabelle |
| Flipflops | ★★☆ | Zustandstabelle, Unterschied RS/D/JK |
| Codes | ★☆☆ | BCD-Darstellung, ASCII-Zuordnung |
