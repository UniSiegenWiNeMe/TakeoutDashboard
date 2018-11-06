// @flow

import * as React from "react";

import { Page, Avatar, Icon, Grid, Card, Text, Table, Alert, Progress, colors, Dropdown, Row, Button, StampCard, StatsCard, ProgressCard, Badge } from "tabler-react";

import C3Chart from "react-c3js";

import SiteWrapper from "./SiteWrapper.react";

function Home() {
  var takeout = JSON.parse(localStorage.getItem("Takeout"));
  if (takeout) {
    return (
      <SiteWrapper>
        <Page.Content title="Dashboard">
          <Grid.Row cards={true}>
            <Grid.Col width={6} sm={4} lg={2}>
              <div className="card card-stats">
                <div className="content">
                  <Grid.Row>
                    <Grid.Col xs={7}>
                      <div class="card-body p-3 text-center">
                        <div class="h1 m-0">
                          <a href="profile">{takeout.Chrome.Person.length}</a>
                        </div>
                        <div class=" mb-4">Identitäten</div>
                      </div>
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
                      <div class="card-body p-3 text-center">
                        <div class="h1 m-0">
                          <a href="hardware">{takeout.Meta.Geraete.length}</a>
                        </div>
                        <div class=" mb-4">Geräte</div>
                      </div>
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
                      <div class="card-body p-3 text-center">
                        <div class="h1 m-0">
                          <a href="historie">{takeout.Chrome.Erweiterungen.length}</a>
                        </div>
                        <div class=" mb-4">Lesezeichen</div>
                      </div>
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
                      <div class="card-body p-3 text-center">
                        <div class="h1 m-0">
                          <a href="historie">{takeout.Chrome.Historie.length}</a>
                        </div>
                        <div class=" mb-4">Internetverlauf</div>
                      </div>
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
                      <div class="card-body p-3 text-center">
                        <div class="h1 m-0">
                          <a href="maps">{takeout.Maps.Orte.length}</a>
                        </div>
                        <div class=" mb-4">Besuchte Orte</div>
                      </div>
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
                      <div class="card-body p-3 text-center">
                        <div class="h1 m-0">
                          <a href="maps">{takeout.Maps.Verlauf.length}</a>
                        </div>
                        <div class=" mb-4">Ortsveräufe</div>
                      </div>
                    </Grid.Col>
                  </Grid.Row>
                </div>
              </div>
            </Grid.Col>
          </Grid.Row>
        </Page.Content>
      </SiteWrapper>
    );
  } else {
    return (
      <SiteWrapper>
        <Page.Content title="Dashboard">
          <Grid.Row cards={true}>
            <Grid.Col width={6} sm={4} lg={2}>
              <div className="card card-stats">
                <div className="content">
                  <Grid.Row>
                    <Grid.Col xs={7}>
                      <div class="card-body p-3 text-center"> Es liegen keine Daten vor. Laden Sie bitte einen Report mit Klick auf "Upload". Sie können den beiliegenden Report benutzen. </div>
                    </Grid.Col>
                  </Grid.Row>
                </div>
              </div>
            </Grid.Col>
          </Grid.Row>
        </Page.Content>
      </SiteWrapper>
    );
  }
}

export default Home;
