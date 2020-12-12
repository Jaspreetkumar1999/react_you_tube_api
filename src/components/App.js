import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './imageList'

class App extends React.Component  {
    state = {images: []};
   onSearchSubmit = async (term) => {
  const data = await unsplash.get('/search/photos',{
            params :{query: term},
      
        }).catch(err => console.log("err", err))
        this.setState({images : data.data.results})
  
    }
    render(){
        return (
            <div className="ui container" style={{marginTop: '10px'}} > 
                <SearchBar onSubmit={this.onSearchSubmit}/>
             <ImageList images={this.state.images} />
            </div>
   )
    }
};

export default App;