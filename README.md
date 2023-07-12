#  Consumo de la Api

------------
**Este código utiliza la PokéAPI para obtener información sobre los primeros 150 Pokémon y muestra sus nombres, ID, imágenes y tipos en una lista.**
![(https://www.actualidadiphone.com/estos-los-pokemon-legendarios-exclusivos-pokemon-go/ "pokemon")](https://www.actualidadiphone.com/wp-content/uploads/2016/07/pokemon-pikachu-go.jpg "pokemon")
## Proceso de creación de la pokedex
1. Creacion del Header.
1. Funcionamiento Js.
1. Se establecen las variables en JS.
1. Se establece el ciclo for, como estructura de control para los 150 pokemones.
1. Luego, se crea un arreglo llamado promesas para almacenar las promesas resultantes de las solicitudes a la PokéAPI. Luego, se realiza una solicitud fetch() para cada URL y se agrega la promesa resultante al arreglo promesas.
1. Después de eso, se utiliza Promise.all() para esperar a que todas las promesas se resuelvan.
1. Finalmente, se llama a la función showPokemon() y se le pasa el arreglo pokemons. Esta función toma los datos de cada Pokémon y genera una cadena de HTML para mostrarlos en el elemento pokedex del documento HTML. Cada Pokémon se muestra en una tarjeta con su imagen, nombre y tipos.
