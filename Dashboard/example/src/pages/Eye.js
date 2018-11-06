// @flow

import * as React from "react";
import axios from "axios";
import { compose, withProps, lifecycle } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer } from "react-google-maps";
import { Redirect } from 'react-router-dom'

import { Page, Grid, StoreCard, Table, Card, Badge, Avatar, colors, Icon } from "tabler-react";
import Parser from "html-react-parser";

import SiteWrapper from "../SiteWrapper.react";
import C3Chart from "react-c3js";

/* global google */
function Eye(): React.Node {
  if ("Takeout" in localStorage) {
    const DirectionsComponent = compose(
      withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC86-hdAZC7aG9dHlev-6QIjU6OVsk6gpo",
        loadingElement: <div style={{ height: `400px` }} />,
        containerElement: <div style={{ width: `100%` }} />,
        mapElement: <div style={{ height: `600px`, width: `100%`, margin: `10px` }} />
      }),
      withScriptjs,
      withGoogleMap,
      lifecycle({
        componentDidMount() {
          const DirectionsService = new google.maps.DirectionsService();

          if ("Takeout" in localStorage) {
            var takeout = JSON.parse(localStorage.getItem("Takeout"));

            var first_x = 0;
            var first_y = 0;

            var last_x = 0;
            var last_y = 0;

            var n = 0;
            var count_routes = 0;
            var scala = 20; // jedes n. Pos.
            takeout.Maps.Eye.map(function(P, i) {
              var long = P.longitudeE7;
              var lat = P.latitudeE7;
              var time = P.timestampMs;

              if (i == n && count_routes < 16) {
                n = n + scala;
                count_routes++;

                if (i == 0) {
                  first_y = coord(long);
                  first_x = coord(lat);
                } else {
                  last_y = coord(long);
                  last_x = coord(lat);
                  waypts.push({
                    location: new google.maps.LatLng(coord(lat), coord(long)),
                    stopover: true
                  });
                }
              }
            });
          }

          console.log(waypts);

          DirectionsService.route(
            {
              waypoints: waypts,
              // origin: new google.maps.LatLng(first_x, first_y),
              origin: new google.maps.LatLng(first_x, first_y),
              destination: new google.maps.LatLng(last_x, last_y),
              travelMode: google.maps.TravelMode.DRIVING
            },
            (result, status) => {
              console.log(new google.maps.LatLng(first_x, first_y));
              if (status === google.maps.DirectionsStatus.OK) {
                this.setState({
                  directions: { ...result },
                  markers: true
                });
              } else {
                console.log(result);
                console.error(`error fetching directions ${result}`);
              }
            }
          );
        }
      })
    )(props => <GoogleMap defaultZoom={3}>{props.directions && <DirectionsRenderer directions={props.directions} suppressMarkers={props.markers} />}</GoogleMap>);

    return (
      <SiteWrapper>
        <Page.Content title="Eye">


             <Grid.Row cards={true}>
            <Grid.Col width={12} sm={12} lg={12}>
              <div className="card card-stats">
                <div className="content">
                  <Grid.Row>
                    <Grid.Col >
                      <div class="card-body p-3 text-center"> Wo sind Sie gewesen ? Hier können Sie Jahre zurückblicken, und zwar auf den Meter (sofern Sie die Zeitleiste nicht deaktiviert haben).. und ja auch Google weiß was sie Sonntag Abend so machen.. Desshalb auch die "intelligenten" Tipps von Google-Maps ;)  </div>
                    </Grid.Col>
                  </Grid.Row>
                </div>
              </div>
            </Grid.Col>
          </Grid.Row>



          <Grid.Row>
            <Grid.Col>
              <DirectionsComponent />
            </Grid.Col>
          </Grid.Row>
          <Grid.Row>
            <Grid.Col lg={12}>
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

var waypts = [];

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
  html2 += '<tr class=""><th class="" colspan="2">Zeit</th> <th class="">x</th><th class="">y</th> </tr>';
  html2 += '</thead><tbody class="">';
  takeout.Maps.Eye.map(function(P, i) {
    placeWidgetHistorie(P);
  });
  html2 += "</tbody></table></div></div>";
} else {
}

// initialize();

// var directionDisplay;
//             var directionsService = new google.maps.DirectionsService();
//             var map;

//             function initialize() {
//                 directionsDisplay = new google.maps.DirectionsRenderer();
//                 var chicago = new google.maps.LatLng(41.850033, -87.6500523);
//                 var myOptions = {
//                     zoom: 6,
//                     mapTypeId: google.maps.MapTypeId.ROADMAP,
//                     center: chicago
//                 };
//                 map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
//                 directionsDisplay.setMap(map);
//                 calcRoute();
//             }

//             function calcRoute() {
//                 var first = new google.maps.LatLng(42.496403, -124.413128);
//                 var second = new google.maps.LatLng(42.496401, -124.413126);

//                 var request = {
//                     origin: "1521 NW 54th St, Seattle, WA 98107 ",
//                     destination: "San Diego, CA",
//                     waypoints: [{location: first, stopover: false},
//                         {location: second, stopover: false}],
//                     optimizeWaypoints: true,
//                     travelMode: google.maps.DirectionsTravelMode.WALKING
//                 };
//                 directionsService.route(request, function (response, status) {
//                     if (status == google.maps.DirectionsStatus.OK) {
//                         directionsDisplay.setDirections(response);
//                         var route = response.routes[0];
//                         var summaryPanel = document.getElementById("directions_panel");
//                         summaryPanel.innerHTML = "";
//                         // For each route, display summary information.
//                         for (var i = 0; i < route.legs.length; i++) {
//                             var routeSegment = i + 1;
//                             summaryPanel.innerHTML += "<b>Route Segment: " + routeSegment + "</b><br />";
//                             summaryPanel.innerHTML += route.legs[i].start_address + " to ";
//                             summaryPanel.innerHTML += route.legs[i].end_address + "<br />";
//                             summaryPanel.innerHTML += route.legs[i].distance.text + "<br /><br />";
//                         }
//                     } else {
//                         alert("directions response " + status);
//                     }
//                 });
//             }

function unix(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp / 1);
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

function placeWidgetHistorie(P) {
  var long = P.longitudeE7;
  var lat = P.latitudeE7;
  var time = P.timestampMs;

  html2 += '<tr class=""><td class="w-1">';
  html2 += '<span class="avatar"></span></td>';
  html2 += '<td class="">' + unix(time) + '</td><td class="">' + coord(long) + '</td><td class="text-nowrap"> ' + coord(lat) + " </td> ";
  html2 += " </tr>";
}

function coord(x) {
  return x.toString().substr(0, x.toString().length - 7) + "." + x.toString().substr(x.toString().length - 7);
}

export default Eye;
