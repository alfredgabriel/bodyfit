export const scheduleData = {
  season: "2026/2027",
  gymOpenHours: [
    { daysEs: "Lunes a Viernes", daysEu: "Astelehenetik Ostiralera", daysEn: "Monday to Friday", hoursEs: "07:00 – 22:00", hoursEu: "07:00 – 22:00", hoursEn: "07:00 – 22:00" },
    { daysEs: "Sábados", daysEu: "Larunbatak", daysEn: "Saturdays", hoursEs: "09:00 – 14:00", hoursEu: "09:00 – 14:00", hoursEn: "09:00 – 14:00" },
    { daysEs: "Domingos y Festivos", daysEu: "Igande eta Jaiegunak", daysEn: "Sundays & Holidays", hoursEs: "Cerrado", hoursEu: "Itxita", hoursEn: "Closed" }
  ],
  actividadesFisicas: {
    manana: [
      {
        hora: "09:15 - 10:15",
        lunes: { name: "Funcional", sub: "Cardio & Fuerza", type: "funcional" },
        martes: null,
        miercoles: { name: "Funcional", sub: "Cardio & Fuerza", type: "funcional" },
        jueves: null,
        viernes: { name: "Funcional", sub: "Cardio & Fuerza", type: "funcional" },
        sabado: null
      },
      {
        hora: "09:30 - 10:25",
        lunes: null,
        martes: { name: "HIIT", sub: "Alta Int.", type: "hiit" },
        miercoles: null,
        jueves: { name: "HIIT", sub: "Alta Int.", type: "hiit" },
        viernes: null,
        sabado: null
      },
      {
        hora: "10:30 - 11:30",
        lunes: { name: "Funcional", sub: "Cardio & Fuerza", type: "funcional" },
        martes: null,
        miercoles: { name: "Funcional", sub: "Cardio & Fuerza", type: "funcional" },
        jueves: null,
        viernes: { name: "Funcional", sub: "Cardio & Fuerza", type: "funcional" },
        sabado: null
      },
      {
        hora: "12:00 - 13:00",
        lunes: { name: "Pilates", sub: "Core & Flex", type: "pilates" },
        martes: null,
        miercoles: { name: "Pilates", sub: "Core & Flex", type: "pilates" },
        jueves: null,
        viernes: null,
        sabado: null
      }
    ],
    tarde: [
      {
        hora: "17:15 - 18:15",
        lunes: null,
        martes: { name: "Zumba", sub: "Ritmo", type: "zumba" },
        miercoles: null,
        jueves: { name: "Zumba", sub: "Ritmo", type: "zumba" },
        viernes: null,
        sabado: null
      },
      {
        hora: "18:00 - 18:55",
        lunes: null,
        martes: { name: "HIIT", sub: "Alta Int.", type: "hiit" },
        miercoles: null,
        jueves: { name: "HIIT", sub: "Alta Int.", type: "hiit" },
        viernes: null,
        sabado: null
      },
      {
        hora: "19:00 - 20:00",
        lunes: { name: "Funcional", sub: "Cardio & Fuerza", type: "funcional" },
        martes: null,
        miercoles: { name: "Funcional", sub: "Cardio & Fuerza", type: "funcional" },
        jueves: null,
        viernes: { name: "Funcional", sub: "Cardio & Fuerza", type: "funcional" },
        sabado: null
      },
      {
        hora: "20:00 - 21:00",
        lunes: { name: "Funcional", sub: "Cardio & Fuerza", type: "funcional" },
        martes: null,
        miercoles: { name: "Funcional", sub: "Cardio & Fuerza", type: "funcional" },
        jueves: null,
        viernes: { name: "Funcional", sub: "Cardio & Fuerza", type: "funcional" },
        sabado: null
      },
      {
        hora: "20:30 - 21:30",
        lunes: null,
        martes: { name: "Pilates", sub: "Core & Flex", type: "pilates" },
        miercoles: null,
        jueves: { name: "Pilates", sub: "Core & Flex", type: "pilates" },
        viernes: null,
        sabado: null
      }
    ]
  },
  artesMarciales: {
    manana: [
      {
        hora: "10:30 - 12:00",
        lunes: null,
        martes: { name: "Grappling", sub: "No Gi", type: "grappling" },
        miercoles: null,
        jueves: { name: "Grappling", sub: "No Gi", type: "grappling" },
        viernes: null,
        sabado: null
      },
      {
        hora: "10:30 - 12:30",
        lunes: null,
        martes: null,
        miercoles: null,
        jueves: null,
        viernes: null,
        sabado: { name: "Open Mat", sub: "Libre", type: "openmat" }
      },
      {
        hora: "12:00 - 14:00",
        lunes: null,
        martes: null,
        miercoles: null,
        jueves: null,
        viernes: null,
        sabado: { name: "Open Mat", sub: "Libre", type: "openmat" }
      }
    ],
    tarde: [
      {
        hora: "17:30 - 18:30",
        lunes: { name: "Judo", sub: "Infantil", type: "judo" },
        martes: null,
        miercoles: { name: "Judo", sub: "Infantil", type: "judo" },
        jueves: null,
        viernes: { name: "Judo", sub: "Infantil", type: "judo" },
        sabado: null
      },
      {
        hora: "18:30 - 19:55",
        lunes: { name: "Jiu Jitsu", sub: "Con Gi", type: "bjj" },
        martes: null,
        miercoles: { name: "Jiu Jitsu", sub: "Con Gi", type: "bjj" },
        jueves: null,
        viernes: { name: "Jiu Jitsu", sub: "Con Gi", type: "bjj" },
        sabado: null
      },
      {
        hora: "19:00 - 20:25",
        lunes: null,
        martes: { name: "Grappling", sub: "No Gi", type: "grappling" },
        miercoles: null,
        jueves: { name: "Grappling", sub: "No Gi", type: "grappling" },
        viernes: null,
        sabado: null
      },
      {
        hora: "20:00 - 21:30",
        lunes: { name: "Muay Thai", sub: "Contacto", type: "muaythai" },
        martes: null,
        miercoles: { name: "Muay Thai", sub: "Contacto", type: "muaythai" },
        jueves: null,
        viernes: { name: "Muay Thai", sub: "Contacto", type: "muaythai" },
        sabado: null
      }
    ]
  }
};
