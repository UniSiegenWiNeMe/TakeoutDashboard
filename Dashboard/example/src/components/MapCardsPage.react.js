// @flow

import * as React from "react";
import Parser from 'html-react-parser';
import {GoogleApiWrapper} from 'google-maps-react';
import ReactQueryParams from 'react-query-params';
import * as qs from 'query-string';

import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'
import Overlay from 'pigeon-overlay'

 

import {
  Container,
  Page,
  Grid,
  Card,
  Stamp,
  ContactCard,
  Timeline,
} from "tabler-react";

import SiteWrapper from "../SiteWrapper.react";


import ReactSimpleMap from "../ReactSimpleMap";




 

function MapCardsPage(): React.Node {
   return (
    <SiteWrapper>
            <div className="my-md-12">


      </div>
      <div className="my-3 my-md-5" >
        <Container>
        <div class="col col-md-6 col-lg-6" style={float} ><div class="card"><div class="card-header"><h3 class="card-title">Meine Orte</h3></div> 
  
  <Map center={mpos} zoom={6} width={562} height={400}>
    <Marker anchor={mpos} payload={1} onClick={({ event, anchor, payload }) => {}} />

    <Overlay anchor={mpos} offset={[120, 79]}>
      <img src='pigeon.jpg' width={240} height={158} alt='' />
    </Overlay>
  </Map>
{Parser(html)}
</div>
</div>





        <div class="col col-md-6 col-lg-6" style={float} ><div class="card"><div class="card-header"><h3 class="card-title">Mein Verlauf</h3></div> 
  
  <Map center={mpos2} zoom={6} width={562} height={400}>
    <Marker anchor={mpos2} payload={1} onClick={({ event, anchor, payload }) => {}} />

    <Overlay anchor={mpos2} offset={[120, 79]}>
      <img src='pigeon.jpg' width={240} height={158} alt='' />
    </Overlay>
  </Map>

{Parser(html2)}
</div>
</div>

<Grid.Row>
             <Grid.Col lg={4}>
            
            
             </Grid.Col>
             </Grid.Row>




        </Container>
      </div>
    </SiteWrapper>
  );
}

var mpos = [50.879, 4.6997];

try {
  var x = window.location.search.split("x=")[1].split("&")[0];
  var y = window.location.search.split("y=")[1].split("&")[0];
}catch(e) {
  var x = 50.879;
  var y = 4.6997;
}


try {
  var x2 = window.location.search.split("x2=")[1].split("&")[0];
  var y2 = window.location.search.split("y2=")[1].split("&")[0];
}catch(e) {
  var x2 = 50.879;
  var y2 = 4.6997;
}


if(x) {
  if(y < 0) {
    y = y *-1;
  }
   mpos = [x, y];
}

var mpos2 = [50.879, 4.6997]; 

if(x2) {
  if(y2 < 0) {
    y2 = y2 *-1;
  }
   mpos2 = [x2, y2];
}



const float = {
  float: 'left',
};


function dateConvert(date) {
  return date.split("T")[0].split("-")[2]+"."+date.split("T")[0].split("-")[1]+"."+date.split("T")[0].split("-")[0]+" "+date.split("T")[1].split("Z")[0]
}

function unix(UNIX_timestamp){
  var a = new Date(UNIX_timestamp*1);
  console.log(a);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min  ;
  return time;
}


var html = "";
var html2 = "";
if("Takeout" in localStorage){


  html += '</div><div class="card"><div class="card-header"><h3 class="card-title">Meine Orte, Liste</h3><div class="card-options"></div></div><div class="card-body"><ul class="timeline">';
  
  html2 += '</div><div class="card"><div class="card-header"><h3 class="card-title">Verlauf, Liste</h3><div class="card-options"></div></div><div class="card-body"><ul class="timeline">'









  var takeout = JSON.parse(localStorage.getItem("Takeout"));
  console.log("Orte", takeout.Maps.Orte);
  console.log("Verlauf", takeout.Maps.Verlauf);

  takeout.Maps.Orte.map(function(P, i){
    var y = P.Koordinaten[0];
    if(y < 0) {
      y = y * -1;
    }
    html += '<li class="timeline-item"><div class="timeline-badge bg-blue"></div><div><strong>'+P.Titel+'</strong><small class="d-block text-muted">';
    html += '<a href="?x='+P.Koordinaten[1]+'&y='+y+'"> GO </a>  '+P.Koordinaten[1]+'/'+P.Koordinaten[0]+'  </small></div>';
    html += '<div class="timeline-time text-muted-black">'+dateConvert(P.Published)+'</div></li>';
  }) 

  takeout.Maps.Verlauf.map(function(P, i){
    var x = P.lat.toString().substr(0,P.lat.toString().length - 7) + "." +P.lat.toString().substr(P.lat.toString().length - 7);
    var y = P.lon.toString().substr(0,P.lat.toString().length - 7) + "." + P.lon.toString().substr(P.lat.toString().length - 7);
    if(y < 0) {
      y = y * -1;
    }
    html2 += '<li class="timeline-item"><div class="timeline-badge bg-blue"></div><div><strong>Unbekannt</strong><small class="d-block text-muted"> <a href="?x2='+x+'&y2='+y+'"> GO </a> '+x+'/'+y+' </small></div><div class="timeline-time text-muted-black">'+unix(P.Zeitpunkt)+'</div></li>';
  }) 



} else {
}

html += '</ul></div> ';
html2 += '</ul></div></div></div>';





export default MapCardsPage;
