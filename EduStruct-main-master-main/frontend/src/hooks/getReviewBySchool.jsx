import { setReviews } from '../redux/review.js'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const getReviewBySchool = (schoolId) => {
    const dispatch = useDispatch();
   // const {searchedQuery} = useSelector(store=>store.job);
    useEffect(()=>{
        const fetchReviewBySchool = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/review/${schoolId}`,{withCredentials:true});
                if(res.data.success){
                    dispatch(setReviews(res.data.reviews));
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchReviewBySchool();
    },[])
}

export default getReviewBySchool