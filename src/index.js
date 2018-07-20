import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import Header from './Header';
import Post from './Post';

import './style.scss';

class App extends Component {
  state = {
    post: [
      {
        name: 'Diego Schell Fernandes',
        img: 'https://randomuser.me/api/portraits/men/37.jpg',
        postedAt: `há ${Math.floor(Math.random() * 20) + 1} min`,
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam semper velit, a ullamcorper dolor sollicitudin quis. Integer venenatis, ligula nec pharetra pulvinar, sapien metus facilisis ligula, eu gravida nisl diam nec amet.',
      },
      {
        name: 'Rubia Savolksi',
        img: 'https://randomuser.me/api/portraits/women/10.jpg',
        postedAt: `há ${Math.floor(Math.random() * 20) + 21} min`,
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc urna, tempus a mollis id, volutpat sed nulla. Mauris quis nibh congue, rutrum risus quis, fringilla felis. Quisque sem odio, elementum id mauris et, vulputate commodo metus.',
      },
      {
        name: 'Mr. Mustache',
        img: 'https://randomuser.me/api/portraits/women/34.jpg',
        postedAt: `há ${Math.floor(Math.random() * 20) + 41} min`,
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent egestas vitae velit et porta. Mauris posuere commodo velit, sed vehicula est commodo quis. Proin laoreet ante et mauris fringilla, non mattis neque vehicula. Vestibulum amet.',
      },
    ],
  };

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <Fragment>
        <Header />
        <Post post={this.state.post[0]} />
        <Post post={this.state.post[1]} />
        <Post post={this.state.post[2]} />
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
