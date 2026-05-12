---
title: OSI-Modell Glossar – Fachbegriffe erklärt
description: Alphabetische Sammlung aller wichtigen OSI-Modell-Begriffe mit detaillierten Erklärungen
---

# 📚 OSI-Modell Glossar

Willkommen im umfassenden Glossar zum OSI-Modell! Hier findest du über 100 Fachbegriffe – alphabetisch sortiert und verständlich erklärt. Jeder Eintrag enthält die Schicht(en), auf die sich der Begriff bezieht, sowie praktische Beispiele.

---

## A

### **Access Point (AP)**
**Schicht 1** | Netzwerk-Hardware für drahtlose Verbindungen  
Ein Access Point ist ein Netzwerkgerät, das drahtlose Netzwerke (WLAN) bereitstellt. Es empfängt und sendet Funksignale und verbindet Wireless-Clients mit dem kabelgebundenen Netzwerk. Der AP funktioniert auf Schicht 1 (physische Übertragung) und Schicht 2 (MAC-Adressierung). Typisch in Büros, Cafés und öffentlichen Orten eingesetzt.

**Beispiel:** Ein WLAN-Router mit Sender-Symbol in der Ecke eines Klassenzimmers.

---

### **ARP (Address Resolution Protocol)**
**Schicht 2–3** | Protokoll zur IP ↔ MAC-Adress-Auflösung  
ARP ist der Mechanismus, über den Geräte die MAC-Adresse eines anderen Gerätes herausfinden, wenn sie nur die IP-Adresse kennen. Ein Host sendet eine **ARP-Anfrage** (Broadcast) mit einer IP-Adresse, und der Besitzer dieser IP antwortet mit seiner MAC-Adresse. Das Ergebnis wird im lokalen ARP-Cache gespeichert. Essentiell für die lokale Netzwerk-Kommunikation. Windows-Benutzer können den ARP-Cache mit `arp -a` anzeigen.

**Beispiel:** Computer A: "Wer hat die IP 192.168.1.100?" → Computer B: "Ich! Meine MAC ist 00:11:E3:AB:4D:EF."

---

### **ASCII**
**Schicht 6** | Zeichensatz für englische Texte  
ASCII (American Standard Code for Information Interchange) ist ein 7-Bit-Zeichensatz, der 128 Zeichen darstellt (Ziffern 0–9, lateinische Buchstaben A–Z, a–z, Sonderzeichen). Er war der de-facto Standard für Text bis zur Einführung von Unicode/UTF-8. ASCII kann keine Umlaute oder nicht-englische Zeichen darstellen. Für internationale Anwendungen ist UTF-8 die bessere Wahl.

**Beispiel:** Der Text "Hello World" kann problemlos in ASCII dargestellt werden, "Grüße" nicht.

---

### **Autorisierung**
**Schicht 5** | Feststellung von Berechtigungen  
Nach erfolgreicher Authentifizierung entscheidet die Autorisierung, **welche Ressourcen** ein Benutzer zugreifen darf. Ein authentifizierter Benutzer könnte z.B. als "Gast" autorisiert sein (nur Lesen) oder als "Administrator" (volle Kontrolle). Autorisierung basiert typisch auf Benutzern, Gruppen oder Rollen. Sie ist ein Sicherheitsmechanismus der Schicht 5 (Sitzungsverwaltung).

**Beispiel:** Max ist authentifiziert (Schicht 5 erkennt ihn), aber er ist nur autorisiert, die Verkaufsdaten zu lesen, nicht zu löschen.

---

## B

### **BPDU (Bridge Protocol Data Unit)**
**Schicht 2** | Datenpaket für Spanning Tree Protocol  
Eine BPDU ist eine Steuernachricht, die von Switches in einem STP-Netzwerk ausgetauscht wird. Sie enthält die Switch-ID und Leitungskosten und hilft dem STP zu entscheiden, welche Ports aktiv sind und welche als Backup dienen. BPDUs werden regelmäßig ausgetauscht, um Schleifen zu verhindern und Redundanz zu managen. Für den normalen Benutzer unsichtbar, aber essentiell für große Unternehmensnetzwerke.

**Beispiel:** Switch A sendet BPDU an Switch B: "Ich bin Switch 00:11:E3:..., meine Leitungskosten sind 100."

---

### **Broadcast-Domain**
**Schicht 3** | Bereich, in dem Broadcast-Nachrichten empfangen werden  
Eine Broadcast-Domain ist ein logisches Netzwerksegment, in dem alle Geräte eine Broadcast-Nachricht (Nachricht an "alle") empfangen können. Switches erweitern die Broadcast-Domain (alles im selben Broadcast-Frame wird überall gesendet). Router **unterbrechen** die Broadcast-Domain. Jedes Subnetz mit eigenem Router ist eine separate Broadcast-Domain.

**Beispiel:** Alle Computer im Netzwerk 192.168.1.0/24 sind in einer Broadcast-Domain, Computer im Netzwerk 192.168.2.0/24 sind in einer anderen.

---

## C

### **Cache (ARP-Cache)**
**Schicht 2–3** | Schneller lokaler Speicher für IP-MAC-Mappings  
Der ARP-Cache ist ein schneller, lokaler Speicher auf dem Betriebssystem eines Computers, der IP-Adressen mit MAC-Adressen verknüpft. Statt ständig neue ARP-Anfragen zu senden, werden häufig benötigte Mappings im Cache gespeichert. Der Cache hat eine Lebensdauer (TTL – Time To Live), danach wird der Eintrag automatisch gelöscht. Dies reduziert Netzwerkbelastung und beschleunigt die Kommunikation.

**Beispiel:** Nachdem Computer A mit dem Router kommuniziert hat, speichert es "192.168.1.1 ↔ 00:AA:BB:CC:DD:EE" im Cache für später.

---

### **CIDR (Classless Inter-Domain Routing)**
**Schicht 3** | Flexibles IPv4-Subnetzierungssystem  
CIDR ersetzt die starre Klassenlogik (Klasse A, B, C) durch flexible Subnetzmasken wie `/24`, `/25`, `/30`. Die Zahl gibt an, wie viele Bits für den Netzanteil reserviert sind. `/24` = `255.255.255.0` (256 Adressen), `/30` = `255.255.255.252` (4 Adressen). CIDR ermöglicht eine viel effizientere IP-Adressvergabe und ist der Standard in modernen Netzwerken.

**Beispiel:** Das alte System hätte Klasse-C-Netze für 254 Hosts vergeben. Mit CIDR kann man `/27` für nur 30 Hosts nutzen und Adressen sparen.

---

### **Codec**
**Schicht 6** | Software/Hardware zur Kodierung oder Dekodierung von Daten  
Ein Codec (Coder-Decoder) konvertiert Daten zwischen verschiedenen Formaten. Video-Codecs (H.264, VP9) komprimieren Videodaten. Audio-Codecs (MP3, AAC) komprimieren Audiodaten. Image-Codecs (JPEG, PNG) komprimieren Bilder. Der Codec wird auf beiden Seiten benötigt: der Sender kodiert, der Empfänger dekodiert. Moderne Geräte haben oft mehrere Codecs, um Kompatibilität zu gewährleisten.

**Beispiel:** Netflix nutzt H.265-Codec für 4K-Video-Streaming. Der Server kodiert, der TV dekodiert.

---

### **Kompression (Data Compression)**
**Schicht 6** | Reduktion der Dateigröße ohne (verlustfrei) oder mit (verlustbehaftet) Informationsverlust  
Kompression reduziert die Größe von Daten für schnellere Übertragung und Speicherung. **Verlustfreie Kompression** (GZIP, ZIP) behält alle Informationen und kann 100% rekonstruiert werden. **Verlustbehaftete Kompression** (JPEG, MP3) entfernt "unwichtige" Daten für bessere Kompressionsraten, kann aber nicht 100% rekonstruiert werden. Im Web wird typischerweise GZIP für HTML/CSS und JPEG für Bilder verwendet.

**Beispiel:** Eine Website mit 2 MB wird mit GZIP auf 200 KB komprimiert (90% Ersparnis). Im Browser wird sie automatisch dekomprimiert.

---

### **Cookie**
**Schicht 5** | Text-Datei mit Sitzungs- oder Präferenz-Informationen  
Cookies sind kleine Text-Dateien, die ein Server im Browser des Clients speichert. Sie enthalten oft eine **Session-ID** (damit der Server den Benutzer wiedererkennt) oder Präferenzen (z.B. Sprache, Thema). Bei jedem Request zum Server werden Cookies automatisch mitgesendet. Der Cookie hat eine Lebensdauer: **Session-Cookies** werden beim Schließen gelöscht, **Persistent Cookies** bleiben länger. Cookies sind essentiell für Web-Anwendungen.

**Beispiel:** Nach dem Login speichert die Website einen Cookie mit der Session-ID. Beim nächsten Besuch sendet der Browser diesen Cookie, und der Server erkennt dich automatisch.

---

## D

### **Default-Route**
**Schicht 3** | Standardpfad für alle nicht-definierten Ziele  
Die Default-Route ist ein Fallback in der Routing-Tabelle mit der Zieladresse `0.0.0.0/0` (alle IP-Adressen). Wenn ein Router kein spezifisches Routing-Eintrag für ein Paket hat, leitet er es über die Default-Route weiter (üblicherweise zum ISP-Gateway). Ohne Default-Route kämen Pakete ins Internet nicht an.

**Beispiel:** Ein Computer kann Ziele in seinem lokalen Subnetz direkt erreichen, alles andere geht über die Default-Route zum Router (z.B. 192.168.1.1).

---

### **DHCP (Dynamic Host Configuration Protocol)**
**Schicht 7** | Automatische IP-Adressvergabe  
DHCP automatisiert die Konfiguration von IP-Adressen, Subnetzmasken, Default-Gateways und DNS-Servern. Ein DHCP-Server verwaltet einen Pool von verfügbaren IP-Adressen. Wenn ein neues Gerät sich verbindet, beantragt es eine IP-Adresse (DORA-Prozess: Discovery, Offer, Request, Acknowledgement). Die IP-Adresse ist zeitlich begrenzt (Lease) und wird bei Bedarf erneuert. Ohne DHCP müsste jedes Gerät manuell konfiguriert werden.

**Beispiel:** Du verbindest dein Smartphone mit dem Haus-WLAN. Das DHCP weist ihm automatisch `192.168.1.100` zu.

---

### **Dialog-Steuerung**
**Schicht 5** | Koordination der Kommunikationsrichtung  
Die Dialog-Steuerung bestimmt, wie Daten fließen dürfen: Simplex (nur eine Richtung), Half-Duplex (abwechselnd), oder Full-Duplex (beide gleichzeitig). Die Sitzungsschicht muss sicherstellen, dass beide Partner synchronisiert sind. Full-Duplex ist modern und ermöglicht simultane Kommunikation. Half-Duplex ist älter (Walkie-Talkie-Stil), braucht aber weniger Ressourcen.

**Beispiel:** Ein Telefonanruf ist Full-Duplex. Ein Funkgerät ist Half-Duplex (einer spricht, der andere hört zu).

---

### **DNS (Domain Name System)**
**Schicht 7** | Übersetzung von Domain-Namen zu IP-Adressen  
DNS ist das "Telefonbuch des Internet". Es übersetzt menschenlesbare Domain-Namen (www.example.com) in maschinenlesbare IP-Adressen (93.184.216.34). Ein DNS-Resolver befragt Nameserver hierarchisch (Root, TLD, Authoritative). Das Ergebnis wird im DNS-Cache gespeichert. Ohne DNS müssten wir alle IP-Adressen auswendig kennen. DNS läuft über UDP Port 53.

**Beispiel:** Browser sendet an DNS: "Was ist die IP für www.google.com?" → Antwort: "142.251.32.46"

---

## E

### **EMV (Elektromagnetische Verträglichkeit)**
**Schicht 1** | Gesetzliche Anforderung für Elektrogeräte ohne Störungen  
EMV ist eine europäische Norm, die fordert, dass Geräte nicht zu viel elektromagnetische Strahlung abgeben und gleichzeitig immun gegen externe Strahlung sind. Netzwerkkabel müssen doppelt geschirmt (S/FTP) sein, um EMV zu erfüllen. In Deutschland ist S/FTP/S/STP Standard. Ohne EMV-Konformität darf ein Gerät nicht verkauft werden.

**Beispiel:** Ein schlecht abgeschirmtes Netzwerkkabel in einer Industrieumgebung könnte EMV-Normen verletzen und nicht zugelassen sein.

---

### **Encapsulation (Datenkapselung)**
**OSI (alle Schichten)** | Hinzufügen von Header/Trailer bei jedem Schicht-Durchgang  
Encapsulation ist der Prozess, dass jede Schicht Daten von der Schicht oben empfängt und mit eigenem **Header** (und evtl. **Trailer**) versieht, bevor sie zur nächsten Schicht weitergeleitet werden. Schicht 4 fügt TCP-Header hinzu (→ Segment), Schicht 3 fügt IP-Header hinzu (→ Packet), Schicht 2 fügt Ethernet-Header hinzu (→ Frame). Dies geschieht bei jedem Datentransfer von oben nach unten.

**Beispiel:** HTTP-Daten → TCP-Header hinzugefügt → IP-Header hinzugefügt → Ethernet-Frame hinzugefügt → Übertragung als Bits.

---

### **Ethernet**
**Schicht 1–2** | Meistverbreitetes Protokoll für lokale Netzwerke  
Ethernet ist der Standard für kabelgebundene LANs. Es definiert Frame-Format, MAC-Adressierung und Übertragungsmedien (Twisted-Pair, Glasfaser). Ethernet gibt es in verschiedenen Varianten: 10 Mbps (Ethernet), 100 Mbps (Fast Ethernet), 1 Gbps (Gigabit Ethernet), 10 Gbps (10GbE). Ethernet ist praktisch der de-facto Standard weltweit und hat andere Technologien (Token Ring, FDDI) verdrängt.

**Beispiel:** Dein Computer verbindet sich über ein Ethernet-Kabel zum Router – das ist Ethernet.

---

## F

### **Frame**
**Schicht 2** | Datenpaket mit Ethernet-Header und Trailer  
Ein Frame ist die Dateneinheit auf Schicht 2. Es besteht aus Quell-MAC, Ziel-MAC, Payload (Daten) und einer Prüfsumme (CRC). Frames sind typisch 1500 Bytes groß (MTU – Maximum Transmission Unit). Wenn Frame-Größen überschritten werden, fragmentieren höhere Schichten die Daten. Switches arbeiten mit Frames und entscheiden, an welchen Port ein Frame weitergeleitet wird.

**Beispiel:** Eine HTTP-Anfrage wird in verschiedene Frames aufgeteilt, wenn sie größer als 1500 Bytes ist.

---

### **FTP (File Transfer Protocol)**
**Schicht 7** | Protokoll zur Dateiübertragung  
FTP ist ein klassisches Protokoll zum Upload und Download von Dateien über das Netzwerk. FTP nutzt zwei Verbindungen: Port 21 für Kommandos (Login, Dateiauswahl), Port 20 für Datentransfer. Der Benutzer authentifiziert sich mit Benutzername und Passwort (im Klartext!). FTP ist unsicher und wird heute durch SFTP (SSH File Transfer) ersetzt. Der Standard-Port ist 21.

**Beispiel:** Ein Web-Entwickler nutzt FileZilla (FTP-Client), um eine Webseite auf den Server hochzuladen.

---

## G

### **GZIP**
**Schicht 6** | Weit verbreitete Kompressions-Software  
GZIP ist ein Kompressions-Algorithmus, der Daten verlustfrei komprimiert. Es wird bei Webbrowsern standard-mäßig unterstützt und kann Dateigröße um 60–90% reduzieren. HTTP-Header wie `Content-Encoding: gzip` signalisieren, dass GZIP-Kompression verwendet wird. Der Browser dekomprimiert automatisch. GZIP ist ideal für HTML, CSS, JavaScript, aber weniger wirksam bei bereits komprimierten Formaten (JPEG, MP3).

**Beispiel:** Eine 2 MB HTML-Datei wird mit GZIP auf 150 KB komprimiert für schnellere Übertragung.

---

### **Glasfaser (LWL – Lichtwellenleiter)**
**Schicht 1** | Optisches Übertragungsmedium mit Lichtsignalen  
Glasfaser überträgt Daten nicht als Stromspannung, sondern als **Lichtsignale** durch dünne Glas- oder Kunststoff-Fasern. Vorteile: Extrem hohe Geschwindigkeit (bis 100 Gbit/s), große Reichweite (bis 100 km), völlige Immunität gegen elektromagnetische Störungen. Nachteile: Teuer, spezielle Hardware (Transceiver), komplizierter zu handhaben als Kupferkabel. Ideal für Backbones und lange Strecken.

**Beispiel:** Der "Glasfaser-Hausanschluss" in vielen modernen Häusern nutzt Glasfaser bis zum Haus, dann Kupferkabel zum Router.

---

## H

### **Hub**
**Schicht 1** | Primitives Netzwerkgerät nur für Broadcasting  
Ein Hub (oder Repeater Hub) ist ein Schicht-1-Gerät, das alle eingehenden Signale an **alle angeschlossenen Ports** weiterleitet (Broadcasting). Hubs haben keine Intelligenz: Sie kennen keine MAC-Adressen und können nicht gezielt weiterleiten. Im Gegensatz zu Switches können mehrere Hosts nicht gleichzeitig Daten übertragen (Kollisionen). Hubs sind veraltet und wurden durch Switches ersetzt.

**Beispiel:** Ein 8-Port USB-Hub ist ähnlich: Ein Gerät pluggt sich rein, USB-Signal geht zu allen Ports (vereinfacht).

---

## I

### **ICMP (Internet Control Message Protocol)**
**Schicht 3** | Protokoll für Diagnostik und Fehlermeldungen  
ICMP wird für Diagnose-Befehle wie **Ping** und **Traceroute** verwendet. Ping sendet eine ICMP Echo-Request und wartet auf Echo-Reply, um Netzwerk-Erreichbarkeit zu prüfen. Traceroute nutzt ICMP Time-Exceeded-Nachrichten, um den Pfad zu einem Host aufzuzeichnen. ICMP ist essentiell für Netzwerk-Troubleshooting, kann aber auch für DoS-Attacken missbraucht werden. Viele Firewalls blockieren ICMP aus Sicherheitsgründen.

**Beispiel:** `ping google.com` sendet ICMP-Pakete und zeigt Latenz an.

---

### **IMAP (Internet Message Access Protocol)**
**Schicht 7** | Protokoll zur E-Mail-Verwaltung mit Server-Synchronisierung  
IMAP ermöglicht es, **E-Mails auf dem Server zu verwalten** statt sie herunterzuladen (wie POP3). Mehrere Clients können sich mit demselben IMAP-Account verbinden, und alle sehen synchronisiert die gleichen Ordner und Nachrichten. E-Mails bleiben auf dem Server erhalten. Ideal für Benutzer mit mehreren Geräten (Desktop, Laptop, Handy). Standard-Port ist 143, 993 mit TLS.

**Beispiel:** Max checkt E-Mails am Computer mit IMAP. Später checkt er auf dem Handy – dieselben E-Mails sind sichtbar, Ordner sind synchron.

---

### **IP-Adresse**
**Schicht 3** | Logische Adresse zur Identifikation von Netzwerk-Geräten  
Eine IP-Adresse identifiziert ein Gerät im Netzwerk. Im Gegensatz zu MAC-Adressen sind IP-Adressen **logisch** und können konfiguriert werden. **IPv4** hat 32 Bits (4 Byte), dargestellt als vier Dezimalzahlen (z.B. 192.168.1.1). **IPv6** hat 128 Bits (16 Byte), dargestellt hexadezimal. Die IP-Adresse wird zusammen mit der Subnetzmaske zur Bestimmung des Netzwerk-Bereichs genutzt.

**Beispiel:** IPv4 `192.168.1.100` und IPv6 `2001:db8::1` identifizieren Geräte weltweit eindeutig.

---

### **IPv4**
**Schicht 3** | Internet Protocol Version 4 (32-Bit-Adressen)  
IPv4 ist der lange dominante Standard für Netzwerk-Adressen mit 32 Bit (4 Byte). Adressbereich: 2³² ≈ 4,3 Milliarden Adressen. Schreibweise: "Dotted Decimal" (z.B. 192.168.1.1). IPv4 wurde 1981 standardisiert und ist immer noch in 99% der Netzwerke aktiv. Wegen der begrenzten Adressen wird IPv6 zunehmend wichtig, aber IPv4 wird noch lange Jahrzehnte verwendet.

**Beispiel:** Die Adresse `8.8.8.8` ist Google's öffentlicher DNS-Server (IPv4).

---

### **IPv6**
**Schicht 3** | Internet Protocol Version 6 (128-Bit-Adressen)  
IPv6 ist der Nachfolger von IPv4 mit 128 Bit (16 Byte). Adressbereich: 2¹²⁸ – praktisch unbegrenzt. Schreibweise: Hexadezimal mit Doppelpunkten (z.B. 2001:db8::1). IPv6 wurde 1998 definiert, ist aber nur langsam adoptiert. Ein großer Vorteil: Automatische Adress-Konfiguration (Stateless Address Autoconfiguration), bessere Sicherheit (IPsec eingebaut), Multicast statt Broadcast.

**Beispiel:** Die IPv6-Adresse `2001:4860:4860::8888` ist Google's öffentlicher DNS-Server.

---

## J

### **JWT (JSON Web Token)**
**Schicht 5** | Standardformat für sichere Authentifizierungs-Tokens  
Ein JWT ist eine kompakte, signierte Nachricht, die Benutzer-Informationen enthält. Es besteht aus drei Teilen (Base64-kodiert): Header (Algorithmus), Payload (Daten), Signature (Signatur). Der Server signiert das JWT, der Client speichert es und sendet es mit jedem Request. JWTs sind zustandslos und skalierbar, ideal für moderne APIs und Microservices. Weit verbreitet in Authentifizierung (OAuth 2.0, OpenID Connect).

**Beispiel:** Ein JWT in einem API-Request: `Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIn0.dozjgNryP4J3jVmNHl0w5N_XgL0n3I9PlFUP0THsR8U`

---

## K

### **Kerberos**
**Schicht 7** | Enterprise-Authentifizierungs-Protokoll mit Ticketing  
Kerberos ist ein Netzwerk-Authentifizierungs-Protokoll für unternehmensweite Sicherheit. Es nutzt **Tickets** zur Authentifizierung statt Passwörter über das Netzwerk zu senden. Ein zentraler KDC (Key Distribution Center) gibt Tickets aus, die Client und Server gegenseitig authentifizieren. Weit verbreitet in Active Directory / Windows-Netzwerken. Port 88 Standard.

**Beispiel:** Ein Windows-Netzwerk nutzt Kerberos: Benutzer melden sich einmal an, erhalten ein Ticket, und können danach auf alle Ressourcen zugreifen ohne erneut Passwort einzugeben.

---

## L

### **LDAP (Lightweight Directory Access Protocol)**
**Schicht 5–7** | Protokoll für Verzeichnisdienste und Authentifizierung  
LDAP ist ein Protokoll zur Abfrage und Verwaltung von Verzeichnis-Informationen in einer hierarchischen Datenbank. Es wird hauptsächlich in Active Directory (Windows) und OpenLDAP (Linux) eingesetzt. LDAP speichert Benutzer, Gruppen, Computers und ermöglicht zentrale Authentifizierung. Anfragen haben eine Tree-Struktur mit Distinguished Names (DN). Standard-Port ist 389, 636 mit SSL/TLS.

**Beispiel:** Ein Windows-Server fragt LDAP ab: "Ist dieser Benutzer autorisiert, diese Datei zu lesen?" → LDAP antwortet basierend auf Gruppen-Mitgliedschaft.

---

### **LLC/MAC (Logical Link Control / Media Access Control)**
**Schicht 2** | Zwei Unterschichten von Schicht 2  
LLC verwaltet Sitzungen und Flusskontrolle auf der logischen Seite. MAC steuert den Zugriff auf das physische Medium (z.B. wer darf senden?). Zusammen bilden sie die Schicht 2. LLC sorgt für Ordnung, MAC für gerechten Zugang zum Kabel. Die Trennung ermöglicht verschiedene physische Schichten (Ethernet, WLAN) mit gleicher LLC-Logik.

**Beispiel:** MAC entscheidet: "Jedes Gerät darf 100 Microsekunden senden", LLC kümmert sich um Fehlerbehandlung.

---

## M

### **MAC-Adresse (Media Access Control Address)**
**Schicht 2** | Physische Hardware-Adresse zur lokalen Netzwerk-Identifikation  
Eine MAC-Adresse ist die physische Adresse einer Netzwerkkarte (Network Interface Card). Sie ist 6 Byte (48 Bit) groß, dargestellt hexadezimal (z.B. 00:11:E3:AB:4D:EF). Die ersten 3 Bytes sind der Hersteller-Code (OUI), die letzten 3 sind die Seriennummer. MAC-Adressen sind lokal eindeutig, werden für Switches und lokale Kommunikation verwendet. Globale Eindeutigkeit ist theoretisch, praktisch gibt es Duplikate.

**Beispiel:** Deine Netzwerkkarte hat MAC `00:1A:2B:3C:4D:5E`. Diese wird mit `ipconfig /all` (Windows) angezeigt.

---

### **Mediewandler**
**Schicht 1** | Gerät zur Umwandlung zwischen verschiedenen Übertragungsmedien  
Ein Mediewandler konvertiert optische Signale (Glasfaser) in elektrische Signale (Kupferkabel) oder umgekehrt. Wird eingesetzt, wenn ein Router keine Glasfaser-Schnittstelle hat: Glasfaser-Anschluss → Mediewandler → Copper-RJ45 → Router. Der Mediewandler benötigt normalerweise eine Stromversorgung. Essentiell beim Übergang zwischen Glasfaser-Backbone und Kupfer-Zugang.

**Beispiel:** Ein Haus mit Glasfaser-Hausanschluss nutzt einen Mediewandler, um die Glasfaser in ein Standard-Ethernet-Kabel umzuwandeln.

---

### **MIME (Multipurpose Internet Mail Extensions)**
**Schicht 6** | Standard für Kodierung von Multimedia in E-Mails  
MIME ist ein Standard, der definiert, wie Bilder, Videos, Anhänge in E-Mails kodiert und übertragen werden. MIME-Types beschreiben den Datentypus (z.B. `image/jpeg`, `text/plain`, `application/pdf`). E-Mail-Header enthalten MIME-Informationen, damit der Client weiß, wie der Inhalt zu behandeln ist. Ohne MIME müssten E-Mails nur Text sein.

**Beispiel:** Eine E-Mail mit Anhang: `Content-Type: application/pdf; name="report.pdf"`

---

### **Modem**
**Schicht 1** | Gerät zur Umwandlung zwischen analog und digital  
Ein Modem (Modulator/Demodulator) wandelt digitale Signale (Computer) in analoge Signale (Telefonleitung) um und umgekehrt. Früher essentiell für Einwahl-Internet (Dial-up), heute durch Breitband ersetzt. Moderne "Modems" sind meist Kombinations-Geräte (Router + Modem). Bei DSL-Internet nutzt man ein DSL-Modem, bei Kabel-Internet ein Kabel-Modem. Port Bezeichnungen oft "WAN Modem" vs. "LAN Geräte".

**Beispiel:** Alte 56k-Modems konnten Max. 56 kbit/s übertragen – heute Standard ist 1000x schneller!

---

## N

### **NetBEUI (NetBIOS Extended User Interface)**
**Schicht 3–4** | Einfaches, proprietäres Protokoll von Microsoft  
NetBEUI war ein früher Standard für Windows-Netzwerke, wurde aber durch TCP/IP ersetzt. Es war nicht routbar (nur LAN), einfach aber primitiv. Heute praktisch veraltet, wird nur noch auf sehr alten Systemen gefunden. TCP/IP übernahm alle Funktionen von NetBEUI mit zusätzlichen Fähigkeiten.

**Beispiel:** In sehr alten Windows 95 Netzwerken war NetBEUI Standard. Heute nur noch in Museums-PCs.

---

### **NetBIOS**
**Schicht 5** | Namen-Resolving und Dateifreigabe für ältere Windows-Netze  
NetBIOS ist ein Protokoll für Namensauflösung und Ressourcenfreigabe auf Windows-Netzen. Es ermöglicht `\\COMPUTERNAME` statt IP-Adressen. Heute in Windows oft durch DNS und SMB ersetzt. NetBIOS arbeitet auf Ports 137 (UDP), 138 (UDP), 139 (TCP).

**Beispiel:** Alte Netzwerke zeigten in Windows "Netzwerkumgebung" mit NetBIOS-Namen wie `\\MAXPC` oder `\\DRUCKER1`.

---

### **Netzwerkkarte (NIC – Network Interface Card)**
**Schicht 1–2** | Hardware-Komponente zur Verbindung mit dem Netzwerk  
Eine NIC ist die physische Schnittstelle zwischen Computer und Netzwerk. Früher separate Steckkarten, heute in alle Geräte integriert. Jede NIC hat eine eindeutige MAC-Adresse. Sie handhabt die physische Übertragung (Schicht 1) und MAC-Adressierung (Schicht 2). Der NIC-Treiber vom Betriebssystem kommuniziert mit der Hardware.

**Beispiel:** `eth0` auf einem Linux-Laptop oder `Ethernet` in Windows ist deine NIC.

---

### **NTP (Network Time Protocol)**
**Schicht 7** | Protokoll zur Synchronisierung von Systemzeiten  
NTP synchronisiert die Zeit zwischen Computern im Netzwerk auf Millisekunden-Genauigkeit. Ein zentraler NTP-Server (z.B. time.nist.gov) ist die "Autoritätsquelle". Alle anderen Clients synchronisieren sich zu ihm. Essentiell für Finanzinstitute, Datenbanken, Sicherheit (Zertifikate, Logs). Port 123 UDP.

**Beispiel:** Dein Computer fragt einen NTP-Server: "Wie viel Uhr ist es?" → Server antwortet: "14:32:45 UTC" → Dein PC stellt Uhr nach.

---

## O

### **OSI-Modell**
**Alle Schichten** | Referenzmodell für Netzwerk-Kommunikation mit 7 Schichten  
Das Open Systems Interconnection Model ist ein konzeptuelles Modell, das beschreibt, wie Daten in Netzwerken zwischen Systemen ausgetauscht werden. Es teilt den Prozess in 7 Schichten ein, von physisch (Schicht 1) bis zur Anwendung (Schicht 7). Das Modell hilft, Netzwerkprobleme zu verstehen und zu lösen. Protokolle, Hardware und Software werden danach klassifiziert.

**Beispiel:** Wenn dein Internet nicht funktioniert, hilft das OSI-Modell: Prüfe erst Schicht 1 (Kabel), dann Schicht 2 (MAC), dann Schicht 3 (IP)...

---

## P

### **Paket (Packet)**
**Schicht 3** | Dateneinheit mit IP-Header (Netzwerk-Layer)  
Ein Paket ist die Dateneinheit auf Schicht 3. Es enthält IP-Header (Quell-IP, Ziel-IP) und Payload (Daten). Pakete sind größer als Frames und können über mehrere Netzwerke hinweg geroutet werden. Typisch bis 65.535 Byte, begrenzt durch Hardware meist auf 1500 Byte (fragmentiert danach).

**Beispiel:** Die HTTP-Anfrage "GET /" wird in ein IP-Paket gekapselt mit Quell-IP `192.168.1.100` und Ziel-IP `8.8.8.8`.

---

### **Port**
**Schicht 4** | Nummer (0–65535) zur Identifikation einer Anwendung auf einem Gerät  
Ein Port ist eine Nummer, die einer spezifischen Anwendung oder eines Dienstes zugeordnet ist. TCP und UDP nutzen Ports, um mehrere Anwendungen parallel laufen zu lassen. Well-Known Ports sind 0–1023 (HTTP 80, HTTPS 443, SSH 22). Registered Ports sind 1024–49151. Dynamic Ports sind 49152–65535 (für Client-seitige Verbindungen).

**Beispiel:** Der Webserver läuft auf Port 80, der Mail-Server auf Port 25. Ein Computer kann beide gleichzeitig anfragen über verschiedene Ports.

---

### **PPP (Point-to-Point Protocol)**
**Schicht 2** | Protokoll für Punkt-zu-Punkt-Verbindungen (Modem, ISDN)  
PPP ist ein Schicht-2-Protokoll für direkte Verbindungen zwischen zwei Knoten, typisch bei Dial-up (Modem) oder ISDN. Es führt Authentifizierung durch (PAP, CHAP) und Fehlerprüfung. Heute weniger relevant wegen Breitband-Internet, aber immer noch bei PPPoE (PPP over Ethernet) für DSL verwendet.

**Beispiel:** Ein alter Dial-up-Anschluss nutzte PPP für die Modem-Verbindung zum ISP.

---

### **Prüfsumme (CRC – Cyclic Redundancy Check)**
**Schicht 2** | Mathematische Berechnung zur Fehlererkennung  
Eine Prüfsumme ist ein mathematisches Ergebnis, das am Anfang oder Ende eines Frames berechnet wird. Der Empfänger berechnet die Prüfsumme erneut: Wenn sie nicht übereinstimmt, war der Frame beschädigt und wird verworfen. CRC ist schnell aber nicht kryptographisch (für Sicherheit, nutze HMAC). Essentiell für Fehlerbehandlung auf Schicht 2.

**Beispiel:** Frame-Inhalt wird mit Polynom-Division berechnet → Prüfsumme wird angehängt → Empfänger prüft Prüfsumme → OK oder NOT OK.

---

## Q

### **QoS (Quality of Service)**
**Schicht 2–4** | Mechanismen zur Priorisierung und Gewährleistung von Bandbreite  
QoS sind Techniken, um bestimmten Datenverkehr zu priorisieren. Ein Managed Switch kann VoIP-Pakete gegenüber YouTube-Video bevorzugen. Router können bestimmte Ports oder Protokolle limitieren. QoS hilft, dass wichtige Anwendungen (z.B. Video-Konferenz) nicht durch BitTorrent verlangsamt werden. Wird konfiguriert auf Switches, Routern, Firewalls.

**Beispiel:** Ein Router kann Video-Streaming auf max. 50 Mbps limitieren, damit VoIP-Anrufe nicht gestört werden.

---

## R

### **RJ45 (Registered Jack 45)**
**Schicht 1** | Standard-Stecker für Twisted-Pair Netzwerkkabel  
RJ45 ist ein 8-adriger Stecker, der Ethernet-Kabel mit Netzwerkgeräten verbindet. Der Stecker hat 8 Kontakte, typisch für Cat5e, Cat6 Kabel. Es gibt zwei Standard-Belegungen: T568A und T568B. Beide funktionieren, **wichtig:** beide Seiten eines Kabels müssen die gleiche Belegung haben (sonst Crossover-Kabel). RJ45-Stecker sind austauschbar und einfach zu crimpen (verpressen).

**Beispiel:** Ein Ethernet-Kabel mit RJ45-Stecker verbindet deinen Computer zum Router.

---

### **Repeater**
**Schicht 1** | Gerät zur Signalverstärkung über große Distanzen  
Ein Repeater verstärkt abgeschwächte Signale und leitet sie weiter, um die Reichweite zu erhöhen. Auf Schicht 1 arbeitet der Repeater passiv (kein Denken). Bei Glasfaser heißt es "Optical Repeater" mit Verstärkung. Bei Funknetzen ein "Range Extender" / "WiFi Repeater". Ein WLAN-Repeater verlängert WiFi-Signale in Ecken des Hauses.

**Beispiel:** Ein WiFi-Repeater nimmt das schwache Signal vom Router, verstärkt es, und sendet es weiter in den Keller.

---

### **Router**
**Schicht 3** | Gerät, das Pakete zwischen verschiedenen Netzwerken weiterleitet  
Ein Router ist ein intelligentes Netzwerkgerät auf Schicht 3. Er verbindet mehrere Netzwerke und leitet Pakete basierend auf Ziel-IP-Adressen weiter. Ein Router hat typischerweise mehrere Netzwerk-Interfaces (z.B. WAN-Port zum ISP, LAN-Ports zu lokalen Geräten). Routing-Tabellen steuern, wohin Pakete gehen. Ein Heim-Router verbindet dein Haus-Netzwerk mit dem Internet.

**Beispiel:** Dein Heim-Router (192.168.1.1) verbindet die Geräte in deinem Haus mit dem Internet-Provider.

---

### **Routing**
**Schicht 3** | Prozess der Bestimmung des optimalen Pfads für Datenpakete  
Routing ist der Mechanismus, durch den Router entscheiden, wohin ein Paket weitergeleitet wird. Routing-Tabellen speichern mögliche Ziele und die besten Pfade zu ihnen. Es gibt statisches Routing (manuell konfiguriert) und dynamisches Routing (automatisch mit Protokollen wie OSPF, BGP). Routing ist das "Navigationssystem" des Internets.

**Beispiel:** Ein Paket für 8.8.8.8 wird vom Heim-Router zum ISP-Router weitergeleitet, dann zu weiteren Routern bis es Google erreicht.

---

### **RPC (Remote Procedure Call)**
**Schicht 5** | Protokoll zum Aufrufen von Funktionen auf entfernten Computern  
RPC ermöglicht es, eine Funktion/Methode auf einem Remote-Computer auszuführen, als wäre sie lokal. Der lokale Code ruft eine Remote-Funktion auf, die Remote-Seite führt aus und gibt Ergebnis zurück. Moderne Varianten: XML-RPC, JSON-RPC, gRPC. Essentiell für verteilte Systeme und Microservices.

**Beispiel:** Ein Medizin-Server ruft eine Funktion auf dem Datenbank-Server auf: `result = database.getPatientData(id)`

---

### **RTP (Real-time Transport Protocol)**
**Schicht 4** | Protokoll für Live-Audio und Video-Übertragung  
RTP ist ein Transportprotokoll speziell für Echtzeit-Medien (Audio, Video). Es arbeitet über UDP (schnell, nicht zuverlässig) und übernimmt Sequenznummern und Zeitstempel, um Echtzeitdaten korrekt zu ordnen. RTP wird von VoIP, Video-Konferenzen, Live-Streaming verwendet. Parallel läuft RTCP zur Qualitätskontrolle.

**Beispiel:** Ein Zoom-Videoanruf nutzt RTP zum Streaming von Audio und Video in Echtzeit.

---

## S

### **Segment**
**Schicht 4** | Dateneinheit mit TCP/UDP-Header (Transport-Layer)  
Ein Segment ist die Dateneinheit auf Schicht 4. Es enthält TCP/UDP-Header (Quell-Port, Ziel-Port) und Payload. TCP-Segmente können retransmittiert werden, UDP-Datagramme nicht. Segmente haben typisch max. 65.535 Byte.

**Beispiel:** Ein 10 MB Download wird in viele TCP-Segmente aufgeteilt, jedes mit eigenem Sequenznummer.

---

### **Session (Sitzung)**
**Schicht 5** | Verwaltete Kommunikation zwischen zwei Anwendungen über mehrere Verbindungen  
Eine Sitzung ist eine Verwaltungs-Einheit auf Schicht 5, die mehrere Verbindungen umfassen kann. Beispiel: Ein Benutzer meldet sich auf einer Website an → Sitzung startet → Browser sendet viele HTTP-Requests → Sitzung speichert Benutzerzustand → Nach Logout endet Sitzung. Sitzungen sind länger als einzelne TCP-Verbindungen.

**Beispiel:** Du meldest dich bei deinem E-Mail-Konto an (Session startet). Du sendest mehrere Requests, alles wird als eine Session gemessen. Nach Logout endet die Session.

---

### **Session-ID**
**Schicht 5** | Eindeutige Kennung für eine Benutzersitzung  
Eine Session-ID ist eine eindeutige Zeichenfolge, die eine Benutzersitzung identifiziert. Sie wird vom Server generiert und an den Client zurückgegeben (üblicherweise in einem Cookie). Bei jedem Request sendet der Client die Session-ID mit, und der Server erkennt den Benutzer. Session-IDs sollten zufällig und nicht vorhersehbar sein.

**Beispiel:** Session-ID `abcd1234567890xyz` wird generiert, im Cookie gespeichert, und bei jedem Request mitgesendet.

---

### **SFTP (SSH File Transfer Protocol)**
**Schicht 7** | Sichere Dateiübertragung über SSH-Verschlüsselung  
SFTP ist der moderne, sichere Nachfolger von FTP. Es benutzt SSH (Port 22) für Dateitransfer und Authentifizierung. Alle Daten sind verschlüsselt, das Passwort wird nicht im Klartext übertragen. SFTP ist Standard für Web-Hosting, Server-Administration, sichere Dateiübertragung. Funktionalität ähnlich FTP (Upload, Download, Delete) aber sicher.

**Beispiel:** Ein Web-Entwickler nutzt WinSCP (SFTP-Client) für sichere Datei-Uploads zum Server.

---

### **SIP (Session Initiation Protocol)**
**Schicht 7** | Protokoll zum Aufbau und Verwaltung von VoIP-Verbindungen  
SIP ist das Signalisierungs-Protokoll für VoIP. Es kümmert sich um Anrufaufbau, -verwaltung, -abbau. SIP ist text-basiert ähnlich HTTP. Arbeitet über UDP Port 5060 oder TCP Port 5061. Die eigentliche Audio übertragen erfolgt dann über RTP. SIP wird von Softphones, VoIP-Systemen und Telekommunikations-Anbietern verwendet.

**Beispiel:** Alice ruft Bob an: SIP INVITE wird zu Bob gesendet, Ringing wird signalisiert, nach Annehmen startet RTP-Audio.

---

### **Slot (Ethernet Slot)**
**Schicht 2** | Zeit für ein Gerät zu senden auf Bus-Topologie  
In älteren Bus-Topologien (z.B. Token Ring) durfte nur ein Gerät zur Zeit Daten senden. Ein "Slot" war das Zeitfenster, in dem ein Gerät senden durfte. Nach dem Slot durfte das nächste Gerät senden. Dies verhinderte Kollisionen. Mit modernen Switches ist dieses Konzept obsolet (Full-Duplex ermöglicht gleichzeitiges Senden/Empfangen).

**Beispiel:** Token Ring: Gerät A hat einen Slot und sendet Daten. Nach Slot-Ende geben sie das "Token" an Gerät B weiter.

---

### **SMB/CIFS (Server Message Block / Common Internet File System)**
**Schicht 7** | Protokoll für Datei- und Druckerfreigabe in Windows-Netzen  
SMB ist das Standard-Protokoll für Dateifreigabe in Windows-Netzwerken. Es ermöglicht Zugriff auf Dateien wie `\\SERVER\Freigabe`. CIFS ist die ältere Bezeichnung. Modern ist SMB3 mit besserer Leistung und Sicherheit. Standard-Port ist 445 (TCP). Samba auf Linux implementiert SMB-Kompatibilität.

**Beispiel:** `\\fileserver\documents` öffnet eine freigegebene Datei-Ressource über SMB.

---

### **SMTP (Simple Mail Transfer Protocol)**
**Schicht 7** | Protokoll zum Versenden und Weiterleitung von E-Mails  
SMTP ist das Standard-Protokoll für E-Mail-Versand. Ein E-Mail-Client verbindet zum SMTP-Server, authentifiziert sich, und sendet die E-Mail. Der SMTP-Server leitet die E-Mail zum Empfänger-Server weiter. Standard-Ports: 25 (zwischen Servern), 587 (Clients, mit AUTH), 465 (mit TLS). SMTP arbeitet mit TCP.

**Beispiel:** Dein E-Mail-Client sendet an `smtp.gmail.com` Port 587 mit TLS-Verschlüsselung.

---

### **SNMP (Simple Network Management Protocol)**
**Schicht 7** | Protokoll zur Überwachung und Verwaltung von Netzwerk-Geräten  
SNMP wird genutzt um Router, Switches, Drucker, Server zu überwachen. Es können Metriken abgefragt werden (CPU, Memory, Temperatur) und Alarme gesetzt werden. SNMP nutzt Agents auf Geräten und Manager zentral. Standard-Port 161 (UDP). Versionen: SNMPv1 (unsicher), SNMPv2c (mit Community-String), SNMPv3 (mit Verschlüsselung).

**Beispiel:** Ein Monitoring-System fragt via SNMP alle 5 Minuten: "Wie viel CPU nutzt dieser Switch?" → Agent antwortet: "45%"

---

### **Socket**
**Schicht 4** | Kombination von IP-Adresse + Port (eindeutig weltweit)  
Ein Socket ist die Schnittstelle zwischen Anwendung und Netzwerk. Es ist eindeutig definiert durch: Quell-IP + Quell-Port + Ziel-IP + Ziel-Port + Protokoll (TCP/UDP). Ein Socket repräsentiert eine spezifische Verbindung. Ein Server kann viele Sockets gleichzeitig offene haben (ein pro Client-Verbindung).

**Beispiel:** Socket `192.168.1.100:55000 ↔ 8.8.8.8:443` repräsentiert deinen Browser-Verbindung zu Google DNS.

---

### **SPA/SFP+ (Small Form-factor Pluggable)**
**Schicht 1** | Stecker/Modul für Hochgeschwindigkeits-Glasfaser  
SFP und SFP+ sind kleine, Hot-swappable Transceiver (Sender+Empfänger) für Glasfaser-Verbindungen. SFP: bis 10 Gbit/s, SFP+: bis 10 Gbit/s, später QSFP für noch höhere Geschwindigkeiten. Industrie-Standard seit 2006. Platz-sparend, können ausgetauscht werden ohne Geräte zu stoppen. Verwendet in Rechenzentren, ISP Backbones.

**Beispiel:** Ein Switch mit SFP+-Ports kann Glasfaser-Kabel anschließen für Backbone-Verbindungen.

---

### **SPX (Sequenced Packet Exchange)**
**Schicht 4** | Veraltetes Transportprotokoll von Novell NetWare  
SPX war das Pendant zu TCP in Novell NetWare Netzwerken. Es bot zuverlässige, verbindungsorientierte Kommunikation. Mit dem Aufstieg von TCP/IP wurde SPX obsolet. Heute praktisch nicht mehr im Einsatz, nur in Museums-Netzwerken.

**Beispiel:** 1980er Jahre Novell-Netzwerke nutzten IPX/SPX statt TCP/IP (historisch).

---

### **SSH (Secure Shell)**
**Schicht 7** | Sicheres Protokoll für Remote-Zugriff und Dateitransfer  
SSH ist das Standard-Protokoll für sichere Fernsteuerung von Linux/Unix-Servern. Es verschlüsselt alle Kommunikation (im Gegensatz zu Telnet). SSH nutzt Public-Key oder Passwort-Authentifizierung. Es kombiniert Remote Shell, Dateitransfer (SFTP) und Tunnel-Funktionalität. Standard-Port 22. SSH-Clients: PuTTY (Windows), Terminal (Mac/Linux).

**Beispiel:** `ssh user@server.com` verbindet sicher zum Server. Alle Eingaben/Ausgaben sind verschlüsselt.

---

### **SSL/TLS (Secure Sockets Layer / Transport Layer Security)**
**Schicht 6** | Kryptographie-Protokoll für sichere Kommunikation  
SSL/TLS verschlüsselt die Kommunikation zwischen Client und Server. Der "SSL/TLS Handshake" authentifiziert den Server (mit Zertifikat), einigt sich auf Verschlüsselung, und sichert danach alle Daten. HTTPS ist HTTP + TLS. TLS ist der Modern Standard (SSL ist veraltet). Verwendet überall: Banking, E-Commerce, E-Mail, VPN.

**Beispiel:** `https://` in der Browser-URL bedeutet, dass TLS aktiv ist. Das grüne Schloss zeigt ein gültiges Zertifikat.

---

### **SNTP (Simple Network Time Protocol)**
**Schicht 7** | Vereinfachte Version von NTP  
SNTP ist eine leichtgewichtige Alternative zu NTP für einfache Zeit-Synchronisierung. Es ist nicht so präzise wie NTP, aber genügt für viele Geräte. Verwendet gleiche Port 123 UDP wie NTP. Oft auf IoT-Geräten, eingebetteten Systemen eingesetzt.

**Beispiel:** Ein Smart-TV nutzt SNTP um seine interne Uhr synchron zu halten.

---

### **Subnetzmaske**
**Schicht 3** | Bestimmt, welche Bits einer IP-Adresse zum Netzwerk gehören  
Eine Subnetzmaske ist eine 32-Bit-Zahl, die definiert, wie viele Bits einer IPv4-Adresse den Netzanteil bilden. Typische Masken: `255.255.255.0` (/24 = 256 Adressen), `255.255.0.0` (/16 = 65.536 Adressen). Mit Maske wird bestimmt, welche Hosts im gleichen logischen Netz sind. Auf verschiedenen Subnetzen ist ein Router nötig.

**Beispiel:** IP `192.168.1.100` mit Maske `255.255.255.0` gehört zum Netzwerk `192.168.1.0` (mit 254 hosts).

---

### **STP (Spanning Tree Protocol)**
**Schicht 2** | Protokoll zur Verhinderung von Schleifen in redundanten Netzwerken  
STP kreiert eine schleifenfreie, baumförmige Netzwerk-Topologie aus redundanten Switches. Dadurch werden Ethernet-Frame-Schleifen und -Duplikationen verhindert. Ein "Root Bridge" wird gewählt, andere Switches orientieren sich an Pfadkosten. Bestimmte Ports werden blockiert (Backup-Pfade). STP erlaubt hohe Verfügbarkeit: bei Ausfällen organisiert sich das Netz selbst neu. Standard ist RSTP (Rapid STP) mit schnellerem Failover.

**Beispiel:** Zwei redundante Switches verbinden den gleichen Bereich. STP blockiert einen Port vorsorglich, bei Ausfall aktiviert dieser Port automatisch.

---

### **Switch**
**Schicht 2** | Intelligentes Netzwerkgerät mit MAC-Lernfähigkeit  
Ein Switch ist ein Schicht-2-Gerät mit mehreren Ports. Es lernt MAC-Adressen automatisch und leitet Frames gezielt an den richtigen Port weiter (statt zu broadcasten). Switches sind schneller, intelligenter und effizienter als alte Hubs. Sie unterstützen Full-Duplex (gleichzeitiges Senden/Empfangen). "Managed Switches" sind konfigurierbar (VLAN, QoS), "Unmanaged Switches" sind Plug-and-Play.

**Beispiel:** Ein Netzwerk-Switch mit 24 Ports verbindet 24 Geräte, jedes erhält volle Bandbreite (1 Gbps).

---

## T

### **TCP (Transmission Control Protocol)**
**Schicht 4** | Zuverlässiges, verbindungsorientiertes Transportprotokoll  
TCP garantiert, dass alle Daten ankommen, in der richtigen Reihenfolge, ohne Fehler. Es führt einen Verbindungs-Handshake durch (SYN, SYN-ACK, ACK), sendet Segmente, erhält Bestätigungen (ACK), und überwacht Timeouts (bei Paketverlust wird erneut gesendet). TCP ist langsamer als UDP, aber zuverlässig. Verwendung: HTTP (Web), SMTP (E-Mail), FTP (Dateitransfer).

**Beispiel:** Wenn du eine Datei herunterlädt, wollen Sie sicherstellen, dass **alle Bytes** ankommen. TCP macht das.

---

### **Telnet**
**Schicht 7** | Textbasiertes Protokoll für Remote-Fernsteuerung  
Telnet ist der Vorgänger von SSH. Es ermöglicht Fernsteuerung über Kommandozeile. Heute praktisch nicht mehr empfohlen, weil alles im Klartext übertragen wird (Passwort sichtbar). SSH ersetzt Telnet überall. Port 23.

**Beispiel:** 1990er Jahre: `telnet myserver.com 23` öffnet Fernzugriff. Heute: nutzlos & unsicher.

---

### **Timeout**
**Schicht 4** | Maximale Wartezeit auf ein Ereignis (z.B. ACK von TCP)  
Ein Timeout ist die maximale Zeit, die auf ein erwartetes Ereignis gewartet wird. Wenn das Ereignis nicht eintritt, wird das Timeout als Fehler behandelt. TCP nutzt Timeouts: Wenn kein ACK nach X Millisekunden kommt, wird das Segment erneut gesendet (Retransmission). Timeouts müssen sorgfältig gesetzt werden: zu kurz = unnötige Wiederholungen, zu lang = langsame Fehlerbehandlung.

**Beispiel:** TCP setzt Timeout auf 1 Sekunde. Kein ACK? → Segment wird erneut gesendet.

---

### **Token**
**Schicht 5** | Authentifizierungs-Nachweis (Session-Token, JWT, OAuth)  
Ein Token ist ein digitaler Nachweis, der beweist, dass ein Benutzer authentifiziert ist. Nach Login erhält der Benutzer einen Token (z.B. JWT oder OAuth-Token). Dieser wird bei jedem Request mitgesendet. Der Server prüft die Token-Signatur und akzeptiert den Request. Tokens sind zustandslos und skalierbar (ideal für APIs).

**Beispiel:** Nach Login erhält der User ein JWT-Token, den er mit `Authorization: Bearer TOKEN` mitsendet.

---

### **Topologie**
**Schicht 1** | Physische Netzwerk-Struktur (Stern, Bus, Ring, Mesh)  
Eine Topologie beschreibt, wie Netzwerk-Geräte physisch verbunden sind. **Stern:** Zentrale Hub/Switch mit Spokes. **Bus:** Lineare Hauptleitung. **Ring:** Zirkuläre Verbindung. **Mesh:** Jeder mit Jedem verbunden. Die Topologie beeinflusst Ausfallsicherheit, Kabelaufwand, Performance. Moderne Netze nutzen meist Stern (mit Switches).

**Beispiel:** Heim-Netzwerk: Stern-Topologie (Router zentral, alle Geräte zum Router).

---

### **Twisted-Pair (TP)**
**Schicht 1** | Netzwerk-Kabel mit verdrillten Adernpaaren  
Twisted-Pair ist das häufigste Netzwerk-Kabel. Es besteht aus 4 Adernpaaren, die zu Spiralen verdrillt sind. Dies reduziert Interferenz mit anderen Kabeln. TP gibt es in verschiedenen Varianten: **U/UTP** (keine Schirmung), **S/FTP** (mit Gesamtschirm + Einzelschirme). Twisted-Pair ist billig, einfach zu handhaben, daher Standard weltweit. RJ45-Stecker ist Standard.

**Beispiel:** Das Ethernet-Kabel von deinem Computer zum Router ist Twisted-Pair.

---

## U

### **UDP (User Datagram Protocol)**
**Schicht 4** | Schnelles, verbindungsloses, unzuverlässiges Transportprotokoll  
UDP sendet Daten einfach ab, ohne Verbindung oder Bestätigung. Es garantiert nicht, dass Pakete ankommen oder in richtiger Reihenfolge. Dafür ist UDP extrem schnell (kein Overhead). Verwendung: DNS (Port 53), VoIP, Video-Streaming, Gaming, wo Geschwindigkeit wichtiger ist als Zuverlässigkeit.

**Beispiel:** Du streamst Video. Wenn 1% der UDP-Pakete verloren gehen, sieht man kurz Artefakte, aber der Stream läuft flüssig.

---

### **UTF-8**
**Schicht 6** | Universeller Zeichensatz mit variabler Byte-Länge  
UTF-8 ist der moderne Standard-Zeichensatz, der alle möglichen Zeichen der Welt unterstützt (Unicode). Ein Zeichen kann 1–4 Bytes groß sein: ASCII-Zeichen = 1 Byte (kompatibel), Umlaute = 2–3 Bytes, Emojis = 4 Bytes. UTF-8 ist Standard im Web, Linux, modernen Systemen. Keine Sicherheitsprobleme wie ASCII ("Hallo" vs. "Привет").

**Beispiel:** Das Zeichen "😀" (Emoji) ist 4 Bytes UTF-8: F0 9F 98 80.

---

## V

### **VLAN (Virtual Local Area Network)**
**Schicht 2** | Logische Unterteilung von Switches in separate Netzwerke  
Ein VLAN erlaubt es, mehrere logische LANs auf einem physischen Switch zu schaffen. Geräte in verschiedenen VLANs können nicht direkt kommunizieren (brauchen Router). VLANs werden mit Tags (IDs 1–4096) identifiziert. Eingesetzt für Sicherheit (Abteilungen trennen), Performance (Broadcasts reduzieren), Verwaltung. Moderne Netzwerke nutzen VLANs stark.

**Beispiel:** Switch mit 48 Ports: 24 Ports = VLAN 10 (Marketing), 24 Ports = VLAN 20 (Engineering). Keine direkte Kommunikation ohne Router.

---

### **VLSM (Variable Length Subnet Mask)**
**Schicht 3** | Subnetzierung mit unterschiedlichen Masken für Optimierung  
VLSM ermöglicht verschiedene Subnetzmasken innerhalb eines Netzwerks. Beispiel: Das Netzwerk 192.168.0.0/16 kann aufgeteilt werden in 192.168.1.0/24 (256 Adressen), 192.168.2.0/25 (128 Adressen), 192.168.3.0/27 (32 Adressen). Dies ist viel effizienter als alle mit /24. Basis von modernem Netzwerk-Design.

**Beispiel:** Ein großes Netzwerk teilt sich auf in viele kleine Subnetze mit unterschiedlicher Größe.

---

### **VoIP (Voice over Internet Protocol)**
**Schicht 7** | Telefonie über Internet-Verbindung  
VoIP übermittelt Telefon-Audio über Netzwerke statt über Telefon-Leitungen. Signalisierung erfolgt via SIP (Session Initiation Protocol), Audio via RTP (Real-time Transport Protocol). Vorteile: Billiger, flexibler, mobil. Nachteile: Abhängig von Internet-Qualität, keine Notrufe in älteren Systemen. Anbieter: Skype, Google Meet, Zoom, Telefonunternehmen mit VoIP.

**Beispiel:** Zoom-Videoanruf nutzt VoIP für Audio + RTP für Video.

---

## W

### **WAN (Wide Area Network)**
**Allgemein** | Großes Netzwerk über geografisch verteilte Standorte  
Ein WAN verbindet mehrere LANs über große Distanzen (Stadt, Land, Kontinente). Das Internet ist das größte WAN. Unternehmen nutzen WANs um Büros zu verbinden. WANs haben typisch niedrigere Bandbreite als LANs und höhere Latenz. Technologien: Leased Lines, VPN, MPLS, DSL, Kabel.

**Beispiel:** Ein Konzern mit Büros in Berlin, Paris, London verbindet sie via WAN über das Internet.

---

## X

### **X.25**
**Schicht 1–3** | Veraltetes Paketvermittlungs-Protokoll für WANs  
X.25 war ein Vorläufer moderner IP-Netze. Es bot zuverlässige Packet-Vermittlung über öffentliche WANs in den 1980–90ern. Heute praktisch komplett ersetzt durch IP und ist historisch. Extrem langsam nach heutigen Standards.

**Beispiel:** Mainframe-Netzwerke der 1980er Jahre nutzten X.25.

---

## Z

### **Zeitzonen-Problem (NTP/Uhr-Synchronisierung)**
**Schicht 7** | Herausforderung bei globaler Zeit-Synchronisierung  
Netzwerk-Zeitsynchronisierung muss Zeitzonen berücksichtigen. NTP synchronisiert UTC (Universal Coordinated Time) – eine Referenz ohne Zeitzonen. Das Betriebssystem konvertiert UTC zur lokalen Zeit. Problem: Sommerzeit-Übergänge sind kompliziert. Lösung: System läuft intern immer in UTC, konvertiert zur Anzeige.

**Beispiel:** NTP antwortet: "14:32:45 UTC", OS konvertiert zu "16:32:45 CEST" (Sommerzeit in Berlin).

---

## 📚 Weitere Ressourcen

Alle Glossar-Einträge sind mit den entsprechenden OSI-Schichten gekennzeichnet. Nutze diese Übersicht, um schnell Fachbegriffe nachzuschlagen. Für tiefere Erklärungen, besuche die [OSI-Modell Übersicht](/osi/) oder die detaillierten Schicht-Seiten.

---

## 🔗 Navigation

| Navigation |
|-----------|
| [Zurück zur OSI-Übersicht](/osi/) |
