# Fundación Red de Rescate Animal EC · Sitio web

Sitio estático (HTML, CSS y un poco de JavaScript, sin dependencias ni compilación) con cuatro páginas:

| Página | Archivo |
| --- | --- |
| Inicio | `index.html` |
| Animales en adopción | `adopta.html` |
| Cómo ayudar / donar | `ayuda.html` |
| Contacto | `contacto.html` |

Aplica el manual de marca v1.0: Azul Rescate `#2433E8`, Naranja Gatito `#FF8A2B`, Crema Hogar `#FFF3DE`, Tinta Noche `#12154D`, Cielo `#C7CCFF`; titulares en Pilcrow Rounded Heavy (mayúsculas, interlineado 0,9) y textos en Balsamiq Sans. El naranja se usa en formas y botones, no en texto pequeño.

## Verlo en tu computadora

Abre `index.html` en el navegador, o levanta un servidor local:

```sh
python3 -m http.server 8000
# luego abre http://localhost:8000
```

## Publicarlo gratis con GitHub Pages

En el repositorio: **Settings → Pages → Build and deployment → Deploy from a branch**, rama `main`, carpeta `/ (root)`. El sitio queda en `https://<usuario>.github.io/<repositorio>/`.

## Datos por completar

Buscar los textos entre corchetes `[...]` y reemplazarlos:

- `[CORREO]`, `[TELÉFONO]`, `[CIUDAD]`, `[DÍAS Y HORAS]` (pie de página y `contacto.html`). En `contacto.html` el correo también va en el atributo `data-correo` del formulario.
- Datos bancarios (`[BANCO]`, `[NÚMERO DE CUENTA]`, `[RUC]`…), punto de acopio y montos de ejemplo en `ayuda.html`.
- Respuestas de preguntas frecuentes marcadas con corchetes en `adopta.html`.

## Agregar o quitar animales

Cada animal es un bloque `<article class="animal">` en `adopta.html` (los tres primeros también aparecen en `index.html`). Los seis actuales son **ejemplos** marcados con `<!-- EJEMPLO -->`; reemplázalos por los reales.

- `data-especie`: `perro` o `gato` (lo usan los filtros).
- `data-etiquetas`: palabras separadas por espacio; `cachorro` y `mayor` activan esos filtros.
- Foto: guarda la imagen en `assets/img/` (idealmente 1200 px de ancho, JPG) y usa el bloque de Luna como modelo. Sin foto, usa el bloque "Foto próximamente".
- El botón lleva a `contacto.html?animal=Nombre`, que deja el formulario listo con el nombre del animal.

## Formulario de contacto

Hoy abre la aplicación de correo del visitante con el mensaje armado (no necesita servidor). Para recibir los mensajes directamente, se puede conectar un servicio como Formspree o Google Forms cambiando el `action` del formulario en `contacto.html`.

## Recursos

- `assets/img/isotipo-*.svg`: versiones del isotipo (color, negativo, tinta, blanco, reducido para favicon).
- `assets/fonts/`: Pilcrow Rounded (Indian Type Foundry, distribuida gratis en Fontshare). Balsamiq Sans se carga desde Google Fonts.
- Fotos tomadas del manual de marca.
