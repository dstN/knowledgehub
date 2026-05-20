---
title: Network Address Translation (NAT) & IP-Routing
description: IPv4-Adressknappheit, NAT-Funktionsweise, PAT und der Übergang zu IPv6
---

## Das Grundproblem: IPv4-Adressknappheit

Das klassische Internet-Protokoll Version 4 (IPv4) nutzt **32-Bit-Adressen**, woraus sich mathematisch maximal etwa **4,3 Milliarden** eindeutige IP-Adressen ergeben. 

```
2^32 = 4.294.967.296 IP-Adressen
```

Angesichts der rasanten weltweiten Zunahme von Computern, Smartphones, Servern und IoT-Geräten war dieser Adressraum schnell erschöpft.

### Die historische Lösung: Strikte Trennung öffentlich / privat

Um den Kollaps des Internets zu verhindern, bevor sich der Nachfolger **IPv6** flächendeckend durchsetzen konnte, wurde eine strikte Trennung eingeführt:

- **Öffentliche IP-Adressen**: Weltweit eindeutig, im Internet routingfähig (von Providern/Registraren vergeben)
- **Private IP-Adressen**: Lokal in Heim- oder Firmennetzen nutzbar, im Internet jedoch gesperrt

### Private IP-Adressbereiche nach RFC 1918

Diese Bereiche dürfen weltweit in internen Netzwerken **unendlich oft parallel** verwendet werden:

| Klasse | Bereich | Maske | Anzahl Hosts |
|--------|---------|-------|-------------|
| **A** | 10.0.0.0 – 10.255.255.255 | /8 | ~16 Mio. |
| **B** | 172.16.0.0 – 172.31.255.255 | /12 | ~1 Mio. |
| **C** | 192.168.0.0 – 192.168.255.255 | /16 | ~65.000 |

**Zusätzlich**:
- **Loopback**: 127.0.0.0/8 (für Testzwecke)
- **Link-Local**: 169.254.0.0/16 (automatische Adressierung, wenn DHCP fehlt)

---

## Die Funktionsweise von NAT

Da private IP-Adressen im öffentlichen Internet nicht geroutet werden können, muss ein **Vermittler** an der Netzwerkgrenze (in der Regel der **Edge-Router** oder die **Firewall**) die Adressen umschreiben. Diesen Vorgang nennt man **Network Address Translation (NAT)**.

### Schritt-für-Schritt Ablauf

Beispiel: Ein interner Client (z.B. IP `192.168.1.50`) ruft eine Website im Internet (z.B. IP `93.184.216.34`) auf.

```
1. Paket-Eingang
   Absender: 192.168.1.50
   Ziel: 93.184.216.34
   
2. Header-Modifikation (im Router)
   Alte Absender-IP: 192.168.1.50
   Neue Absender-IP: 203.0.113.5 (öffentliche IP des Routers)
   
3. NAT-Table Eintrag
   Router speichert:
   192.168.1.50:12345 ↔ 203.0.113.5:12345
   
4. Weiterleitung
   Modifiziertes Paket ins Internet
   
5. Rückweg
   Server antwortet an 203.0.113.5:12345
   Router schaut in NAT-Table
   Findet: gehört zu 192.168.1.50
   Tauscht Ziel-IP: 203.0.113.5 → 192.168.1.50
   Leitet Paket ins LAN weiter
```

---

## Die drei primären NAT-Arten

In der Netzwerkpraxis differenziert man je nach Einsatzzweck zwischen verschiedenen Ausprägungen von NAT:

### 1. Port Address Translation (PAT) – N:1 NAT

Auch **"NAT Overload"** genannt.

**Verhältnis**: Tausende interne Geräte teilen sich **eine einzige öffentliche IP**

**Funktionsweise**: Die Unterscheidung der Rückwege erfolgt über **dynamisch vergebene Quell-Portnummern** (Ephemeral Ports). Der Router merkt sich:

```
Interne Client IP : Port ↔ Externe IP : (anderer) Port
```

**Hauptanwendungsfall**: Standard im LAN und Heimnetzwerk. Ermöglicht, dass hunderte von Clients eine einzelne öffentliche IP-Adresse vom Provider nutzen.

### 2. Statisches NAT – 1:1 NAT

**Verhältnis**: Eine feste private IP wird permanent einer festen öffentlichen IP zugewiesen

**Funktionsweise**: Der Router hält eine **permanente 1:1 Zuordnung**, z.B.:
```
192.168.1.100 ↔ 203.0.113.10
```

**Notwendigkeit**: Wenn interne Server (z.B. Webserver, Mail-Server) von außen **direkt** und **unter derselben IP** erreichbar sein müssen.

### 3. Dynamisches NAT – M:N NAT

**Verhältnis**: Der Router besitzt einen **Pool aus mehreren öffentlichen IP-Adressen**

**Funktionsweise**: Ein ausgehender Client bekommt **temporär** eine freie Adresse zugewiesen. Nach Ablauf der Lease wird sie wieder freigegeben.

**Praktische Relevanz**: Selten genutzt, da ineffizient bei starkem IP-Mangel.

---

## Vor- und Nachteile von NAT

### Vorteile

#### 1. Erhebung des IPv4-Mangels
- Ermöglichte das unaufhaltsame Wachstum des Internets auf Basis von IPv4
- Gewann Zeit für die IPv6-Migration (seit 1998!)

#### 2. Sicherheitsgewinn (Security by Obscurity)
- Da interne IP-Adressen nach außen hin **unsichtbar** sind, können Angreifer aus dem Internet Rechner im LAN nicht ohne Weiteres direkt scannen oder attackieren
- **Wichtig**: Das ist kein echtes Sicherheitskonzept, sondern nur eine Verschleierungsmaßnahme

#### 3. Flexibilität
- Interne IP-Strukturen können komplett verändert werden, ohne dass Anpassungen beim Internetprovider nötig sind
- Firmennetzwerk kann migriert werden, ohne dass die öffentliche IP sich ändert

### Nachteile

#### 1. Verlust des End-to-End-Prinzips
- Die ursprüngliche Internet-Philosophie ("jeder Knoten ist mit jedem direkt verbunden") wird gebrochen
- **Peer-to-Peer-Dienste**, **VoIP** und **Online-Gaming** erfordern komplexe Hilfsmechanismen:
  - **Port-Forwarding**: Manuelles Routing von außen erreichbarer Ports
  - **STUN** (Session Traversal Utilities for NAT): Clients erkennen eigene öffentliche Adresse und Portnummer
  - **UPnP** (Universal Plug and Play): Automatische Port-Freigabe

#### 2. Ressourcen-Overhead
- Das ständige Berechnen und Umschreiben von IP-/TCP-Headern kostet den Router spürbare **CPU-Leistung**
- Verwaltung riesiger **NAT-Zustandstabellen** benötigt viel **RAM**
- Bei Millionen paralleler Verbindungen wird der Router zum Engpass

#### 3. Komplexität & Debugging
- Netzwerkanalyse und Troubleshooting werden erheblich erschwert
- Logging und Forensik ist komplizierter (durch IP-Umschreibung)

---

## Verbindung zu anderen Konzepten

### NAT vs. Firewall
- **NAT** arbeitet auf Layer 3 (Routing)
- **Firewalls** arbeiten meist auf Layer 4 (Ports) oder Layer 7 (Inhaltsanalyse)
- NAT wird oft **in** der Firewall implementiert (besonders bei Edge-Routern)

### NAT & DHCP
- **DHCP** vergibt private IPs an Clients
- **NAT** übersetzt diese privaten IPs ins öffentliche Internet
- Beide sind **komplementär**, nicht redundant

### IPv6 & NAT
- IPv6 mit 128-Bit-Adressen hat **keine Adressknappheit** (2^128 Adressen)
- Damit wird NAT überflüssig
- IPv6 wurde speziell entwickelt, um NAT zu vermeiden
- Trotz IPv6-Verfügbarkeit (seit 1998!) dominiert NAT über IPv4 noch immer die Praxis

---

## Wichtige Begriffe

- **RFC 1918**: Standard für private IP-Adressbereiche
- **Port-Forwarding**: Weiterleitung von außen eingehenden Ports an interne Adressen
- **NAT-Table / NAT-State**: Interne Tabelle, die Zuordnungen speichert
- **STUN** (Session Traversal Utilities for NAT): Technik zum Durchdringen von NAT
- **UPnP** (Universal Plug and Play): Automatische Port-Öffnung
- **Ephemeral Ports**: Dynamisch vergebene Quell-Portnummern (49152–65535)
- **Hairpinning / Loopback**: Wenn ein Client seine eigene öffentliche IP erreichen möchte, geht das Paket aus der Firewall heraus und muss wieder zurück – kann zu Problemen führen
