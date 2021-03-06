import { useState } from "react";

const Header = ({setdarkmode, darkmode}) =>{
  
    const [openTab, setOpenTab] = useState(1);
    return(
      <div>
  <header className="text-gray-500 bg-primary dark:bg-primary body-font">
    <div className="container mx-auto flex flex-wrap p-5 justify-between flex-row items-center">
      <a href="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={48} height={48} viewBox="0 0 48 48" style={{fill: '#22c55e'}}><path d="M37 7v2.54l-6.27-.7c-.68-.35-1.45-.54-2.25-.54-.28 0-.57.03-.85.08L11 11.23V7c0-1.1.9-2 2-2h22C36.1 5 37 5.9 37 7zM43.88 15.36l-.57 5.1C42.43 18.99 40.83 18 39 18h-4.64l-.95-5.54c-.02-.11-.04-.21-.07-.31L37 12.56l5.12.58C43.22 13.27 44.01 14.26 43.88 15.36zM31.31 18H9c-1.91 0-3.56 1.07-4.41 2.64L4.05 17.5c-.19-1.09.54-2.13 1.63-2.31l22.46-3.86c1.09-.18 2.12.55 2.31 1.64L31.31 18zM39 21H9c-1.1 0-2 .9-2 2v19c0 1.1.9 2 2 2h30c1.1 0 2-.9 2-2V23C41 21.9 40.1 21 39 21zM28.5 26h5c.83 0 1.5.67 1.5 1.5 0 .83-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5C27 26.67 27.67 26 28.5 26zM17.5 39c-3.58 0-6.5-2.92-6.5-6.5 0-3.58 2.92-6.5 6.5-6.5 1.42 0 2.76.45 3.89 1.29.67.5.8 1.44.3 2.1-.49.67-1.43.8-2.1.31-.6-.46-1.33-.7-2.09-.7-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5c1.39 0 2.6-.82 3.16-2H17.5c-.83 0-1.5-.67-1.5-1.5 0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5C24 36.08 21.08 39 17.5 39zM33.5 39h-5c-.83 0-1.5-.67-1.5-1.5 0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5C35 38.33 34.33 39 33.5 39zM35.5 34h-7c-.83 0-1.5-.67-1.5-1.5 0-.83.67-1.5 1.5-1.5h7c.83 0 1.5.67 1.5 1.5C37 33.33 36.33 34 35.5 34z" /></svg>

        <span className="ml-1 md:text-3xl lg:text-3xl sm:text-2xl sm1:text-2xl sm2:text-2xl sm3:text-2xl sm4:text-2xl sm5:text-2xl sm6:text-2xl  font-black text-black dark:text-white">G-News<span className="font-black text-4xl text-green-500">.</span></span>
      </a>
      <div className="flex items-center justify-center ">
     
        
        <ul className="flex mb-0 list-none flex-wrap pt-2 pb-3 flex-row" role="tablist">
          <li className="-mb-px  last:mr-0 flex-auto text-center "><a
                  className={
                    'text-xs font-semibold px-3 py-1 shadow-lg rounded rounded-r-none block leading-normal ' +
                    (openTab === 1
                      ? 'text-black bg-green-500'
                      : 'text-green-500 bg-white')
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                    setdarkmode(false)
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  Light
                </a>
              </li>
              <li className="-mb-px last:mr-0 flex-auto text-center">
                <a
                  className={
                    'text-xs font-semibold px-3 py-1 shadow-lg rounded rounded-l-none block leading-normal ' +
                    (openTab === 2
                      ? 'text-black bg-green-500'
                      : 'text-green-500 bg-white')
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                    setdarkmode(true)
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  Dark
                </a>
              </li>
            </ul>
      </div>
    </div>
  </header>
</div>

    )
}

export default Header;