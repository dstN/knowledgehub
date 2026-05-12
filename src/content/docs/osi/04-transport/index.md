---
title: Schicht 4 – Transportschicht (Transport Layer)
description: TCP, UDP, Portnummern und zuverlässige Ende-zu-Ende-Kommunikation
---

Die **Transportschicht** ist verantwortlich für die **zuverlässige Ende-zu-Ende-Kommunikation** zwischen Anwendungen auf verschiedenen Geräten. Sie bietet die logische Grundlage für alles, das im Internet funktioniert – von Web-Browsing bis zur Echtzeitkommunikation.

## 🎯 Kernaufgaben der Schicht 4

- **Segmentierung & Wiedervereinigung:** Aufteilen großer Datenmengen in kleine Segmente, Wiederassemblierung beim Empfänger
- **Fehlererkennung & Korrektur:** Verluste und beschädigte Daten werden erkannt und (bei TCP) erneut übertragen
- **Flusskontrolle:** Verhinderung von Empfängerüberlastung durch Pufferverwaltung
- **Verbindungsverwaltung:** Aufbau, Aufrechterhaltung und Abbau von Verbindungen
- **Multiplexing:** Mehrere Anwendungen nutzen gleichzeitig die Netzwerkverbindung

---

## 🔌 Portnummern – Anwendungs-Identifikation

Während IP-Adressen **Geräte** identifizieren, identifizieren **Portnummern** die spezifische Anwendung auf einem Gerät.

**Kombiniert:** IP-Adresse + Portnummer = **Socket** (eindeutig weltweit)

### **Portnummern-Bereiche**

| Bereich | Name | Anzahl | Beispiele |
|---------|------|--------|----------|
| **0–1023** | Well-Known Ports | 1024 | HTTP (80), HTTPS (443), SMTP (25), DNS (53) |
| **1024–49151** | Registered Ports | 48128 | Custom-Dienste bei IANA registriert |
| **49152–65535** | Dynamic/Private Ports | 16384 | Client-seitige Verbindungen, temporär |

### **Häufige Ports (TCP & UDP)**

| Port | Protokoll | Dienst | Beschreibung |
|------|-----------|--------|-------------|
| **21** | TCP | FTP | Dateiübertragung |
| **23** | TCP | Telnet | Fernsteuerung (Text) |
| **25** | TCP | SMTP | E-Mail Versand |
| **53** | UDP | DNS | Domain Name System |
| **80** | TCP | HTTP | Web (unverschlüsselt) |
| **110** | TCP | POP3 | E-Mail Abruf |
| **119** | TCP | NNTP | Newsgroups |
| **137/138** | UDP | NetBIOS | Windows-Ressourcenteilung |
| **161** | UDP | SNMP | Netzwerk-Management |
| **443** | TCP | HTTPS | Web (verschlüsselt) |
| **389** | TCP | LDAP | Verzeichnisdienste |
| **3306** | TCP | MySQL | Datenbank |
| **3389** | TCP | RDP | Remote Desktop |

---

## 🔐 Portzustände

Ein Port kann sich in verschiedenen Zuständen befinden:

| Zustand | Bedeutung | Antwort |
|---------|-----------|--------|
| **Open** | Anwendung lauscht, akzeptiert Verbindungen | ACK / SYN-ACK |
| **Closed** | Kein Prozess lauscht, Port antwortet aktiv | RST (Reset) |
| **Filtered** | Firewall blockiert, keine Antwort | Timeout (Schweigen) |

---

## 📦 TCP – Transmission Control Protocol

Das **TCP** ist der **zuverlässige** Protokoll der Schicht 4. Es garantiert, dass alle Daten ankommen und in der richtigen Reihenfolge.

### **Eigenschaften**

- **Verbindungsorientiert:** Vor Datenübertragung muss eine Verbindung aufgebaut werden
- **Zuverlässig:** Verlorene oder beschädigte Segmente werden erneut übertragen
- **Geordnet:** Segmente werden in der Reihenfolge zusammengesetzt
- **Flusskontrolle:** Empfänger teilt seinem Sender den Pufferstatus mit
- **Verwendung:** Web (HTTP), E-Mail (SMTP, POP3), Dateitransfer (FTP)

### **Three-Way Handshake (Verbindungsaufbau)**

```
Client                                    Server
  |                                         |
  | -------> SYN (Sequenznr: 1000) -----> |
  |                                    (lauscht)
  | <------ SYN-ACK (Seq: 5000, ACK: 1001) <----
  |                                         |
  | -------> ACK (Sequenznr: 1001) -----> |
  |                                    (verbunden)
  |                                         |
  |---- Datenübertragung ------------------>
```

**Erklärung:**
1. **SYN:** Client sendet Verbindungswunsch mit Sequenznummer
2. **SYN-ACK:** Server bestätigt Sequenznummer und sendet eigene
3. **ACK:** Client bestätigt, Verbindung ist etabliert

### **Datenübertragungsphase (mit Bestätigungen)**

```
Sender                        Empfänger
  |                               |
  | ---> Segment 1 ------>   (empfangen)
  | (Timer gestartet)        
  |                          
  | <---- ACK für Segment 1 <----
  | (Timer gestoppt)
  |
  | ---> Segment 2 ------>   (empfangen)
  | (Timer gestartet)
  |
  | <---- ACK für Segment 2 <----
  | (Timer gestoppt)
```

**Bei Paketverlust:**
- Wenn ACK nicht innerhalb der Timer-Zeit ankommt
- Sender versendet Segment erneut (Retransmission)
- TCP passt die Timer dynamisch an

**In der Praxis:** Mehrere Segmente werden gebündelt und in Batch quittiert (Windowing).

### **Verbindungsabbau (Four-Way Handshake)**

```
Client                                    Server
  |                                         |
  | -------> FIN (Abbauwunsch) ------>    |
  |                                    (empfangen)
  | <---------- ACK <----------            |
  |                                         |
  |                                    (Verarbeitung)
  |                                         |
  | <---------- FIN <----------            |
  |                                    (eigener Abbau)
  | ----------> ACK ----------->           |
  |                                    (geschlossen)
```

**4 Schritte:**
1. Client sendet FIN (Finish)
2. Server bestätigt mit ACK
3. Server sendet eigenes FIN
4. Client bestätigt mit ACK
→ Verbindung geschlossen

---

## 🎯 UDP – User Datagram Protocol

Das **UDP** ist das **schnelle, unzuverlässige** Protokoll der Schicht 4. Es garantiert NICHTS – dafür ist es extrem schnell.

### **Eigenschaften**

- **Verbindungslos:** Keine Verbindung nötig, sendet einfach Daten
- **Unzuverlässig:** Keine Gewährleistung, dass Daten ankommen
- **Ungeordnet:** Segmente können in falscher Reihenfolge ankommen
- **Schnell:** Minimaler Overhead, ideal für Echtzeit
- **Verwendung:** DNS, VoIP, Video-Streaming, Gaming, DHCP

### **UDP Datagram**

```
[Header: Quell-Port | Ziel-Port | Länge | Prüfsumme]
[Payload: Benutzerdaten]
```

**Ablauf (vereinfacht):**
```
Sender: "Hier sind Daten für UDP Port 53"
Netzwerk: "Paket auf dem Weg..."
Empfänger: (erhält Paket oder auch nicht – egal!)
```

### **TCP vs. UDP – Vergleich**

| Aspekt | TCP | UDP |
|--------|-----|-----|
| **Verbindung** | Ja (Handshake) | Nein (verbindungslos) |
| **Zuverlässigkeit** | Ja (Retransmission) | Nein (Best-Effort) |
| **Reihenfolge** | Garantiert | Nicht garantiert |
| **Overhead** | Hoch | Niedrig |
| **Geschwindigkeit** | Langsamer | Schneller |
| **Einsatz** | Web, E-Mail, Dateitransfer | DNS, VoIP, Gaming |
| **Streaming** | Nein | Ja |

---

## 📡 Weitere Protokolle der Schicht 4

| Protokoll | Beschreibung | Einsatz |
|-----------|-------------|---------|
| **SPX** | Sequenced Packet Exchange (Novell NetWare) | Veraltet |
| **NetBEUI** | Einfaches Protokoll für Windows-LANs | Veraltet, durch TCP/IP ersetzt |

---

## 📊 OSI-Modell – Übersichtstabelle

| Schicht | Name | Aufgabe | Dateneinheit | Protokolle |
|---------|------|---------|--------------|-----------|
| **7** | 🖥️ Anwendung | Benutzerkommunikation | Data | HTTP, FTP, SMTP |
| **6** | 🎨 Darstellung | Formatierung | Data | Telnet, NetBIOS |
| **5** | 🔐 Sitzung | Verbindungsverwaltung | Data | TFTP |
| **4** | 🚚 **Transport** | **Ende-zu-Ende** | **Segment** | **TCP, UDP, SPX** |
| **3** | 🗺️ Vermittlung | Routing | Packet | IP, ICMP |
| **2** | 🔗 Sicherung | Fehlerbehandlung | Frame | MAC, ARP |
| **1** | ⚡ Bitübertragung | Physische Signale | Bit | Ethernet |

---

## 🎯 Praktische Beispiele

### **Beispiel 1: Webbrowser – TCP Port 80/443**

```
1. Browser öffnet Verbindung zu www.example.com:443 (HTTPS)
2. Three-Way Handshake mit Server
3. HTTP-Request wird in Segmente aufgeteilt
4. Jedes Segment erhält ACK
5. Server antwortet mit Webseite (HTML, CSS, JavaScript)
6. Alle Daten kommen an, in richtiger Reihenfolge
7. Vier-Way Handshake zum Abbau
```

### **Beispiel 2: Video-Streaming – UDP Port 5004+**

```
1. Client verbindet sich mit Stream-Server (App-Ebene)
2. Server sendet Video-Pakete über UDP
3. Einige Pakete gehen verloren (normal!)
4. Zuschauer sieht kleine Artefakte, aber Stream läuft flüssig
5. Bessere Bild-/Ton-Qualität als bei TCP (weil kein Retransmission-Overhead)
```

---

## 📚 Glossar-Begriffe aus dieser Schicht

- **TCP:** Zuverlässiges, verbindungsorientiertes Transportprotokoll
- **UDP:** Schnelles, unzuverlässiges, verbindungsloses Transportprotokoll
- **Port:** Nummer zur Identifikation einer Anwendung auf einem Gerät
- **Socket:** Kombination aus IP-Adresse + Port (eindeutig weltweit)
- **Segment:** Dateneinheit auf Schicht 4 (TCP/UDP-Paket)
- **Three-Way Handshake:** TCP-Verbindungsaufbau
- **Flusskontrolle:** Vermeidung von Empfängerüberlastung

→ [Vollständiges OSI-Glossar](/osi/glossar/)

---

## 🔗 Navigation

| ← Zurück | Übersicht | Weiter → |
|----------|-----------|----------|
| [Schicht 3: Vermittlung](/osi/03-vermittlung/) | [Zum OSI-Modell](/osi/) | [Schicht 5: Sitzung](/osi/05-sitzung/) |
