/**
 * Created by haonan on 16/4/23.
 */
import React, { Component } from 'react';
import OrderItem from './OrderItem';

export default class OrderList extends Component {

    render() {
        return (
            <div className="ui relaxed divided list">
                {this.props.orders.map((order, index) =>
                    <OrderItem {...order} key={index} />
                )}
            </div>
        );
    }
}