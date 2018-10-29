// @flow

import * as React from "react";
import Parser from 'html-react-parser';

import { Page, Grid, Card, Button, Form, Dimmer } from "tabler-react";

import SiteWrapper from "../SiteWrapper.react";

function CardsDesignPage(): React.Node {
  return (
    <SiteWrapper>
      <Page.Content>
        <Grid.Row>
          <div id="html">{Parser(html)}</div>
 


        </Grid.Row>
      </Page.Content>
    </SiteWrapper>
  );
}








var html = "";
if("Takeout" in localStorage){
  var takeout = JSON.parse(localStorage.getItem("Takeout"));
  console.log(takeout);

  takeout.Chrome.Erweiterungen.map(function(P, i){


    var  active = '<p style="color:#ff0000;margin:0px;    text-align: right;">Deaktiviert</p>';
    if(P.enabled) {
      active = '<p style="color:#00ff00;margin:0px;    text-align: right;">Aktiv</p>';
    }

var icongnito = "Nein";
if(P.incognito_enabled) {
  icongnito = "Ja";
}

    html += '<div class="col col-md-6 col-xl-4" style="float:left">';
    html += '<div class="card"><div class="card-header"><h3 class="card-title">'+P.id+'</h3>';
    html += '<div class="card-options"><a class="card-options-collapse" data-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a>';
    html += '<a class="card-options-remove" data-toggle="card-remove"><i class="fe fe-x"></i></a></div></div>';
    html += '<div class="card-body">Name: '+P.name+'<br> Version: '+P.version+'<br>Update-URL: '+P.update_url+'<br> Im Anonym-Modus aktiv: '+icongnito+'<br>  </div>';
    html += '<div class="card-footer">'+active+'</div></div></div>';



  }) 
} else {
 
  

}

 


export default CardsDesignPage;
