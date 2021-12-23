import React, {Component} from 'react';
import MenuButton from './MenuButton';
import Menu from './Menu';

class MenuContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        }

        this.toggleMenu = this.toggleMenu.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
    }

    toggleMenu() {
        this.setState({
            visible: !this.state.visible
        })
    }

    handleMouseDown(e) {
        this.toggleMenu();
        e.stopPropagation();
    }

    render() {
        console.log("MenuContainer");
        return (
            <div>
                <MenuButton handleMouseDown={this.handleMouseDown} />  
                <Menu handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible}/> 
                <div>
                    <p>Найдешь пункт, который здесь лишний?</p>
                    <ul>
                        <li>Один</li>
                        <li>Два</li>
                        <li>Три</li>
                        <li>Четыре</li>
                        <li>Пять</li>
                        <li>Шесть</li>
                        <li>Семь</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default MenuContainer;