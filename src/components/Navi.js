import React, { Component } from 'react'

export default class Navi extends Component {
    render() {
        return (
            <div>
                <div className="navi_panel">
                    <div className="navi_left_panel">
                        <span>FASHION</span>
                    </div>
                    <div className="navi_right_panel">
                        <ul>
                            <li style={{color:"#C9A96E"}}>Home</li>
                            <li>Recipes</li>
                            <li>Article</li>
                            <li>Contact</li>
                            <li>Purchase</li>
                        </ul>                            
                    </div>
                </div>
            </div>
        )
    }
}
