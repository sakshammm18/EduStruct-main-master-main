import { setSchools } from '../redux/school.js'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const getAllSchoolByUser = () => {
    const dispatch = useDispatch();
   // const {searchedQuery} = useSelector(store=>store.job);
    useEffect(()=>{
        const fetchAllSchoolByUser = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/school/my`,{withCredentials:true});
                if(res.data.success){
                    dispatch(setSchools(res.data.school));
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllSchoolByUser();
    },[])
}

export default getAllSchoolByUser