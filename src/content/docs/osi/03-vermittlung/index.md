---
title: Schicht 3 – Vermittlungsschicht (Network Layer)
description: IP-Adressierung, Routing, Router und logische Adressierung
---

Die **Vermittlungsschicht** ist das "Navigationssystem" des Internet. Sie bestimmt den **optimalen Weg (Routing)**, über den Daten zwischen verschiedenen Netzwerken befördert werden. Während Schicht 2 sich um lokale Netzwerke (LAN) kümmert, verbindet Schicht 3 unterschiedliche Netzwerke miteinander (WAN – Wide Area Network).

## 🎯 Kernaufgaben der Schicht 3

- **Routing:** Bestimmung des optimalen Pfads für Datenpakete
- **Logische Adressierung:** Verwendung von IP-Adressen statt MAC-Adressen
- **Paketweiterleitung:** Umleitung über Router und Gateways
- **Netzwerk-zu-Netzwerk-Verbindung:** Verbindung mehrerer LANs
- **Virtuelle Verbindungen:** Aufbau von virtuellen Pfaden durch die Infrastruktur

---

## 📍 IP-Adressen – Logische Adressierung

Im Gegensatz zu MAC-Adressen (Schicht 2) sind **IP-Adressen logisch** und können konfiguriert werden. Sie identifizieren ein Netzwerk und einen Host darin.

### **IPv4 (Internet Protocol Version 4)**

#### **Grundlegende Eigenschaften**

- **Länge:** 4 Byte (32 Bit)
- **Darstellung:** Dezimalzahlen, getrennt durch Punkte
- **Format:** `A.B.C.D` (Dotted Decimal)
- **Beispiel:** `192.168.0.1`
- **Adressraum:** 2³² = knapp **4,3 Milliarden** Adressen

#### **Netzwerkklassen (Klasseful Addressing)**

Das ursprüngliche IPv4-System teilte Adressen in **5 Klassen** ein:

| Klasse | Bereich | Größe | Netzadresse | Zweck |
|--------|---------|-------|-------------|--------|
| **A** | `0.0.0.0 – 127.255.255.255` | ca. 16,7 Mio. Hosts pro Netz | `N.0.0.0` | Sehr große Netze |
| **B** | `128.0.0.0 – 191.255.255.255` | ca. 65.534 Hosts | `N.N.0.0` | Große Netze |
| **C** | `192.0.0.0 – 223.255.255.255` | 254 Hosts | `N.N.N.0` | Kleine Netze |
| **D** | `224.0.0.0 – 239.255.255.255` | Multicast | — | TV, Radio, Broadcasts |
| **E** | `240.0.0.0 – 255.255.255.255` | Reserviert | — | Forschung |

#### **Subnetzmasken**

Die **Subnetzmaske** definiert, welche Bits einer IP-Adresse den Netzanteil bilden:

- **Notation:** `/24` bedeutet: Die ersten 24 Bits definieren das Netzwerk
- **Dezimal:** `/24` = `255.255.255.0`
- **Beispiel:** 
  - IP: `192.168.1.100`
  - Subnetzmaske: `255.255.255.0`
  - Netzadresse: `192.168.1.0` (Bereich: 192.168.1.1 bis 192.168.1.254)
  - Broadcast: `192.168.1.255`

**Wichtige Regel:** Nur Hosts im **gleichen logischen Netz** können direkt kommunizieren. Zur WAN-Kommunikation ist ein **Router** nötig.

#### **CIDR – Classless Inter-Domain Routing**

Modernes IPv4-Adressierungsschema, das die starre Klasseneinteilung ablöst:

- Beispiele: `/8`, `/16`, `/24`, `/30`
- Deutlich flexiblere Netzwerk-Größen
- Basis für heutige IPv4-Subnetzierung

#### **VLSM – Variable Length Subnet Mask**

Ermöglicht unterschiedliche Subnetzmasken innerhalb eines Netzwerks (unterteilt Subnetze in kleinere Subnetze).

---

### **IPv6 (Internet Protocol Version 6)**

Wegen der begrenzten IPv4-Adressen wurde **IPv6** entwickelt:

#### **Eigenschaften**

- **Länge:** 16 Byte (128 Bit)
- **Adressraum:** 2¹²⁸ = praktisch unbegrenzt
- **Format:** Hexadezimale Zahlen, getrennt durch Doppelpunkte
- **Beispiel:** `2a01:4f8:172:2e67::1`

#### **Schreibvereinfachungen**

1. **Führende Nullen weglassen:**
   - `2001:0db8:0000:0000` → `2001:db8:0:0`

2. **Aufeinanderfolgende Null-Blöcke durch `::` ersetzen:**
   - `2001:db8:0:0:0:0:0:1` → `2001:db8::1`
   - **Achtung:** Nur **einmalig** pro Adresse!

3. **Kleinschreibung:**
   - `2A01:4F8:172:2E67` → `2a01:4f8:172:2e67`

---

## 🔄 ARP (Address Resolution Protocol) – Schicht 3 Perspektive

ARP wird zwar auf Schicht 2 implementiert, arbeitet aber zwischen Schicht 2 und 3:

### **Der Prozess**

```
Host A (192.168.1.10): "Wer hat IP 192.168.1.100?"
    ↓
Broadcast im LAN (an alle)
    ↓
Host mit 192.168.1.100: "Ich! Meine MAC ist 00:11:E3:AB:4D:EF"
    ↓
Host A speichert: 192.168.1.100 ↔ 00:11:E3:AB:4D:EF
    ↓
Fortan direkte Kommunikation über MAC
```

**ARP-Cache-Auslesen:**
- Windows: `arp -a`
- Linux: `arp -n`

---

## 🛣️ Routing – Das Herzstück der Schicht 3

Ein **Router** verbindet verschiedene Netzwerke und leitet Pakete weiterführend weiter.

### **Unterschied: Switch vs. Router**

| Aspekt | Switch | Router |
|--------|--------|--------|
| **Arbeitsschicht** | Schicht 2 | Schicht 3 |
| **Adressierung** | MAC-Adressen | IP-Adressen |
| **Verbindungen** | LAN zu LAN (gleiche Broadcast-Domain) | Netzwerk zu Netzwerk |
| **Tabelle** | MAC-Tabelle | Routing-Tabelle |

### **Routingtabellen**

Ein Router verwaltet eine **Routing-Tabelle** mit Einträgen wie:

```
Ziel-Netzwerk | Subnetzmaske | nächster Hop | Metrik
192.168.1.0   | 255.255.255.0 | direkt      | 1
192.168.2.0   | 255.255.255.0 | 192.168.1.1 | 2
0.0.0.0       | 0.0.0.0       | Gateway     | 3 (Default)
```

**Wie der Router entscheidet:**
1. Packet ankommt → IP-Zieladresse auslesen
2. Routing-Tabelle nach passender Route durchsuchen
3. Falls gefunden → Paket zum nächsten Hop weiterleiten
4. Falls nicht gefunden → Default-Route nutzen (oder Paket verwerfen)

---

## 📡 Protokolle der Schicht 3

| Protokoll | Beschreibung | Einsatz |
|-----------|-------------|---------|
| **IP (IPv4/IPv6)** | Internet Protocol – Grundlagen des Internets | Standard für alle Netzwerke |
| **ICMP** | Internet Control Message Protocol | Ping, Traceroute, Fehlermeldungen |
| **IGP (OSPF, RIP)** | Interior Gateway Protocols | Routing innerhalb eines Unternehmens |
| **EGP (BGP)** | Exterior Gateway Protocols | Routing zwischen ISPs |
| **IPX** | Internetwork Packet Exchange | Früher in Novell NetWare (veraltet) |
| **X.25** | Veraltetes WAN-Protokoll | Sehr selten heute |
| **NetBEUI** | Von Microsoft (begrenzt, veraltet) | Alte Windows-Netzwerke |

---

## 🌍 WAN-Technologien (Schicht 1–3)

| Technologie | Übertragungsrate | Einsatz | Status |
|-------------|-----------------|--------|--------|
| **T.70 / T.90** | Variabel | B-ISDN, öffentliche Netze | Historisch |
| **Frame Relay** | 64 kbit/s – 10 Mbit/s | Enterprise WAN | Weitgehend ersetzt |
| **X.25** | 64 kbit/s | Telemetrie, WANs | Veraltet |
| **MPLS** | 1 Gbit/s+ | Modernes Enterprise Routing | Aktuell |

---

## 📊 OSI-Modell – Übersichtstabelle

| Schicht | Name | Aufgabe | Dateneinheit | Protokolle |
|---------|------|---------|--------------|-----------|
| **7** | 🖥️ Anwendung | Benutzerkommunikation | Data | HTTP, FTP, SMTP |
| **6** | 🎨 Darstellung | Formatierung | Data | Telnet, NetBIOS |
| **5** | 🔐 Sitzung | Verbindungsverwaltung | Data | TFTP |
| **4** | 🚚 Transport | Ende-zu-Ende | Segment | TCP, UDP |
| **3** | 🗺️ **Vermittlung** | **Routing & Pakete** | **Packet** | **IP, ICMP, BGP** |
| **2** | 🔗 Sicherung | Fehlerbehandlung | Frame | MAC, ARP |
| **1** | ⚡ Bitübertragung | Physische Signale | Bit | Ethernet, FDDI |

---

## 📚 Glossar-Begriffe aus dieser Schicht

- **IP-Adresse:** Logische Adresse eines Geräts im Netzwerk (IPv4/IPv6)
- **Subnetzmaske:** Definiert Netzwerk- und Host-Anteil einer IP
- **Router:** Gerät, das Pakete zwischen Netzwerken weiterleitet
- **Routing:** Prozess der Pfadbestimmung für Datenpakete
- **ICMP:** Protokoll für Diagnostik (Ping, Tracert)
- **CIDR/VLSM:** Moderne IPv4-Subnetzierungsmethoden
- **Broadcast-Domain:** Bereich, in dem Broadcasts empfangen werden (wird vom Router begrenzt)

→ [Vollständiges OSI-Glossar](/osi/glossar/)

---

## 🔗 Navigation

| ← Zurück | Übersicht | Weiter → |
|----------|-----------|----------|
| [Schicht 2: Sicherung](/osi/02-sicherung/) | [Zum OSI-Modell](/osi/) | [Schicht 4: Transport](/osi/04-transport/) |
