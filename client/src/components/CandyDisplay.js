import React, { Component } from 'react'
import PropTypes from 'prop-types';

// REDUX
import { connect } from 'react-redux'
import { getCandy } from '../store/actions/candyActions'

class CandyDisplay extends Component {
  static propTypes = {
    getCandy: PropTypes.func.isRequired,
    candy: PropTypes.object.isRequired
  }

  //When component mounts
  //Get Candy Data to redux store
  componentDidMount() {
    this.props.getCandy()
  }

  render() {
    // 
    const { candy } = this.props
    return (
      <div>

        <h4>
          This is the candy Display!
        </h4>
        
        {/*
        ## If the candy data array is greater than 0
        ## Then map thru the array and <p> candy.name
        */}
        {candy.data.length > 0 ? (
          candy.data.map(candy => (
          <p>{candy.name}</p>
          ))
        ) : (<p>error</p>)}

      </div>
    )
  }
}
const mapStateToProps = state => ({
  candy: state.candy
})

export default connect(mapStateToProps, {
  getCandy
})(CandyDisplay)