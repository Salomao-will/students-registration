import { useState } from 'react';
import './style.sass';
import { useQuery } from '@tanstack/react-query';
import getCursos from '../../request/cursos';


export const Form = () => {

  const [formData, setFormData] = useState({
    nome: '',
    matricula: '',
    curso: '',
    bimestre: ''
  });

  const { data, isFetching } = useQuery(['@cursos'], getCursos)

  function save() {
    alert('Salvo com sucesso!');
  }

  if (isFetching) {
    return <h1>Carregando...</h1>
  }

  console.log(data)

  return (
    <div>
      <h1>Diário eletrônico</h1>
      <form action="">
        <input type="text"
          value={formData.nome}
          onChange={(ev) =>
            setFormData({ ...formData, nome: ev.target.value })}
        />
        <input type="text"
          value={formData.curso}
          onChange={(ev) =>
            setFormData({ ...formData, curso: ev.target.value })}
        />
        <select name="" id=""
          value={formData.matricula}
          onChange={(ev) =>
            setFormData({ ...formData, matricula: ev.target.value })}
        >
          <option>Curos</option>
        </select>
        <input type="text"
          value={formData.bimestre}
          onChange={(ev) =>
            setFormData({ ...formData, bimestre: ev.target.value })}
        />
        <button onClick={save}>Salvar</button>
      </form>
    </div>
  )
}
