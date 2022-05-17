import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';
import {
  FacebookIcon,
  FacebookMessengerIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';

const NewsCard = ({value}) => {

    return(
        <>
        
    

                
  <div className=" w-full h-100 rounded-lg bg-secondary dark:bg-secondary overflow-hidden shadow-lg">
    <img src={value.image_url} className="w-full h-64" alt={value.title} />
    <div className="px-3 py-2 flex flex-col">
      <div className="font-medium text-l  text-black dark:text-white w-full h-18 ">{value.title}</div>
      <div className="flex items-center">
        <div className="text-xs text-gray-400 ">{value.source_name}</div>
        <svg className="bg-transparent h-4 w-4 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <div className="text-gray-400 text-xs  ">by-{value.author_name}</div>
      </div>
    </div>
    <div className="px-3 py-0 mt-0 flex justify-between items-center">
      <a href={value.source_url} target="_blank" rel="noopener noreferrer" className=" bg-green-500 text-white active:bg-green-600 font-bold  text-xs px-4 py-2 rounded shadow hover:bg-green-700 outline-none focus:outline-none mr-1 mb-1">Read more</a>
      <div className="text-gray-400 mr-3 inline-flex items-center justify-around lg:ml-auto md:ml-auto ml-auto leading-none text-sm pr-3 py-1 ">
        <div className="flex flex-col">
          <div className="text-gray-400 text-xs italic mb-1">Share now</div>
          <div >
                <WhatsappShareButton url={value.source_url}>
                  <WhatsappIcon size={22} round={true} />
                </WhatsappShareButton>
                <FacebookShareButton url={value.source_url}>
                  <FacebookIcon size={22} round={true} />
                </FacebookShareButton>
                <TwitterShareButton url={value.source_url}>
                  <TwitterIcon size={22} round={true} />
                </TwitterShareButton>
                <TelegramShareButton url={value.source_url}>
                  <TelegramIcon size={22} round={true} />
                </TelegramShareButton>
              </div>
        </div>
      </div>
    </div>
  </div>


        </>
    )

}

export default NewsCard;