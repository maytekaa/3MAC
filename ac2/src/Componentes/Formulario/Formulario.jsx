function Formulario(){
    return(
        <div>
            <h1 className="text-center">Formulário de Contato</h1>

            <p className="text-center">Entre em contato com nossa empresa!</p>

        <form/>
            <div className="mb-3">
              <label htmlFor="exampleInputName1" className="form-label">Qual é o seu nome?</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="nameHelp"/>
              <div id="nameHelp" className="form-text">Insira seu nome aqui</div>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Qual é o seu email?</label>
              <input type="email" className="form-control" id="exampleInputEmail1"/>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputText1" className="form-label">Faça aqui seu comentário</label>
                <input type="text" className="form-control" id="exampleInputText1"/>
              </div>
              
              <button type="submit" className="btn btn-primary">Enviar</button>
              
          </div>
        
    )
}

export default Formulario