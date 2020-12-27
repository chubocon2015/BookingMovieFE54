import Axios from 'axios';
import React, { useState, useEffect } from 'react'
import moment from 'moment'
export default function ChiTietPhim(props) {
    //Tạo 1 state chứa thông tin chi tiết phim giá trị ban đầu là object rổng 
    const [chiTietPhim, setChiTietPhim] = useState({});
    //Dùng useEffect để tự động gọi api khi trang chi tiết phim load ra
    useEffect(async () => {
        //B1: lấy mã phim từ url
        const maPhim = props.match.params.maPhim;
        //Dựa vào mã api backend lấy dữ liệu phim về và gán vào state chiTietPhim
        const result = await Axios({
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
            method: 'GET'
        });
        console.log('data', result);
        setChiTietPhim(result.data);

    }, [])
    //props.match.params:props này là props của thẻ Route truyền cho component
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-6">
                    <img style={{ width: '200px', height: '300px' }} src={chiTietPhim.hinhAnh} alt={chiTietPhim.hinhAnh} />
                </div>
                <div className="col-6">
                    <table>
                        <tbody>
                            <tr>
                                <tr>Tên phim</tr>
                                <td>{chiTietPhim.tenPhim}</td>
                            </tr>
                            <tr>
                                <td>Mô tả</td>
                                <tr>{chiTietPhim.moTa}</tr>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h3>Thông tin lịch chiếu</h3>
                </div>
                
            </div>
            <div className="row">
                    
                        <div className="nav flex-column nav-pills col-4" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            {chiTietPhim.heThongRapChieu?.map((heThongRap,index)=>{
                                const activeClass = index === 0 ? 'active' : '';
                                
                                return <a className="nav-link" id={`v-pills-${heThongRap.maHeThongRap}-tab`} data-toggle="pill" href={`#${heThongRap.maHeThongRap}`} role="tab" aria-controls={`${heThongRap.maHeThongRap}`} aria-selected="true">
                                    <img className="mr-2" src={heThongRap.logo} width="50" height="50" alt={heThongRap.logo}/>
                                    {heThongRap.tenHeThongRap}</a>
                            })}
                            {/* <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
                            <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</a>
                            <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</a>
                            <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a> */}
                        </div>
                        <div className="tab-content col-8" id="v-pills-tabContent">
                            {chiTietPhim.heThongRapChieu?.map((heThongRap,index)=>{
                                const activeClass = index === 0 ? 'active' : '' ;
                                return <div className={`tab-pane text-success ${activeClass}`}role="tabpanel" aria-labelledby={`v-pills-${heThongRap.maHeThongRap}-tab`} id={`${heThongRap.maHeThongRap}`} key={index}>
                                    {heThongRap.cumRapChieu?.map((cumRap,index)=>{
                                        return <div key={index}>
                                            <h3>{cumRap.tenCumRap}</h3>
                                            {cumRap.lichChieuPhim?.slice(0,5).map((lichChieu,index)=>{
                                                return <div className="col-3" key={index}>
                                                    {moment(lichChieu.ngayChieuGioChieu).format('hh:mmA')}
                                                </div>
                                            })}
                                        </div>
                                    })}
                                </div>
                            })}
                            {/* <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">home</div>
                            <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">profile</div>
                            <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">messages</div>
                            <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">settings</div> */}
                        </div>
                    

                </div>
        </div>
    )
}
