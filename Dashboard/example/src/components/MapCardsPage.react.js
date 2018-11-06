// @flow

import * as React from "react";
import Parser from "html-react-parser";
import ReactQueryParams from "react-query-params";
import * as qs from "query-string";
import { Redirect } from "react-router-dom";

import Map from "pigeon-maps";
import Marker from "pigeon-marker";
import Overlay from "pigeon-overlay";

import { Container, Page, Grid, Card, Stamp, ContactCard, Timeline } from "tabler-react";

import SiteWrapper from "../SiteWrapper.react";

import ReactSimpleMap from "../ReactSimpleMap";

function MapCardsPage(): React.Node {
  if ("Takeout" in localStorage) {
    return (
      <SiteWrapper>
        <div className="my-md-12" />
        <div className="my-3 my-md-5">
          <Container>

                    <Grid.Row cards={true}>
            <Grid.Col width={12} sm={12} lg={12}>
              <div className="card card-stats">
                <div className="content">
                  <Grid.Row>
                    <Grid.Col >
                      <div class="card-body p-3 text-center"> Welche Orte stehen ganz oben auf Ihrer Liste ? Hier sehen Sie ob und wenn ja, welche Orte Sie besucht haben und auf Ihrer Liste verewigt haben. Wenn Sie hier nichts finden sollten, schauen Sie ob Eye etwas mehr über Ihre letzten Stunden weiß ;) </div>
                    </Grid.Col>
                  </Grid.Row>
                </div>
              </div>
            </Grid.Col>
          </Grid.Row>



            <div class="col col-md-12 col-lg-12" style={float}>
              <div class="card">
                <div class="card-header">
                  <h3 class="card-title">Meine Orte</h3>
                </div>

                <Map center={mpos} zoom={8} width={1152} height={400}>
                  <Marker anchor={mpos} payload={1} onClick={({ event, anchor, payload }) => {}} />

                  <Overlay anchor={mpos} offset={[120, 79]}>
                    <img src="pigeon.jpg" width={240} height={158} alt="" />
                  </Overlay>
                </Map>
                {Parser(html)}
              </div>
            </div>

             
            <Grid.Row>
              <Grid.Col lg={4} />
            </Grid.Row>
          </Container>
        </div>
      </SiteWrapper>
    );
  } else {
    return <Redirect to="/" />;

  }
}

var mpos = [50.879, 4.6997];

try {
  var x = window.location.search.split("x=")[1].split("&")[0];
  var y = window.location.search.split("y=")[1].split("&")[0];
} catch (e) {
  var x = 50.879;
  var y = 4.6997;
}

 
if (x) {
  if (y < 0) {
    y = y * -1;
  }
  mpos = [x, y];
}

  
const float = {
  float: "left"
};

function dateConvert(date) {
  return date.split("T")[0].split("-")[2] + "." + date.split("T")[0].split("-")[1] + "." + date.split("T")[0].split("-")[0] + " " + date.split("T")[1].split("Z")[0];
}

function unix(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp * 1);
  console.log(a);
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

var html = "";
 if ("Takeout" in localStorage) {
  html += '</div><div class="card"><div class="card-header"><h3 class="card-title">Meine Orte, Liste</h3><div class="card-options"></div></div><div class="card-body"><ul class="timeline">';

 
  var takeout = JSON.parse(localStorage.getItem("Takeout"));
  console.log("Orte", takeout.Maps.Orte);
  console.log("Verlauf", takeout.Maps.Verlauf);

  takeout.Maps.Orte.map(function(P, i) {
    var y = P.Koordinaten[0];
    if (y < 0) {
      y = y * -1;
    }
    html += '<li class="timeline-item"><div class="timeline-badge bg-blue"></div><div><strong>' + P.Titel + '</strong><small class="d-block text-muted">';
    html += '<a href="?x=' + P.Koordinaten[1] + "&y=" + y + '"> GO </a>  ' + P.Koordinaten[1] + "/" + P.Koordinaten[0] + "  </small></div>";
    html += '<div class="timeline-time text-muted-black">' + dateConvert(P.Published) + "</div></li>";
  });

}

function coord(x) {
  return x.toString().substr(0, x.toString().length - 7) + "." + x.toString().substr(x.toString().length - 7);
}

html += "</ul></div> ";
 
export default MapCardsPage;
