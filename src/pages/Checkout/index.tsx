import {
  AddressHeader,
  Bairro,
  CEP,
  CEPCONTAINER,
  Cidade,
  ClientInformationSection,
  Complemento,
  InformationContainer,
  InformationInputs,
  MainContainer,
  NoItemsSection,
  Número,
  Rua,
  UF,
} from './style'

import { MapPinLine, Plus, SpinnerGap, WifiSlash } from 'phosphor-react'

import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { onlyNumber } from '../../functions/onlyNumber'

import { useFetch } from '../../hooks/useFetch'
import { useContext, useEffect, useState } from 'react'
import { Aside } from './Aside'
import { OrderContext } from '../../contexts/OrderContext'
import { Payment } from './Payment'
import { NavLink, useNavigate } from 'react-router-dom'

interface Address {
  cep: string
  logradouro: string
  bairro: string
  localidade: string
  uf: string

  erro: boolean
}

interface ClientData {
  address: Address
  payment: 'CreditCard' | 'DebitCard' | 'Cash'
}

const newCepSchema = zod.string().regex(/^[0-9]{5}-[0-9]{3}$/)

const newCoffeeBuySchema = zod.object({
  address: zod.object({
    zipCode: zod.string().regex(/^[0-9]{5}-[0-9]{3}$/),
    num: zod.string().regex(/^[0-9]{1,5}$/),
    street: zod.string().regex(/^[a-zA-Z\s]+$/),
    complement: zod
      .string()
      .regex(/^[a-zA-Z\s]+$/)
      .optional()
      .or(zod.literal('')),
    district: zod
      .string()
      .regex(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/),
    town: zod.string().regex(/^[a-zA-Z\s]+$/),
    state: zod.string().regex(/^[A-Z]{2}$/),
  }),

  payment: zod.enum(['CreditCard', 'DebitCard', 'Cash']),
})

export function Checkout() {
  const { handleNewClientOrder, items } = useContext(OrderContext)

  const [cep, setCep] = useState<Address['cep'] | null>(null)

  const navigate = useNavigate()

  const { register, handleSubmit, setValue, resetField, getValues } = useForm({
    resolver: zodResolver(newCoffeeBuySchema),
    defaultValues: {
      address: {
        zipCode: '',
        num: '',
        street: '',
        complement: '',
        district: '',
        town: '',
        state: '',
      },
      payment: '',
    },
  })

  const {
    data: endereço,
    loading,
    isTimeout,
  } = useFetch<Address>(`https://viacep.com.br/ws/${cep}/json/`, cep)

  useEffect(() => {
    if (endereço != null) {
      setValue('address.street', endereço.logradouro)
      setValue('address.district', endereço.bairro)
      setValue('address.town', endereço.localidade)
      setValue('address.state', endereço.uf)
    } else {
      setValue('address.street', '')
      setValue('address.district', '')
      setValue('address.town', '')
      setValue('address.state', '')
    }
  }, [endereço, setValue, resetField, cep])

  function handlePaymetMethodChange(payment: ClientData['payment']) {
    setValue('payment', payment)
  }

  return (
    <MainContainer>
      {items.length > 0 ? (
        <form
          action="/sucess"
          onSubmit={handleSubmit(
            (data) => {
              const payment = getValues('payment')
              navigate('/sucess')
              const teste = getValues('address')
              console.log(teste)
              handleNewClientOrder({
                clientAddress: getValues('address'),
                date: new Date(),
                payment,
                items,
              })
            },
            (data) => {
              const teste = getValues()
              console.log(teste)
              console.log(data)
            },
          )}
        >
          <InformationContainer>
            <h1>Complete seu pedido</h1>
            <ClientInformationSection>
              <AddressHeader>
                <MapPinLine size={22} />
                <div>
                  <h2>Endereço de Entrega</h2>
                  <p>Informe o endereço onde deseja receber o seu pedido</p>
                </div>
              </AddressHeader>
              <InformationInputs>
                <CEPCONTAINER
                  color={
                    endereço?.erro || isTimeout
                      ? 'error'
                      : endereço?.cep
                      ? 'sucess'
                      : 'default'
                  }
                  animation={isTimeout ? 'static' : 'loading'}
                >
                  <CEP
                    id="cep"
                    type="text"
                    placeholder="CEP"
                    {...register('address.zipCode')}
                    onKeyUp={(data) => {
                      setCep(null)
                      const isCepValid = newCepSchema.safeParse(
                        (data.target as HTMLInputElement).value,
                      )
                      isCepValid.success && setCep(isCepValid.data)
                    }}
                    onBlur={(data) => {
                      if (cep === null) {
                        data.target.value = ''
                      }
                    }}
                    maxLength={9}
                    minLength={9}
                    onKeyPress={(data) => {
                      onlyNumber(data, {
                        length: 5,
                        caracter: '-',
                      })
                    }}
                  />
                  {loading && (
                    <label htmlFor="cep">
                      <SpinnerGap size={20} />
                    </label>
                  )}
                  {isTimeout ? (
                    <label htmlFor="cep">
                      <WifiSlash size={20} />
                    </label>
                  ) : null}
                </CEPCONTAINER>

                <Rua
                  type="text"
                  placeholder="Rua"
                  {...register('address.street')}
                  disabled
                />
                <Número
                  type="text"
                  placeholder="Número"
                  {...register('address.num')}
                  onKeyPress={(data) => {
                    onlyNumber(data)
                  }}
                />
                <Complemento
                  type="text"
                  placeholder="Complemento"
                  {...register('address.complement')}
                />
                <Bairro
                  type="text"
                  placeholder="Bairro"
                  {...register('address.district')}
                  disabled
                />
                <Cidade
                  type="text"
                  placeholder="Cidade"
                  defaultValue={endereço?.localidade}
                  {...register('address.town')}
                  disabled
                />
                <UF
                  type="text"
                  placeholder="UF"
                  defaultValue={endereço?.uf}
                  {...register('address.state')}
                  disabled
                />
              </InformationInputs>
            </ClientInformationSection>
            <Payment
              setPayment={handlePaymetMethodChange}
              {...register('payment')}
            />
          </InformationContainer>
          <Aside />
        </form>
      ) : (
        <NoItemsSection>
          <NavLink to="/">
            <Plus size={50} />
          </NavLink>
          <p>Seu carrinho está vazio</p>
        </NoItemsSection>
      )}
    </MainContainer>
  )
}
