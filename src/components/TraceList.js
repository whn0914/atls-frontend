/**
 * Created by haonan on 16/5/1.
 */
import React, { Component } from 'react';
import TraceItem from './TraceItem';

export default class TraceList extends Component {
    render() {
        if(this.props.expName == null || this.props.expNo == null) {
            return (
                <div className="ui fluid vertical steps">
                    <div className="step">
                        <i className="truck icon"></i>
                        <div className="content">
                            <div className="title">Sorry</div>
                            <div className="description">暂无快递信息</div>
                        </div>
                    </div>
                </div>
            );
        }
        return (
            <div className="ui fluid vertical steps">
                <div className="step">
                    <i className="truck icon"></i>
                    <div className="content">
                        <div className="title">{this.props.expName}</div>
                        <div className="description">{this.props.expNo}</div>
                    </div>
                </div>
                {this.props.traces!=null && this.props.traces.map((trace, index) =>
                    <TraceItem {...trace} key={index} />
                )}
            </div>
        );
    }
}