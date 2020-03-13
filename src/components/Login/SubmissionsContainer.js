import React from "react";
import { connect } from "react-redux";
import { Container, Tab } from "semantic-ui-react";
import Tableclient from "../../components/Layout/Table";

function SubmissionsContainer(props) {
  const panes = [
    {
      menuItem: "Klant",
      render: () =>
        <Tab.Pane attached={false}>
          {props.latestClient.arr.map((property, i) =>
            <Tableclient key={i} client={property} />
          )}
        </Tab.Pane>
    },
    {
      menuItem: "Sollicitant",
      render: () =>
        <Tab.Pane attached={false}>
          {props.latestSollicitant.arr.map((property, i) =>
            <Tableclient key={i} client={property} />
          )}
        </Tab.Pane>
    },
    {
      menuItem: "Strijk",
      render: () =>
        <Tab.Pane attached={false}>
          {props.latestStrijken.arr.map((property, i) =>
            <Tableclient key={i} client={property} />
          )}
        </Tab.Pane>
    }
  ];
  const TabExampleSecondary = () =>
    <Tab menu={{ secondary: true }} panes={panes} />;
  return (
    <div>
      <Container textAlign="justified">
        {TabExampleSecondary()}
      </Container>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    latestClient: state.latestClient,
    latestSollicitant: state.latestSollicitant,
    latestStrijken: state.latestStrijken
  };
};
export default connect(mapStateToProps)(SubmissionsContainer);
