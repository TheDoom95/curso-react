import React, { ChangeEvent, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const TodoList = () => {
    const [data, setData] = useState<string>('');
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
            <div className="mt-4">
                <Link className="bg-blue-500 ml-4 p-2 text-white mb-4" to="/">Ir a la home</Link>

                {
                    list.map((text: string, index: number) => (
                        <div key={index + text} className="mt-5 sm:flex sm:items-center px-4">
                            <span className="mr-2">{index}: </span>

                            <input
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                type="text"
                                defaultValue={text}
                                ref={(input: HTMLInputElement) => inputs.current[index] = input}
                            />

                            <button
                                className="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                onClick={() => edit(index)}
                            >
                                Editar
                            </button>

                            <button
                                className="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                onClick={() => remove(index)}
                            >
                                Borrar
                            </button>
                        </div>
                    ))
                }
            </div>

            <div className="mt-5 sm:flex sm:items-center px-4">
                <input
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2"
                    placeholder="Introduce una tarea"
                    onChange={handleOnChange}
                    defaultValue={data}
                />

                <button
                    className="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={save}
                >
                    Guardar
                </button>
            </div>


        </div>
    );
}

export default TodoList;
