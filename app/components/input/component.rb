module Input
  class Component < ViewComponent::Base
    DEFAULT_INPUT_CLASSES = "block w-full px-4 py-4 pr-12 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-600/20 focus:border-brand-600 transition-all duration-200"

    def initialize(form: nil, field: nil, placeholder: nil, value: nil, type: "text", **options)
      @form = form
      @field = field
      @placeholder = placeholder
      @value = value
      @initial_type = type
      @options = options
    end

    private

    def input_html
      if @form.present? && @field.present?
        @form.public_send("#{input_type}_field", @field, input_options)
      else
        tag.input(**input_options.merge(type: input_type))
      end
    end

    def input_type
      @initial_type == "password" ? "password" : "text"
    end

    def input_options
      options = @options.dup
      options[:placeholder] ||= default_placeholder
      options[:value] = @value if @value.present?
      options[:class] = input_classes(options[:class])
      options[:data] = input_data(options[:data])
      options
    end

    def default_placeholder
      return @placeholder if @placeholder.present?
      return nil if @form.present?

      "Enter your text here"
    end

    def input_classes(custom_classes)
      return DEFAULT_INPUT_CLASSES if custom_classes.blank?

      "#{custom_classes} pr-12"
    end

    def input_data(data)
      data = (data || {}).dup
      data[:action] = [ data[:action], "input->input#verifyPassword" ].compact.join(" ")
      data
    end
  end
end
