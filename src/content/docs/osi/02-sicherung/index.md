---
title: Schicht 2 – Sicherungsschicht (Data Link Layer)
description: MAC-Adressen, Switches, Frames und Fehlerprüfung
---

# 🔗 Schicht 2: Sicherungsschicht (Data Link Layer)

Die **Sicherungsschicht** ist verantwortlich für die **sichere und fehlerfreie Übertragung** von Daten zwischen direkt verbundenen Knoten in einem lokalen Netzwerk (LAN). Sie nimmt die rohen Bits der Schicht 1 entgegen und organisiert sie in strukturierten **Frames**.

## 🎯 Kernaufgaben der Schicht 2

- **Segmentierung in Frames:** Daten werden in kleine, verwaltbare Blöcke aufgeteilt
- **Fehlerprüfung:** Jeder Frame erhält eine Prüfsumme (CRC – Cyclic Redundancy Check)
- **Datenflusskontrolle:** Verhinderung von Überlastung des Empfängers
- **MAC-Adressierung:** Eindeutige Identifikation von Netzwerkschnittstellen
- **Zugriff auf das Medium:** Regelung, wer auf das Übertragungsmedium zugreifen darf

> ⚠️ **Wichtig:** Fehlerhafte Frames werden **verworfen oder korrigiert, aber nicht neu angefordert**. Die Wiederanforderung ist Aufgabe der Schicht 4 (TCP).

---

## 🔍 Der Ethernet-Frame

Daten werden auf Schicht 2 in **Frames** eingekapselt. Jeder Frame besteht aus:

```
┌──────────┬─────────────┬──────────┬─────────────┬────────────┐
│  Header  │  Adresse    │ Daten    │  Payload    │  Trailer   │
│          │ (MAC)       │ (IPv4)   │ (Daten)     │ (Prüfsumme)│
└──────────┴─────────────┴──────────┴─────────────┴────────────┘
```

**Frame-Aufbau:**
- **Header:** Steuersignale (Präambel, Start of Frame Delimiter)
- **Quell- & Ziel-MAC-Adresse:** Eindeutige physische Adressen (6 Byte je)
- **Payload (Nutzdaten):** Die eigentlichen Daten (bis 1500 Bytes bei Standard Ethernet)
- **Trailer:** Prüfsumme (CRC) zur Fehlererkennung

---

## 📍 MAC-Adresse (Media Access Control)

Die **MAC-Adresse** ist die physische Adresse einer Netzwerkkarte und ist im lokalen Netzwerk eindeutig.

### **Format & Aufbau**

- **Länge:** 6 Byte (48 Bit)
- **Darstellung:** Hexadezimale Zahlenpaare, getrennt durch Bindestriche oder Doppelpunkte
- **Beispiel:** `00-11-E3-AB-4D-EF` oder `00:11:E3:AB:4D:EF`

### **Zusammensetzung**

```
00-11-E3  :  AB-4D-EF
Hersteller    Seriennummer
(3 Byte)      (3 Byte)
```

- **Erste 3 Byte:** **Herstellerkennung (OUI – Organizationally Unique Identifier)**
  - Über OUI-Listen der IEEE oder Online-Datenbanken ermittelbar
  - Beispiel: `3COM`, `Intel`, etc.
- **Letzte 3 Byte:** **Seriennummer der Karte**
  - Vom Hersteller eindeutig vergeben

### **Besonderheiten**

- Jede Netzwerkschnittstelle hat eine **eindeutige MAC-Adresse**
- Auf **Windows-Systemen:** Über Konsole auslesen mit `ipconfig /all` (wird als "Physische Adresse" angezeigt)
- Früher: Netzwerkadapter als separate Steckkarten
- Heute: In alle Geräte integriert (Desktop-PCs, Laptops, seit ~2000 Standard)

---

## 🔌 Netzwerkadapter (NIC)

Der **Netzwerkadapter** verbindet ein Gerät mit dem Netz. Er sitzt auf Schicht 1 und 2.

### **Typen von Adaptern**

| Typ | Beschreibung | Einsatz |
|-----|-------------|---------|
| **Ethernet-NIC** | Standard mit RJ45-Anschluss | Desktop-PCs, Laptops, Server |
| **WLAN-Adapter** | USB-Stick oder intern | Drahtlose Verbindungen |
| **Glasfaser-NIC** | Mit SFP/SFP+ Port | Hochgeschwindigkeits-Backbone |
| **LTE/Mobilfunk** | USB-Stick oder intern | Mobile Konnektivität |

---

## 🖥️ Switches – Die intelligenten Hubs der Schicht 2

Ein **Switch** arbeitet auf Basis von MAC-Adressen und bildet das Zentrum moderner LANs.

### **Was macht ein Switch?**

| Eigenschaft | Hub | Switch |
|-------------|-----|--------|
| **Arbeitsschicht** | Schicht 1 | Schicht 2 |
| **Adressierungsart** | Broadcast | MAC-Adressen |
| **Geschwindigkeit** | Niedrig | Hoch |
| **Duplex-Modus** | Half-Duplex | Full-Duplex |
| **Intelligenz** | Keine | MAC-Tabelle |

### **Managed vs. Unmanaged Switch**

**Unmanaged Switch:**
- Plug-and-Play, keine Konfiguration nötig
- Leitet Frames automatisch weiter
- Günstig, einfach
- Für kleine Netzwerke ausreichend

**Managed Switch:**
- Konfigurierbar (Web-Interface, CLI)
- VLAN-Unterstützung (virtuelle Netzwerk-Isolation)
- QoS (Quality of Service) – Priorisierung von Verkehr
- Portüberwachung und Netzwerkmanagement
- Für Enterprise-Umgebungen

---

### **Wie Switches MAC-Adressen lernen**

Ein Switch erstellt sich beim Betrieb automatisch eine **MAC-Adresstabelle**:

```
Schritt 1: Lernen (Learning)
├─ Computer A sendet Daten an Computer B
└─ Switch liest Quell-MAC von A aus → trägt A + Port in Tabelle ein

Schritt 2: Fluten (Flooding)
├─ Switch kennt noch nicht, auf welchem Port B sitzt
└─ Sendet Frame an ALLE Ports außer dem Quell-Port

Schritt 3: Eintragung des Ziels
├─ Computer B antwortet
└─ Switch lernt B's MAC + Port

Schritt 4: Switching
├─ Fortan leitet Switch Frames direkt zwischen A und B weiter
└─ Andere Netzwerk-Geräte werden nicht belastet

Schritt 5: Alterung (Aging)
├─ Dynamische Einträge verfallen nach ca. 300 Sekunden
└─ Schafft Platz für neue Einträge
```

**Resultat:** Mit dieser Methode baut der Switch automatisch seine MAC-Tabelle auf und optimiert die Netzwerkleistung.

---

## 🌉 STP – Spanning Tree Protocol

In großen, redundanten Netzwerken können sich **Schleifen** bilden, wenn mehrere Pfade zwischen Switches existieren. Dies führt zu **Frame-Doppelung** und Chaos.

Das **Spanning Tree Protocol (STP)** verhindert Schleifen, indem es eine baumförmige, schleifenfreie Netzwerkstruktur schafft.

### **STP-Funktionsweise**

```
Schritt 1: Austausch von BPDUs
├─ Switches senden Bridge Protocol Data Units
└─ Enthalten Switch-ID und Leitungskosten

Schritt 2: Root-Switch-Wahl
├─ Switch mit kleinster ID wird Root-Switch
└─ Alle anderen orientieren sich daran

Schritt 3: Pfad-Bestimmung
├─ Jeder Switch wählt Verbindung mit niedrigsten Leitungskosten
├─ Root Port: Zum Root-Switch
└─ Designated Port: Weiterleitung zu anderen Switches

Schritt 4: Blockierung
└─ Alternative Pfade werden logisch deaktiviert (Backup)

Schritt 5: Ausfallsicherheit
├─ Fällt eine Leitung aus, reorganisiert sich das Netz automatisch
└─ Kurze Unterbrechung, kein Admin-Eingriff nötig
```

---

## 🔄 ARP – Address Resolution Protocol

Wie findet ein Computer die MAC-Adresse eines anderen Computers, wenn er nur die **IP-Adresse** kennt?

Die Antwort: **ARP**

### **ARP-Prozess (4 Schritte)**

```
1. ARP-Anfrage (Broadcast):
   Client: "Wer hat die IP 192.168.1.100?"
   
2. Broadcast im LAN:
   Client sendet die Frage an ALLE (Broadcast-MAC)
   
3. ARP-Antwort:
   Device mit 192.168.1.100: "Ich bin es! Meine MAC ist 00:11:E3:AB:4D:EF"
   
4. Direkter Datentransfer:
   Client sendet fortan Frames direkt an diese MAC-Adresse
```

**ARP-Cache:**
- Clients speichern IP ↔ MAC-Mappings lokal
- Windows: `arp -a` zeigt den ARP-Cache an

---

## 📡 Protokolle der Schicht 2

| Protokoll | Beschreibung | Einsatz |
|-----------|-------------|---------|
| **LLC/MAC** | Logical Link Control + Media Access Control | Grundlage moderner LANs |
| **Ethernet** | IEEE 802.3, dominantstes LAN-Protokoll | Quasi-Standard weltweit |
| **PPP** | Point-to-Point Protocol | Modem, ISDN, serielle Verbindungen |
| **HDLC** | High-Level Data Link Control | Zuverlässige serielle Kommunikation |
| **ARP** | Address Resolution Protocol | IP ↔ MAC-Auflösung |
| **X.75** | Breitband-Übertragungsprotokoll | Internationale Datennetze |
| **V.120** | Modem-Protokoll | ISDN-Datentransfer |

---

## 📊 OSI-Modell – Übersichtstabelle

| Schicht | Name | Aufgabe | Dateneinheit | Protokolle |
|---------|------|---------|--------------|-----------|
| **7** | 🖥️ Anwendung | Benutzerkommunikation | Data | HTTP, FTP, SMTP |
| **6** | 🎨 Darstellung | Formatierung | Data | Telnet, NetBIOS |
| **5** | 🔐 Sitzung | Verbindungsverwaltung | Data | TFTP |
| **4** | 🚚 Transport | Ende-zu-Ende | Segment | TCP, UDP |
| **3** | 🗺️ Vermittlung | Routing | Packet | IP, ICMP |
| **2** | 🔗 **Sicherung** | **Fehlerbehandlung** | **Frame** | **MAC, ARP, Ethernet** |
| **1** | ⚡ Bitübertragung | Physische Signale | Bit | Token Ring, FDDI |

---

## 📚 Glossar-Begriffe aus dieser Schicht

- **MAC-Adresse:** Physische Adresse einer Netzwerkkarte
- **Frame:** Datenpakete auf Schicht 2 mit Header/Trailer
- **Switch:** Intelligentes Netzwerkgerät mit MAC-Lernfähigkeit
- **Spanning Tree Protocol:** Verhindert Schleifen in redundanten Netzwerken
- **ARP:** Protokoll zur Auflösung von IP → MAC-Adressen
- **NIC:** Netzwerkkarte (Network Interface Card)

→ [Vollständiges OSI-Glossar](/osi/glossar/)

---

## 🔗 Navigation

| ← Zurück | Übersicht | Weiter → |
|----------|-----------|----------|
| [Schicht 1: Bitübertragung](/osi/01-bitübertragung/) | [Zum OSI-Modell](/osi/) | [Schicht 3: Vermittlung](/osi/03-vermittlung/) |
