import React from 'react';
import Header from './Header';
import Gallery from './Gallery';

const Home = ({ topics, images, title, loading }) => {
  
  return ( 
    <React.Fragment>
      <Header 
        topics={topics} 
        search={false} 
      />
      <Gallery 
        images={images} 
        title={title} 
        loading={loading} 
      />
    </React.Fragment>
   );
}
 
export default Home;