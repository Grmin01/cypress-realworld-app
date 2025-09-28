class RegistrarUsuario{
    listaSeletores () {    
        const seletores = {
            botamRegistrar: "[data-test='signup']",
            primeiroNome: "#firstName",
            ultimoNome: "#lastName",
            nickName: "#username",
            senha: "#password",
            confimrarSenha: "#confirmPassword",
            checkRegistrar: ".css-1tlb47a",
            butaoConfirmar: "[type='submit']",
            erroSenha: "#password-helper-text",
            erroConfirmarSenha: "#confirmPassword-helper-text"


        }
        return seletores
    }

    checkRegistro() {        
        cy.get(this.listaSeletores().botamRegistrar).click()
        cy.get(this.listaSeletores().checkRegistrar)

    }

    registrarusuario (primaNome,ultNome, nick, senhaInserir) {        
        cy.get(this.listaSeletores().primeiroNome).type(primaNome)
        cy.get(this.listaSeletores().ultimoNome).type(ultNome)
        cy.get(this.listaSeletores().nickName).type(nick)
        cy.get(this.listaSeletores().senha).type(String(senhaInserir))
        cy.get(this.listaSeletores().confimrarSenha).type(String(senhaInserir))
        cy.get(this.listaSeletores().butaoConfirmar).click()

    }

    erroRegistroUsuario(primaNome,ultNome, nick, senhaInserir) {
        cy.get(this.listaSeletores().primeiroNome).type(primaNome)
        cy.get(this.listaSeletores().ultimoNome).type(ultNome)
        cy.get(this.listaSeletores().nickName).type(nick)
        cy.get(this.listaSeletores().senha).type(String(senhaInserir))
        cy.get(this.listaSeletores().confimrarSenha).type(String(senhaInserir))
        cy.get(this.listaSeletores().erroSenha)
        //cy.get(this.listaSeletores().erroConfirmarSenha)
        cy.log('Preencher todas as informações obrigatórias')

    }

}

export default RegistrarUsuario