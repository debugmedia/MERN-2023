import './Counter.css'

const Counter=({count,onIncrement,onDecrement})=>{
    return (
        <>
        <div><h1>Count {count}</h1></div>
       <div className="btn">
       <button className='btnIncrement' onClick={onIncrement}>Add +</button>
       
       <button onClick={onDecrement}>Minus -</button>
       </div>
        </>
    )
}

export default Counter;