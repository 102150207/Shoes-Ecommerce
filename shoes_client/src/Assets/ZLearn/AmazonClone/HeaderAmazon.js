import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import NotificationsIcon from '@material-ui/icons/Notifications';
import DepartureBoardIcon from '@material-ui/icons/DepartureBoard';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import { MenuNotification } from './MenuNotification';
import { Menu, Dropdown } from 'antd';
import './HeaderAmazon.css';
  
const HeaderAmazon = () => {
    const menu = (
        <Menu>
            <Menu.Item key="0">
                <a href="http://www.alipay.com/">1st menu item</a>
            </Menu.Item>
            <Menu.Item key="1">
                <a href="http://www.taobao.com/">2nd menu item</a>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3">3rd menu item</Menu.Item>
        </Menu>
    );
    
    return (
        <div className = 'header'>
            <div className = "top__image_sale"> 
                <a href = "https://tiki.vn/">
                    <img 
                        className = "image__sale"
                        src = "https://salt.tikicdn.com/ts/banner/8f/d6/40/ce52c1d91d4d13b59fe7588dddcb164f.jpg" 
                        alt = "sale shop"
                    />
                </a>
            </div>
           
            <div className = "header__main">
                <div className = "header__lolo__search">
                    <div className = "logo__app">
                        <a href = "https://tiki.vn/">
                            <img 
                                className = "image__logo"
                                src = "https://www.coop.ee/themes/public/logo.svg" 
                                alt = "sale shop"
                            />
                        </a>
                    </div>
                   
                    <div className = "search__box">
                        <form className = "search__form">
                            <input 
                                className = "input__search"
                                type = "text"
                                placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn ..."
                            />
                            <button className = "button__search" >
                                <SearchIcon
                                    className = "icon__search"
                                    style={{ color: 'rgb(237, 238, 242)', fontSize: '32'}}
                                />
                                <span className = "title__search">Tìm kiếm</span>
                            </button>
                        </form>
                    </div>
                </div>
                         
                <div  className = "item__headers">

                    <div className = "follow__order">
                        <DepartureBoardIcon
                            className = "icon__follow__order"
                           style={{ color: 'rgb(24, 158, 255)', fontSize: '32'}}
                        />
                        <div className = "title__line">
                            <span className = "title__line__one">
                                Theo dõi
                            </span>
                            <span className = "title__line__two">
                                đơn hàng
                            </span>
                        </div>
                    </div>

                    <div className = "count__order">
                        <ShoppingCartIcon
                            className = "icon__order"
                            style={{ color: 'rgb(24, 158, 255)', fontSize: '25'}}
                        />
                        <div className = "title__order">
                            <span className = "title__order__one">
                                Giỏ hàng
                            </span>

                            <span className = "title__order__two">
                                <b>0</b>
                            </span>
                        </div>
                    </div>

                    {/* <div className = "notification__for__user">
                        <Dropdown overlay={menu} trigger={['click']}>
                            <NotificationsIcon
                                style={{ color: 'rgb(24, 158, 255)', fontSize: '32'}}
                            />
                            <div className = "title__line">
                                <span className = "title__line__one">
                                    Thông báo
                                </span>
                                <span className = "title__line__two">
                                    của tôi
                                </span>
                            </div>
                        </Dropdown>
                    </div> */}

                    <div className = "feature__signup__signin">
                        <PersonIcon
                           style={{ color: 'rgb(24, 158, 255)', fontSize: '37'}}
                        />
                        <div className = "title__line">
                            <span className = "title__line__one">
                                Đăng ký
                            </span>
                            <span className = "title__line__two">
                                Đăng nhập
                            </span>
                        </div>
                    </div>

                </div>   
            </div>   

        </div>
    )
}

export default HeaderAmazon;