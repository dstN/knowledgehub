---
title: Mobilfunktechnologien
description: Entwicklung von 1G bis 5G, Architektur, Frequenzen und Sicherheitsaspekte mobiler Kommunikation
---

# Mobilfunktechnologien

## Lernziele

Nach diesem Kapitel kannst du:
- Die verschiedenen Mobilfunkgenerationen (1G-5G) und ihre Merkmale unterscheiden
- Die grundlegende Architektur von Mobilfunknetzen erklären
- Frequenzen und deren Einheit korrekt verwenden
- Sicherheitsmechanismen im Mobilfunk benennen
- Aktuelle und zukünftige Einsatzgebiete von 5G beschreiben

## Grundlagen der Mobilkommunikation

### Was ist Mobilfunk?

**Mobilfunk** ermöglicht drahtlose Kommunikation überall und bildet die Grundlage für:
- Mobiles Internet
- Sprachanrufe
- Nachrichten (SMS, Messenger)
- Vernetzte Geräte (IoT)

### Signalübertragung

Signale werden in Form von **elektromagnetischen Wellen** übertragen. Dabei beeinflussen:
- **Frequenz**: Bestimmt Datenrate und Reichweite
- **Modulation**: Art der Signalüberlagerung
- **Signalstärke**: Qualität und Reichweite der Verbindung

## Frequenzen und Strahlung

### Frequenzeinheiten

| Einheit | Wert | Anwendungsbeispiel |
|---------|------|-------------------|
| **Hz (Hertz)** | 1 Schwingung/Sekunde | Niedrige Frequenzen |
| **kHz (Kilohertz)** | 1.000 Schwingungen/Sekunde | AM-Radio |
| **MHz (Megahertz)** | 1 Million Schwingungen/Sekunde | FM-Radio, TV |
| **GHz (Gigahertz)** | 1 Milliarde Schwingungen/Sekunde | WLAN, 4G, 5G |

:::tip[Merksatz]
**Höhere Frequenz = Mehr Daten, aber geringere Reichweite**
:::

### Strahlungsarten

| Art | Frequenzbereich | Beispiele | Wirkung |
|-----|-----------------|-----------|---------|
| **Nicht-ionisierend** | < 300 GHz | Handy, Babyphone, WLAN, Infrarot | Keine Ionisierung |
| **Ionisierend** | > 300 GHz | UV, Röntgen, Radioaktivität | Kann Elektronen aus Atomen entfernen |

:::caution[Hinweis zur Gesundheit]
Mobilfunk gehört zur nicht-ionisierenden Strahlung und ist nach aktuellem wissenschaftlichem Kenntnisstand unbedenklich für die Gesundheit.
:::

## Mobilfunkgenerationen

### Übersicht 1G bis 5G

| Generation | Einführung | Merkmale / Protokolle | Datenrate |
|------------|-----------|----------------------|-----------|
| **1G** | ab 1978 | Erste drahtlose Telefonie (Analog) | - |
| **2G (GSM)** | ab 1993 | Digitalisierung, SMS | 9,6 kbit/s |
| **3G (UMTS)** | ab 2003 | Mobiles Internet, Videoanrufe, HSPA | bis 42 Mbit/s |
| **4G (LTE)** | ab 2012 | Revolutioniert mobiles Internet, Multimedia | bis 1.000 Mbit/s |
| **5G** | ab 2019 | Höchste Geschwindigkeiten, extrem geringe Latenz | bis 10.000 Mbit/s |

### Entwicklungstrends

```
1G (Analog) ──► 2G (Digital/SMS) ──► 3G (Internet) ──► 4G (LTE/Multimedia) ──► 5G (IoT/Echtzeit)
    │               │                    │                   │                      │
  1978            1993                 2003                2012                   2019
```

## Architektur von Mobilfunknetzen

### Zelluläre Netzwerktopologie

Das Mobilfunknetz basiert auf einem **Zellensystem**:

```
         ┌─────────────┐
         │   Kernnetz   │
         │  (Core Network)│
         └──────┬──────┘
                │
    ┌───────────┼───────────┐
    │           │           │
┌───┴───┐  ┌───┴───┐  ┌───┴───┐
│Zelle 1│  │Zelle 2│  │Zelle 3│
│(Basis- │  │(Basis- │  │(Basis-│
│station)│  │station)│  │station)│
└───┬───┘  └───┬───┘  └───┬───┘
    │          │          │
  ══╧══════════╧══════════╧══  ← Mobilfunkgeräte
```

### Zelltypen

| Zelltyp | Reichweite | Verwendung |
|---------|-----------|------------|
| **Makrozellen** | Groß (km) | Ländliche Gebiete, Autobahnen |
| **Mikrozellen** | Mittel (100-500m) | Stadtbereiche |
| **Picozellen** | Klein (<100m) | Gebäude, Veranstaltungen |
| **Femtozellen** | Sehr klein (<10m) | Privathaushalte |

### Komponenten

- **Basisstationen (BTS/eNodeB/gNodeB)**: Senden und empfangen Signale
- **Mobilfunkendgeräte**: Smartphones, Tablets, IoT-Geräte
- **SIM-Karten**: Identifizierung und Dienstaktivierung

## 5G-Technologie

### Merkmale von 5G

| Merkmal | Beschreibung |
|---------|--------------|
| **Geschwindigkeit** | Mehrere Gigabit pro Sekunde |
| **Latenz** | Extrem gering (< 1 ms für URLLC) |
| **Kapazität** | Unterstützung für Milliarden von IoT-Geräten |
| **Echtzeitfähigkeit** | Autonomes Fahren, Telemedizin |

### Einsatzmöglichkeiten

- **Autonomes Fahren**: Echtzeit-Kommunikation zwischen Fahrzeugen
- **Smart Cities**: Intelligente Städte mit vernetzter Infrastruktur
- **Industrie 4.0**: Vernetzte Fabriken (Internet of Things)
- **Telemedizin**: Fernoperationen und Gesundheitsmonitoring
- **Transport**: Smart Logistics und Verkehrssteuerung

### Herausforderungen

- **Infrastruktur**: Aufbau ausreichender Senderdichte
- **Sicherheit**: Datenschutz und Netzwerksicherheit
- **Regulierung**: Zusammenarbeit von Unternehmen und Behörden
- **Energieverbrauch**: Höherer Bedarf für 5G-Basisstationen

## Sicherheitsaspekte und Datenschutz

### Schutzmechanismen

| Aspekt | Maßnahme |
|--------|----------|
| **Abhörschutz** | Verschlüsselung der Funkschnittstelle |
| **Authentifizierung** | SIM-basierte Identifikation |
| **Datenintegrität** | Prüfsummen und Protokolle |

### Verschlüsselungsalgorithmen

| Generation | Algorithmus | Status |
|------------|-------------|--------|
| 2G | A5/1, A5/2 | Veraltet, unsicher |
| 3G | KASUMI | Verbessert |
| 4G | SNOW 3G | Aktuell |
| 5G | AES-256 | Hochsicher |

:::caution[Wichtig]
**Ende-zu-Ende-Verschlüsselung** (z.B. Signal, WhatsApp) schützt die Privatsphäre zusätzlich zur Netzwerkverschlüsselung.
:::

### Roaming und Interoperabilität

- **Roaming**: Nutzung fremder Netze durch bilaterale Vereinbarungen
- **Interoperabilität**: Nahtlose Kommunikation über Netzwerkgrenzen hinweg

## Zusammenfassung

| Thema | Kernpunkte |
|-------|-----------|
| **Frequenzen** | Höhere Frequenz = mehr Daten, weniger Reichweite |
| **Generationen** | 1G→5G: Analog → Digital → Internet → Multimedia → IoT/Echtzeit |
| **Architektur** | Zellulärer Aufbau mit Basisstationen und Kernnetz |
| **5G** | Höchste Geschwindigkeit, geringste Latenz, IoT-fähig |
| **Sicherheit** | Fortschreitende Verschlüsselung von A5/1 bis AES-256 |

## Prüfungsrelevante Fragen

:::details[Frage 1: Nenne die fünf Mobilfunkgenerationen und ihre Hauptmerkmale!]
**Antwort**:
- 1G (1978): Analog, Sprache
- 2G/GSM (1993): Digital, SMS
- 3G/UMTS (2003): Mobiles Internet, HSPA (bis 42 Mbit/s)
- 4G/LTE (2012): Multimedia, bis 1.000 Mbit/s
- 5G (2019): IoT, Echtzeit, bis 10 Gbit/s
:::

:::details[Frage 2: Was ist der Unterschied zwischen ionisierender und nicht-ionisierender Strahlung?]
**Antwort**: Ionisierende Strahlung (z.B. Röntgen) kann Elektronen aus Atomen entfernen und ist potenziell gesundheitsschädlich. Nicht-ionisierende Strahlung (z.B. Mobilfunk <300 GHz) hat diese Wirkung nicht.
:::

:::details[Frage 3: Welche drei 5G-Einsatzgebiete sind für die Industrie besonders relevant?]
**Antwort**: Autonomes Fahren, vernetzte Fabriken (Industrie 4.0/IoT), intelligente Städte (Smart Cities)
:::

## Weiterführende Links

- [OSI-Schicht 1 - Bitübertragung](/osi/01-bitübertragung/) - Physikalische Übertragung
- [OSI-Schicht 2 - Sicherung](/osi/02-sicherung/) - Sicherungsschicht
- [Netzwerksicherheit](/netzwerke/04-netzwerksicherheit/) - Sicherheitsaspekte
