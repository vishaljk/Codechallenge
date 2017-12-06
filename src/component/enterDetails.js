import React from 'react';
import { TabsContainer, Tabs, Tab, DataTable, TableRow, Grid, Cell, TableColumn } from 'react-md';
// import { Pagination } from 'react-bootstrap';
import { Dataset } from '../utils/Data';
import '../assets/stylesheets/EnterDetails.scss';

const EnterDetails = ({ checkChange, addChip, removeChip }) => {
    return (
        <div>
            <fieldset>
                <h3>Enter details for Measure 1</h3>
                <fieldset className="fieldset">
                    <TabsContainer panelClassName="md-grid" colored>

                        <Tabs tabId="simple-tab">
                            <Tab label="select dataset">
                                <Grid className="md-grid">
                                    <DataTable classID="table-name" plain>
                                        {Dataset.map((val, i) =>
                                            (<TableRow key={i} >
                                                <TableColumn>
                                                    <input type="checkbox" id={val.datasetNo}
                                                        onClick={value => checkChange(val.datasetNo)} />
                                                </TableColumn>
                                                <TableColumn>Dataset {val.datasetNo}</TableColumn>
                                                <TableColumn>Last Executed on - {val.date}</TableColumn>
                                            </TableRow>))}
                                    </DataTable>
                                </Grid>
                                <div className="chip-select">
                                    <Grid>
                                        <Cell className="selectedDatabase" width="3">
                                            <h3>Selected Dataset</h3>
                                        </Cell>
                                        <Cell className="chipbox" width="9">
                                            {addChip}
                                        </Cell>
                                    </Grid>
                                </div>
                            </Tab>

                            <Tab label="refine dataset">
                                <h3>under construction</h3>
                            </Tab>

                            <Tab label="add computation">
                                <h3>under construction</h3>
                            </Tab>

                            <Tab label="output attributes">
                                <h3>under construction</h3>
                            </Tab>

                            <Tab label="summary">
                                <h3>under construction</h3>
                            </Tab>

                        </Tabs>
                    </TabsContainer>

                </fieldset>
            </fieldset>
        </div >
    )
}

export default EnterDetails;
