/**
 *
 * AnimatedCardScreenWithSlider
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Slider from 'react-slick';

import Shikamaru from '../../images/shikamaru.png';
import Temari from '../../images/temari.png';
import Kakashi from '../../images/kakashi.png';
import Jiraya from '../../images/jiraya.png';
import Gara from '../../images/gara.png';

export function AnimatedCardScreenWithSlider() {
  const [slideIndex, setSlideIndex] = React.useState(0);
  const [updateCount, setUpdateCount] = React.useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: updateCount => setUpdateCount(updateCount + 1),
    beforeChange: (current, next) => setSlideIndex(next),
  };

  return (
    <div className="slide-container">
      <Slider ref={slider => slider} {...settings}>
        <div className="wrapper">
          <div className="clash-card shikamaru">
            <div className="clash-card__image clash-card__image--shikamaru">
              <img src={Shikamaru} alt="shikamaru" />
            </div>
            <div className="clash-card__level clash-card__level--shikamaru">
              Konoha Village
            </div>
            <div className="clash-card__unit-name">SHIKAMARU</div>
            <div className="clash-card__unit-description">
              Sometimes I wish I was a cloud... Just floating along, going
              wherever the breeze takes me.
            </div>

            <div className="clash-card__unit-stats clash-card__unit-stats--shikamaru clearfix">
              <div className="one-third">
                <div className="stat">
                  20<sup>S</sup>
                </div>
                <div className="stat-value">Training</div>
              </div>

              <div className="one-third">
                <div className="stat">Jonin</div>
                <div className="stat-value">Position</div>
              </div>

              <div className="one-third no-border">
                <div className="stat">1</div>
                <div className="stat-value">Rank</div>
              </div>
            </div>
          </div>
        </div>

        <div className="wrapper">
          <div className="clash-card temari">
            <div className="clash-card__image clash-card__image--temari">
              <img src={Temari} alt="temari" />
            </div>
            <div className="clash-card__level clash-card__level--temari">
              Konoha Village
            </div>
            <div className="clash-card__unit-name">TEMARI</div>
            <div className="clash-card__unit-description">
              Let's see if you can do this without CRYING this time.
            </div>

            <div className="clash-card__unit-stats clash-card__unit-stats--temari clearfix">
              <div className="one-third">
                <div className="stat">
                  15<sup>S</sup>
                </div>
                <div className="stat-value">Training</div>
              </div>

              <div className="one-third">
                <div className="stat">Jonin</div>
                <div className="stat-value">Position</div>
              </div>

              <div className="one-third no-border">
                <div className="stat">2</div>
                <div className="stat-value">Rank</div>
              </div>
            </div>
          </div>
        </div>

        <div className="wrapper">
          <div className="clash-card kakashi">
            <div className="clash-card__image clash-card__image--kakashi">
              <img src={Kakashi} alt="kakashi" />
            </div>
            <div className="clash-card__level clash-card__level--kakashi">
              Konoha Village
            </div>
            <div className="clash-card__unit-name">KAKASHI</div>
            <div className="clash-card__unit-description">
              I'm Hatake Kakashi. Things I like and things I hate? I don't feel
              like telling you that. My dreams for the future? Never really
              thought about that. As for my hobbies... I have lots of hobbies.
            </div>

            <div className="clash-card__unit-stats clash-card__unit-stats--kakashi clearfix">
              <div className="one-third">
                <div className="stat">
                  25<sup>M</sup>
                </div>
                <div className="stat-value">Training</div>
              </div>

              <div className="one-third">
                <div className="stat">Hokage</div>
                <div className="stat-value">Position</div>
              </div>

              <div className="one-third no-border">
                <div className="stat">1</div>
                <div className="stat-value">Rank</div>
              </div>
            </div>
          </div>
        </div>

        <div className="wrapper">
          <div className="clash-card jiraya">
            <div className="clash-card__image clash-card__image--jiraya">
              <img src={Jiraya} alt="jiraya" />
            </div>
            <div className="clash-card__level clash-card__level--jiraya">
              Konoha Village
            </div>
            <div className="clash-card__unit-name">JIRAYA</div>
            <div className="clash-card__unit-description">
              Because it's no fun to train a genius!
            </div>

            <div className="clash-card__unit-stats clash-card__unit-stats--jiraya clearfix">
              <div className="one-third">
                <div className="stat">
                  30<sup>S</sup>
                </div>
                <div className="stat-value">Training</div>
              </div>

              <div className="one-third">
                <div className="stat">Sannin</div>
                <div className="stat-value">Position</div>
              </div>

              <div className="one-third no-border">
                <div className="stat">1</div>
                <div className="stat-value">Rank</div>
              </div>
            </div>
          </div>
        </div>

        <div className="wrapper">
          <div className="clash-card gara">
            <div className="clash-card__image clash-card__image--gara">
              <img src={Gara} alt="gara" />
            </div>
            <div className="clash-card__level clash-card__level--gara">
              Sunagakure Village
            </div>
            <div className="clash-card__unit-name">GARA</div>
            <div className="clash-card__unit-description">
              One day I’d like to become something precious to others.
            </div>

            <div className="clash-card__unit-stats clash-card__unit-stats--gara clearfix">
              <div className="one-third">
                <div className="stat">
                  5<sup>M</sup>
                </div>
                <div className="stat-value">Training</div>
              </div>

              <div className="one-third">
                <div className="stat">Hokage</div>
                <div className="stat-value">Position</div>
              </div>

              <div className="one-third no-border">
                <div className="stat">3</div>
                <div className="stat-value">Rank</div>
              </div>
            </div>
          </div>
        </div>

        <div className="wrapper">
          <div className="clash-card barbarian">
            <div className="clash-card__image clash-card__image--barbarian">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/barbarian.png"
                alt="barbarian"
              />
            </div>
            <div className="clash-card__level clash-card__level--barbarian">
              Level 4
            </div>
            <div className="clash-card__unit-name">The Barbarian</div>
            <div className="clash-card__unit-description">
              The Barbarian is a kilt-clad Scottish warrior with an angry,
              battle-ready expression, hungry for destruction.
            </div>

            <div className="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">
              <div className="one-third">
                <div className="stat">
                  20<sup>S</sup>
                </div>
                <div className="stat-value">Training</div>
              </div>

              <div className="one-third">
                <div className="stat">16</div>
                <div className="stat-value">Speed</div>
              </div>

              <div className="one-third no-border">
                <div className="stat">150</div>
                <div className="stat-value">Cost</div>
              </div>
            </div>
          </div>
        </div>

        <div className="wrapper">
          <div className="clash-card archer">
            <div className="clash-card__image clash-card__image--archer">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/archer.png"
                alt="archer"
              />
            </div>
            <div className="clash-card__level clash-card__level--archer">
              Level 5
            </div>
            <div className="clash-card__unit-name">The Archer</div>
            <div className="clash-card__unit-description">
              The Archer is a female warrior with sharp eyes.
            </div>

            <div className="clash-card__unit-stats clash-card__unit-stats--archer clearfix">
              <div className="one-third">
                <div className="stat">
                  25<sup>S</sup>
                </div>
                <div className="stat-value">Training</div>
              </div>

              <div className="one-third">
                <div className="stat">24</div>
                <div className="stat-value">Speed</div>
              </div>

              <div className="one-third no-border">
                <div className="stat">300</div>
                <div className="stat-value">Cost</div>
              </div>
            </div>
          </div>
        </div>

        <div className="wrapper">
          <div className="clash-card giant">
            <div className="clash-card__image clash-card__image--giant">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/giant.png"
                alt="giant"
              />
            </div>
            <div className="clash-card__level clash-card__level--giant">
              Level 5
            </div>
            <div className="clash-card__unit-name">The Giant</div>
            <div className="clash-card__unit-description">
              Slow, steady and powerful, Giants are massive warriors that soak
              up huge amounts of damage.
            </div>

            <div className="clash-card__unit-stats clash-card__unit-stats--giant clearfix">
              <div className="one-third">
                <div className="stat">
                  2<sup>M</sup>
                </div>
                <div className="stat-value">Training</div>
              </div>

              <div className="one-third">
                <div className="stat">12</div>
                <div className="stat-value">Speed</div>
              </div>

              <div className="one-third no-border">
                <div className="stat">2250</div>
                <div className="stat-value">Cost</div>
              </div>
            </div>
          </div>
        </div>

        <div className="wrapper">
          <div className="clash-card goblin">
            <div className="clash-card__image clash-card__image--goblin">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/goblin.png"
                alt="goblin"
              />
            </div>
            <div className="clash-card__level clash-card__level--goblin">
              Level 5
            </div>
            <div className="clash-card__unit-name">The Goblin</div>
            <div className="clash-card__unit-description">
              These pesky little creatures only have eyes for one thing: LOOT!
            </div>

            <div className="clash-card__unit-stats clash-card__unit-stats--goblin clearfix">
              <div className="one-third">
                <div className="stat">
                  30<sup>S</sup>
                </div>
                <div className="stat-value">Training</div>
              </div>

              <div className="one-third">
                <div className="stat">32</div>
                <div className="stat-value">Speed</div>
              </div>

              <div className="one-third no-border">
                <div className="stat">100</div>
                <div className="stat-value">Cost</div>
              </div>
            </div>
          </div>
        </div>

        <div className="wrapper">
          <div className="clash-card wizard">
            <div className="clash-card__image clash-card__image--wizard">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/wizard.png"
                alt="wizard"
              />
            </div>
            <div className="clash-card__level clash-card__level--wizard">
              Level 6
            </div>
            <div className="clash-card__unit-name">The Wizard</div>
            <div className="clash-card__unit-description">
              The Wizard is a terrifying presence on the battlefield.
            </div>

            <div className="clash-card__unit-stats clash-card__unit-stats--wizard clearfix">
              <div className="one-third">
                <div className="stat">
                  5<sup>M</sup>
                </div>
                <div className="stat-value">Training</div>
              </div>

              <div className="one-third">
                <div className="stat">16</div>
                <div className="stat-value">Speed</div>
              </div>

              <div className="one-third no-border">
                <div className="stat">4000</div>
                <div className="stat-value">Cost</div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

AnimatedCardScreenWithSlider.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(AnimatedCardScreenWithSlider);
