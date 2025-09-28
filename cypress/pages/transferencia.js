class Transferencias{
    listaSeletores(){
        const seletores= {
            novaTransferencia: ".MuiButton-colorInherit",
            espacoNomeTransferencia: "#user-list-search-input",
            clienteTransferencia: ".MuiListItemText-primary",
            montante: "#amount",
            nota: "#transaction-create-description-input",
            botaoTransferir: ".MuiButton-fullWidth.MuiButton-root[type='submit']",
            botaoHome: ".MuiTypography-body1",
            botaoMine: ".MuiTab-root",
            botaoSair: ".MuiListItemText-primary",
            saldo: ".NavDrawer-amount",
            transacoes: "[style='height: 100%; width: 100%;']"
            
        }
        return seletores
    }

    novaTransferencia(nomeTransferir, valor, mensagem){
        cy.get(this.listaSeletores().novaTransferencia).click()
        cy.get(this.listaSeletores().clienteTransferencia).contains(nomeTransferir).click({ force: true })
        cy.get(this.listaSeletores().montante).type(valor)        
        cy.get(this.listaSeletores().nota).type(mensagem)
        cy.get(this.listaSeletores().botaoTransferir).eq(1).click()    
        cy.get('body').contains('Transaction Submitted!')            
        cy.get(this.listaSeletores().botaoHome).eq(0).click() 
    }

    receberTransferencia(nomeTransferir, valor, mensagem){
        cy.get(this.listaSeletores().novaTransferencia).click()
        cy.get(this.listaSeletores().clienteTransferencia).contains(nomeTransferir).click({ force: true })
        cy.get(this.listaSeletores().montante).type(valor)        
        cy.get(this.listaSeletores().nota).type(mensagem)
        cy.get(this.listaSeletores().botaoTransferir).eq(0).click()    
        cy.get('body').contains('Transaction Submitted!')            
        cy.get(this.listaSeletores().botaoHome).eq(0).click()     
        
    }

    saldoInsuficiente(nomeTransferir, valor, mensagem){
        cy.get(this.listaSeletores().saldo).contains('$0.00')
        cy.log('Sem saldo suficiente')
    }

    HistoricoTrasacao(){
        cy.get(this.listaSeletores().botaoMine).eq(2).click()  
    }

    semHistoricoTrasacao(){
        cy.get(this.listaSeletores().botaoMine).eq(2).click()  
        cy.get(this.listaSeletores().transacoes).contains('No')
        cy.log('Não possui transações anteriores')
    }
}

export default Transferencias