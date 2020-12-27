import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { dangNhapAction } from '../../redux/actions/QuanLyNguoiDungActions';
export default function DangNhap() {
    //useState là thư viện thay thế this.state trong RE class component
    const dispatch = useDispatch();
    const [state,setState] = useState({
        taiKhoan: '',
        matKhau: '',
    }) // useState nhận giá trị đầu vào là stateDefault
    //ứng với classComponent state ={}
    console.log('state', state);
    const handelChangeInput = (event) =>{
            const {name,value} = event.target;
            console.log(name,value); 
            setState({...state,[name]:value});
            //Gọi api để xác thực đăng nhập
            dispatch(dangNhapAction(state));
    }
    const handleSubmit = (e)=>{
        console.log(state);
        e.preventDefault();
        dispatch(dangNhapAction(state));
    }
    return (
        <div className="container" >
            <h3>Đăng nhập</h3>
            <div className="form-group">
                <p>Tài khoản</p>
                <input className="form-control" name="taiKhoan" onChange={handelChangeInput}/>
            </div>
            <div className="form-group">
                <p>Mật khẩu</p>
                <input className="form-control" name="matKhau" onChange={handelChangeInput}/>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-success" onClick={handleSubmit}>Đăng nhập</button>
            </div>

        </div>
    )
}
