import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

import MenuContainer from './MenuContainer';

ReactDom.render(
    <div>
        <MenuContainer />
    </div>,
    document.getElementById('container')
)