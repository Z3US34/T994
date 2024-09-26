---
title: Actuadores en Sistemas Programables
layout: post
permalink: /actuadores/
background: '#3498db'

slides:
 - title: Actuadores Eléctricos
   slide-data: |
     Los actuadores eléctricos son dispositivos que convierten energía eléctrica en energía mecánica. Existen varios tipos, entre los que destacan:
     - **Motores eléctricos**: Transforman la energía eléctrica en movimiento rotativo.
     - **Servomotores**: Controlan la posición angular con alta precisión.
     - **Actuadores piezoeléctricos**: Usan la deformación de materiales piezoeléctricos para producir movimiento.
  
 - title: Funcionamiento
   slide-data: |
     Los actuadores eléctricos funcionan mediante la interacción entre campos electromagnéticos y componentes mecánicos. Ejemplos:
     - **Motores eléctricos**: Rotación de un rotor en un campo magnético.
     - **Solenoides**: Creación de un campo magnético que mueve un núcleo.
     - **Servomotores**: Control de retroalimentación para ajustar la posición.

 - title: Características
   slide-data: |
     Las características incluyen:
     - **Velocidad**: Capacidad de respuesta y rapidez en el movimiento.
     - **Precisión**: Exactitud en la posición o el movimiento.
     - **Torque**: Fuerza ejercida.
     - **Consumo energético**: Eficiencia energética.
     - **Tamaño**: Dimensiones y peso.

 - title: Modo de Comunicación
   slide-data: |
     Se comunican mediante:
     - **Protocolos de comunicación**: Modbus, CAN bus, Ethernet/IP.
     - **Señales de control**: Voltajes o pulsos de ancho variable (PWM).


---

{% for slide in page.slides %}
<section data-background="{% if slide.background %}{{slide.background}}{% else %}{{page.background}}{% endif %}">
  <h1>{{slide.title}}</h1>
  {{ slide.slide-data }}
</section>
{% endfor %}
    
