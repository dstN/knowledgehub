---
title: Netzwerk-Redundanz & Spanning Tree Protocol (STP)
description: Aufbau redundanter Netzwerke und Schleifenvermeidung durch STP nach IEEE 802.1D
---

## Das Problem ohne redundante Verbindungen

In modernen Netzwerkarchitekturen ist die ständige Verfügbarkeit von Diensten und Datenpfaden geschäftskritisch. Fehlt Redundanz in der Netzwerk-Topologie, entsteht das **Single Point of Failure (SPOF)** Problem.

### Single Point of Failure (SPOF)

Ohne Redundanz stellt jede einzelne Komponente – ob Switch, Router oder Kabel – einen potenziellen Ausfallpunkt dar. Fällt dieses eine Glied aus, bricht die gesamte nachgelagerte Kommunikation zusammen.

**Konkrete Auswirkungen in der Praxis:**

- **Totalausfall bei Leitungsunterbrechung**: Baggerarbeiten, Kabelbrüche oder mangelhafte Steckverbindungen führen sofort zur Isolation ganzer Netzwerksegmente
- **Hardware-Defekte**: Netzteilausfälle oder logische Abstürze eines zentralen Switches trennen alle angebundenen Clients vom restlichen Firmennetzwerk und dem Internet
- **Erzwungene Wartungsfenster mit Downtime**: Jedes Firmware-Update, jede Hardware-Erweiterung und jeder Komponentenaustausch erfordert das Abschalten des Geräts – unvermeidbare Betriebsunterbrechung

---

## Das Paradoxon der Redundanz: Schleifenbildung (Loops)

Um den Single Point of Failure zu eliminieren, liegt es nahe, physische Redundanzen aufzubauen – also Switches über mehrere Kabel parallel miteinander zu verbinden. Auf **Layer 2** (Sicherungsschicht / Ethernet) führt dies jedoch ohne Kontrollmechanismen zu fatalen logischen Problemen.

**Das Kernproblem**: Ethernet-Frames besitzen im Gegensatz zu Layer-3-Paketen (IP) kein **TTL-Feld** (Time-to-Live). Sie kreisen unendlich im Kreis, sofern eine physikalische Schleife existiert.

### Die drei Kernprobleme unkontrollierter Loops

#### 1. Broadcast-Stürme (Broadcast Storms)

Erhält ein Switch einen Broadcast-Frame (z.B. eine ARP-Anfrage), leitet er diesen an alle Ports außer dem Empfangsport weiter. In einer Schleife kopieren und spiegeln die Switches diesen Frame endlos, bis:
- Die gesamte verfügbare Bandbreite ausgelastet ist
- Die Switches aufgrund der CPU-Last kollabieren
- Das gesamte Netzwerk zum Erliegen kommt

#### 2. Instabilität der MAC-Adresstabelle (MAC Table Flipping)

Da derselbe Frame aus verschiedenen Richtungen über redundante Ports am Switch eintrifft, überschreibt der Switch **permanent** die Zuordnung in seiner **CAM-Tabelle** (Content Addressable Memory):
- Erheblicher Verarbeitungs-Overhead
- Permanente Neu-Lernenvorgänge
- Ineffiziente Switching-Performance

#### 3. Mehrfachzustellung von Frames (Multiple Frame Transmission)

Unicast-Frames werden fälschlicherweise **dupliziert** und kommen mehrfach am Ziel-Client an, was:
- Protokolle höherer Schichten verwirrt
- Duplikate zu Datenverlust oder Fehlfunktionen führen
- Die Datenintegrität gefährdet

---

## Die Lösung: Spanning Tree Protocol (STP)

Das **Spanning Tree Protocol (STP)**, standardisiert nach **IEEE 802.1D**, löst dieses Paradoxon. Es sorgt dafür, dass trotz physikalisch redundanter Verkabelung eine **logisch schleifenfreie Baumtopologie** berechnet wird.

**Kernkonzept**: Redundante Wege werden im Normalbetrieb **blockiert** und erst bei einem Ausfall **automatisch aktiviert**.

### Der STP-Algorithmus in vier Schritten

| Schritt | Aktion | Beschreibung |
|---------|--------|-------------|
| **1** | Wahl der Root Bridge | Der Switch mit der niedrigsten **Bridge ID** (Priorität + MAC-Adresse) wird zum logischen Zentrum des Netzwerks ernannt |
| **2** | Bestimmung der Root Ports | Jeder Nicht-Root-Switch ermittelt den Port, der die **geringsten kumulierten Pfadkosten** (Path Cost) zur Root Bridge aufweist |
| **3** | Bestimmung der Designated Ports | Pro Netzwerksegment wird der Port ausgewählt, der den besten Weg zur Root Bridge bietet – dieser leitet den Verkehr weiter |
| **4** | Blockieren verbleibender Ports | Alle Ports, die weder Root Port noch Designated Port sind, wechseln in den Zustand **Blocking** – logische Schleifen sind damit eliminiert |

### Wichtige STP-Portzustände (Port States)

Ein STP-Port durchläuft verschiedene Phasen, um Schleifen während der Topologie-Konvergenz zu verhindern:

```
Blocking → Listening → Learning → Forwarding
(nur BPDU-  (prüft    (baut MAC- (leitet
 Empfang)  Topologie) Tabelle)   Datenverkehr)
```

**Erklärung der Zustände:**

- **Blocking**: Port empfängt nur Bridge Protocol Data Units (BPDUs), leitet aber keinen Datenverkehr weiter. Schützt vor Schleifen
- **Listening**: Switch horcht Topologie-Informationen ab und prüft, ob dieser Port zum spannenden Baum gehört
- **Learning**: MAC-Adressen werden gelernt und die Forwarding-Datenbank aufgebaut. Kein Datenverkehr wird noch weitergeleitet
- **Forwarding**: Port leitet normalen Datenverkehr weiter. Normaler Betriebszustand für aktive Ports

---

## Moderne Weiterentwicklungen

Das klassische STP benötigt im Ernstfall bis zu **50 Sekunden**, um auf einen Leitungsausfall zu reagieren und den Alternativpfad freizuschalten. Für moderne Unternehmensnetzwerke ist diese Konvergenzzeit zu lang. Daher wurden verbesserte Standards entwickelt:

### Rapid Spanning Tree Protocol (RSTP / IEEE 802.1w)

- **Konvergenzzeit**: Reduziert auf wenige Sekunden (oft unter 1–2 Sekunden)
- **Verbesserung**: Aktives Synchronisationsverfahren statt passives Warten
- **Neue Portrollen**: Einführung des **Alternate Port** für schnellere Konvergenz
- **Rückwärtskompatibilität**: Funktioniert mit klassischem STP

### Multiple Spanning Tree Protocol (MSTP / IEEE 802.1s)

- **VLAN-Support**: Ermöglicht mehrere Spanning Tree Instanzen
- **Lastverteilung**: Redundante Leitungen können durch **Load Balancing** aktiv genutzt werden
- **Effizienz**: Statt einen globalen Spanning Tree zu berechnen, werden mehrere VLANs in logischen Instanzen zusammengefasst
- **Skalierbarkeit**: Besser für große Netzwerke mit vielen VLANs

---

## Wichtige Begriffe

- **Bridge ID**: Eindeutige Kennung eines Switches (Priorität + MAC-Adresse)
- **Path Cost**: Kumulierte Kosten eines Pfads (abhängig von Linkgeschwindigkeiten)
- **BPDU** (Bridge Protocol Data Unit): Steuerpakete, die zwischen Switches ausgetauscht werden
- **Topologie-Konvergenz**: Der Prozess, bis STP stabil ist
- **Designated Port**: Der beste Port eines Segmentes zur Root Bridge
- **Root Port**: Der beste Port eines Non-Root-Switches zur Root Bridge
