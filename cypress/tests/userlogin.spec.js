import usuarioDados from '../fixtures/usuarioDados.json'
import PaginaLogin from '../pages/loguinPage.js'
import RegistrarUsuario from '../pages/registrarUsuario'
import CadastraNovoBanco from '../pages/cadastrarBank.js'
import Transferencias from '../pages/transferencia.js'


const paginaLogin = new PaginaLogin()
const registrarUsuario = new RegistrarUsuario()
const cadastroNovoBanco = new CadastraNovoBanco()
const transferencia = new Transferencias()

describe('Tentar fazer login com credenciais inválidas', () => {
  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    paginaLogin.acessoPaginaLogin()
    paginaLogin.dadosUsuarioValidos(usuarioDados.dadosUsuario.nomeUsuarioInvalidos, usuarioDados.dadosUsuario.senhaUsuarioINvalidos)
    paginaLogin.erroLogin()    
  });
});


describe('Tentar registrar um novo usuário com informações incompletas', () => {
  it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
    paginaLogin.acessoPaginaLogin()
    registrarUsuario.checkRegistro()
    registrarUsuario.erroRegistroUsuario(usuarioDados.testeErroDadosCdastrais.erroPrimeiroNome, 
            usuarioDados.testeErroDadosCdastrais.erroUltimoNome, 
            usuarioDados.testeErroDadosCdastrais.erroNickName, 
            String(usuarioDados.testeErroDadosCdastrais.erroSenha)
          )   
  });
});


describe('Registro de novo usuário com sucesso', () => {
  it('Deve registrar um novo usuário com informações válidas', () => {
    paginaLogin.acessoPaginaLogin()
    registrarUsuario.checkRegistro()
    registrarUsuario.registrarusuario(usuarioDados.dadosCadatro.primeiroNome, 
          usuarioDados.dadosCadatro.ultimoNome, 
          usuarioDados.dadosCadatro.nickName, 
          String(usuarioDados.dadosCadatro.senha)
        )    
  });
});

describe('Login com sucesso', () => {
  it('Deve fazer login com um usuário válido', () => {
    paginaLogin.acessoPaginaLogin()
    paginaLogin.dadosUsuarioValidos(usuarioDados.dadosCadatro.nickName, usuarioDados.dadosCadatro.senha)
  });
});

describe('Conta de banco', () => {
  it('Apos loguin, criar uma conta no banco', () => {
    paginaLogin.acessoPaginaLogin()
    paginaLogin.dadosUsuarioValidos(usuarioDados.dadosCadatro.nickName, usuarioDados.dadosCadatro.senha)
    cadastroNovoBanco.criarContaBanco(usuarioDados.dadosBancarios.nomeBanco, 
      usuarioDados.dadosBancarios.numeroRoteamento, 
      usuarioDados.dadosBancarios.numeroConta)
  });
});

describe('Enviar dinheiro com saldo suficiente', () => {
  it('Enviar dinheiro com sucesso', () => {
    paginaLogin.acessoPaginaLogin()
    paginaLogin.dadosUsuarioValidos(usuarioDados.dadosCadatro.nickName, usuarioDados.dadosCadatro.senha)
    transferencia.novaTransferencia(usuarioDados.tranferencia.nomeParaTransferir, usuarioDados.tranferencia.montante, usuarioDados.tranferencia.nota)
  });
});


describe('Enviar dinheiro com saldo insuficiente', () => {
  it('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {
    paginaLogin.acessoPaginaLogin()
    paginaLogin.dadosUsuarioValidos(usuarioDados.dadosCadatro.nickName, usuarioDados.dadosCadatro.senha)
    transferencia.saldoInsuficiente()
  });
});

describe('Receber Transações', () => {
  it('Receber a ransferencias', () => {
    paginaLogin.acessoPaginaLogin()
    paginaLogin.dadosUsuarioValidos(usuarioDados.dadosCadatro.nickName, usuarioDados.dadosCadatro.senha)
    transferencia.receberTransferencia(usuarioDados.tranferencia.nomeParaTransferir, usuarioDados.tranferencia.montante, usuarioDados.tranferencia.nota)
  });
});


describe('Visualizar histórico de transações com sucesso', () => {
  it('Deve exibir o histórico de transações de um usuário corretamente', () => {
    paginaLogin.acessoPaginaLogin()
    paginaLogin.dadosUsuarioValidos(usuarioDados.dadosCadatro.nickName, usuarioDados.dadosCadatro.senha)
    transferencia.HistoricoTrasacao()
  });
});


describe('Tentar visualizar o histórico de transações sem transações anteriores', () => {
  it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
    paginaLogin.acessoPaginaLogin()
    paginaLogin.dadosUsuarioValidos(usuarioDados.dadosCadatro.nickName, usuarioDados.dadosCadatro.senha)
    transferencia.semHistoricoTrasacao()
  });
});
