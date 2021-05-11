import { connect } from 'react-redux';
import Header from './header'

const msp = (state,ownProps) => ({
    url:ownProps.match.path
})

const mdp = dispatch => ({

})

export default connect(msp,mdp)(Header)