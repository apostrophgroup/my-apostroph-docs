# apoCONNECTORS

# Drupal



## Einführung [](#introduction)

Der **apoCONNECTOR** für Drupal ermöglicht eine Anbindung zwischen einen Drupal CMS und Apostroph. So können Sie uns direkt von Drupal aus Übersetzung Aufträge schicken. Es gibt verschiedene Möglichkeiten, wie Sie Inhalt an Apostroph für die Übersetzung senden können:

- Eine Seite oder mehrere senden.
- Seite in mehrere Sprachen übersetzen lassen.
- Seite direkt an Apostroph senden oder zuerst alle in eine **Cart** sammeln und dann senden.

## Voraussetzung [](#prerequisite)

- Drupal 8.x oder 9.x ist installiert.
- Translation Management Tool ([TMGMT](https://www.drupal.org/project/tmgmt)) Modul ist installiert und konfiguriert.
- Sie besitzen eine **CustomerID**, die Sie bei Apostroph identifiziert (wird von Apostroph zur Verfügung gestellt).
- Sie besitzen einen Benutzernamen und entsprechendes Password für die Verbindung zur Apostroph API (wird von Apostroph zur Verfügung gestellt).

## Installation [](#installation)

Der Apostroph Connector für Drupal ist ein Plugin für Drupals Translation Management Tool ([TMGMT](https://www.drupal.org/project/tmgmt)) Modul. Die Funktionalität des Plugins wird dem Benutzer als Teil von [TMGMT](https://www.drupal.org/project/tmgmt) angezeigt. Der **apoCONNECTOR** unterstützt alle Browser, die auch von Drupal [TMGMT](https://www.drupal.org/project/tmgmt) unterstützt werden.

1. Wählen Sie in Drupal **Extend** im Menu und klicken Sie **Install new module**.
2. Im **Install from a URL** Feld geben Sie folgende URL ein:

```
https://ftp.drupal.org/files/projects/tmgmt_apostrophgroup_provider-8.x-2.0.zip
```

3. Klicken Sie auf **Install** und Drupal wir das neue Modul installieren.
4. Nach dem das Modul installiert wurde muss es noch aktiviert werden. Dafür wählen Sie wieder **Extend** im Drupal Menu.
5. Suchen Sie nun das neue Modul in der Liste und aktivieren Sie die **checkbox**.

6. Nun scrollen sie auf der selben Seite bis zum Ende und klicken Sie **Install**.

Der Drupal **apoCONNECTOR** ist nun installiert.

```
GIF/VIDEO
```

## Einstellung [](#configuration)

Bevor der Connector verwendet werden kann, müssen einige Konfiguration vorgenommen werden.

1. Wählen sie **Translation** im Drupal Menu, dann **Providers**.
2. Klicken Sie auf **Add Provider**, dies öffnet die Konfigurationsseite des **apoCONNECTORS**.
3. Fühlen Sie die Felder ein (siehe [Einstellungsfelder](#configuration-fields)).
4. Klicken Sie dann auf **Connect** für die Überprüfung des Benutzernamens und des Passworts.
5. Stellen Sie den Scheduled Task ein (siehe [Scheduled Task](#configuration-scheduled-task)), falls gewünscht.
6. Im **Remote Languages Mappings** Abschnitt kann ein mapping zwischen den Sprachcodes von Drupal und Apostroph definiert werden. Für jede in Drupal aktivierte Sprache kann ein Sprachcode definiert werden. Beispielwerte finden Sie in der Tabelle. Falls Sie eine Sprache benutzten die nicht in der Tabelle ist, wenden Sie sich an Apostroph.
7. Klicken Sie nun **Save** um die Einstellungen zu speichern.

Die Provider Seite öffnet sich und zeigt Ihre erstellten Provider (Einstellungen) an. Falls Sie eine zusätzliche Einstellung erstellen möchten, wiederholen Sie die beschriebenen Schritte (siehe [Einstellung](#configuration)).

### Scheduled Task [](#configuration-scheduled-task)

Im **Scheduled Task** Abschnitt können Sie wählen, ob der **apoCONNECTOR** alle fertigen Übersetzungen automatisch im Hintergrund herunterlanden und importieren soll.

### Einstellungsfelder [](#configuration-fields)

|                             Feld | Beschreibung                                                 | Beispiel                                                     |
| -------------------------------: | ------------------------------------------------------------ | ------------------------------------------------------------ |
|                            Label | Ein Name für die Konfiguration des Apostroph Providers. Es können verschiedene Konfiguration erstellt werden und daher ist der Name sehe hilfreich für die Unterscheidung. | Apostroph (automatisch online stellen)                       |
|                      Description | Eine Beschreibung die die Konfiguration etwas näher beschreibt. Es können verschiedene Konfigurationen erstellt werden und daher kann eine kurze Beschreibung hilfreich sein. | Übersetzungen die an Apostroph gesendet werden und automatisch online gestellt werden, sobald diese bereit sind. |
| Auto accept finished translation | Zeigt an, ob der Connector die Übersetzungen automatisch akzeptierten und online stellen soll. Checkbox aktivieren, um die Übersetzungen ohne Überprüfung durch Benutzer zu akzeptieren und online stellen. Checkbox deaktivieren damit der Benutzer die Übersetzung überprüfen muss bevor sie online gestellt wird. | Checkbox aktiviert                                           |
|                  Provider plugin | Namens des Provider Plugin.                                  | Apostroph Group Connector                                    |
|                      XLIFF CDATA | Wählen Sie diese Option um die exportierten Inhalte in CDATA-Tags zu verpacken. | Checkbox deaktiviert                                         |
|        Extended XLIFF processing | Wählen Sie diese Option um HTML Tags zu maskieren.           | Checkbox deaktiviert                                         |
|                  Download method | Hier können Sie wählen, wo die exportierten Dateien gespeichert werden sollen. Abhängig von der Drupal-Konfiguration können hier auch andere Optionen zur Auswahl vorhanden sein. | Public local files served by the webserver.                  |
|              Confidential Orders | Aktivieren Sie diese Option falls alle Aufträge, die mit dieser Konfiguration an Apostroph gesendet werden sollen als vertraulich gehandhabt werden sollen. Diese Option lässt sich beim sende des Auftrags noch anpassen, falls nötig. Hier wird die Standardeinstellung definiert. | Checkbox deaktiviert                                         |
|                      Customer ID | Die Kunden-Nr. die Sie von Apostroph erhalten haben. Diese Nummer identifiziert Ihre Aufträge bei Apostroph. Die Nummer kann für jeden Auftrag beim sende noch angepasst werden. Hier wird die Standardeinstellung definiert. | 000000                                                       |
|                              URL | URL zu Apostroph API.                                        | wird von Apostroph mitgeteilt                                |
|                         Username | Benutzername für Apostroph API.                              | wird von Apostroph mitgeteilt                                |
|                         Password | Password für Apostroph API.                                  | wird von Apostroph mitgeteilt                                |

### Spachcodes [](#configuration-language-codes)

| Drupal Sprache  | Apostroph Code |
| --------------- | -------------- |
| English (en-gb) | gb             |
| English (en-us) | usa            |
| German (de-de)  | deD            |
| German (de-ch)  | deC            |
| French (fr-fr)  | frF            |
| French (fr-ch)  | frC            |
| Italian (it-it) | itI            |
| Italian (it-ch) | itC            |

```
GIF/VIDEO
```

## Mehrsprachige Unterstützung aktivieren [](#multilingual-content)

Bevor Inhalt in der Übersetzung gesendet werden kann, muss für die entsprechenden **Content types** in Drupal die mehrsprachige Unterstützung aktiviert werden.

1. Wählen Sie **Structure** im Drupal Menu, dann **Content types**.
2. Unter **Operations** wählen sie Edit für die **Content types**, die sie übersetzen wollen.
3. Klicken sie auf **Language settings**.
4. Wählen Sie **Enable translation**.
5. Klicken Sie **Save content type**.

```
GIF/VIDEO
```

## Inhalt zu Apostroph senden [](#send-apostroph)

### Voraussetzung [](#send-apostroph-prerequisite)

Bevor Sie Inhalt an Apostroph für die Übersetzung senden können, müssen Sie sicherstellen das folgende Punkte erfüllt sind:

- Apostroph Group Translation Provider wurde installiert (siehe [Installation](#installation)). und eingestellt (siehe [Einstellung](#configuration)).
- Alle relevanten **Content types** wurden für die mehrsprachige Unterstützung konfiguriert (siehe [Mehrsprachige Unterstützung aktivieren](#multilingual-content)).

### Übersetzungen senden [](#send-apostroph-translation)

1. Wählen sie **Translation** im Drupal Menu, dann **Source**.
2. Wählen Sie die Seite, die Sie übersetzt haben wollen und klicken Sie **Request Translation** oder **Add to Cart** (falls Sie später ihren Auftrag platzieren wollen). In diesem Beispiel wählen wir **Request Translation**.
3. Die **Checkout** Seite öffnet sich und Sie müssen eigne Felder ergänzen (siehe [Übersetzungsfehler](#send-apostroph-translation-fields)).
4. Nach dem alle Eingaben getätigt sind, klicken sie auf **Submit to provider** um den Auftrag an Apostroph zu senden

Der Auftrag wurde an Apostroph vermittelt und Sie können nun bei Bedarf den Exportierten Inhalt herunterladen und sie die Dateien anschauen.

####  Übersetzungsfehler [](#send-apostroph-translation-fields)

| Feld                | Beschreibung                                                 | Beispiel                                |
| ------------------- | ------------------------------------------------------------ | --------------------------------------- |
| Label               | Einen Name für den Auftrag.                                  | Homepage                                |
| Target Language     | Die gewünschte Zielsprache, in der die Seiten übersetzt werden sollen. | German                                  |
| Provider            | Die Konfiguration, die verwendet werden soll.                | Apostroph (automatisch online stellen)  |
| Customer ID         | Die Kunden-Nr. Wird standardmässig von der **apoCONNECTOR** Konfiguration übernommen, kann aber hier noch angepasst werden (siehe [Einstellungsfelder](#configuration-fields)). | 000000                                  |
| Comment             | Einen Kommentar, der zusätzliche Informationen, die für die Übersetzung relevant sein könnten. | Bitte Creative und schlang übersetzten. |
| Desired Deadline    | Bis wann der Auftrag abgewickelt werden sollte auf Apostroph-Seite. | 06/07/2021                              |
| Job is Confidential | Ob der Auftrag vertraulich ist. Wird standardmässig von der **apoCONNECTOR** Konfiguration übernommen, kann aber hier noch angepasst werden (siehe [Einstellungsfelder](#configuration-fields)). | Checkbox deaktiviert                    |

```
GIF/VIDEO
```

### Auftragsstatus einsehen und Aufträge verwalten [](#send-apostroph-manage)

Alle Ihre platzierten Aufträge können Sie einsehen in dem Sie **Translation** im Drupal Menu, dann **Jobs** auswählen.

Diese Ansicht bietet die Möglichkeit die Liste der Aufträge zu filtern und zeigt auch den aktuellen Status jedes Auftrages. Der hier angezeigte Status entspricht <u>**nicht**</u> dem Echtzeit-Status den der Auftrag auf Apostroph-Seite hat.

```
GIF/VIDEO
```

#### Detailansicht [](#send-apostroph-manage-details)

Um Details über jeden Auftrag einzusehen und den Echtzeit-Status zu überprüfen, können sie auf **Manage** klicken und die Seite mit den Details über den entsprechenden Auftrag öffnet sich.

Die Detailansicht macht eine Abfrage mit Hilfe der Apostroph API und listet die Echtzeit-Information, die es von Apostroph bekommt. In diesem Beispiel sieht man nebst andere Informationen den Echtzeit-Status des Auftrags. Andere wichtige Informationen sind die Seite, die als Auftrag gesendet wurden. Möchte man den Inhalt jeder Seite anschauen, der als Auftrag gesendet wurde so kann man auf **View** für die entsprechende Seite klicken und die Ansicht mit dem exportierten Inhalt öffnet sich.

Auf der linken Seite sieht man den Ausgangstext und auf der Rechten würde man die Übersetzung sehen, falls sie mittels **apoCONNECTOR** heruntergeladen und importiert wäre.

```
GIF/VIDEO
```

## Übersetzte Dateien Importieren [](#import)

Der **apoCONNECTOR** bietet drei Möglichkeiten wie man Übersetzungen wieder in Drupal einpflegen bzw. importieren kann. Abhängig von der Einstellung **Auto accept finished translations** (siehe [Einstellungsfelder](#configuration-fields)) werden die einzelnen Seiten zudem auch gleich online gestellt. Dies gilt auch für alle Import-Funktionen.

### Manueller Import [](#import-manual)

Die übersetzten Dateien können via E-Mail, FTP oder einem anderen Kanal empfangen werden und dann in der Auftragsdetail-Ansicht (siehe [Detailansicht](#send-apostroph-manage-details)) manuell importiert werden. Dafür klick man auf **Chose File**, wählt die Datei auf dem Lokalen Computer aus (Ort wo man sie nach Empfang gespeichert hat) und klickt **Manual Import**. Der **apoCONNECTOR** wir die Übersetzung aus den Dateien lesen und in Drupal importieren. 

```
GIF/VIDEO
```

### Automatischer Import [](#import-automatic)

Diese Möglichkeit ist etwas automatischer. Bei dieser Option ist es nicht nötig die übersetzten Dateien via E-Mail oder andere Kanäle auszutauschen. Auch in der Auftragsdetail-Ansicht bietet der Connector einen zweiten Button **Auto-Import**. Beim klicken auf diesem Button stellt der Connector eine Verbindung zu Apostroph, überprüft ob die Übersetzung fertig ist, lädt die Übersetzung automatisch herunter und importiert sie.

```
GIF/VIDEO
```

### Background Import [](#import-background)

Diese Möglichkeit lauft voll automatisch und bedarf keine Handlung des Benutzers. Der Connector macht eine periodische Abfrage zu Apostroph und überprüft, ob für die ausstehenden Auftrage Übersetzungen vorhanden sind. Sollte es auf Apostroph-Seite Übersetzungen geben, die heruntergeladen werden können, so wird der Connector wie in Option Automatischer Import (siehe [Automatischer Import](#import-automatic)) alles herunterladen und importieren. Diese Option muss allerdings in der **apoCONNECTOR** Einstellung aktiviert werden, wie im Einstellungsabschnitt beschreiben ist (siehe [Scheduled Task](#configuration-scheduled-task)).

