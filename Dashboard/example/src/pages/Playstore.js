// @flow

import * as React from "react";
import axios from "axios";
import { Redirect } from 'react-router-dom'

import { Page, Grid, StoreCard, Table, Card, Badge, Avatar, colors, Icon } from "tabler-react";
import Parser from "html-react-parser";

import SiteWrapper from "../SiteWrapper.react";
import C3Chart from "react-c3js";

function Playstore(): React.Node {
  if ("Takeout" in localStorage) {
    return (
      <SiteWrapper>
        <Page.Content title="Playstore">


             <Grid.Row cards={true}>
            <Grid.Col width={12} sm={12} lg={12}>
              <div className="card card-stats">
                <div className="content">
                  <Grid.Row>
                    <Grid.Col >
                      <div class="card-body p-3 text-center"> Geben Sie viel Geld aus ? Haben Sie schon Tinder Premium gekauft ? Let's have a look.. in die Playstore-Historie. Bücher, inApp-Käufe oder was es sonst noch gibt.. </div>
                    </Grid.Col>
                  </Grid.Row>
                </div>
              </div>
            </Grid.Col>
          </Grid.Row>



          <Grid.Row>
            <Grid.Col lg={3}>
              <div class="card">
                <div class="card-header">
                  <h3 class="card-title">Kauftypen</h3>
                </div>
                <div class="card-body">
                  <C3Chart
                    style={{ height: "12rem" }}
                    data={{
                      columns: cd,
                      type: "donut", // default type of chart
                      colors: {
                        data1: colors["red"],
                        data2: colors["green"],
                        data3: colors["yellow"]
                      },
                      names: {
                        // name of each serie
                        data1: "in-App",
                        data2: "Android Apps",
                        data3: "Book"
                      }
                    }}
                    legend={{
                      show: false //hide legend
                    }}
                    padding={{
                      bottom: 0,
                      top: 0
                    }}
                  />
                </div>
              </div>
            </Grid.Col>

            <Grid.Col lg={9}>
              <div id="html2">{Parser(html2)}</div>
            </Grid.Col>
          </Grid.Row>
        </Page.Content>
      </SiteWrapper>
    );
  } else {
    return (
      <Redirect to='/' />

    );
  }
}

var cd = [
  // each columns data
  ["data1", 33],
  ["data2", 33],
  ["data3", 33]
];

function check(url) {
  console.log(url);
  axios
    .get(url, {
      "Content-Type": "application/x-www-form-urlencoded",
      responseType: "arraybuffer"
    })
    .then(function(response) {
      console.log(response);
      return true;
    })
    .catch(function(response) {
      console.log(response);
      return false;
    });
}

var a = 0;
var b = 0;
var c = 0;
function chartadd(type) {
  if (type == "In App Item") {
    a++;
  }
  if (type == "Android Apps") {
    b++;
  }
  if (type == "Book") {
    c++;
  }

  cd = [
    // each columns data
    ["data1", a],
    ["data2", b],
    ["data3", c]
  ];
}

var html = "";
var html2 = "";
if ("Takeout" in localStorage) {
  var takeout = JSON.parse(localStorage.getItem("Takeout"));

  html2 += '<div class="col col-lg-12"><div class="card"><div class="table-responsive">';
  html2 += '<table class="table card-table table-striped table-vcenter"><thead class="">';
  html2 += '<tr class=""><th class="" colspan="2">Titel</th><th class="">Typ</th><th class="">Aufgerufen am</th><th class="">Rechnung auf</th><th class="">Preis</th><th class=""></th></tr>';
  html2 += '</thead><tbody class="">';

  takeout.Playstore.Orders.map(function(P, i) {
    placeWidgetHistorie(P);
  });
  html2 += "</tbody></table></div></div>";
} else {
}

function unix(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp / 1000);
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + " " + month + " " + year + " " + hour + ":" + min;
  return time;
}

function gtime(t) {
  return t.split("-")[2].split("T")[0] + "." + t.split("-")[1] + "." + t.split("-")[0] + " um " + t.split("T")[1].split(":")[0] + ":" + t.split("T")[1].split(":")[1];
}

function placeWidget(P) {
  html += '<p style="margin:0px;float:left"><b><img style="height:16px;float:left" src="http://' + P.url.split("/")[2] + '/favicon.ico"></b></p><p style="text-align:right;margin:0px;"> <a href="' + P.url + '">' + P.beschreibung + "</a></p>";
}

function placeWidgetHistorie(P) {
  console.log(P);
  chartadd(P.orderHistory.doc.documentType);

  html2 += '<tr class=""><td class="w-1">';
  html2 += '<span class="avatar"></span></td>';
  html2 += '<td class="">' + P.orderHistory.doc.title + '</td><td class="">' + P.orderHistory.doc.documentType + '</td><td class="text-nowrap"> ' + gtime(P.orderHistory.creationTime) + ' </td><td class="">' + P.orderHistory.associatedContact[0].name + '</td><td class="">' + P.orderHistory.totalPrice + "</td>";
  html2 += '<td class="w-1"><a class="icon"></a></td></tr>';
}

export default Playstore;
