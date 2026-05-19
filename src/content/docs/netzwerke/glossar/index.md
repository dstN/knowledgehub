---
title: Netzwerk-Glossar – Fachbegriffe erklärt
description: Alphabetische Sammlung aller wichtigen Netzwerk-Begriffe mit detaillierten Erklärungen für Subnetting, CIDR und VLSM
---

Willkommen im Netzwerk-Glossar! Hier findest du alle wichtigen Fachbegriffe rund um IP-Adressierung, Subnetting, Server-Architekturen, Cloud-Modelle und Netzwerksicherheit – alphabetisch sortiert und mit praktischen Beispielen erklärt.

---

## A

### **AES (Advanced Encryption Standard)**
Symmetrisches Verschlüsselungsverfahren, das weltweit als Standard für die Datenverschlüsselung gilt. Nutzt Schlüssellängen von 128, 192 oder 256 Bit. Eingesetzt in VPNs, HTTPS, WLANs (WPA2/3) und der Festplattenverschlüsselung.

### **Aggregation**
Umgekehrtes Konzept zu Subnetting: Das Zusammenfassen mehrerer kleinerer Netzwerke zu einem größeren Netzwerk. Dies wird in Routing-Protokollen verwendet, um die Routing-Tabellen zu verkleinern und weniger Speicher zu benötigen.

**Beispiel:** Vier Netzwerke 192.168.0.0/26, 192.168.0.64/26, 192.168.0.128/26, 192.168.0.192/26 können zu 192.168.0.0/24 aggregiert werden.

---

## B

### **Anwendungsserver (Application Server)**
Server-Rolle, die die Geschäftslogik (Business Logic) einer Anwendung hostet. Bildet die Middleware-Schicht zwischen Webserver und Datenbankserver und übernimmt Aufgaben wie Benutzerauthentifizierung, Lastverteilung und Transaktionssicherheit.

### **Authentifizierung**
Überprüfung der Identität eines Benutzers oder Systems vor der Gewährung von Zugang. Methoden: Passwort, Biometrie, Smartcard, Hardware-Token. Wird durch **MFA** verstärkt. Abzugrenzen von der Autorisierung.

### **Autorisierung**
Zuweisung von Rechten und Zugriffsberechtigungen nach erfolgreicher Authentifizierung. Regelt, welche Ressourcen ein Benutzer nutzen darf (Prinzip der **geringsten Rechte / Least Privilege**).

### **Bits (Host-Bits & Netz-Bits)**
IPv4-Adressen bestehen aus insgesamt 32 Bits. Diese werden aufgeteilt in:
- **Netz-Bits:** Identifizieren das Netzwerk (definiert durch die Subnetzmaske)
- **Host-Bits:** Identifizieren einen einzelnen Host im Netzwerk

**Beispiel:** In 192.168.1.0/24 sind die ersten 24 Bits Netz-Bits (192.168.1), die letzten 8 Bits Host-Bits (.0–.255).

### **Broadcast-Adresse**
Die letzte IP-Adresse in einem Subnetz. Sie wird verwendet, um an **alle** Geräte im Netzwerk zu senden. Diese Adresse ist nicht für Hosts reservierbar.

**Beispiel:** In 192.168.1.0/24 ist die Broadcast-Adresse 192.168.1.255.

---

## C

### **CIA-Triade**
Drei fundamentale Schutzziele der Informationssicherheit: **C**onfidentiality (Vertraulichkeit – Daten nur für Berechtigte), **I**ntegrity (Integrität – keine unbemerkte Veränderung), **A**vailability (Verfügbarkeit – Systeme müssen erreichbar sein). Basis jedes Sicherheitskonzepts.

### **Cloud Computing**
Bereitstellung von IT-Ressourcen (Rechenleistung, Speicher, Software) über das Internet auf Abruf. Ersetzt lokale Hardware (On-Premise) durch skalierbare Dienste bei externen Anbietern. Hauptmodelle: IaaS, PaaS, SaaS.

### **CIDR (Classless Inter-Domain Routing)**
Flexible Subnetzierungsmethode, die die starre Klassenlogik (A, B, C) durch variable Subnetzmasken ersetzt. Die Schreibweise ist `IP/Präfix`, z.B. 192.168.1.0/24.

**Beispiel:** Statt immer ein ganzes Klasse-C-Netz (254 Hosts) zu vergeben, kann man mit CIDR auch nur /28 (14 Hosts) für eine Point-to-Point-Verbindung nutzen.

---

## D

### **Data in Transit / Data at Rest**
Zwei Zustände, in denen Daten gespeichert oder übertragen werden. **Data in Transit**: Daten während der Übertragung über ein Netzwerk (z. B. HTTPS-Verbindung). **Data at Rest**: Daten in gespeichertem Zustand auf einem Datenträger (z. B. verschlüsselte Festplatte).

### **Dateiserver (File Server)**
Server-Rolle zur zentralen Speicherung und Verwaltung von Dateien in einem Netzwerk. Ermöglicht Filesharing und granulare Zugriffskontrollen. Umgesetzt über Windows Server File Services oder NAS-Geräte mit SMB/CIFS oder NFS.

### **Datenbankserver (Database Server)**
Server-Rolle zur Verwaltung von Datenbanken. Bietet optimierte Mechanismen für strukturierte Abfragen, Datenmanipulation und Transaktionen. Unterscheidet zwischen relationalen (MySQL, PostgreSQL, SQL Server) und nicht-relationalen (MongoDB) Systemen.

### **Defense in Depth**
Sicherheitskonzept mit mehreren überlagerten Schutzschichten. Kein einzelnes Werkzeug sichert ein Netzwerk vollständig – stattdessen ergänzen sich Firewalls, IDS/IPS, VPN, Verschlüsselung, Segmentierung und Logging gegenseitig.

### **DNS-Server (Domain Name System)**
Server-Rolle zur Namensauflösung: Übersetzt menschenlesbare Domainnamen (z. B. www.cavehub.de) in maschinenlesbare IP-Adressen. Funktioniert hierarchisch über Root-Server, TLD-Server und autoritative Nameserver.

### **Default-Netzwerk**
Das Netzwerk 0.0.0.0/0 repräsentiert alle möglichen IPv4-Adressen. In Routing-Tabellen wird eine Default-Route (0.0.0.0/0) verwendet, um Pakete zu routen, die auf keine spezifischere Route passen.

**Beispiel:** Wenn keine spezifische Route bekannt ist, nutzt der Router die Default-Route zum Gateway.

---

## E

### **E-Mail-Server**
Server-Rolle zur Zustellung, zum Empfang und zur Verwaltung von E-Mails. Nutzt **SMTP** (Port 25/587) zum Senden und **POP3** (Port 110) oder **IMAP** (Port 143) zum Empfang/Postfachverwaltung. Lösungen: Microsoft Exchange, Postfix, Sendmail.

---

## F

### **Firewall**
Primäre Sicherheitsbarriere zwischen internem und externem Netzwerk. Analysiert Datenpakete und erlaubt oder blockiert Verbindungen anhand von Sicherheitsregeln (Policies). Typen: Paketfilter (Layer 3/4), Stateful Inspection, Application-Layer (WAF, Layer 7).

---

## H

### **Host-Bits**
Die Anzahl der Bits in einer IP-Adresse, die für die Adressierung einzelner Hosts reserviert sind. Berechnung: `Host-Bits = 32 - Präfix`.

**Beispiel:** Bei /24 sind 8 Host-Bits vorhanden (32 - 24 = 8), was 2^8 = 256 mögliche Adressen pro Subnetz bedeutet.

---

## I

### **IaaS (Infrastructure as a Service)**
Cloud-Modell: Der Anbieter stellt virtualisierte Grundinfrastruktur bereit (VMs, Speicher, Netzwerk). Der Nutzer verwaltet selbst das Betriebssystem, Middleware und Anwendungen. Beispiele: AWS EC2, Microsoft Azure VMs, Google Compute Engine.

### **IDS (Intrusion Detection System)**
Passives Sicherheitswerkzeug zur Überwachung des Netzwerkverkehrs. Vergleicht Datenströme mit bekannten Angriffsmustern (Signaturen) oder erkennt anomales Verhalten. Schlägt Alarm, ergreift aber keine aktiven Maßnahmen. Merksatz: Der *Rauchmelder*.

### **IMAP (Internet Message Access Protocol)**
E-Mail-Protokoll zum synchronisierten Postfachmanagement. Mails bleiben auf dem Server gespeichert und können von mehreren Geräten aus abgerufen werden. Port 143 (unverschlüsselt) bzw. 993 (SSL/TLS). Vorteil gegenüber POP3: Mails bleiben zentral.

### **IPS (Intrusion Prevention System)**
Aktives Sicherheitswerkzeug, das inline im Datenstrom sitzt. Erkennt Bedrohungen wie ein IDS und blockiert sie zusätzlich unmittelbar selbstständig. Merksatz: Der *Feuerlöscher*.

### **IP-Adressraum**
Der gesamte Bereich von IPv4-Adressen, die einem Netzwerk zugeordnet sind. Ein größerer Adressraum ermöglicht mehr Hosts und Subnetze.

**Beispiel:** Ein Unternehmen hat den Adressraum 10.0.0.0/8 (über 16 Millionen IPs), während ein kleines Büro vielleicht nur 10.50.0.0/24 (256 IPs) erhält.

---

## M

### **MFA (Mehr-Faktor-Authentifizierung)**
Authentifizierungsverfahren, das mindestens zwei unabhängige Faktoren kombiniert: **Wissen** (Passwort, PIN), **Besitz** (Smartphone, Hardware-Token) und **Inhärenz** (Fingerabdruck, Iris). Deutlich sicherer als reine Passwortauthentifizierung.

---

## N

### **NAS (Network Attached Storage)**
Dediziertes Speichergerät, das Dateien zentral über ein Netzwerk bereitstellt. Entspricht einem einfachen Dateiserver für Heim- und Kleinunternehmensnetzwerke. Kommuniziert über SMB/CIFS (Windows) oder NFS (Linux).

### **Netzadresse**
Die erste IP-Adresse in einem Subnetz. Sie identifiziert das Subnetz selbst und kann nicht für Hosts verwendet werden. Sie hat in ihrem Host-Anteil lauter Nullen.

**Beispiel:** In 192.168.1.0/24 ist die Netzadresse 192.168.1.0 (nicht nutzbar für Hosts).

### **Netzanteil (Network-Anteil)**
Der Teil einer IP-Adresse, der das Netzwerk identifiziert. Wird durch die Subnetzmaske definiert. Alle Geräte im selben Netzwerk haben den gleichen Netzanteil.

**Beispiel:** In 192.168.1.0/24 ist 192.168.1 der Netzanteil (die erste drei Oktette).

### **Netzmaske / Subnetzmaske**
Eine 32-Bit-Maske, die angibt, welche Bits einer IP-Adresse zum Netzanteil gehören und welche zum Hostanteil. Sie besteht aus einer zusammenhängenden Serie von Einsen gefolgt von Nullen.

**Beispiel:** 255.255.255.0 in Dezimal = 11111111.11111111.11111111.00000000 in Binär = /24 in CIDR.

---

## O

### **On-Premise**
Betriebsmodell, bei dem IT-Infrastruktur (Server, Speicher, Netzwerk) lokal im eigenen Rechenzentrum oder Serverraum betrieben wird. Gegenteil von Cloud Computing. Höhere Kontrolle, aber auch höhere Investitions- und Betriebskosten.

---

## P

### **PaaS (Platform as a Service)**
Cloud-Modell: Der Anbieter stellt eine fertig konfigurierte Entwicklungsplattform inkl. Laufzeitumgebung, Datenbanken und Frameworks bereit. Der Nutzer kümmert sich nur noch um Code und Daten. Beispiele: Heroku, AWS Elastic Beanstalk, Google App Engine.

### **Patch-Management**
Geregelter Prozess zur zeitnahen Schließung von Sicherheitslücken (CVEs) in Betriebssystemen, Firmware und Anwendungen. Schritte: Inventarisierung → Priorisierung (CVSS-Score) → Test → Rollout → Verifikation.

### **Proxyserver**
Server-Rolle als Vermittler im Kommunikationsfluss. **Forward Proxy**: Stellvertreter für Clients nach außen (Anonymisierung, Caching). **Reverse Proxy**: Stellvertreter vor Backend-Servern (Lastverteilung, SSL-Terminierung, Schutz der internen Infrastruktur).

### **Präfix (CIDR-Präfix)**
Die Zahl nach dem Schrägstrich in CIDR-Notation. Sie gibt an, wie viele Bits der IP-Adresse zum Netzanteil gehören.

**Beispiel:** In 192.168.1.0/24 ist 24 der Präfix, d.h. die ersten 24 Bits sind Netzanteil.

### **Präfixlänge**
Synonym für Präfix – die Anzahl der Bits, die zum Netzanteil gehören.

---

## R

### **RSA**
Asymmetrisches Verschlüsselungsverfahren. Nutzt ein Schlüsselpärchen aus öffentlichem Schlüssel (zum Verschlüsseln) und privatem Schlüssel (zum Entschlüsseln). Löst das Schlüsselaustausch-Problem der symmetrischen Verschlüsselung. Basis für HTTPS-Zertifikate.

### **Reservierte Adressen**
In jedem Subnetz gibt es zwei reservierte Adressen, die nicht für Hosts genutzt werden können:
- **Netzadresse (erste):** z.B. 192.168.1.0
- **Broadcast-Adresse (letzte):** z.B. 192.168.1.255

---

## S

### **SaaS (Software as a Service)**
Cloud-Modell: Fertige Softwareanwendungen werden über das Internet bereitgestellt und per Abonnement genutzt. Der Nutzer administriert weder Infrastruktur noch die Anwendung selbst. Beispiele: Microsoft 365, Salesforce, Dropbox, Google Workspace.

### **SIEM (Security Information and Event Management)**
Zentralisiertes System zur Sammlung, Korrelation und Analyse von Logdaten aus verschiedenen Netzwerkquellen. Ermöglicht die automatisierte Erkennung von Anomalien und eine lückenlose forensische Aufarbeitung nach Sicherheitsvorfällen.

### **SMTP (Simple Mail Transfer Protocol)**
Protokoll zum Versenden von E-Mails zwischen Mailservern und vom Client zum Server. Port 25 (Server-zu-Server) bzw. Port 587 (Client-zu-Server mit Authentifizierung). Wird durch IMAP/POP3 für den Empfang ergänzt.

### **SSL/TLS (Secure Sockets Layer / Transport Layer Security)**
Kryptografische Protokolle zur Absicherung von Netzwerkverbindungen. TLS ist der Nachfolger von SSL. Basis für HTTPS, sichere E-Mail-Übertragung und VPN-Verbindungen. Ermöglicht Verschlüsselung und Authentifizierung per Zertifikat.

### **Streaming-Server**
Spezialisierte Server-Rolle zur kontinuierlichen Übertragung von Audio- und Videodaten. Unterscheidet zwischen **Live-Streaming** (Echtzeit) und **On-Demand** (zeitversetzter Abruf). Nutzt Protokolle wie HLS, RTMP oder DASH.

### **Supernetting**
Siehe **Aggregation**.

### **Subnetting**
Die Aufteilung eines großen IP-Netzwerks in mehrere kleinere **Subnetze**. Dies ermöglicht bessere Organisation, Sicherheit und Effizienz.

**Beispiel:** Das Netzwerk 10.0.0.0/8 wird in Subnetze wie 10.1.0.0/16, 10.2.0.0/16, usw. aufgeteilt.

### **Subnetz**
Ein durch Subnetting erzeugtes Teilnetzwerk. Jedes Subnetz hat eine Netzadresse, einen Hostbereich und eine Broadcast-Adresse.

**Beispiel:** 192.168.1.0/24 ist ein Subnetz mit 254 nutzbaren Host-Adressen.

---

## T

### **TTL (Time To Live)**
Ein Feld in IP-Paketen, das angibt, wie lange das Paket im Netzwerk "leben" darf, bevor es verworfen wird. Dies verhindert, dass Pakete endlos in Schleifen herumlaufen.

---

## U

### **Usable Host Range**
Der Bereich der IP-Adressen in einem Subnetz, die tatsächlich für Hosts genutzt werden können. Dies ist der Bereich zwischen der Netzadresse und der Broadcast-Adresse (exclusive).

**Beispiel:** In 192.168.1.0/24 ist die usable host range 192.168.1.1 – 192.168.1.254 (256 - 2 = 254 nutzbare Adressen).

---

## V

### **Verschlüsselung (Encryption)**
Umwandlung von Klartext in unlesbaren Geheimtext mittels kryptografischer Verfahren. **Symmetrisch**: Gleicher Schlüssel für Ver- und Entschlüsselung (schnell, z. B. AES). **Asymmetrisch**: Öffentlicher Schlüssel zum Verschlüsseln, privater zum Entschlüsseln (z. B. RSA). Schützt Daten sowohl *in Transit* als auch *at Rest*.

### **Virtualisierungsserver**
Server-Rolle, die Hypervisoren nutzt, um physische Hardware in mehrere isolierte VMs aufzuteilen. **Typ-1-Hypervisor** (Bare Metal): Läuft direkt auf Hardware (VMware ESXi, Hyper-V, KVM). **Typ-2-Hypervisor** (Hosted): Läuft als Anwendung auf einem Host-OS (VirtualBox).

### **VPN (Virtual Private Network)**
Erstellt einen verschlüsselten Tunnel über ein unsicheres Netzwerk (z. B. das Internet). **Remote Access VPN**: Verbindet Einzelnutzer sicher mit dem Firmennetz. **Site-to-Site VPN**: Verbindet zwei Unternehmensstandorte. Protokolle: OpenVPN, WireGuard, IPsec.

### **VLSM (Variable Length Subnet Masks)**
Eine Subnetzierungstechnik, die es ermöglicht, **unterschiedliche Subnetzmasken** im selben Netzwerk zu verwenden. Dies ermöglicht eine effizientere Nutzung des Adressraums, da jede Abteilung oder jeder Bereich nur so viele IPs erhält, wie tatsächlich benötigt werden.

**Beispiel:** Ein Netzwerk wird in Subnetze verschiedener Größe aufgeteilt: /25 (128 IPs), /26 (64 IPs), /28 (16 IPs), /30 (4 IPs).

---

## W

### **Webserver**
Server-Rolle für das Hosten und Ausliefern von Webseiten und Webanwendungen. Kommuniziert über **HTTP** (Port 80) und **HTTPS** (Port 443) zustandslos per Request-Response-Prinzip. Bekannte Lösungen: Apache HTTP Server, Nginx, Microsoft IIS.

### **Wildcard-Mask**
Das inverse Konzept der Subnetzmaske. Wird in Zugriffskontrolllisten (ACLs) und Routing-Protokollen verwendet.

**Beispiel:** Die Wildcard-Mask zu 255.255.255.0 ist 0.0.0.255.

---

## Z

### **Zusammenhängende Bitfolge**
Eine Anforderung in der Subnetzmaske: Alle Bits für den Netzanteil müssen zusammenhängend von links nach rechts folgen, gefolgt von allen Host-Bits.

**Beispiel:** 
- ✅ Gültig: 255.255.255.0 = 11111111.11111111.11111111.00000000
- ❌ Ungültig: 255.255.254.255 = 11111111.11111111.11111110.11111111 (Nullen in der Mitte!)

---

## Weitere Ressourcen

- [Subnetting Grundlagen](/netzwerke/01-subnetting/)
- [CIDR Notation](/netzwerke/01-subnetting/cidr/)
- [VLSM – Variable Length Subnet Masks](/netzwerke/02-vlsm/)
- [Server-Architekturen & Cloud](/netzwerke/03-server-architekturen/)
- [Netzwerksicherheit](/netzwerke/04-netzwerksicherheit/)
- [OSI-Modell Glossar](/osi/glossar/)
