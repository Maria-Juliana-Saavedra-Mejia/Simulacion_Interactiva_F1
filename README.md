# 🏎️ Proyecto Simulación Interactiva de Fórmula 1

## 📌 Introducción
La Fórmula 1 es una disciplina que combina velocidad, estrategia y tecnología de vanguardia, generando una experiencia emocionante tanto para los espectadores como para los equipos involucrados.  
Este proyecto tiene como objetivo desarrollar una **simulación interactiva de Fórmula 1** basada en tecnologías web modernas, permitiendo a los usuarios gestionar y personalizar su experiencia de carrera a través de un sistema dinámico de administración de **circuitos, pilotos y vehículos**.  

La aplicación está construida con **HTML5, CSS3, JavaScript y Web Components**, garantizando un diseño moderno, responsivo y modular. Además, incluye funcionalidades CRUD completas y almacenamiento de datos en el navegador.

---

## 🎯 Objetivos del Proyecto
El sistema busca ofrecer una plataforma interactiva donde los usuarios puedan:

- Administrar **circuitos de carrera**: agregar, editar, eliminar y buscar.  
- Gestionar **pilotos y vehículos** con atributos personalizados (velocidad, aceleración, desgaste de neumáticos, estrategias).  
- Configurar la simulación ajustando condiciones climáticas, reglajes y estrategias.  
- Implementar **persistencia de datos** con LocalStorage o IndexedDB.  

---

## ⚙️ Tecnologías Utilizadas
### Frontend
- **HTML5** → estructura semántica.  
- **CSS3** (Bootstrap o Tailwind si aplica) → diseño responsivo.  
- **JavaScript (ES6+)** → lógica del sistema y simulación.  

### Gestión de Datos
- **LocalStorage / SessionStorage** → persistencia local.  
- **IndexedDB** (opcional) → almacenamiento avanzado.  
- **Fetch API** → integración con APIs REST en versiones futuras.  

---

## 🔧 Funcionalidades CRUD
### Circuitos
- Agregar, editar, eliminar y buscar circuitos.  
- Ver longitud, vueltas, récords de vuelta y ganadores históricos.  

### Pilotos
- Registrar nuevos pilotos (nombre, equipo, rol).  
- Modificar o eliminar pilotos existentes.  
- Búsqueda y visualización de estadísticas.  

### Vehículos
- Crear y personalizar autos (velocidad, aceleración, consumo, desgaste).  
- Editar configuraciones de vehículos.  
- Asignar pilotos a vehículos según el equipo.  

---

## 📊 Estructura de Datos
El sistema se apoya en objetos JSON predefinidos como:

- **Pilotos**  
- **Equipos**  
- **Circuitos**  
- **Vehículos**  
 
```
[
  {
    "pilotos": [
      {
        "id": "63",
        "nombre": "George Russell",
        "equipo": "Mercedes",
        "rol": "líder",
        "fechaNacimiento": "15-02-1998",
        "lugarNacimiento": "King's Lynn, Reino Unido",
        "foto": "https://www.formula1.com/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png"
      },
      {
        "id": "87",
        "nombre": "Andrea Kimi Antonelli",
        "equipo": "Mercedes",
        "rol": "escudero",
        "fechaNacimiento": "25-08-2006",
        "lugarNacimiento": "Bolonia, Italia",
        "foto": "https://soymotor.com/sites/default/files/2025-03/kantonelli_2025.png"
      },
      {
        "id": "1",
        "nombre": "Max Verstappen",
        "equipo": "Red Bull Racing",
        "rol": "líder",
        "fechaNacimiento": "30-09-1997",
        "lugarNacimiento": "Hasselt, Bélgica",
        "foto": "https://www.formula1.com/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png"
      },
      {
        "id": "22",
        "nombre": "Yuki Tsunoda",
        "equipo": "VCARB",
        "rol": "líder",
        "fechaNacimiento": "11-05-2000",
        "lugarNacimiento": "Sagamihara, Japón",
        "foto": "https://www.formula1.com/content/dam/fom-website/drivers/Y/YUKTSU01_Yuki_Tsunoda/yuktsu01.png"
      },
      {
        "id": "4",
        "nombre": "Lando Norris",
        "equipo": "McLaren",
        "rol": "líder",
        "fechaNacimiento": "13-11-1999",
        "lugarNacimiento": "Bristol, Reino Unido",
        "foto": "https://soymotor.com/sites/default/files/2025-03/lnorris_2025.png"
      },
      {
        "id": "81",
        "nombre": "Oscar Piastri",
        "equipo": "McLaren",
        "rol": "escudero",
        "fechaNacimiento": "06-04-2001",
        "lugarNacimiento": "Melbourne, Australia",
        "foto": "https://www.formula1.com/content/dam/fom-website/drivers/O/OSCPIA01_Oscar_Piastri/oscpia01.png"
      },
      {
        "id": "14",
        "nombre": "Fernando Alonso",
        "equipo": "Aston Martin",
        "rol": "líder",
        "fechaNacimiento": "29-07-1981",
        "lugarNacimiento": "Oviedo, España",
        "foto": "https://www.formula1.com/content/dam/fom-website/drivers/F/FERALO01_Fernando_Alonso/feralo01.png"
      },
      {
        "id": "18",
        "nombre": "Lance Stroll",
        "equipo": "Aston Martin",
        "rol": "escudero",
        "fechaNacimiento": "29-10-1998",
        "lugarNacimiento": "Montreal, Canadá",
        "foto": "https://www.formula1.com/content/dam/fom-website/drivers/L/LANSTR01_Lance_Stroll/lanstr01.png"
      },
      {
        "id": "10",
        "nombre": "Pierre Gasly",
        "equipo": "Alpine",
        "rol": "escudero",
        "fechaNacimiento": "07-02-1996",
        "lugarNacimiento": "Rouen, Francia",
        "foto": "https://www.formula1.com/content/dam/fom-website/drivers/P/PIEGAS01_Pierre_Gasly/piegas01.png"
      },
      {
        "id": "29",
        "nombre": "Franco Colapinto",
        "equipo": "Williams",
        "rol": "escudero",
        "fechaNacimiento": "27-05-2003",
        "lugarNacimiento": "Buenos Aires, Argentina",
        "foto": "https://soymotor.com/sites/default/files/2025-05/franco-colapinto-2025-soymotor.png"
      },
      {
        "id": "16",
        "nombre": "Charles Leclerc",
        "equipo": "Ferrari",
        "rol": "escudero",
        "fechaNacimiento": "16-10-1997",
        "lugarNacimiento": "Montecarlo, Mónaco",
        "foto": "https://www.formula1.com/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png"
      },
      {
        "id": "44",
        "nombre": "Lewis Hamilton",
        "equipo": "Ferrari",
        "rol": "líder",
        "fechaNacimiento": "07-01-1985",
        "lugarNacimiento": "Stevenage, Reino Unido",
        "foto": "https://www.formula1.com/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png"
      },
      {
        "id": "40",
        "nombre": "Liam Lawson",
        "equipo": "VCARB",
        "rol": "escudero",
        "fechaNacimiento": "11-02-2002",
        "lugarNacimiento": "Hastings, Nueva Zelanda",
        "foto": "https://soymotor.com/sites/default/files/2025-03/liam-lawson-racing-bulls-2025.png"
      },
      {
        "id": "32",
        "nombre": "Isack Hadjar",
        "equipo": "Red Bull Racing",
        "rol": "escudero",
        "fechaNacimiento": "28-09-2004",
        "lugarNacimiento": "París, Francia",
        "foto": "https://soymotor.com/sites/default/files/2025-03/ihadjar_2025.png"
      },
      {
        "id": "27",
        "nombre": "Nico Hulkenberg",
        "equipo": "Sauber",
        "rol": "líder",
        "fechaNacimiento": "19-08-1987",
        "lugarNacimiento": "Emmerich am Rhein, Alemania",
        "foto": "https://www.formula1.com/content/dam/fom-website/drivers/N/NICHUL01_Nico_Hulkenberg/nichul01.png"
      },
      {
        "id": "50",
        "nombre": "Gabriel Bortoleto",
        "equipo": "Sauber",
        "rol": "escudero",
        "fechaNacimiento": "14-10-2004",
        "lugarNacimiento": "São Paulo, Brasil",
        "foto": "https://soymotor.com/sites/default/files/2025-03/gbortoleto_2025.png"
      },
      {
        "id": "38",
        "nombre": "Oliver Bearman",
        "equipo": "Haas",
        "rol": "escudero",
        "fechaNacimiento": "08-05-2005",
        "lugarNacimiento": "Chelmsford, Reino Unido",
        "foto": "https://www.formula1.com/content/dam/fom-website/drivers/O/OLIBEA01_Oliver_Bearman/olibea01.png"
      },
      {
        "id": "31",
        "nombre": "Esteban Ocon",
        "equipo": "Haas",
        "rol": "líder",
        "fechaNacimiento": "17-09-1996",
        "lugarNacimiento": "Évreux, Francia",
        "foto": "https://www.formula1.com/content/dam/fom-website/drivers/E/ESTOCO01_Esteban_Ocon/estoco01.png"
      },
      {
        "id": "23",
        "nombre": "Alex Albon",
        "equipo": "Williams",
        "rol": "líder",
        "fechaNacimiento": "23-03-1996",
        "lugarNacimiento": "Londres, Reino Unido",
        "foto": "https://www.formula1.com/content/dam/fom-website/drivers/A/ALEALB01_Alexander_Albon/alealb01.png"
      },
      {
        "id": "55",
        "nombre": "Carlos Sainz",
        "equipo": "Alpine",
        "rol": "líder",
        "fechaNacimiento": "01-09-1994",
        "lugarNacimiento": "Madrid, España",
        "foto": "https://www.formula1.com/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png"
      }
    ],
    "escuderias": [
      {
        "id": "1",
        "nombre": "Mercedes-AMG Petronas F1 Team",
        "pais": "Alemania",
        "motor": "Mercedes",
        "pilotos": [
          "63",
          "87"
        ],
        "escudo": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Mercedes-Benz_Star.svg/1200px-Mercedes-Benz_Star.svg.png"
      },
      {
        "id": "2",
        "nombre": "Oracle Red Bull Racing",
        "pais": "Austria",
        "motor": "Honda RBPT",
        "pilotos": [
          "1",
          "32"
        ],
        "escudo": "https://i.pinimg.com/736x/94/09/9e/94099e6980e9854ff0cc6d84f2bc7ad1.jpg"
      },
      {
        "id": "3",
        "nombre": "McLaren Formula 1 Team",
        "pais": "Reino Unido",
        "motor": "Mercedes",
        "pilotos": [
          "4",
          "81"
        ],
        "escudo": "https://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/4140.png"
      },
      {
        "id": "4",
        "nombre": "Scuderia Ferrari",
        "pais": "Italia",
        "motor": "Ferrari",
        "pilotos": [
          "16",
          "44"
        ],
        "escudo": "https://i.pinimg.com/736x/e9/e2/b1/e9e2b1d27b27c6ac12dc8174147a5516.jpg"
      },
      {
        "id": "5",
        "nombre": "Aston Martin Aramco F1 Team",
        "pais": "Reino Unido",
        "motor": "Mercedes",
        "pilotos": [
          "14",
          "18"
        ],
        "escudo": "https://d22fxaf9t8d39k.cloudfront.net/bc0760688cf40741751723b232a404751bc9de371eb2aec1e25e39dc22a3f4bb296785.png"
      },
      {
        "id": "6",
        "nombre": "Alpine F1 Team",
        "pais": "Francia",
        "motor": "Renault",
        "pilotos": [
          "10",
          "55"
        ],
        "escudo": "https://brandlogos.net/wp-content/uploads/2022/08/alpine_logomark-logo_brandlogos.net_pzhvz.png"
      },
      {
        "id": "7",
        "nombre": "Williams Racing",
        "pais": "Reino Unido",
        "motor": "Mercedes",
        "pilotos": [
          "23",
          "29"
        ],
        "escudo": "https://styles.redditmedia.com/t5_31z23/styles/communityIcon_hpjo554d6oj81.png"
      },
      {
        "id": "8",
        "nombre": "Visa Cash App RB Formula One Team",
        "pais": "Italia",
        "motor": "Honda RBPT",
        "pilotos": [
          "22",
          "40"
        ],
        "escudo": "https://sportsbase.io/images/gpfans/copy_205x205/3a5451141d8fe88c6959a15a9ba7e6a2b59e142c.png"
      },
      {
        "id": "9",
        "nombre": "Kick Sauber F1 Team",
        "pais": "Suiza",
        "motor": "Ferrari",
        "pilotos": [
          "27",
          "50"
        ],
        "escudo": "https://i.namu.wiki/i/M2DRCcTYlEVr82u-N5ggwF2VtxLxzEwqiouKWpQfWgUr2qTV_9BSNBwDZEInzcM6Y945X3YCpHoQZ8f0pC5TXQ.svg"
      },
      {
        "id": "10",
        "nombre": "MoneyGram Haas F1 Team",
        "pais": "Estados Unidos",
        "motor": "Ferrari",
        "pilotos": [
          "31",
          "38"
        ],
        "escudo": "https://images.squarespace-cdn.com/content/v1/52ddf807e4b026c919e68972/9d177c57-9520-4b76-8def-0fc58ffb1557/MGHF1-icon.png"
      }
    ],
    "vehiculos": [
      {
        "id": "1",
        "equipo": "Mercedes-AMG Petronas F1 Team",
        "modelo": "W16",
        "motor": "Mercedes",
        "velocidad_maxima_kmh": 355,
        "aceleracion_0_100": 2.6,
        "pilotos": [
          "63",
          "87"
        ],
        "rendimiento": {
          "conduccion_normal": {
            "velocidad_promedio_kmh": 318,
            "consumo_combustible": {
              "seco": 1.8,
              "lluvioso": 2,
              "extremo": 2.3
            },
            "desgaste_neumaticos": {
              "seco": 1.4,
              "lluvioso": 0.7,
              "extremo": 2.4
            }
          },
          "conduccion_agresiva": {
            "velocidad_promedio_kmh": 338,
            "consumo_combustible": {
              "seco": 2.3,
              "lluvioso": 2.5,
              "extremo": 2.9
            },
            "desgaste_neumaticos": {
              "seco": 2.1,
              "lluvioso": 1.1,
              "extremo": 3.3
            }
          },
          "ahorro_combustible": {
            "velocidad_promedio_kmh": 298,
            "consumo_combustible": {
              "seco": 1.5,
              "lluvioso": 1.7,
              "extremo": 2
            },
            "desgaste_neumaticos": {
              "seco": 0.9,
              "lluvioso": 0.4,
              "extremo": 1.7
            }
          }
        },
        "imagen": "https://mexicogp.s3.us-west-2.amazonaws.com/wp-content/uploads/2025/03/26053145/0001-mercedes-right-profile.png"
      },
      {
        "id": "2",
        "equipo": "Oracle Red Bull Racing",
        "modelo": "RB20",
        "motor": "Honda RBPT",
        "velocidad_maxima_kmh": 360,
        "aceleracion_0_100": 2.5,
        "pilotos": [
          "1",
          "32"
        ],
        "rendimiento": {
          "conduccion_normal": {
            "velocidad_promedio_kmh": 320,
            "consumo_combustible": {
              "seco": 1.9,
              "lluvioso": 2.1,
              "extremo": 2.4
            },
            "desgaste_neumaticos": {
              "seco": 1.5,
              "lluvioso": 0.8,
              "extremo": 2.5
            }
          },
          "conduccion_agresiva": {
            "velocidad_promedio_kmh": 340,
            "consumo_combustible": {
              "seco": 2.4,
              "lluvioso": 2.6,
              "extremo": 3
            },
            "desgaste_neumaticos": {
              "seco": 2.2,
              "lluvioso": 1.2,
              "extremo": 3.5
            }
          },
          "ahorro_combustible": {
            "velocidad_promedio_kmh": 300,
            "consumo_combustible": {
              "seco": 1.6,
              "lluvioso": 1.8,
              "extremo": 2.1
            },
            "desgaste_neumaticos": {
              "seco": 1,
              "lluvioso": 0.5,
              "extremo": 1.8
            }
          }
        },
        "imagen": "https://www.lego.com/cdn/cs/set/assets/bltca542b859ace5383/42206_Prod_en-gb.png"
      },
      {
        "id": "3",
        "equipo": "McLaren Formula 1 Team",
        "modelo": "MCL39",
        "motor": "Mercedes",
        "velocidad_maxima_kmh": 358,
        "aceleracion_0_100": 2.55,
        "pilotos": [
          "4",
          "81"
        ],
        "rendimiento": {
          "conduccion_normal": {
            "velocidad_promedio_kmh": 319,
            "consumo_combustible": {
              "seco": 1.85,
              "lluvioso": 2.05,
              "extremo": 2.35
            },
            "desgaste_neumaticos": {
              "seco": 1.45,
              "lluvioso": 0.75,
              "extremo": 2.45
            }
          },
          "conduccion_agresiva": {
            "velocidad_promedio_kmh": 339,
            "consumo_combustible": {
              "seco": 2.35,
              "lluvioso": 2.55,
              "extremo": 2.95
            },
            "desgaste_neumaticos": {
              "seco": 2.15,
              "lluvioso": 1.15,
              "extremo": 3.4
            }
          },
          "ahorro_combustible": {
            "velocidad_promedio_kmh": 299,
            "consumo_combustible": {
              "seco": 1.55,
              "lluvioso": 1.75,
              "extremo": 2.05
            },
            "desgaste_neumaticos": {
              "seco": 0.95,
              "lluvioso": 0.45,
              "extremo": 1.75
            }
          }
        },
        "imagen": "https://i.namu.wiki/i/u0Msh0x1_FH2BADNENXJ4DUCJ6JjT8mcedhZrMjFr5hSCKi2vfT0vxAhS-SFdOD855ntQd9OEAIHHyOGxJi4BA.webp"
      },
      {
        "id": "4",
        "equipo": "Scuderia Ferrari",
        "modelo": "SF-25",
        "motor": "Ferrari",
        "velocidad_maxima_kmh": 356,
        "aceleracion_0_100": 2.58,
        "pilotos": [
          "16",
          "44"
        ],
        "rendimiento": {
          "conduccion_normal": {
            "velocidad_promedio_kmh": 317,
            "consumo_combustible": {
              "seco": 1.95,
              "lluvioso": 2.15,
              "extremo": 2.45
            },
            "desgaste_neumaticos": {
              "seco": 1.6,
              "lluvioso": 0.85,
              "extremo": 2.6
            }
          },
          "conduccion_agresiva": {
            "velocidad_promedio_kmh": 337,
            "consumo_combustible": {
              "seco": 2.45,
              "lluvioso": 2.65,
              "extremo": 3.05
            },
            "desgaste_neumaticos": {
              "seco": 2.3,
              "lluvioso": 1.25,
              "extremo": 3.6
            }
          },
          "ahorro_combustible": {
            "velocidad_promedio_kmh": 297,
            "consumo_combustible": {
              "seco": 1.65,
              "lluvioso": 1.85,
              "extremo": 2.15
            },
            "desgaste_neumaticos": {
              "seco": 1.1,
              "lluvioso": 0.55,
              "extremo": 1.9
            }
          }
        },
        "imagen": "https://i.namu.wiki/i/uvZh__iIjeZQrLP_CrEcPVe0ImpAODVLrkaXBc93Ogt3PJtaYsz2j0VDGPemcswnzyiCS7l2hiLqAsUwg9tC_w.webp"
      },
      {
        "id": "5",
        "equipo": "Aston Martin Aramco F1 Team",
        "modelo": "AMR25",
        "motor": "Mercedes",
        "velocidad_maxima_kmh": 350,
        "aceleracion_0_100": 2.7,
        "pilotos": [
          "14",
          "18"
        ],
        "rendimiento": {
          "conduccion_normal": {
            "velocidad_promedio_kmh": 315,
            "consumo_combustible": {
              "seco": 1.9,
              "lluvioso": 2.1,
              "extremo": 2.4
            },
            "desgaste_neumaticos": {
              "seco": 1.55,
              "lluvioso": 0.8,
              "extremo": 2.55
            }
          },
          "conduccion_agresiva": {
            "velocidad_promedio_kmh": 335,
            "consumo_combustible": {
              "seco": 2.4,
              "lluvioso": 2.6,
              "extremo": 3
            },
            "desgaste_neumaticos": {
              "seco": 2.25,
              "lluvioso": 1.2,
              "extremo": 3.55
            }
          },
          "ahorro_combustible": {
            "velocidad_promedio_kmh": 295,
            "consumo_combustible": {
              "seco": 1.6,
              "lluvioso": 1.8,
              "extremo": 2.1
            },
            "desgaste_neumaticos": {
              "seco": 1.05,
              "lluvioso": 0.5,
              "extremo": 1.85
            }
          }
        },
        "imagen": "https://media.formula1.com/content/dam/fom-website/teams/2023/teamcar-astonmartin.png.transform/4col/image.png"
      },
      {
        "id": "6",
        "equipo": "Alpine F1 Team",
        "modelo": "A525",
        "motor": "Renault",
        "velocidad_maxima_kmh": 348,
        "aceleracion_0_100": 2.75,
        "pilotos": [
          "10",
          "55"
        ],
        "rendimiento": {
          "conduccion_normal": {
            "velocidad_promedio_kmh": 312,
            "consumo_combustible": {
              "seco": 1.95,
              "lluvioso": 2.15,
              "extremo": 2.45
            },
            "desgaste_neumaticos": {
              "seco": 1.65,
              "lluvioso": 0.9,
              "extremo": 2.65
            }
          },
          "conduccion_agresiva": {
            "velocidad_promedio_kmh": 332,
            "consumo_combustible": {
              "seco": 2.45,
              "lluvioso": 2.65,
              "extremo": 3.05
            },
            "desgaste_neumaticos": {
              "seco": 2.35,
              "lluvioso": 1.3,
              "extremo": 3.65
            }
          },
          "ahorro_combustible": {
            "velocidad_promedio_kmh": 292,
            "consumo_combustible": {
              "seco": 1.65,
              "lluvioso": 1.85,
              "extremo": 2.15
            },
            "desgaste_neumaticos": {
              "seco": 1.15,
              "lluvioso": 0.6,
              "extremo": 1.95
            }
          }
        },
        "imagen": "https://mexicogp.s3.us-west-2.amazonaws.com/wp-content/uploads/2025/03/26053205/0008-alpine-right-profile.png"
      },
      {
        "id": "7",
        "equipo": "Williams Racing",
        "modelo": "FW46",
        "motor": "Mercedes",
        "velocidad_maxima_kmh": 347,
        "aceleracion_0_100": 2.8,
        "pilotos": [
          "23",
          "29"
        ],
        "rendimiento": {
          "conduccion_normal": {
            "velocidad_promedio_kmh": 310,
            "consumo_combustible": {
              "seco": 1.95,
              "lluvioso": 2.15,
              "extremo": 2.45
            },
            "desgaste_neumaticos": {
              "seco": 1.7,
              "lluvioso": 0.95,
              "extremo": 2.7
            }
          },
          "conduccion_agresiva": {
            "velocidad_promedio_kmh": 330,
            "consumo_combustible": {
              "seco": 2.45,
              "lluvioso": 2.65,
              "extremo": 3.05
            },
            "desgaste_neumaticos": {
              "seco": 2.4,
              "lluvioso": 1.35,
              "extremo": 3.7
            }
          },
          "ahorro_combustible": {
            "velocidad_promedio_kmh": 290,
            "consumo_combustible": {
              "seco": 1.65,
              "lluvioso": 1.85,
              "extremo": 2.15
            },
            "desgaste_neumaticos": {
              "seco": 1.2,
              "lluvioso": 0.65,
              "extremo": 2
            }
          }
        },
        "imagen": "https://i0.wp.com/cordobacompeticion.com/wp-content/uploads/2024/10/f4731c19feeee456bcf40f7290233994c27f90fd-3840x2160-1-scaled.webp?ssl=1"
      },
      {
        "id": "8",
        "equipo": "Visa Cash App RB Formula One Team",
        "modelo": "VCARB01",
        "motor": "Honda RBPT",
        "velocidad_maxima_kmh": 345,
        "aceleracion_0_100": 2.85,
        "pilotos": [
          "22",
          "40"
        ],
        "rendimiento": {
          "conduccion_normal": {
            "velocidad_promedio_kmh": 308,
            "consumo_combustible": {
              "seco": 2,
              "lluvioso": 2.2,
              "extremo": 2.5
            },
            "desgaste_neumaticos": {
              "seco": 1.75,
              "lluvioso": 1,
              "extremo": 2.75
            }
          },
          "conduccion_agresiva": {
            "velocidad_promedio_kmh": 328,
            "consumo_combustible": {
              "seco": 2.5,
              "lluvioso": 2.7,
              "extremo": 3.1
            },
            "desgaste_neumaticos": {
              "seco": 2.45,
              "lluvioso": 1.4,
              "extremo": 3.75
            }
          },
          "ahorro_combustible": {
            "velocidad_promedio_kmh": 288,
            "consumo_combustible": {
              "seco": 1.7,
              "lluvioso": 1.9,
              "extremo": 2.2
            },
            "desgaste_neumaticos": {
              "seco": 1.25,
              "lluvioso": 0.7,
              "extremo": 2.05
            }
          }
        },
        "imagen": "https://soymotor.com/sites/default/files/styles/team_desk/public/2024-02/silueta-rb-vcarb-01-soymotor.png.webp?itok=YO6MrY98"
      },
      {
        "id": "9",
        "equipo": "Kick Sauber F1 Team",
        "modelo": "C44",
        "motor": "Ferrari",
        "velocidad_maxima_kmh": 340,
        "aceleracion_0_100": 2.9,
        "pilotos": [
          "27",
          "50"
        ],
        "rendimiento": {
          "conduccion_normal": {
            "velocidad_promedio_kmh": 305,
            "consumo_combustible": {
              "seco": 2.05,
              "lluvioso": 2.25,
              "extremo": 2.55
            },
            "desgaste_neumaticos": {
              "seco": 1.8,
              "lluvioso": 1.05,
              "extremo": 2.8
            }
          },
          "conduccion_agresiva": {
            "velocidad_promedio_kmh": 325,
            "consumo_combustible": {
              "seco": 2.55,
              "lluvioso": 2.75,
              "extremo": 3.15
            },
            "desgaste_neumaticos": {
              "seco": 2.5,
              "lluvioso": 1.45,
              "extremo": 3.8
            }
          },
          "ahorro_combustible": {
            "velocidad_promedio_kmh": 285,
            "consumo_combustible": {
              "seco": 1.75,
              "lluvioso": 1.95,
              "extremo": 2.25
            },
            "desgaste_neumaticos": {
              "seco": 1.3,
              "lluvioso": 0.75,
              "extremo": 2.1
            }
          }
        },
        "imagen": "https://i.namu.wiki/i/ZW3GqENVTayf_H23V53vTG1pSgxH6rmXoijKlGT86acu-UpkCpqmmrDlXML5RVrvxb30oGrlMFQO_Cu4Som7_g.webp"
      },
      {
        "id": "10",
        "equipo": "MoneyGram Haas F1 Team",
        "modelo": "VF-24",
        "motor": "Ferrari",
        "velocidad_maxima_kmh": 338,
        "aceleracion_0_100": 2.95,
        "pilotos": [
          "31",
          "38"
        ],
        "rendimiento": {
          "conduccion_normal": {
            "velocidad_promedio_kmh": 303,
            "consumo_combustible": {
              "seco": 2.1,
              "lluvioso": 2.3,
              "extremo": 2.6
            },
            "desgaste_neumaticos": {
              "seco": 1.85,
              "lluvioso": 1.1,
              "extremo": 2.85
            }
          },
          "conduccion_agresiva": {
            "velocidad_promedio_kmh": 323,
            "consumo_combustible": {
              "seco": 2.6,
              "lluvioso": 2.8,
              "extremo": 3.2
            },
            "desgaste_neumaticos": {
              "seco": 2.55,
              "lluvioso": 1.5,
              "extremo": 3.85
            }
          },
          "ahorro_combustible": {
            "velocidad_promedio_kmh": 283,
            "consumo_combustible": {
              "seco": 1.8,
              "lluvioso": 2,
              "extremo": 2.3
            },
            "desgaste_neumaticos": {
              "seco": 1.35,
              "lluvioso": 0.8,
              "extremo": 2.15
            }
          }
        },
        "imagen": "https://www.lego.com/cdn/cs/catalog/assets/bltc00aa5faa767ea9a/1/77250_WEB_SEC01_NOBG.png?quality=80&format=webply&disable=upscale&width=2560"
      }
    ],
    "circuitos": [
      {
        "id": "1",
        "nombre": "Circuito de Yas Marina",
        "pais": "Emiratos Árabes Unidos",
        "longitud_km": 5.281,
        "vueltas": 58,
        "descripcion": "Ubicado en Abu Dhabi, es famoso por ser el circuito donde se definen muchos campeonatos, con un diseño moderno y una espectacular carrera nocturna.",
        "record_vuelta": {
          "tiempo": "1:26.103",
          "piloto": "1",
          "año": 2021
        },
        "ganadores": [
          {
            "temporada": 2021,
            "piloto": "1"
          },
          {
            "temporada": 2022,
            "piloto": "1"
          },
          {
            "temporada": 2023,
            "piloto": "1"
          },
          {
            "temporada": 2024,
            "piloto": "4"
          }
        ],
        "imagen": "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Abu_Dhabi_Circuit.png"
      },
      {
        "id": "2",
        "nombre": "Circuito de Albert Park",
        "pais": "Australia",
        "longitud_km": 5.278,
        "vueltas": 58,
        "descripcion": "Ubicado en Melbourne, combina tramos rápidos con secciones técnicas. Es uno de los circuitos más populares del calendario y tradicionalmente ha sido la carrera inaugural.",
        "record_vuelta": {
          "tiempo": "1:20.235",
          "piloto": "4",
          "año": 2024
        },
        "ganadores": [
          {
            "temporada": 2021,
            "piloto": "1"
          },
          {
            "temporada": 2022,
            "piloto": "16"
          },
          {
            "temporada": 2023,
            "piloto": "1"
          },
          {
            "temporada": 2024,
            "piloto": "16"
          }
        ],
        "imagen": "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Australia_Circuit.png"
      },
      {
        "id": "3",
        "nombre": "Circuito Internacional de Bahrein",
        "pais": "Bahrein",
        "longitud_km": 5.412,
        "vueltas": 57,
        "descripcion": "Ubicado en Sakhir, fue el primer circuito de Fórmula 1 en Oriente Medio. Destacan sus largas rectas y sus curvas técnicas, especialmente desafiantes durante las carreras nocturnas.",
        "record_vuelta": {
          "tiempo": "1:31.447",
          "piloto": "44",
          "año": 2020
        },
        "ganadores": [
          {
            "temporada": 2021,
            "piloto": "44"
          },
          {
            "temporada": 2022,
            "piloto": "16"
          },
          {
            "temporada": 2023,
            "piloto": "1"
          },
          {
            "temporada": 2024,
            "piloto": "1"
          }
        ],
        "imagen": "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Bahrain_Circuit.png"
      },
      {
        "id": "4",
        "nombre": "Circuito de Mónaco",
        "pais": "Mónaco",
        "longitud_km": 3.337,
        "vueltas": 78,
        "descripcion": "El legendario circuito urbano de Montecarlo es el más lento y técnicamente desafiante del calendario. Sus estrechas calles, túneles y curvas cerradas ponen a prueba la precisión de los pilotos.",
        "record_vuelta": {
          "tiempo": "1:12.909",
          "piloto": "44",
          "año": 2021
        },
        "ganadores": [
          {
            "temporada": 2021,
            "piloto": "1"
          },
          {
            "temporada": 2022,
            "piloto": "11"
          },
          {
            "temporada": 2023,
            "piloto": "1"
          },
          {
            "temporada": 2024,
            "piloto": "16"
          }
        ],
        "imagen": "https://lebalap.academy/wp-content/uploads/2021/02/esquema-circuito-de-monaco.png"
      },
      {
        "id": "5",
        "nombre": "Circuito de Barcelona-Cataluña",
        "pais": "España",
        "longitud_km": 4.675,
        "vueltas": 66,
        "descripcion": "Ubicado cerca de Barcelona, es un circuito muy conocido por los equipos debido a las pruebas de pretemporada. Su combinación de curvas rápidas y lentas lo convierte en un excelente banco de pruebas para el rendimiento general de los monoplazas.",
        "record_vuelta": {
          "tiempo": "1:18.149",
          "piloto": "1",
          "año": 2021
        },
        "ganadores": [
          {
            "temporada": 2021,
            "piloto": "44"
          },
          {
            "temporada": 2022,
            "piloto": "1"
          },
          {
            "temporada": 2023,
            "piloto": "1"
          },
          {
            "temporada": 2024,
            "piloto": "4"
          }
        ],
        "imagen": "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Spain_Circuit.png"
      },
      {
        "id": "6",
        "nombre": "Circuito de Silverstone",
        "pais": "Reino Unido",
        "longitud_km": 5.891,
        "vueltas": 52,
        "descripcion": "Uno de los circuitos más rápidos y fluidos del calendario. Su rica historia como sede del primer Gran Premio de F1 en 1950 y sus curvas de alta velocidad lo convierten en un favorito entre los pilotos.",
        "record_vuelta": {
          "tiempo": "1:27.097",
          "piloto": "1",
          "año": 2020
        },
        "ganadores": [
          {
            "temporada": 2021,
            "piloto": "44"
          },
          {
            "temporada": 2022,
            "piloto": "55"
          },
          {
            "temporada": 2023,
            "piloto": "44"
          },
          {
            "temporada": 2024,
            "piloto": "44"
          }
        ],
        "imagen": "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Great_Britain_Circuit.png"
      },
      {
        "id": "7",
        "nombre": "Circuito de Spa-Francorchamps",
        "pais": "Bélgica",
        "longitud_km": 7.004,
        "vueltas": 44,
        "descripcion": "El circuito más largo del calendario, ubicado en las Ardenas. Famoso por su impredecible clima y por albergar la legendaria curva Eau Rouge, una de las más desafiantes del automovilismo.",
        "record_vuelta": {
          "tiempo": "1:46.286",
          "piloto": "77",
          "año": 2018
        },
        "ganadores": [
          {
            "temporada": 2021,
            "piloto": "1"
          },
          {
            "temporada": 2022,
            "piloto": "1"
          },
          {
            "temporada": 2023,
            "piloto": "1"
          },
          {
            "temporada": 2024,
            "piloto": "81"
          }
        ],
        "imagen": "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Belgium_Circuit.png"
      },
      {
        "id": "8",
        "nombre": "Autódromo Nacional de Monza",
        "pais": "Italia",
        "longitud_km": 5.793,
        "vueltas": 53,
        "descripcion": "Conocido como 'El Templo de la Velocidad', es uno de los circuitos más rápidos del calendario con largas rectas y pocas curvas cerradas. Su atmósfera única con los apasionados tifosi lo convierte en una carrera especial.",
        "record_vuelta": {
          "tiempo": "1:21.046",
          "piloto": "63",
          "año": 2023
        },
        "ganadores": [
          {
            "temporada": 2021,
            "piloto": "3"
          },
          {
            "temporada": 2022,
            "piloto": "1"
          },
          {
            "temporada": 2023,
            "piloto": "1"
          },
          {
            "temporada": 2024,
            "piloto": "16"
          }
        ],
        "imagen": "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Italy_Circuit.png"
      },
      {
        "id": "9",
        "nombre": "Circuito de Suzuka",
        "pais": "Japón",
        "longitud_km": 5.807,
        "vueltas": 53,
        "descripcion": "Diseñado por Hans Hugenholtz, es uno de los pocos circuitos en forma de ocho del mundo. Sus curvas de alta velocidad y la famosa sección 'S' lo hacen técnicamente exigente y un favorito entre los pilotos.",
        "record_vuelta": {
          "tiempo": "1:30.983",
          "piloto": "44",
          "año": 2019
        },
        "ganadores": [
          {
            "temporada": 2021,
            "piloto": "77"
          },
          {
            "temporada": 2022,
            "piloto": "1"
          },
          {
            "temporada": 2023,
            "piloto": "1"
          },
          {
            "temporada": 2024,
            "piloto": "4"
          }
        ],
        "imagen": "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Japan_Circuit.png"
      },
      {
        "id": "10",
        "nombre": "Circuito de las Américas",
        "pais": "Estados Unidos",
        "longitud_km": 5.513,
        "vueltas": 56,
        "descripcion": "Ubicado en Austin, Texas, es un circuito moderno inspirado en secciones clásicas de otros circuitos. Su primera curva en subida y sus rápidos cambios de dirección lo convierten en un desafío técnico.",
        "record_vuelta": {
          "tiempo": "1:36.169",
          "piloto": "16",
          "año": 2019
        },
        "ganadores": [
          {
            "temporada": 2021,
            "piloto": "1"
          },
          {
            "temporada": 2022,
            "piloto": "1"
          },
          {
            "temporada": 2023,
            "piloto": "1"
          },
          {
            "temporada": 2024,
            "piloto": "4"
          }
        ],
        "imagen": "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/USA_Circuit.png"
      },
      {
        "id": "11",
        "nombre": "Autódromo Hermanos Rodríguez",
        "pais": "México",
        "longitud_km": 4.304,
        "vueltas": 71,
        "descripcion": "Ubicado en Ciudad de México, es conocido por su atmósfera única y la sección del estadio Foro Sol. Su alta altitud afecta significativamente el rendimiento de los coches.",
        "record_vuelta": {
          "tiempo": "1:17.774",
          "piloto": "77",
          "año": 2021
        },
        "ganadores": [
          {
            "temporada": 2021,
            "piloto": "1"
          },
          {
            "temporada": 2022,
            "piloto": "1"
          },
          {
            "temporada": 2023,
            "piloto": "1"
          },
          {
            "temporada": 2024,
            "piloto": "1"
          }
        ],
        "imagen": "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Mexico_Circuit.png"
      },
      {
        "id": "12",
        "nombre": "Circuito Urbano de Marina Bay",
        "pais": "Singapur",
        "longitud_km": 4.94,
        "vueltas": 62,
        "descripcion": "Primer circuito urbano nocturno de la F1. Sus 23 curvas y el calor húmedo lo convierten en uno de los desafíos físicos más duros para los pilotos, con carreras que a menudo se acercan al límite de las dos horas.",
        "record_vuelta": {
          "tiempo": "1:41.905",
          "piloto": "44",
          "año": 2018
        },
        "ganadores": [
          {
            "temporada": 2021,
            "piloto": "3"
          },
          {
            "temporada": 2022,
            "piloto": "11"
          },
          {
            "temporada": 2023,
            "piloto": "55"
          },
          {
            "temporada": 2024,
            "piloto": "4"
          }
        ],
        "imagen": "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Singapore_Circuit.png"
      },
      {
        "id": "13",
        "nombre": "Circuito de Interlagos",
        "pais": "Brasil",
        "longitud_km": 4.309,
        "vueltas": 71,
        "descripcion": "Ubicado en São Paulo, es conocido por su diseño antihorario y sus cambios de elevación. El clima impredecible y la apasionada afición local crean a menudo carreras emocionantes e impredecibles.",
        "record_vuelta": {
          "tiempo": "1:10.540",
          "piloto": "77",
          "año": 2018
        },
        "ganadores": [
          {
            "temporada": 2021,
            "piloto": "44"
          },
          {
            "temporada": 2022,
            "piloto": "63"
          },
          {
            "temporada": 2023,
            "piloto": "1"
          },
          {
            "temporada": 2024,
            "piloto": "1"
          }
        ],
        "imagen": "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Brazil_Circuit.png"
      },
      {
        "id": "14",
        "nombre": "Circuito Internacional de Shanghái",
        "pais": "China",
        "longitud_km": 5.451,
        "vueltas": 56,
        "descripcion": "Diseñado por Hermann Tilke, presenta un desafiante diseño con una de las curvas más largas del calendario en la sección 1-2-3, poniendo a prueba los neumáticos delanteros y la capacidad de los pilotos.",
        "record_vuelta": {
          "tiempo": "1:32.238",
          "piloto": "1",
          "año": 2024
        },
        "ganadores": [
          {
            "temporada": 2021,
            "piloto": "44"
          },
          {
            "temporada": 2022,
            "piloto": "16"
          },
          {
            "temporada": 2023,
            "piloto": "1"
          },
          {
            "temporada": 2024,
            "piloto": "1"
          }
        ],
        "imagen": "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/China_Circuit.png"
      },
      {
        "id": "15",
        "nombre": "Circuito de Miami",
        "pais": "Estados Unidos",
        "longitud_km": 5.412,
        "vueltas": 57,
        "descripcion": "Circuito urbano alrededor del Hard Rock Stadium en Miami Gardens. Combina secciones técnicas con largas rectas, ofreciendo oportunidades de adelantamiento y un ambiente único con la cultura de Miami.",
        "record_vuelta": {
          "tiempo": "1:29.766",
          "piloto": "1",
          "año": 2024
        },
        "ganadores": [
          {
            "temporada": 2021,
            "piloto": "1"
          },
          {
            "temporada": 2022,
            "piloto": "1"
          },
          {
            "temporada": 2023,
            "piloto": "1"
          },
          {
            "temporada": 2024,
            "piloto": "4"
          }
        ],
        "imagen": "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Miami_Circuit.png"
      },
      {
        "id": "16",
        "nombre": "Circuito Urbano de Las Vegas",
        "pais": "Estados Unidos",
        "longitud_km": 6.201,
        "vueltas": 50,
        "descripcion": "Un impresionante circuito nocturno que recorre el icónico Strip de Las Vegas. Con largas rectas y zonas de alta velocidad, además de las luces de neón como telón de fondo, ofrece un espectáculo único en el calendario.",
        "record_vuelta": {
          "tiempo": "1:34.971",
          "piloto": "81",
          "año": 2024
        },
        "ganadores": [
          {
            "temporada": 2021,
            "piloto": "44"
          },
          {
            "temporada": 2022,
            "piloto": "63"
          },
          {
            "temporada": 2023,
            "piloto": "1"
          },
          {
            "temporada": 2024,
            "piloto": "63"
          }
        ],
        "imagen": "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Las_Vegas_Circuit.png"
      },
      {
        "id": "17",
        "nombre": "Circuito Urbano de Jeddah",
        "pais": "Arabia Saudita",
        "longitud_km": 6.175,
        "vueltas": 50,
        "descripcion": "El circuito callejero más rápido del calendario, con una velocidad media cercana a los 250 km/h. Sus curvas rápidas y pasajes estrechos junto al Mar Rojo crean un desafío único durante la carrera nocturna.",
        "record_vuelta": {
          "tiempo": "1:30.734",
          "piloto": "44",
          "año": 2021
        },
        "ganadores": [
          {
            "temporada": 2021,
            "piloto": "44"
          },
          {
            "temporada": 2022,
            "piloto": "1"
          },
          {
            "temporada": 2023,
            "piloto": "11"
          },
          {
            "temporada": 2024,
            "piloto": "1"
          }
        ],
        "imagen": "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Saudi_Arabia_Circuit.png"
      },
      {
        "id": "18",
        "nombre": "Circuito de Imola",
        "pais": "Italia",
        "longitud_km": 4.909,
        "vueltas": 63,
        "descripcion": "Oficialmente llamado Autodromo Internazionale Enzo e Dino Ferrari, es un circuito clásico con historia y carácter. Su diseño antihorario y sus curvas técnicas ponen a prueba la habilidad de los pilotos.",
        "record_vuelta": {
          "tiempo": "1:15.484",
          "piloto": "44",
          "año": 2020
        },
        "ganadores": [
          {
            "temporada": 2021,
            "piloto": "1"
          },
          {
            "temporada": 2022,
            "piloto": "1"
          },
          {
            "temporada": 2023,
            "piloto": "1"
          },
          {
            "temporada": 2024,
            "piloto": "1"
          }
        ],
        "imagen": "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Emilia_Romagna_Circuit.png"
      },
      {
        "id": "19",
        "nombre": "Circuito de Hungaroring",
        "pais": "Hungría",
        "longitud_km": 4.381,
        "vueltas": 70,
        "descripcion": "Ubicado cerca de Budapest, es conocido por sus curvas técnicas y su trazado estrecho que dificulta los adelantamientos. Las altas temperaturas del verano europeo añaden un desafío extra para pilotos y máquinas.",
        "record_vuelta": {
          "tiempo": "1:16.627",
          "piloto": "44",
          "año": 2020
        },
        "ganadores": [
          {
            "temporada": 2021,
            "piloto": "31"
          },
          {
            "temporada": 2022,
            "piloto": "1"
          },
          {
            "temporada": 2023,
            "piloto": "1"
          },
          {
            "temporada": 2024,
            "piloto": "81"
          }
        ],
        "imagen": "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Hungary_Circuit.png"
      },
      {
        "id": "20",
        "nombre": "Circuito de Zandvoort",
        "pais": "Países Bajos",
        "longitud_km": 4.259,
        "vueltas": 72,
        "descripcion": "Su regreso al calendario en 2021 trajo un circuito renovado pero que mantiene su esencia clásica. Sus curvas peraltadas y su ubicación entre las dunas junto al Mar del Norte lo hacen único.",
        "record_vuelta": {
          "tiempo": "1:11.097",
          "piloto": "44",
          "año": 2021
        },
        "ganadores": [
          {
            "temporada": 2021,
            "piloto": "1"
          },
          {
            "temporada": 2022,
            "piloto": "1"
          },
          {
            "temporada": 2023,
            "piloto": "1"
          },
          {
            "temporada": 2024,
            "piloto": "4"
          }
        ],
        "imagen": "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Netherlands_Circuit.png"
      },
      {
        "id": "21",
        "nombre": "Circuito de Red Bull Ring",
        "pais": "Austria",
        "longitud_km": 4.318,
        "vueltas": 71,
        "descripcion": "Un trazado corto pero intenso en las montañas de Estiria. Sus grandes desniveles y pocas curvas crean carreras rápidas donde la precisión es crucial en cada vuelta.",
        "record_vuelta": {
          "tiempo": "1:05.619",
          "piloto": "55",
          "año": 2020
        },
        "ganadores": [
          {
            "temporada": 2021,
            "piloto": "1"
          },
          {
            "temporada": 2022,
            "piloto": "16"
          },
          {
            "temporada": 2023,
            "piloto": "1"
          },
          {
            "temporada": 2024,
            "piloto": "63"
          }
        ],
        "imagen": "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Austria_Circuit.png"
      },
      {
        "id": "22",
        "nombre": "Circuito de Paul Ricard",
        "pais": "Francia",
        "longitud_km": 5.842,
        "vueltas": 53,
        "descripcion": "Un circuito moderno con extensas áreas de escape que lo hacen seguro pero también desafiante. Su larga recta Mistral y sus curvas rápidas exigen un buen equilibrio aerodinámico.",
        "record_vuelta": {
          "tiempo": "1:32.740",
          "piloto": "44",
          "año": 2019
        },
        "ganadores": [
          {
            "temporada": 2021,
            "piloto": "1"
          },
          {
            "temporada": 2022,
            "piloto": "1"
          },
          {
            "temporada": 2023,
            "piloto": "1"
          },
          {
            "temporada": 2024,
            "piloto": "16"
          }
        ],
        "imagen": "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/France_Circuit.png"
      },
      {
        "id": "23",
        "nombre": "Circuito de Bakú",
        "pais": "Azerbaiyán",
        "longitud_km": 6.003,
        "vueltas": 51,
        "descripcion": "Un circuito urbano único que combina secciones ultra estrechas en la ciudad vieja con una recta de más de 2 km junto al Mar Caspio, donde se alcanzan las mayores velocidades del calendario.",
        "record_vuelta": {
          "tiempo": "1:43.009",
          "piloto": "16",
          "año": 2019
        },
        "ganadores": [
          {
            "temporada": 2021,
            "piloto": "11"
          },
          {
            "temporada": 2022,
            "piloto": "1"
          },
          {
            "temporada": 2023,
            "piloto": "11"
          },
          {
            "temporada": 2024,
            "piloto": "81"
          }
        ],
        "imagen": "https://lebalap.academy/wp-content/uploads/2021/02/image-1.png"
      },
      {
        "id": "24",
        "nombre": "Circuito de Qatar",
        "pais": "Qatar",
        "longitud_km": 5.419,
        "vueltas": 57,
        "descripcion": "Originalmente diseñado para motociclismo, este circuito ofrece curvas fluidas de alta velocidad que ponen a prueba la resistencia física de los pilotos, especialmente en el calor extremo de la región.",
        "record_vuelta": {
          "tiempo": "1:24.319",
          "piloto": "1",
          "año": 2023
        },
        "ganadores": [
          {
            "temporada": 2021,
            "piloto": "44"
          },
          {
            "temporada": 2022,
            "piloto": "1"
          },
          {
            "temporada": 2023,
            "piloto": "1"
          },
          {
            "temporada": 2024,
            "piloto": "81"
          }
        ],
        "imagen": "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Qatar_Circuit.png"
      }
    ],
    "id": "1"
  }
]
```