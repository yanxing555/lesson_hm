import{
    useCounterStore
}from '../../store/count'
// 来自Store
const Counter = ()=>{
    const {
        count,
        increment,
        decrement
    }=useCounterStore()

    return (
        <>
           Couter{count}
           <button onClick={increment}>+</button>
           <button onClick={decrement}>-</button>
        </>
    )
}

export default Counter