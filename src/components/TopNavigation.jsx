import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { store, view } from 'react-easy-state';

const topNavigationStore = store({
  toggle: () => {
    topNavigationStore.mobileMenuVisible = !topNavigationStore.mobileMenuVisible;
  },
  mobileMenuVisible: false,
});

const TopNavigation = ({ images }) => {
  const { logo } = images;

  const { mobileMenuVisible } = topNavigationStore;
  return (
    <div className="nav-container">
      <div className="left">
        <Link to="/">
          <img src={logo} height="30" width="auto" className="h-30px lg:h-50px" alt="Logo" />
        </Link>
      </div>
      <div className="right">
        <a
          className="link hidden lg:block"
          href="https://docs.piedao.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          docs
        </a>
        <a
          className="link hidden lg:block"
          href="https://pie283460.typeform.com/to/uy9NZt"
          target="_blank"
          rel="noopener noreferrer"
        >
          whitepaper
        </a>
        <div className="hidden lg:block" />

        <button
          className="hamburger lg:hidden"
          id="trigger-overlay"
          type="button"
          onClick={topNavigationStore.toggle}
        >
          <img src="./assets/img/hamburgerIcon.svg" height="19" alt="hamburger icon" className="w-min-20px" />
        </button>
        {mobileMenuVisible && (
          <div className="overlay overlay-hugeinc open">
            <button
              type="button"
              className="overlay-close"
              onClick={topNavigationStore.toggle}
            >
              Close
            </button>
            <nav>
              <ul>
                <li>
                  <Link
                    onClick={topNavigationStore.toggle}
                    to="/"
                  >
                    home
                  </Link>
                </li>
                <li>
                  <a
                    onClick={topNavigationStore.toggle}
                    className="navbar-item"
                    href="https://docs.piedao.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    docs
                  </a>
                </li>
                <li>
                  <a
                    onClick={topNavigationStore.toggle}
                    className="navbar-item"
                    href="https://pie283460.typeform.com/to/uy9NZt"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    whitepaper
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

TopNavigation.propTypes = {
  images: PropTypes.shape({
    logo: PropTypes.string.isRequired,
  }).isRequired,
};

export default view(TopNavigation);
