---
title: Schicht 6 – Darstellungsschicht (Presentation Layer)
description: Datenformatierung, Verschlüsselung und Kompression
---

Die **Darstellungsschicht** ist das "Übersetzungsbüro" des OSI-Modells. Sie stellt sicher, dass Daten **unabhängig von ihrer Herkunft** korrekt interpretiert und dargestellt werden. Sie behandelt Formatierung, Verschlüsselung und Kompression.

## 🎯 Kernaufgaben der Schicht 6

- **Datenformatierung:** Konvertierung zwischen verschiedenen Datenformaten
- **Zeichensätze:** Sicherstellung, dass Text korrekt dargestellt wird (ASCII, EBCDIC, UTF-8)
- **Verschlüsselung:** Sicherung vertraulicher Daten
- **Kompression:** Reduktion der Dateigröße und Bandbreiteneinsparung
- **Syntaxprüfung:** Validierung der Datenstruktur

> 💡 **Kernidee:** Sender und Empfänger arbeiten intern möglicherweise mit völlig verschiedenen Formaten. Schicht 6 macht diese Unterschiede transparent.

---

## 📝 Datenformatierung & Zeichensätze

### **Das Problem: Unterschiedliche Systeme**

```
System A (Windows):      Daten: "Hallo"
                         Zeichensatz: ASCII (Western European)
                              ↓
                         Schicht 6: Konvertierung
                              ↓
System B (Linux/UTF-8):  Empfängt: "Hallo"
                         Zeichensatz: UTF-8 (Unicode)
                         Darstellung: Korrekt!
```

### **Wichtige Zeichensätze**

| Zeichensatz | Größe | Einsatz | Besonderheit |
|------------|-------|--------|-------------|
| **ASCII** | 7 Bit | Englische Texte, ältere Systeme | Nur lateinische Buchstaben, keine Umlaute |
| **EBCDIC** | 8 Bit | IBM Mainframes, Legacy-Systeme | Hauptsächlich historisch |
| **UTF-8** | 1–4 Bytes | Modern, Web, Unicode | Unterstützt alle Sprachen + Emojis |
| **Latin-1 (ISO-8859-1)** | 8 Bit | Westeuropäische Länder | Erweiterte ASCII mit Umlauten |

**Beispiel – Problem ohne Schicht 6:**
```
Sender (ASCII): "Café" (mit ASCII: kann nicht codiert werden!)
Empfänger sieht: "Caf?" oder Müll
          
Mit Schicht 6 (UTF-8):
Sender konvertiert zu UTF-8 → "Café" (4 Bytes)
Empfänger konvertiert zurück → "Café" ✓
```

---

## 🔒 Verschlüsselung

Die Schicht 6 kann Daten **verschlüsseln**, um Vertraulichkeit zu gewährleisten.

### **Einfache Konzepte**

#### **SSL/TLS (Secure Sockets Layer / Transport Layer Security)**

- **Einsatz:** HTTPS, sichere E-Mail, VPNs
- **Funktionsweise:** Öffentlich-Privat-Schlüssel-Kryptographie
- **Schutz:** Daten während der Übertragung sind lesbar nur für berechtigte Parteien

**Ablauf:**
```
1. Client & Server führen Handshake durch
2. Öffentliche Schlüssel werden ausgetauscht
3. Daten werden mit öffentlichem Schlüssel verschlüsselt
4. Empfänger entschlüsselt mit privatem Schlüssel
5. Kommunikation ist sicher
```

#### **Symmetrische Verschlüsselung**

- **Beide Parteien** nutzen **denselben Schlüssel** (Pre-shared Key)
- Schneller, aber Schlüsselaustausch ist problematisch
- Beispiel: AES, 3DES

#### **Asymmetrische Verschlüsselung**

- **Öffentlicher Schlüssel** (jedermann) + **Privater Schlüssel** (nur Besitzer)
- Sicherer Schlüsselaustausch
- Beispiel: RSA

---

## 🗜️ Kompression

Die Schicht 6 kann Daten **komprimieren**, um Bandbreite zu sparen und Übertragungen zu beschleunigen.

### **Kompressions-Methoden**

| Typ | Verlust | Einsatz | Kompression |
|-----|--------|---------|-------------|
| **GZIP** | Verlustfrei | Web (HTML, CSS, JavaScript) | Gut |
| **LZ4/ZSTD** | Verlustfrei | Archive, Backups | Sehr gut |
| **JPEG** | Mit Verlust | Fotos, Bilder | Ausgezeichnet |
| **MP3** | Mit Verlust | Audio | Ausgezeichnet |
| **H.264/H.265** | Mit Verlust | Video | Ausgezeichnet |

### **Praktisches Beispiel – Web-Kompression**

```
Webseite original: 2 MB HTML + CSS + JavaScript
        ↓ [GZIP-Kompression auf Schicht 6]
Über Netz: 200 KB (90% Einsparung!)
        ↓ [GZIP-Dekompression im Browser]
Angezeigt: 2 MB
```

**Browser-Request mit Kompression:**
```
GET / HTTP/1.1
Accept-Encoding: gzip, deflate, br
        ↓
Server antwortet:
Content-Encoding: gzip
Content-Length: 200000
[komprimierte Daten...]
```

---

## 🎬 Multimedia-Handling

Die Schicht 6 übersetzt auch Multimedia-Formate:

### **Bild-Formate**

| Format | Typ | Einsatz | Compression |
|--------|-----|--------|------------|
| **PNG** | Verlustfrei | Web, Grafiken, Icons | Gut |
| **JPEG** | Mit Verlust | Fotos | Ausgezeichnet |
| **WebP** | Mit Verlust | Modern Web | Besser als JPEG |
| **GIF** | Verlustfrei | Animationen, Icons | Mittelmäßig |

### **Video-Codecs**

| Codec | Eigenschaft | Einsatz | Dateigröße |
|-------|-----------|---------|-----------|
| **H.264** | Weit verbreitet, zuverlässig | Streaming, Kameras | Mittelmäßig |
| **H.265 (HEVC)** | Neuere, bessere Kompression | 4K Video, Streaming | Sehr klein |
| **VP9** | Von Google | YouTube, Web | Klein |
| **AV1** | Zukunftsstandard | Zukunfts-Streaming | Sehr klein |

---

## 🔤 Syntax-Validierung

Die Schicht 6 prüft die **Syntaxkorrektheit** von Daten:

### **Beispiel: JSON-Validierung**

```json
Korrekte Syntax (gültig):
{
  "name": "Max Mustermann",
  "alter": 30,
  "stadt": "Berlin"
}

Ungültige Syntax (Schicht 6 erkennt Fehler):
{
  "name": "Max Mustermann"
  "alter": 30,     ← Fehlendes Komma!
  "stadt": "Berlin"
}
```

---

## 📡 Protokolle der Schicht 6

| Protokoll | Beschreibung | Einsatz |
|-----------|-------------|---------|
| **SSL/TLS** | Verschlüsselte Kommunikation | HTTPS, sichere E-Mail, VPN |
| **MIME** | Multipurpose Internet Mail Extensions | E-Mail, Multimedia-Codierung |
| **MPEG** | Motion Picture Experts Group | Video- & Audio-Kompression |
| **JPEG/PNG/GIF** | Bildformat-Standards | Web-Bilder |
| **UTF-8/ASCII** | Zeichensatz-Konvertierung | Text-Encoding |

---

## 🌐 Praktische Beispiele

### **Beispiel 1: HTTPS-Webseite**

```
1. Browser fordert https://www.example.com an
   └─ Transport Layer (4): TCP-Verbindung

2. Presentation Layer (6):
   └─ TLS-Handshake
   └─ Öffentliche Schlüssel austauschen
   └─ Verschlüsselung aktivieren

3. HTML/CSS/JavaScript werden komprimiert (GZIP)

4. Über Netz: Alles verschlüsselt & komprimiert

5. Im Browser:
   └─ Daten werden dekomprimiert (GZIP)
   └─ Daten werden entschlüsselt (TLS)
   └─ HTML wird gerändert
```

### **Beispiel 2: Foto-Upload**

```
1. Benutzer lädt Foto hoch (JPEG, 3 MB)
   └─ Application Layer: Upload-Form
   └─ Transport Layer: HTTP-POST
   
2. Presentation Layer:
   └─ JPEG-Format wird erkannt
   └─ Foto wird GZIP-komprimiert (800 KB)
   └─ TLS-Verschlüsselung aktiv
   
3. Über Netzwerk: 800 KB, verschlüsselt
   
4. Server empfängt:
   └─ Daten entschlüsseln (TLS)
   └─ Daten dekomprimieren (GZIP)
   └─ JPEG-Format verifizieren
   └─ Foto wird verarbeitet/gespeichert
```

---

## 📊 OSI-Modell – Übersichtstabelle

| Schicht | Name | Aufgabe | Dateneinheit | Protokolle |
|---------|------|---------|--------------|-----------|
| **7** | 🖥️ Anwendung | Benutzerkommunikation | Data | HTTP, FTP, SMTP |
| **6** | 🎨 **Darstellung** | **Formatierung & Verschl.** | **Data** | **SSL/TLS, MIME, JPEG** |
| **5** | 🔐 Sitzung | Dialog-Verwaltung | Data | HTTP, RPC |
| **4** | 🚚 Transport | Ende-zu-Ende | Segment | TCP, UDP |
| **3** | 🗺️ Vermittlung | Routing | Packet | IP, ICMP |
| **2** | 🔗 Sicherung | Fehlerbehandlung | Frame | MAC, ARP |
| **1** | ⚡ Bitübertragung | Physische Signale | Bit | Ethernet |

---

## 📚 Glossar-Begriffe aus dieser Schicht

- **Verschlüsselung:** Umwandlung von Daten in unlesbare Form ohne korrekten Schlüssel
- **SSL/TLS:** Protokolle für sichere, verschlüsselte Kommunikation
- **Kompression:** Reduktion der Dateigröße durch Eliminierung von Redundanzen
- **MIME:** Standard für Kodierung von Multimedia-Inhalten
- **Zeichensatz:** System zur Kodierung von Textzeichen (ASCII, UTF-8, etc.)
- **Codec:** Software/Hardware zur Verschlüsselung/Dekodierung von Daten
- **GZIP:** Weit verbreitete Kompression für Web-Daten

→ [Vollständiges OSI-Glossar](/osi/glossar/)

---

## 🔗 Navigation

| ← Zurück | Übersicht | Weiter → |
|----------|-----------|----------|
| [Schicht 5: Sitzung](/osi/05-sitzung/) | [Zum OSI-Modell](/osi/) | [Schicht 7: Anwendung](/osi/07-anwendung/) |
