import { connect } from 'react-redux';

import Kitty from '../../components/Kitty';
import { updateName } from '../../data/actions/kitty';


const mapStateToProps = state => (
  {
    displayName: state.kitty.name,
  }
);

const mapDispatchToProps = dispatch => (
  {
    updateName: name => dispatch(updateName(name)),
  }
);

const KittyPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Kitty);

export default KittyPage;
