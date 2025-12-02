import { setAllSchools } from '../redux/school.js'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const getAllSchools = () => {
    const dispatch = useDispatch();
   // const {searchedQuery} = useSelector(store=>store.job);
    useEffect(()=>{
        const fetchAllSchool = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/school/all`,{withCredentials:true});
                if(res.data.success){
                    dispatch(setAllSchools(res.data.schools));
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllSchool();
    },[])
}

 export default getAllSchools