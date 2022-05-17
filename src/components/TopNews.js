import { default as axios } from "axios";
import { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Virtual } from 'swiper';
import { Breakpoints } from "../Responsive";
import 'swiper/css';

SwiperCore.use([Virtual]);



const TopNews = ({newstypes}) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(`https://inshortsv2.vercel.app/news?type=${newstypes}`);
      setPosts(res.data.articles);
      console.log(res.data.articles)
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

   
    

    return(
      
        
<>
{loading ? <div class="w-24 h-24 rounded-full animate-spin
                    border-4 border-solid border-green-500 border-t-transparent shadow-md"></div>  : <Swiper
            spaceBetween={30}
            breakpoints={Breakpoints}
            slidesPerView={4}
            virtual
          >  
           {currentPosts.map((news, index) => (
              <SwiperSlide key={index}>
                <NewsCard value={news} />
              </SwiperSlide>
            ))}
     
      </Swiper>
    }
            


        

            </> )
}

export default TopNews;