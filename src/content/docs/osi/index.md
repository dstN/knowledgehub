---
title: OSI-Modell – Die 7 Schichten der Netzwerkkommunikation
description: Verstehe das Open Systems Interconnection Modell und wie Daten durch die 7 Schichten fließen
---

# 🌐 Das OSI-Modell

Das **Open Systems Interconnection (OSI) Modell** ist das fundamentale Referenzmodell für die Kommunikation in Computernetzwerken. Es beschreibt, wie Daten zwischen verschiedenen Systemen ausgetauscht werden, und teilt diesen Prozess in **7 logische Schichten** ein.

## 🎯 Warum das OSI-Modell wichtig ist

Das OSI-Modell ermöglicht es Ingenieuren und IT-Professionellen, komplexe Netzwerkprobleme systematisch zu analysieren. Indem wir verstehen, auf welcher Schicht ein Problem auftritt, können wir es schneller diagnostizieren und beheben.

**Merksatz:** *"Please Do Not Throw Sausage Pizza Away"*
- **P**hysical (Schicht 1)
- **D**ata Link (Schicht 2)
- **N**etwork (Schicht 3)
- **T**ransport (Schicht 4)
- **S**ession (Schicht 5)
- **P**resentation (Schicht 6)
- **A**pplication (Schicht 7)

---

## 📊 Die 7 Schichten im Überblick

| Schicht | Name | Aufgabe | Dateneinheit | Protokolle / Beispiele |
|---------|------|---------|--------------|----------------------|
| **7** | 🖥️ **Anwendung** | Benutzerkommunikation & Netzwerkdienste | Data | Telnet, FTP, HTTP, SMTP, NNTP |
| **6** | 🎨 **Darstellung** | Datenformatierung & Verschlüsselung | Data | Telnet, FTP, HTTP, SMTP, NNTP, NetBIOS |
| **5** | 🔐 **Sitzung** | Verbindungsverwaltung & Synchronisierung | Data | Telnet, FTP, HTTP, SMTP, NNTP, NetBIOS, TFTP |
| **4** | 🚚 **Transport** | Ende-zu-Ende-Verbindung & Zuverlässigkeit | **Segment** | TCP, UDP, SPX, NetBEUI |
| **3** | 🗺️ **Vermittlung** | Routing & logische Adressierung | **Packet** | IP, IPX, ICMP, T.70, T.90, X.25, NetBEUI |
| **2** | 🔗 **Sicherung** | Fehlerbehandlung & physische Adressierung | **Frame** | LLC/MAC, X.75, V.120, ARP, HDLC, PPP |
| **1** | ⚡ **Bitübertragung** | Physische Signalübertragung | **Bit** | Ethernet, Token Ring, FDDI, V.110, X.25, Frame Relay, V.90, V.34, V.24 |

---

## 🔄 Datenkapselung – Schicht für Schicht

Wenn Daten von oben nach unten durch das OSI-Modell fließen, werden sie auf jeder Schicht um einen **Header** (und ggf. einen Trailer) erweitert. Dieser Prozess heißt **Encapsulation** (Kapselung).

```
Schicht 7 (Anwendung)   →  Data
Schicht 6 (Darstellung) →  Data
Schicht 5 (Sitzung)     →  Data
Schicht 4 (Transport)   →  [Transport-Header] Data (= Segment)
Schicht 3 (Vermittlung) →  [Network-Header] [Transport-Header] Data (= Packet)
Schicht 2 (Sicherung)   →  [Link-Header] [Network-Header] [Transport-Header] Data [Trailer] (= Frame)
Schicht 1 (Bitübertragung) → ⚡⚡⚡ (Umwandlung in Bits für die Übertragung)
```

---

## 📚 Schichten-Details

Klicke auf eine der folgenden Schichten, um detaillierte Informationen zu erhalten:

### **Untere Schichten** (1–3) – Hardware & Übertragung

Diese Schichten befassen sich mit der physischen Infrastruktur und dem Transport von Daten zwischen Geräten.

- [**Schicht 1: Bitübertragungsschicht (Physical Layer)**](/osi/01-bitübertragung/) ⚡
  - Physische Übertragungsmedien, Stecker, Topologien, Hardware
  
- [**Schicht 2: Sicherungsschicht (Data Link Layer)**](/osi/02-sicherung/) 🔗
  - MAC-Adressen, Switches, Frames, Fehlerbehandlung
  
- [**Schicht 3: Vermittlungsschicht (Network Layer)**](/osi/03-vermittlung/) 🗺️
  - IP-Adressen, Routing, Router, Subnetzmasken

### **Mittlere Schicht** (4) – Verbindungslogik

- [**Schicht 4: Transportschicht (Transport Layer)**](/osi/04-transport/) 🚚
  - TCP, UDP, Portnummern, Zuverlässigkeit & Flusskontrolle

### **Obere Schichten** (5–7) – Anwendungen & Dienste

Diese Schichten befassen sich mit Softwareanwendungen und Benutzerdiensten.

- [**Schicht 5: Kommunikationssicherungsschicht (Session Layer)**](/osi/05-sitzung/) 🔐
  - Sitzungsverwaltung, Dialog, Synchronisierung
  
- [**Schicht 6: Darstellungsschicht (Presentation Layer)**](/osi/06-darstellung/) 🎨
  - Datenformatierung, Kompression, Verschlüsselung
  
- [**Schicht 7: Anwendungsschicht (Application Layer)**](/osi/07-anwendung/) 🖥️
  - E-Mail, Web, Dateitransfer, DNS, Benutzeranwendungen

---

## 🔍 Praktische Anwendung

### Fehlerbehandlung nach Schicht

Wenn ein Netzwerkproblem auftritt, hilft das OSI-Modell bei der Diagnose:

- **Kein Internetzugang, aber lokale Geräte erreichbar?** → Problem in Schicht 3 oder 4 (IP/Routing)
- **Drucker im Netzwerk nicht sichtbar?** → Problem in Schicht 2 oder 3 (Adressierung)
- **Webseite lädt nicht, aber Mail funktioniert?** → Problem in Schicht 7 (HTTP-Protokoll)
- **Langsame Datenübertragung?** → Problem in Schicht 1 (Übertragungsmedium) oder Schicht 4 (TCP-Flusskontrolle)

---

## 📖 Glossar

Alle wichtigen Fachbegriffe zum OSI-Modell findest du im [**OSI-Glossar**](/osi/glossar/).

---

## 🎓 Lernpfad

Wir empfehlen, die Schichten **von unten nach oben** zu studieren:

1. Beginne mit der **Bitübertragungsschicht (Schicht 1)** – hier verstehst du die physische Basis
2. Steige dann zu den **Sicherungs- und Vermittlungsschichten (2–3)** auf – hier lernst du Switching und Routing
3. Erkunde die **Transportschicht (4)** – hier verstehst du TCP/UDP und Verbindungen
4. Nutze die **Sitzungs- bis Anwendungsschichten (5–7)** für praktische Anwendungen

**Alternative:** Wenn du ein spezielles Thema (z.B. IP-Adressierung) schnell lernen möchtest, kannst du direkt zu der entsprechenden Schicht springen.

---

## 💡 Tipps zum Lernen

- **Merke dir die Schichtnummern:** Höhere Zahlen = näher beim Benutzer (Anwendungen)
- **Verstehe die Kapselung:** Jede Schicht fügt ihre eigenen Informationen hinzu
- **Nutze das Glossar:** Fachbegriffe sind die Sprache der Netzwerkingenieure
- **Übe mit realen Beispielen:** Verwende `ipconfig`, `ping`, `tracert` oder Packet-Sniffer wie Wireshark
