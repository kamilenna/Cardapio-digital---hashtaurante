import { enroladinhoMignon } from "./cardapio"

export function ItemCardapio(props) {
    return (
        <div className="container-item-cardapio">
            <div>
                <h2 className="nome-prato">{props.nome}</h2>
                <p className="preco">{props.preco}</p>
                <p className="descricao">{props.descricao}</p>
            </div>
            <img src={props.imagem} alt="" />
        </div>
    )
}