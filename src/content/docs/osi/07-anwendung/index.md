---
title: Schicht 7 – Anwendungsschicht (Application Layer)
description: HTTP, FTP, E-Mail, DNS und Benutzer-Schnittstellen
---

Die **Anwendungsschicht** ist die **oberste und sichtbarste** Schicht des OSI-Modells. Sie ist der direkte Kontaktpunkt zwischen Benutzer und Netzwerk. Hier existieren die Anwendungen, die wir täglich nutzen – von Web-Browsern über E-Mail bis zu VoIP-Telefonen.

## 🎯 Kernaufgaben der Schicht 7

- **Benutzer-Schnittstellen:** Grafische oder textbasierte Interfaces
- **Anwendungs-Protokolle:** Regeln für spezifische Dienste
- **Netzwerk-Dienste:** Vermittlung zwischen Anwendung und Netzwerk
- **Ressourcen-Zugang:** Zugriff auf entfernte Dateien, Drucker, etc.
- **Netzwerk-Transparenz:** Der Benutzer merkt nicht, dass er über ein Netzwerk kommuniziert

> 💡 **Wichtig:** Schicht 7 ist ausschließlich **application-bezogen**. Es gibt keine genormten Schicht-7-Protokolle, nur anwendungsspezifische.

---

## 🌐 Web & Browsing – HTTP/HTTPS

Das **Hypertext Transfer Protocol** ist das Fundament des World Wide Web.

### **HTTP – Hypertext Transfer Protocol**

- **Port:** 80 (Standard)
- **Verschlüsselung:** Keine
- **Verwendung:** Web, APIs
- **Zustandslosigkeit:** Jede Anfrage ist unabhängig (außer mit Cookies)

#### **HTTP-Request-Antwort-Zyklus**

```
1. Request (Client → Server):
   GET /index.html HTTP/1.1
   Host: www.example.com
   Accept: text/html
   
2. Server verarbeitet Request
   
3. Response (Server → Client):
   HTTP/1.1 200 OK
   Content-Type: text/html
   Content-Length: 4543
   
   <html>...</html>
```

#### **HTTP-Status-Codes**

| Bereich | Bedeutung | Beispiele |
|---------|-----------|----------|
| **2xx** | Erfolg | 200 OK, 201 Created |
| **3xx** | Umleitung | 301 Moved, 304 Not Modified |
| **4xx** | Client-Fehler | 404 Not Found, 403 Forbidden |
| **5xx** | Server-Fehler | 500 Internal Server Error |

### **HTTPS – HTTP Secure**

- **Port:** 443 (Standard)
- **Verschlüsselung:** TLS/SSL (Schicht 6)
- **Zertifikat:** X.509 zur Identifikation des Servers
- **Verwendung:** Banking, E-Commerce, Login-Seiten

**Browser-Anzeige:**
```
🔒 https://www.bank.de

Grünes Schloss = Vertrauenswürdig & verschlüsselt
```

---

## 📧 E-Mail – SMTP, POP3, IMAP

### **SMTP – Simple Mail Transfer Protocol**

- **Port:** 25, 587, 465
- **Aufgabe:** E-Mails **versenden**
- **Verbindung:** Client → Server
- **Verlauf:**
  1. Client verbindet sich mit SMTP-Server
  2. Authentifizierung mit Benutzername/Passwort
  3. E-Mail wird zusammengestellt (To, From, Subject, Body)
  4. SMTP sendet E-Mail zum Server
  5. Server leitet E-Mail an Empfänger-Server weiter

```
┌─ max@company.de ──[SMTP]──> mail.company.de ──> anna@external.de
└─ (Client)                    (Relay-Server)      (Empfänger)
```

### **POP3 – Post Office Protocol (Version 3)**

- **Port:** 110, 995 (mit TLS)
- **Aufgabe:** E-Mails **abrufen**
- **Besonderheit:** E-Mails werden vom Server **gelöscht** (Standard)
- **Verwendung:** Einfach, für einen Client pro Account

```
Postfach auf Server: [E-Mail 1] [E-Mail 2] [E-Mail 3]
        ↓ [POP3 abrufen]
Client: [E-Mail 1] [E-Mail 2] [E-Mail 3]
Server: [gelöscht]
```

### **IMAP – Internet Message Access Protocol**

- **Port:** 143, 993 (mit TLS)
- **Aufgabe:** E-Mails **verwalten**
- **Besonderheit:** E-Mails bleiben auf Server, nur Kopien lokal
- **Verwendung:** Mobil, mehrere Clients pro Account

```
Postfach auf Server: [E-Mail 1] [E-Mail 2] [E-Mail 3]
        ↓ [IMAP: nur Kopien]
Client: [Kopie 1] [Kopie 2] [Kopie 3]
Server: [Original bleiben] ✓ Synchronisierung möglich
```

#### **SMTP vs. POP3 vs. IMAP**

| Aspekt | SMTP | POP3 | IMAP |
|--------|------|------|------|
| **Aufgabe** | Versenden | Abrufen (einfach) | Verwalten (komplex) |
| **E-Mails auf Server** | Kurz (weitergeleitet) | Gelöscht | Bleiben |
| **Multi-Device** | Nein | Nein | Ja ✓ |
| **Synchron** | — | Nein | Ja ✓ |
| **Ordner-Struktur** | — | Lokal | Server + Sync |

---

## 📁 Dateitransfer – FTP & SFTP

### **FTP – File Transfer Protocol**

- **Port:** 20/21
- **Aufgabe:** Dateiübertragung
- **Authentifizierung:** Benutzername + Passwort
- **Verschlüsselung:** Keine (Passwort im Klartext!)
- **Kommandos:** `get`, `put`, `ls`, `cd`, etc.

```
Client ──[FTP/Port 21]──> Server (Verbindung)
        ──[Data/Port 20]──> (Daten-Transfer)
```

**Probleme:**
- Unsicher (alles im Klartext)
- Passwort wird übertragen ohne Verschlüsselung
- Nicht für moderne Systeme empfohlen

### **SFTP – SSH File Transfer Protocol**

- **Port:** 22
- **Aufgabe:** Sichere Dateiübertragung
- **Verschlüsselung:** SSH (Schicht 6)
- **Authentifizierung:** Passwort oder Public-Key
- **Einsatz:** Moderne Standard für Dateitransfer

```
Client ──[SSH Tunnel: Port 22]──> Server
        (alles verschlüsselt)
```

---

## 🔍 DNS – Domain Name System

Das **DNS** ist das "Telefonbuch des Internet". Es übersetzt **Domain-Namen** in **IP-Adressen**.

### **Wie DNS funktioniert**

```
Benutzer: "Ich möchte www.example.com besuchen"
             ↓
Browser: "DNS, was ist die IP für www.example.com?"
             ↓
DNS-Resolver: Abfrage startet...
             ↓
1. Recursion zu Root-Nameserver (".com-Server, wo ist example.com?")
2. Delegation zu .com-Nameserver ("example.com-Server, wo ist www?")
3. Antwort: "www.example.com = 93.184.216.34"
             ↓
Browser: "Verbindung zu 93.184.216.34 öffnen"
             ↓
Webseite wird geladen!
```

### **DNS-Record-Typen**

| Typ | Funktion | Beispiel |
|-----|----------|----------|
| **A** | IPv4-Adresse | `example.com IN A 93.184.216.34` |
| **AAAA** | IPv6-Adresse | `example.com IN AAAA 2606:...` |
| **CNAME** | Alias | `www.example.com IN CNAME example.com` |
| **MX** | Mail-Server | `example.com IN MX 10 mail.example.com` |
| **TXT** | Text-Records | SPF, DKIM für E-Mail-Sicherheit |
| **NS** | Nameserver | `example.com IN NS ns1.example.com` |

---

## 📞 VoIP – Voice over Internet Protocol

VoIP ermöglicht **Telefonanrufe über das Internet**.

### **Protokolle**

| Protokoll | Aufgabe | Einsatz |
|-----------|---------|--------|
| **SIP** | Session Initiation Protocol – Anrufaufbau | VoIP-Routing, Softphones |
| **RTP** | Real-time Transport Protocol – Audio/Video | Live-Übertragung |
| **RTCP** | RTP Control Protocol – Qualitätsmonitoring | QoS-Feedback |

### **VoIP-Ablauf**

```
1. Alice möchte Bob anrufen
2. Alice's Softphone sendet SIP INVITE an Bob's Server
3. Server routet zu Bob's Gerät
4. Bob's Gerät klingelt
5. Bob nimmt ab → RTP-Stream wird aktiviert
6. Audio fließt über RTP (mit niedriger Latenz)
7. RTCP überwacht Qualität
8. Bei Auflegung: SIP BYE beendet Verbindung
```

---

## 📱 Weitere Anwendungs-Protokolle

| Protokoll | Port | Aufgabe | Einsatz |
|-----------|------|---------|---------|
| **Telnet** | 23 | Fernsteuerung (Text) | Legacy, unsicher |
| **SSH** | 22 | Sichere Fernsteuerung | Linux/Unix Administration |
| **LDAP** | 389 | Verzeichnisdienste | Active Directory, Enterprise Auth |
| **Kerberos** | 88 | Sichere Authentifizierung | Enterprise-Netze |
| **SNMP** | 161 | Netzwerk-Management | Überwachung von Switches/Routern |
| **NTP** | 123 | Zeitsynchronisierung | Systemzeitabgleich |
| **DHCP** | 67/68 | Automatische IP-Vergabe | Netzwerk-Provisioning |
| **SMB/CIFS** | 445 | Datei-/Druckerfreigabe | Windows-Netzwerk |

---

## 🌐 Praktische Beispiele

### **Beispiel 1: Webseite öffnen**

```
1. Benutzer gibt URL ein: https://www.github.com

2. Browser führt DNS-Anfrage durch
   └─ "Was ist die IP für www.github.com?"
   └─ Antwort: 140.82.113.4

3. Browser verbindet sich zu Port 443 (HTTPS)

4. TLS-Handshake (Schicht 6)
   └─ Zertifikat wird überprüft
   └─ Verschlüsselung wird aktiviert

5. HTTP-Request (Schicht 7):
   GET / HTTP/1.1
   Host: www.github.com

6. Server antwortet mit HTML-Code
   └─ Komprimiert (GZIP)
   └─ Verschlüsselt (TLS)

7. Browser:
   └─ Entschlüsselt (TLS)
   └─ Dekomprimiert (GZIP)
   └─ Rendert HTML
   └─ Webseite ist sichtbar
```

### **Beispiel 2: E-Mail versenden**

```
1. Benutzer schreibt E-Mail in Client (z.B. Thunderbird)

2. Client verbindet zu SMTP-Server (Port 587)
   └─ TLS-Verschlüsselung
   └─ Authentifizierung mit Passwort

3. E-Mail-Inhalt wird übertragen:
   From: max@company.de
   To: anna@external.de
   Subject: Wichtige Mitteilung
   [Körper]

4. SMTP-Server leitet E-Mail weiter
   └─ DNS-Abfrage für "external.de"
   └─ Verbindung zu externer.de's Mail-Server
   └─ E-Mail wird zugestellt

5. Anna's Mail-Server speichert E-Mail

6. Anna öffnet ihren Mail-Client
   └─ Client verbindet zu IMAP-Server
   └─ E-Mail wird synchronisiert
   └─ Anna sieht E-Mail
```

---

## 📊 OSI-Modell – Übersichtstabelle

| Schicht | Name | Aufgabe | Dateneinheit | Protokolle |
|---------|------|---------|--------------|-----------|
| **7** | 🖥️ **Anwendung** | **Benutzer-Apps** | **Data** | **HTTP, FTP, SMTP, DNS, SSH** |
| **6** | 🎨 Darstellung | Formatierung | Data | SSL/TLS, MIME |
| **5** | 🔐 Sitzung | Dialog-Verwaltung | Data | HTTP Sessions |
| **4** | 🚚 Transport | Ende-zu-Ende | Segment | TCP, UDP |
| **3** | 🗺️ Vermittlung | Routing | Packet | IP, ICMP |
| **2** | 🔗 Sicherung | Fehlerbehandlung | Frame | MAC, ARP |
| **1** | ⚡ Bitübertragung | Physische Signale | Bit | Ethernet |

---

## 📚 Glossar-Begriffe aus dieser Schicht

- **HTTP:** Protokoll für Web-Übertragung (unverschlüsselt)
- **HTTPS:** HTTP mit TLS-Verschlüsselung
- **SMTP:** Protokoll zum Versenden von E-Mails
- **POP3:** Protokoll zum Abrufen von E-Mails (Server löscht danach)
- **IMAP:** Protokoll zur E-Mail-Verwaltung (Server speichert)
- **FTP/SFTP:** Dateitransfer-Protokolle
- **DNS:** Auflösung von Domain-Namen zu IP-Adressen
- **VoIP:** Telefonanrufe über Internet
- **SSH:** Sichere Fernsteuerung

→ [Vollständiges OSI-Glossar](/osi/glossar/)

---

## 🔗 Navigation

| ← Zurück | Übersicht |
|----------|-----------|
| [Schicht 6: Darstellung](/osi/06-darstellung/) | [Zum OSI-Modell](/osi/) |
