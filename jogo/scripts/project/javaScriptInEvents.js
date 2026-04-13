

const scriptsInEvents = {

	async FolhaDeEventosFase1_Event13_Act4(runtime, localVars)
	{
		//obter o valor da variável vidas
		let vida = runtime.globalVars.vidas;
		
		//reduz uma vida
		vida --;
		
		//atualizar variável global
		runtime.globalVars.vidas = vida;
		
		//se a variável vida chegar a 0 ir pra agame over
		if(vida <= 0){
			runtime.goToLayout("Game over");
		}
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
