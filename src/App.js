
import { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Row from './components/Row';
import TopNews from './components/TopNews';

function App() {
  const newsTypes = {
    trending : 'trending',
    national : 'national',
    business : 'business',
    politics : 'politics',
    technology : 'technology',
    entertainment : 'entertainment',
    world : 'world',
    science : 'science'
  }

  const [darkMode, setDarkMode] = useState(false);

  return (
  <div
      class={`${
        darkMode && "dark"
      }`}
    >
    <section className="text-main-text bg-primary dark:bg-primary body-font">
      <Header setdarkmode={setDarkMode} darkmode={darkMode}/>
    <div className="container px-4 py-6 mx-auto ">
      <Row newstype={'Trending'}/>
    <TopNews newstypes = {newsTypes.trending}/>
    <Row newstype={'National'}/>
    
    <TopNews newstypes = {newsTypes.national}/>
    <Row newstype={'Politics'}/>
    <TopNews newstypes = {newsTypes.politics}/>
    <Row newstype={'World'}/>
    <TopNews newstypes = {newsTypes.world}/>
    <Row newstype={'Business'}/>
    <TopNews newstypes = {newsTypes.business}/>
    <Row newstype={'Entertainment'}/>
    <TopNews newstypes = {newsTypes.entertainment}/>
    <Row newstype={'Technology'}/>
    <TopNews newstypes = {newsTypes.technology}/>
    
    <hr className="my-6 border-gray-200 sm:mx-6 dark:border-gray-700 lg:my-6" />
    <Footer/>
    </div>
    
    
    </section>
    </div>
  );
}

export default App;
