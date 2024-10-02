import { produtos } from '@/core';

export default function PaginaProduto(props: any) {
    const id = +props.params.id;
    const produto = produtos.find(p => p.id === id);
    return produto ? (<div>{props.params.id}</div>) : (<div>Produto não encontrado</div>);
}