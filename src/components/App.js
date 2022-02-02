import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {

    state = {images: [] };


     onSearchSubmit = async term => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            //指定不同查詢字符的設定參數
            params: {query: term},
            //授權的header裡api要大寫開頭
            headers: {
                Authorization: 'Client-ID YpY7sSC_EYv6M7bvNBXyoPfzZ58h4k338u-1Wpog7Fk'
            }
        });/*
            .then(response => { //搜尋送出後回來的數據
            console.log(response.data.results);//拿到裡面的圖片
        });
        */

        this.setState({images : response.data.results});
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                Found: {this.state.images.length} images
            </div>
        );
    }
}

export default App;