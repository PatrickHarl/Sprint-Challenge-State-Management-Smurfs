import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Smurf from './smurf'
import { fetchSmurfs } from '../actions/allActions'
import SmurfForm from './smurfform'

const Smurfs = (props) => {

    useEffect(() => {

        props.fetchSmurfs()


    }, [])

    return (

        <div>
            <div>Smurfs</div>
            {props.isFetching && <p>Loading...</p>}
            <div>

            {!props.isFetching && props.smurfs.length > 0 && props.smurfs.map(smurf => {

                return <Smurf smurf={smurf}/>


            })}

            </div>
            <div>Add a Smurf</div>
            <SmurfForm />
        </div>



    )


}
const mapStateToProps = (state) => {

    return {
    isFetching:state.isFetching,
    smurfs:state.smurfs,
    error:state.error
    }

}

export default connect(mapStateToProps, { fetchSmurfs })(Smurfs)