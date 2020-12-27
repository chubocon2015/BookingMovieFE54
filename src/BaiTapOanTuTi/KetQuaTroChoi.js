import React, { Component } from 'react'

export default class KetQuaTroChoi extends Component {
    render() {
        return (
            <div>
                <div className="textThongTin text-warning">
                    Bạn thua!!!
                </div>
                <div className="textThongTin text-success ">
                    Số bàn thắng: <span className="text-warning">0</span>
                </div>
                <div className="textThongTin text-success ">
                    Tổng số bàn chơi: <span className="text-warning">0</span>
                </div>
            </div>
        )
    }
}
