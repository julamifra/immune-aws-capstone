import React from 'react';
import { motion } from 'framer-motion';
import HelmetPage from '@/components/HelmetPage';
import { cookiesPolicyPageMeta } from '@/data/Metadata/cookiesPolicyPageMeta';

const CookiesPolicyPage = () => {
  return (
    <div className="bg-gray-50">
      <HelmetPage {...cookiesPolicyPageMeta} />
      <div className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 md:p-12 rounded-2xl shadow-xl"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Política de Cookies
          </h1>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-sm text-gray-500">
              Fecha: 16 julio 2020 | Versión: V.1.0
            </p>
            <p className="text-sm text-gray-500 mb-6">
              © 2018-2020 Copyright AIXA CORPORE, S.L | www.ioamigo.com
            </p>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <p className="text-sm text-blue-800">
                Todos los documentos entregados como consecuencia de esta
                relación contractual, son propiedad de AIXA CORPORE, S.L y están
                protegidos por los derechos de Propiedad Intelectual e
                Industrial.
              </p>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg mb-6">
              <p className="text-sm font-semibold text-yellow-800 mb-2">
                Aviso de Cookies
              </p>
              <p className="text-sm text-yellow-700">
                Utilizamos cookies propias y de terceros para fines analíticos y
                para mostrarte publicidad personalizada en base a un perfil
                elaborado a partir de tus hábitos de navegación (por ejemplo,
                páginas visitadas). Puedes configurar o rechazar la utilización
                de cookies indicándolo en el siguiente selector.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              1. ¿Qué son las cookies?
            </h2>
            <p>
              Una cookie es un archivo de texto que un servidor web puede
              guardar en el disco duro de tu equipo para almacenar algún tipo de
              información sobre ti como usuario. Las cookies se utilizan con
              diversas finalidades tales como almacenar datos para próximas
              visitas, para reconocer al usuario y evitar pedir de nuevo la
              autentificación, para saber que páginas visitas, o para guardar
              tus preferencias en áreas personalizables. Normalmente los sitios
              web utilizan las cookies para obtener información estadística
              sobre sus páginas web, y analizar el comportamiento de sus
              clientes/usuarios.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              Cookies exceptuadas
            </h3>
            <p>
              Quedan exceptuadas del cumplimiento de las obligaciones
              establecidas en el artículo 22.2 de la LSSI las cookies utilizadas
              para alguna de las siguientes finalidades:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                Permitir únicamente la comunicación entre el equipo del usuario
                y la red.
              </li>
              <li>
                Estrictamente prestar un servicio expresamente solicitado por el
                usuario.
              </li>
              <li>Cookies de "entrada del usuario".</li>
              <li>
                Cookies de autenticación o identificación de usuario (únicamente
                de sesión).
              </li>
              <li>Cookies de seguridad del usuario</li>
              <li>Cookies de sesión de reproductor multimedia.</li>
              <li>Cookies de sesión para equilibrar la carga.</li>
              <li>Cookies de personalización de la interfaz de usuario.</li>
              <li>
                Determinadas cookies de complemento (plug-in) para intercambiar
                contenidos sociales
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              2. Tipos de cookies
            </h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              Según quien instala la cookie:
            </h3>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>Cookies propias:</strong> Son aquéllas que se envían al
                equipo terminal del usuario desde un equipo o dominio gestionado
                por el propio editor y desde el que se presta el servicio
                solicitado por el usuario.
              </li>
              <li>
                <strong>Cookies de terceros:</strong> Son aquéllas que se envían
                al equipo terminal del usuario desde un equipo o dominio
                gestionado por nosotros o por un tercero, pero la información
                que se recoja las cookies es gestionada por un tercero distinto
                del titular de la web.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              Según su plazo de conservación:
            </h3>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>Cookies de sesión:</strong> Son aquellas que duran el
                tiempo que el usuario está navegando por la página Web y se
                borran cuando finaliza la navegación.
              </li>
              <li>
                <strong>Cookies persistentes:</strong> Quedan almacenadas en el
                terminal del usuario, por un tiempo más largo, facilitando así
                el control de las preferencias elegidas sin tener que repetir
                ciertos parámetros cada vez que se visite el sitio Web.
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              Según su finalidad:
            </h3>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>Cookies técnicas:</strong> Las cookies técnicas son
                aquellas imprescindibles y estrictamente necesarias para el
                correcto funcionamiento de un sitio Web y el uso de las diversas
                opciones y servicios que ofrece.
              </li>
              <li>
                <strong>Cookies de personalización:</strong> Permiten al usuario
                escoger o personalizar características de la página Web como el
                idioma, configuración regional o tipo de navegador.
              </li>
              <li>
                <strong>Cookies analíticas:</strong> Son las utilizadas por los
                portales Web, para elaborar perfiles de navegación y poder
                conocer las preferencias de los usuarios con el fin de mejorar
                la oferta de productos y servicios.
              </li>
              <li>
                <strong>Cookies publicitarias:</strong> Son aquellas que
                almacenan información del comportamiento de los usuarios
                obtenida a través de la observación continuada de sus hábitos de
                navegación, lo que permite desarrollar un perfil específico para
                mostrar publicidad en función del mismo.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              3. Cookies utilizadas en nuestra web
            </h2>
            <p>
              www.ioamigo.com utiliza los siguientes tipos de cookies en la web:
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              Cookies técnicas:
            </h3>
            <p>
              Permiten al usuario navegar por la Web, recordar sus contraseñas y
              usar funcionalidades como el carrito de la compra.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              Cookies de personalización:
            </h3>
            <p>
              Permiten saber las preferencias del usuario: idioma, productos
              visitados.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              Cookies de análisis:
            </h3>
            <p>
              Utilizamos cookies de Google Analytics para cuantificar el número
              de usuarios que visitan la Web. Estas cookies permiten medir y
              analizar la forma en que los usuarios navegan por la Web. Esta
              información permite a OCUTECNIA S.L.P.U. mejorar continuamente sus
              servicios y la experiencia de los usuarios de la Web. Para obtener
              más información, puedes consultar la página de privacidad de
              Google Analytics: policies.google.com/privacy
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-3">
              Cookies publicitarias y publicitarias comportamentales:
            </h4>
            <p>
              Estas cookies son utilizadas para mostrar anuncios relevantes para
              los usuarios en función del uso que realicen de nuestra web.
              Además, limitan el número de veces que cada usuario visualiza un
              anuncio y ayudan a OCUTECNIA S.L.P.U. a medir la efectividad de
              sus campañas publicitarias.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              4. Cookies instaladas en nuestro dominio web
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">
                      Nombre de la cookie
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">
                      Finalidad
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">
                      Propia/Terceros
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">
                      Duración
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">
                      ¿Cuándo se instala?
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-900">
                      power_stats_tracking_code
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">Técnica</td>
                    <td className="px-4 py-2 text-sm text-gray-700">Propia</td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      30 minutos
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Al acceder al sitio Web
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-900">_gid</td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Cookie analítica de Google Analytics
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Terceros
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      24 horas
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Al aceptar cookies
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-900">_ga</td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Cookie analítica de Google Analytics
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Terceros
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">2 años</td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Al aceptar cookies
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-900">_gat</td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Cookie analítica de Google Analytics
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Terceros
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      1 minuto
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Al aceptar cookies
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm text-gray-900">
                      PHPSESSID
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">Técnica</td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Terceros
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">Sesión</td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      Al acceder al sitio Web
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              5. ¿Cómo puedo impedir la instalación de cookies?
            </h2>
            <p>
              El usuario puede rechazar la instalación de todas aquellas
              cookies, según sus preferencias, salvo aquellas que autorice
              expresamente o las que son de perfil técnico y deben ser
              instaladas para garantizar el funcionamiento correcto de la página
              web.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              Configuración por navegador:
            </h3>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>Internet Explorer:</strong>
                <a
                  href="http://windows.microsoft.com/es-es/windows-vista/block-or-allow-cookies"
                  className="text-blue-600 hover:underline ml-2"
                >
                  Configurar cookies
                </a>
              </li>
              <li>
                <strong>Firefox:</strong>
                <a
                  href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-web"
                  className="text-blue-600 hover:underline ml-2"
                >
                  Habilitar y deshabilitar cookies
                </a>
              </li>
              <li>
                <strong>Safari:</strong>
                <a
                  href="http://support.apple.com/kb/HT1677?viewlocale=es_ES"
                  className="text-blue-600 hover:underline ml-2"
                >
                  Configurar cookies
                </a>
              </li>
              <li>
                <strong>Chrome:</strong>
                <a
                  href="https://support.google.com/accounts/answer/61416?hl=es"
                  className="text-blue-600 hover:underline ml-2"
                >
                  Configurar cookies
                </a>
              </li>
              <li>
                <strong>Opera:</strong>
                <a
                  href="http://help.opera.com/Windows/11.50/es-ES/cookies.html"
                  className="text-blue-600 hover:underline ml-2"
                >
                  Configurar cookies
                </a>
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              Herramientas de terceros:
            </h3>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <a
                  href="http://www.ghostery.com"
                  className="text-blue-600 hover:underline"
                >
                  Ghostery
                </a>
              </li>
              <li>
                <a
                  href="http://www.youronlinechoices.com/es/"
                  className="text-blue-600 hover:underline"
                >
                  Your Online Choices
                </a>
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              6. Enlaces a otros sitios web
            </h2>
            <p>
              Si opta por abandonar nuestro sitio Web a través de enlaces a
              otros sitios Web no pertenecientes a nuestra entidad, no nos
              haremos responsables de las políticas de privacidad de dichos
              sitios Web ni de las cookies que estos puedan almacenar en el
              ordenador del usuario.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              7. ¿Cómo recopilamos y usamos las direcciones IP?
            </h2>
            <p>
              Los servidores de la Web podrán detectar de manera automática la
              dirección IP y el nombre de dominio utilizados por los usuarios.
              Una dirección IP es un número asignado automáticamente a un
              ordenador cuando éste se conecta a Internet. Esta información
              permite el posterior procesamiento de los datos con el fin de
              saber si ha prestado su consentimiento para la instalación de
              cookies, realizar mediciones únicamente estadísticas que permitan
              conocer el número de visitas realizadas a la Web, el orden de
              visitas, el punto de acceso, etc.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              8. Transferencia internacional de datos
            </h2>
            <p>
              Las cookies instaladas en nuestro dominio web se instalan en
              nuestro servidor por lo que los datos en ellas recogidos no son
              sometidos a transferencias internacionales de datos.
            </p>
            <p>
              Los datos recopilados por las cookies de Google Analytics pueden
              ser sometidos a transferencia internacional de datos ya que son
              tratados por Google. Como se describe en su certificación del
              Privacy Shield, cumple los marcos del Privacy Shield UE – EE. UU.
              y del Privacy Shield Suiza – EE. UU.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              9. Actualización de nuestra política de cookies
            </h2>
            <p>
              Esta política se revisa periódicamente para asegurar su vigencia,
              por lo que puede ser modificada. Le recomendamos que visite la
              página con regularidad donde le informaremos de cualquier
              actualización al respecto.
            </p>

            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                Para cualquier duda o consulta acerca de esta política de
                cookies no dude en comunicarse con nosotros a través de la
                sección de contacto.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CookiesPolicyPage;
