import React from "react";

class SearchBar extends React.Component {

    state = {term: ''};

    //箭頭函式的this是完全綁定在寫的位置,永遠都是拿到原先作用域的this
    onFormSubmit = event => {
        event.preventDefault();//阻止嘗試提交行為

        this.props.onSubmit(this.state.term)
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            type='text'
                            value={this.state.term}
                            onChange={e => this.setState({
                                term: e.target.value
                            })}//操控輸入的展現
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;