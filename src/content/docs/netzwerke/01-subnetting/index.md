---
title: Subnetting – Übersicht
description: Grundlagen des Subnettings – Netzaufteilung, Binärrechnung, Subnetzmasken und vollständige Berechnungsbeispiele für angehende Fachinformatiker
---

# Subnetting

Subnetting bezeichnet die Technik, ein IP-Netzwerk in mehrere kleinere Teilnetze (**Subnetze**) aufzuteilen. Dies ermöglicht eine effizientere Nutzung des verfügbaren IP-Adressraums und verbessert die Netzwerkorganisation, Sicherheit und Performance.

---

## Inhalt dieses Themas

- [Subnetting – Übersicht](/netzwerke/01-subnetting/) ← du bist hier
- [CIDR – Classless Inter-Domain Routing](/netzwerke/01-subnetting/cidr/)
- [Schritt-für-Schritt-Berechnung](/netzwerke/01-subnetting/berechnung/)

---

## Grundbegriffe

### IP-Adresse

Eine IPv4-Adresse besteht aus **32 Bits**, die in vier Oktette (jeweils 8 Bits) aufgeteilt und dezimal dargestellt werden:

```
192    .  168    .    1   .   0
11000000.10101000.00000001.00000000
```

### Netzanteil und Hostanteil

Jede IP-Adresse besteht aus zwei Teilen:

| Teil | Bedeutung |
|------|-----------|
| **Netzanteil** | Identifiziert das Netzwerk (identisch für alle Geräte im selben Netz) |
| **Hostanteil** | Identifiziert ein einzelnes Gerät innerhalb des Netzwerks |

Die **Subnetzmaske** definiert, wie viele Bits zum Netzanteil gehören.

---

## Die Subnetzmaske

### Aufbau

Die Subnetzmaske ist ebenfalls 32 Bits lang. Sie besteht aus einem Block von Einsen (Netzanteil) gefolgt von einem Block von Nullen (Hostanteil):

```
255    .  255    .  255    .    0
11111111.11111111.11111111.00000000
```

Die Einsen markieren den **Netzanteil**, die Nullen den **Hostanteil**.

### CIDR-Schreibweise (Präfixlänge)

Statt `255.255.255.0` schreibt man in der CIDR-Notation `/24` – die Zahl gibt an, wie viele Bits auf `1` gesetzt sind:

```
192.168.1.0/24   →   Netzmaske: 255.255.255.0
```

---

## Binärtabelle (0–15)

Diese Tabelle ist das Fundament jeder Subnetzberechnung. Dezimalwerte müssen sicher in Binär umgewandelt werden können:

| Dezimal | Binär (4-Bit) | Dezimal | Binär (4-Bit) |
|---------|--------------|---------|--------------|
| 0       | 0000         | 8       | 1000         |
| 1       | 0001         | 9       | 1001         |
| 2       | 0010         | 10      | 1010         |
| 3       | 0011         | 11      | 1011         |
| 4       | 0100         | 12      | 1100         |
| 5       | 0101         | 13      | 1101         |
| 6       | 0110         | 14      | 1110         |
| 7       | 0111         | 15      | 1111         |

> **Merkhilfe:** Jede Stelle hat einen festen Wert: Bit 3 = 8, Bit 2 = 4, Bit 1 = 2, Bit 0 = 1. Die Summe der gesetzten Bits ergibt den Dezimalwert.

---

## Vollständige Subnetzmasken-Tabelle (/8 bis /30)

Diese Tabelle zeigt alle praxisrelevanten Präfixlängen mit der zugehörigen Subnetzmaske, der Anzahl möglicher Adressen, und der Anzahl **nutzbarer Hostadressen** (Formel: `2^(32-n) - 2`, da Netzadresse und Broadcast reserviert sind):

| Präfix | Subnetzmaske      | Anzahl Adressen | Nutzbare Hosts | Typische Verwendung        |
|--------|-------------------|-----------------|----------------|----------------------------|
| /8     | 255.0.0.0         | 16.777.216      | 16.777.214     | Klasse-A-Netz              |
| /9     | 255.128.0.0       | 8.388.608       | 8.388.606      | Großes Unternehmensnetz    |
| /10    | 255.192.0.0       | 4.194.304       | 4.194.302      | Großes Unternehmensnetz    |
| /11    | 255.224.0.0       | 2.097.152       | 2.097.150      | Großes Unternehmensnetz    |
| /12    | 255.240.0.0       | 1.048.576       | 1.048.574      | Großes Unternehmensnetz    |
| /13    | 255.248.0.0       | 524.288         | 524.286        | Großes Unternehmensnetz    |
| /14    | 255.252.0.0       | 262.144         | 262.142        | Großes Unternehmensnetz    |
| /15    | 255.254.0.0       | 131.072         | 131.070        | Großes Unternehmensnetz    |
| /16    | 255.255.0.0       | 65.536          | 65.534         | Klasse-B-Netz              |
| /17    | 255.255.128.0     | 32.768          | 32.766         | Mittelgroßes Netz          |
| /18    | 255.255.192.0     | 16.384          | 16.382         | Mittelgroßes Netz          |
| /19    | 255.255.224.0     | 8.192           | 8.190          | Mittelgroßes Netz          |
| /20    | 255.255.240.0     | 4.096           | 4.094          | Mittelgroßes Netz          |
| /21    | 255.255.248.0     | 2.048           | 2.046          | Kleineres Netz             |
| /22    | 255.255.252.0     | 1.024           | 1.022          | Kleineres Netz             |
| /23    | 255.255.254.0     | 512             | 510            | Kleineres Netz             |
| /24    | 255.255.255.0     | 256             | 254            | Klasse-C-Netz, häufigste   |
| /25    | 255.255.255.128   | 128             | 126            | Kleine Abteilung           |
| /26    | 255.255.255.192   | 64              | 62             | Kleine Abteilung           |
| /27    | 255.255.255.224   | 32              | 30             | Kleines Segment            |
| /28    | 255.255.255.240   | 16              | 14             | Kleines Segment            |
| /29    | 255.255.255.248   | 8               | 6              | Sehr kleines Segment       |
| /30    | 255.255.255.252   | 4               | 2              | Punkt-zu-Punkt-Verbindung  |

> **Hinweis:** Masken größer als /30 sind **nicht sinnvoll**, da bei /31 nur 2 Adressen (2^1 = 2) vorhanden wären – beide bereits durch Netzadresse und Broadcast belegt. Es verblieben **0 nutzbare Hostadressen**.

---

## Mathematische Formeln

### Nutzbare Hostadressen

```
Nutzbare Hosts = 2^(32 - n) - 2
```

Dabei ist `n` die Präfixlänge (z.B. 24 bei /24).

- Die **−2** ergibt sich aus der reservierten **Netzadresse** (Hostanteil = alle 0) und der **Broadcast-Adresse** (Hostanteil = alle 1).

**Beispiele:**

| Präfix | Formel                      | Ergebnis |
|--------|-----------------------------|----------|
| /24    | 2^(32-24) - 2 = 2^8 - 2    | 254      |
| /26    | 2^(32-26) - 2 = 2^6 - 2    | 62       |
| /19    | 2^(32-19) - 2 = 2^13 - 2   | 8.190    |
| /30    | 2^(32-30) - 2 = 2^2 - 2    | 2        |

### Anzahl der Subnetze

Wenn man einem bestehenden Netzwerk `x` weitere Bits für den Netzanteil hinzufügt, entstehen:

```
Anzahl Subnetze = 2^x
```

| Hinzugefügte Bits (x) | Formel | Subnetze |
|-----------------------|--------|----------|
| 1                     | 2^1    | 2        |
| 2                     | 2^2    | 4        |
| 3                     | 2^3    | 8        |
| 4                     | 2^4    | 16       |
| 5                     | 2^5    | 32       |

---

## Spezielle Adressen in einem Subnetz

Jedes Subnetz hat **zwei reservierte Adressen**, die keinem Gerät zugewiesen werden dürfen:

| Adresse | Eigenschaft | Beschreibung |
|---------|-------------|--------------|
| **Netzadresse** | Hostanteil = alle 0 | Identifiziert das Netzwerk selbst |
| **Broadcast-Adresse** | Hostanteil = alle 1 | Sendet an alle Geräte im Netz |

**Beispiel für `192.168.1.0/24`:**

| Adresse | Wert |
|---------|------|
| Netzadresse | 192.168.1.0 |
| Erste nutzbare Adresse | 192.168.1.1 |
| Letzte nutzbare Adresse | 192.168.1.254 |
| Broadcast | 192.168.1.255 |

---

## Berechnung: Netzadresse bestimmen (AND-Verknüpfung)

Um die Netzadresse zu ermitteln, wird die IP-Adresse **bitweise AND** mit der Subnetzmaske verknüpft:

```
IP-Adresse:    165. 32. 64. 19
               10100101.00100000.01000000.00010011

Subnetzmaske:  255.255.255.  0
               11111111.11111111.11111111.00000000

AND-Ergebnis:  10100101.00100000.01000000.00000000
Netzadresse:   165. 32. 64.  0
```

**Regel:** Überall, wo die Maske eine `1` hat, wird der IP-Bit übernommen. Überall wo die Maske eine `0` hat, wird der Bit auf `0` gesetzt.

> **Aufgabe aus dem Unterricht:**  
> Gegeben: IP `165.32.64.19`, Maske `255.255.255.0`  
> → Netzadresse: `165.32.64.0`  
> → Broadcast: `165.32.64.255`

---

## Subnetting-Beispiel: `192.168.1.0/26`

Ausgangsnetz: `192.168.1.0/24` wird auf `/26` verfeinert.

### Was passiert bei /26?

Von /24 auf /26: **2 zusätzliche Bits** werden dem Netzanteil zugeschlagen → 2^2 = 4 Subnetze entstehen.

Jedes Subnetz hat 2^6 = 64 Adressen, davon **62 nutzbar**.

### Vollständige Adresstabelle `192.168.1.0/26`

Die 4 Subnetze im binären Überblick (letztes Oktett):

| Dezimal | Binär    | Bedeutung              |
|---------|----------|------------------------|
| 0       | 00000000 | Netzadresse Subnetz 1  |
| 1       | 00000001 | 1. nutzbare Adresse    |
| …       | …        | …                      |
| 63      | 00111111 | Broadcast Subnetz 1    |
| 64      | 01000000 | Netzadresse Subnetz 2  |
| 65      | 01000001 | 1. nutzbare Adresse    |
| …       | …        | …                      |
| 127     | 01111111 | Broadcast Subnetz 2    |
| 128     | 10000000 | Netzadresse Subnetz 3  |
| 129     | 10000001 | 1. nutzbare Adresse    |
| …       | …        | …                      |
| 191     | 10111111 | Broadcast Subnetz 3    |
| 192     | 11000000 | Netzadresse Subnetz 4  |
| 193     | 11000001 | 1. nutzbare Adresse    |
| …       | …        | …                      |
| 255     | 11111111 | Broadcast Subnetz 4    |

### Übersichtstabelle der 4 Subnetze

| Subnetz | Netzadresse      | Subnetzmaske      | Präfix | Erste nutzbare | Letzte nutzbare | Broadcast        |
|---------|-----------------|-------------------|--------|----------------|-----------------|-----------------|
| 1       | 192.168.1.0     | 255.255.255.192   | /26    | 192.168.1.1    | 192.168.1.62    | 192.168.1.63    |
| 2       | 192.168.1.64    | 255.255.255.192   | /26    | 192.168.1.65   | 192.168.1.126   | 192.168.1.127   |
| 3       | 192.168.1.128   | 255.255.255.192   | /26    | 192.168.1.129  | 192.168.1.190   | 192.168.1.191   |
| 4       | 192.168.1.192   | 255.255.255.192   | /26    | 192.168.1.193  | 192.168.1.254   | 192.168.1.255   |

> Die Subnetzmaske **255.255.255.192** ergibt sich, weil im letzten Oktett die ersten 2 Bits gesetzt sind: `11000000` = 192.

---

## Großes Subnetting-Beispiel: `172.16.128.0/17` → 4 Teilnetze

Dies ist das vollständige Rechenbeispiel aus dem Unterricht.

### Ausgangssituation

```
Netzwerk:      172.16.128.0
Subnetzmaske:  255.255.128.0  (/17)
```

### Schritt 1: Wie viele Adressen hat das Ausgangsnetz?

Subnetzmaske: `255.255.128.0`

Binärdarstellung:
```
255       255       128       0
11111111. 11111111. 10000000. 00000000
```

Gesetzte Bits: 8 + 8 + 1 = **17** → Präfix /17

Hostbits: 32 − 17 = **15 Bits**

```
Adressen = 2^15 = 1024 x 32 = 32.768
```

### Schritt 2: Wie viele Adressen hat jedes Teilnetz?

Für **4 Teilnetze** werden 2^2 = 4 benötigt → **2 zusätzliche Bits** für den Netzanteil.

Neuer Präfix: /17 + 2 = **/19**

Hostbits: 32 − 19 = **13 Bits**

```
Adressen pro Teilnetz = 2^13 = 1024 x 8 = 8.192
```

Nutzbare Hosts: 8.192 - 2 = 8.190

### Schritt 3: Welche Teilnetze entstehen?

Ausgangsnetz in Binär:
```
10101100.00010000.10000000.00000000
^^^^^^^^^^^^^^^   ^^                ^^^^^^^^^^^^^^^^
   Netzanteil     Teilnetz-Bits     Hostanteil
   (alt, 17 Bit)  (neu, 2 Bit)     (13 Bit)
```

Die zwei neuen Bits nehmen alle vier Kombinationen an:

| Bits | Kombination |
|------|-------------|
| 00   | 1. Teilnetz |
| 01   | 2. Teilnetz |
| 10   | 3. Teilnetz |
| 11   | 4. Teilnetz |

**Berechnung der Netzadressen (3. Oktett entscheidend):**

```
10101100.00010000.10|00|0000.00000000  →  172.16.128.0   /19
10101100.00010000.10|01|0000.00000000  →  172.16.160.0   /19
10101100.00010000.10|10|0000.00000000  →  172.16.192.0   /19  ← Achtung: 10+10=11000000=192
10101100.00010000.10|11|0000.00000000  →  172.16.224.0   /19
```

> Erklärung 3. Oktett für Teilnetz 3:  
> `10100000` = 128 + 32 = 160  
> `11000000` = 128 + 64 = 192  
> `11100000` = 128 + 64 + 32 = 224

### Schritt 4: Vollständige Ergebnistabelle

**Neue Teilnetze (/19):**

| Teilnetz | Netzadresse    | Subnetzmaske  | Präfix | 1. Verfügbare  | Letzte Verfügbare | Broadcast       |
|----------|---------------|---------------|--------|----------------|-------------------|----------------|
| 1        | 172.16.128.0  | 255.255.224.0 | /19    | 172.16.128.1   | 172.16.159.254    | 172.16.159.255 |
| 2        | 172.16.160.0  | 255.255.224.0 | /19    | 172.16.160.1   | 172.16.191.254    | 172.16.191.255 |
| 3        | 172.16.192.0  | 255.255.224.0 | /19    | 172.16.192.1   | 172.16.223.254    | 172.16.223.255 |
| 4        | 172.16.224.0  | 255.255.224.0 | /19    | 172.16.224.1   | 172.16.255.254    | 172.16.255.255 |

**Zum Vergleich – altes Ausgangsnetz (/17):**

| Netzadresse   | Subnetzmaske  | Präfix | 1. Verfügbare | Letzte Verfügbare | Broadcast       |
|--------------|---------------|--------|---------------|-------------------|----------------|
| 172.16.128.0 | 255.255.128.0 | /17    | 172.16.128.1  | 172.16.255.254    | 172.16.255.255 |

---

## Klassenbasierte Netze vs. Subnetting

Die ursprünglichen IP-Adressklassen definierten feste Netzgrenzen:

| Klasse | Bereich (1. Oktett) | Standard-Maske | Max. Hosts  |
|--------|---------------------|----------------|-------------|
| A      | 1 – 126             | /8 (255.0.0.0) | 16.777.214  |
| B      | 128 – 191           | /16 (255.255.0.0) | 65.534   |
| C      | 192 – 223           | /24 (255.255.255.0) | 254    |
| D      | 224 – 239           | Multicast (keine Hosts) | –  |
| E      | 240 – 255           | Reserviert | –          |

Subnetting erlaubt es, diese starren Grenzen zu **überschreiben**. So kann ein Klasse-B-Netz (`165.0.0.0`) mit der Maske `255.255.255.0` (/24) genauso behandelt werden wie ein Klasse-C-Netz – es stehen dann nur 254 Hostadressen zur Verfügung statt 65.534.

---

## Merksätze für die Prüfung

- **Netzadresse**: Hostanteil = alle `0`
- **Broadcast**: Hostanteil = alle `1`
- **Nutzbare Hosts**: 2^(Hostbits) - 2
- **Anzahl Subnetze**: 2^(geliehene Bits)
- **Masken >30 sind sinnlos**: Bei /31 bleiben 0 nutzbare Hosts
- **AND-Verknüpfung** von IP + Maske → ergibt immer die Netzadresse
