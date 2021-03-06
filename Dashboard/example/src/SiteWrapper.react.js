// @flow

import * as React from "react";
import { NavLink, withRouter } from "react-router-dom";
import ReactFileReader from 'react-file-reader';

import {
  Site,
  Nav,
  Grid,
  List,
  Button,
  RouterContextProvider,
} from "tabler-react";

type Props = {|
  +children: React.Node,
|};

type subNavItem = {|
  +value: string,
  +to?: string,
  +icon?: string,
  +LinkComponent?: React.ElementType,
|};

type navItem = {|
  +value: string,
  +to?: string,
  +icon?: string,
  +active?: boolean,
  +LinkComponent?: React.ElementType,
  +subItems?: Array<subNavItem>,
|};

const navBarItems: Array<navItem> = [
  { value: "Home", to: "/", icon: "home", LinkComponent: withRouter(NavLink) },
  { value: "Person", to: "/profile", icon: "user", LinkComponent: withRouter(NavLink) },
  { value: "Historie", to: "/historie", icon: "map", LinkComponent: withRouter(NavLink) },
  { value: "Hardware", to: "/hardware", icon: "monitor", LinkComponent: withRouter(NavLink) },
  { value: "Browser", to: "/cards", icon: "monitor", LinkComponent: withRouter(NavLink) },
  { value: "Ortung", to: "/maps", icon: "map", LinkComponent: withRouter(NavLink) },
  { value: "Youtube", to: "/youtube", icon: "video", LinkComponent: withRouter(NavLink) },
  { value: "Playstore", to: "/playstore", icon: "file", LinkComponent: withRouter(NavLink) },
  { value: "Eye", to: "/eye", icon: "eye", LinkComponent: withRouter(NavLink) },

];

const notificationsObjects = [
];


var accountDropdownProps = {};
if("Takeout" in localStorage){
  var takeout = JSON.parse(localStorage.getItem("Takeout"));
  var vorname = "Max";
  var nachname = "Müller";
  if(takeout.Chrome.Person[0]) {
    vorname = takeout.Chrome.Person[0].vorname;
    nachname = takeout.Chrome.Person[0].nachname;
  }
   accountDropdownProps = {
    avatarURL: "./demo/faces/female/25.jpg",
    name:  vorname + ", " +  nachname,
    description: "Takeout-Identität",
    options: [
      { icon: "user", value: "Profile" },
      { icon: "settings", value: "Settings" },
      { icon: "mail", value: "Inbox", badge: "6" },
      { icon: "send", value: "Message" },
      { isDivider: true },
      { icon: "help-circle", value: "Need help?" },
      { icon: "log-out", value: "Sign out" },
    ],
  };
} else {
   accountDropdownProps = {
    avatarURL: "./demo/faces/female/25.jpg",
    name: "Jane Pearson",
    description: "Demodaten",
    options: [
      { icon: "user", value: "Profile" },
      { icon: "settings", value: "Settings" },
      { icon: "mail", value: "Inbox", badge: "6" },
      { icon: "send", value: "Message" },
      { isDivider: true },
      { icon: "help-circle", value: "Need help?" },
      { icon: "log-out", value: "Sign out" },
    ],
  };
}





 

class SiteWrapper extends React.Component<Props, void> {

  handleFiles = files => {
    var reader = new FileReader();
    reader.onload = function(e) {
    // Use reader.result
    localStorage.setItem('Takeout', reader.result);
    window.location.reload();
    }
    reader.readAsText(files[0]);
    }

  render(): React.Node {
 
    const _onBackClick = (
      event: SyntheticMouseEvent<HTMLInputElement>
    ): boolean => {


      window.history.back();
      event.preventDefault();
      return true;
    };



 


    return (


      <Site.Wrapper
        headerProps={{
          href: "/",
          alt: "Tabler React",
          imageURL: "./demo/brand/tabler.svg",
          navItems: (
            <Nav.Item type="div" className="d-none d-md-flex">


<ReactFileReader handleFiles={this.handleFiles} fileTypes={[".csv",".json"]} >
  <button className='btn'>Upload</button>
</ReactFileReader>

 
            </Nav.Item>
          ),
          notificationsTray: { notificationsObjects },
          accountDropdown: accountDropdownProps,
        }}
        navProps={{ itemsObjects: navBarItems }}
        routerContextComponentType={withRouter(RouterContextProvider)}
        
      >
        {this.props.children}
      </Site.Wrapper>
    );
  }
}

export default SiteWrapper;
