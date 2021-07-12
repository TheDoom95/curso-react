import React, { ChangeEvent, useRef, useState } from 'react';

const App = () => {
  const [data, setData] = useState<string>('default');
  const [list, setList] = useState<string[]>([]);
  const inputs = useRef<HTMLInputElement[]>([]);

  const handleOnChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const { value } = ev.target;
    setData(value);
  }

  const save = () => {
    setList([...list, data]);
  }

  const remove = (index: number) => {
    setList(list.filter((value: string, i: number) => i !== index));
  }

  const edit = (index: number) => {
    const newValue = inputs.current[index].value;
    setList(list.map((value: string, i: number) => i === index ? newValue : value));
  }

  return (
    <div>
      <div>
        {
          list.map((text: string, index: number) => (
            <div key={index + text}>
              <span>{index}: </span>
              <input
                type="text"
                defaultValue={text}
                ref={(input: HTMLInputElement) => inputs.current[index] = input}
              />

              <button onClick={() => edit(index)}>Editar</button>
              <button onClick={() => remove(index)}>Borrar</button>
            </div>
          ))
        }
      </div>

      <input
        placeholder="Introduce una tarea"
        onChange={handleOnChange}
        defaultValue={data}
      />

      <button onClick={save}>Guardar</button>
    </div>
  );
}

export default App;
