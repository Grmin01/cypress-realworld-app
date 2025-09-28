class CadastraNovoBanco {
        listaSeletores() {
            const seletores = {
                botaoSelecionarProximo: ".MuiButton-colorPrimary",
                nomeBanco: "#bankaccount-bankName-input",
                numeroRoteamento: "#bankaccount-routingNumber-input",
                numeroConta: "#bankaccount-accountNumber-input",
                botaoSalvar: ".BankAccountForm-submit",
                botaoContinuar: ".MuiButton-colorPrimary"
            }
            return seletores
        }

        criarContaBanco(bancoNome, roteamentoNumero, contaNumero) {
            cy.get(this.listaSeletores().botaoSelecionarProximo).click()
            cy.get(this.listaSeletores().nomeBanco).type(bancoNome)
            cy.get(this.listaSeletores().numeroRoteamento).type(roteamentoNumero)
            cy.get(this.listaSeletores().numeroConta).type(contaNumero)
            cy.get(this.listaSeletores().botaoSalvar).click()
            cy.get(this.listaSeletores().botaoContinuar).click()
        }
}

export default CadastraNovoBanco