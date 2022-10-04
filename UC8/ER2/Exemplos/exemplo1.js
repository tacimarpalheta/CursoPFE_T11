/*regras para operadores de comparação
ao comparar duas coisas o resultado é booleano
(é utilizado para atribuição)
== p/ comparação (verifica se é igual)
=== p/ comparação (verifica se é identico, portanto mesmo tipo de dado e valor)
!= diferente
< menor
> maior
<= menor ou igual
>= maior ou igual
*/

/* operadores de atribuição
atribuição
+= (x+=y) é a mesma coisa que (x = x+y)
-= (x-=y) é a mesma coisa que (x = x-y)
*= (x*=y) é a mesma coisa que (x = x*y)
/= (x/=y) é a mesma coisa que (x = x/y)
*/


/*operadores lógicos
&& (e)
|| (ou)
! (negação)

Operador E
V && V = Verdadeiro
V && F = Falso
F && F = Falso
F && V = Falso
Posso definir que com o operador E a resposta apenas será verdadeira
se ambas as proposições forem verdadeiras

Operador OU
V || V = V
V || F = V
F || F = F
F || V = V
Posso definir que com o operador OU a resposta apenas será falsa
se ambas as proposições forem falsas.


*/

let x = false
//let y = true
let resultado = (!x)
console.log (resultado)