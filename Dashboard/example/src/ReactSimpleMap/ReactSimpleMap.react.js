// @flow

import * as React from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps";
import data from "./data/world-50m.json";
import { scaleLinear } from "d3-scale";



type State = {
  origin: { x: number, y: number },
  content: string,
};

const popScale = scaleLinear()
  .domain([0, 100000000, 1400000000])
  .range(["#CFD8DC", "#607D8B", "#37474F"]);

class ReactSimpleMap extends React.PureComponent<void, State> {
  state = {
    origin: { x: 0, y: 0 },
    content: "",
  };


  handleLeave = (): void => {
    this.setState({ content: "" });
  };

  render() {
    return (

        <ComposableMap
          projectionConfig={{
            scale: 205,
            rotation: [-11, 0, 0],
          }}
          style={{
            width: "100%",
            height: "auto",
          }}
          width={900}
        >
          <ZoomableGroup center={[0, 20]}>
            <Geographies geography={data}>
              {(geographies, projection) =>
                geographies.map((geography, i) => (
                  <Geography
                    key={i}
                    geography={geography}
                    projection={projection}
                    onMouseLeave={this.handleLeave}
                    style={{
                      default: {
                        fill: popScale(geography.properties.pop_est),
                        stroke: "#607D8B",
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                      hover: {
                        fill: "#263238",
                        stroke: "#607D8B",
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                      pressed: {
                        fill: "#263238",
                        stroke: "#607D8B",
                        strokeWidth: 0.75,
                        outline: "none",
                      },
                    }}
                  />
                ))
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
    );
  }
}

export default ReactSimpleMap;
