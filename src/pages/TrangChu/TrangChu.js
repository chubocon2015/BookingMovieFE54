import Axios from 'axios';
import React, { useEffect } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { getDataFilmAction } from '../../redux/actions/QuanLyPhimActions';
export default function TrangChu(props) {
    console.log('propsRoute', props);
    //useSelector là hook reactredux cung cấp dùng để lấy state từ store về
    const mangPhim = useSelector(state => state.QuanLyPhimReducer.mangPhim);
    //useDispatch là hook thay thế cho props.dispatch khi dùng redux connect
    const dispatch = useDispatch();
    console.log('mangphim', mangPhim);
    const loadDataPhim = async () => {

        dispatch(getDataFilmAction()
        )
    }
    //useEffect thay thế cho các lifecycle (didMount,didUpdate,willUnmount)
    useEffect(() => {
        //chạy 1 lần duy nhất sau khi giao diện render (ứng với componentDidMount)
        dispatch(getDataFilmAction());//Vừa vào trang sẽ load danh sách phim
    }, []);
    const renderPhim = () => {
        return mangPhim.map((phim, index) => {
            return <div className="col-4" key={index}>
                <div className="card">
                    <img className="card-img-top" src={phim.hinhAnh} alt={phim.hinhAnh} />
                    <div className="card-body">
                        <h4 className="card-title">{phim.tenPhim}</h4>
                        <p className="card-text">{phim.moTa}</p>
                        <p>
                            <NavLink to= {
                                    `chitietphim/${phim.maPhim}`
                            }className="btn btn-danger">
                                Mua vé
                            </NavLink>
                        </p>
                    </div>
                </div>
            </div>

        })
    }
    return (
        <div>
            <button onClick={() => {
                loadDataPhim();
            }}>Load danh sách phim</button>
            Trang Chủ
            <div className="row">
                {renderPhim()}
            </div>
        </div>
    )
}
// const mapStateToProps = (state) => {
//     return {
//         mangPhim : state.QuanLyPhimReducer.mangPhim
//     }
// }
// export default connect(mapStateToProps)(TrangChu)