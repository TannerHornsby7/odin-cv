import React, { Component } from "react";
import './display.scss';

class Input extends Component {
  render () {
    return (<form className={this.props.sn} onSubmit={this.props.hs}>
        <h1>{this.props.sn}</h1>
        <input 
        onChange={this.props.hc}
        id={this.props.p1}
        placeholder={this.props.state[this.props.p1]}
        type="text"
        /><br />
        <input 
        onChange={this.props.hc}
        id={this.props.p2}
        placeholder={this.props.state[this.props.p2]}
        type="text"
        /><br />
        <input 
        onChange={this.props.hc}
        id={this.props.p3}
        placeholder={this.props.state[this.props.p3]}
        type="text"
        /><br />
        <input 
        onChange={this.props.hc}
        id={this.props.p4}
        placeholder={this.props.state[this.props.p4]}
        type="text"
        /><br />
    </form>);
  }
}

class Display extends Component {
    render () {
        let {name, email, cell, college, degree, major, gpa, company,
             position, start, end } = this.props.content;
        return (<div className="Display">
            <h1>Display</h1>
            <div className="Paper">
                <div className="Header">
                    <h1>{name}</h1>
                    <div className="Header-Bottom">
                        <h3>{email}</h3>
                        <h3>{cell}</h3>
                    </div>
                </div>
                <div className="Body">
                    <div className="Education">
                        <h2>Education</h2>
                        <div className="Education-Body">
                        <div className="Education-Body-Left">
                            <h3>{college}</h3>
                            <h3>{degree}</h3>
                            </div>
                            <div className="Education-Body-Right">
                            <h3>{major}</h3>
                            <h3>{gpa}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="Experience">
                        <h2>Experience</h2>
                        <div className="Experience-Body">
                        <div className="Experience-Body-Left">
                            <h3>{company}</h3>
                            <h3>{position}</h3>
                            </div>
                            <div className="Experience-Body-Right">
                            <h3>{start}</h3>
                            <h3>{end}</h3>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>);
    }
}
export {Input, Display};