---
title: VLSM – Variable Length Subnet Masks
description: Flexible Subnetzierung mit unterschiedlichen Subnetzgrößen – IHK-Prüfungsrelevant mit Schritt-für-Schritt Beispielen und häufigen Fallstricken
---

**VLSM** (Variable Length Subnet Masks) ist eine Subnetzierungstechnik, die es dir ermöglicht, ein großes Netzwerk in Subnetze **unterschiedlicher Größe** aufzuteilen – basierend auf dem tatsächlichen Bedarf. Anstatt alle Subnetze gleich groß zu machen, verschwendest du mit VLSM keine IP-Adressen mehr.

---

## Warum VLSM? Das Problem mit Standard-Subnetting

Stellen dir vor, ein Unternehmen hat folgende Anforderung:
- **Hauptnetzwerk:** `172.16.0.0/16` (65.536 IP-Adressen)
- **Abteilung A:** 500 Hosts
- **Abteilung B:** 100 Hosts  
- **Abteilung C:** 20 Hosts
- **WAN-Verbindung:** 2 Router (braucht nur 2 IPs)

### Mit klassischem Subnetting:

Wenn du alle Subnetze gleich großmachst (z.B. `/23` mit je 510 IPs), verschwendest du:
- **Abteilung B:** 410 ungenutzte IPs ❌
- **Abteilung C:** 490 ungenutzte IPs ❌  
- **WAN:** 508 ungenutzte IPs ❌

Das sind **über 1.400 verschwendete Adressen!**

### Mit VLSM:

- Abteilung A: `/23` (510 IPs) ✅ 
- Abteilung B: `/25` (126 IPs) ✅
- Abteilung C: `/27` (30 IPs) ✅
- WAN: `/30` (2 IPs) ✅

**Ergebnis:** Kaum Verschwendung, maximale Effizienz. Genau das leistet VLSM.

---

## Die Theorie: Was bedeutet „Variable"?

Bei Standard-Subnetting ist die Subnetzmaske **einheitlich** – z.B. alle `/24`. Bei VLSM ist die Subnetzmaske **unterschiedlich** je nach Bedarf.

### Beispiel im Überblick:

```
172.16.0.0/16
│
├─ Abteilung A:  172.16.0.0/23      (510 Hosts)
├─ Abteilung B:  172.16.2.0/25      (126 Hosts)
├─ Abteilung C:  172.16.2.128/27    (30 Hosts)
└─ WAN:          172.16.2.160/30    (2 Hosts)
```

Die Schlüsseletappe: **Nicht alle Subnetze teilen die gleiche Maske!** Der `/`-Wert variiert.

---

## Konzept: Hierarchische Aufteilung

VLSM funktioniert nach einem **hierarchischen** Prinzip:

1. **Größte Anforderung zuerst:** Das größte Subnetz bekommt den kleinsten Präfix (z.B. `/23`)
2. **Hierarchisch absteigen:** Danach teilst du die verbleibenden Adressen in kleinere Masken auf (z.B. `/25`, `/27`, `/30`)
3. **Kein Überlappen:** Die Adressbereiche dürfen sich **nicht überlappen**

### Der Rechenweg:

**Frage:** Wie viele Bits brauchst du für n Hosts?  
**Antwort:** Mindestens ⌈log₂(n + 2)⌉ Bits (die +2 sind für Netzadresse und Broadcast)

**Beispiel:** Für 100 Hosts brauchst du log₂(102) ≈ 6.67, aufgerundet **7 Hostbits**  
→ Subnetzmaske: 32 − 7 = **/25** mit 2^7 = 128 Adressen

---

## Beispiel 1: Einfach und intuitiv

**Szenario:** Ein kleines Büro mit 3 Abteilungen:
- **Marketing:** 60 Hosts
- **IT:** 14 Hosts
- **Server-Netzwerk:** 2 Hosts

**Verfügbar:** `10.0.0.0/22` (1.024 IPs)

### Schritt 1: Hostbits berechnen (für jede Abteilung)

| Abteilung | Hosts | +2 | Min. Hostbits | Präfix | Netzgrößе |
|-----------|-------|----|-|-|-|
| Marketing | 60 | 62 | 6 | /26 | 64 |
| IT | 14 | 16 | 4 | /28 | 16 |
| Server | 2 | 4 | 2 | /30 | 4 |

Wie rechnest du das? Für 60 Hosts: $2^6 = 64$, das passt. $32 - 6 = /26$ ✅

### Schritt 2: Adressbereiche zuordnen (größte zuerst!)

**Marketing (größte, bekommt die erste Range):**
```
Netzadresse:  10.0.0.0
Präfix:       /26
Hostbereich:  10.0.0.1 – 10.0.0.62
Broadcast:    10.0.0.63
```

**IT (nächste Range nach 10.0.0.63):**
```
Netzadresse:  10.0.0.64
Präfix:       /28
Hostbereich:  10.0.0.65 – 10.0.0.78
Broadcast:    10.0.0.79
```

**Server (nächste Range nach 10.0.0.79):**
```
Netzadresse:  10.0.0.80
Präfix:       /30
Hostbereich:  10.0.0.81 – 10.0.0.82
Broadcast:    10.0.0.83
```

### Schritt 3: Übersicht

```
10.0.0.0/22 aufgeteilt in:
├─ Marketing:  10.0.0.0/26     (64 Adressen, 62 Hosts nutzbar)
├─ IT:         10.0.0.64/28    (16 Adressen, 14 Hosts nutzbar)
├─ Server:     10.0.0.80/30    (4 Adressen, 2 Hosts nutzbar)
└─ Frei:       10.0.0.84–10.0.1.255 (940+ Adressen für Zukunft)
```

**Bingo!** Alles passt, keine Überschneidungen, minimale Verschwendung. ✅

---

## Beispiel 2: Das knifflige Szenario (für die Prüfung!)

**Szenario:** Ein ISP verwaltet `203.0.113.0/24` und muss 5 Kunden unterstützen:
- Kunde A: 100 Hosts
- Kunde B: 50 Hosts
- Kunde C: 30 Hosts
- Kunde D: 10 Hosts
- Kunde E: 2 Hosts (Point-to-Point Verbindung)

Das ist der Haken: **Ein /24 mit nur 254 IP-Adressen insgesamt!** Reicht das?

### Schritt 1: Berechnung

| Kunde | Hosts | +2 | Min. Hosts | Hostbits | Präfix | Größe |
|-------|-------|----|----|-------|--------|--------|
| A | 100 | 102 | 128 | 7 | /25 | 128 |
| B | 50 | 52 | 64 | 6 | /26 | 64 |
| C | 30 | 32 | 32 | 5 | /27 | 32 |
| D | 10 | 12 | 16 | 4 | /28 | 16 |
| E | 2 | 4 | 4 | 2 | /30 | 4 |
| **Gesamt** | - | - | **256** | - | - | **244** |

⚠️ **Achtung!** 244 < 254 ist knapp, aber es **passt!** (gerade noch!)

### Schritt 2: Adressvergabe (größte zuerst!)

**Kunde A (128 Adressen, /25):**
```
Netzadresse:  203.0.113.0/25
Hostbereich:  203.0.113.1 – 203.0.113.126
Broadcast:    203.0.113.127
```

**Kunde B (64 Adressen, /26):**
```
Netzadresse:  203.0.113.128/26
Hostbereich:  203.0.113.129 – 203.0.113.190
Broadcast:    203.0.113.191
```

**Kunde C (32 Adressen, /27):**
```
Netzadresse:  203.0.113.192/27
Hostbereich:  203.0.113.193 – 203.0.113.222
Broadcast:    203.0.113.223
```

**Kunde D (16 Adressen, /28):**
```
Netzadresse:  203.0.113.224/28
Hostbereich:  203.0.113.225 – 203.0.113.238
Broadcast:    203.0.113.239
```

**Kunde E (4 Adressen, /30):**
```
Netzadresse:  203.0.113.240/30
Hostbereich:  203.0.113.241 – 203.0.113.242
Broadcast:    203.0.113.243
```

**Verbleibende Adressen:**
```
203.0.113.244 – 203.0.113.255 (12 Adressen frei für Expansion)
```

✅ **Alles passt, keine Überschneidungen!**

---

## Der VLSM-Rechenweg (Checkliste)

Nutze diese Schritte für jede Prüfungsaufgabe:

1. **Höchstem Hostbedarf Priorität geben** → Größtes Subnetz zuerst
2. **Für jeden: Hostbits = ⌈log₂(Hosts + 2)⌉** (aufrunden auf nächste Potenz von 2!)
3. **Präfix berechnen:** Präfix = 32 − Hostbits
4. **Subnetzgröße:** 2^Hostbits Adressen
5. **Adressbereiche sequenziell ohne Lücken zuordnen**
6. **Überlappung prüfen:** Ist Ende einer Range + 1 = Anfang nächster Range? ✅
7. **Verschwendung checken:** Wieviele Adressen bleiben ungenutzt?

---

## Häufige Fehler (Fallstricke in der Prüfung!)

### ❌ Fehler 1: Falsche Reihenfolge
**Falsch:** Subnetze in aufsteigender Größe zuordnen (kleinste zuerst)  
**Richtig:** Immer die **größte Anforderung zuerst** behandeln  
**Grund:** Sonst fragmentierst du den Adressraum und es entstehen Lücken.

### ❌ Fehler 2: +2 vergessen
**Falsch:** Für 60 Hosts direkt `/26` nutzen (64 Adressen)  
**Richtig:** 60 + 2 (Netzadresse + Broadcast) = 62 → noch immer `/26` mit 64 Adressen ✅  
**Grund:** Jedes Subnetz hat eine Netzadresse (erste) und Broadcast (letzte), diese können nicht für Hosts genutzt werden.

### ❌ Fehler 3: Überlappende Ranges
**Falsch:**
```
Subnetz 1: 10.0.0.0/25   (10.0.0.0 – 10.0.0.127)
Subnetz 2: 10.0.0.64/26  (10.0.0.64 – 10.0.0.127) ← Überlapp!
```

**Richtig:**
```
Subnetz 1: 10.0.0.0/25   (10.0.0.0 – 10.0.0.127)
Subnetz 2: 10.0.0.128/26 (10.0.0.128 – 10.0.0.191) ← Keine Überlappung
```

### ❌ Fehler 4: Falsche Binärrechnung
**Falsch:** "Für 100 Hosts brauchst du `/24`"  
**Richtig:** $2^6 = 64 < 102$ (nicht genug), aber $2^7 = 128 > 102$ ✅ → `/25`  
**Grund:** Immer AUFRUNDEN auf die nächste Potenz von 2.

---

## Best Practices für die Prüfung

| Punkt | Was tun |
|-------|---------|
| **Tabelle anlegen** | Schreibe alle Subnetze mit Hosts, Hostbits, Präfix übersichtlich auf |
| **Größe checken** | Passt die Gesamtgröße aller Subnetze in das verfügbare Netzwerk? |
| **Addieren** | Summe aller Subnetzgrößen ≤ verfügbare Adressen? |
| **Sequenziell vorgehen** | Von oben nach unten, keine Sprünge, keine Lücken |
| **Doppelt checken** | Endet Subnetz A bei 10.0.0.127? Beginnt Subnetz B bei 10.0.0.128? ✅ |
| **Zeit sparen** | Nutze `/30` für Point-to-Point (nur 4 IPs pro Verbindung) |

---

## Glossar & Verweise

- **VLSM:** Fähigkeit, unterschiedliche Subnetzmasken im gleichen Netzwerk zu nutzen
- **Hostbits:** Anzahl der Bits, die für die Host-Adressierung reserviert sind
- **Subnetzmaske:** Definiert, welche Bits Netzanteil und welche Hostanteil sind
- **Aggregation:** Umgekehrtes Konzept – mehrere kleine Netze zu einem größeren zusammenfassen
- **Supernetzing:** Siehe Aggregation

**Weitere Ressourcen:**
- [Subnetting Grundlagen](/netzwerke/01-subnetting/)
- [CIDR-Notation](/netzwerke/01-subnetting/cidr/)
- [Netzwerk-Glossar](/netzwerke/glossar/)

---

## Abschließender Tipp für die IHK-Prüfung

VLSM-Aufgaben in Prüfungen sehen oft so aus:
> *„Ein Unternehmen hat das Netzwerk 192.168.0.0/22 und braucht 3 Abteilungen mit 80, 30 und 10 Hosts sowie eine WAN-Verbindung. Teilen Sie das Netzwerk mit VLSM auf."*

**Dein Vorgehen:**
1. ✅ Alle Anforderungen aufschreiben (80, 30, 10, 2)
2. ✅ Größte zuerst → /25 für 80, dann /26 für 30, dann /28 für 10, dann /30 für WAN
3. ✅ Tabelle erstellen und Ranges sequenziell zuordnen
4. ✅ Finale Kontrolle: Keine Überschneidungen? Passt alles rein?
5. ✅ Fertig! 🎯

Viel Erfolg bei der Prüfung!
