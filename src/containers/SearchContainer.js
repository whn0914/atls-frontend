/**
 * Created by haonan on 16/4/21.
 */
import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import OrderList from '../components/OrderList';
import FetchRequest from '../utils/FetchRequest';
import Alert from 'react-s-alert';
import '../css/s-alert-default.css';
export default class SearchContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { status: "", orders: []};
    }

    searchOrders(phone) {
        this.setState({ status: "loading" });
        // fetch traces data
        const params = {phone: phone};
        const response = FetchRequest.call("/express/getOrders", params);
        response.then(
            res => {
                if(res.code != 1) {
                    Alert.error(res.msg, {
                        position: 'top',
                        timeout: 1000
                    });
                    this.setState({ status: "" });
                } else {
                    this.setState({ status: "success",  orders: res.data.list});
                }
            }
        );
    }

    render() {
        return (
            <div>
                <br/>
                <img className="ui centered tiny circular image" src="/images/logo.jpg" />
                <br/>
                <SearchBar search={this.searchOrders.bind(this)}/>
                <h6 className="ui horizontal divider grey header">
                    <i className="tag grey icon"></i>
                    点击查看快递详情
                </h6>
                <OrderList orders={this.state.orders} />
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