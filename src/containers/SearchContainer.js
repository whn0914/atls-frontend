/**
 * Created by haonan on 16/4/21.
 */
import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import OrderList from '../components/OrderList';

export default class SearchContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { status: "", orders: null};
    }

    searchOrders(phone) {
        console.log(phone);
    }

    render() {
        // TODO: tmp data
        const orders = [
            {
                img: 'http://www.atlsmall.com/images/medi1.jpg',
                title: 'Line Friends N.M.F水润面膜10片',
                price: '148',
                expCode: 'ZTO',
                expNo: '778785928929'
            },
            {
                img: 'http://www.atlsmall.com/images/medi2.jpg',
                title: 'Line Friends I.P.I清澈透亮面膜10片',
                price: '150',
                expCode: 'ZTO',
                expNo: '778785928927'
            },
            {
                img: 'http://www.atlsmall.com/upload/images/Number%201.jpg',
                title: '雪花秀滋盈肌本润颜水乳护肤套装',
                price: '400',
                extra: '申通快递',
                expCode: 'ZTO',
                expNo: '778785928929'
            },
            {
                img: 'http://www.atlsmall.com/images/medi1.jpg',
                title: 'Line Friends N.M.F水润面膜10片',
                price: '148',
                extra: '派件中'
            },
            {
                img: 'http://www.atlsmall.com/images/medi2.jpg',
                title: 'Line Friends I.P.I清澈透亮面膜10片',
                price: '150',
            }
        ];

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
                <OrderList orders={orders} />
            </div>
        );
    }
}