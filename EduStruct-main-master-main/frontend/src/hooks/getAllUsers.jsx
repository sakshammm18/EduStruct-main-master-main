import { setAllUsers } from '../redux/authSlice.js'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const getAllUsers = () => {
    const dispatch = useDispatch();
   // const {searchedQuery} = useSelector(store=>store.job);
    useEffect(()=>{
        const fetchAllUsers = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/user/getAllUsers`,{withCredentials:true});
                if(res.data.success){
                    dispatch(setAllUsers(res.data.users));
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllUsers();
    },[])
}

 export default getAllUsers 