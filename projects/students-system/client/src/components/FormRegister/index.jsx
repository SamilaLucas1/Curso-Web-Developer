import { Container } from "./style";
import { useForm } from "react-hook-form";
import InputMask from 'react-input-mask';

export function FormRegister() {
    const {register, handleSubmit, formState:{ errors }, reset } = useForm();

    function onSubmit(data) {
        console.log(data);
        alert("Aluno cadastrado com sucesso!")
        reset();
    }
    console.log(errors);
    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <section>
                <label htmlFor="name">Nome:</label>
                <input type="text" id="name" {...register("name", {required: true} )} placeholder="Nome do aluno"/>

                {errors.name && <span className="error">Campo obrigatório</span>}
                </section>

                <section>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" {...register("email", {required: true} )} placeholder="Email do aluno" />

                {errors.email && <span className="error">Campo obrigatório</span>}
                </section>

                <section>
                <label htmlFor="phone">Telefone:</label>
                <InputMask mask= "(99) 9999-9999" maskChar=" " type="tel" id="phone" {...register("phone", {required: true} )} placeholder="(00) 0000-0000"/>

                {errors.phone && <span className="error">Campo obrigatório</span>}
                </section>

                <section>
                <label htmlFor="city">Cidade:</label>
                <input type="text" id="city" {...register("city", {required: true} )} placeholder="Cidade do aluno"/>

                {errors.city && <span className="error">Campo obrigatório</span>}
                </section>

                <button>Cadastrar</button>
            </form>
        </Container>
    )
}