import { useState } from 'react'

const Contador = ({stock,initial}) => {
    const [count, setCount] = useState(initial)
    return (
        <div>
            <h1>Contador</h1>
            <div style={{display:'flex',justifyContent:'center',fontSize:'30px'}}>
                <button style={{margin:'10px'}} className="btn btn-dark" onClick={()=>{
                    if(count>1){
                        setCount(count-1)}
                    }} > - </button>

                <p style={{margin:'10px'}}>{count}</p>

                <button style={{margin:'10px'}} className="btn btn-dark" onClick={()=>{
                    if(count<stock){
                        setCount(count+1)}
                    }}> + </button>
            </div>
            <h2>El stock es de {stock} unidades</h2>
        </div>
    )
}

export default Contador
