import React, { Component } from 'react'
import { Toolbar } from 'react-md'


import { NavigationDrawer, Paper, Button, FontIcon, IconSeparator, TextField, SelectionControlGroup } from 'react-md';

class Measureform extends Component {
    render() {
        const { click, pass } = this.props;
        return (
            <div>
                <Paper zDepth={2}>
                    <Toolbar
                        themed
                        title="Create New Measure" />

                    <Paper zDepth={2}>
                        <IconSeparator iconBefore>
                            <TextField
                                id="floating-center-title"
                                label="Measure Details"
                                lineDirection="center"
                                leftIcon={<FontIcon>local_offer</FontIcon>}
                                placeholder="Enter Measure Name"
                                onChange={value => pass(value)}
                                className="md-cell md-cell--bottom" />

                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

         <TextField
                                id="floating-center-title"
                                lineDirection="center"
                                rows={2}
                                leftIcon={<FontIcon>rate_review</FontIcon>}
                                placeholder="Enter Description"
                                className="md-cell md-cell--bottom"
                            />
                        </IconSeparator>

                        
                <div id="Key">
                    <i class="material-icons" id="Key">lock_open</i>
                    <SelectionControlGroup
                        id="selection-control-group-radios"
                        type="radio"

                        controls={[{
                            label: 'Public',
                            value: 'A',
                        }, {
                            label: 'Private',
                            value: 'B',
                        }, {
                            label: 'Readonly',
                            value: 'C',
                        }]}
                    />
                    </div>
                        <br /> <br /><br /><br />
                        <br /> <br /><br /><br />
                        <Button raised onClick={click}>create measure</Button>

                        <br /> <br /><br /><br />
                        <Button raised >save</Button>
                        <Button raised>cancel</Button>
                    </Paper>
                </Paper>

                </div>

                )
    }
    }

export default Measureform;