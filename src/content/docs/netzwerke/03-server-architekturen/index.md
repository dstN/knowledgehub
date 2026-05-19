---
title: Server-Architekturen & Cloud-Modelle
description: Klassische Server-Rollen im Netzwerk (Web, File, Datenbank, E-Mail, Virtualisierung u.v.m.) und die drei Cloud-Service-Modelle IaaS, PaaS und SaaS im direkten Vergleich.
---

In modernen Client-Server-Architekturen übernimmt kein Server alle Aufgaben allein. Stattdessen sind spezialisierte Server-Rollen etabliert, die jeweils optimiert für einen bestimmten Dienst arbeiten. Ergänzt wird diese klassische Infrastruktur zunehmend durch Cloud-Computing-Modelle, die physische Hardware durch skalierbare Internet-Dienste ersetzen.

## Klassische Server-Rollen im Netzwerk

### Webserver

Webserver sind dafür verantwortlich, Webseiten und Webanwendungen über das Netzwerk an Clients auszuliefern. Die Kommunikation erfolgt zustandslos über das **HTTP**- bzw. **HTTPS**-Protokoll: Der Client sendet eine Anfrage (Request), der Server antwortet mit dem angeforderten Inhalt (Response).

> **Bekannte Softwarelösungen:** Apache HTTP Server, Nginx, Microsoft IIS

### Dateiserver (File Server)

Dateiserver speichern und verwalten Dateien zentral und stellen sie mehreren Benutzern gleichzeitig über das Netzwerk zur Verfügung. Sie ermöglichen Filesharing, zentrale Datensicherung und granulare Zugriffskontrollen (Berechtigungsmanagement).

> **Umsetzungen:** Windows Server File Services, NAS-Geräte (Network Attached Storage) mit Protokollen wie SMB/CIFS (Windows) oder NFS (Linux/Unix)

### Datenbankserver (Database Server)

Datenbankserver verwalten strukturierte Datenbestände und bieten optimierte Mechanismen für Abfragen, Manipulationen und Transaktionen. Sie bilden das Datenschicht-Backend für nahezu alle modernen Anwendungen.

| Typ | Beispiele | Einsatz |
|-----|-----------|---------|
| Relational (SQL) | MySQL, PostgreSQL, MS SQL Server, Oracle | Strukturierte Daten mit Beziehungen |
| Nicht-relational (NoSQL) | MongoDB, Redis, Cassandra | Dokumente, Key-Value, Graphen |

### E-Mail-Server

E-Mail-Server handhaben das Routing, den Empfang, die Weiterleitung und die Speicherung elektronischer Nachrichten. Sie nutzen mehrere spezialisierte Protokolle:

| Protokoll | Funktion |
|-----------|---------|
| **SMTP** (Port 25/587) | Versenden von E-Mails (Sender → Empfänger-Server) |
| **POP3** (Port 110/995) | Abrufen von E-Mails (lädt und löscht vom Server) |
| **IMAP** (Port 143/993) | Synchronisiertes Postfach-Management (Mails bleiben auf dem Server) |

> **Bekannte Lösungen:** Microsoft Exchange Server, Postfix, Sendmail

### Anwendungsserver (Application Server)

Anwendungsserver hosten und verwalten die **Geschäftslogik (Business Logic)** einer Anwendung. Sie bilden die Middleware-Schicht zwischen Webserver und Datenbank und übernehmen Funktionen wie Benutzerauthentifizierung, Lastverteilung (Load Balancing) und Transaktionssicherheit.

```
Client  →  Webserver  →  Anwendungsserver  →  Datenbankserver
           (HTTP)         (Business Logic)      (Datenhaltung)
```

### Virtualisierungsserver

Virtualisierungsserver nutzen einen **Hypervisor**, um die physische Hardware in mehrere vollständig isolierte virtuelle Maschinen (VMs) oder Container aufzuteilen.

| Hypervisor-Typ | Beschreibung | Beispiele |
|----------------|-------------|-----------|
| **Typ 1 (Bare Metal)** | Läuft direkt auf Hardware, kein Host-OS nötig | VMware ESXi, Microsoft Hyper-V, KVM |
| **Typ 2 (Hosted)** | Läuft als Anwendung auf einem Host-OS | VirtualBox, VMware Workstation |

**Vorteile:** Maximale Hardwareauslastung, schnelle Bereitstellung neuer Umgebungen, einfache Snapshots und Migration.

### Proxyserver

Proxyserver agieren als **Vermittler (Intermediär)** im Kommunikationsfluss zwischen Client und Zielserver. Aufgaben umfassen:

- **Forward Proxy:** Stellvertreter für Clients nach außen (Anonymisierung, Inhaltsfilterung, Caching)
- **Reverse Proxy:** Stellvertreter vor Servern nach innen (Lastverteilung, SSL-Terminierung, Schutz der Backend-Server)

### DNS-Server (Domain Name System)

DNS-Server übernehmen die **Namensauflösung** im Netzwerk. Sie übersetzen menschenlesbare Domainnamen in maschinenlesbare IP-Adressen – vergleichbar mit einem digitalen Telefonbuch.

```
Browser-Anfrage: www.cavehub.de
      ↓
DNS-Server: "cavehub.de → 203.0.113.42"
      ↓
Verbindung zur IP 203.0.113.42
```

### Streaming-Server

Streaming-Server sind auf die kontinuierliche Echtzeitübertragung von Audio- und Videodaten spezialisiert. Sie unterscheiden zwischen **Live-Streaming** (Echtzeit-Übertragung) und **On-Demand-Streaming** (zeitversetzter Abruf gespeicherter Inhalte).

---

## Cloud-Service-Modelle

Cloud-Computing verlagert die Bereitstellung von IT-Ressourcen von lokaler Hardware (On-Premise) zu virtualisierten Diensten über das Internet. Der entscheidende Unterschied zwischen den drei Modellen liegt im **Grad der Verantwortungsteilung** zwischen Anbieter und Nutzer.

### Übersicht: IaaS, PaaS und SaaS

| | **IaaS** | **PaaS** | **SaaS** |
|-|----------|----------|----------|
| **Ausgeschrieben** | Infrastructure as a Service | Platform as a Service | Software as a Service |
| **Was wird bereitgestellt?** | Virtuelle Rechenressourcen (VMs, Speicher, Netzwerk) | Entwicklungsplattform inkl. Laufzeit, Datenbank, Frameworks | Fertige Softwareanwendungen über Browser/App |
| **Nutzer-Verantwortung** | OS, Middleware, Daten, Anwendungen | Nur Code und Daten der eigenen App | Nur Konfiguration und Datenpflege |
| **Anbieter-Verantwortung** | Hardware, Virtualisierung, Netzwerk | + OS, Laufzeit, Skalierung, Patching | + Alles inkl. Anwendung |
| **Abrechnung** | Pay-as-you-go (nach Verbrauch) | Variabel nach Nutzung | Subscription (monatlich/jährlich) |
| **Praxisbeispiele** | AWS EC2, Microsoft Azure VMs, Google Compute Engine | Heroku, AWS Elastic Beanstalk, Google App Engine | Microsoft 365, Salesforce, Dropbox, Google Workspace |

### Merkhilfe: Die Pizza-Analogie

> Stell dir vor, du möchtest Pizza essen:
> - **On-Premise:** Du kaufst alle Zutaten, backst selbst, abwäschst selbst.
> - **IaaS:** Du mietest eine Küche mit Ofen – Zutaten, Rezept und Reinigung sind dein Job.
> - **PaaS:** Du bekommst eine fertige Küche mit Zutaten – du backt nur noch nach Rezept.
> - **SaaS:** Du bestellst fertige Pizza – du isst nur noch.

### Verantwortungsschichten im Vergleich

```
Anwendung        [ Nutzer ] [ Nutzer ] [Anbieter]
Daten            [ Nutzer ] [ Nutzer ] [Anbieter]
Laufzeitumgebung [ Nutzer ] [Anbieter] [Anbieter]
Betriebssystem   [ Nutzer ] [Anbieter] [Anbieter]
Virtualisierung  [Anbieter] [Anbieter] [Anbieter]
Hardware         [Anbieter] [Anbieter] [Anbieter]
                   IaaS       PaaS       SaaS
```
