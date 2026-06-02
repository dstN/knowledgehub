---
title: Leistungsarten – Wirkleistung, Blindleistung, Scheinleistung
description: P, Q, S und der Leistungsfaktor cos φ in der Elektrotechnik
---

In Wechselstromsystemen gibt es drei verschiedene Leistungsarten, die unterschiedliche Aspekte der Energieversorgung beschreiben. Das Verständnis dieser Leistungen ist essentiell für die Dimensionierung von Stromversorgungsanlagen.

## Wirkleistung (P)

### Definition
**Wirkleistung** ist die tatsächlich verbrauchte oder genutzte Leistung, die in Wärme, Licht oder mechanische Arbeit umgewandelt wird.

- **Symbol**: P
- **Einheit**: Watt (W), Kilowatt (kW)
- **Formel**: P = U × I × cos φ

### Beispiele
- Eine 100-W-Glühbirne verbraucht 100 W Wirkleistung
- Ein Computer mit 500 W nutzt 500 W zur Berechnung und als Wärme
- Solaranlage mit 10 kW erzeugt 10 kW Wirkleistung (bei optimalen Bedingungen)

---

## Blindleistung (Q)

### Definition
**Blindleistung** entsteht durch Phasenverschiebung zwischen Spannung und Strom. Sie wird zwischen Quelle und Last hin- und hergeleitet, ohne verbraucht zu werden.

- **Symbol**: Q
- **Einheit**: Voltampere Reaktiv (var), Kilovoltampere Reaktiv (kvar)
- **Formel**: Q = U × I × sin φ

### Ursachen
- **Induktive Lasten**: Motoren, Transformatoren, Drosseln (Blindleistung verzögert Strom)
- **Kapazitive Lasten**: Kondensatoren, moderne Elektronik (Blindleistung eilt Strom voraus)

### Problem
- Erhöht die erforderliche Leitungsquerschnitte
- Erzeugt unnötige Verluste in Stromleitungen
- Wird oft von Stromanbietern berechnet oder bestraft

---

## Scheinleistung (S)

### Definition
**Scheinleistung** ist die geometrische Summe aus Wirk- und Blindleistung. Sie beschreibt die gesamte „Last" auf der Stromversorgung.

- **Symbol**: S
- **Einheit**: Voltampere (VA), Kilovoltampere (kVA)
- **Formel**: S = √(P² + Q²) oder S = U × I

### Beziehung der Leistungen
```
      Q (Blindleistung)
      |
      |     / S (Scheinleistung)
      |    /
      |   / φ
      |__/_________________ P (Wirkleistung)
      O (Ursprung)
```

---

## Leistungsfaktor (cos φ)

### Definition
Der Leistungsfaktor beschreibt, welcher Anteil der Scheinleistung tatsächlich nutzbar ist.

- **Symbol**: cos φ
- **Bereich**: 0 bis 1 (ideal ist 1,0)
- **Formel**: cos φ = P / S

### Beispiele
- cos φ = 1,0: Rein ohmsche Last (Heizung, Glühbirne) – 100% Wirkleistung
- cos φ = 0,7: Induktive Last mit Blindleistung – nur 70% nutzbar
- cos φ = 0,95: Moderne Elektronik mit Leistungsfaktor-Korrektur

### Auswirkungen
| cos φ | Interpretation | Problem |
|-------|---|---|
| 1,0 | Optimal | Keine |
| 0,9 – 1,0 | Gut | Minimale Verluste |
| 0,8 – 0,9 | Akzeptabel | Erhöhte Leitungsverluste |
| < 0,8 | Schlecht | Große Stromleitungen nötig, teure Strafgebühren |

---

## Leistungsfaktor-Korrektur

### Warum?
- Reduzierung der Leitungsverluste
- Vermeidung von Strafgebühren durch den Stromanbieter
- Kleinere und günstigere Stromversorgungsanlage erforderlich

### Wie?
**Kondensator-Batterie parallel zur Last**
- Induktive Blindleistung wird durch kapazitive Blindleistung kompensiert
- Phasenverschiebung wird minimiert

### Beispiel: Rechenzentrum
- Ungefilterte Last: cos φ = 0,75 → 30 kW Wirkleistung erzeugt 40 kVA Scheinleistung
- Mit Korrektur: cos φ = 0,95 → 30 kW Wirkleistung erzeugt ~31,6 kVA Scheinleistung
- **Einsparung**: USV-Dimensionierung kann kleiner ausfallen

---

## Praktische Anwendung

### Dimensionierung einer USV
Bei einer USV-Anlage für ein Rechenzentrum:

**Szenario:**
- 20 Server à 2 kW = 40 kW Wirkleistung
- Durchschnittlicher cos φ = 0,85
- Erforderliche Scheinleistung: S = 40 kW / 0,85 = **47,1 kVA**

Eine 40-kVA-USV reicht nicht aus! Man benötigt mindestens eine 50-kVA-Anlage.

### Stromkostenberechnung
Viele Stromverträge belasten:
- kWh für Wirkleistung
- kvarh für Blindleistung (oder Strafgebühren, wenn cos φ < 0,9)

---

## Zusammenfassung

| Leistungsart | Symbol | Einheit | Bedeutung |
|---|---|---|---|
| **Wirkleistung** | P | W, kW | Tatsächlich verbrauchte/nutzbare Leistung |
| **Blindleistung** | Q | var, kvar | Hin- und hergeleitet, nicht verbraucht |
| **Scheinleistung** | S | VA, kVA | Gesamtlast auf der Stromversorgung |
| **Leistungsfaktor** | cos φ | 0–1 | Anteil der Wirkleistung an der Scheinleistung |

---

## Verwandte Themen

- [Stromversorgung & USV](/systemtechnik/01-stromversorgung/)
- [Energieeffizienz in Rechenzentren](/systemtechnik/04-brandschutz/)
