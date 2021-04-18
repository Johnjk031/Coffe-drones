import React from 'react'
import { connect } from 'react-redux'
import NoItems from './no-items'
import OrderConfirm from './order-confirm'




const MyStatus = ({purchased}) => {

if (purchased.length >= 1) {


      return (
        <div>
          <OrderConfirm />
        </div>
      );
    }

  else{
    return(
      <NoItems />
    )
  }

  }  
const mapStateToProps = state => {
    return {
      purchased: state.drink.purchased 
    }
    }
export default connect(mapStateToProps)(MyStatus)