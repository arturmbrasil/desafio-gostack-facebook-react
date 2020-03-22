import React, { Component } from 'react';
import Post from './Post';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Artur Brasil',
          avatar: 'https://avatars0.githubusercontent.com/u/22780735?v=4'
        },
        date: '22 Mar 2020',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://avatars1.githubusercontent.com/u/2254731?v=4',
            },
            content: 'A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)',
          }
        ]
      },
      {
        id: 2,
        author: {
          name: 'Diego Fernandes',
          avatar: 'https://avatars1.githubusercontent.com/u/2254731?v=4'
        },
        date: '22 Mar 2020',
        content: 'Escreve aí, ninguém vai produzir mais conteúdo gratuito de programação do que a Rocketseat em 2020!',
        comments: [
          {
            id: 2,
            author: {
              name: 'Artur Brasil',
              avatar: 'https://avatars0.githubusercontent.com/u/22780735?v=4',
            },
            content: 'Boa!! 🚀🚀',
          },
          {
            id: 2,
            author: {
              name: 'Michel Teló',
              avatar: 'https://avatars2.githubusercontent.com/u/4248081?v=4',
            },
            content: 'Aí vocês me matam! Show!',
          }
        ]
      },
    ]
  };

  render() {
    return (
      <div className="postlist">
        {this.state.posts.map(post => <Post key={post.id} {...post} />)}
      </div>
    );
  }
}

export default PostList;