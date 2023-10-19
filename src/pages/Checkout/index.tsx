import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { useForm, FormProvider } from 'react-hook-form'

import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import { CheckoutForm, CheckoutProducts } from './components'

import { SubmittedContainer, SubmittedIconContainer, CheckoutContainer, IconContainer } from './styles'

import imgSuccess from '@assets/coffee-success.png'

import { defaultTheme } from '@styles/themes/default'
import { useCart } from '@contexts/CartContext'

interface IFormInput {
  cep: string
  street: string
  number: string
  complement: string
  neighborhood: string
  city: string
  state: string
  typePayment: string
}

export function Checkout() {
  const navigate = useNavigate()

  const newForm = useForm<IFormInput>({
    defaultValues: {
      cep: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
      typePayment: '',
    }
  })

  const { handleSubmit, reset } = newForm

  const { removeAllItemsFromCart, setTypePaymentValue } = useCart()

  const [formData, setFormData] = useState({} as IFormInput)

  const [isSubmitted, setIsSubmitted] = useState(false);

  function onSubmit(data: any) {
    setFormData(data)

    setIsSubmitted(true)

    setTimeout(() => {
      reset()

      setTypePaymentValue('')

      setIsSubmitted(false)

      removeAllItemsFromCart()

      navigate('/')
    }, 5000)
  }

  return (
    <>
      {isSubmitted ? (
        <SubmittedContainer>
          <div>
            <h2>Uhu! Pedido confirmado</h2>
            <p>Agora é só aguardar que logo o café chegará até você</p>

            <div className='submitted-info'>
              <SubmittedIconContainer>
                <IconContainer backgroundColor={defaultTheme['purple-500']}>
                  <MapPin size={20} weight="fill" />
                </IconContainer>

                <div>
                  <p>Entrega em <strong>{formData.street}, {formData.complement}</strong></p>
                  <p>{formData.neighborhood}, {formData.city} - {formData.state}</p>
                </div>
              </SubmittedIconContainer>

              <SubmittedIconContainer>
                <IconContainer backgroundColor={defaultTheme['yellow-500']}>
                  <Timer size={20} weight="fill" />
                </IconContainer>

                <div>
                  <p>Previsão de entrega</p>
                  <p><strong>20 a 30 minutos</strong></p>
                </div>
              </SubmittedIconContainer>

              <SubmittedIconContainer>
                <IconContainer backgroundColor={defaultTheme['yellow-700']}>
                  <CurrencyDollar size={20} weight="fill" />
                </IconContainer>

                <div>
                  <p>Pagamento na entrega</p>
                  <p><strong>{formData.typePayment}</strong></p>
                </div>
              </SubmittedIconContainer>
            </div>
          </div>

          <img src={imgSuccess} />
        </SubmittedContainer>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormProvider {...newForm}>
            <CheckoutContainer>
              <CheckoutForm />

              <CheckoutProducts />
            </CheckoutContainer>
          </FormProvider>
        </form>
      )}
    </>
  )
}
