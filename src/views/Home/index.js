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
import Loading from '../components/Loading';
import * as actions from './state/actions';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeout: null,
      onlyFav: false,
      search: ''
    };

    this.changeHandler = this.changeHandler.bind(this);
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

  changeHandler = e => {
    this.setState({
      search: e.target.value,
    }, () => this.searchHeroe(e.target.value));
  }

  favoriteHero = hero => {
    const { favoriteHero, heroes: { favorites } } = this.props;
    favoriteHero(hero, favorites);
  }

  filterHeroes = () => {
    const { onlyFav } = this.state;
    const { getHeroes, heroes: { favorites } } = this.props;
    this.setState({
      onlyFav: !onlyFav,
      search: ''
    }, () => {
      getHeroes(favorites);
    });
  }

  navigate = id => {
    const { history } = this.props;
    history.push(`/hero/${id}`);
  }

  render() {
    const { heroes } = this.props;
    const { onlyFav, search } = this.state;
    return (
      <HomeContainer>
        <MarvelLogo src={logo} />
        <Title> EXPLORE O UNIVERSO </Title>
        <SubTitle>
          Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama
          - e aqueles que você descobrirá em breve!
        </SubTitle>
        <TextField
          value={search}
          disabled={onlyFav}
          onChange={this.changeHandler}
          placeholder="Procure por heróis"
        />
        <Filters onlyFav={onlyFav} onClick={() => this.filterHeroes()} />
        { !heroes.isRequesting ? (
          <HeroesContainer>
            {
              !onlyFav
                ? (heroes.content.results.map(obj => (
                  <Hero
                    key={obj.id}
                    onClick={() => this.navigate(obj.id)}
                    onFav={() => this.favoriteHero(obj)}
                    favorites={heroes.favorites}
                    hero={obj}
                  />
                )))
                : (heroes.favorites.map(obj => (
                  <Hero
                    key={obj.id}
                    onClick={() => this.navigate(obj.id)}
                    onFav={() => this.favoriteHero(obj)}
                    favorites={heroes.favorites}
                    hero={obj}
                  />
                )))
            }
          </HeroesContainer>
        ) : <Loading />
        }
      </HomeContainer>
    );
  }
}

Home.propTypes = {
  heroes: PropTypes.shape({
    isRequesting: PropTypes.bool.isRequired,
    content: PropTypes.shape({
      results: PropTypes.array.isRequired
    }).isRequired,
    favorites: PropTypes.array.isRequired
  }).isRequired,
  getHeroes: PropTypes.func.isRequired,
  searchHeroe: PropTypes.func.isRequired,
  favoriteHero: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

const mapStateToProps = ({ heroes, hero }) => ({ heroes, hero });

export default connect(mapStateToProps, {
  getHeroes: actions.getHeroes,
  searchHeroe: actions.searchHeroe,
  favoriteHero: actions.favoriteHero
})(Home);
