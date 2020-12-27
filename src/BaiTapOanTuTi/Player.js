import React, { Component } from 'react'

export default class Player extends Component {
    render() {
        return (
            <div className="text-center Game">
                <div className="think">
                    <img className="mt-2" style={{width:75,height:75,transform:'rotate(90deg)'}} src="./img/GameOanTuTi/bua.png"/>
                </div>
                <div className="speech-bubble"></div>
                <img style={{ width: 150, height: 150}} src="./img/GameOanTuTi/player.png" alt="player1" />
                <div className="row">
                    <div className="col-4">
                        <button className="btnItem">
                        <img style={{width:35,height:35}} src="./img/GameOanTuTi/bao.png" alt="./img/GameOanTuTi/bao.png" />
                        </button>
                    </div>
                    <div className="col-4">
                        <button className="btnItem">
                        <img style={{width:35,height:35}} src="./img/GameOanTuTi/bua.png" alt="./img/GameOanTuTi/bua.png" />
                        </button>
                    </div>
                    <div className="col-4">
                        <button className="btnItem">
                        <img style={{width:35,height:35}} src="./img/GameOanTuTi/keo.png" alt="./img/GameOanTuTi/keo.png" />
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
