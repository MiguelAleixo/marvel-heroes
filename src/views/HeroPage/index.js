import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Title, HeroPageContainer, HeroImage } from './styles';
import HeroDetail from '../components/HeroDetail';
import * as actions from './actions';
import { favoriteHero } from '../Home/actions';

class HeroPage extends React.Component {
  componentDidMount = () => {
    this.setHero();
  }

  setHero = () => {
    const {
      setHero,
      heroes,
      history,
      match: {
        params: {
          id
        }
      }
    } = this.props;
    setHero(id, heroes, history);
  }

  favoriteHero = () => {
    const {
      favoriteHero,
      heroes,
      hero
    } = this.props;
    favoriteHero(hero.content, heroes);
  }

  render() {
    const { hero } = this.props;
    return (
      <>
        <Title>
          Detalhes do personagi
        </Title>
        <HeroPageContainer>
          <HeroDetail onFav={() => this.favoriteHero()} hero={hero.content} />
          <HeroImage src={`${hero.content.thumbnail && hero.content.thumbnail.path}.${hero.content.thumbnail && hero.content.thumbnail.extension}`} />
        </HeroPageContainer>
      </>
    );
  }
}

HeroPage.propTypes = {
  hero: PropTypes.node
};

const mapStateToProps = ({ hero, heroes }) => ({ hero, heroes });

export default connect(mapStateToProps, {
  setHero: actions.setHero,
  favoriteHero
})(HeroPage);
