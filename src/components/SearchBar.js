/**
 * Created by haonan on 16/4/22.
 */
import React, { Component } from 'react';
import Alert from 'react-s-alert';
import '../css/s-alert-default.css';
export default class SearchBar extends Component {
    checkPhone(phone) {
        if(phone.length<1 || phone.length>11) {
            return false;
        }
        const reg = new RegExp("^[0-9]+$");
        return reg.test(phone);
    }

    search() {
        const phone = this.refs.phone.value.trim()
        if(this.checkPhone(phone)) {
            this.props.search(phone);
        } else {
            Alert.error('请输入正确的手机号', {
                position: 'top',
                timeout: 1000
            });
        }
    }

    render() {
        return(
            <div className="ui search">
                <div className="ui fluid icon input">
                    <input className="prompt"
                           type="text"
                           placeholder="输入手机号查询快递"
                           maxLength="11"
                           ref="phone"
                    />
                    <i className="inverted circular search link icon" onClick={this.search.bind(this)}></i>
                </div>
            </div>
        );
    }
}