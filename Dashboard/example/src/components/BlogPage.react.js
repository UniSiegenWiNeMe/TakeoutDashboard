// @flow

import * as React from "react";
import Parser from "html-react-parser";

import { Page, Grid, BlogCard } from "tabler-react";
import SiteWrapper from "../SiteWrapper.react";
import { Redirect } from 'react-router-dom'

function BlogPage(): React.Node {
  if ("Takeout" in localStorage) {
    return (
      <SiteWrapper>
        <Page.Content>
        <Grid.Row cards={true}>
            <Grid.Col width={12} sm={12} lg={12}>
              <div className="card card-stats">
                <div className="content">
                  <Grid.Row>
                    <Grid.Col >
                      <div class="card-body p-3 text-center"> Hier sehen Sie welche Android Geräte Sie besitzen oder besessen haben. Wenn Sie ein Gerät auf Werkseinstellungen zurück gesetzt haben, sehen Sie auch dessen erstmalige Nutzungsperiode unter der gleichen IMEI, aber einer neuen Android-ID.  </div>
                    </Grid.Col>
                  </Grid.Row>
                </div>
              </div>
            </Grid.Col>
          </Grid.Row>

          <Grid.Row>
            <div id="html">{Parser(html)}</div>
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

var html = "";
if ("Takeout" in localStorage) {
  var takeout = JSON.parse(localStorage.getItem("Takeout"));
  console.log(takeout.Meta.Geraete);

  takeout.Meta.Geraete.map(function(P, i) {
    html += '<div class="col col-md-6 col-xl-6" style="float:left;width:400px;">';
    html += '<div class="card"><div class="card-header"><h3 class="card-title">' + P.Modell + " (" + P.Hersteller + ")</h3>";
    html += '<div class="card-options"><a class="card-options-collapse" data-toggle="card-collapse"><i class="fe fe-chevron-up"></i></a>';
    html += '<a class="card-options-remove" data-toggle="card-remove"><i class="fe fe-x"></i></a></div></div>';
    html += '<div class="card-body">';
    html += '<p style="text-align:center"><img src="/demo/mobile.png" style="height:100px"></p>';

    html += '<p style="margin:0px;"><b>Registrierter Nutzer:</b></p><p style="text-align:right;margin:0px;"> ' + P.Nutzer + "</p>";
    html += '<br><p style="margin:0px;float:left;"><b>Erstnutzung:</b></p><p style="float:right;text-align:right;margin:0px;"> ' + P.Datum_Registrierung + "</p>";
    html += '<br><p style="margin:0px;float:left;"><b>IMEI:</b></p><p style="float:right;text-align:right;margin:0px;"> ' + P.IMEI + "</p>";
    html += '<br><p style="margin:0px;float:left;"><b>MEID:</b></p><p style="float:right;text-align:right;margin:0px;"> ' + P.MEID + "</p>";
    html += '<br><p style="margin:0px;float:left;"><b>Android-ID:</b></p><p style="float:right;text-align:right;margin:0px;"> ' + P.AndroidID + "</p>";
    html += '<br><p style="margin:0px;float:left;"><b>Seriennummer:</b></p><p style="float:right;text-align:right;margin:0px;"> ' + P.Seriennummer + "</p>";
    html += '<br><p style="margin:0px;float:left;"><b>IP-Adresse:</b></p><p style="float:right;text-align:right;margin:0px;"> ' + P.IPAdresse + "</p>";
    html += "</div>";
    html += '<div class="card-footer"> </div></div></div>';
  });
} else {
}

export default BlogPage;
