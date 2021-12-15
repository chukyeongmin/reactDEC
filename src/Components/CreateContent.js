import React, { Component } from 'react';

class CreateContent extends Component{
    render() {
      return(
        <article>
              <h2>만들기</h2>
              <form action="/create_process" mothod="post"
                onSubmit={function(e){
                  e.preventDefault();
                  this.props.onSubmit(
                    e.target.title.value,
                    e.target.desc.value
                  );
                }.bind(this)}
              >
                <p><input type="text" name="title" placeholder='타이틀을 입력하세요'></input></p>
                <p><textarea name="desc" placeholder='내용을 입력하세요'></textarea></p>
                <p><input type="submit" value="submit"></input></p>
              </form>
          </article>
      );
    }
  }

  export default CreateContent;