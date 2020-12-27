import Axios from 'axios'
import { ACCESS_TOKEN, DOMAIN, USER_LOGIN } from '../../util/settings'

//Người dùng :{taikhoan:'',matkhau:''}

 export const dangNhapAction = (nguoiDung) =>{
     console.log(nguoiDung);
    return  async dispatch => {
        const result = await Axios({
            url: `${DOMAIN}/api/quanlynguoidung/dangnhap`,
            method:'POST',
            data:nguoiDung
        });
        console.log(result.data);
        //Lấy token lưu vào localStore
        localStorage.setItem(ACCESS_TOKEN,result.data.accessToken);
        localStorage.setItem(USER_LOGIN,JSON.stringify(result.data));

    }
}