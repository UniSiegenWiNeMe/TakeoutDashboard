// @flow

import React from "react";
import Parser from "html-react-parser";
import { Redirect } from "react-router-dom";

import { Container, Grid, Card, Button, Form, Avatar, Profile, List, Media, Text } from "tabler-react";

import SiteWrapper from "../SiteWrapper.react";

function Empty() {
  var identitys = "";

  if ("Takeout" in localStorage) {
    var takeout = JSON.parse(localStorage.getItem("Takeout"));

    if(takeout.Youtube.Youtube[0]) {
      takeout.Youtube.Youtube[0].map(function(P, i) {
        identitys += '<div style="background:#fff;width:300px;height:350px;margin:10px;border-radius:4px;float:left;border:1px solid #ddd">';
        identitys += "<div style=\"width:100%;height:160px;background-position:center;border-radius:4px;background:url('" + P.thumbnails + "');background-size: cover;\">";
        identitys += "</div> ";
        identitys += '<div style="width:100%;height:180px; padding:10px;">';
  
        identitys += '<h3 style="text-align:center"><a href="http://www.youtube.com/watch?v=' + P.contentDetails.videoId + '"> ' + P.title + " </a> </h3>";
        identitys += '<p style="text-align:center;margin:0px;"><b>' + P.filename + "</b>  </p>";
  
        identitys += "</div>";
        identitys += "";
        identitys += "";
        identitys += "";
        identitys += "";
        identitys += "</div>";
      });
    }
    
  } else {
  }

  // function identitys1() {
  //   console.log(identitys)
  //   return {__html: (identitys)} ;

  // }

  if ("Takeout" in localStorage) {
    return (
      <SiteWrapper>
        <div className="my-3 my-md-5">
          <Container>

                 <Grid.Row cards={true}>
            <Grid.Col width={12} sm={12} lg={12}>
              <div className="card card-stats">
                <div className="content">
                  <Grid.Row>
                    <Grid.Col >
                      <div class="card-body p-3 text-center"> Sie nutzen Youtube ? Und welche Videos schauen Sie gerne ? Welche Favoriten haben Sie denn so ? Google weiß nicht nur durch die Cookies was sie oft sehen.. </div>
                    </Grid.Col>
                  </Grid.Row>
                </div>
              </div>
            </Grid.Col>
          </Grid.Row>


            {Parser(identitys)}
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

export default Empty;
