/**
 * Created by haonan on 16/4/24.
 */
import React, { Component } from 'react';
import Modal from 'react-modal';
import Alert from 'react-s-alert';
import FetchRequest from '../utils/FetchRequest';
import { getExpressCode } from '../utils/ExpressTool';
import TraceList from './TraceList';
import '../css/main.css';
import '../css/s-alert-default.css';

export default class OrderItem extends Component {
    constructor(props){
        super(props);
        this.state = { modalIsOpen: false, status: "", traces: null };
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    handleModalCloseRequest() {
        // opportunity to validate something and keep the modal open even if it
        // requested to be closed
        this.setState({modalIsOpen: false});
    }


    handleClick(event) {
        this.setState({ status: "loading" });
        // fetch traces data
        if(this.props.expCode == null || this.props.expNo == null) {
            this.setState({ status: "", traces: null});
        } else {
            const params = {expCode: getExpressCode(this.props.expCode), expNo: this.props.expNo};
            const response = FetchRequest.call("/express/query", params);
            response.then(
                res => {
                    if(res.code != 1) {
                        Alert.error(res.msg, {
                            position: 'top',
                            timeout: 1000
                        });
                        this.setState({ status: "" });
                    } else {
                        this.setState({ status: "success",  traces: res.data.traces});
                    }
                }
            );
        }
        this.openModal();

    }

    render() {
        const customStyles = {
            content : {
                padding: 0,
                border: 0,
                bottom: 'auto',
                maxHeight: '85%'
            },
            overlay : {
                backgroundColor   : 'rgba(0, 0, 0, 0.70)'
            }
        };

        return (
            <div className="item" onClick={this.handleClick.bind(this)}>
                <div className="image">
                    <img src={this.props.img} style={{width: '90px', height: '90px'}} />
                </div>
                <div className="content">
                    <span className="header">{this.props.title}</span>
                    <div>
                        <span className="price">￥{this.props.price}</span>
                    </div>
                    <div className="status">
                        {this.props.expCode==null ? "暂无快递信息" : this.props.expCode}
                    </div>
                </div>

                <Modal isOpen={this.state.modalIsOpen}
                       onRequestClose={this.handleModalCloseRequest.bind(this)}
                       style={customStyles}
                >
                    <TraceList expName={this.props.expCode==null ? null : this.props.expCode}
                               expNo={this.props.expNo}
                               traces={this.state.traces} />
                </Modal>
                {this.state.status == "loading" &&
                <div className="ui page active inverted dimmer">
                    <div className="ui text loader">Loading</div>
                </div>
                }
                <Alert stack={{limit: 1}} />
            </div>
        );
    }
}