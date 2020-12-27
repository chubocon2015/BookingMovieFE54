import React, { Component } from 'react'

export default class Computer extends Component {
    render() {
        return (
            <div className="text-center Game">
                <div className="think">
                <img className="mt-2" style={{width:75,height:75,transform:'rotate(90deg)'}} src="./img/GameOanTuTi/bua.png"/>
                </div>
                <div className="speech-bubble"></div>
                <img style={{ width: 150, height: 150 }} src="./img/GameOanTuTi/playerComputer.png" alt="player1" />
                
            </div>
        )
    }
}
