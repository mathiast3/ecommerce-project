import React from 'react';
import { Container, Image } from 'react-bootstrap';
import sofa from '../../assets/sofa.jpg';
import { connect } from 'react-redux';

export const Home = () => {
  const textStyle = {
    position: 'absolute',
    top: '30%',
    left: '40%',
    color: '#fff',
  };
  return (
    <Container>
      <Image style={{ backgroundSize: 'cover' }} responsive src={sofa} />
      <h1 style={textStyle}>Get some rest time</h1>
    </Container>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
