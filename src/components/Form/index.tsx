import * as css from './styles';
import axios from 'axios';

const SubscriptionForm = (): JSX.Element => {

  async function subscribe (
    nome: string, email: string, whatsapp?: string
  ): Promise<void> {
    try {

      const { data, status } = await axios({
        method: 'post',
        url: 'http://localhost:8000/subscribe',
        headers: {'Content-Type': 'application/json; charset=UTF-8'},
        data: {nome, email, whatsapp}
      })
  
      if (status === 201 || status === 200 ) {
        alert('Sua inscrição foi realizada com sucesso!')
      } else {
        alert('Oops! Algo deu errado, tente novamente mais tarde!')
      }

    } catch (err) {
      console.log(err);
    }

  }

  function validateEmail(email: string): boolean {
    const validator = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (validator.test(email)) {
      return true;
    } else {
      return false;
    }
  }

  function handleWithForm(e: any): void {
    e.preventDefault();
    let nome = document.getElementById('subscription-form-nome') as HTMLInputElement
    let email = document.getElementById('subscription-form-email') as HTMLInputElement
    let whatsapp = document.getElementById('subscription-form-whatsapp') as HTMLInputElement

    if (nome && email) {

      if (nome.value && email.value) {
        
        if(validateEmail(email.value)) {
          subscribe(nome.value, email.value, whatsapp.value)
        } else {
          alert('Email inválido!')
        }

      } else {
        alert('Verifique se o nome e o email foram preenchidos corretamente!')
      }

    } else {
      alert('Dados incompletos!');
    }
  }

  return (
    <css.Container>
      <css.Placeholder onSubmit={handleWithForm}>
        <p>Entre na lista para ser avisado sobre o lançamento do curso</p>
        <input
          id="subscription-form-nome"
          placeholder="Nome"
          type="text"
          />

        <input
          id="subscription-form-email"
          placeholder="Email"
          type="text"
          />

        <input
          type="text"
          placeholder="Whatsapp (opcional)"
          id="subscription-form-whatsapp"
          />

        <button>
          Entrar na lista
        </button>
        <css.Image src={'/assets/images/bananinha.png'} />
      </css.Placeholder>
        </css.Container>
  )

}

export { SubscriptionForm };