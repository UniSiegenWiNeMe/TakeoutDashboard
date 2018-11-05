// @flow

import * as React from "react";

import {
  Page,
  Avatar,
  Icon,
  Grid,
  Card,
  Text,
  Table,
  Alert,
  Progress,
  colors,
  Dropdown,
  Row,
  Button,
  StampCard,
  StatsCard,
  ProgressCard,
  Badge,
} from "tabler-react";

import C3Chart from "react-c3js";

import SiteWrapper from "./SiteWrapper.react";

function Home() {

  var takeout = JSON.parse(localStorage.getItem("Takeout"));
  console.log(takeout);
  console.log(takeout.Chrome.Erweiterungen.length);

  return (
    <SiteWrapper>
      <Page.Content title="Dashboard">
      <Grid.Row cards={true}>
          <Grid.Col width={6} sm={4} lg={2}>
          <div className="card card-stats">
        <div className="content">
          <Grid.Row>
            <Grid.Col xs={7}>
            <div class="card-body p-3 text-center" ><div class="h1 m-0"><a href="profile">{takeout.Chrome.Person.length}</a></div><div class=" mb-4">Identitäten</div></div>
            </Grid.Col>
          </Grid.Row>
        </div>
      </div>
      </Grid.Col>


          <Grid.Col width={6} sm={4} lg={2}>
          <div className="card card-stats">
        <div className="content">
          <Grid.Row>
            <Grid.Col xs={7}>
            <div class="card-body p-3 text-center" ><div class="h1 m-0"><a href="hardware">{takeout.Meta.Geraete.length}</a></div><div class=" mb-4">Geräte</div></div>
            </Grid.Col>
          </Grid.Row>
        </div>
      </div>
      </Grid.Col>

          
          <Grid.Col width={6} sm={4} lg={2}>
          <div className="card card-stats">
        <div className="content">
          <Grid.Row>
            <Grid.Col xs={7}>
            <div class="card-body p-3 text-center" ><div class="h1 m-0"><a href="historie">{takeout.Chrome.Erweiterungen.length}</a></div><div class=" mb-4">Lesezeichen</div></div>
            </Grid.Col>
          </Grid.Row>
        </div>
      </div>
      </Grid.Col>

 
           
 <Grid.Col width={6} sm={4} lg={2}>
          <div className="card card-stats">
        <div className="content">
          <Grid.Row>
            <Grid.Col xs={7}>
            <div class="card-body p-3 text-center" ><div class="h1 m-0"><a href="historie">{takeout.Chrome.Historie.length}</a></div><div class=" mb-4">Internetverlauf</div></div>
            </Grid.Col>
          </Grid.Row>
        </div>
      </div>

 
 </Grid.Col>



           
           <Grid.Col width={6} sm={4} lg={2}>
          <div className="card card-stats">
        <div className="content">
          <Grid.Row>
            <Grid.Col xs={7}>
            <div class="card-body p-3 text-center" ><div class="h1 m-0"><a href="maps">{takeout.Maps.Orte.length}</a></div><div class=" mb-4">Besuchte Orte</div></div>
            </Grid.Col>
          </Grid.Row>
        </div>
      </div>

 
 </Grid.Col>



           
           <Grid.Col width={6} sm={4} lg={2}>
          <div className="card card-stats">
        <div className="content">
          <Grid.Row>
            <Grid.Col xs={7}>
            <div class="card-body p-3 text-center" ><div class="h1 m-0"><a href="maps">{takeout.Maps.Verlauf.length}</a></div><div class=" mb-4">Ortsveräufe</div></div>
            </Grid.Col>
          </Grid.Row>
        </div>
      </div>

 
 </Grid.Col>

  
 </Grid.Row>
 <Grid.Row>

          

          <Grid.Col md={6}>
            
            <Grid.Row>
              <Grid.Col sm={6}>
                <Card>
                  <Card.Header>
                    <Card.Title>Noch keine Ahnung*</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <C3Chart
                      style={{ height: "12rem" }}
                      data={{
                        columns: [
                          // each columns data
                          ["data1", 63],
                          ["data2", 37],
                        ],
                        type: "donut", // default type of chart
                        colors: {
                          data1: colors["green"],
                          data2: colors["green-light"],
                        },
                        names: {
                          // name of each serie
                          data1: "Maximum",
                          data2: "Minimum",
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
                  </Card.Body>
                </Card>
              </Grid.Col>
              <Grid.Col sm={6}>
                <Card>
                  <Card.Header>
                    <Card.Title>Oft besuchte Webseiten*</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <C3Chart
                      style={{ height: "12rem" }}
                      data={{
                        columns: [
                          // each columns data
                          ["data1", 63],
                          ["data2", 44],
                          ["data3", 12],
                          ["data4", 14],
                        ],
                        type: "pie", // default type of chart
                        colors: {
                          data1: colors["blue-darker"],
                          data2: colors["blue"],
                          data3: colors["blue-light"],
                          data4: colors["blue-lighter"],
                        },
                        names: {
                          // name of each serie
                          data1: "A",
                          data2: "B",
                          data3: "C",
                          data4: "D",
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
                  </Card.Body>
                </Card>
              </Grid.Col>
            </Grid.Row>
          </Grid.Col>
          <Grid.Col sm={3}>
                <ProgressCard
                  header="Datentypen vorliegend*"
                  content="6/16"
                  progressColor="red"
                  progressWidth={28}
                />
              

               <StampCard
              color="red"
              icon="dollar-sign"
              header={
                <a>
                 x   <small>x</small>
                </a>
              }
              footer={"yy"}
            />
              </Grid.Col>


              <Grid.Col sm={3}>
              <StatsCard
              layout={1}
              movement={0}
              total="Berlin"
              label="Letzter Standort"
            />

             <StatsCard
              layout={1}
              movement={0}
              total="iPhone 7"
              label="Neustes Handy"
            />

              


              </Grid.Col>

 
 
          
          
        </Grid.Row>
        
        
      </Page.Content>
    </SiteWrapper>
  );
}

export default Home;
