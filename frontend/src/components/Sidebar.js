// React
import React, { Component } from 'react'
import { Link } from "react-router-dom";

// Redux
import { connect } from 'react-redux'
import * as actionTypes from "../store/actions/auth";

// Components
import { Header, Icon, Image, ItemDescription, Menu, Segment, Sidebar } from 'semantic-ui-react';
import SideBarItem from './SideBarItem';
import logo from '../assets/img/site-logo-topbar.png'

// Styles
import '../css/components/SideBar.css';

const admin_items = [
    {
        href: '/apps/users',
        icon: 'user circle outline',
        label: 'Administration'
    },
    {
        href: '/apps/accounts',
        icon: 'users',
        label: 'Accounts'
    },
    {
        href: '/apps/logs',
        icon: 'clipboard list',
        label: 'Logs'
    },
];

const staff_items = [
    {
        href: '/apps/Accounts',
        icon: 'users',
        label: 'Accounts'
    },
    {
        href: '/apps/Logs',
        icon: 'clipboard list',
        label: 'Logs'
    },
]

export class SideBar extends Component {
    componentDidMount() {
        this.props.onTryAutoSignin();
    }

    render() {
        return (
            <Menu vertical stackable className='side-nav' style={{ height: '100vh', backgroundColor: "#20232a"}}>
                <Image src={logo} size='large' />
                {admin_items.map((item) => {
                    if (this.props.is_admin == 'true' && item.label == 'Administration') {
                        return <SideBarItem
                            label={item.label}
                            icon={item.icon}
                            href={item.href}
                        />
                    } else if (item.label != 'Administration')
                        return <SideBarItem
                            label={item.label}
                            icon={item.icon}
                            href={item.href}
                        />
                }
                )}
            </Menu>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authenticated: state.token !== null,
        token: state.token,
        is_admin: state.is_admin,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTryAutoSignin: () => dispatch(actionTypes.authCheckState()),
        logout: () => dispatch(actionTypes.authLogout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)