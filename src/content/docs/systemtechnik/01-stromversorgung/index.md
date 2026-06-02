---
title: Stromversorgung & Unterbrechungsfreie Stromversorgung (USV)
description: USV-Systeme, Redundanz und zuverlässige Stromversorgung für IT-Infrastruktur
---

Eine zuverlässige und unterbrechungsfreie Stromversorgung ist essentiell für den Betrieb von IT-Systemen. USV-Systeme schützen vor Stromausfällen und gewährleisten eine sichere Abschaltung oder Notfallbetrieb.

## Notwendigkeit von USV-Systemen

Stromausfälle führen zu:
- **Datenverlust**: Nicht gespeicherte Daten gehen verloren
- **Hardware-Schäden**: Plötzliches Herunterfahren beschädigt Festplatte und Speicher
- **Betriebsunterbrechung**: Kritische Services fallen aus
- **Finanzielle Verluste**: Downtime kostet Geld und Vertrauen

### RTO und RPO
- **RTO (Recovery Time Objective)**: Maximale Zeit bis zur Wiederherstellung eines Systems
- **RPO (Recovery Point Objective)**: Maximaler Datenverlust, der tolerierbar ist

---

## USV-Topologien

### 1. Offline-USV (Standby)
- Stromversorgung erfolgt direkt vom Netz
- Batterie wird nur bei Stromausfall aktiviert
- **Vorteil**: Günstig
- **Nachteil**: Umschaltungszeit (5–10 ms), geringe Dauerleistung

### 2. Online-USV (Double Conversion)
- Batterien laden ständig, versorgen einen Wechselrichter
- Gleichzeitige Netzstromversorgung über den Wechselrichter
- **Vorteil**: Sofortige Stromabgabe, höchste Verfügbarkeit
- **Nachteil**: Teuer, höherer Stromverbrauch

### 3. Line-Interactive-USV
- Hybrid aus Offline und Online
- Batterien speisen sich während des Normalbetriebs auf
- **Vorteil**: Besserer Kompromiss zwischen Kosten und Verfügbarkeit
- **Nachteil**: Längere Umschaltungszeit als Online-USV

---

## Batteriebaulformen

### Bleisäure-Batterien
- **Vorteile**: Robust, günstig, wartungsarm
- **Nachteile**: Schwer, begrenzte Zyklen, regelmäßige Kontrolle nötig

### Lithium-Ionen-Batterien
- **Vorteile**: Leicht, höhere Energiedichte, lange Lebensdauer
- **Nachteile**: Teuer, thermisches Management erforderlich

### Flüssigbatterien (Flow-Batterien)
- **Vorteile**: Skalierbar, unbegrenzte Zyklen, sicher
- **Nachteile**: Großvolumig, für Rechenzentren interessant

---

## Redundanz

Eine zuverlässige Stromversorgung benötigt:

| Maßnahme | Beschreibung |
|----------|-------------|
| **N+1 Redundanz** | Mindestens 2 identische USV-Systeme parallel |
| **Geografische Verteilung** | Mehrere Stromquellen von unterschiedlichen Kraftwerken |
| **Prüfung der Batterie** | Regelmäßige Belastungstests (monatlich/jährlich) |
| **Wartungsvertrag** | Professionelle Wartung und schneller Support |

---

## Wartung und Monitoring

### Regelmäßige Prüfungen
- **Monatlich**: Sichtprüfung, Spannungsmessung
- **Jährlich**: Volllasttests unter realistischen Bedingungen
- **Nach Stromausfall**: Batteriestatus überprüfen

### Überwachung
- Echtzeit-Monitoring der Batteriespannung
- Alarme bei Unterspannung oder Überlast
- Protokollierung von Stromausfällen und Umschaltungen

---

## Best Practices

1. **Dimensionierung**: USV-Kapazität muss mindestens für 10–15 Minuten reichen
2. **Erdung**: Korrekte Erdung verhindert Blitzschäden
3. **Entlüftung**: USV-Anlagen erzeugen Wärme – ausreichend Kühlmittelfluss erforderlich
4. **Dokumentation**: Alle Ausfallszenarien und Recovery-Verfahren dokumentieren
5. **Notbeendigung**: Prozedur für kontrolliertes Herunterfahren etablieren

---

## Verwandte Themen

- [Leistungsarten und Stromverbrauch](/systemtechnik/02-leistungsarten/)
- [Brandschutz in Rechenzentren](/systemtechnik/04-brandschutz/)
- [Mainboard & Chipsatz – Stromversorgung](/hardware/04-mainboard-chipsatz/)
