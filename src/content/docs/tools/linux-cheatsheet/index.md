---
title: Linux CLI Cheatsheet
description: Schnellreferenz für Ubuntu und Linux Kommandozeile - Befehle für Administration, Netzwerk, Dateiverwaltung und mehr
---

# Linux CLI Referenzblatt

## Über dieses Cheatsheet

Dieses Referenzblatt bietet eine kompakte Übersicht der wichtigsten Linux-Befehle für Ubuntu und Debian-basierte Systeme. Ideal für die Prüfungsvorbereitung und den täglichen Einsatz.

:::tip[Navigation]
Nutze die Tastenkombinationen am Ende dieses Dokuments für effizientes Arbeiten in der Kommandozeile.
:::

---

## Administration (sudo)

### Grundlegende Sudo-Befehle

| Befehl | Beschreibung |
|--------|--------------|
| `sudo befehl` | Befehl als root ausführen |
| `sudo -s` | Shell als root öffnen |
| `sudo -s -u benutzer` | Shell als anderer Benutzer öffnen |
| `sudo -k` | Sudo-Passwörter zurücksetzen |
| `sudo visudo` | `/etc/sudoers` bearbeiten |
| `passwd` | Eigenes Passwort ändern |

### Grafische Admin-Tools

| Befehl (GNOME) | Befehl (KDE) | Funktion |
|---------------|--------------|----------|
| `gksudo befehl` | `kdesudo befehl` | Grafischer Sudo-Dialog |
| `gksudo nautilus` | `kdesudo konqueror` | Dateimanager als root |

---

## Anzeige & X-System

| Befehl | Beschreibung |
|--------|--------------|
| `sudo /etc/init.d/gdm restart` | X-Server neustarten (GNOME) |
| `sudo /etc/init.d/kdm restart` | X-Server neustarten (KDE) |
| `cat /etc/X11/xorg.conf` | X-Konfiguration anzeigen |
| `sudo dexconf` | xorg.conf zurücksetzen |
| `Ctrl+Alt+Rück` | X bei Absturz neustarten |
| `Ctrl+Alt+F1-F6` | Auf TTY wechseln |
| `Ctrl+Alt+F7` | Zurück zu X (GUI) |

---

## Systemdienste verwalten

### Upstart (ältere Systeme)

| Befehl | Beschreibung |
|--------|--------------|
| `start dienst` | Dienst starten |
| `stop dienst` | Dienst stoppen |
| `status dienst` | Dienst-Status prüfen |

### SysV Init

| Befehl | Beschreibung |
|--------|--------------|
| `/etc/init.d/dienst start` | Dienst starten |
| `/etc/init.d/dienst stop` | Dienst stoppen |
| `/etc/init.d/dienst status` | Status prüfen |
| `/etc/init.d/dienst restart` | Dienst neustarten |
| `runlevel` | Aktuellen Runlevel anzeigen |

---

## Paketmanagement (APT)

:::caution[Root-Rechte erforderlich]
Alle `apt-get` Befehle benötigen `sudo`!
:::

### Pakete verwalten

| Befehl | Beschreibung |
|--------|--------------|
| `sudo apt-get update` | Paketlisten aktualisieren |
| `sudo apt-get upgrade` | Alle Pakete upgraden |
| `sudo apt-get dist-upgrade` | Ubuntu-Version upgraden |
| `sudo apt-get install pkg` | Paket installieren |
| `sudo apt-get purge pkg` | Paket deinstallieren (inkl. Config) |
| `sudo apt-get autoremove` | Verwaiste Pakete entfernen |

### Fehlerbehebung

| Befehl | Beschreibung |
|--------|--------------|
| `sudo apt-get -f install` | Beschädigte Pakete reparieren |
| `sudo dpkg --configure -a` | DPKG-Konfiguration reparieren |
| `sudo dpkg -i pkg.deb` | .deb-Datei installieren |

### Konfiguration

| Datei | Zweck |
|-------|-------|
| `/etc/apt/sources.list` | Repository-Liste |

---

## Netzwerk

### Netzwerk-Informationen

| Befehl | Beschreibung |
|--------|--------------|
| `ifconfig` | Netzwerk-Interfaces anzeigen |
| `ip addr` | Moderne Alternative zu ifconfig |
| `iwconfig` | WLAN-Informationen |
| `sudo iwlist scan` | Nach WLANs scannen |

### Netzwerk-Verwaltung

| Befehl | Beschreibung |
|--------|--------------|
| `sudo /etc/init.d/networking restart` | Netzwerk neu starten |
| `ifup schnittstelle` | Interface aktivieren |
| `ifdown schnittstelle` | Interface deaktivieren |

### Konfiguration

| Datei | Zweck |
|-------|-------|
| `/etc/network/interfaces` | Manuelle Netzwerkkonfiguration |

---

## Firewall (UFW)

:::caution[Root-Rechte erforderlich]
Alle `ufw` Befehle benötigen `sudo`!
:::

| Befehl | Beschreibung |
|--------|--------------|
| `sudo ufw enable` | Firewall aktivieren |
| `sudo ufw disable` | Firewall deaktivieren |
| `sudo ufw status` | Status und Regeln anzeigen |
| `sudo ufw default allow` | Standard: Alle erlauben |
| `sudo ufw default deny` | Standard: Alle verbieten |
| `sudo ufw allow port` | Port erlauben |
| `sudo ufw deny port` | Port blockieren |
| `sudo ufw deny from ip` | IP-Adresse blockieren |

---

## Dateirechte

### chmod - Rechte ändern

| Zahl | Recht | Symbol |
|------|-------|--------|
| 4 | Lesen (read) | `r` |
| 2 | Schreiben (write) | `w` |
| 1 | Ausführen (execute) | `x` |

### Häufige Rechtekombinationen

| Befehl | Bedeutung |
|--------|-----------|
| `chmod 777 datei` | Alle dürfen alles (rwxrwxrwx) |
| `chmod 755 datei` | Besitzer: alles; Gruppe/Andere: lesen+ausführen |
| `chmod 644 datei` | Besitzer: lesen+schreiben; Gruppe/Andere: nur lesen |
| `chmod 700 datei` | Nur Besitzer hat alle Rechte |

### Berechtigungsstruktur

```
rwx rwx rwx
│││ │││ │││
│││ │││ └┴┴─ Andere (Others)
│││ └┴┴───── Gruppe (Group)
└┴┴────────── Benutzer (User)
```

---

## Dateibefehle

### Navigation & Anzeige

| Befehl | Beschreibung |
|--------|--------------|
| `ls` | Verzeichnisinhalt |
| `ls -al` | Detaillierte Liste (+versteckte Dateien) |
| `cd dir` | Verzeichnis wechseln |
| `cd` | Zum Home-Verzeichnis |
| `pwd` | Aktuelles Verzeichnis anzeigen |

### Datei-Operationen

| Befehl | Beschreibung |
|--------|--------------|
| `mkdir dir` | Verzeichnis erstellen |
| `rm datei` | Datei löschen |
| `rm -r dir` | Verzeichnis löschen |
| `rm -f datei` | Datei erzwingen löschen |
| `rm -rf dir` | Verzeichnis rekursiv erzwingen löschen |
| `cp datei1 datei2` | Kopieren |
| `cp -r dir1 dir2` | Verzeichnis rekursiv kopieren |
| `mv datei1 datei2` | Verschieben/Umbenennen |
| `ln -s datei link` | Symbolischen Link erstellen |
| `touch datei` | Datei erstellen/aktualisieren |

### Datei-Inhalte

| Befehl | Beschreibung |
|--------|--------------|
| `cat datei` | Inhalt ausgeben |
| `more datei` | Seitenweise anzeigen |
| `head datei` | Erste 10 Zeilen |
| `head -n 5 datei` | Erste 5 Zeilen |
| `tail datei` | Letzte 10 Zeilen |
| `tail -f datei` | Inhalt live verfolgen |

---

## Prozessverwaltung

| Befehl | Beschreibung |
|--------|--------------|
| `ps` | Aktive Prozesse des Benutzers |
| `ps aux` | Alle Prozesse im System |
| `top` | Prozesse live anzeigen |
| `htop` | Erweiterte Prozessanzeige (nachinstallieren) |
| `kill pid` | Prozess beenden |
| `killall name` | Alle Prozesse mit Namen beenden |
| `bg` | Job im Hintergrund fortsetzen |
| `fg` | Job in den Vordergrund holen |
| `fg n` | Job Nummer n in den Vordergrund |

---

## SSH (Secure Shell)

| Befehl | Beschreibung |
|--------|--------------|
| `ssh user@host` | Mit Host verbinden |
| `ssh -p port user@host` | Verbindung über bestimmten Port |
| `ssh-copy-id user@host` | Schlüssel für passwortlosen Login kopieren |

---

## Suchen

| Befehl | Beschreibung |
|--------|--------------|
| `grep muster dateien` | Muster in Dateien suchen |
| `grep -r muster dir` | Rekursiv in Verzeichnis suchen |
| `befehl \| grep muster` | Muster in Befehlsausgabe suchen |
| `locate datei` | Datei im System finden |
| `find . -name "*.txt"` | Dateien mit Muster finden |

---

## Systeminformationen

| Befehl | Ausgabe |
|--------|---------|
| `date` | Aktuelles Datum und Uhrzeit |
| `cal` | Monatskalender |
| `uptime` | Systemlaufzeit |
| `w` | Angemeldete Benutzer |
| `whoami` | Eigener Benutzername |
| `finger user` | Info über Benutzer |
| `uname -r` | Kernel-Version |
| `uname -a` | Alle Systeminformationen |
| `cat /proc/cpuinfo` | CPU-Informationen |
| `cat /proc/meminfo` | Speicherinformationen |
| `df -h` | Festplattennutzung (human-readable) |
| `du -sh` | Verzeichnisgröße |
| `free -h` | RAM- und Swap-Nutzung |
| `whereis app` | Mögliche Speicherorte |
| `which app` | Standardpfad einer App |

---

## Komprimierung & Archivierung

### tar-Archive

| Befehl | Beschreibung |
|--------|--------------|
| `tar cf archiv.tar dateien` | tar-Archiv erstellen |
| `tar xf archiv.tar` | tar-Archiv entpacken |
| `tar czf archiv.tar.gz dateien` | Mit gzip komprimieren |
| `tar xzf archiv.tar.gz` | Gzip-Archiv entpacken |
| `tar cjf archiv.tar.bz2 dateien` | Mit bzip2 komprimieren |
| `tar xjf archiv.tar.bz2` | Bzip2-Archiv entpacken |

### gzip

| Befehl | Beschreibung |
|--------|--------------|
| `gzip datei` | Datei komprimieren |
| `gzip -d datei.gz` | Datei entkomprimieren |

---

## Software-Installation aus Quellen

```bash
# Standard-Workflow für Tarball-Installation
./configure
make
sudo make install
```

### Paketformate

| Format | Befehl |
|--------|--------|
| Debian (.deb) | `sudo dpkg -i pkg.deb` |
| RPM (.rpm) | `sudo rpm -Uvh pkg.rpm` |

---

## Tastaturkürzel (CLI)

| Shortcut | Funktion |
|----------|----------|
| `Strg+C` | Aktuellen Befehl abbrechen |
| `Strg+Z` | Befehl stoppen (suspend) |
| `Strg+D` | Sitzung beenden (EOF) |
| `Strg+W` | Wort vor Cursor löschen |
| `Strg+U` | Ganze Zeile löschen |
| `Strg+R` | Befehlshistorie durchsuchen |
| `!!` | Letzten Befehl wiederholen |
| `exit` | Sitzung beenden |

---

## Wiederherstellungs-Tipp

:::danger[System-Absturz]
Falls das System nicht mehr reagiert:
:::

**REISUB-Methode** (sicherer als harter Reset):

1. `Alt` + `SysRq` (Druck) gedrückt halten
2. Nacheinander tippen (ca. 1 Sekunde Pause):
   - **R** - Raw mode (Tastatur zurücksetzen)
   - **E** - Terminate (Prozesse beenden)
   - **I** - Kill (Prozesse hart beenden)
   - **S** - Sync (Daten sichern)
   - **U** - Unmount (Dateisysteme aushängen)
   - **B** - Boot (System neustarten)

:::tip[Alternative]
Alternativ kann auch **R**E**I**S**U**O für Shutdown verwendet werden.
:::

---

## Spezielle Desktop-Umgebungen

| Paket | Beschreibung |
|-------|--------------|
| `ubuntu-desktop` | Standard Ubuntu (GNOME) |
| `kubuntu-desktop` | KDE Plasma Desktop |
| `xubuntu-desktop` | XFCE Desktop (leichtgewichtig) |

### Entwicklungspakete

| Paket | Zweck |
|-------|-------|
| `build-essential` | Kompilierungswerkzeuge |
| `linux-image-generic` | Neuestes Kernel-Abbild |
| `linux-headers-generic` | Kernel-Headers für Module |
| `ubuntu-restricted-extras` | Nicht-freie aber nützliche Pakete |

---

## Schnellübersicht: Befehlskategorien

```
┌─────────────────────────────────────────────────────────────┐
│                    LINUX CLI CHEATSHEET                     │
├─────────────────────────────────────────────────────────────┤
│  📁 Dateien     │ ls, cd, cp, mv, rm, mkdir, chmod         │
│  🔍 Suchen      │ grep, find, locate                         │
│  📦 Pakete      │ apt-get, dpkg                              │
│  🌐 Netzwerk    │ ifconfig, iwconfig, ssh                    │
│  🔥 Firewall    │ ufw                                        │
│  ⚙️  System     │ ps, top, kill, df, du, free                │
│  📦 Archiv      │ tar, gzip                                  │
│  🔑 Admin       │ sudo, passwd, visudo                       │
└─────────────────────────────────────────────────────────────┘
```

---

## Lizenz & Quelle

Original: **FOSSwire Cheat Sheet** (CC-BY-SA 3.0)  
Übersetzt und ergänzt für CaveHub.

Ubuntu® ist eine eingetragene Marke der Canonical Ltd.
