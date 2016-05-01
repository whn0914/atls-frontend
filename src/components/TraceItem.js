/**
 * Created by haonan on 16/5/1.
 */
import React, { Component } from 'react';

export default class TraceItem extends Component {
    render() {
        return (
            <div className="step">
                <div className="content">
                    <div className="title">{this.props.acceptTime}</div>
                    <div className="description">{this.props.acceptStation}</div>
                </div>
            </div>
        );
    }
}