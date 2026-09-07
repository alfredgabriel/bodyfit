/**
 * BodyFit Zorroza — Configuracion del sitio
 * ==========================================
 * Este archivo lo pueden editar Aaron o Johan sin tocar el codigo de la web.
 *
 * INSTRUCCIONES RAPIDAS:
 *  - Para poner un aviso: cambia aviso.activo a true y escribe el texto.
 *  - Para quitarlo: cambia aviso.activo a false.
 *  - Para cambiar horarios: edita horarioApertura y clases.
 *  - Para cambiar el email del formulario: cambia formEmail.
 */

const GYMCONFIG = {

  aviso: {
    activo: false,
    texto: "El gimnasio permanecera cerrado el 15 de septiembre por fiesta local. Reabrimos el 16 en horario normal.",
    tipo: "cierre"
  },

  formEmail: "bodyfitzorroza@gmail.com",

  horarioApertura: [
    { dias: "Lunes - Viernes", horas: "07:00 - 22:00" },
    { dias: "Sabados",         horas: "09:00 - 14:00" },
    { dias: "Domingos",        horas: "Cerrado"        }
  ],

  clases: [
    { hora: "09:30", tipo: "dirigida", lun: "",               mar: "Clases dirigidas", mie: "",               jue: "Clases dirigidas", vie: "",               sab: "Clases dirigidas" },
    { hora: "18:00", tipo: "bjj",      lun: "BJJ Juvenil",    mar: "",                 mie: "BJJ Juvenil",    jue: "",                 vie: "",               sab: "" },
    { hora: "19:00", tipo: "dirigida", lun: "Clases dirigidas", mar: "",               mie: "Clases dirigidas", jue: "",               vie: "Clases dirigidas", sab: "" },
    { hora: "19:30", tipo: "bjj",      lun: "",               mar: "BJJ Adultos",      mie: "",               jue: "BJJ Adultos",      vie: "",               sab: "" },
    { hora: "20:30", tipo: "bjj",      lun: "BJJ Adultos",    mar: "",                 mie: "BJJ Adultos",    jue: "",                 vie: "BJJ Adultos",    sab: "" }
  ],

  ratingGlobal: "4.9",
  totalResenas: 47,
  resenas: [
    {
      nombre: "Arantza García",
      texto: "El mejor gimnasio que hay en el barrio, de toda la vida y familiar, tiene para hacer de todo tanto máquinas, como artes marciales, judo, jiu jitsu, zumba, lo que uno quiera para ponerse en forma y lo que le guste, la verdad que la gente es maravillosa y Aaron te guiará en todo lo que quieras hacer, en resumidas cuentas, un buen gimnasio muy recomendable.",
      estrellas: 5
    },
    {
      nombre: "Gurutze Frías",
      texto: "Trato cercano, amable, familiar y muy profesional. La verdad es que he sido usuaria de otros gimnasios con instalaciones más modernas y más amplias pero no me he sentido tan cómoda como aquí. Mi pequeñín va a artes marciales y está encantado y yo que lo llevo con toda la confianza pues a los monitores se les nota que saben trabajar con peques y lo mejor de todo se nota que les gustan los niñ@s y hacen con dedicación su trabajo. Yo voy a máquinas y puedo decir más de lo mismo.",
      estrellas: 5
    },
    {
      nombre: "Noemí Gutiérrez Carrillo",
      texto: "Estuve solo un mes porque me estoy mudando, pero el ambiente es inmejorable. Además son muy atentos con los primerizos y torpes como yo. Es pequeño pero no tiene nada que envidiar a los gimnasios enormes que parecen bibliotecas porque todos van con cascos. ¡Una maravilla la verdad!",
      estrellas: 5
    }
  ]
};
