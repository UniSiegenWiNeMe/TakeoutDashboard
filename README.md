# THIS REPOSITORY IS ARCHIVED!!!

# Google Takeout Browser

Developer-Version
 

Ist ein automatisiertes Tool, zur Extraktion Ihres Google-Takeouts und zu dessen Aufbereitung sowie zur Ableitung vieler Informationen durch das Kombinieren von möglichst vielen Rohdaten.

## Ziel
Ziel in diesem Projekt ist es, die von Google-Takeouts stammenden Archive in ein übersichtliches Dashboard zu importieren und für den Verbraucher verständlich aufzubereiten. Außerdem können zukünftig immer umfangreichere Analysen und Interpretationen hierzu hinzugefügt werden


## Aktuell unterstützte Takeout-Bereiche
- Profilinformationen 
- Hadwareinformationen
- Oft besuchte Webseiten durch Lesezeichen
- Historie der besuchten Webseiten von Chrome
- Installierte Browsererweiterungen
- Standortverlauf (Timeline) durch Maps
- Aufgesuchte Orte durch Maps



## Zukünftig unterstützte Quellen
- Bewertungen von besuchten Orten
- Meta-Informationen zu Dateien aus Drive und persönlichen Dateien
- Youtube

## Einschränkungen
- Zu Testzwecken und aus Performence-Gründen ist die Ausgabe auf maximal 10 Objekten je Modul beschränkt. Das Limit kann in der takeout_analyse.py aufgehoben werden. 

Z17:	demo_limit = 10



## Anleitung



### Vorbereitung

Dieses Tool setzt ein bereits heruntergeladenes Google-Takeout vorraus.
Dieses erhalten Sie von Google unter [https://takeout.google.com](https://takeout.google.com/). Je nach den von Ihn genutzten Services kann die Archivgröße zwischen wenigen MB bis zu einigen GB betragen. Wir empfehlen Ihnen vorerst auf den Export von Bildern und Dokumenten aus der Drive zu verzichten.



### Datenaufbereitung

 
<p align="center"> 
<img src="https://6dl.de/tmp/ablauf1.jpg">
</p>

Die Google-Takeouts bestehen aus einer Ansammlung diverser Datenformate. Einige Informationen werden noch in überschaubaren JSON-Dateien ausgeliefert, während sich andere Daten in HTML-Seiten verstecken. Dieses Datenchaos muss nun aufbereitet werden. Dies geschiet über das Python-Tool "takeout_analyse.py". 

1)	Entpacken Sie Ihre Google-Takeout-Archive mit einem geeigneten ZIP Programm.

2)	Ziehen Sie die Datei takeout_analyse.py in den entpackten Ordner

Jetzt öffnen Sie die Konsole:

Mac: CMD+Leertaste und tippen Sie

```
Terminal
```
ein.

Windows: Win+X und tippen Sie

```
CMD
```

ein. In beiden Fällen jeweils mit ENTER bestätigen.


Es öffnet sich das Terminal-Fenster:

<p align="center"> 
<img src="https://6dl.de/tmp/terminal.png">
</p>

  

Tippen Sie nun folgendes ein:

```
cd
```

und ziehen Sie den Google-Takeout-Ordner mit dem darin enthaltenen takeout_analyse.py-Tool in das Fenster.
Nun sollte dort in etwa stehen:

cd /Users/...../GoogleTakeout/

Bestätigen Sie mit Enter und geben dann

```
Python takeout_analyse.py 
```

ein. Bestätigen Sie mit Enter.
Nach wenigen Sekunden, je nach Archivgröße, sehen Sie nun eine report.json Datei in dem Google-Takeout-Archiv vorliegen. Diese Datei beinhaltet die aktuell erfassten Rohdaten in aufbereiteter Form. Diese Datei ist für den nächsten Schritt nötig.



### Anzeigen der aktuell verfügbaren Takeout-Daten mittels UI Dashboard

Im Frontend-Ordner liegt die Vorabversion eines Dashboards basierend auf tabler bereit.
Dieses kann mit den Befehlen im Hauptverzeichnis sowie in /example:

```
yarn install && yarn start
```

Sie können die report.json Datei mit einem Klick auf "Upload" hochladen und dann in den Menüpunkten navigieren:



#### Mobile Geräte

<p align="center"> 
<img src="https://6dl.de/tmp/mobile1.png">
</p>



#### Aktive Erweiterungen


<p align="center"> 
<img src="https://6dl.de/tmp/widgets.png">
</p>


#### Verlaufsdaten
<p align="center"> 
<img src="https://6dl.de/tmp/verlauf.png">
</p>


#### Ortsdaten
<p align="center"> 
<img src="https://6dl.de/tmp/maps.png">
</p>



*Inhalt folgt*

 

## Ausblick

Zukünftig wird es reichen die aktuellen Schritte der Vorbereitung zu automatisieren.

In Version 2 soll dies dann in etwa so aussehen:

```
python /pfad/takeout_analyse.py /pfad/zu/googleTakeout.zip /pfad/export/report.json
```




## Vorrausetzungen

* Python
* NPM/Node
* Mac OS oder Windows



## Autor
* [Marcel Lacroze](https://github.com/Lacroze)
 

