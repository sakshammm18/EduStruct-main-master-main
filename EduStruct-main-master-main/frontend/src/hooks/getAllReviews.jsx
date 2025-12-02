import { setAllReviews } from '../redux/review.js'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const getAllReviews = () => {
    const dispatch = useDispatch();
   // const {searchedQuery} = useSelector(store=>store.job);
    useEffect(()=>{
        const fetchAllReviews = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/review/all`,{withCredentials:true});
                if(res.data.success){
                    dispatch(setAllReviews(res.data.reviews));
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllReviews();
    },[])
}

 export default getAllReviews