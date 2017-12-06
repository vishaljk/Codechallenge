import React from 'react'
import {connect} from 'react-redux'
import createmeasure from '../store/measure/action'
import { Paper, DataTable,
  TableHeader,
  TableBody,
  TableRow,
  TableColumn} from 'react-md';
import {Dataset} from '../utils/Data'
import { TabsContainer, Tabs, Tab } from 'react-md';
import {Chip} from 'react-md';

class App extends React.Component{
    render(){
        
    return(
        <div>
            <p>Display the measure name here:{this.props.measures.measure}</p>
            <Paper>
               <TabsContainer  colored>
                <Tabs  >
                <Tab label="Select Dataset"><SelectDatasetComponent/>
                     

                </Tab>
                <Tab label="Refine Dataset">Databease in refine Database </Tab>
                <Tab label="Add Computations">data in Add acomputations</Tab>
                <Tab label="Output Attributes"> data in output attributes</Tab>
                <Tab label="Summary">summary data</Tab>
              </Tabs>
             </TabsContainer> 
            </Paper>

         
            </div>
    )
}
}

class SelectDatasetComponent extends React.Component{
    render(){

    return(
             <Paper>
            <DataTable baseId="simple-selectable-table" indeterminate>
    
    <TableBody>
      {Dataset.map((Data, i) => (
        <TableRow key={i}>
          <TableColumn> {Data.Datasets}</TableColumn>
          <TableColumn>{Data.Durations}</TableColumn>
        </TableRow>
      ))}
    </TableBody>
  </DataTable>
  </Paper>
    )
}
}

const mapStateToProps=(state)=>{
    return{
  measures:state.createmeasure
    }
}




export default connect(mapStateToProps)(App);