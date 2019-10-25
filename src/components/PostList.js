import React, { Component } from 'react';

import profileFirst from '../assets/Diego.jpg';
import profileSecond from '../assets/Renan.jpg';
import profileThird from '../assets/Rafael.jpg';

import commentProfileFirst from '../assets/aluno1.jpg'
import commentProfileSecond from '../assets/aluno2.jpg'
import commentProfileThird from '../assets/aluno3.jpg'

import PostItem from './PostItem';


class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: profileFirst
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém me indica um bom curso de React Native?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: commentProfileFirst
            },
            content: "Dá uma olhada na Rocketseat. A metodologia do Bootcamp deles é fazer você se desafiar e bater cabeça até conseguir o resultado. Pode ir de olhos fechados que você não vai se arrepender"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Renan Lima",
          avatar: profileSecond
        },
        date: "14 Jun 2019",
        content: "O React Native pode ser considerado como Programação imperativa?",
        comments: [
          {
            id: 2,
            author: {
              name: "Veronica Salen",
              avatar: commentProfileSecond
            },
            content: "Não Renan, ele faz parte da Programação Declarativa. Nesse tipo de programação você diz o que você quer, enquanto na Programação imperativa você diz como fazer. Bons estudos!"
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Alan da Silva",
          avatar: profileThird,
        },
        date: "22 Jun 2019",
        content: "É possível criar uma interface backend e frontend com uma única linguagem?",
        comments: [
          {
            id: 3,
            author: {
              name: "Leticia Rabelo",
              avatar: commentProfileThird
            },
            content: "Sim, procura por React e React Native que você vai embarcar para o próximo nível :)"
          }
        ]
      },
    ]
  };

  render() {
    console.log(this.state);
    
    return (
        <div className="content">
          <div className="post-list">
            {this.state.posts.map(post => <PostItem key={post.id} {...post} />)}
          </div>
       </div>
    )
  }
}

export default PostList;