class Users::SessionsController < Devise::SessionsController
  # GET /resource/sign_in
  def new
    render inertia: "Auth/Login", props: {
      # Passar props úteis como mensagens de erro do Devise se houver
    }
  end

  # O Devise cuida do POST /login automaticamente,
  # mas se quiser customizar a resposta em caso de erro (para não tentar renderizar HTML),
  # você pode precisar sobrescrever o create ou configurar o respond_to.
end
