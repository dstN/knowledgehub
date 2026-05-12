---
title: IP & Subnetting – Cheatsheet
description: Druckbares Cheatsheet mit allen wichtigen Tabellen zu IP-Klassen, Subnetzmasken /8–/30, privaten Adressbereichen und Formeln
---

> **Drucktipp:** Öffne die Druckvorschau (Strg+P), wähle „Hintergrundgrafiken drucken" ab für ein cleanes schwarz-weißes Ergebnis.

---

## IP-Adressklassen (klassisch)

| Klasse | 1. Oktett | Startbits | Standard-Präfix | Standardmaske   | Max. Hosts/Netz |
|--------|-----------|-----------|-----------------|-----------------|-----------------|
| A      | 1–126     | `0`       | /8              | 255.0.0.0       | 16.777.214      |
| B      | 128–191   | `10`      | /16             | 255.255.0.0     | 65.534          |
| C      | 192–223   | `110`     | /24             | 255.255.255.0   | 254             |
| D      | 224–239   | `1110`    | –               | –               | Multicast       |
| E      | 240–255   | `1111`    | –               | –               | Reserviert      |

---

## Private Adressbereiche (RFC 1918)

| Klasse | Bereich                         | CIDR-Block     | Adressen   |
|--------|---------------------------------|----------------|------------|
| A      | 10.0.0.0 – 10.255.255.255       | 10.0.0.0/8     | 16.777.216 |
| B      | 172.16.0.0 – 172.31.255.255     | 172.16.0.0/12  | 1.048.576  |
| C      | 192.168.0.0 – 192.168.255.255   | 192.168.0.0/16 | 65.536     |

---

## Vollständige Subnetzmasken-Tabelle /8 – /30

| Präfix | Subnetzmaske       | Adressen    | Nutzbare Hosts | Schrittgröße  |
|--------|--------------------|-------------|----------------|---------------|
| /8     | 255.0.0.0          | 16.777.216  | 16.777.214     | 2. Okt.: 1    |
| /9     | 255.128.0.0        | 8.388.608   | 8.388.606      | 2. Okt.: 128  |
| /10    | 255.192.0.0        | 4.194.304   | 4.194.302      | 2. Okt.: 64   |
| /11    | 255.224.0.0        | 2.097.152   | 2.097.150      | 2. Okt.: 32   |
| /12    | 255.240.0.0        | 1.048.576   | 1.048.574      | 2. Okt.: 16   |
| /13    | 255.248.0.0        | 524.288     | 524.286        | 2. Okt.: 8    |
| /14    | 255.252.0.0        | 262.144     | 262.142        | 2. Okt.: 4    |
| /15    | 255.254.0.0        | 131.072     | 131.070        | 2. Okt.: 2    |
| /16    | 255.255.0.0        | 65.536      | 65.534         | 3. Okt.: 1    |
| /17    | 255.255.128.0      | 32.768      | 32.766         | 3. Okt.: 128  |
| /18    | 255.255.192.0      | 16.384      | 16.382         | 3. Okt.: 64   |
| /19    | 255.255.224.0      | 8.192       | 8.190          | 3. Okt.: 32   |
| /20    | 255.255.240.0      | 4.096       | 4.094          | 3. Okt.: 16   |
| /21    | 255.255.248.0      | 2.048       | 2.046          | 3. Okt.: 8    |
| /22    | 255.255.252.0      | 1.024       | 1.022          | 3. Okt.: 4    |
| /23    | 255.255.254.0      | 512         | 510            | 3. Okt.: 2    |
| /24    | 255.255.255.0      | 256         | 254            | 4. Okt.: 1    |
| /25    | 255.255.255.128    | 128         | 126            | 4. Okt.: 128  |
| /26    | 255.255.255.192    | 64          | 62             | 4. Okt.: 64   |
| /27    | 255.255.255.224    | 32          | 30             | 4. Okt.: 32   |
| /28    | 255.255.255.240    | 16          | 14             | 4. Okt.: 16   |
| /29    | 255.255.255.248    | 8           | 6              | 4. Okt.: 8    |
| /30    | 255.255.255.252    | 4           | 2              | 4. Okt.: 4    |

---

## Bitwerte pro Oktett

| Bit-Pos. | 7   | 6  | 5  | 4  | 3 | 2 | 1 | 0 |
|----------|-----|----|----|----|---|---|---|---|
| Wert      | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |

**Masken-Schnellreferenz (letztes/gemischtes Oktett):**

| Gesetzte Bits | Binär    | Dezimal | Schrittgröße |
|--------------|----------|---------|--------------|
| 1            | 10000000 | 128     | 128          |
| 2            | 11000000 | 192     | 64           |
| 3            | 11100000 | 224     | 32           |
| 4            | 11110000 | 240     | 16           |
| 5            | 11111000 | 248     | 8            |
| 6            | 11111100 | 252     | 4            |

---

## Binärtabelle 0–15

| Dez | Bin  | Dez | Bin  |
|-----|------|-----|------|
| 0   | 0000 | 8   | 1000 |
| 1   | 0001 | 9   | 1001 |
| 2   | 0010 | 10  | 1010 |
| 3   | 0011 | 11  | 1011 |
| 4   | 0100 | 12  | 1100 |
| 5   | 0101 | 13  | 1101 |
| 6   | 0110 | 14  | 1110 |
| 7   | 0111 | 15  | 1111 |

---

## Formeln

```
Nutzbare Hosts     = 2^(32 - Präfix) - 2
Anzahl Subnetze    = 2^(geliehene Bits)
Schrittgröße       = 256 - letzter Maskenwert (gemischtes Oktett)
Netzadresse        = IP AND Maske (bitweise)
Broadcast          = Netzadresse OR invertierte Maske
```

---

## 5-Schritte-Methode Subnetting

```
1. Benötigte Subnetze → kleinstes x mit 2^x >= Ziel
2. Neuer Präfix       → alter Präfix + x
3. Neue Maske         → x Bits im nächsten Oktett setzen, 256 - Wert = Schrittgröße
4. IP-Ranges          → Netzadresse, +1 erste Host, +Schritt-2 letzte Host, +Schritt-1 Broadcast
5. Wiederholen        → für alle Subnetze
```

---

## Subnetz-Checkliste (Prüfung)

- [ ] Subnetzmaske → Präfixlänge bestimmen (Bits zählen)
- [ ] AND-Verknüpfung IP + Maske → Netzadresse
- [ ] Netzadresse + alle 1 im Hostanteil → Broadcast
- [ ] Erste nutzbare IP = Netzadresse + 1
- [ ] Letzte nutzbare IP = Broadcast - 1
- [ ] Anzahl Hosts = 2^(Hostbits) - 2
- [ ] Präfix >30 → nicht sinnvoll
