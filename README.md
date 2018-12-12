Touka es un framework open source para la construcción de aplicaciones con react.

## instalacion
```bash
npm install touka

o

yarn add touka
```

## uso
En una applicacion react, puede ser una creada con 'create-react-app', simplemente importamos la funcion [renderApplication](docs/renderApplication.md) de touka, y le pasamos el objeto de configuración de la app.
En este objeto configuramos toda nuestra aplicación, y además, declaramos los modulos de los que compone nuestra aplicación.
```js
import renderApplication from 'touka';
import clients from './clients/module';
import ClientFile from './clients/pages/create-client-page';

renderApplication({
  defaultLanguage: "es",
  languages: ["es", "en"],
  modules: [
    clients
  ],
  config: {
    noMatchComponent: ClientFile
  }
});
```


