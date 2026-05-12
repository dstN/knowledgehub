---
title: Flash-EEPROM & UEFI
description: Firmware Speicherung und modernes Booting
---

## 💾 Flash-EEPROM

Das **Flash-EEPROM** ist ein spezieller Speicher-Chip auf dem Mainboard.

### Funktion

Speichert die **Firmware** des Computers:

- **BIOS** (Legacy, veraltet)
- **UEFI** (Modern, Standard seit ~2010)

### Technologie

- **Typ:** Non-Volatile Flash-Speicher
- **Größe:** Typisch 16-256 MB (meist 64 MB)
- **Eigenschaft:** Daten bleiben auch ohne Strom
- **Löschbar:** Kann überschrieben werden (Firmware-Update)

### Warum nicht normale Festplatte?

- Festplatte ist bei Systemstart noch nicht verfügbar
- Flash ist direkt am Mainboard angebunden
- CPU kann Firmware beim Hochfahren sofort laden

---

## 🔌 BIOS vs. UEFI

### BIOS (Legacy)

**Einführung:** 1981 (IBM PC)  
**Größe:** 16 KB - 64 KB  
**Modus:** Real Mode (16-Bit)

**Limitationen:**

- Nur 1 MB Speicher adressierbar
- Max. 2 TB Festplatten (altes Standard)
- Text-Menu nur

**Beendung:** Wird durch UEFI ersetzt

---

### UEFI (Unified Extensible Firmware Interface)

**Einführung:** ~2005  
**Größe:** Typisch 50-100 MB  
**Modus:** Protected Mode (32/64-Bit)

**Vorteile:**

- ✅ Grafische Oberfläche möglich
- ✅ Unterstützt beliebig große Festplatten (GPT)
- ✅ Modulare Struktur (Treiber laden)
- ✅ Sicherheit: Secure Boot
- ✅ Network Boot einfacher

**Moderne Standards:**

- **UEFI Secure Boot:** Nur signierte Betriebssysteme booten
- **TPM 2.0:** Trusted Platform Module für Sicherheit
- **Fast Boot:** Unter 1 Sekunde von Stromschalter bis OS

---

## 🚀 Bootprozess mit UEFI

```
1. Power-On
2. UEFI-Code aus Flash laden
3. Hardware-Tests durchführen
4. EFI-System-Partition finden
5. Bootloader laden
6. Betriebssystem starten
```

---

## 🔒 Secure Boot

### Wie es funktioniert

1. UEFI verifiziert digitale Signatur von Bootloader
2. Bootloader verifiziert Kernel-Signatur
3. Kernel verifiziert Module-Signaturen

### Vorteil

Verhindert, dass Malware als Bootloader fungiert

### Nachteil

Erschwert Custom-OS oder Linux-Installation (Workaround: Secure Boot deaktivieren)

---

## 🔗 Weiterführende Links

- [Mainboard & Chipsatz](/04-mainboard-chipsatz/)
- [Timer-IC & CMOS-Batterie](/04-mainboard-chipsatz/timer-batterie/)
- [Chipsatz Evolution](/04-mainboard-chipsatz/chipsatz-evolution/)
