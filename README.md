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
