class Users::RegistrationsController < Devise::RegistrationsController
  # GET /users/sign_up
  # Exibe o formulário de cadastro
  def new
    render inertia: "Auth/Register", props: {
      # Você pode passar props aqui se precisar
    }
  end

  # POST /users
  # O Devise processa o cadastro automaticamente
  # Se houver erro, ele tenta renderizar HTML, então precisamos customizar
  def create
    build_resource(sign_up_params)

    resource.save
    yield resource if block_given?

    if resource.persisted?
      # Cadastro bem-sucedido
      if resource.active_for_authentication?
        sign_up(resource_name, resource)
        redirect_to after_sign_up_path_for(resource), inertia: { notice: "Cadastro realizado com sucesso!" }
      else
        expire_data_after_sign_in!
        redirect_to after_inactive_sign_up_path_for(resource), inertia: { notice: "Cadastro realizado! Verifique seu email." }
      end
    else
      # Erro no cadastro - retorna para o formulário com erros
      clean_up_passwords resource
      set_minimum_password_length

      render inertia: "Auth/Register", props: {
        errors: resource.errors.messages,
        user: {
          email: resource.email
        }
      }
    end
  end

  private

  def sign_up_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end
