import React, { Component } from 'react';
import EnterDetails from '../component/enterDetails.js';
import { Chip } from 'react-md';

class EnterDetailsContainer extends Component {

    constructor(props) {
        super(props);
        this.state = { set: [] };

        this.checkChange = this.checkChange.bind(this);
    }

    checkChange(value) {
        const bool = document.getElementById(value).checked;
        if (bool == true) {
            this.setState({ set: [...this.state.set, value] });
        }
        else {
            const index = this.state.set.indexOf(value);
            this.state.set.splice(index, 1);
            this.setState({ set: this.state.set });
            console.log(...this.state.set);
        }
    }

    render() {

        const addChip = () => {
            return (this.state.set.map((val, i) =>
                (
                    <Chip
                        key={i}
                        label={"Dataset " + val}
                        onClick={value => removeChip(val)}
                    />
                )))
        }
        const removeChip = (value) => {
            const index = this.state.set.indexOf(value);
            this.state.set.splice(index, 1);
            document.getElementById(value).checked = false;
            this.setState({ set: this.state.set });
        }

        return (
            <div>
                <EnterDetails
                    checkChange={this.checkChange}
                    addChip={addChip()}
                    removeChip={this.removeChip}
                />
            </div>
        )
    }
}
export default EnterDetailsContainer;
