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
      timeout: null,
      onlyFav: false
    };
  }

  componentDidMount = () => {
    this.getHeroes();
  }

  getHeroes = () => {
    const { getHeroes, heroes: { favorites } } = this.props;
    getHeroes(favorites);
  }

  searchHeroe = value => {
    const { timeout } = this.state;
    const { searchHeroe, heroes: { favorites } } = this.props;
    clearTimeout(timeout);
    this.setState({
      timeout: setTimeout(() => {
        searchHeroe(value, favorites);
      }, 1000)
    });
  }

  favoriteHero = (id, heroes) => {
    const { favoriteHero } = this.props;
    favoriteHero(id, heroes);
  }

  filterHeroes = () => {
    const { onlyFav } = this.state;
    this.setState({
      onlyFav: !onlyFav
    });
  }

  navigate = id => {
    const { history } = this.props;
    history.push(`/hero/${id}`);
  }

  render() {
    const { heroes } = this.props;
    const { onlyFav } = this.state;
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
        <Filters onlyFav={onlyFav} onClick={() => this.filterHeroes()} />
        <HeroesContainer>
          {
            !onlyFav ? (heroes.content.results && heroes.content.results.map(obj => (
              <Hero
                onClick={() => this.navigate(obj.id)}
                onFav={() => this.favoriteHero(obj, heroes)}
                name={obj.name}
                fav={obj.fav}
                photo={`${obj.thumbnail.path}.${obj.thumbnail.extension}`}
              />
            ))) : (heroes && heroes.favorites.map(obj => (
              <Hero
                onClick={() => this.navigate(obj.id)}
                onFav={() => this.favoriteHero(obj, heroes)}
                name={obj.name}
                fav={obj.fav}
                photo={`${obj.thumbnail.path}.${obj.thumbnail.extension}`}
              />
            )))
          }
        </HeroesContainer>
      </HomeContainer>
    );
  }
}

Home.propTypes = {
  heroes: PropTypes.shape({
    content: PropTypes.shape({
      results: PropTypes.array.isRequired
    }).isRequired,
    favorites: PropTypes.array.isRequired
  }).isRequired,
  history: PropTypes.node.isRequired,
  getHeroes: PropTypes.func.isRequired,
  searchHeroe: PropTypes.func.isRequired,
  favoriteHero: PropTypes.func.isRequired
};

const mapStateToProps = ({ heroes, hero }) => ({ heroes, hero });

export default connect(mapStateToProps, {
  getHeroes: actions.getHeroes,
  searchHeroe: actions.searchHeroe,
  favoriteHero: actions.favoriteHero
})(Home);
