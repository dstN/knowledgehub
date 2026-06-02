---
title: Brandschutz in Rechenzentren und Serverräumen
description: Brandschutzmaßnahmen, Brandklassen, Löschmittel und Normen
---

Brandschutz ist eine kritische Anforderung in Rechenzentren und Serverräumen. Elektrische Anlagen und konzentrierte Wärmequellen erfordern präventive Maßnahmen und schnelle Reaktionsmechanismen.

## Brandklassen

Verschiedene Materialien brennen unterschiedlich. Deshalb gibt es spezialisierte Löschverfahren:

| Klasse | Material | Beispiele | Löschmittel |
|---|---|---|---|
| **A** | Feste Stoffe | Holz, Papier, Textilien | Wasser, Wasser-Sprühsysteme |
| **B** | Flüssigkeiten | Benzin, Öl, Fett | Schaum, Pulver, CO₂ |
| **C** | Gase | Methangas, Propan | Spezial-Löschgase, nicht Wasser |
| **D** | Metalle | Magnesium, Natrium, Lithium | Spezialpulver (nie Wasser!) |
| **E** | Elektrische Anlagen | Stromversorgung, Motoren | Nicht-leitende Stoffe: CO₂, Inertgase, Pulver |
| **F** | Speiseöle | Fritteuse, Küchenbrände | Spezielle Fettbrände-Löschmittel |

---

## Brandlast und Brandverhalten

### Brandlast
Die **Brandlast** ist die Gesamtmenge an brennbarem Material pro Quadratmeter.

- **Rechenzentrum**: Sehr hoch (Kunststoffe in Kabeln, Computer-Gehäuse, Speichern)
- **Frühe Branderkennung**: Kritisch wegen hoher Brandlast

### Brandausbreitungsgeschwindigkeit
- Durch Kunststoff-Kabelummantelungen schnelle Ausbreitung
- Geschlossene Server-Racks können zum Brandherd werden

---

## Brandschutzmaßnahmen

### 1. Vorbeugender Brandschutz

#### Materialwahl
- Feuer- und rauchbeständige Kabel (halogenarm)
- Nicht entflammbare Kabelführungen
- Kunststoff-Isolationen mit niedriger Entflammbarkeit (Klasse B–C nach DIN EN 13823)

#### Elektroinstallation
- Doppelte Sicherheitsstandardisierung
- Überstromschutzgeräte
- Fehlerstromschutzschalter (RCD)
- Regelmäßige Inspektionen nach DIN VDE 0100

#### Lagerung
- Keine brennbaren Materialien lagern
- Kabeltrassen nicht mit Papier oder Pappe ausfüllen

### 2. Aktive Brandschutzmaßnahmen

#### Brandmeldeanlage
- Rauchmelder (optisch und ionisierend)
- Wärmemelder (Ansprechtemperatur ~58°C)
- Gefahrenmeldezentrale mit 24/7-Überwachung

#### Automatische Löschanlage
- **Sprinkleranlage**: Für Rechenzentren oft nicht ideal (Wasser beschädigt Hardware)
- **Gaslöschanlagen**: CO₂, Inertgase (Argon, Stickstoff), Wassernebel
- **Pulverlöschanlagen**: FM-200 oder ähnliche, hinterlässt keinen Rückstand

#### Manuelle Feuerlöscher
- **Typ B (CO₂ oder Pulver)**: Für Elektrobrände
- **Erreichbarkeit**: Maximal 10–15 Meter
- **Regelmäßige Wartung**: Jährlich nach DIN 14406

### 3. Abschottung und Trennung

#### Trennwände
- Feuerwiderstandsklasse F 90 (90 Minuten Widerstand) empfohlen
- Verhinderung der Brandausbreitung auf angrenzende Bereiche
- Kabelöffnungen versiegeln

#### Zuluft- und Abluftöffnungen
- Brandschutzklappen (verriegeln bei Branderkennung)
- Verhindert Zugluft und Rauchentwicklung

---

## Kühlsystem und Brandschutz

### Problem: Wärmestau
Zu dichte Server-Packung → Hotspots → Überhitzung → Brandgefahr

### Lösungen
- **Hot-Aisle/Cold-Aisle-Strategie**: Trennung von Warm- und Kaltgang
- **Freiraum um Racks**: Mindestens 50 cm Abstand für Belüftung
- **Temperatur-Monitoring**: Thermische Sensoren in Racks
- **Redundante Kühlung**: Mehrere unabhängige Kühlsysteme

---

## Notfallplanung

### Evakuierungsplanung
- Zwei unabhängige Fluchtweg
- Kennzeichnung von Notausgängen
- Regelmäßige Evakuierungsübungen

### Notfalltreffen
- Sammelpunkt außerhalb des Gebäudes
- Personenzählung
- Kommunikation mit Feuerwehr

### Wiederherstellung
- Backup-Stromversorgung extern
- Daten-Recovery-Pläne
- Dokumentation von kritischen Systemen

---

## Normen und Richtlinien

| Norm | Beschreibung | Bereich |
|---|---|---|
| **DIN 4102** | Brandverhalten von Baustoffen und Bauteilen | Deutschland |
| **EN 13823** | Rauchentwicklung und Tropfenbildung | EU-weit |
| **ISO 9239** | Flammenausbreitungsindex | International |
| **DIN EN 1047** | Feuerwiderstand von Datenschränken | Wertschutz |
| **EN 12845** | Sprinkleranlagen | EU-weit |
| **DIN VDE 0100-560** | Schutz gegen Brand und Übertemperatur | Elektroinstallation |

---

## Best Practices

1. **Regelmäßige Inspektionen**: Mindestens jährlich durch externe Sachverständige
2. **Brandschutz-Training**: Alle Mitarbeiter ausbilden
3. **Wartungsplan**: Feuerlöscher, Sprinkler, Rauchmelder regelmäßig testen
4. **Kabelmanagement**: Brände entstehen oft durch Kabelwirr und schlechte Isolation
5. **Dokumentation**: Alle Maßnahmen, Inspektionen und Tests aufzeichnen
6. **Versicherung**: Mit Versicherer abstimmen (oft Bedingungen an Brandschutz geknüpft)

---

## Checkliste für Serverräume

- [ ] Brandmeldeanlage installiert und funktionsfähig
- [ ] Feuerlöscher (Typ B) vorhanden und erreichbar
- [ ] Notausgang markiert und freigehalten
- [ ] Trennwände mit Brandschutzklassen versehen
- [ ] Hot-Aisle/Cold-Aisle-Strategie implementiert
- [ ] Temperatur-Monitoring aktiv
- [ ] Kabel halogenarm und feuerfest
- [ ] Überstromschutz und Fehlerstromschutz aktiviert
- [ ] Versicherung über Brandschutz informiert
- [ ] Brandschutz-Schulung für Personal durchgeführt

---

## Verwandte Themen

- [Stromversorgung & USV](/systemtechnik/01-stromversorgung/)
- [Mainboard & Chipsatz – Wärmemanagement](/hardware/04-mainboard-chipsatz/)
- [Server-Architekturen & Rechenzentren](/netzwerke/03-server-architekturen/)
