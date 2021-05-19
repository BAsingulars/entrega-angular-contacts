# Singulars Contacts

## Introducción

Aquí en SingularsLab, hemos descubierto que a los estudiantes les gusta tener una forma de llevar un registro de los contactos que hacen durante su experiencia en Singulars, para futuros proyectos, y para recordar viejos tiempos.

Vamos a crear una aplicación de gestión de contactos con Angular.

Puedes encontrar el código de inicio en la carpeta de código de inicio de este repo de GitHub.

## Requirements

- [Fork este repositorio](https://guides.github.com/activities/forking/)
- Debes presentar la aplicación angular completa


## Submission

Al terminar, deben estar subidos todos los commits en la rama
```
angularContacts
```

Entra en tu repo de gitHub y crea un pull request desde tu rama que contiene los commits con las funcionalidades a la rama maestra del repositorio original.

En el nombre del pull request, añade tu nombre y apellidos separados por un guión "-"


## Instrucciones

### Commit 1 | Mostrar contactos

Echemos un vistazo al código de inicio.

Hay un archivo con contactos fake, y la colección de contactos está siendo expuesta a la plantilla en una variable llamada `contacts`.

Usando `*ngFor`, muestra el `nombre`, `correo electrónico`, `número de teléfono` y `imagen` de cada contacto.


### Commit 2 | Añadir nuevo contacto


Actualmente, hay un formulario conectado a un `[(ngModel)]` llamado `newContact`.

Cuando un usuario hace clic en el botón debajo de este formulario, se *supone* que llama a una función llamada `addContact`.

Fíjate bien en la siguiente línea y mira si puedes detectar el error:

```html
<!-- contact-list.component.html -->
<button (click)="addContact">Subir nuevo contacto</button>
```

Luego, termina la función dentro del componente que añade el contacto a la lista de contactos:

```typescript
addContact(){
  // añade el contacto a la lista de contactos
  // limpiar las entradas
}
```

### Commit 3 | Borrar contacto

Ya tenemos la agenda completada. Ya nos muestra los contactos e incluso podemos añadir nuevos!

Podemos ir un paso más allá, e implementar la posibilidad de eliminar un contacto de la lista.

Cuando se haga clic en un botón eliminar de cada contacto, en la función javascript deberás obtener el id de ese contacto y utilizarlo para eliminarlo del array.


### Commit 4 | Estilo

Por desgracia, nuestra lista de contactos no está realmente preparada para la producción. Todavía no tiene mucho estilo.

Recuerda las reglas de estilo. Puedes añadir una hoja de estilo global en tu `index.html`, y aplicar estilos específicos de los componentes en los archivos `.component.css`.

Para facilitarte el trabajo de maquetación, se ha instalado bootstrap en este repositorio.

Tip: puedes crear un nuevo listado de contactos favoritos, y un buscador por orden alfabético, para enriquecer la interficie:

![Singulars logo](https://cdn.dribbble.com/users/965389/screenshots/10605728/media/952fd347fcdbcf6821df11d6b0999868.png)

