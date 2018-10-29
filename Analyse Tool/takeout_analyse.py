#!/usr/bin/python
# -*- coding: utf-8 -*-
from glob import glob
import re
import json
from pprint import pprint
import os.path
import sys




# Root Folder Default
folders = glob("./*/") 

#Demonstration Limit of Items
demo_limit = 10

#if len(sys.argv) > 1:
#	print("Path for Takeout: " + sys.argv[1])
#	folders = glob(sys.argv[1]+"/*/")

#enable logs
enable_logs = True

i = 0
n = 0
z = 0
y = 0


thejson = {}
json0 = {}
paket_identitat_chrome = []
paket_gerat = []
paket_lesezeichen_chrome = []
paket_historie_chrome = []
paket_erweiterungen_chrome = []
paket_orte_maps = []
paket_verlauf_maps = []

while i < len(folders):
	if(enable_logs):
		print(folders[i])

	# Check Chrome
	if(folders[i] == "./Chrome/"):
		if(enable_logs):
			print "\_ Gefundene Dateien in Ordner Chrome:"
		chrome_files = glob("./Chrome/*")
		if os.path.isfile('./Chrome/Autofill.json') :
			with open('./Chrome/Autofill.json') as f:
				if(enable_logs):
					print  "  \_ " + str(len(chrome_files)) + " Dateien gefunden" ;
					print "    \_ Personenbezogene Daten in Autofill.json gefunden: "
				data = json.load(f)
				while z < len(data["Autofill"]):
					paket_identitat_chrome.append({
						"vorname": str(data["Autofill"][z]["name_first"]).split("'")[1], 
						"nachname": str(data["Autofill"][z]["name_last"]).split("'")[1], 
						"email": str(data["Autofill"][z]["email_address"]).split("'")[1], 
						"Handynummer": str(data["Autofill"][z]["phone_home_whole_number"]).split("'")[1], 
						"Strasse": data["Autofill"][z].get("address_home_street_address") ,
						"Stadt": data["Autofill"][z].get("address_home_city") ,
						"Plz": data["Autofill"][z].get("address_home_zip") ,
						"Firma": data["Autofill"][z].get("company_name") ,
						"Erstellt": data["Autofill"][z].get("use_date") ,
					})
					if(enable_logs):
		 				print "          - Name: " + str(data["Autofill"][z]["name_first"]).split("'")[1] + " " +  str(data["Autofill"][z]["name_last"]).split("'")[1] +" "
		 			z += 1

		if os.path.isfile("./Chrome/Bookmarks.html") :
			file_object  = open("./Chrome/Bookmarks.html", "r")
			if(enable_logs):
				print "    \_ Lesezeichen in Bookmarks.html gefunden: "
			r = 0;
			for line in file_object.read().splitlines():
				if "<DT><A " in line:
					if r < demo_limit :
						r = r+1
						paket_lesezeichen_chrome.append({
							"url": line.split("\"")[1], 
							"beschreibung":line.split(">")[2],
						})
					 
		if os.path.isfile('./Chrome/BrowserHistory.json') :
			with open('./Chrome/BrowserHistory.json') as f:
				if(enable_logs):
					print  "  \_ " + str(len(chrome_files)) + " Dateien gefunden" ;
				data = json.load(f)
				if(enable_logs):
					print "    \_ Historie in BrowserHistory.json gefunden: "
				r = 0
				z = 0
				while z < len(data["Browser History"]) and r < demo_limit:
					r = r+1
					paket_historie_chrome.append({
						"page_transition": data["Browser History"][z].get("page_transition"), 
						"Titel": data["Browser History"][z].get("title"), 
						"Link": data["Browser History"][z].get("url"), 
						"Zeitpunkt": data["Browser History"][z].get("time_usec"), 
						"Client": data["Browser History"][z].get("client_id"), 
					})
		 			z += 1
		
		
		if os.path.isfile('./Chrome/Extensions.json') :
			with open('./Chrome/Extensions.json') as f:
				data = json.load(f)
				if(enable_logs):
					print "    \_ Erweiterungen in Extensions.json gefunden: "
				r = 0
				z = 0
				while z < len(data["Extensions"]) and r < demo_limit:
					r = r+1
					paket_erweiterungen_chrome.append({
						"incognito_enabled": data["Extensions"][z].get("incognito_enabled"), 
						"disable_reasons": data["Extensions"][z].get("disable_reasons"), 
						"installed_by_custodian": data["Extensions"][z].get("installed_by_custodian"), 
						"update_url": data["Extensions"][z].get("update_url"), 
						"name": data["Extensions"][z].get("name"), 
						"id": data["Extensions"][z].get("name"), 
						"version": data["Extensions"][z].get("version"), 
						"enabled": data["Extensions"][z].get("enabled"), 
					})
		 			z += 1
		





	# Check if Folder is Devices-Folder: Android-Gerätekonfigurationsdienst
	if(folders[i] == "./Android-Gerätekonfigurationsdienst/"):
		if(enable_logs):
			print "\_ Gefunden: Geräte"
		devices = glob("./Android-Gerätekonfigurationsdienst/*")
		r = 0

		
		while n < len(devices) and r < demo_limit:
			r = r+1
			if(enable_logs):
				print "  \_" + devices[n].split("/")[2]
			file_object  = open(devices[n], "r")
			for line in file_object.read().splitlines():
				
 				
				if "Android-ID" in line:
					s1 = line.split("<br")[0]
				if "MEID(s):" in line:
					s2 = line.split("<br")[0]
				if "IMEI(s):" in line:
					s3 = line.split("<br")[0]
				if "Seriennummer(n):" in line:
					s4 = line.split("<br")[0]
				if "Nutzer:" in line:
					s5 = line.split("<br")[0]
				if "IP-Adresse" in line:
					s6 = line.split("<br")[0]
				if "Hardware" in line:
					s7 = line.split("<br")[0]
				if "Modell:" in line:
					s8 = line.split("<br")[0]
				if "Hersteller:" in line:
					s9 = line.split("<br")[0]
				if "Prozessoren:" in line:
					s10 = line.split("<br")[0]
				if "Datum und Uhrzeit der Registrierung:" in line:
					s11 = line.split("<br")[0]
				if "Zeitpunkt der ersten Datenverbindung:" in line:
					s12 = line.split("<br")[0]
					
					
			paket_gerat.append({
				"AndroidID": s1.split(": ")[1],
				"MEID": s2.split(": ")[1],
				"IMEI": s3.split(": ")[1],
				"Seriennummer": s4.split(": ")[1],
				"Nutzer": s5.split(": ")[1],
				"IPAdresse": s6.split(": ")[1],
				"Hardware": s7.split(": ")[1],
				"Modell": s8.split(": ")[1],
				"Hersteller": s9.split(": ")[1],
				"Prozessoren": s10.split(": ")[1],
				"Datum_Registrierung": s11.split(": ")[1],
				"Zeitpunkt_Datenverbindung": s12.split(": ")[1],
			})
					
			n += 1
			
			
	if(folders[i] == "./Maps (meine Orte)/"):
		with open('./Maps (meine Orte)/Gespeicherte Orte.json') as v:
			data = json.load(v)
			r = 0
			y = 0
			if(enable_logs):
				print len(data["features"])
			while y < len(data["features"]) and r < demo_limit:
				r = r+1
				paket_orte_maps.append({
					"Titel": data["features"][y]["properties"]["Title"],
					"Published": data["features"][y]["properties"]["Published"],
					"Updated": data["features"][y]["properties"]["Updated"],
					"Koordinaten": data["features"][y]["geometry"]["coordinates"],
				})
 				y += 1
		
		
			
	if(folders[i] == "./Standortverlauf/"):
		with open('./Standortverlauf/Standortverlauf.json') as v:
			data = json.load(v)
			r = 0
			y = 0
			if(enable_logs):
				print len(data["locations"])
			while y < len(data["locations"]) and r < demo_limit:
				r = r+1
				paket_verlauf_maps.append({
					"Zeitpunkt": data["locations"][y]["timestampMs"],
					"lat": data["locations"][y]["latitudeE7"],
					"lon": data["locations"][y]["longitudeE7"],
					"Genauigkeit": data["locations"][y]["accuracy"],
				})
 				y += 1
	i += 1


#
#
#	# Check Chrome
#	if(folders[i] == "./Maps (meine Orte)/"):
#		maps_files = glob("./Maps (meine Orte)/*")
#		with open('./Maps (meine Orte)/Gespeicherte Orte.json') as r:
#			data = json.load(r)
#			while y < len(data["features"]):
#				print  "  - " + data["features"][y]["properties"]["Title"] + " (von: " +data["features"][y]["properties"]["Published"] + ") "
#				y += 1
#
#
#	# Check Drive
#	if(folders[i] == "./Drive/"):
#		print "\_ Gefundene Dateien in Drive:"
#		drive_files = glob("./Drive/*")
#		print  "  \_ " + str(len(drive_files)) + " Dateien gefunden" ;
#	# Check Drive
#	if(folders[i] == "./Lesezeichen/"):
#		print "\_ Gefundene Lesezeichen"
#		drive_files = glob("./Lesezeichen/*")
#		print  "  \_ " + str(len(drive_files)) + " Dateien gefunden" ;
#		file_object  = open("./Lesezeichen/Lesezeichen.html", "r")
#		for line in file_object.read().splitlines():
#			if "<DT><A " in line:
#				print "      - "+line.split("\"")[1] + " - "+line.split(">")[2].split("</A")[0]
#		
#
#		
#		

########### Build JSON ############

json0["Person"] = paket_identitat_chrome
json0["Lesezeichen"] = paket_lesezeichen_chrome
json0["Historie"] = paket_historie_chrome
json0["Erweiterungen"] = paket_erweiterungen_chrome

thejson["Chrome"] = json0	

json0 = {}
json0["Geraete"] = paket_gerat

thejson["Meta"] = json0	

json0 = {}
json0["Orte"] = paket_orte_maps
json0["Verlauf"] = paket_verlauf_maps

thejson["Maps"] = json0	

json0 = {}


#print(json.dumps(json0))

f = open("report.json", "w")
f.write(json.dumps(thejson))
print(thejson)
print("JSON ablegelgt in : ./report.json")



