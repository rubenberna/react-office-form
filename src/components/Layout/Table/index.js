import React, { Component } from 'react'
import { Divider, Header, Icon, Table , Accordion } from "semantic-ui-react";


export default class index extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Accordion fluid styled>
    
    
      <Accordion.Title
        active={activeIndex === 2}
        index={2}
        onClick={this.handleClick}
      >
        <Icon name='dropdown' />
        {this.props.client.first_name} 
     {"      "}
        {this.props.client.datatime}
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 2}>
      <React.Fragment>
        
        { this.props.client.Wensen__c  != null ?  
        <>
     <Divider horizontal>
          <Header as="h4">
            <Icon name="tag" />
            Beschrijving
          </Header>
        </Divider>
    
        <p>
          {this.props.client.Wensen__c}
        </p> 
        </>
        : ""
    }
        <Divider horizontal>
          <Header as="h4">
            <Icon name="bar chart" />
            Specificaties
          </Header>
        </Divider>
    
        <Table definition>
          <Table.Body>
            <Table.Row>
              <Table.Cell width={2}>Naam</Table.Cell>
              <Table.Cell>
                {" "}{this.props.client.first_name}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Achternaam</Table.Cell>
              <Table.Cell>
                {this.props.client.first_name}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Taal</Table.Cell>
              <Table.Cell>
                {this.props.client.language_lead__c == "nl"
                  ? "Nederlands"
                  : "Frans"}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Email</Table.Cell>
              <Table.Cell>
                {this.props.client.email}
              </Table.Cell>
            </Table.Row>
            
            <Table.Row>
              <Table.Cell>Gemaakt op</Table.Cell>
              <Table.Cell>
                {this.props.client.datatime}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>GSM-Nummer</Table.Cell>
              <Table.Cell>
                {this.props.client.mobile}
              </Table.Cell>
            </Table.Row>
            {
              this.props.client.Frequentie__c != null ? 
              <Table.Row>
              <Table.Cell>Hoevaak?</Table.Cell>
              <Table.Cell>
                {this.props.client.Frequentie__c}
              </Table.Cell>
            </Table.Row> :""
            }
       {
              this.props.client.Frequentie__c != null ? 
            <Table.Row>
              <Table.Cell>Gewenst aantal uren (Per week)</Table.Cell>
              <Table.Cell>
                {this.props.client.Gewenst_aantal_uren_per_week__c}
              </Table.Cell>
            </Table.Row>
            :"" }
            { this.props.client.lead_source != null ? 
            <Table.Row>
              <Table.Cell>Je hebt ons gevonden via </Table.Cell>
              <Table.Cell>
                {this.props.client.lead_source}
              </Table.Cell>
            </Table.Row> : ""
    }
         { this.props.client.kantoorName ?   <Table.Row>
              <Table.Cell>Kantoor naam </Table.Cell>
              <Table.Cell>
                {this.props.client.kantoorName}
              </Table.Cell>
            </Table.Row> : ""}
            <Table.Row>
              <Table.Cell>address</Table.Cell>
              <Table.Cell>
                {this.props.client.street} {this.props.client.Box__c}{" "}
                {this.props.client.zip} {this.props.client.city}
              </Table.Cell>
            </Table.Row>
            {
              this.props.client.Frequentie__c != null ? 
            <Table.Row>
              <Table.Cell>beschikbaarheden</Table.Cell>
              <Table.Cell>
                <Table basic="very" celled collapsing>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>
                        <Header as="h4" image>
                          <Header.Content>Maandag</Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>
                        {this.props.client.Maandagpicklist__c}
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        <Header as="h4" image>
                          <Header.Content>Dinsdag</Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>
                        {" "}{this.props.client.Dinsdagpicklist__c}
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        <Header as="h4" image>
                          <Header.Content>Woensdag</Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>
                        {" "}{this.props.client.Woensdagpicklist__c}
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        <Header as="h4" image>
                          <Header.Content>Donderdag</Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>
                        {this.props.client.Donderdagpicklist__c}
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        <Header as="h4" image>
                          <Header.Content>Vrijdag</Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>
                        {this.props.client.Vrijdagpicklist__c}
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        <Header as="h4" image>
                          <Header.Content>Zaterdag </Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>
                        {this.props.client.Zaterdagpicklist__c}
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Table.Cell>
            </Table.Row> 
            : "" }
          </Table.Body>
        </Table>
      </React.Fragment>
      </Accordion.Content>
    </Accordion>
     
    )
  }
}





