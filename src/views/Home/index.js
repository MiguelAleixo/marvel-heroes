import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  HomeContainer, HeroesContainer, MarvelLogo, Title, SubTitle
} from './styles';
import logo from '../../assets/logo/marvel.png';
import TextField from '../components/TextField';
import Hero from '../components/Hero';
import Filters from '../components/Filters';
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
    const { getHeroes, hero: { favorites } } = this.props;
    getHeroes(favorites);
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

  favoriteHero = (id, heroes) => {
    const { favoriteHero } = this.props;
    favoriteHero(id, heroes);

  }

  navigate = id => {
    const { history } = this.props;
    history.push(`/hero/${id}`);
  }

  render() {
    const { heroes, history } = this.props;
    console.log('NAV', history);
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
        <Filters />
        <HeroesContainer>
          {
            heroes.content.results && heroes.content.results.map(obj => (
              <Hero
                onClick={() => this.navigate(obj.id)}
                onFav={() => this.favoriteHero(obj.id, heroes.content)}
                name={obj.name}
                fav={obj.fav}
                photo={`${obj.thumbnail.path}.${obj.thumbnail.extension}`}
              />
            ))
          }
        </HeroesContainer>
      </HomeContainer>
    );
  }
}

Home.propTypes = {
  heroes: PropTypes.node.isRequired,
  history: PropTypes.node.isRequired,
  getHeroes: PropTypes.func.isRequired,
  searchHeroe: PropTypes.func.isRequired
};

const mapStateToProps = ({ heroes, hero }) => ({ heroes, hero });

export default connect(mapStateToProps, {
  getHeroes: actions.getHeroes,
  searchHeroe: actions.searchHeroe,
  favoriteHero: actions.favoriteHero
})(Home);
