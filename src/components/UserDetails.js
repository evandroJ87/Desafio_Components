const UserDetails = ({name, age, job, permission})=>{
    
    return(
        <div>
            <h1>Candidato para tirar CNH</h1>
            <ul>
                <li>Nome: {name}</li>
                <li>Idade: {age}</li>
                <li>Profissão: {job}</li>


            </ul>
        {age >=18 ? (<p>Este usuário pode tirar a CNH.</p>):(<p>Este usuário não pode tirar a CNH</p>)}
        </div>
    )
}

export default UserDetails;