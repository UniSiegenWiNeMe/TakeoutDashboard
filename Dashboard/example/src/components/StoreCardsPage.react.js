// @flow

import * as React from "react";
import axios from 'axios'

import { Page, Grid, StoreCard, Table, Card, Badge, Avatar,  colors,

  Icon, } from "tabler-react";
  import Parser from 'html-react-parser';

import SiteWrapper from "../SiteWrapper.react";
import C3Chart from "react-c3js";

function StoreCardsPage(): React.Node {
  return (
    <SiteWrapper>
      <Page.Content title="Historie">
        <Grid.Row>
          <Grid.Col lg={3}>
          <div class="card">
  <div class="card-header">
    <h3 class="card-title">Verschlüsselte Verbindungen</h3>
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
                        },
                        names: {
                          // name of each serie
                          data1: "unverschlüsselt",
                          data2: "verschlüsselt",
                        },
                      }}
                      legend={{
                        show: false, //hide legend
                      }}
                      padding={{
                        bottom: 0,
                        top: 0,
                      }}
                    />
  </div>
  <div class="card-footer">
    Es werden überwiegend gesicherte Verbindungen benutzt
  </div>
</div>



          </Grid.Col>
          <Grid.Col lg={9}>

                    <div id="html">{Parser(html)}</div>
</Grid.Col>

          <Grid.Col lg={3}>
</Grid.Col>
          <Grid.Col lg={9}>
            
            
                    <div id="html2">{Parser(html2)}</div>

            
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    </SiteWrapper>
  );
}
 
var cd = [
  // each columns data
  ["data1", 50],
  ["data2", 50],
];



function check(url) {
  console.log(url)
 axios
    .get(url, 
      {
        'Content-Type': 'application/x-www-form-urlencoded',
        'responseType': 'arraybuffer'}
 )
    .then(function (response) {
      console.log(response);
      return true;
    })
    .catch(function (response) {
      console.log(response);
      return false;
    })
}

var a = 0;
var b = 0;
function chartadd(type) {
  if(type.split("//")[0] == "http:") {
  a++
  }
  if(type.split("//")[0] == "https:") {
b++
  }

  cd = [
    // each columns data
    ["data1", a],
    ["data2", b],
  ];


}

var html = "";
var html2 = "";
if("Takeout" in localStorage){
  var takeout = JSON.parse(localStorage.getItem("Takeout"));
  console.log(takeout.Chrome.Historie);
  html += '<div class="col col-md-12 col-xl-12" style="float:left;width:100%;height:250px;">';
  html += '<div class="card"><div class="card-header"><h3 class="card-title">Lesezeichen</h3>';
  html += '<div class="card-options"></a>';
  html += '<a class="card-options-remove" data-toggle="card-remove"><i class="fe fe-x"></i></a></div></div>';
  html += '<div class="card-body">';
  html += '<p style="text-align:center"></p>';

  takeout.Chrome.Lesezeichen.map(function(P, i){
    chartadd(P.url);
    placeWidget(P);
 }) 

 html += '</div>';
 html += '<div class="card-footer"> </div></div></div>';


html2 += '<div class="col col-lg-12"><div class="card"><div class="table-responsive"><table class="table card-table table-striped table-vcenter"><thead class=""><tr class=""><th class="" colspan="2">Titel</th><th class="">URL</th><th class="">Aufgerufen am</th><th class=""></th></tr></thead><tbody class="">';




 takeout.Chrome.Historie.map(function(P, i){

  placeWidgetHistorie(P);
}) 
html2 += '</tbody></table></div></div></div>';

} else {
 


}

function unix(UNIX_timestamp){
  var a = new Date(UNIX_timestamp/1000);
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
 
function placeWidget(P) {
  

  html += '<p style="margin:0px;float:left"><b><img style="height:16px;float:left" src="http://'+P.url.split("/")[2]+'/favicon.ico"></b></p><p style="text-align:right;margin:0px;"> <a href="'+P.url+'">'+P.beschreibung+'</a></p>';


}
function placeWidgetHistorie(P) {
  html2 += '<tr class=""><td class="w-1">';
  html2 += '<span class="avatar" style="background-image: url(&quot;http://'+P.Link.split("/")[2]+'/favicon.ico&quot;)"></span></td>';
  html2 += '<td class="">'+P.Titel+'</td><td class="">'+P.Link+'</td><td class="text-nowrap"> '+unix(P.Zeitpunkt)+' </td>';
  html2 += '<td class="w-1"><a class="icon"></a></td></tr>';
  

}




 
export default StoreCardsPage;
