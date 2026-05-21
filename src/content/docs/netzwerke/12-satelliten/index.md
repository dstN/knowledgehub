---
title: Satellitennetze
description: Globale Navigationssysteme (GPS, GLONASS, Galileo), Erdbeobachtung und Satellitenkommunikation
---

# Satellitennetze in der modernen Welt

## Lernziele

Nach diesem Kapitel kannst du:
- Die wichtigsten globalen Navigationssysteme (GPS, GLONASS, Galileo, BeiDou) unterscheiden
- Das Prinzip der Satellitennavigation erklären
- Multi-GNSS und Korrektursignale verstehen
- Anwendungsbereiche von Satellitensystemen benennen
- Aktuelle Entwicklungen wie Starlink einordnen

## Bedeutung von Satellitennetzen

Satellitennetze spielen eine entscheidende Rolle in:
- **Kommunikation**: Weltweite Datenübertragung
- **Navigation**: Präzise Positionsbestimmung
- **Wissenschaft**: Erdbeobachtung und Forschung
- **Sicherheit**: Katastrophenmanagement und Wettervorhersage

:::tip[Alltagsrelevanz]
Jedes Smartphone nutzt Satellitensignale für Navigation - meist ohne dass wir es bewusst wahrnehmen.
:::

## Globale Navigationssatellitensysteme (GNSS)

### Übersicht der Systeme

| System | Betreiber | Satelliten | Genauigkeit | Status |
|--------|-----------|------------|-------------|--------|
| **GPS** | USA | 24+ | 3-5m (C/A), <1m (milit.) | Vollständig |
| **GLONASS** | Russland | 24+ | 2-8m | Vollständig |
| **Galileo** | Europa | 30 | <1m (komm.), 1cm (PRS) | Vollständig |
| **BeiDou** | China | 35 | 3,6m (glob.), 10cm (lokal) | Vollständig |
| **NavIC** | Indien | 7 (+2) | 10m (regional) | Regional |

### GPS (Global Positioning System)

```
┌────────────────────────────────────────┐
│           GPS-Prinzip                  │
├────────────────────────────────────────┤
│  Satellit ──► Signal + Zeitstempel     │
│     │                                  │
│     ▼                                  │
│  Empfänger ◄── Min. 4 Satelliten     │
│     │                                  │
│     ▼                                  │
│  Triangulation ──► Position, Höhe,     │
│                   Geschwindigkeit      │
└────────────────────────────────────────┘
```

**Funktionsweise:**
1. Satelliten senden kontinuierlich Signale mit Zeit- und Positionsdaten
2. Empfänger auf der Erde messen die Signallaufzeiten
3. Mit mindestens 4 Satelliten kann die Position berechnet werden
4. Ergebnis: Genaue Positionsbestimmung, Geschwindigkeit und Höhe

### GLONASS (Russland)

- **GLObal NAvigation Satellite System**
- Russisches Pendant zum GPS
- Ermöglicht globale Positionsbestimmung
- Verbesserte Genauigkeit in nördlichen Breiten

### Galileo (Europa)

- **Europäisches Satellitennavigationssystem**
- Unabhängige Alternative zu GPS und GLONASS
- Höhere Genauigkeit für kommerzielle Nutzung
- **PRS (Public Regulated Service)**: Verschlüsselter Dienst für Behörden

### BeiDou (China)

- Chinesisches Navigationssystem
- **Besonderheit**: Kurznachrichten-Übertragung möglich
- Weltweite Abdeckung seit 2020

### NavIC / IRNSS (Indien)

- **Indian Regional Navigation Satellite System**
- Regionales System für den asiatischen Raum
- 7 Satelliten für Indien und Umgebung

## Multi-GNSS und Korrektursignale

### Multi-GNSS

:::tip[Genauigkeitsgewinn]
Moderne Empfänger können Signale von **mehreren GNSS-Systemen** gleichzeitig empfangen und kombinieren, um genauere und zuverlässigere Positionsinformationen zu erhalten.
:::

| Empfängertyp | Unterstützte Systeme | Genauigkeitsvorteil |
|-------------|---------------------|---------------------|
| GPS-only | GPS | Standard |
| Dual-GNSS | GPS + GLONASS | Besser |
| Multi-GNSS | GPS + GLONASS + Galileo + BeiDou | Optimal |

### Korrektursignale (DGNSS)

| System | Bezeichnung | Funktion | Genauigkeit |
|--------|-------------|----------|-------------|
| **EGNOS** | European Geostationary Navigation Overlay Service | Europa-weite Korrektur | 1-2m |
| **WAAS** | Wide Area Augmentation System | USA/Kanada | 1-2m |
| **SBAS** | Satellite-Based Augmentation System | Satellitengestützt | 1-2m |
| **GBAS** | Ground-Based Augmentation System | Bodengestützt | <1m |

:::caution[Kritische Anwendungen]
Erst **Korrektursignale** (z.B. über EGNOS, SBAS oder GBAS-Bodenstationen) machen die Satellitennavigation für sicherheitskritische Anwendungen (Flugverkehr, Seefahrt) ausreichend genau.
:::

## Weitere Satellitensysteme

### Copernicus

- **Europäisches Erdbeobachtungsprogramm**
- Sammelt Umwelt- und Klimadaten
- Anwendungen:
  - Klimaforschung
  - Katastrophenmanagement
  - Landwirtschaft
  - Meeresüberwachung

### Starlink

| Aspekt | Details |
|--------|---------|
| **Betreiber** | SpaceX (Elon Musk) |
| **Konzept** | Weltweites Breitband-Internet |
| **Anzahl** | Tausende von Satelliten in niedrigen Erdumlaufbahnen (LEO) |
| **Vorteil** | Niedrigere Latenz als geostationäre Satelliten |
| **Status** | Ständiger Ausbau |

:::info[LEO vs. GEO]
- **LEO (Low Earth Orbit)**: 200-2.000 km Höhe, niedrige Latenz, Starlink
- **GEO (Geostationary)**: ~36.000 km Höhe, hohe Latenz, traditionelle Kommunikationssatelliten
:::

## Anwendungsbereiche

### Navigation

- **Fahrzeuge**: PKW, LKW, Flugzeuge, Schiffe
- **Outdoor**: Wandern, Bergsteigen, Geocaching
- **Logistik**: Flottenmanagement, Routenoptimierung

### Kommunikation

- **Fernsehen**: Satellitenfernsehen (DVB-S)
- **Internet**: Breitband in ländlichen Gebieten
- **Telefonie**: Satellitentelefone für abgelegene Regionen
- **Militär**: Sichere Kommunikation

### Erdbeobachtung

- **Wettervorhersage**: Satellitenbilder, Wetterdaten
- **Umweltüberwachung**: Waldbestände, Luftqualität
- **Katastrophenmanagement**: Frühwarnung, Schadensbewertung

### Wissenschaft

- Geodäsie (Erdmessung)
- Klimaforschung
- Geologie und Ressourcenexploration

## Zusammenfassung

```
┌─────────────────────────────────────────────────────────┐
│              SATELLITENSYSTEME                          │
├─────────────────────────────────────────────────────────┤
│  NAVIGATION          │  GPS, GLONASS, Galileo, BeiDou   │
│  KORREKTUR           │  EGNOS, WAAS, SBAS, GBAS         │
│  KOMMUNIKATION       │  Starlink, Inmarsat, Iridium     │
│  ERDBEOBACHTUNG      │  Copernicus, NOAA, Landsat       │
└─────────────────────────────────────────────────────────┘
```

### Kernpunkte

| Thema | Wichtige Information |
|-------|---------------------|
| **GNSS** | Mindestens 4 Satelliten für 3D-Positionierung |
| **Multi-GNSS** | Kombination mehrerer Systeme für höhere Genauigkeit |
| **Korrektursignale** | Erforderlich für sicherheitskritische Anwendungen |
| **LEO-Satelliten** | Niedrigere Latenz (Starlink) vs. traditionelle GEO |

## Prüfungsrelevante Fragen

:::details[Frage 1: Nenne die vier globalen Navigationssysteme und ihre Betreiber!]
**Antwort**: 
- GPS (USA)
- GLONASS (Russland)
- Galileo (Europa)
- BeiDou (China)
:::

:::details[Frage 2: Was ist Multi-GNSS und welchen Vorteil bietet es?]
**Antwort**: Multi-GNSS ist die gleichzeitige Nutzung mehrerer Satellitennavigationssysteme (z.B. GPS + Galileo). Es bietet höhere Genauigkeit und Zuverlässigkeit durch mehr verfügbare Satelliten.
:::

:::details[Frage 3: Warum sind Korrektursignale für den Flugverkehr wichtig?]
**Antwort**: Standard-GNSS hat eine Genauigkeit von 3-5 Metern. Für den sicheren Flugverkehr wird eine höhere Präzision benötigt. Korrektursignale (EGNOS, WAAS) verbessern die Genauigkeit auf 1-2 Meter oder weniger.
:::

:::details[Frage 4: Was ist das Besondere an Starlink im Vergleich zu traditionellen Kommunikationssatelliten?]
**Antwort**: Starlink nutzt LEO-Satelliten (niedrige Erdumlaufbahn) statt GEO-Satelliten. Dies ermöglicht deutlich niedrigere Latenzen und höhere Datenraten für Internet-Kommunikation.
:::

## Weiterführende Links

- [Mobilfunktechnologien](/netzwerke/11-mobilfunk/) - Terrestrische Funktechnologien
- [Netzwerksicherheit](/netzwerke/04-netzwerksicherheit/) - Sicherheitsaspekte
- [OSI-Schicht 1](/osi/01-bitübertragung/) - Physikalische Übertragung
