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
            <StatsCard
              layout={1}
              movement={0}
              href="/#?"
              total={takeout.Meta.Geraete.length}
              label="Geräte"
            />
          </Grid.Col>
          <Grid.Col width={6} sm={4} lg={2}>
            <StatsCard layout={1} movement={0} total={takeout.Chrome.Lesezeichen.length} label="Lesezeichen" />
          </Grid.Col>
          <Grid.Col width={6} sm={4} lg={2}>
            <StatsCard
              layout={1}
              movement={0}
              total={takeout.Chrome.Erweiterungen.length}
              label="Plugins"
            />
          </Grid.Col>
          <Grid.Col width={6} sm={4} lg={2}>
            <StatsCard
              layout={1}
              movement={0}
              total={takeout.Maps.Orte.length}
              label="Orte"
            />
          </Grid.Col>
          <Grid.Col width={6} sm={4} lg={2}>
            <StatsCard layout={1} movement={0} total={takeout.Chrome.Historie.length} label="Internetverlauf" />
          </Grid.Col>
          
          

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
        <Grid.Row cards deck>
          <Grid.Col width={12}>
            <Card>
              <Table
                responsive
                highlightRowOnHover
                hasOutline
                verticalAlign="center"
                cards
                className="text-nowrap"
              >
                <Table.Header>
                  <Table.Row>
                    <Table.ColHeader alignContent="center" className="w-1">
                      <i className="icon-people" />
                    </Table.ColHeader>
                    <Table.ColHeader>User</Table.ColHeader>
                    <Table.ColHeader>Usage</Table.ColHeader>
                    <Table.ColHeader alignContent="center">
                      Payment
                    </Table.ColHeader>
                    <Table.ColHeader>Activity</Table.ColHeader>
                    <Table.ColHeader alignContent="center">
                      Satisfaction
                    </Table.ColHeader>
                    <Table.ColHeader alignContent="center">
                      <i className="icon-settings" />
                    </Table.ColHeader>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Col alignContent="center">
                      <Avatar
                        imageURL="demo/faces/female/26.jpg"
                        className="d-block"
                        status="green"
                      />
                    </Table.Col>
                    <Table.Col>
                      <div>Elizabeth Martin</div>
                      <Text size="sm" muted>
                        Registered: Mar 19, 2018
                      </Text>
                    </Table.Col>
                    <Table.Col>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>42%</strong>
                        </div>
                        <div className="float-right">
                          <Text.Small muted>
                            Jun 11, 2015 - Jul 10, 2015
                          </Text.Small>
                        </div>
                      </div>
                      <Progress size="xs">
                        <Progress.Bar color="yellow" width={42} />
                      </Progress>
                    </Table.Col>
                    <Table.Col alignContent="center">
                      <Icon payment name="visa" />
                    </Table.Col>
                    <Table.Col>
                      <Text size="sm" muted>
                        Last login
                      </Text>
                      <div>4 minutes ago</div>
                    </Table.Col>
                    <Table.Col alignContent="center">42%</Table.Col>
                    <Table.Col alignContent="center">
                      <Dropdown
                        trigger={
                          <Dropdown.Trigger
                            icon="more-vertical"
                            toggle={false}
                          />
                        }
                        position="right"
                        items={
                          <React.Fragment>
                            <Dropdown.Item icon="tag">Action </Dropdown.Item>
                            <Dropdown.Item icon="edit-2">
                              Another action{" "}
                            </Dropdown.Item>
                            <Dropdown.Item icon="message-square">
                              Something else here
                            </Dropdown.Item>
                            <Dropdown.ItemDivider />
                            <Dropdown.Item icon="link">
                              {" "}
                              Separated link
                            </Dropdown.Item>
                          </React.Fragment>
                        }
                      />
                    </Table.Col>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Card>
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col sm={6} lg={4}>
            <Card title="Browser Stats">
              <Table className="card-table">
                <Table.Row>
                  <Table.Col>
                    <Icon prefix="fa" name="chrome" className="text-muted" />
                  </Table.Col>
                  <Table.Col>Google Chrome</Table.Col>
                  <Table.Col className="text-right">
                    <Text RootComponent="span" muted>
                      23%
                    </Text>
                  </Table.Col>
                </Table.Row>
              </Table>
            </Card>
          </Grid.Col>
          <Grid.Col sm={6} lg={4}>
            <Card title="Projects">
              <Table cards>
                <Table.Row>
                  <Table.Col>Admin Template</Table.Col>
                  <Table.Col alignContent="right">
                    <Badge color="default">65%</Badge>
                  </Table.Col>
                </Table.Row>
              </Table>
            </Card>
          </Grid.Col>
          <Grid.Col md={6} lg={4}>
            <Card title="Members">
              <Card.Body>
                <ul className="list-unstyled list-separated">
                  <li className="list-separated-item">
                    <Grid.Row className="align-items-center">
                      <Grid.Col auto>
                        <Avatar
                          size="md"
                          className="d-block"
                          imageURL="demo/faces/female/12.jpg"
                        />
                      </Grid.Col>
                      <Grid.Col>
                        <div>
                          <a className="text-inherit">Amanda Hunt</a>
                        </div>
                        <Text.Small muted className="d-block item-except h-1x">
                          amanda_hunt@example.com
                        </Text.Small>
                      </Grid.Col>
                      <Grid.Col auto>
                        <Dropdown
                          trigger={
                            <Dropdown.Trigger
                              icon="more-vertical"
                              toggle={false}
                            />
                          }
                          position="right"
                          items={
                            <React.Fragment>
                              <Dropdown.Item icon="tag">Action </Dropdown.Item>
                              <Dropdown.Item icon="edit-2">
                                {" "}
                                Another action{" "}
                              </Dropdown.Item>
                              <Dropdown.Item icon="message-square">
                                {" "}
                                Something else here
                              </Dropdown.Item>
                              <Dropdown.ItemDivider />
                              <Dropdown.Item icon="link">
                                {" "}
                                Separated link
                              </Dropdown.Item>
                            </React.Fragment>
                          }
                        />
                      </Grid.Col>
                    </Grid.Row>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Grid.Col>
 
          <Grid.Col width={12}>
            <Card title="Invoices">
              <Table
                responsive
                className="card-table table-vcenter text-nowrap"
                headerItems={[
                  { content: "No.", className: "w-1" },
                  { content: "Invoice Subject" },
                  { content: "Client" },
                  { content: "VAT No." },
                  { content: "Created" },
                  { content: "Status" },
                  { content: "Price" },
                  { content: null },
                  { content: null },
                ]}
                bodyItems={[
                  {
                    key: "1",
                    item: [
                      {
                        content: (
                          <Text RootComponent="span" muted>
                            001401
                          </Text>
                        ),
                      },
                      {
                        content: (
                          <a href="invoice.html" className="text-inherit">
                            Design Works
                          </a>
                        ),
                      },
                      { content: "Carlson Limited" },
                      { content: "87956621" },
                      { content: "15 Dec 2017" },
                      {
                        content: (
                          <React.Fragment>
                            <span className="status-icon bg-success" /> Paid
                          </React.Fragment>
                        ),
                      },
                      { content: "$887" },
                      {
                        alignContent: "right",
                        content: (
                          <React.Fragment>
                            <Button size="sm" color="secondary">
                              Manage
                            </Button>
                            <div className="dropdown">
                              <Button
                                color="secondary"
                                size="sm"
                                isDropdownToggle
                              >
                                Actions
                              </Button>
                            </div>
                          </React.Fragment>
                        ),
                      },
                      { content: <Icon link name="edit" /> },
                    ],
                  },
                ]}
              />
            </Card>
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    </SiteWrapper>
  );
}

export default Home;
