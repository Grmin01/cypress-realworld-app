class PaginaLogin  {
    listaSeletores () {                
        const seletores = {
            nomeUsuarioEntrada: "[name='username']",
            senhaUsuarioEntrada: "[name='password']",
            botaoLoguin: "[type='submit']",
            mensagemErro: ".css-1pxa9xg-MuiAlert-message"
        }

        return seletores
    }


    acessoPaginaLogin () {
        cy.visit('http://localhost:3000/')
    }

    dadosUsuarioValidos(nomeUsuarioValidos, senhaUsuarioInvalidos) {
        cy.get(this.listaSeletores().nomeUsuarioEntrada).type(nomeUsuarioValidos)
        cy.get(this.listaSeletores().senhaUsuarioEntrada).type(senhaUsuarioInvalidos)
        cy.get(this.listaSeletores().botaoLoguin).click()        
    }

    dadosUsuarioInvalidos(nomeUsuarioInvalidos, senhaUsuarioInvalidos) {
        cy.get(this.listaSeletores().nomeUsuarioEntrada).type(nomeUsuarioInvalidos)
        cy.get(this.listaSeletores().senhaUsuarioEntrada).type(senhaUsuarioInvalidos)
        cy.get(this.listaSeletores().botaoLoguin).click()
    }

    erroLogin() {        
        cy.get(this.listaSeletores().mensagemErro)
        cy.log('Credenciais inválidas')
    }

}

export default PaginaLogin