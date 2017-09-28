import React, { Component, PropTypes } from 'react';
import counterpart from 'counterpart';
import {
  Footer,
  Header,
  Title,
  translations,
} from '../components';

export default class Layout extends Component {
  componentWillMount() {
    const language = 'en';
    this.setState({ language });
    this.updateLanguage(language);
  }

  updateLanguage = (language) => {
    if (!this.state || (language !== this.state.language)) {
      const defaultLanguage = translations.en;
      const transVars = language === 'en' ? defaultLanguage :
        Object.assign({}, defaultLanguage, translations[language]);

      counterpart.registerTranslations(language, transVars);
      counterpart.setLocale(language);
      this.setState({ language });
    }
  }

  render() {
    const { children, route } = this.props;
    return (
      <div className="content">
        <Title title={route.title} />
        <Header />
        <div className="central-content">
          {children}
        </div>
        <Footer />
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.any.isRequired,
  route: PropTypes.any.isRequired,
};
