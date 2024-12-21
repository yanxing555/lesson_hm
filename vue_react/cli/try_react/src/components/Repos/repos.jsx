function Repos(){
    const repos =[
        {
        id:1,
        name:"lesson_hm"
    },
    {
        id:2,
        name:"algo-hello"
    },
    {
        id:3,
        name:""
    }
]

    //vue templtae?
    return (
        <ul>
            {
            repos.map(repos=>(
                <li key={repos.id}>{repos.name}</li>
            ))
            }
        </ul>
            
    )
}

export default Repos