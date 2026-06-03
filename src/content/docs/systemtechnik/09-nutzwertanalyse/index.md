---
title: Nutzwertanalyse – Entscheidungen objektiv begründen
description: Schritt-für-Schritt-Anleitung zur Nutzwertanalyse mit Formeln, FISI-Beispiel und Prüfungs-Checkliste
---

Als Systemintegrator stehst du regelmäßig vor Entscheidungen, bei denen nicht nur der Preis zählt: Supportqualität, Datenschutz, Skalierbarkeit oder der Ruf eines Herstellers lassen sich nicht einfach in Euro umrechnen. Die **Nutzwertanalyse (NWA)** hilft dir, solche Alternativen strukturiert zu vergleichen und die Entscheidung nachvollziehbar zu dokumentieren.

## Kernziel: Was ist eine Nutzwertanalyse?

Die Nutzwertanalyse — auch **Scoring-Modell** oder **Punktwertverfahren** genannt — ist eine strukturierte Methode, um mehrere Alternativen anhand verschiedener Kriterien zu vergleichen. Dabei werden sowohl **messbare (quantitative)** als auch **nicht messbare (qualitative)** Eigenschaften berücksichtigt.

Das Ergebnis ist eine einzige Zahl pro Alternative: der **Nutzwert** (Gesamtpunktzahl). Die Alternative mit dem höchsten Nutzwert gewinnt — sofern keine **K.O.-Kriterien** verletzt wurden.

### Wann brauchst du eine NWA?

| Situation | Warum NWA? | IT-Beispiel |
|---|---|---|
| Mehrere Alternativen mit unterschiedlichen Stärken | Kein Angebot ist in allem am besten | Server A günstig, Server B energieeffizient |
| Qualitative Faktoren spielen eine Rolle | Nicht alles lässt sich in Euro ausdrücken | Supportqualität, Lieferantenreputation |
| Entscheidung muss dokumentiert werden | Compliance, Ausschreibungen, Revisionssicherheit | Behördenbeschaffung: Warum Anbieter X? |
| Mehrere Entscheider müssen sich einigen | Einheitliche Bewertungsgrundlage | IT-Leitung + Einkauf + Geschäftsführung |

### Vor- und Nachteile

**Vorteile:**
- Transparente, nachvollziehbare Entscheidungsgrundlage
- Kombination aus harten Zahlen und weichen Faktoren
- Gute Dokumentation für Prüfungen, Audits und interne Freigaben
- Einigung zwischen mehreren Stakeholdern erleichtert

**Nachteile:**
- Subjektivität bei Gewichtung und Punktvergabe
- Scheingenauigkeit (7,30 vs. 7,10 wirkt exakt, basiert aber auf Einschätzungen)
- Ergebnis hängt stark von der Kriterienauswahl ab
- Aufwand für Erstellung und Abstimmung

---

## Qualitative vs. quantitative Kriterien

| Art | Merkmal | IT-Beispiele | In der NWA |
|---|---|---|---|
| **Quantitativ** | Exakt messbar, mit Einheit | Preis (€), Garantie (Monate), RAM (GB), TCO (€/Jahr) | Messwerte werden in Punkte umgewandelt |
| **Qualitativ** | Bewertbar, aber nicht direkt messbar | Supportqualität, Benutzerfreundlichkeit, Zukunftssicherheit | Direkte Punktevergabe (z. B. 1–10) |

Nur quantitative Kriterien würden immer das günstigste Gerät favorisieren. Nur qualitative Kriterien wären zu subjektiv. Die NWA verbindet beides: qualitative Einschätzungen werden **vergleichbar**, messbare Zahlen bleiben **Teil der Entscheidung**.

---

## Muss- und Soll-Kriterien

Bevor du die gewichtete Bewertung startest, trennst du die Anforderungen in zwei Kategorien:

| Typ | Bedeutung | Behandlung in der NWA |
|---|---|---|
| **Muss-Kriterium** (Ausschlusskriterium, K.O.-Kriterium) | Mindestanforderung, die zwingend erfüllt sein muss | Alternative scheidet bei Nichterfüllung **sofort aus** — unabhängig vom Nutzwert |
| **Soll-Kriterium** | Wünschenswerte Eigenschaft, die Alternativen unterscheidet | Wird in der **Kriterienmatrix** mit Gewichtung und Punkten bewertet |

**Beispiele für Muss-Kriterien:**
- Budget-Obergrenze (max. 100.000 €)
- DSGVO-Konformität / Datenhaltung in der EU
- Mindest-SLA (99,9 % Verfügbarkeit)
- Kompatibilität mit bestehender Active-Directory-Umgebung

**Beispiel:** Eine Cloud-Lösung speichert Daten außerhalb der EU → K.O. für eine Anwaltskanzlei, auch wenn der Gesamtnutzwert sonst am höchsten wäre.

---

## Das Verfahren in 6 Schritten

1. **Alternativen definieren** — Mindestens zwei, typisch drei Optionen (z. B. NAS, Cloud, File-Server)
2. **Kriterien festlegen** — Muss-Kriterien prüfen, dann Soll-Kriterien (qualitativ + quantitativ)
3. **Kriterien gewichten** — Gewichtungsfaktoren vergeben, Summe = **1,0 (100 %)**
4. **Alternativen bewerten** — Punktzahl pro Kriterium (üblich: Skala 1–10)
5. **Teilnutzwerte berechnen** — Punktzahl × Gewichtungsfaktor
6. **Gesamtnutzwert bilden und entscheiden** — Summe aller Teilnutzwerte; höchster Wert gewinnt

### Formeln

$$\text{Teilnutzwert} = \text{Punktzahl} \times \text{Gewichtungsfaktor}$$

$$\text{Gesamtnutzwert} = \sum \text{aller Teilnutzwerte einer Alternative}$$

**Kontrollregeln:**
- Summe aller Gewichtungsfaktoren = **genau 1,0**
- Maximaler Gesamtnutzwert = **10,0** (wenn alle Kriterien mit 10 Punkten bewertet werden)
- Ein Ergebnis von 7,8 bedeutet: 78 % des theoretischen Maximums

### Punktvergabe (Skala 1–10)

| Punkte | Bedeutung |
|---|---|
| 10 | Beste mögliche Erfüllung — besser geht nicht |
| 7–9 | Sehr gut bis gut |
| 4–6 | Befriedigend, mit Abstrichen |
| 1–3 | Schwach bis mangelhaft |

**Bei quantitativen Kriterien** (z. B. Preis): Günstigste Alternative = meiste Punkte, teuerste = wenigste Punkte.

**Proportionale Berechnung** (optional, z. B. bei Preis „je kleiner desto besser"):

$$\text{Punkte} = \frac{\text{bester Wert}}{\text{eigener Wert}} \times 10$$

Beispiel: Bester Preis 3.900 € → 10 P.; eigener Preis 4.800 € → (3.900 / 4.800) × 10 = **8,1 Punkte**

In der IHK-Prüfung werden Punkte meist direkt vorgegeben oder selbst begründet vergeben.

### Regeln für gute Soll-Kriterien

**Gut:** für alle Alternativen anwendbar, klar definiert, unabhängig voneinander, wirklich relevant, bewertbar

**Schlecht:** zu vage („gut"), Dopplungen („Preis" + „Kosten"), parteiisch (nur eine Alternative kann erfüllen), mehr als 8–10 Kriterien

---

## Praxisbeispiel: Speicherlösung für 80 Mitarbeiter

Ein Unternehmen sucht eine neue Speicherlösung. Drei Alternativen stehen zur Wahl:

| Alternative | Beschreibung |
|---|---|
| **A — NAS** | Eigenes NAS im Serverraum, einmaliger Kauf, Daten im Haus |
| **B — Cloud** | Microsoft OneDrive for Business, monatliches Abo, Microsoft verwaltet |
| **C — File-Server** | Zusätzliche Festplatten im vorhandenen Server, günstig, hoher Verwaltungsaufwand |

### Schritt 2: Soll-Kriterien

| Nr. | Kriterium | Art | Bewertungsinhalt |
|---|---|---|---|
| 1 | Anschaffungskosten | Quantitativ | Einmalige Investition in € |
| 2 | Betriebskosten | Quantitativ | Laufende Kosten pro Jahr in € |
| 3 | Datenschutz / Sicherheit | Qualitativ | Datenstandort, DSGVO |
| 4 | Benutzerfreundlichkeit | Qualitativ | Einarbeitungsaufwand der Mitarbeiter |
| 5 | Skalierbarkeit | Qualitativ | Wachstum mit dem Unternehmen |
| 6 | Verwaltungsaufwand | Qualitativ | IT-Aufwand für Betrieb |

### Schritt 3: Gewichtung

Unternehmen legt Wert auf Datenschutz und niedrige laufende Kosten:

| Kriterium | Gewichtung | Begründung |
|---|---|---|
| Anschaffungskosten | 0,20 (20 %) | Wichtig, aber nicht allein entscheidend |
| Betriebskosten | **0,25 (25 %)** | Langfristig entscheidend |
| Datenschutz / Sicherheit | **0,25 (25 %)** | Sensible Mitarbeiterdaten |
| Benutzerfreundlichkeit | 0,10 (10 %) | Schulung möglich |
| Skalierbarkeit | 0,10 (10 %) | Wachstum mittelfristig |
| Verwaltungsaufwand | 0,10 (10 %) | IT-Personal vorhanden |
| **Summe** | **1,00 ✓** | |

### Schritt 4: Punktevergabe

| Kriterium | A (NAS) | B (Cloud) | C (File-Server) |
|---|---|---|---|
| Anschaffungskosten | 6 — ca. 3.500 € | 9 — nur Abo | 8 — ca. 800 € |
| Betriebskosten | 7 — Strom, Wartung | 4 — 12.000 €/Jahr | 5 — Strom + Personal |
| Datenschutz | 9 — Daten im Haus | 6 — EU-Rechenzentrum, AVV nötig | 8 — intern, ältere Architektur |
| Benutzerfreundlichkeit | 7 — GUI, Einarbeitung | 9 — OneDrive bekannt | 5 — nur Laufwerk |
| Skalierbarkeit | 7 — bis Gehäuse-Limit | 10 — unbegrenzt | 4 — Server begrenzt |
| Verwaltungsaufwand | 7 — wenig nach Setup | 9 — Microsoft verwaltet | 3 — Backup, Updates manuell |

### Schritt 5 & 6: Teilnutzwerte und Gesamtergebnis

| Kriterium | Gewicht | A Pkt. | A TNW | B Pkt. | B TNW | C Pkt. | C TNW |
|---|---|---|---|---|---|---|---|
| Anschaffungskosten | 0,20 | 6 | 1,20 | 9 | 1,80 | 8 | 1,60 |
| Betriebskosten | 0,25 | 7 | 1,75 | 4 | 1,00 | 5 | 1,25 |
| Datenschutz | 0,25 | 9 | 2,25 | 6 | 1,50 | 8 | 2,00 |
| Benutzerfreundlichkeit | 0,10 | 7 | 0,70 | 9 | 0,90 | 5 | 0,50 |
| Skalierbarkeit | 0,10 | 7 | 0,70 | 10 | 1,00 | 4 | 0,40 |
| Verwaltungsaufwand | 0,10 | 7 | 0,70 | 9 | 0,90 | 3 | 0,30 |
| **Gesamtnutzwert** | **1,00 ✓** | | **7,30** | | **7,10** | | **6,05** |

**Ergebnis:**
1. **Alternative A (NAS) — 7,30**
2. Alternative B (Cloud) — 7,10
3. Alternative C (File-Server) — 6,05

**Empfehlung:** Alternative A (NAS). Besonders bei den höchst gewichteten Kriterien Betriebskosten (7 vs. 4 bei Cloud) und Datenschutz (9 vs. 6) überzeugt das NAS — trotz besserer Cloud-Werte bei Benutzerfreundlichkeit und Skalierbarkeit.

**Formulierung für die Prüfung:**
> „Auf Basis der Nutzwertanalyse empfehle ich Alternative A (NAS), da sie mit einem Gesamtnutzwert von 7,30 das beste Ergebnis erzielt. Besonders bei den höchst gewichteten Kriterien Betriebskosten und Datenschutz schneidet Alternative A überdurchschnittlich ab."

---

## Sensitivitätsanalyse

Nach der Berechnung prüfst du, wie **stabil** das Ergebnis ist. Was passiert, wenn sich eine Annahme ändert?

**Szenario:** Der NAS-Anbieter (Alternative A) gerät in finanzielle Schwierigkeiten. Datenschutz-Punkte für A sinken von 9 auf 5 (unsichere Zukunft des Anbieters).

| Berechnung | Wert |
|---|---|
| Alter Teilnutzwert Datenschutz | 9 × 0,25 = 2,25 |
| Neuer Teilnutzwert Datenschutz | 5 × 0,25 = 1,25 |
| Differenz | −1,00 |
| Neuer Gesamtnutzwert A | 7,30 − 1,00 = **6,30** |

**Neue Rangfolge:** B (7,10) > A (6,30) > C (6,05) → **Cloud gewinnt plötzlich.**

**Erkenntnis:** Hoch gewichtete Kriterien können das Ergebnis drastisch verändern. Die Gewichtungsentscheidung ist die sensibelste Stelle der NWA. Deshalb: Gewichtungen begründen und kritische Annahmen hinterfragen.

---

## Typische Fehler

| Fehler | Folge | Vermeidung |
|---|---|---|
| Gewichtungssumme ≠ 1,0 | Falsches Gesamtergebnis | Nach Vergabe addieren: Σ = 1,0? |
| Punkte + Gewicht statt × | Rechenfehler | Formel aufschreiben: TNW = Pkt. × Gewicht |
| Inkonsistente Punktvergabe | Teure Alternative gewinnt bei Preis | Vorher festlegen: höher oder niedriger = besser? |
| Keine Begründung | NWA nicht nachvollziehbar | Kurzen Satz pro Bewertung |
| K.O.-Kriterien ignorieren | Falsche Empfehlung | Muss-Kriterien vor der NWA prüfen |
| Nur eine Alternative | Kein Vergleich möglich | Mindestens zwei Alternativen |

---

## Prüfungsvorbereitung

Die Nutzwertanalyse ist ein **klassisches IHK-Thema** für Fachinformatiker Systemintegration. Typische Aufgaben:

| Aufgabentyp | Was gefordert wird | Tipp |
|---|---|---|
| Tabelle vervollständigen | Fehlende Teilnutzwerte / Gesamtnutzwert | Jede Zelle: Pkt. × Gewicht |
| Empfehlung begründen | Beste Alternative + Warum | Höchster Gesamtnutzwert + Schlüsselkriterien |
| Gewichtungen setzen | Summe = 1,0 | Addieren und begründen |
| Kriterien nennen | 4–6 relevante Kriterien | Mix quantitativ + qualitativ, konkret formulieren |
| NWA selbst erstellen | Vollständiges Verfahren | Alternativen → Kriterien → Gewichte → Punkte → TNW → Summe |

### Merkkarte

1. Alternativen benennen
2. Muss-Kriterien prüfen (K.O.)
3. Soll-Kriterien festlegen (qualitativ + quantitativ)
4. Gewichte vergeben — **Summe = 1,0 ✓**
5. Punkte vergeben (konsistent!)
6. Teilnutzwert = Punkte × Gewicht
7. Gesamtnutzwert = Summe der Teilnutzwerte
8. Höchsten Wert identifizieren → Empfehlung + Begründung
9. Sensitivität prüfen: Was ändert das Ergebnis?

### Mini-Übung

Vervollständige die NWA:

| Kriterium | Gewicht | A Pkt. | A TNW | B Pkt. | B TNW |
|---|---|---|---|---|---|
| Preis | 0,30 | 8 | ? | 6 | ? |
| Leistung | 0,40 | 7 | ? | 9 | ? |
| Support | 0,30 | 9 | ? | 7 | ? |
| **Gesamtnutzwert** | **1,00** | | **?** | | **?** |

<details>
<summary>Lösung anzeigen</summary>

**Alternative A:** 8×0,30 + 7×0,40 + 9×0,30 = 2,40 + 2,80 + 2,70 = **7,90**

**Alternative B:** 6×0,30 + 9×0,40 + 7×0,30 = 1,80 + 3,60 + 2,10 = **7,50**

**Gewinner: Alternative A** (7,90 > 7,50)

</details>

### Checkliste vor der Abgabe

- [ ] Mindestens zwei Alternativen verglichen
- [ ] Muss-Kriterien (K.O.) geprüft und dokumentiert
- [ ] Soll-Kriterien klar und für alle Alternativen anwendbar
- [ ] Gewichtungssumme = 1,0
- [ ] Punktvergabe konsistent (bei Preis: günstig = mehr Punkte)
- [ ] Alle Teilnutzwerte berechnet (Pkt. × Gewicht)
- [ ] Gesamtnutzwerte addiert
- [ ] Empfehlung mit Begründung formuliert
- [ ] Optional: Sensitivitätsanalyse durchgeführt

---

## Verwandte Themen

- [Angebotsvergleich](/systemtechnik/07-angebotsvergleich/) — Vergleichskriterien und Bewertungsmatrix
- [Kostenbewertung & TCO](/systemtechnik/06-kostenbewertung/) — Quantitative Kriterien für die NWA
- [Glossar Systemtechnik](/systemtechnik/glossar/) — Fachbegriffe nachschlagen
