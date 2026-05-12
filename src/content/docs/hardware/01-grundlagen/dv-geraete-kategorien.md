---
title: DV-Geräte Kategorien
description: Unterschiedliche Typen von Computersystemen und ihre Einsatzbereiche
---

IT-Systeme lassen sich nach ihrer **Leistung**, ihrem **Einsatzbereich** und ihrer **Architektur** in verschiedene Kategorien einteilen. Jede Kategorie hat spezifische Anforderungen und Einsatzszenarien.

## 🏢 Übersicht der Gerätekategorien

### 1. Supercomputer

**Zweck:**  
Lösung hochkomplexer, rechenintensiver Aufgaben mit massiven Datenmengen.

**Besonderheiten:**

- **Tausende bis Millionen von Prozessoren**
- Extrem hohe Parallelisierung
- Spezialisierte Kühlsysteme (flüssiges Helium)
- Kosten: Millionen von Euro

**Typische Einsatzgebiete:**

- Wetter- und Klimasimulation
- Molekulare Modellierung
- Astrophysik und Forschung
- Kryptographische Berechnungen
- KI und Machine Learning Training

**Leistungsmessung:**

- **FLOPS** (Floating Point Operations Per Second)
- Petaflops = 10^15 Operationen/Sekunde
- Modern: Exaflops (10^18 FLOPS) in Erreichen

**Beispiele:**

- Fugaku (Japan): ~442 Petaflops
- Summit (USA): ~200 Petaflops

---

### 2. Mainframe

**Zweck:**  
Zuverlässige, kontinuierliche Verarbeitung massiver Datenmengen für kritische Unternehmensanwendungen.

**Besonderheiten:**

- Fokus auf **Zuverlässigkeit** statt Geschwindigkeit
- Redundante Systeme (Fehlertoleranz)
- 24/7 Verfügbarkeit ohne Ausfallzeiten
- Große Mengen an RAM (oft TB-Bereich)
- Spezielle Betriebssysteme (z.B. z/OS)

**Typische Einsatzgebiete:**

- Bankensysteme
- Versicherungen
- Staatliche Verwaltung
- Großes Inventarverwaltung
- Transaktionsabwicklung

**Leistungsmessung:**

- **Durchsatz** (Transactions Per Second)
- **Verfügbarkeit** (99.99%+ Uptime)
- **Datensicherheit**

**Hersteller:**

- IBM (Marktführer)
- Fujitsu

---

### 3. Server

**Zweck:**  
Zentrale Verwaltung von Ressourcen und Diensten in einem Netzwerk. Bearbeitet Anfragen von vielen Clients gleichzeitig.

**Besonderheiten:**

- Läuft kontinuierlich (24/7)
- Netzwerkanbindung essenziell
- Multi-Prozessor / Multi-Core Standard
- Redundante Stromversorgung (USV)
- Große Festplattenkapazität
- Server-Betriebssysteme (Linux, Windows Server)

**Typische Einsatzgebiete:**

- Webserver (HTTP-Anfragen)
- Datenbankserver
- Mail-Server
- Dateiserver
- Anwendungsserver
- Cloud-Infrastructure

**Leistungsmessung:**

- **Netzwerklast** (Anfragen/Sekunde)
- **Response-Zeit**
- **Speicher-Durchsatz**

**Kategorisierung von Servern:**

- **Tower Server**: Groß, einfacher zu warten
- **Rack Server**: Platzsparend, in Rechenzentren
- **Blade Server**: Ultra-kompakt

---

### 4. Terminal / Thin Client

**Zweck:**  
Reine Schnittstelle für Benutzer ohne eigene Rechenleistung. Alle Berechnungen erfolgen zentral auf einem Server.

**Besonderheiten:**

- **Keine lokale Rechenleistung**
- Eingabegeräte: Tastatur, Maus
- Ausgabegerät: Monitor
- Netzwerkverbindung notwendig
- Sehr wartungsarm

**Historischer Kontext (1960er-1980er):**

- Terminals waren an **Mainframes** über lange Leitungen verbunden
- **Dumb Terminals**: NUR Eingabe/Ausgabe, keine Intelligenz

**Moderne Verwendung:**

- **Thin Clients**: PC mit minimaler Ausstattung
- RDP/VNC Clients für Remote-Zugriff
- Browser-basierte Anwendungen (Web-Apps)
- Virtualisierte Desktops (VDI – Virtual Desktop Infrastructure)

**Vorteile:**

- Sehr günstig in der Anschaffung
- Zentrale Datenkontrolle
- Einfache Administration

**Nachteile:**

- Abhängig von Netzwerk und Server
- Latenz bei langsamen Verbindungen

---

### 5. Personal Computer (PC)

**Zweck:**  
Universelle Rechenmaschine für einen oder wenige Benutzer mit Schwerpunkt auf Benutzerfreundlichkeit.

**Besonderheiten:**

- Eigenständige Rechenleistung
- Vielfältige Verwendung (Arbeit, Freizeit, Lernen)
- Großes Ökosystem an Software
- Multi-User und Multitasking
- Moderate Kosten

**Kategorien:**

- **Desktop-PC**: Stationär (Monitor, Tastatur, Maus separat)
- **Laptop/Notebook**: Mobil mit Akku
- **Tablet**: Touchscreen-orientiert, weniger Speicher
- **Workstation**: PC mit erhöhter Leistung für spezielle Anwendungen

---

### 6. Embedded Systems / Mikrocontroller

**Zweck:**  
Spezialisierte, dedizierte Rechenaufgaben in Geräten des Alltags.

**Besonderheiten:**

- **Sehr begrenzte Ressourcen**: RAM in KB, ROM in KB
- Echtzeit-Anforderungen oft kritisch
- Niedriger Stromverbrauch essentiell
- Spezifische Aufgabe (nicht universell)

**Beispiele:**

- Microcontroller in Waschmaschinen
- Arduino / Raspberry Pi Projekte
- Automotronik (ABS, Airbag-Controller)
- Medizinische Geräte
- IoT-Sensoren

---

## 📊 Vergleichstabelle

| Kriterium            | Supercomputer | Mainframe      | Server           | Terminal            | PC                |
| -------------------- | ------------- | -------------- | ---------------- | ------------------- | ----------------- |
| **Leistung**         | Extrem        | Sehr hoch      | Hoch             | Keine               | Mittel            |
| **Zuverlässigkeit**  | Mittel        | Sehr hoch      | Hoch             | Keine               | Mittel            |
| **Kosten**           | Millionen     | Millionen      | Tausende         | Hunderte            | Hunderte-Tausende |
| **Fokus**            | Berechnung    | Datendurchsatz | Netzwerk-Service | Benutzer-I/O        | Universell        |
| **Zielgruppe**       | Forschung     | Enterprise     | Enterprise/Cloud | Enterprise (Legacy) | Verbraucher/SMB   |
| **Parallelisierung** | Massiv        | Hoch           | Mittel-Hoch      | Keine               | Mittel            |

---

## 🎯 Wichtige Erkenntnisse

1. **Spezialisierung**: Jeder Geräte-Typ ist für seinen Einsatzzweck optimiert
2. **Kosteneffizienz**: Die teuersten Systeme sind oft die zuverlässigsten
3. **Skalierbarkeit**: Von einzelnen Transistoren bis zu Millionen von Prozessoren
4. **Vernetzung**: Moderne Systeme arbeiten zunehmend zusammen über Netzwerke

---

## 🔗 Weiterführende Links

- [Evolution der Datenverarbeitung](/01-grundlagen/evolution-datenverarbeitung/)
- [Analog vs. Digital](/01-grundlagen/analog-digital/)
- [EVA-Prinzip](/02-eva-prinzip/) – Wie diese Geräte Daten verarbeiten
