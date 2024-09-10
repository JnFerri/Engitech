import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

function VisualizacaoChapas({ retangulos , alturaChapa , comprimentoChapa })  {
  const svgRef = useRef();
 console.log(alturaChapa , comprimentoChapa)
 useEffect(() => {
  // Seleciona o elemento SVG
  const svg = d3.select(svgRef.current);

  // Limpa qualquer conteúdo existente no SVG
  svg.selectAll("*").remove();

  // Define o tamanho da chapa
  const maxSvgWidth = window.innerWidth / 2 ; // Largura máxima do SVG
  const scaleFactor = maxSvgWidth / comprimentoChapa;
  const scaledWidth = comprimentoChapa * scaleFactor;
  const scaledHeight = alturaChapa * scaleFactor;

  // Configura as dimensões do SVG
  svg.attr("width", scaledWidth).attr("height", scaledHeight);

  // Adiciona os retângulos ao SVG
  svg
    .selectAll("rect")
    .data(retangulos)
    .enter()
    .append("rect")
    .attr("x", (d) => d.x * scaleFactor)
    // Inverte a coordenada Y
    .attr("y", (d) => scaledHeight - (d.y * scaleFactor + d.height * scaleFactor))
    .attr("width", (d) => d.width * scaleFactor)
    .attr("height", (d) => d.height * scaleFactor)
    .attr("fill", "steelblue")
    .attr("stroke", "black")
    .attr("stroke-width", 1);
}, [retangulos, alturaChapa, comprimentoChapa]);

  return <svg ref={svgRef} style = {{ border : '1px solid black' , backgroundColor : 'grey'}}></svg>;
};

export default VisualizacaoChapas
