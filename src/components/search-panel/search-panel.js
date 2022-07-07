import { Component } from 'react';

import './search-panel.css';

class SearchPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }
    onChangeInput = (e) => {
        this.setState({
            term: e.target.value
        })
        this.props.onSearchUpdate(e.target.value)
    }

    render() {
        return (
            <input type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"
                onChange={this.onChangeInput}
                value={this.state.term}/>
        )
    }
}

export default SearchPanel;