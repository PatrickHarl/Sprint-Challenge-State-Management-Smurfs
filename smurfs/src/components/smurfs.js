import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Smurf from './smurf'
import { fetchSmurfs } from '../actions/allActions'
import SmurfForm from './smurfform'
import './smurf.css'

const Smurfs = (props) => {

    useEffect(() => {

        props.fetchSmurfs()


    }, [])

    return (

        <div>
            <h1>Smurfs</h1>
            {props.isFetching && <p>Loading...</p>}
            <div>

            {!props.isFetching && props.smurfs.length > 0 && props.smurfs.map(smurf => {

                return <Smurf smurf={smurf}/>


            })}

            </div>
            <div className='add-smurf-title'>Add a Smurf</div>
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