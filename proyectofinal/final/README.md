# 8. Proyecto final
La empresa netec necesita crear un frontend con angular que le permita mostrar cursos a sus clientes. Y un dashboard de administradores que permita editar los cursos que estan disponibles.
La empresa netec ya tiene un api de cursos que tiene los siguientes métodos: GETALL, POST, PUT, DELETE, FINDBYID



## Objetivos
- Desplegar API Spring Boot
- Crear aplicación de Angular 
- Desplegar aplicación usando **Docker**
- Válidar funcionamiento de la aplicación

---

<div style="width: 400px;">
        <table width="50%">
            <tr>
                <td style="text-align: center;">
                    <a href="../Capitulo7/"><img src="../images/anterior.png" width="40px"></a>
                    <br>anterior
                </td>
                <td style="text-align: center;">
                   <a href="../README.md">Lista Laboratorios</a>
                </td>
<td style="text-align: center;">
                    <a href="../Capitulo9/"><img src="../images/siguiente.png" width="40px"></a>
                    <br>siguiente
                </td>
            </tr>
        </table>
</div>


---


## Diagrama

![diagrama](../images/8/diagrama.png)



## Instrucciones

Los requerimientos son los siguientes: 

- Se necesita que el alumno despliegue el API de Spring Boot que usaremos en el curso usando el siguiente **docker-compose.yaml**

```yaml
services:
  mysqlserver:
    container_name: mysqlserver
    image: "mysql:8.0"
    environment:
      - MYSQL_ROOT_PASSWORD=netec123
      - MYSQL_DATABASE=items
    healthcheck:
      test: mysqladmin ping -uroot -p${MYSQL_ROOT_PASSWORD} -hlocalhost
  
  microcourse:
    container_name: microcourse
    image: edgardovefe/angulardev:microservicecourse
    environment:
      - IP_DB=mysqlserver
      - PORT_DB=3306
      - NAME_DB=items
      - USER_DB=root
      - PASSWORD_DB=netec123
    ports:
      - 8084:8084
    depends_on:
      mysqlserver:
        condition: service_healthy
```

2. Los métodos disponibles en el API son los siguientes: 

**Base URL:** `/course`  
**Formato:** JSON  
**CORS:** Habilitado para cualquier origen (`@CrossOrigin(origins = "*")`)

---

## 📌 Endpoints Disponibles

---

### 🔹 GET `/course`

**Descripción:**  
Obtiene todos los cursos disponibles.

**Respuesta:**
- `200 OK` – Devuelve una lista de objetos `Course`.

---

### 🔹 GET `/course/{id}`

**Descripción:**  
Obtiene un curso específico por su ID.

**Parámetros:**
- `id` (path) – Identificador único del curso.

**Respuestas:**
- `200 OK` – Devuelve el curso solicitado.
- `404 Not Found` – Si no se encuentra el curso.
- `500 Internal Server Error` – Si ocurre un error inesperado.

---

### 🔹 POST `/course`

**Descripción:**  
Inserta un nuevo curso en el sistema.

**Body:**
```json
{
		"name": "Angular Developer",
		"description": "Curso de angular usando la versión 19",
		"duration": "35 horas",
		"level": "Intermedio",
		"price": 1000
}
```

**Respuestas:**
- `201 Created` – Curso creado correctamente.
- `500 Internal Server Error` – Error al insertar el curso.

---

### 🔹 PUT `/course`

**Descripción:**  
Actualiza los datos de un curso existente.

**Body:**
```json
{
		"id": 1,
		"name": "Angular Developer",
		"description": "Curso de angular usando la versión 19",
		"duration": "35 horas",
		"level": "Intermedio",
		"price": 1000
}
```

**Respuestas:**
- `200 OK` – Curso actualizado con éxito.
- `404 Not Found` – Curso no encontrado.
- `500 Internal Server Error` – Error al actualizar el curso.

---

### 🔹 DELETE `/course/{id}`

**Descripción:**  
Elimina un curso existente por su ID.

**Parámetros:**
- `id` (path) – ID del curso a eliminar.

**Respuestas:**
- `200 OK` – Curso eliminado correctamente.
- `404 Not Found` – Curso no encontrado.
- `500 Internal Server Error` – Error al eliminar el curso.
---


4. Se requiere que el alumno proponga un diseño que permita lo siguiente: 

- Página publica que permita observar los cursos con tarjetas comodas para el usuario 

- Tendrá un apartado donde se activará un dashboard que permita la administración de los cursos  existentes

- Puede usar angular material o bootstrap para crear el diseño. 

- Al terminar se debe de desplegar la aplicación en **Docker** debe crear la imagen y en el mismo **docker-compose.yaml** donde se desplega el api, agregar el despliegue de la aplicación de **angular**. 

- Entregable:
  - Capturas de pantalla mostrando el funcionamiento de la aplicación (mínimo 3)
  - Respositorio publico en github donde se almacene su código
  - Enviar un correo a:
    - Correo: edgardo.velasco@netec.com
    - Asunto: ProyectoAngularDev
    - En el cuerpo del correo sólo enviar el enlace al repositorio donde se encuentra su proyecto.

> **NOTA:** Se sugiere tener dentro del repositorio las capturas de pantalla **NO ENVIARLAS EN EL CORREO**. 







