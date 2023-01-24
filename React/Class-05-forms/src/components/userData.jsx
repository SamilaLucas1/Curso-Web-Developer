import { GlobalVariables } from "../global"
export function UsarData(params) {
    return (
        <>
        <h1>Dados dos alunos</h1>
        <p>Nome {GlobalVariables.user.name}</p>
        <p>E-mail</p>
        </>
    )
}