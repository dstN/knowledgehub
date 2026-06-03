---
title: Kostenbewertung von IT-Investitionen
description: TCO, ROI, Leasing vs. Kauf, Amortisationszeit und Finanzierungsmodelle
---

Bei IT-Investitionen ist es essentiell, die Gesamtkosten und Rentabilität über den gesamten Lebenszyklus zu bewerten. Eine unzureichende Kostenbewertung führt zu ungünstigen Finanzierungsentscheidungen.

## Total Cost of Ownership (TCO)

### Definition
**TCO** sind die Gesamtkosten, die mit der Beschaffung, dem Betrieb und der Entsorgung einer IT-Lösung verbunden sind.

### TCO-Komponenten

| Kostenkategorie | Beispiele |
|---|---|
| **Anschaffungskosten** | Hardware, Software-Lizenzen, Implementierung |
| **Betriebskosten** | Personal, Wartung, Support, Strom |
| **Infrastrukturkosten** | Rechenzentrum, Kühlung, Sicherheit |
| **Schulungskosten** | Mitarbeiterschulung, Dokumentation |
| **Entsorgungskosten** | Recycling, Datenvernichtung |
| **Downtime-Kosten** | Produktionsverluste bei Ausfällen |

### TCO-Berechnung

$$\text{TCO} = \text{Anschaffung} + \text{Betrieb} + \text{Support} + \text{Entsorgung} - \text{Restwert}$$

**Beispiel:**
- Anschaffung: 50.000€
- Jährliche Betriebskosten: 8.000€ × 5 Jahre = 40.000€
- Support: 5.000€ × 5 Jahre = 25.000€
- Entsorgung: 2.000€
- Restwert nach 5 Jahren: -5.000€
- **TCO = 50.000 + 40.000 + 25.000 + 2.000 - 5.000 = 112.000€**

---

## Return on Investment (ROI)

### Definition
**ROI** misst die Rentabilität einer Investition als Prozentsatz des investierten Kapitals.

### ROI-Formel

$$\text{ROI (\%)} = \frac{\text{Nutzen} - \text{Kosten}}{\text{Kosten}} \times 100$$

**Beispiel:**
- Investition: 100.000€
- Nutzen über 3 Jahre: 180.000€ (Einsparungen, Effizienzgewinne)
- ROI = (180.000 - 100.000) / 100.000 × 100 = **80%**

### ROI-Interpretation
- **ROI > 0**: Gewinnbringend
- **ROI > 20%**: Attraktiv
- **ROI > 50%**: Sehr attraktiv
- **ROI < 0**: Verlustbringend (meiden)

---

## Leasing vs. Kauf

### Kauf (CapEx)

**Vorteile:**
- Volles Eigentum
- Keine Vertragsbindung
- Langfristig kostengünstiger
- Bilanzierbar als Anlagegut

**Nachteile:**
- Hohe Anschaffungskosten
- Obsoleszenzrisiko
- Instandhaltung selbst zahlen
- Kapitalbindung

### Leasing (OpEx)

**Vorteile:**
- Niedrige monatliche Kosten
- Wartung oft im Leasing enthalten
- Regelmäßige Hardware-Updates
- Flexibilität

**Nachteile:**
- Teurer über lange Zeit
- Vertragsbindung
- Keine Eigentumsrechte
- Vorzeitige Kündigung oft teuer

### Entscheidungsmatrix

| Kriterium | Kauf | Leasing |
|---|---|---|
| **Nutzungsdauer** | > 5 Jahre | < 3 Jahre |
| **Budget** | Verfügbar | Begrenzt |
| **Technologie-Dynamik** | Stabil | Schnelle Änderungen |
| **Wartung** | Selbst übernehmen | Vertragspartner |
| **Gesamtkosten (3J.)** | Oft günstiger | Oft teurer |

---

## Amortisationszeit

### Definition
**Amortisationszeit** = Zeit bis die Investition durch Einsparungen wieder eingespielt ist.

### Berechnung (einfach)

$$\text{Amortisationszeit} = \frac{\text{Investition}}{\text{Jährlicher Nutzen}}$$

**Beispiel:**
- Investition: 60.000€
- Jährliche Einsparung: 15.000€
- Amortisationszeit = 60.000 / 15.000 = **4 Jahre**

### Interpretation
- < 2 Jahre: Sehr attraktiv (schnelle Rentabilität)
- 2–4 Jahre: Gut (Standard)
- 4–6 Jahre: Akzeptabel (längerfristig)
- > 6 Jahre: Kritisch (lange Wartezeit)

---

## Finanzierungsoptionen

### 1. Eigenfinanzierung (Cash)
- Zahlung in bar
- Keine Zinsen
- Hohe Liquiditätsbeanspruchung

### 2. Kreditfinanzierung
- Darlehen von Bank
- Zinszahlungen
- Bonitätsprüfung erforderlich
- Bilanzielle Verschuldung

### 3. Leasing
- Operatives Leasing (mieten)
- Finanzleasing (quasi-Kauf mit Finanzierung)
- Keine Bilanzverschuldung (bei OL)

### 4. Mietmodelle / SaaS
- Cloud-Lösungen ohne Hardware-Investition
- Pay-as-you-go
- Flexible Skalierung

---

## Praktische Fallbeispiele

### Szenario 1: Server-Beschaffung (5-Jahres-Plan)
**Option A: Kauf**
- Anschaffung: 80.000€
- Jährliche Betriebskosten: 5.000€
- TCO über 5 Jahre: 105.000€
- Restwert: 10.000€ → **Netto-TCO: 95.000€**

**Option B: Leasing**
- Monatliche Miete: 1.500€ × 60 Monate = 90.000€
- Wartung inklusive
- Support inklusive
- **TCO: 90.000€**

**Empfehlung:** Leasing (5.000€ günstiger, weniger Verwaltungsaufwand)

### Szenario 2: Software-Lizenzmodell
**Option A: Perpetual License (unbegrenzt)**
- Kaufpreis: 50.000€
- Update-Kosten: 5.000€/Jahr
- 5-Jahr-TCO: 75.000€

**Option B: SaaS (Abo)**
- Monatlich: 1.200€ × 60 = 72.000€
- Updates & Support inklusive
- 5-Jahr-TCO: 72.000€

**Empfehlung:** SaaS (günstiger, flexibler, kein Upgrade-Aufwand)

---

## Energiekosten-Betrachtung

### Stromverbrauch bewerten
- **Server**: 500W × 24h × 365 Tage = 4.380 kWh/Jahr
- **Bei 0,30€/kWh**: ~1.314€/Jahr × 5 Jahre = **6.570€**

### Energieeffiziente Hardware
- Moderne CPUs: 20–30% weniger Verbrauch
- Einsparung pro Server: ~1.500–2.000€ über 5 Jahre
- **Invest in Efficiency zahlt sich aus!**

---

## Best Practices

1. **Früh bewerten**: TCO-Analyse VOR dem Kauf durchführen
2. **Alle Kosten erfassen**: Nicht nur Anschaffung berücksichtigen
3. **Langfristig rechnen**: Mindestens 5-Jahres-Perspektive
4. **Szenarioanalyse**: Best-/Worst-Case durchspielen
5. **Verhandeln**: Rabatte, Rückgabeoptionen aushandeln
6. **Dokumentieren**: Alle Annahmen festhalten

---

## Verwandte Themen

- [Angebotsvergleich](/systemtechnik/07-angebotsvergleich/)
- [Handelskalkulation](/systemtechnik/08-handelskalkulation/)
- [Leistungsarten & Energieeffizienz](/systemtechnik/02-leistungsarten/)
