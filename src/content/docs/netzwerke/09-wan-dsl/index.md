---
title: 'WANs & DSL – Weitverkehrsnetze und Breitbandzugänge'
description: 'Einführung in Wide Area Networks (WANs) und Digital Subscriber Line (DSL) Technologie – von globalen Unternehmensnetzwerken bis zum Breitbandinternetzugang.'
---

# WANs & DSL – Weitverkehrsnetze und Breitbandzugänge

## Lernziele

Nach diesem Kapitel verstehst du:
- **Was WANs sind** und wie sie globale Unternehmensnetzwerke verbinden
- **Die Unterschiede** zwischen WAN und DSL
- **Wie DSL funktioniert** und welche Geschwindigkeitsstandards es gibt
- **Die historische Entwicklung** von ISDN zu modernen Breitbandtechnologien
- **Wichtige Komponenten** wie Router, Splitter und Modems

---

## 1. Definition: WAN vs. DSL

### Wide Area Network (WAN)

Ein **WAN (Wide Area Network)** ist ein Netzwerk, das große geografische Distanzen überbrückt. Es verbindet lokale Netzwerke (LANs) verschiedener Standorte miteinander und ermöglicht globale Kommunikation.

**Beispiele für WANs:**
- Ein multinationaler Konzern mit Standorten in Deutschland, USA und Asien
- Ein Universitätsnetzwerk, das verschiedene Campus-Standorte verbindet
- Das Internet selbst als größtes WAN der Welt

### Digital Subscriber Line (DSL)

**DSL (Digital Subscriber Line)** ist eine Technologie, die Breitbandinternet über herkömmliche Kupfer-Telefonleitungen ermöglicht. Sie revolutionierte den Internetzugang für Privathaushalte, da sie die bestehende Infrastruktur nutzt.

**Wichtige Merkmale:**
- Nutzung vorhandener Telefonleitungen
- Gleichzeitige Telefonie und Internetnutzung möglich
- Trennung von Sprach- und Datenfrequenzen durch Splitter

---

## 2. WAN-Komponenten und Infrastruktur

### Hardware-Komponenten

| Komponente | Funktion | Beispiel |
|-----------|----------|----------|
| **Router** | Lenken Datenpakete zwischen Netzwerken | Cisco, Juniper |
| **Switches** | Verbinden Geräte im lokalen Netzwerk | Managed/Unmanaged Switches |
| **Leitungen** | Physische Übertragungsmedien | Glasfaser, Kupfer, Satellit |

### Knotenpunkte und Performance

**Internet Exchange Points (IXPs):**
- Zentrale Knotenpunkte für den Datenaustausch zwischen Netzwerken
- Erhöhen Effizienz und reduzieren Latenzzeiten

**Content Delivery Networks (CDNs):**
- Verteilen Inhalte auf Servern weltweit
- Optimieren Ladezeiten für Streaming und Downloads

### Backbone-Netzwerke (Beispielwerte)

Ein typisches Backbone-Netzwerk eines großen Providers umfasst:

- **14.000 km** Glasfasernetz (Kernnetz und Subringe)
- **Bis zu 2** redundante Leitungsnetze für Ausfallsicherheit
- **100 Gbit/s** Übertragungskapazität pro Kanal
- **280 Tbit/s** Gesamtübertragungskapazität im Backbone

### Sicherheit im WAN

| Sicherheitsmaßnahme | Zweck |
|---------------------|-------|
| **Firewalls** | Filtern bösartigen Traffic |
| **Verschlüsselung** | Schutz der Datenübertragung |
| **VPNs** | Sicherer Fernzugriff auf Unternehmensressourcen |
| **IDS/IPS** | Erkennung und Blockierung von Angriffen |

### Wichtige Protokolle und Technologien

- **TCP/IP:** Grundlegendes Protokoll für die Datenübertragung
- **HTTP:** Für Anwendungsdaten (Webseiten)
- **MPLS (Multiprotocol Label Switching):** Effizientes Routing mit Priorisierung
- **Ethernet-Leitungen:** Zuverlässige Punkt-zu-Punkt-Verbindungen
- **Dedizierte Glasfaser:** Höchste Performance und Sicherheit

---

## 3. Breitbandrouter und lokale Verteilung

### Wie DSL zu dir nach Hause kommt

```
ISP (Provider) → Telefonleitung → Splitter → DSL-Modem → Router → Deine Geräte
```

**Komponenten erklärt:**

1. **Splitter:** Trennt Sprachfrequenzen (Telefon) von Datenfrequenzen (Internet)
2. **DSL-Modem:** Wandelt das digitale Signal um für die Übertragung
3. **Breitbandrouter:** Verteilt das Internet im lokalen Netzwerk (LAN)

### Konnektivität im Heimnetz

Der Router ermöglicht verschiedene Verbindungstypen:

| Typ | Verbindung | Beispiele |
|-----|------------|-----------|
| **WLAN** | Drahtlos | Laptops, Smartphones, Tablets |
| **Ethernet** | Kabelgebunden | Desktop-PCs, Gaming-Konsolen, Smart-TVs |

---

## 4. Historischer Rückblick: ISDN

Vor dem Breitbandausbau basierte die digitale Übertragung auf **ISDN (Integrated Services Digital Network)**:

### ISDN-Kanäle

| Kanaltyp | Geschwindigkeit | Zweck |
|----------|----------------|-------|
| **B-Kanal** (Bearer Channel) | 64 Kbit/s | Sprach- oder Datenübertragung |
| **D-Kanal** (Data Channel) | 16 Kbit/s | Steuerung und Signalisierung |

**Bündelung:** Mehrere B-Kanäle konnten kombiniert werden für höhere Bandbreiten (z.B. 2 B-Kanäle = 128 Kbit/s).

---

## 5. DSL-Geschwindigkeiten und Standards

### Evolution der DSL-Technologien

| Technologie | Download | Upload | Einsatz |
|-------------|----------|--------|---------|
| **ADSL** (Asymmetric DSL) | 1–8 Mbit/s | 128 Kbit/s–1 Mbit/s | Klassischer Standard, einfaches Surfen |
| **ADSL2+** | Bis zu 24 Mbit/s | Höher als ADSL | Optimiert für schnellere Downloads |
| **VDSL** (Very-high-bit-rate DSL) | Bis zu 52 Mbit/s | 1,5–2,3 Mbit/s | Flüssiges Video-Streaming |
| **VDSL2** | Bis zu 100 Mbit/s | Bis zu 50 Mbit/s | 4K-Streaming, IPTV |
| **G.fast** | Bis zu 1 Gbit/s | Variabel | Extrem hohe Raten über kurze Distanzen |

### Asymmetrisch vs. Symmetrisch

- **Asymmetrisch (ADSL, VDSL):** Download > Upload (typisch für Privathaushalte)
- **Symmetrisch (SDSL):** Download = Upload (wichtig für Server, Videoconferencing)

---

## 6. WAN vs. DSL – direkter Vergleich

| Merkmal | WAN (Wide Area Network) | DSL (Digital Subscriber Line) |
|---------|------------------------|-------------------------------|
| **Anwendungsbereich** | Globale Unternehmenskommunikation | Lokaler Breitband-Internetzugang |
| **Reichweite** | Weltweite Distanzen | "Letzte Meile" zum Endnutzer |
| **Primäre Nutzer** | Konzerne, Institutionen, Universitäten | Privathaushalte, Homeoffice |
| **Infrastruktur** | Standleitungen, MPLS, Glasfaser, Satellit | Kupfer-Telefonleitung, Splitter, Modem |
| **Kosten** | Hoch (monatliche Mietgebühren) | Moderat (Internetanschluss) |
| **Performance** | Konsistent, SLA-garantiert | Variiert nach Entfernung und Auslastung |

---

## Zusammenfassung & Key Takeaways

- **WANs** verbinden Standorte über große Distanzen und nutzen hochwertige Infrastruktur
- **DSL** bringt Breitbandinternet über existing Telefonleitungen zu Privathaushalten
- Die **Trennung von Sprach- und Datenfrequenzen** ermöglicht gleichzeitiges Telefonieren und Surfen
- **VDSL2** ist heute der Standard für Highspeed-Internet mit bis zu 100 Mbit/s
- Die **Evolution von ISDN (64 Kbit/s) zu G.fast (1 Gbit/s)** zeigt die rasante Entwicklung
- **Sicherheit** im WAN erfordert Firewalls, VPNs und IDS/IPS

---

## Weiterführende Themen

- [OSI-Modell – Schicht 1 bis 7](/osi)
- [Subnetting & CIDR](/netzwerke/01-subnetting)
- [Netzwerksicherheit](/netzwerke/04-netzwerksicherheit)
- [VPN – Virtuelle Private Netzwerke](/netzwerke/08-vpn)
