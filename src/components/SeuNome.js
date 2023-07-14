export function SeuNome({setName}){   
    return(
        <div>
            <p>Digite seu nome</p>
            <input type="text" placeholder="Name" onChange={(e)=> setName(e.target.value)}/>
        </div>
    )
}

