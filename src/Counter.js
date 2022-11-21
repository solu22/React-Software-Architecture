import React from 'react'
import { useContext, useState } from 'react'
import { CounterContext } from './CounterContext'
import { useRecoilState} from 'recoil'
import { counterState } from './counterState'
import { incrementByState } from './incrementByState';
import { useSelector, useDispatch} from 'react-redux'
import { counterBtnClicked } from './redux/actions'
import { observer} from 'mobx-react-lite'


/* using useState */

// const Counter = () => {
//     const [ numOfClicks, setNumOfClicks] = useState(0)
//     const [incerementBy, setIncrementby] = useState(1)
//   return (
//     <div>
//         <p>You have clicked the button {numOfClicks} times.</p>
//         <label>
//           IncerementBy:
//           <input value = {incerementBy} onChange= {(e)=> setIncrementby(Number(e.target.value))} type="Number"/>
//         </label>
//         <button onClick={()=> setNumOfClicks(numOfClicks + incerementBy) }>Click</button>
//     </div>
//   )
// }

/* using context */

//  const Counter = () => {

//   const { numOfClicks, increment } = useContext(CounterContext)
//   const [incrementBy, setIncrementBy] = useState(1)
  
//    return (
//      <div>
//          <p>You have clicked the button {numOfClicks} times.</p>
//          <label>
//            IncerementBy:
//            <input value = {incrementBy} onChange= {(e)=> setIncrementBy(Number(e.target.value))} type="Number"/>
//          </label>
//          <button onClick={()=> increment(incrementBy) }>Click</button>
//      </div>
//    )
//  }

/*using recoil */
  // const Counter = () => {

  //  const [ numOfClicks, setNumOfClicks ] = useRecoilState(counterState)
  //  const [incrementBy, setIncrementBy] = useRecoilState(incrementByState)
  //   return (
  //     <>
  //         <p>You have clicked the button {numOfClicks} times.</p>
  //         <label>
  //           IncrementBy:
  //           <input value = {incrementBy} onChange= {e=> setIncrementBy(Number(e.target.value))} type="Number"/>
  //         </label>
  //         <button onClick={()=> setNumOfClicks(numOfClicks + incrementBy)}>Click</button>
          
  //     </>
  //   )
  // }

  /* using Redux */

  // const Counter = () => {

  //   const numOfClicks = useSelector(state=> state.numberOfClicks)
  //   const [incrementBy, setIncrementBy] = useState(1)
  //   const dispatch = useDispatch()
    
  //    return (
  //      <>
  //          <p>You have clicked the button {numOfClicks} times.</p>
  //          <label>
  //            IncrementBy:
  //            <input value = {incrementBy} onChange= {e=> setIncrementBy(Number(e.target.value))} type="Number"/>
  //          </label>
  //          <button onClick={()=> dispatch(counterBtnClicked(incrementBy))}>Click</button>
           
  //      </>
  //    )
  //  }

   /* using MobX */

    const Counter = observer(({ counter}) => {

     const [incrementBy, setIncrementBy] = useState(1)
    
      return (
        <>
            <p>You have clicked the button {counter.numOfClicks} times.</p>
            <label>
              IncrementBy:
              <input value = {incrementBy} onChange= {e=> setIncrementBy(Number(e.target.value))} type="Number"/>
            </label>
            <button onClick={()=> counter.increment(incrementBy)}>Click</button>
           
        </>
      )
    })






export default Counter