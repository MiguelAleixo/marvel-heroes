import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  HeroPageContainer, Container, Header, MarvelLogo
} from './styles';
import logo from '../../assets/logo/marvel.png';
import TextField from '../components/TextField';
import HeroDetails from '../components/HeroDetails';
import LastReleases from '../components/LastReleases';
import Loading from '../components/Loading';
import * as actions from './state/actions';
import * as actionsHome from '../Home/state/actions';

class HeroPage extends React.Component {
  componentDidMount = () => {
    this.getHero();
    this.getComics();
  }

  getHero = () => {
    const {
      getHero,
      heroes: { favorites },
      match: {
        params: {
          id
        }
      }
    } = this.props;
    getHero(id, favorites);
  }

  getComics = () => {
    const {
      getComics,
      match: {
        params: {
          id
        }
      }
    } = this.props;
    getComics(id);
  }

  favoriteHero = () => {
    const {
      favoriteHero,
      hero,
      heroes: {
        favorites
      }
    } = this.props;
    favoriteHero(hero.content.results[0], favorites);
  }

  navigate = () => {
    const { history } = this.props;
    history.push('/');
  }

  render() {
    const { hero, heroes } = this.props;
    return (
      <Container>
        <HeroPageContainer>
          <Header>
            <MarvelLogo onClick={() => this.navigate()} src={logo} />
            <TextField disabled placeholder="Procure por heróis" color="#FFFF" />
          </Header>
          {!hero.isRequesting
            ? (
              <>
                <HeroDetails
                  onFav={() => this.favoriteHero()}
                  hero={hero.content.results[0]}
                  favorites={heroes.favorites}
                />
                <LastReleases comics={hero.comics.results} />
              </>
            ) : <Loading />
          }
        </HeroPageContainer>
      </Container>
    );
  }
}

HeroPage.propTypes = {
  hero: PropTypes.shape({
    isRequesting: PropTypes.bool.isRequired,
    content: PropTypes.shape({
      results: PropTypes.array.isRequired
    }).isRequired,
    comics: PropTypes.shape({
      results: PropTypes.array.isRequired
    }).isRequired
  }),
  heroes: PropTypes.shape({
    favorites: PropTypes.array.isRequired
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  getHero: PropTypes.func.isRequired,
  getComics: PropTypes.func.isRequired,
  favoriteHero: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

const mapStateToProps = ({ hero, heroes }) => ({ hero, heroes });

export default connect(mapStateToProps, {
  getHero: actions.getHero,
  getComics: actions.getComics,
  favoriteHero: actionsHome.favoriteHero
})(HeroPage);
