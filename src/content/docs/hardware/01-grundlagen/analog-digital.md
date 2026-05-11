---
title: Analog vs. Digital
description: Der fundamentale Unterschied zwischen analogen und digitalen Signalen
---

# Analog vs. Digital

Dieser Abschnitt erklärt einen der fundamentalsten Unterschiede in der Informatik: den Unterschied zwischen **analogen** und **digitalen** Signalen.

## 📊 Analoge Signale

### Definition

**Analoge Signale** sind kontinuierlich und können **unendlich viele** unterschiedliche Werte annehmen.

### Charakteristiken

- **Wertebereich**: Kontinuierlich von Minimum zu Maximum
- **Abstufungen**: Unendlich viele mögliche Zwischenwerte
- **Beispiele in der Natur**:
  - Lautstärke von Schall
  - Helligkeit von Licht
  - Temperatur
  - Druck
  - Bewegungsgeschwindigkeit

### Vorteile

✅ **Hohe Auflösung**: Sehr detaillierte Informationen möglich  
✅ **Natürlich**: Entspricht der physikalischen Realität  
✅ **Einfach zu erzeugen**: Viele natürliche Quellen sind analog

### Nachteile

❌ **Anfällig für Störungen**: Rauschen verfälscht das Signal  
❌ **Schwer zu speichern**: Keine digitale Speicherung möglich  
❌ **Schwer zu verarbeiten**: Analoge Computer sind kompliziert

---

## 🔢 Digitale Signale

### Definition

**Digitale Signale** sind **diskret** (einzeln, unterscheidbar) und können nur eine **begrenzte Anzahl** von definierten Werten annehmen.

### Charakteristiken

- **Wertebereich**: Diskrete Werte (z.B. nur 0 oder 1)
- **Abstufungen**: Endlich viele unterschiedliche Zustände
- **Basis**: Fast immer binär (0 und 1, HIGH und LOW)

### Wie Digitalisierung funktioniert

Um ein analoges Signal zu digitalisieren, wird es in **zeitliche Abstände** (Samples) aufgeteilt und jede Probe wird auf einen **diskreten Wert** gerundet:

```
Analoges Wellenform:  ~~~~~\/~~~~~
                       ↓ Sampling
Digitale Werte:       1 0 0 1 1 0 1 0
```

### Vorteile

✅ **Fehlerresistent**: Digitale Werte bleiben auch mit Rauschen stabil  
✅ **Speicherbar**: Leicht auf Festplatten, SSDs, Flash zu speichern  
✅ **Verarbeitbar**: Computer können digital sehr effizient arbeiten  
✅ **Kopierbar**: Perfekte Kopien ohne Qualitätsverlust möglich  
✅ **Komprimierbar**: Datenmengen lassen sich durch Kompression reduzieren

### Nachteile

❌ **Auflösungsverlust**: Diskretisierung verliert Details des Originals  
❌ **Abtastfrequenz-Limit**: Nyquist-Theorem: max. 50% der Abtastrate  
❌ **Zusätzliche Prozesse**: Analog-zu-Digital-Konvertierung nötig

---

## 🎯 Warum Computer Digital sind

Computer brauchen digitale Signale, weil:

1. **Elektronische Logik**: 0 und 1 lassen sich einfach mit Spannung darstellen
   - 0 = Kein Strom (0V)
   - 1 = Strom vorhanden (5V, 3.3V, etc.)

2. **Zuverlässigkeit**: Kleine Störungen beeinflussen nicht die Erkennung

3. **Schnelligkeit**: Digitale Schaltkreise können extrem schnell arbeiten

4. **Speicherung**: Digitale Daten können perfekt archiviert werden

---

## 📈 Sampling & Quantisierung

Wenn ein analoges Signal in digital konvertiert wird, gibt es zwei wichtige Prozesse:

### Sampling (Zeitliche Diskretisierung)

Die analoge Kurve wird in zeitlichen Abständen abgetastet:

- Je größer die Frequenz → desto bessere Qualität
- **Faustregel**: Abtastfrequenz ≥ 2× höchste Frequenz im Signal (Nyquist)

### Quantisierung (Wert-Diskretisierung)

Jeder Sample wird auf eine diskrete Stufe gerundet:

- 8-Bit: 256 mögliche Werte
- 16-Bit: 65.536 mögliche Werte
- 24-Bit: 16 Millionen mögliche Werte

Je höher die Bit-Tiefe → desto präziser die Werte.

---

## 🔄 Praktische Beispiele

### Audio-Digitalisierung

- **CD-Standard**: 44,1 kHz Sample-Rate, 16-Bit Quantisierung
- **Smartphone**: 48 kHz, 24-Bit für hochwertige Aufnahmen

### Video-Digitalisierung

- **Farbwert pro Pixel**: 8-Bit pro Kanal (R, G, B) = 256×256×256 Farben

### Foto-Digitalisierung

- **Digitalkamera**: 12-14 Bit pro Farbkanal (RAW-Format)
- **JPEG**: 8-Bit pro Kanal (mit Kompression)

---

## ⚖️ Vergleichstabelle

| Merkmal                | Analog         | Digital     |
| ---------------------- | -------------- | ----------- |
| **Wertebereich**       | Kontinuierlich | Diskret     |
| **Abstufungen**        | Unendlich      | Endlich     |
| **Fehleranfälligkeit** | Hoch           | Niedrig     |
| **Speicherbarkeit**    | Schwierig      | Einfach     |
| **Verarbeitbarkeit**   | Schwierig      | Einfach     |
| **Qualität bei Kopie** | Verschlechtert | Unverändert |
| **Kompressibilität**   | Schwierig      | Einfach     |

---

## 💡 Fazit

**Computer sind digital**, weil digitale Signale:

- Zuverlässig sind
- Gespeichert und verarbeitet werden können
- Fehlersicher sind

Aber **die reale Welt ist analog**. Deshalb brauchen wir:

- **ADC** (Analog-to-Digital Converter): Umwandlung von analog zu digital
- **DAC** (Digital-to-Analog Converter): Umwandlung von digital zu analog

---

## 🔗 Weiterführende Links

- [Evolution der Datenverarbeitung](/01-grundlagen/evolution-datenverarbeitung/)
- [DV-Geräte Kategorien](/01-grundlagen/dv-geraete-kategorien/)
- [EVA-Prinzip](/02-eva-prinzip/) – Wie Computer Daten verarbeiten
