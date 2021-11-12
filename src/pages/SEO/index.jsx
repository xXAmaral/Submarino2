import { useEffect, useState, useCallback } from "react";
import { formataValor } from "../../components/Main";
import { useHistory, Link } from "react-router-dom";

export const SEO = () => {
    
    return(
        <>

            <h4 className="w-100 container text-center">SEO do Java Script</h4>
            <div className="col col-md-8">
                <div className="container2">
                        <p>
                        React foi desenvolvido para criar UI’s interativas que são declarativas, modulares e multiplataformas. 
                        Hoje, é um dos mais populares — se não o mais popular — Framework de JavaScript para escrever aplicações front-end performáticas. <br />
                        Desenvolvido inicialmente para criar SPAs (Aplicações de uma página), React é usado agora para fazer websites completos e até mesmo aplicações mobile. 
                        Veja neste artigo sobre Melhores Práticas e Estratégias para SEO para React em 2021.
                        </p>
                        <p>
                        Se você tem uma vasta experiência com desenvolvimento web e for para o React, irá perceber uma incrível quantidade do seu código HTML e CSS se transformando em JavaScript. 
                        Isso se dá pois o React não recomenda criar ou atualizar diretamente os elementos de UI, mas invés disso descrever o “estado” deles. 
                        React vai então atualizar a DOM para corresponder com esse estado da maneira mais eficiente possível. 
                        </p>
                        <p>
                        Como resultado, todas as mudanças na UI ou na DOM devem ser feitas pela engine do React. 
                        Apesar de conveniente para os desenvolvedores, isso pode significar carregamentos mais longos para os usuários e mais trabalho para os motores de busca achar e indexar o conteúdo. <br />
                        Neste artigo, nós vamos abordar desafios enfrentados enquanto fazíamos aplicativos e websites com desempenho de SEO, e nós vamos mostrar várias estratégias para vencê-los.
                        </p>
                        <p>
                            Como o Google rastreia e indexa páginas da web 
                        </p>
                        <p>    
                        <p>
                            Pontos a serem observados:
                        </p>
                        O Googlebot mantém uma fila de rastreamento contendo todos as URLs necessárias para rastrear e indexar no futuro.
                        Quando o rastreador está ocioso, ele seleciona o próximo URL da fila, faz uma solicitação e busca o HTML. <br />
                        Depois de analisar o HTML, o Googlebot determina se precisa buscar e executar JavaScript para renderizar o conteúdo. 
                        Se sim, o URL é adicionado a uma fila de renderização.
                        </p>
                        <p>
                        Posteriormente, o renderizador busca e executa JavaScript para renderizar a página. 
                        Ele envia o HTML renderizado de volta para a unidade de processamento.
                        A unidade de processamento extrai todas as URLs em tags (a) mencionados na página da web e os adiciona de volta à fila de rastreamento.
                        O conteúdo é adicionado ao índice do Google.
                        </p>
                        <p>
                        Observe que há uma distinção clara entre o estágio Processing que analisa HTML e o estágio Renderer que executa JavaScript.
                        Essa distinção existe porque a execução de JavaScript é cara, visto que o Googlebots precisa examinar mais de 130 trilhões de páginas da web.
                        </p>
                        <p>
                        Portanto, quando o Googlebot rastreia uma página da web, ele analisa o HTML imediatamente e, em seguida, coloca o JavaScript na fila para ser executado mais tarde. 
                        A documentação do Google menciona que uma página permanece na fila de renderização por alguns segundos, embora possa demorar mais.
                        </p>
                        <p>
                        Também vale a pena mencionar o conceito de Orçamento de Rastreamento. O rastreamento do Google é limitado pela largura de banda, tempo e disponibilidade das instâncias do Googlebot. <br />
                        Ele aloca um orçamento ou recursos específicos para indexar cada site. 
                        Se você estiver construindo um site grande com conteúdo pesado e com milhares de páginas (por exemplo, um site de E-commerce) e essas páginas usarem muito JavaScript para renderizar o conteúdo, o Google poderá ler menos conteúdo de seu site.
                        </p>

                </div>
            </div>
        </>
    )

}