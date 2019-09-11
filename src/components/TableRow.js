import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);

        this.state = {toIndex: false};
    }
    delete() {
        axios.get('http://localhost:4200/serverport/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .then(() => this.setState(() => ({toIndex: true})))
            .catch(err => console.log(err))
    }
  render() {
    if (this.state.toIndex === true) {
        return <Redirect to='/index' />;
    }

    return (
        <tr>
          <td>
            {this.props.obj._id}
          </td>
          <td>
            {this.props.obj.name}
          </td>
          <td>
            {this.props.obj.port}
          </td>
          <td>
          <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;
