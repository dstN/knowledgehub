---
title: Eingabeeinheit
description: Wie Daten in ein IT-System gelangen
---

Die **Eingabeeinheit** ist das Tor zum Computer. Sie nimmt Daten von außen auf und konvertiert sie in ein maschinenlesbares Format.

## 🎯 Funktion

Die Eingabeeinheit hat eine zentrale Aufgabe:

> **Nimmt strukturierte Daten vom Benutzer oder anderen Systemen entgegen und wandelt sie in digitale Signale um, die die CPU verarbeiten kann.**

## 🖥️ Hardware-Komponenten

### Klassische Eingabegeräte

| Gerät           | Funktion                   | Datentyp             | Beispiel               |
| --------------- | -------------------------- | -------------------- | ---------------------- |
| **Tastatur**    | Text-Eingabe               | ASCII/Unicode        | Zeichen, Befehle       |
| **Maus**        | Pointer-Bewegung           | Koordinaten          | X/Y Position, Klicks   |
| **Touchscreen** | Direkte Bildschirm-Eingabe | Koordinaten + Gesten | Tippen, Wischen, Pinch |
| **Trackpad**    | Laptop-Navigation          | Koordinaten          | Bewegung, Gesten       |

### Spezialisierte Eingabegeräte

| Gerät                  | Einsatzgebiet           | Input                        |
| ---------------------- | ----------------------- | ---------------------------- |
| **Barcode-Scanner**    | Einzelhandel, Logistik  | Artikel-ID als Barcode       |
| **Kreditkarten-Leser** | Zahlungsterminals       | Kartendat und PIN            |
| **Mikrofon**           | Audio-Aufnahme          | Soundwellen → digitale Werte |
| **Kamera/Webcam**      | Video/Fotos             | Lichtsignale → Pixel-Daten   |
| **Sensor**             | IoT/Industrie 4.0       | Temperatur, Druck, Bewegung  |
| **Scanner**            | Dokumentdigitalisierung | Papier → Bilddaten           |

### Netzwerk-Eingaben

| Typ           | Quelle                  | Beispiel                      |
| ------------- | ----------------------- | ----------------------------- |
| **LAN/WLAN**  | Andere Computer im Netz | Datei-Download, Browsing      |
| **Internet**  | Entfernte Server/Cloud  | E-Mails, Webinhalte           |
| **Bluetooth** | Drahtlose Peripherie    | Kopfhörer, Smartwatch         |
| **USB**       | Externe Geräte          | USB-Stick, externe Festplatte |

## 🔄 Von Analog zu Digital

Der zentrale Prozess der Eingabeeinheit ist die **Analog-Digital-Konvertierung (ADC)**:

```
Reale Welt (Analog)  →  Messung  →  Digitalisierung  →  Computer (Digital)

Beispiel:
Sprache (Schallwellen) → Mikrofon → ADC → PCM-Daten (0101...) → RAM
```

### Beispiel: Tastatur

1. **Benutzer drückt Taste**: Physikalischer Kontakt
2. **Scanning-Kreis erkennt**: "G-Taste wurde gedrückt"
3. **Hardware-Interrupt**: Signal an CPU "Eingabe vorhanden"
4. **Tastatur-Controller**: Konvertiert in ASCII-Code (71 dezimal = 'G')
5. **RAM**: ASCII-Wert wird im Speicher abgelegt (Tastatur-Buffer)
6. **Betriebssystem**: Liest Buffer und leitet an Anwendung weiter

---

## 🎮 Eingabe-Methoden

### 1. Manuelle Eingabe

- Direkter Benutzer-Input
- Beispiele: Tastatur, Maus, Touchscreen
- Synchron (sofort verarbeitet)

### 2. Automatische Eingabe

- Sensoren/externe Systeme liefern Daten
- Beispiele: Wetterstationen, Aktienquoten, IoT-Geräte
- Oft asynchron (periodisch oder ereignisgesteuert)

### 3. Datei/Stream-Eingabe

- Daten aus Speicher oder Netzwerk
- Beispiele: Filme abspielen, Dateien importieren
- Große Datenmengen möglich

---

## ⚡ Eingabe-Technologien

### Polling

Die CPU fragt regelmäßig: "Hat sich was geändert?"

- **Vorteil**: Einfach zu implementieren
- **Nachteil**: Ineffizient, verschwendet CPU-Zeit

### Interrupt-Driven

Das Eingabegerät signalisiert: "Daten vorhanden!"

- **Vorteil**: Effizient, schnelle Reaktion
- **Nachteil**: Komplexer zu programmieren

### DMA (Direct Memory Access)

Eingabegerät schreibt direkt in RAM, nicht über CPU

- **Vorteil**: Sehr schnell, CPU frei
- **Nachteil**: Teuer in Hardware

---

## 🔗 Weiterführende Links

- [Das EVA-Prinzip Übersicht](/02-eva-prinzip/)
- [Verarbeitungseinheit](/02-eva-prinzip/verarbeitungseinheit/)
- [Analog vs. Digital](/01-grundlagen/analog-digital/)
