import { test } from '@japa/runner'

test.group('Atualizar favorito', () => {
 test('atualizar favorito', async ({ client }) => {
  const resposta = await client.put('/favoritos/1').json (
    {nome:'Google Atualizado',
    url:"http://www.google.com.br",
    important: true
 })
  resposta.assertStatus(204)
  resposta.assertBodyContains({nome:'Google atualizado'})
  resposta.assertBodyContains({url: "http://www.google.com.br"})
  resposta.assertBodyContains({important: true})


 })
})
