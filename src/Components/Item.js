import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { depositeMoney, withdrawMoney } from '../State/action-creators'
import { actionCreators } from '../State/index'

export default function Item() {
    const dispatch = useDispatch()
    const { withdrawMoney, depositeMoney } = bindActionCreators(actionCreators, dispatch);

    return (

        <>
            <div className="container text-center p-3">

                <button className="btn btn-warning" onClick={() => { depositeMoney(5) }}>+</button>
                <h1>Withdraw / deposite money</h1>

                <button className="btn btn-warning" onClick={() => { withdrawMoney(5) }}>-</button>

            </div>

        </>

    )
}
