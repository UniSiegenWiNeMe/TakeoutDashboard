// @flow

import React from "react";
import Parser from 'html-react-parser';

import {
  Container,
  Grid,
  Card,
  Button,
  Form,
  Avatar,
  Profile,
  List,
  Media,
  Text,
} from "tabler-react";

import SiteWrapper from "../SiteWrapper.react";

function Empty() {


         var identitys =  "";

 
        if("Takeout" in localStorage){
          var takeout = JSON.parse(localStorage.getItem("Takeout"));
          console.log(takeout);
      
          takeout.Youtube.Youtube[0].map(function(P, i){
            identitys += '<div style="background:#fff;width:300px;height:350px;margin:10px;border-radius:4px;float:left;border:1px solid #ddd">';
            identitys += '<div style="width:100%;height:160px;background-position:center;border-radius:4px;background:url(\''+P.thumbnails+'\');background-size: cover;">';
            identitys += '</div> ';
            identitys += '<div style="width:100%;height:180px; padding:10px;">';
            
            identitys += '<h3 style="text-align:center"><a href="http://www.youtube.com/watch?v='+P.contentDetails.videoId+'"> '+P.title+' </a> </h3>';
            identitys += '<p style="text-align:center;margin:0px;"><b>'+P.filename+'</b>  </p>';


            identitys += '</div>';
            identitys += '';
            identitys += '';
            identitys += '';
            identitys += '';
            identitys += '</div>';
      
          }) 
      } else {
        identitys += '<div style="background:#fff;width:300px;height:350px;margin:10px;border-radius:4px;">';
        identitys += '<div style="width:100%;height:160px;background-size:contain;background-position:center;border-radius:4px;background:url(\'demo/photos/eberhard-grossgasteiger-311213-500.jpg\')">';
        identitys += '</div> ';
        identitys += '<div style="width:100%;height:180px; padding:10px;">';
        
        identitys += '<h3 style="text-align:center"> Keine Daten vorhanden </h3>';


        identitys += '</div>';
        identitys += '';
        identitys += '';
        identitys += '';
        identitys += '';
        identitys += '</div>';
          
          
    
      }


        // function identitys1() {
        //   console.log(identitys)
        //   return {__html: (identitys)} ;

        // }

    

  return (
    <SiteWrapper>
      <div className="my-3 my-md-5">
        <Container>

  
{Parser(identitys)}
              <Grid.Row>
             <Grid.Col lg={4}>
            
            
             </Grid.Col>
             </Grid.Row>




        </Container>
      </div>
    </SiteWrapper>
  );
}

export default Empty;
