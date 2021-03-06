import React, { Component } from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component'

const Container = styled.article``;

const Intro = styled.h1``;

const Examples = styled(Flex)``;
const Example = styled.a`
  margin-top: 20px;
`;

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Intro>
          try add <pre>/ipfs/somehashblabla</pre> to the URL
        </Intro>
        <Examples column>
          <Example href="/ipfs/QmeYxwj4CwCeGVhwi3xLrmBZUUFQdftshSiGLrTdTnWEVV">
          directory containing a web page: ipfs/QmeYxwj4CwCeGVhwi3xLrmBZUUFQdftshSiGLrTdTnWEVV
          </Example>
          <Example href="/ipfs/QmYwAPJzv5CZsnA625s3Xf2nemtYgPpHdWEz79ojWnPbdG">
          directory listing: ipfs/QmYwAPJzv5CZsnA625s3Xf2nemtYgPpHdWEz79ojWnPbdG
          </Example>
          <Example href="/ipfs/QmT78zSuBmuS4z925WZfrqQ1qHaJ56DQaTfyMUF7F8ff5o">
          simple file: ipfs/QmT78zSuBmuS4z925WZfrqQ1qHaJ56DQaTfyMUF7F8ff5o
          </Example>
        </Examples>
      </Container>
    );
  }
}
