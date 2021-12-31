# Testing NodeJS API with jest and supertest

1. Install jest adn supertest as a dev dependency: npm i -D jest supertest
2. crear carpeta de test donde se colocaran archivos con extension '.test' o '.espec'

3. Crear archivo de test e importar modulo que se quiere testear
4. para ejecutar todos los tests ejecutar:

```terminal
set NODE_OPTIONS=--experimental-vm-modules && npx jest
```

**nota** 'set' no se usa en linux y mac

5. crear el script:

```json
  "scripts": {
    "test": "NODE_OPTIONS=--experimental-vm-modules jest"
  },
```

## GitHub Actions

Is a platform to atomate developer workflows, CI/CD is one of many workflows.
When something happens(github events) in or to repository automatic actions are exxecuted in response.

## How Github Actions automate these workflows

1. Listen to Event(PR, PR merged, issue created)
2. Trigger workflow ==> each small task that triggers in an event is going to a separate action

## Most common workflow for your repository would be CI/CD pipeline

commit code ==> test ==> build ==> push ==> deploy

## Just another CI/CD tool?

* use same tool instead of third-party integration
* setup the pipeline is easy
* tool for developers
