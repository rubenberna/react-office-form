import React from "react";
import { connect } from "react-redux";
import { Container, Tab } from "semantic-ui-react";
import Tableclient from "../../components/Layout/Table";

function SubmissionsContainer({ latestClients, latestSollicitants, latestStrijken }) {
  const panes = [
    {
      menuItem: "Klant",
      render: () =>
        <Tab.Pane attached={false}>
          {latestClients.length ? latestClients.map((form, i) =>
            <Tableclient key={i} client={form} />
          ) : "Er zijn geen klanten formulieren ingevuld"}
        </Tab.Pane>
    },
    {
      menuItem: "Sollicitant",
      render: () =>
        <Tab.Pane attached={false}>
          {latestSollicitants.length ? latestSollicitants.map((form, i) =>
            <Tableclient key={i} client={form} />
          ) : "Er zijn geen sollicitant formulieren ingevuld"}
        </Tab.Pane>
    },
    {
      menuItem: "Strijk",
      render: () =>
        <Tab.Pane attached={false}>
          {latestStrijken.length ? latestStrijken.map((form, i) =>
            <Tableclient key={i} client={form} />
          ) : "Er zijn geen strijken formulieren ingevuld"}
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
    latestClients: state.latestClients,
    latestSollicitants: state.latestSollicitants,
    latestStrijken: state.latestStrijken
  };
};
export default connect(mapStateToProps)(SubmissionsContainer);