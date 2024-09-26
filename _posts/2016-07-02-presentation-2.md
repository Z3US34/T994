---
title: Mecanicos
layout: post
permalink: /mecanicos/

 
slides:
 - title: Actuadores mecanicos
   slide-data: |
     Utilizan componentes mecánicos para generar movimiento. Tipos comunes:
     - **Levas**: Movimiento rotativo a lineal.
     - **Engranajes**: Transmiten movimiento y fuerza.
     - **Cadenas y poleas**: Transmiten fuerza a distancias mayores.
   background: "#e74c3c"
     
 - title: Funcionamiento de Actuadores Mecanicos
   slide-data: |
    Conversión de un tipo de movimiento en otro. Ejemplos
     - **Levas**: Empujan un puntero al girar.
     - **Engranajes**: Rotación de un engranaje mueve a otro.
   background: '#f1c40f'
   
 - title: Características de Actuadores Mecánicos
   slide-data: |
    Incluyen:
    - **Durabilidad**: Resistencia al desgaste.
    - **Capacidad de carga**: Fuerza soportada.
    - **Reversibilidad**: Posibilidad de revertir movimiento.
    - **Mantenimiento**: Necesidades de lubricación.
   background: '#9b59b6'
   
 - title: Actuadores Hidráulicos
   slide-data: |
    Utilizan fluidos para generar movimiento. Tipos comunes:
     - **Cilindros hidráulicos**: Movimiento lineal.
     - **Motores hidráulicos**: Movimiento rotativo.
     - **Bombas hidráulicas**: Generan flujo de fluido.
   background: '#3498db'
   
 - title: Funcionamiento de Actuadores Hidráulicos
   slide-data: |
     Basado en el principio de Pascal, donde la presión se transmite uniformemente. Ejemplos:
     - **Cilindros hidráulicos**: Aumento de presión desplaza un vástago.
     - **Motores hidráulicos**: Utilizan presión para girar un rotor.

   background: '#2ecc71'
   
 - title: Características de Actuadores Hidráulicos
   slide-data: |
    Incluyen:
    - **Fuerza**: Generación de altas fuerzas.
    - **Control**: Precisión en el control de movimientos.
    - **Flexibilidad**: Operación en entornos difíciles.
   background: '#1abc9c'

 - title: Modo de Comunicación de Actuadores Hidráulicos
   slide-data: |
    Se comunican a través de:
    - **Válvulas de control**: Regulación de flujo y presión.
    - **Sensores de presión**: Monitoreo del sistema hidráulico.
   background: '#e67e22'
---

{% for slide in page.slides %}
                    
<section data-background="{% if slide.background %}{{slide.background}}{% else %}{{page.background}}{% endif %}"><h1>{{slide.title}}</h1>{{ slide.slide-data }}</section>
                    
{% endfor %}
    
