# TravelClientAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.0.

## Requisiti
- Angular
- NPM
- Node
- json-server per simulare il db back-end

## Crea nuovo progetto Angular
ng new fincons-academy --prefix fin --skip-git --skip-tests

## Fai partire l'app Angular
ng serve

## Albero di chiamata di un'app Angular
main.ts -> module.ts -> component1.ts
		     -> component2.ts
		     ...

## Creare un componente (dall'interno della sottocartella in cui si vuole creare il componente)
ng g c nome_componente --skip-tests

## Creare un modulo (dall'interno della sottocartella in cui si vuole creare il modulo)
ng g m nome_modulo

## Struttura di /app
-> features (contiene i moduli della nostra applicazione)
-> core
-> shared (con al suo interno /components e /model e shared.module.ts)

## Avvio json-server
json-server --watch /server/db.json
