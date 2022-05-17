
const Row = ({newstype}) =>{

    return(
        <div className="flex items-center justify-between">
  <h1 className="text-black dark:text-white text-3xl md:mt-12 sm:mt-12 sm1:mt-12 sm2:mt-12 sm3:mt-12 sm4:mt-12 sm5:mt-12 sm6:mt-12 font-extrabold mb-6 border-b-2 border-green-500 ">{newstype}</h1>
  <div className="text-green-600 text-xs inline-flex items-center sm:mt-16 sm1:mt-16 sm2:mt-16 sm3:mt-16 sm4:mt-16 sm5:mt-16 sm6:mt-16 md:mt-16 lg:mb-0">
    Slide More
    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="M12 5l7 7-7 7" />
    </svg>
  </div>
</div>

    )
}

export default Row;