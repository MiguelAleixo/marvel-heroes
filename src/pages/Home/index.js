import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  HomeContainer, HeroesContainer, MarvelLogo, Title, SubTitle
} from './styles';
import logo from '../../assets/logo/marvel.png';
import TextField from '../components/TextField';
import Hero from '../components/Hero';
import * as actions from './actions';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeout: null
    };
  }

  componentDidMount = () => {
    this.getHeroes();
  }

  getHeroes = () => {
    const { getHeroes } = this.props;
    getHeroes();
  }

  searchHeroe = value => {
    const { timeout } = this.state;
    const { searchHeroe } = this.props;
    clearTimeout(timeout);
    this.setState({
      timeout: setTimeout(() => {
        searchHeroe(value);
      }, 1000)
    });
  }

  render() {
    const { heroes } = this.props;

    return (
      <HomeContainer>
        <MarvelLogo src={logo} />
        <Title> EXPLORE O UNIVERSO </Title>
        <SubTitle>
          Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama
          - e aqueles que você descobrirá em breve!
        </SubTitle>
        <TextField
          onChange={(e) => this.searchHeroe(e.target.value)}
          placeholder="Procure por heróis"
        />
        <HeroesContainer>
          {
            !heroes.isRequesting && heroes.content.data && heroes.content.data.results.map(obj => (
              <Hero name={obj.name} photo={`${obj.thumbnail.path}.${obj.thumbnail.extension}`} />
            ))
          }
        </HeroesContainer>
      </HomeContainer>
    );
  }
}

Home.propTypes = {
  heroes: PropTypes.node.isRequired,
  getHeroes: PropTypes.func.isRequired,
  searchHeroe: PropTypes.func.isRequired
};

const mapStateToProps = ({ heroes }) => ({ heroes });

export default connect(mapStateToProps, {
  getHeroes: actions.getHeroes, searchHeroe: actions.searchHeroe
})(Home);
