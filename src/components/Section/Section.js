import PropTypes from 'prop-types';
import css from './Section.module.css';

export const Section = ({title, children}) => {
    return (
      <section>
            <h2 className={css.titleTask}>{title}</h2>
            {children}
      </section>
    );
}

Section.propTypes = {
    title: PropTypes.string,
}