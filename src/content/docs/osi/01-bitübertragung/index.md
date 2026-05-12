---
title: Schicht 1 – Bitübertragungsschicht (Physical Layer)
description: Physische Übertragungsmedien, Topologien, Kabel und Hardware
---

Die **Bitübertragungsschicht** ist die unterste Schicht des OSI-Modells und bildet die physische Grundlage aller Netzwerkkommunikation. Sie ist verantwortlich für die tatsächliche Übertragung von Rohdaten in Form von **digitalen Signalen (Bits)** über physische Medien.

## 🎯 Kernaufgaben der Schicht 1

- **Bitweise Übertragung:** Umwandlung von Daten in digitale Signale (0 und 1)
- **Physische Verbindung:** Verbindung über Kabel, Funkwellen oder andere Medien
- **Signalspezifikationen:** Definition von Spannungspegeln, Frequenzen und Timing
- **Topologien:** Definition der Netzwerk-Verkabelungsstruktur
- **Hardware-Schnittstellen:** Netzwerkkarten, Stecker, Modems, Repeatern

> ⚠️ **Wichtig:** Die Schicht 1 bietet eine **ungesicherte Verbindung**. Es gibt keine Fehlerprüfung oder Flusskontrolle – diese Aufgaben übernehmen die höheren Schichten.

---

## 🌍 Netzwerk-Topologien

Die **Topologie** eines Netzwerks ist die Art und Weise, wie Geräte physisch miteinander verbunden sind. Sie definiert die Kabelführung und Kommunikationsstruktur.

### Punkt-zu-Punkt-Verbindungen

Bei Punkt-zu-Punkt-Verbindungen wird ein Kabel **exklusiv** zwischen zwei Knoten verlegt.

#### **Stern-Topologie** ⭐

```
        [Hub/Switch]
        /    |    \
     [PC]  [PC]  [PC]
```

**Merkmale:**
- Alle Endgeräte verbinden sich mit einem zentralen Übertragungsgerät (Hub, Switch oder Server)
- Jede Verbindung ist eine Punkt-zu-Punkt-Leitung

**Vorteile:**
- Ausfall eines Endgeräts oder Kabels beeinträchtigt andere nicht
- Leicht erweiterbar
- Schnelle Datenübertragung (volle Bandbreite pro Gerät)

**Nachteile:**
- Wenn der zentrale Hub/Switch ausfällt, ist das gesamte Netz weg
- Viel Kabel notwendig

---

#### **Ring-Topologie** 🔄

```
    [PC1]
    /   \
[PC4]   [PC2]
    \   /
    [PC3]
```

**Merkmale:**
- Geräte sind ringförmig miteinander verbunden
- Daten zirkulieren in eine Richtung um den Ring

**Vorteile:**
- Geringer Kabelaufwand

**Nachteile:**
- Ausfall eines Geräts zerstört das gesamte Netzwerk
- Schwierig zu erweitern

---

#### **Vollvermaschte Topologie** 🕸️

```
    [PC1]---[PC2]
     / | \ / | \
   [PC3]---[PC4]
```

**Merkmale:**
- Jeder Knoten ist mit jedem anderen Knoten verbunden
- Höchste Ausfallsicherheit

**Vorteile:**
- Größte Redundanz
- Keine single points of failure

**Nachteile:**
- Extrem hoher Verkabelungsaufwand
- Komplex in Verwaltung

---

### Punkt-zu-Mehrpunkt-Verbindungen

Mehrere Knoten **teilen sich ein Übertragungsmedium**.

#### **Bus-Topologie** 🚌

```
[PC1]--[PC2]--[PC3]--[PC4]--[PC5]
 |       |      |      |      |
Abschluss                 Abschluss
```

**Merkmale:**
- Alle Geräte hängen an einer Hauptleitung (dem Bus)
- Bus wird an den Enden durch Abschlusswiderstände begrenzt

**Vorteile:**
- Ausfall eines Rechners beeinträchtigt andere nicht
- Einfache, kurze Verkabelung

**Nachteile:**
- Ausfall des Kabels = gesamtes Netz down
- Gesamtbandbreite wird von allen geteilt
- Nur ein Gerät kann gleichzeitig senden (blockiert andere)
- Langsam und ineffizient

---

#### **Zelltopologie** (Wireless) 📡

```
         [AP]
        /  |  \
     [PC] [PC] [PC]
```

**Merkmale:**
- Drahtlose Netzwerke (WLAN, Funk)
- Zentrale Zugangspunkte (Access Points) koordinieren die Kommunikation

**Vorteile:**
- Keine Kabel nötig
- Wände und Decken kein Hindernis

**Nachteile:**
- Sicherheit: Funknetze sind auch außerhalb von Gebäuden empfangbar
- Störungen durch andere Funkgeräte

---

## 📡 Übertragungsmedien (Kabel & Leitungen)

Die Schicht 1 definiert, über welches Medium Daten übertragen werden:

### **Kupferkabel (CU-Kabel)**

#### **Twisted-Pair (TP) – Verdrillte Adernpaare**

Das am weitesten verbreitete Kabel in lokalen Netzwerken. Das Bezeichnungssystem folgt dem Schema **XX/Y ZZ**:

**XX – Gesamtschirmung:**
- **U** = Unshielded (keine Schirmung)
- **F** = Foil shield (Folienschirm)
- **S** = Braided shield (Geflechtschirm)
- **SF** = Geflecht + Folienschirm

**Y – Aderpaarschirmung:**
- **U** = Ohne Schirm
- **F** = Folienschirm
- **S** = Geflechtschirm

**ZZ – Verseilungsart:**
- **TP** = Twisted Pair (symmetrisches Paar)
- **QP** = Quad Pair (symmetrischer Vierer)

**Häufige TP-Kabel-Typen:**

| Typ | Beschreibung | Einsatz | EMV-Sicherheit |
|-----|-------------|---------|----------------|
| **U/UTP** | Keine Schirmung | Billige Router, internationale Märkte | Niedrig |
| **F/UTP** | Folienschirm um Paare | Standard weltweit | Mittel |
| **S/FTP (PiMF)** | Geflecht + Folien-Einzelschirme | Deutschland, EMV-Anforderungen | Sehr hoch |
| **SF/UTP** | Geflecht + Folien-Bündelschirm | Hochstörungsumgebungen | Sehr hoch |

> 🇩🇪 **In Deutschland:** Werden überwiegend **S/FTP** oder **S/STP**-Kabel eingesetzt, um die **EMV-Gesetze** (Elektromagnetische Verträglichkeit) einzuhalten.

---

#### **Koaxialkabel**

- **Aufbau:** Innenleiterkern + Isolationsschicht + Geflechtschirm + Außenmantel
- **Einsatz:** Kabelfernsehen, ältere Netzwerke
- **Vorteil:** Gute Abschirmung
- **Nachteil:** Dicker, weniger flexibel als Twisted-Pair

---

### **Glasfaser (LWL – Lichtwellenleiter)**

- **Übertragung:** Lichtsignale statt elektrische Signale
- **Material:** Optischer Kunststoff oder Glas
- **Vorteile:** 
  - Extrem hohe Datenübertragungsraten (bis 100 Gbit/s)
  - Elektromagnetische Störungen haben keinen Einfluss
  - Große Reichweiten
- **Nachteil:** Teurer, spezialisierte Ausrüstung nötig

---

#### **Medienwandler**

Wenn ein Router nicht direkt glasfaser-fähig ist:
- Ein **Medienwandler** wandelt optische Lichtsignale in elektrische Signale um
- Ermöglicht Anschluss an einen Standard-Router
- Benötigt üblicherweise eine Stromquelle

---

### **Powerline (Daten über Stromleitungen)**

- **Konzept:** Nutzt das 230V-Stromnetz als Übertragungsmedium
- **Einsatz:** 
  - HausInterne Gegensprechanlagen
  - Babyphons
  - Fernsteuerungen
  - Lokale Netzwerke (LAN)
- **Vorteil:** Jeder Haushalt hat Stromleitungen – "Internet an jeder Steckdose"
- **Nachteil:** Störanfällig, langsamere Datenraten als dedizierte Leitungen

---

## 🔌 Stecker & Module

### **RJ45-Stecker (Twisted-Pair)**

- Standard für Netzwerkverbindungen mit TP-Kabeln
- **Belegung:** T568A oder T568B (beide funktionieren, **wichtig:** auf BEIDEN Seiten gleich belegnen!)
- **Verwendung:** Ethernet, Fast Ethernet, Gigabit Ethernet

---

### **SFP+ (Small Form-factor Pluggable)**

- Erweiterte Version für Glasfaser-Transceiver
- Unterstützt Geschwindigkeiten bis **10 Gbit/s**
- Seit 2006 Industriestandard
- **Vorteil:** Klein und platzsparend
- Transceiver = Sender + Empfänger in einem

---

## 🖥️ Hardware auf Schicht 1

| Hardware | Aufgabe | Besonderheiten |
|----------|---------|----------------|
| **Netzwerkkarte (NIC)** | Verbindung zum Netzwerk | Jede hat eine MAC-Adresse; heute integriert statt Steckkarten |
| **Hub** | Verbindung mehrerer Geräte | Primitiv: nur Broadcasting, keine intelligente Weiterleitung |
| **Repeater** | Signalverstärkung | Verstärkt abgeschwächte Signale über größere Distanzen |
| **Modem** | Umwandlung analog ↔ digital | Für Telefon-, DSL-, Kabelverbindungen |
| **Access Point (AP)** | Drahtlose Verbindung | Für WLAN (Zelltopologie) |

---

## 📊 OSI-Modell – Übersichtstabelle

| Schicht | Name | Aufgabe | Dateneinheit | Protokolle |
|---------|------|---------|--------------|-----------|
| **7** | 🖥️ Anwendung | Benutzerkommunikation | Data | HTTP, FTP, SMTP |
| **6** | 🎨 Darstellung | Formatierung | Data | Telnet, NetBIOS |
| **5** | 🔐 Sitzung | Verbindungsverwaltung | Data | TFTP |
| **4** | 🚚 Transport | Ende-zu-Ende | Segment | TCP, UDP |
| **3** | 🗺️ Vermittlung | Routing | Packet | IP, ICMP |
| **2** | 🔗 Sicherung | Fehlerbehandlung | Frame | MAC, ARP |
| **1** | ⚡ **Bitübertragung** | **Physische Signale** | **Bit** | **Ethernet, Token Ring, FDDI** |

---

## 📚 Glossar-Begriffe aus dieser Schicht

- **Topologie:** Struktur der Netzwerkverkabelung
- **Twisted-Pair:** Verdrillte Adernpaare für Netzwerkkabel
- **Glasfaser (LWL):** Optische Übertragung mittels Lichtsignalen
- **MAC-Adresse:** Physische Adresse einer Netzwerkkarte
- **Hub:** Netzwerkgerät ohne intelligente Weiterleitung
- **RJ45:** Standard-Stecker für TP-Kabel
- **EMV:** Elektromagnetische Verträglichkeit

→ [Vollständiges OSI-Glossar](/osi/glossar/)

---

## 🔗 Navigation

| ← Zurück | Übersicht | Weiter → |
|----------|-----------|----------|
| [OSI-Modell Übersicht](/osi/) | [Zum OSI-Modell](/osi/) | [Schicht 2: Sicherungsschicht](/osi/02-sicherung/) |
