import { useEffect } from 'react';
import { useFormContext, Controller } from 'react-hook-form';

import InputMask from 'react-input-mask';

import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from 'phosphor-react';

import { useCart } from '@contexts/CartContext';
import { defaultTheme } from '@styles/themes/default';

import { CheckoutFormContainer, CheckboxContainer } from './styles';

export function CheckoutForm() {
  const { register, control, setValue } = useFormContext()

  const { typePayment, setTypePaymentValue } = useCart()

  async function checkCep(event: any) {
    const cep = event.target.value.replace(/\D/g, '')

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.json()).then((data) => {
      setValue('street', data.logradouro)
      setValue('neighborhood', data.bairro)
      setValue('city', data.localidade)
      setValue('state', data.uf)
    })
  }

  useEffect(() => {
    setValue('typePayment', typePayment)
  }, [typePayment])

  return (
    <CheckoutFormContainer>
      <h2>Complete seu pedido</h2>

      <div className="form-card">
        <div className="message-container">
          <MapPinLine size={22} color={defaultTheme['yellow-700']} />

          <div>
            <p className="title">Endereço de Entrega</p>

            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </div>

        <div className="form-row">
          <Controller
            control={control}
            name="cep"
            render={({
              field: { onChange, ref },
            }) => (
              <InputMask
                placeholder="CEP"
                mask="99.999-999"
                onBlur={checkCep}
                onChange={onChange}
                inputRef={ref}
              />
            )}
          />
        </div>

        <div className="form-row">
          <input
            {...register("street", {required: true})}
            placeholder="Rua"
            id="street"
          />
        </div>

        <div className="form-row">
          <input
            {...register("number", {required: true})}
            placeholder="Número"
            id="number"
          />
          <input
            {...register("complement")}
            placeholder="Complemento"
            id="complement"
          />
        </div>

        <div className="form-row">
          <input
            {...register("neighborhood", {required: true})}
            placeholder="Bairro"
            id="neighborhood"
          />
          <input
            {...register("city", {required: true})}
            placeholder="Cidade"
            id="city"
          />
          <input
            {...register("state", {required: true})}
            placeholder="Estado"
            id="state"
          />
        </div>
      </div>

      <div className="form-card">
        <div className="message-container">
          <CurrencyDollar  size={22} color={defaultTheme['purple-500']} />

          <div>
            <p className="title">Pagamento</p>

            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
          </div>
        </div>

        <div className="form-row">
          <CheckboxContainer
            onClick={() => setTypePaymentValue("Cartão de crédito")}
            active={typePayment === "Cartão de crédito"}
          >
            <CreditCard size={22} />
            <input
              type="checkbox"
              placeholder="Cartão de crédito"
              checked={typePayment === "Cartão de crédito"}
              name="Cartão de crédito"
              defaultChecked={typePayment === "Cartão de crédito"}
            />
            <label htmlFor="Cartão de crédito">Cartão de crédito</label>
          </CheckboxContainer>

          <CheckboxContainer
            onClick={() => setTypePaymentValue("Cartão de débito")}
            active={typePayment === "Cartão de débito"}
          >
            <Bank size={22} />
            <input
              type="checkbox"
              placeholder="Cartão de débito"
              checked={typePayment === "Cartão de débito"}
              name="debit"
              defaultChecked={typePayment === "Cartão de débito"}
            />
            <label htmlFor="debit">Cartão de débito</label>
          </CheckboxContainer>

          <CheckboxContainer
            onClick={() => setTypePaymentValue("Dinheiro")}
            active={typePayment === "Dinheiro"}
          >
            <Money size={22} />
            <input
              type="checkbox"
              placeholder="Dinheiro"
              checked={typePayment === "Dinheiro"}
              name="money"
              defaultChecked={typePayment === "Dinheiro"}
            />
            <label htmlFor="money">Dinheiro</label>
          </CheckboxContainer>
        </div>
      </div>
    </CheckoutFormContainer>
  )
}
