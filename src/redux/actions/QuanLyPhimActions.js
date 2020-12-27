import Axios from 'axios'
import { DOMAIN } from '../../util/settings'
import { GET_DATA_FILM } from '../const/QuanLyPhimConst'

export const getDataFilmAction = (dataFilm) => {
    return async (dispatch) => {
        const result =
            await Axios({
                url: `${DOMAIN}/api/quanlyphim/laydanhsachphim?manhom=GP01`,
                method: 'GET'
            })
        //Gọi ajax
        //Sau khi có data => dùng hàm  middlerware reduxthunk (dispatch) để đưa dữ liệu lên reducer
        dispatch({
            type: GET_DATA_FILM,
            dataFilm: result.data
        })
    }

}