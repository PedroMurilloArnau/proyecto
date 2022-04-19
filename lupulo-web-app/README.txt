for info of icons:
Like that:
example: sports_bar ---For a beer


https://fonts.google.com/icons?selected=Material+Icons

importamos para Flex-Layout la siguiente librería:

flex-layout:

npm install @angular/flex-layout --save

Posteriormente para utilizarlo en app.modules.ts
debemos de añadir:

    import { FlexLayoutModule } from '@angular/flex-layout';

y lo colocamos en los imports de dicho documento app.module.ts:

imports: [
    ...
    FlexLayoutModule,
    ...
]
-> Agregamos el modulo de formularios de angular para poder utilizarlo:
En nuestro archivo app.module.ts
    import { FormsModule } from '@angular/forms';

    y lo agregamos a inports:

    imports: [
    ...
    FormsModule,
    ...
]
-> Agregamos sistema de alerta si estamos logeados usando el componente
de sweetalert:


-> Instalamos para el calendario los siguientes compoenntes:

    npm i angular-calendario
    npm i @ng-bootstrap/ng-bootstrap
    npm i date-fns
    mpm i angularx-flatpickr
    npm i sweetalert2

-> Instalamos el siguiente material para realizar el carrusel:

    npm i igniteui-angular


