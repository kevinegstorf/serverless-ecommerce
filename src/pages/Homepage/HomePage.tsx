import React, { Component } from 'react';
import { Button } from '../../components/content/Button/Button';

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>The Nerd Shirt</h1>
                <Button onClick={()=> { console.log('klikkerdeklik')}}>Click me</Button>
            </div>
        );
    }
}