---
title: Frame Relay & MPLS
description: Historische WAN-Technologien - Frame Relay und sein moderner Nachfolger MPLS
---

# Frame Relay & MPLS

## Lernziele

Nach diesem Kapitel kannst du:
- Die Funktionsweise von Frame Relay als historische WAN-Technologie erklären
- Die Unterschiede zwischen Frame Relay und MPLS verstehen
- Die Vorteile von MPLS gegenüber Frame Relay benennen
- Den aktuellen Status von Frame Relay in modernen Netzwerken einschätzen

## Einführung

**Frame Relay** ist eine weit verbreitete Netzwerktechnologie, die in den 1980er und 1990er Jahren populär war, aber in den letzten Jahren zunehmend von moderneren Technologien wie **MPLS (Multiprotocol Label Switching)** abgelöst wurde.

## Frame Relay im Überblick

### Kernkonzepte

| Merkmal | Beschreibung |
|---------|--------------|
| **Technologie** | Paketvermittlungstechnologie für WANs |
| **Dateneinheit** | Daten werden in kleine Pakete (Frames) aufgeteilt |
| **Verbindungen** | Virtuelle Verbindungen über PVCs (Permanent Virtual Circuits) |
| **Bandbreite** | Flexible Zuteilung, anpassbar an Bedürfnisse |
| **Schnittstelle** | Verbindung zwischen LANs über WANs |
| **Verwaltung** | Relativ einfach zu konfigurieren |

### Vorteile (historisch)

- **Kosteneffizienz**: Günstiger als dedizierte Leitungen
- **Flexibilität**: Dynamische Bandbreitenzuteilung
- **Einfachheit**: Weniger komplex als X.25
- **Schnelligkeit**: Höhere Übertragungsraten als ältere Technologien

### Einschränkungen und Nachteile

:::caution[Warum Frame Relay obsolet wird]
Mit dem Fortschritt von Breitbandtechnologien und MPLS hat Frame Relay an Bedeutung verloren:
:::

- **Begrenzte Fehlererkennung**: Keine umfassende Fehlerkorrektur
- **Multimedia-Einschränkungen**: Schlechte Unterstützung für Echtzeitanwendungen
- **Geringe QoS**: Keine differenzierte Dienstgüte
- **Veraltete Infrastruktur**: Zunehmend schwer zu warten

## MPLS - Der moderne Nachfolger

### Was ist MPLS?

**Multiprotocol Label Switching (MPLS)** ist eine Technologie zur effizienten Datenübertragung in Netzwerken, die das Routing optimiert.

### Kernaspekte von MPLS

```
┌─────────────────────────────────────────────────────────┐
│  Traditionelles Routing          MPLS-Routing          │
├─────────────────────────────────────────────────────────┤
│  • Jeder Router analysiert        • Labels vorbestimmt   │
│    Pakete neu                     Weg                  │
│  • Komplexe Routing-              • Schnelle Weiter-     │
│    Entscheidungen pro Hop           leitung              │
│  • Höhere Latenz                • Niedrigere Latenz    │
└─────────────────────────────────────────────────────────┘
```

### Funktionsweise

1. **Label-Injection**: MPLS fügt Datenpaketen **Labels** (Markierungen) hinzu, die den Weg durch das Netzwerk vorbestimmen

2. **Label-Switching**: Router verwenden diese Labels statt IP-Adressen für Routing-Entscheidungen

3. **Effizienz**: Datenpakete werden nicht bei jedem Router neu analysiert - die Labels ermöglichen schnelle Weiterleitung

### Vorteile von MPLS

| Vorteil | Beschreibung |
|---------|--------------|
| **Geschwindigkeit** | Schnellere Paketweiterleitung |
| **QoS** | Unterstützung für Quality of Service |
| **Skalierbarkeit** | Besser für große Netzwerke geeignet |
| **VPN-Support** | Einfache Implementierung von VPNs |
| **Traffic Engineering** | Optimierte Nutzung von Netzwerkressourcen |

## Vergleich: Frame Relay vs. MPLS

| Kriterium | Frame Relay | MPLS |
|-----------|-------------|------|
| **Entwicklungszeit** | 1980er/1990er | Ab Ende 1990er |
| **Technologie** | Paketvermittlung | Label-Switching |
| **Fehlerkorrektur** | Minimal | Durch unterliegende Schichten |
| **QoS-Unterstützung** | Begrenzt | Hervorragend |
| **Echtzeitanwendungen** | Schlecht geeignet | Gut geeignet |
| **Aktueller Status** | Legacy/Obsoleszent | Standard |

## Aktueller Status

:::tip[Wissen für die Praxis]
Obwohl Frame Relay nicht mehr so weit verbreitet ist, werden in einigen Unternehmensnetzwerken immer noch Frame-Relay-Verbindungen als Teil älterer Infrastrukturen verwendet. Für die IHK-Prüfung ist das Verständnis der historischen Entwicklung von WAN-Technologien relevant.
:::

### Migrationspfad

```
Frame Relay  ──►  MPLS  ──►  SD-WAN / Direct Internet Access
(1990er)          (2000er)      (2020er)
```

## Zusammenfassung

- **Frame Relay** war eine wichtige WAN-Technologie der 1990er Jahre
- **MPLS** löst Frame Relay aufgrund besserer Leistung und Flexibilität ab
- **Label-Switching** ist das Kernkonzept von MPLS
- Für moderne Netzwerke ist **MPLS** oder **SD-WAN** der Standard

## Prüfungsrelevante Fragen

:::details[Frage 1: Was ist der Hauptunterschied zwischen Frame Relay und MPLS?]
**Antwort**: Frame Relay arbeitet mit Paketvermittlung und PVCs, während MPLS mit Label-Switching arbeitet und dadurch schnellere, effizientere Datenübertragung ermöglicht.
:::

:::details[Frage 2: Warum wird MPLS als Nachfolger von Frame Relay bevorzugt?]
**Antwort**: MPLS bietet bessere QoS-Unterstützung, niedrigere Latenz, höhere Skalierbarkeit und bessere Unterstützung für Echtzeitanwendungen.
:::

:::details[Frage 3: Was sind PVCs in Frame Relay?]
**Antwort**: PVCs (Permanent Virtual Circuits) sind virtuelle Verbindungen, die den Datenverkehr zwischen Standorten in einem Frame-Relay-Netzwerk organisieren.
:::

## Weiterführende Links

- [`10 WANs & DSL`](/netzwerke/09-wan-dsl/) - Weitere WAN-Technologien
- [OSI-Schicht 3 - Vermittlung](/osi/03-vermittlung/) - Grundlagen der Paketvermittlung
