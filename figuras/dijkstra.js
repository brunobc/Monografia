AlgoritmoDijkstra
inicialize a distância para todos os nós em G = infinito
	Para inicialize o predecessor de todos os nós em G = vazio
	Enquanto H não estiver vazio faça
		u = o nó com menor rótulo extraído de H
		Para cada v adjacente a u:
			Se rótulo[v] > rótulo[u] + distância[u, v]:
				rótulo[v] = rótulo[u] + distância[u, v];
				predecessor[v] = u;
				atualiza a posição de v em H
			Fim Se
		Fim Para
	Fim Enquanto
Fim Dijkstra