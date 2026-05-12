---
title: Schicht 5 – Sitzungsschicht (Session Layer)
description: Sitzungsverwaltung, Dialog-Steuerung und Synchronisierung
---

Die **Sitzungsschicht** verwaltet und überwacht **Dialoge zwischen Anwendungen**. Sie ist verantwortlich für den Aufbau, die Aufrechterhaltung und den Abbau von **Sitzungen** – nicht zu verwechseln mit TCP-Verbindungen der Schicht 4.

## 🎯 Kernaufgaben der Schicht 5

- **Sitzungsverwaltung:** Initialisierung, Verwaltung und Beendigung von Dialogen
- **Dialog-Steuerung (Synchronisierung):** Sicherstellung, dass beide Seiten im gleichen Zustand sind
- **Verhandlung:** Festlegung von Kommunikationsparametern, Codierungen, Protokollen
- **Wiederherstellung:** Mechanismen zur Fortsetzung bei Netzwerkunterbrechungen
- **Prüfpunkte (Checkpoints):** Markieren stabiler Zustände für Fehlerbehandlung
- **Authentifizierung & Autorisierung:** Verifikation von Benutzer und Zugriffskontrolle

---

## 🔄 Konzepte der Schicht 5

### **Sitzung vs. Verbindung**

| Aspekt | Verbindung (Schicht 4) | Sitzung (Schicht 5) |
|--------|----------------------|---------------------|
| **Verwaltung** | TCP/UDP | Application-Ebene |
| **Lebensdauer** | Kurz (bis Datentransfer vorbei) | Lang (über mehrere Verbindungen) |
| **Beispiel** | TCP-Handshake | User Login → mehrere HTTP-Requests |
| **Zustand** | Connected / Disconnected | Authenticated / Unauthenticated |

**Praktisches Beispiel:**
```
1. Browser öffnet HTTPS-Verbindung (Schicht 4 - TCP)
2. Server authentifiziert Benutzer → Sitzung startet (Schicht 5)
3. Benutzer navigiert auf Website → mehrere HTTP-Requests
4. Browser trennt Verbindung (Schicht 4)
5. Sitzung bleibt aktiv (können sich wieder anmelden ohne erneute Auth)
```

---

### **Dialog-Steuerung**

Die Sitzungsschicht stellt sicher, dass beide Kommunikationspartner synchronisiert sind:

#### **Simplex-Modus** (einseitig)
```
Sender ──→──→──→ Empfänger
```
- Nur eine Richtung
- Beispiel: TV-Broadcast

#### **Half-Duplex-Modus** (abwechselnd)
```
Geräte A ⟷ Geräte B
Nur EINE sendet zur gleichen Zeit!
```
- Abwechselnde Kommunikation
- Beispiel: Walkie-Talkie, ältere Modems

#### **Full-Duplex-Modus** (gleichzeitig)
```
Geräte A ⟷ Geräte B
BEIDE können gleichzeitig senden!
```
- Simultane bidirektionale Kommunikation
- Beispiel: Telefonanruf, moderne Netzwerke

---

### **Prüfpunkte (Checkpoints) & Fehlerwiederherstellung**

Die Sitzungsschicht kann **Prüfpunkte** setzen, um Fehlerwiederherstellung zu ermöglichen:

```
Datenübertragung
│
├─ [Prüfpunkt 1] ✓ Stabiler Zustand
│
├─ Datenpakete 2-5 übertragen
│
├─ [Prüfpunkt 2] ✓ Stabiler Zustand
│
├─ Fehler! Verbindung unterbrochen
│
└─ Wiederherstellung ab [Prüfpunkt 2]
   (Pakete 2-5 müssen nicht wiederholt werden)
```

**Vorteil:** Bei großen Dateitransfers müssen nicht alle Daten wiederholt werden.

---

## 🔑 Authentifizierung & Autorisierung

Die Sitzungsschicht kümmert sich oft um Sicherheit:

- **Authentifizierung:** "Bist du wirklich Max Mustermann?" (Login mit Passwort)
- **Autorisierung:** "Darf Max auf die Personaldatenbank zugreifen?" (Berechtigungen)

```
Benutzer-Login
│
├─ Credentials senden (Benutzername + Passwort)
│
├─ Server prüft → Authentifizierung OK
│
├─ Server prüft Berechtigungen → Autorisierung OK
│
├─ Sitzungs-ID erstellen → Session Token
│
├─ Token an Client zurückgeben
│
└─ Client sichert Token → wird mit jedem Request mitgesendet
```

---

## 🔐 Sitzungs-Technologien

### **Cookies (Web-Sitzungen)**

- **Zweck:** Speichern von Sitzungs-IDs auf Client-Seite
- **Speicherort:** Browser-Speicher
- **Lebensdauer:** Session-Cookies (beim Schließen gelöscht) oder Persistent (lange Gültig)
- **Sicherheit:** Können verschlüsselt übertragen werden (Secure-Flag)

```
Server → Client: "Set-Cookie: sessionid=abc123; HttpOnly"
Client → Server: "Cookie: sessionid=abc123"
```

### **Session-Tokens (API-Sitzungen)**

- **Zweck:** Authentifizierung in REST-APIs
- **Format:** JWT (JSON Web Token), OAuth 2.0, etc.
- **Speicherort:** Client speichert Token (z.B. im LocalStorage)
- **Übertragung:** In Authorization-Header

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

## 📡 Protokolle der Schicht 5

| Protokoll | Beschreibung | Einsatz |
|-----------|-------------|---------|
| **HTTP Sessions** | Cookie-basierte Sitzungsverwaltung | Webseiten, Webanwendungen |
| **RPC (Remote Procedure Call)** | Aufrufen von Funktionen auf Remote-Systemen | Verteilte Systeme |
| **NFS (Network File System)** | Netzwerk-Dateisystem-Zugriff | Unix/Linux Dateitransfer |
| **LDAP (Lightweight Directory Access Protocol)** | Verzeichnisdienste & Authentifizierung | Active Directory, Enterprise Auth |
| **Telnet** | Fernsteuerung via Text | Server-Administration (veraltet) |
| **FTP** | Dateiübertragung mit Login | Upload/Download |

> ⚠️ **Hinweis:** Heutzutage sind Funktionen der Schichten 5–7 oft **stark vermischt**. Viele moderne Anwendungen implementieren diese Funktionen direkt, ohne streng nach dem OSI-Modell zu trennen.

---

## 🌐 Praktische Beispiele

### **Beispiel 1: Web-Login**

```
1. Browser öffnet HTTP/HTTPS-Verbindung (Schicht 4)
   └─ Sitzung startet (Schicht 5)

2. Login-Form wird angezeigt
   └─ Kein authentifizierter User vorhanden

3. Benutzer füllt Loginformular, sendet Credentials
   └─ Server authentifiziert Benutzer

4. Server erstellt Session
   └─ Sitzungs-ID wird in Cookie gespeichert

5. Benutzer navigiert zur Dashboard-Seite
   └─ Browser sendet Cookie automatisch mit jedem Request
   └─ Server prüft Sitzungs-ID → Zugriff gewährt

6. Nach Logout wird Sitzung beendet
   └─ Sitzungs-ID wird ungültig
```

### **Beispiel 2: Download mit Wiederaufnahme**

```
1. Benutzer startet großen Download (500 MB)
   └─ Sitzung wird mit Prüfpunkten erstellt

2. Nach 50 MB erfolgt automatischer Prüfpunkt

3. Nach 150 MB: Netzwerkfehler, Verbindung trennt sich
   └─ Prüfpunkt bei 150 MB war erfolgreich

4. Download bricht ab, Browser zeigt "Fehler"

5. Benutzer klickt "Download fortsetzen"
   └─ Gleiche Sitzung wird wiederhergestellt
   └─ Download beginnt ab MB 150 (nicht von 0!)
```

---

## 📊 OSI-Modell – Übersichtstabelle

| Schicht | Name | Aufgabe | Dateneinheit | Protokolle |
|---------|------|---------|--------------|-----------|
| **7** | 🖥️ Anwendung | Benutzerkommunikation | Data | HTTP, FTP, SMTP |
| **6** | 🎨 Darstellung | Formatierung | Data | Telnet, NetBIOS |
| **5** | 🔐 **Sitzung** | **Dialog-Verwaltung** | **Data** | **HTTP, RPC, NFS, LDAP** |
| **4** | 🚚 Transport | Ende-zu-Ende | Segment | TCP, UDP |
| **3** | 🗺️ Vermittlung | Routing | Packet | IP, ICMP |
| **2** | 🔗 Sicherung | Fehlerbehandlung | Frame | MAC, ARP |
| **1** | ⚡ Bitübertragung | Physische Signale | Bit | Ethernet |

---

## 📚 Glossar-Begriffe aus dieser Schicht

- **Sitzung:** Verwaltete Kommunikation zwischen zwei Anwendungen über mehrere Verbindungen
- **Dialog-Steuerung:** Koordination der Kommunikationsrichtung (Simplex, Half/Full-Duplex)
- **Authentifizierung:** Verifikation der Benutzer-Identität
- **Autorisierung:** Feststellung von Berechtigungen
- **Prüfpunkt (Checkpoint):** Markierter stabiler Zustand für Fehlerwiederherstellung
- **Session-ID/Cookie:** Token zur Verfolgung einer Benutzersitzung
- **Token:** Authentifizierungs-Nachweis (JWT, OAuth)

→ [Vollständiges OSI-Glossar](/osi/glossar/)

---

## 🔗 Navigation

| ← Zurück | Übersicht | Weiter → |
|----------|-----------|----------|
| [Schicht 4: Transport](/osi/04-transport/) | [Zum OSI-Modell](/osi/) | [Schicht 6: Darstellung](/osi/06-darstellung/) |
