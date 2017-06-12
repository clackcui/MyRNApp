/**
 * Created by clack on 2017/6/9.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    Platform
    // Navigator,
} from 'react-native';

import {
    Navigator
} from 'react-native-deprecated-custom-components';


import TabNavigator from 'react-native-tab-navigator';
import Home from './APP/Home/home';
import Delivery from './APP/Delivery/delivery';
import Mine from './APP/Mine/mine';
import Message from './APP/Message/message';
export default class Root extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home'  //默认选中主页
        }
    }

    render() {
        return (
            <TabNavigator>


                {this.renderTabBarIten('首页','./image/btn_menu_home_normal.png','./image/btn_menu_home_pressed.png','home','首页',Home)}

                {this.renderTabBarIten('派车管理','./image/btn_menu_home_normal.png','./image/btn_menu_home_normal.png','delivery','派车管理',Delivery)}

                {this.renderTabBarIten('消息','./image/btn_menu_home_normal.png','./image/btn_menu_home_normal.png','message','消息',Message)}

                {this.renderTabBarIten('我的','./image/btn_menu_home_normal.png','./image/btn_menu_home_normal.png','mine','我的',Mine)}

            </TabNavigator>
        );
    }

    renderTabBarIten(title,icon_name,icon_name_selected,selectedTab,componentName,Component){



        return (

            <TabNavigator.Item
                title={title}
                renderIcon={() => <Image source={require('./image/btn_menu_home_normal.png') }style={styles.iconStyle} />}
                renderSelectedIcon={() => <Image source={require('./image/btn_menu_home_normal.png')} style={styles.iconStyle} />}
                selected={this.state.selectedTab === selectedTab}
                onPress={() => this.setState({ selectedTab: selectedTab }) }
                selectedTitleStyle={styles.selectedTitleStyle}

            >
                <Navigator
                    initialRoute={{ name: componentName, component: Component }}
                    //配置场景
                    configureScene=
                        {
                            (route) => {

                                //这个是页面之间跳转时候的动画，具体有哪些？可以看这个目录下，
                                //有源代码的: node_modules/react-native/Libraries/CustomComponents/Navigator/NavigatorSceneConfigs.js

                                // return Navigator.SceneConfigs.PushFromRight;
                                return ({
                                    ...Navigator.SceneConfigs.PushFromRight,
                                    gestures: null,
                                });
                            }
                        }
                    renderScene={
                        (route, navigator) => {
                            let Component = route.component;
                            return <Component {...route.params} navigator={navigator} />
                        }
                    } />

            </TabNavigator.Item>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    iconStyle: {
        width: 30,
        height: 30
    },
    selectedTitleStyle:{
        fontSize:14,
        color:'green'
    }

});
