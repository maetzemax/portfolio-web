import React, { Component } from 'react';
import Button from './ui/buttons/Button';
import "./App.css"

class Profile extends Component {
  render() {
    return <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  };
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />

      <Button name="Cool Button"/>
    </section>
  );
}