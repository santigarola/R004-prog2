README.txt

Proyecto: Festival TungaTunga! - Adaptación con Bootstrap y Foundation

Este archivo tiene algunas consideraciones importantes y cosas a tener en cuenta sobre cómo trabajamos con **Bootstrap** y **Foundation** en este proyecto. La idea es que sirva de guía rápida para cualquiera del grupo que quiera entender por qué tomamos algunas decisiones.

1) Consideraciones generales
-----------------------------
- Ambos frameworks nos ayudan a diseñar rápido, con grids, botones, cards y todo listo para que se vea bien sin reinventar la rueda.
- Son ideales para prototipos y para que el proyecto quede responsive sin complicarse demasiado.
- Hay que recordar que cada framework tiene su propia forma de hacer las cosas: lo que funciona en Bootstrap no siempre funciona igual en Foundation.

2) Bootstrap
-------------
Ventajas:
- Muy popular y fácil de encontrar ejemplos y tutoriales.
- Clases intuitivas para colores, grids, botones y navbars.
- Integración sencilla de iconos con Bootstrap Icons.

Desventajas / Cosas a tener en cuenta:
- A veces hay que memorizar muchas clases.
- El look se siente “Bootstrap” si no lo personalizamos con CSS.
- Si queremos modificar algo fuera de lo estándar, hay que usar CSS extra.

3) Foundation
-------------
Ventajas:
- Flexibilidad en grids y componentes, un poco más “liviano” en cuanto a dependencias.
- Buen soporte para diseños responsive y sticky navbars.
- Permite personalizar colores y estilos de forma sencilla si se usa Sass.

Desventajas / Cosas a tener en cuenta:
- Menos ejemplos y tutoriales que Bootstrap, a veces cuesta encontrar soluciones rápidas.
- No tiene tantos iconos nativos (hay que usar Foundation Icons o externos).
- Algunas clases son diferentes, hay que leer la documentación para no confundirse con Bootstrap.

4) Cosas importantes al trabajar en grupo
-----------------------------------------
- Siempre revisar qué framework estamos usando en cada archivo: mezclar clases de Bootstrap y Foundation puede generar conflictos de estilos.
- Mantener consistencia en colores, tipografías y tamaños de botones entre secciones.
- Revisar responsive en distintos dispositivos para asegurarse que los grids se comporten bien.
- Cuando hagamos modificaciones manuales (como colores o separaciones), tratar de usar clases del framework antes que CSS.

5) Recomendaciones
------------------
- Para cambios rápidos y prototipos: Bootstrap es más rápido de implementar.
- Para un proyecto que necesite más flexibilidad en grids y layout: Foundation puede dar más control.
- Hay que documentar cualquier cambio manual para que el resto del grupo lo entienda.

6) Aclaraciones
----------------
- Los colores, botones y paddings se ajustaron lo más posible para que ambos frameworks se vean parecidos, aunque siempre hay pequeñas diferencias visuales.
- Mirar la documentación oficial de cada framework ayuda un montón y nos evita romper cosas sin querer.
