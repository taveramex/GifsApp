import { useCounter } from "./hooks/useCounter";

const MyCounterApp = () => {
    
    const {counter, handleAddition, handleReset, handleSubstraction} = useCounter(10);
    
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignContent: "center" }}>
            <h1>Counter: {counter}</h1>
            <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={handleAddition}>+1</button>
                <button onClick={handleSubstraction}>-1</button>
                <button onClick={handleReset}>reset</button>
            </div>
        </div>
    )
}

export default MyCounterApp;
