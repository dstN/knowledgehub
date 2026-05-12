---
title: CIDR – Classless Inter-Domain Routing
description: Von klassenbasierten IP-Netzen zu CIDR – Theorie, Notation, Subnetzmasken und flexible Netzaufteilung für angehende Fachinformatiker
---

CIDR (Classless Inter-Domain Routing) ist das heute dominierende Verfahren zur Zuweisung und Verwaltung von IP-Adressen. Es löste in den 1990er Jahren die starre klassenbasierte Einteilung (Klasse A, B, C) ab und ermöglicht eine **flexible, bedarfsgerechte** Aufteilung des IP-Adressraums.

---

## Historischer Hintergrund: Klassenbasierte IP-Adressen

### Die Klassen A, B und C

In den **1980er Jahren** wurde der IPv4-Adressraum in feste Klassen unterteilt. Die Zuordnung einer Adresse zu einer Klasse erfolgte anhand der **ersten Bits** der IP-Adresse:

| Klasse | Erstes Bit(s) | Bereich (1. Oktett) | Standard-Präfix | Max. Netze | Max. Hosts/Netz |
|--------|--------------|---------------------|-----------------|------------|-----------------|
| A      | `0`          | 1 – 126             | /8              | 126        | 16.777.214      |
| B      | `10`         | 128 – 191           | /16             | 16.384     | 65.534          |
| C      | `110`        | 192 – 223           | /24             | 2.097.152  | 254             |
| D      | `1110`       | 224 – 239           | –               | –          | Multicast       |
| E      | `1111`       | 240 – 255           | –               | –          | Reserviert      |

### Erkennung der Klasse anhand der Anfangsbits

```
Klasse A:  0xxxxxxx.xxxxxxxx.xxxxxxxx.xxxxxxxx
Klasse B:  10xxxxxx.xxxxxxxx.xxxxxxxx.xxxxxxxx
Klasse C:  110xxxxx.xxxxxxxx.xxxxxxxx.xxxxxxxx
Klasse D:  1110xxxx.xxxxxxxx.xxxxxxxx.xxxxxxxx
Klasse E:  1111xxxx.xxxxxxxx.xxxxxxxx.xxxxxxxx
```

**Beispiel: Klasse bestimmen**

```
IP: 165.0.0.1
1. Oktett: 165 = 10100101 → beginnt mit "10" → Klasse B
```

```
IP: 192.168.1.1
1. Oktett: 192 = 11000000 → beginnt mit "110" → Klasse C
```

```
IP: 10.0.0.1
1. Oktett: 10 = 00001010 → beginnt mit "0" → Klasse A
```

---

## Das Problem der klassischen Einteilung

### Verschwendung von Adressraum

Die starre Klassenstruktur führte zu massiver Adressverschwendung:

- Ein Unternehmen mit **300 Hosts** braucht ein Klasse-B-Netz (65.534 Hosts) – **65.234 Adressen ungenutzt**
- Ein Unternehmen mit **260 Hosts** passt nicht in ein Klasse-C-Netz (254 Hosts), aber ein Klasse-B ist viel zu groß

### Explosion der Routing-Tabellen

Da jede Organisation ein eigenes Netz erhielt, wuchsen die globalen Routing-Tabellen der Internet-Router unkontrolliert an.

### Die Lösung: CIDR

CIDR (eingeführt 1993, RFC 1519) erlaubt es, die Netzgrenze **beliebig** zu setzen – nicht mehr gebunden an die festen Oktettgrenzen der Klassen A, B und C.

---

## CIDR-Notation

### Präfixschreibweise

In der CIDR-Notation wird nach der IP-Adresse ein Schrägstrich mit der **Anzahl der Netzanteil-Bits** angehängt:

```
192.168.1.0/24
^^^^^^^^^^ ^^
IP-Adresse  Präfixlänge (= Anzahl der Netz-Bits)
```

### Vergleich: Klassenbasiert vs. CIDR

| Darstellung | Beispiel | Bedeutung |
|-------------|---------|-----------|
| Klassenbasiert | `192.168.1.0` (implizit Klasse C) | Immer /24, 254 Hosts |
| CIDR | `192.168.1.0/26` | Flexibel: /26, 62 Hosts |
| CIDR | `172.16.0.0/12` | Großer Block: 1.048.574 Hosts |

---

## Subnetzmaske und CIDR: Zusammenhang

Die **Subnetzmaske** ist die traditionelle Darstellung dessen, was CIDR als Präfixlänge ausdrückt:

### Umrechnungsregel

Eine Subnetzmaske besteht aus einem zusammenhängenden Block von Einsen, gefolgt von Nullen:

```
/24  →  11111111.11111111.11111111.00000000  →  255.255.255.0
/26  →  11111111.11111111.11111111.11000000  →  255.255.255.192
/19  →  11111111.11111111.11100000.00000000  →  255.255.224.0
/17  →  11111111.11111111.10000000.00000000  →  255.255.128.0
```

### Binär zu Dezimal – Schlüsselwerte pro Oktett

Für die Umrechnung muss man die Bitwerte des letzten „gemischten" Oktetts kennen:

| Bit-Position | 7   | 6   | 5   | 4   | 3  | 2  | 1  | 0  |
|-------------|-----|-----|-----|-----|----|----|----|----|
| Wert         | 128 | 64  | 32  | 16  | 8  | 4  | 2  | 1  |

**Beispiel /26:**  
Die ersten 26 Bits sind `1`. Im 4. Oktett sind das 2 weitere Bits (26 − 24 = 2):  
`11000000` = 128 + 64 = **192** → Maske: `255.255.255.192`

**Beispiel /19:**  
Die ersten 19 Bits sind `1`. Im 3. Oktett sind das 3 weitere Bits (19 − 16 = 3):  
`11100000` = 128 + 64 + 32 = **224** → Maske: `255.255.224.0`

**Beispiel /17:**  
Im 3. Oktett ist 1 weiteres Bit gesetzt (17 − 16 = 1):  
`10000000` = 128 → Maske: `255.255.128.0`

---

## Von Klassennetzen zu CIDR: Konkretes Beispiel

### Ausgangssituation (klassenbasiert)

```
IP-Adresse:   165.0.0.1
Klasse:       B (weil 1. Oktett 128–191)
Standard-Maske: 255.255.0.0  (/16)
Hostbereich:  165.0.0.1 bis 165.0.255.254  (65.534 Hosts)
```

### Mit CIDR / Subnetzmaske

Wenn für dieses Netz die Maske `255.255.255.0` (/24) verwendet wird:

```
IP-Adresse:    165.0.0.1
Subnetzmaske:  255.255.255.0  (/24)
Netzadresse:   165.0.0.0
Hostbereich:   165.0.0.1 bis 165.0.0.254  (nur 254 Hosts)
```

Obwohl `165.0.0.1` technisch ein **Klasse-B-Netz** ist (16 Bits Netzanteil), wird durch die Maske `255.255.255.0` **nur ein /24-Subnetz** dieses Klasse-B-Netzes genutzt – mit lediglich 254 statt 65.534 Hostadressen.

> **Kernaussage:** Die verwendete Subnetzmaske überschreibt die implizite Klassengrenze. In der modernen Netzwerktechnik ist die **Subnetzmaske (CIDR-Präfix) maßgeblich** – nicht die historische Klassenzugehörigkeit.

---

## CIDR-Aggregation (Supernetting)

CIDR kann nicht nur Netze verkleinern (Subnetting), sondern auch mehrere kleine Netze zu einem großen Block zusammenfassen (**Supernetting** oder **Route Aggregation**):

### Beispiel

Vier Klasse-C-Netze:
```
192.168.0.0/24
192.168.1.0/24
192.168.2.0/24
192.168.3.0/24
```

Diese lassen sich zu einem einzigen CIDR-Block zusammenfassen:
```
192.168.0.0/22
```

Denn die ersten 22 Bits sind bei allen vier Netzen identisch:
```
192.168.0.0 = 11000000.10101000.000000|00.00000000
192.168.1.0 = 11000000.10101000.000000|01.00000000
192.168.2.0 = 11000000.10101000.000000|10.00000000
192.168.3.0 = 11000000.10101000.000000|11.00000000
                                       ^^ unterschiedlich
```

→ Die ersten **22 Bits** sind gleich → `/22` als gemeinsamer Präfix.

**Vorteil:** Router benötigen nur **einen Routing-Eintrag** statt vier.

---

## Vollständige Präfix-Referenztabelle

Diese Tabelle zeigt für jeden Präfix die Subnetzmaske in Dezimal und Binär sowie die Anzahl nutzbarer Hostadressen:

| Präfix | Subnetzmaske (Dezimal) | Letztes relevantes Oktett (Binär) | Nutzbare Hosts |
|--------|------------------------|-----------------------------------|----------------|
| /8     | 255.0.0.0              | 2. Okt.: `00000000`               | 16.777.214     |
| /9     | 255.128.0.0            | 2. Okt.: `10000000`               | 8.388.606      |
| /10    | 255.192.0.0            | 2. Okt.: `11000000`               | 4.194.302      |
| /11    | 255.224.0.0            | 2. Okt.: `11100000`               | 2.097.150      |
| /12    | 255.240.0.0            | 2. Okt.: `11110000`               | 1.048.574      |
| /13    | 255.248.0.0            | 2. Okt.: `11111000`               | 524.286        |
| /14    | 255.252.0.0            | 2. Okt.: `11111100`               | 262.142        |
| /15    | 255.254.0.0            | 2. Okt.: `11111110`               | 131.070        |
| /16    | 255.255.0.0            | 3. Okt.: `00000000`               | 65.534         |
| /17    | 255.255.128.0          | 3. Okt.: `10000000`               | 32.766         |
| /18    | 255.255.192.0          | 3. Okt.: `11000000`               | 16.382         |
| /19    | 255.255.224.0          | 3. Okt.: `11100000`               | 8.190          |
| /20    | 255.255.240.0          | 3. Okt.: `11110000`               | 4.094          |
| /21    | 255.255.248.0          | 3. Okt.: `11111000`               | 2.046          |
| /22    | 255.255.252.0          | 3. Okt.: `11111100`               | 1.022          |
| /23    | 255.255.254.0          | 3. Okt.: `11111110`               | 510            |
| /24    | 255.255.255.0          | 4. Okt.: `00000000`               | 254            |
| /25    | 255.255.255.128        | 4. Okt.: `10000000`               | 126            |
| /26    | 255.255.255.192        | 4. Okt.: `11000000`               | 62             |
| /27    | 255.255.255.224        | 4. Okt.: `11100000`               | 30             |
| /28    | 255.255.255.240        | 4. Okt.: `11110000`               | 14             |
| /29    | 255.255.255.248        | 4. Okt.: `11111000`               | 6              |
| /30    | 255.255.255.252        | 4. Okt.: `11111100`               | 2              |

---

## Private IP-Adressbereiche (RFC 1918)

Diese Adressbereiche sind für **private Netzwerke** reserviert und werden im Internet nicht geroutet. Sie dürfen innerhalb von Organisationen frei verwendet werden:

| Klasse | Bereich                        | CIDR-Block      | Anzahl Adressen |
|--------|-------------------------------|-----------------|-----------------|
| A      | 10.0.0.0 – 10.255.255.255     | 10.0.0.0/8      | 16.777.216      |
| B      | 172.16.0.0 – 172.31.255.255   | 172.16.0.0/12   | 1.048.576       |
| C      | 192.168.0.0 – 192.168.255.255 | 192.168.0.0/16  | 65.536          |

> Die Unterrichtsbeispiele (`192.168.1.0`, `172.16.128.0`) verwenden bewusst private Adressbereiche.

---

## Zusammenfassung: Klassenbasiert vs. CIDR

| Merkmal | Klassenbasiert (1980er) | CIDR (ab 1993) |
|---------|------------------------|----------------|
| Netzgrenze | Fest (8/16/24 Bits) | Beliebig (1–30 Bits) |
| Flexibilität | Gering | Hoch |
| Adresseffizienz | Schlecht (Verschwendung) | Gut (bedarfsgerecht) |
| Routing-Tabellen | Groß (viele Einträge) | Klein (Aggregation möglich) |
| Notation | Nur IP-Adresse | IP/Präfix (z.B. /24) |
| Relevanz heute | Veraltet | Standard |

> **Fazit:** Die Klassen A, B und C sind historisch relevant für das Verständnis, aber in der modernen Netzwerktechnik vollständig durch CIDR abgelöst. Die **Subnetzmaske** (bzw. der CIDR-Präfix) ist das einzige maßgebliche Kriterium zur Netzaufteilung.
