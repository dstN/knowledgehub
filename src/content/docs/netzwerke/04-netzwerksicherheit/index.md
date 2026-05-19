---
title: Grundlagen der Netzwerksicherheit
description: Kernkomponenten der Netzwerksicherheit – Firewalls, IDS/IPS, VPN, Verschlüsselung, Authentifizierung, Netzwerksegmentierung, Patch-Management, Logging und physische Sicherheit im Überblick.
---

Netzwerksicherheit umfasst alle organisatorischen und technischen Maßnahmen, um die drei grundlegenden Schutzziele der Informationssicherheit zu gewährleisten:

> **CIA-Triade:**
> - **C**onfidentiality (Vertraulichkeit) – Daten nur für Berechtigte zugänglich
> - **I**ntegrity (Integrität) – Daten dürfen nicht unbemerkt verändert werden
> - **A**vailability (Verfügbarkeit) – Systeme und Daten müssen erreichbar sein

Kein einzelnes Werkzeug allein kann ein Netzwerk vollständig absichern. Stattdessen greift ein wirksames Sicherheitskonzept auf mehrere Verteidigungsebenen zurück – das sogenannte **Defense-in-Depth-Prinzip**.

---

## Kernkomponenten und Schutzmechanismen

### Firewalls

Firewalls bilden die **primäre Sicherheitsbarriere** zwischen einem vertrauenswürdigen internen Netzwerk und unsicheren externen Segmenten (z. B. dem Internet). Sie analysieren jeden eingehenden und ausgehenden Netzwerkpakete und erlauben oder blockieren Verbindungen anhand vordefinierter **Sicherheitsregeln (Policies)**.

| Firewall-Typ | Funktionsweise |
|-------------|----------------|
| **Paketfilter** | Prüft IP-Adresse, Port und Protokoll (OSI Layer 3/4) |
| **Stateful Inspection** | Verfolgt den Zustand aktiver Verbindungen (Connection Tracking) |
| **Application-Layer (WAF)** | Analysiert den Inhalt auf Anwendungsebene (OSI Layer 7) |

### Intrusion Detection (IDS) & Prevention Systems (IPS)

IDS und IPS erweitern die Netzwerküberwachung um eine intelligente Bedrohungserkennung:

| | **IDS** | **IPS** |
|-|---------|---------|
| **Betriebsmodus** | Passiv (parallel zum Datenstrom) | Aktiv (inline, im Datenstrom) |
| **Reaktion** | Alarm schlagen, Protokollieren | Alarm + sofortiges Blockieren |
| **Erkennungsmethode** | Signatur-basiert oder verhaltensbasiert | Signatur-basiert oder verhaltensbasiert |

> **Merksatz:** Das IDS ist der **Rauchmelder** – es erkennt und alarmiert. Das IPS ist der **Feuerlöscher** – es erkennt und handelt eigenständig.

### Virtual Private Networks (VPN)

VPNs ermöglichen eine **abhörsichere Kommunikation** über unsichere, öffentliche Netze (z. B. das Internet). Durch den Aufbau eines verschlüsselten **Tunnels** zwischen zwei Endpunkten wird die Vertraulichkeit des Datenverkehrs gewahrt.

**Typische Einsatzszenarien:**
- Anbindung von Heimarbeitern an das Firmennetzwerk (Remote Access VPN)
- Sichere Verbindung zwischen Unternehmensstandorten (Site-to-Site VPN)
- Anonymisierung des eigenen Datenverkehrs

**Gängige Protokolle:** OpenVPN, WireGuard, IPsec, SSL/TLS

### Verschlüsselung (Encryption)

Verschlüsselung verwandelt Klartext-Daten mittels mathematischer Kryptoverfahren in unlesbaren Geheimtext. Sie schützt Daten in zwei Zuständen:

| Zustand | Begriff | Beispiel |
|---------|---------|---------|
| Übertragung | **Data in Transit** | HTTPS-Verbindung zum Webserver |
| Speicherung | **Data at Rest** | Verschlüsselte Festplatte (BitLocker) |

**Symmetrisch vs. Asymmetrisch:**
- **Symmetrisch:** Gleicher Schlüssel zum Ver- und Entschlüsseln (schnell, z. B. AES). Problem: sicherer Schlüsselaustausch nötig.
- **Asymmetrisch:** Öffentlicher Schlüssel zum Verschlüsseln, privater Schlüssel zum Entschlüsseln (z. B. RSA). Löst das Schlüsselaustausch-Problem.

### Authentifizierung und Autorisierung

Zwei verwandte, aber klar zu trennende Konzepte:

| Konzept | Frage | Methoden |
|---------|-------|----------|
| **Authentifizierung** | *Wer bist du?* | Passwort, Biometrie, Token, Zertifikat |
| **Autorisierung** | *Was darfst du?* | Rollenbasierte Rechte (RBAC), ACLs |

> **Mehr-Faktor-Authentifizierung (MFA):** Kombiniert mindestens zwei unabhängige Faktoren:
> 1. **Wissen** – etwas, das man weiß (Passwort, PIN)
> 2. **Besitz** – etwas, das man hat (Smartphone, Hardware-Token)
> 3. **Inhärenz** – etwas, das man ist (Fingerabdruck, Iris)

**Least-Privilege-Prinzip:** Jeder Benutzer und jeder Prozess erhält nur die Mindestrechte, die für seine Aufgaben tatsächlich erforderlich sind.

### Netzwerksegmentierung

Durch die Aufteilung eines Gesamtnetzwerks in logisch voneinander isolierte Teilbereiche (**Subnetze/VLANs**) lässt sich die **laterale Bewegung** eines Angreifers einschränken:

```
Internet → [Firewall] → DMZ (Webserver) → [Firewall] → Internes Netz → [VLAN-Trennung] → Kritische Systeme
```

> Selbst wenn ein Angreifer in die DMZ eindringt, steht ihm das interne Netz nicht automatisch offen. Jede Zonengrenze erfordert eine weitere Überwindung aktiver Sicherheitsmaßnahmen.

### Regelmäßige Aktualisierungen & Patch-Management

Sicherheitslücken (**Vulnerabilities**) in Betriebssystemen, Firmware und Anwendungen sind die häufigste Einfallsroute für Angreifer. Patch-Management beschreibt den geregelten Prozess zur zeitnahen Schließung dieser Lücken:

1. **Inventarisierung** – Welche Software/Firmware ist im Einsatz?
2. **Priorisierung** – Kritische CVEs zuerst (CVSS-Score)
3. **Test** – Patches in Testumgebung validieren
4. **Rollout** – Kontrollierte Verteilung im Produktivbetrieb
5. **Verifikation** – Prüfen, ob Patch korrekt angewendet wurde

### Logging und kontinuierliche Überwachung

Lückenlose, manipulationssichere **Protokollierung** aller relevanten Netzwerkaktivitäten ist Voraussetzung für:

- Frühzeitige Erkennung von Anomalien (z. B. ungewöhnliche Login-Zeiten, Portscans)
- Lückenlose forensische Analyse nach einem Sicherheitsvorfall
- Erfüllung gesetzlicher Aufbewahrungspflichten (z. B. DSGVO, BSI-Grundschutz)

**SIEM-Systeme** (Security Information and Event Management) zentralisieren und korrelieren Log-Daten aus verschiedenen Quellen automatisiert.

### Physische Sicherheit

Selbst die beste Software-Sicherheit ist wirkungslos, wenn ein Angreifer physischen Zugang zu Netzwerkkomponenten erhält. Physische Schutzmaßnahmen sind gleichwertig:

- Zutrittskontrollierte Serverräume (Chipkarte, PIN, Biometrie)
- Abschließbare Netzwerkschränke (Patchpanels, Switches)
- Videoüberwachung sensibler Bereiche
- USV-Anlagen (Unterbrechungsfreie Stromversorgung) gegen Stromausfälle

---

## Übersichtstabelle: Defense in Depth

Die einzelnen Werkzeuge greifen in einem **geschichteten Sicherheitsmodell** ineinander. Kein Layer ersetzt den anderen:

| Werkzeug / Methode | Hauptfunktion | OSI-Relevanz |
|-------------------|---------------|-------------|
| **Firewall** | Verkehrskontrolle anhand von Port- und IP-Regeln | Layer 3–4 |
| **IDS / IPS** | Erkennung und Abwehr aktiver Angriffsmuster | Layer 3–7 |
| **VPN** | Abhörsichere Tunnelung und Standortkopplung | Layer 3 (verschlüsselt) |
| **Verschlüsselung** | Schutz von Daten bei Übertragung und Speicherung | Layer 6–7 |
| **MFA** | Identitätsnachweis über mehrere unabhängige Faktoren | Benutzerebene |
| **Netzwerksegmentierung** | Einschränkung der lateralen Bewegungsfreiheit | Layer 2–3 |
| **Patch-Management** | Schließen bekannter Sicherheitslücken | Systemebene |
| **Logging & SIEM** | Anomalie-Erkennung und forensische Aufarbeitung | Alle Ebenen |
| **Physische Sicherheit** | Schutz vor direktem Hardware-Zugriff | Infrastruktur |
