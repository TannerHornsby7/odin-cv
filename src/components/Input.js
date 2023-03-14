import React, { Component } from "react";

class Input extends Component {
  render () {
    return (<form className={this.props.sn} onSubmit={this.props.hs}>
        <h1>{this.props.sn}</h1>
        <input 
        onChange={this.props.hc}
        placeholder={this.props.p1}
        type="text"
        /><br />
        <input 
        onChange={this.props.hc}
        placeholder={this.props.p2}
        type="text"
        /><br />
        <input 
        onChange={this.props.hc}
        placeholder={this.props.p3}
        type="text"
        /><br />
        <input 
        onChange={this.props.hc}
        placeholder={this.props.p4}
        type="text"
        /><br />
        <button className={this.props.sn} >SUBMIT</button>
    </form>);
  }
}

class Display extends Component {
    render () {
        return (<div className="Display">
            <h1>Display</h1>
            <div className="resume">
            </div>
        </div>);
    }
}
export {Input, Display};