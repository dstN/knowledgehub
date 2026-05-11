---
title: Ausgabeeinheit
description: Wie Computer Ergebnisse präsentieren
---

# Ausgabeeinheit (Output/A)

Die **Ausgabeeinheit** gibt die verarbeiteten Ergebnisse an den Benutzer oder andere Systeme weiter.

## 🎯 Funktion

> **Konvertiert digitale Daten in menschenlesbbare oder verarbeitbare Formate und präsentiert sie dem Benutzer oder übermittelt sie an andere Systeme.**

## 🖥️ Hardware-Komponenten

### Visuelle Ausgaben

| Gerät | Funktion | Datenformat |
|-------|----------|------------|
| **Monitor/Display** | Bild-Anzeige | RGB-Pixel, 60-144 Hz |
| **Beamer** | Großflächige Projektion | RGB-Signal |
| **LED/LCD-Anzeige** | Zahlen/Indikatoren | Einfache Zustände |

### Akustische Ausgaben

| Gerät | Funktion | Datenformat |
|-------|----------|------------|
| **Lautsprecher** | Soundwiedergabe | PCM-Audio, 48+ kHz |
| **Kopfhörer** | Persönliche Audiowiedergabe | Stereo/Surround |
| **Piezo-Buzzer** | Warntöne, Feedback | Simple Frequenzen |

### Physische Ausgaben

| Gerät | Funktion | Anwendung |
|-------|----------|-----------|
| **Drucker** | Papierdruck | Dokumente, Bilder |
| **3D-Drucker** | Objekt-Erzeugung | Prototypen |
| **Motor-Steuerung** | Bewegung | Roboter, Automatisierung |
| **LED/Backlight** | Lichtsignale | Statusanzeige |

### Netzwerk-Ausgaben

| Typ | Beschreibung | Beispiel |
|-----|-------------|---------|
| **LAN/WLAN** | Daten an Netzwerk senden | Upload, Streaming |
| **Internet** | Cloud-Synchronisation | E-Mail senden, Cloud-Backup |
| **USB** | Daten zu externem Gerät | Datei-Transfer |

## 🔄 Digital-zu-Analog Konvertierung (DAC)

Der zentrale Prozess der Ausgabeeinheit ist die **Digital-to-Analog-Konvertierung**:

```
Computer (Digital) → DAC → Reale Welt (Analog)

Beispiel:
Audio-Daten (101...) → DAC → Soundwellen → Lautsprecher
```

### Beispiel: Monitor-Ansteuerung

1. **GPU/CPU**: Berechnet Bilddaten (Pixel-RGB-Werte)
2. **Video-RAM**: Speichert aktuelle Bildinformation
3. **Video-DAC**: Konvertiert digital → analog (HDMI/DisplayPort moderne digitale Standards)
4. **Monitor**: Zeigt Bild mit 60+ Bildern/Sekunde

---

## 🎬 Bildschirm-Auflösung & Refresh-Rate

### Auflösung
- **HD**: 1920×1080 Pixel
- **4K**: 3840×2160 Pixel
- **Gesamt Pixel**: Auflösung × Farbtiefe

### Refresh-Rate (Hz)
- **60 Hz**: Standard, 60 Bilder/Sekunde
- **144 Hz**: Gaming-Standard
- **240+ Hz**: Professional/Esports

> Höhere Refresh-Rate = flüssigere Bewegungen, aber mehr Rechenleistung nötig

---

## 📊 Ausgabe-Technologien

### Synchrone Ausgabe
- Ausgabe erfolgt direkt nach Verarbeitung
- Beispiel: Berechnungsergebnis auf Bildschirm

### Asynchrone Ausgabe
- Ausgabe verzögert oder gepuffert
- Beispiel: Druck-Spool (Druckauftrag wird in Queue gestellt)

### Streaming-Ausgabe
- Kontinuierliche Ausgabe
- Beispiel: Video-Playback, Live-Streaming

---

## 🔗 Weiterführende Links

- [Das EVA-Prinzip Übersicht](/02-eva-prinzip/)
- [Eingabeeinheit](/02-eva-prinzip/eingabeeinheit/)
- [Verarbeitungseinheit](/02-eva-prinzip/verarbeitungseinheit/)
