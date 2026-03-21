import React from 'react';
import { motion } from 'framer-motion';
import HelmetPage from '@/components/HelmetPage';
import { privacyPolicyPageMeta } from '@/data/Metadata/privacyPolicyPageMeta';

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-gray-50">
      <HelmetPage {...privacyPolicyPageMeta} />
      <div className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 md:p-12 rounded-2xl shadow-xl"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Política de Privacidad
          </h1>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-sm text-gray-500">
              Última actualización: 28 de abril de 2020 - Versión 2.0
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-semibold text-blue-900 mb-3">
                INFORMACIÓN BÁSICA DE PROTECCIÓN DE DATOS
              </h2>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Responsable:</strong> OCUTECNIA S.L.P.U.
                </p>
                <p>
                  <strong>Finalidad:</strong> Atender las solicitudes realizadas
                  a través de la web, gestionar el envío de información y los
                  comentarios en el blog.
                </p>
                <p>
                  <strong>Legitimación:</strong> Consentimiento del interesado y
                  ejecución de un precontrato/contrato
                </p>
                <p>
                  <strong>Destinatarios:</strong> No se cederán datos a terceros
                  salvo obligación legal o en el supuesto que sea necesario para
                  atender su solicitud
                </p>
                <p>
                  <strong>Derechos:</strong> Podrá ejercer los derechos de
                  acceso, rectificación, supresión y oposición, limitación del
                  tratamiento, portabilidad de datos y a no ser objeto de
                  decisiones individualizadas automatizadas.
                </p>
                <p>
                  <strong>Delegado de Protección de Datos:</strong> AIXA
                  CORPORE, S.L. - ioamigo@dpocanarias.com
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              1. ¿QUIÉN ES EL RESPONSABLE DEL TRATAMIENTO DE SUS DATOS?
            </h2>
            <p>
              El responsable del tratamiento de sus datos es OCUTECNIA S.L.P.U.:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg my-4">
              <ul className="space-y-2">
                <li>
                  <strong>Identidad:</strong> OCUTECNIA S.L.P.U. – B38500096
                </li>
                <li>
                  <strong>Dirección:</strong> Calle El Humo, 10, 1ab, 38003 –
                  Santa Cruz De Tenerife
                </li>
                <li>
                  <strong>Teléfono:</strong> 922535971
                </li>
                <li>
                  <strong>Web:</strong> www.ioamigo.com
                </li>
                <li>
                  <strong>Correo-e:</strong> amigo@ioamigo.com
                </li>
                <li>
                  <strong>Delegado de Protección de Datos:</strong> AIXA
                  CORPORE, S.L.
                </li>
                <li>
                  <strong>Contacto DPD:</strong> ioamigo@dpocanarias.com
                </li>
              </ul>
            </div>
            <p>
              OCUTECNIA S.L.P.U. informa al usuario que los datos que nos
              facilite a través de la navegación por nuestra web, el formulario
              de contacto o en el envío de correos electrónicos, van a ser
              tratados por OCUTECNIA S.L.P.U. y que dicho tratamiento se
              encuentra recogido en el Registro de Actividades de tratamiento
              gestionado por OCUTECNIA S.L.P.U. conforme a lo establecido en el
              RGPD.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              2. ¿PARA QUÉ SE UTILIZAN SUS DATOS PERSONALES?
            </h2>
            <p>
              En www.ioamigo.com cuando el usuario acepta nuestra política de
              privacidad nos autoriza a utilizar y tratar los datos personales
              suministrados para:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>
                Remitirle la información y prestarle el servicio que soliciten
                mediante los diversos formularios disponibles en nuestra web.
              </li>
              <li>
                Facilitarle información sobre las ofertas, productos y servicios
                solicitados.
              </li>
              <li>
                Ocasionalmente, OCUTECNIA S.L.P.U. podrá utilizar sus datos de
                carácter personal para enviarle notificaciones por medio de
                correo electrónico sobre modificaciones en nuestros servicios o
                productos.
              </li>
              <li>
                Remitirle comunicaciones comerciales sobre ofertas, actividades
                y promociones de OCUTECNIA S.L.P.U. cuando haya marcado la
                casilla de que desea recibir información.
              </li>
              <li>
                Almacenar y procesar los mensajes que nos envías a través de
                nuestros canales de comunicación (ej. chatbot, formularios de
                contacto) con el fin de responder a tus consultas, mejorar la
                calidad de nuestros servicios y para análisis internos.
              </li>
            </ul>
            <p>
              www.ioamigo.com también recoge información de los usuarios
              mediante cookies y dispositivos DARD. Los datos recogidos serán
              utilizados para estudios estadísticos y análisis de perfiles con
              la finalidad de prestar un mejor servicio a través de nuestra web,
              para lo que se utilizará la aplicación GOOGLE ANALYTICS.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              3. ¿CUÁL ES LA LEGITIMACIÓN PARA EL TRATAMIENTO DE SUS DATOS?
            </h2>
            <p>
              La legitimación para el tratamiento de sus datos por parte de
              OCUTECNIA S.L.P.U. se basa en:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>
                En la ejecución de un precontrato/contrato para remitirle la
                información y prestarle el servicio solicitado, no siendo
                posible su realización en caso contrario.
              </li>
              <li>
                En el consentimiento del usuario para el envío de comunicaciones
                comerciales. El usuario puede revocar en cualquier momento el
                consentimiento prestado.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              4. ¿POR CUÁNTO TIEMPO CONSERVAMOS SUS DATOS?
            </h2>
            <p>
              Los datos para remitirle la información o prestarle el servicio
              que soliciten mediante los diversos formularios disponibles en
              nuestra web serán conservados durante el tiempo que la relación
              contractual se encuentre vigente, y una vez finalizada durante el
              plazo de prescripción legal.
            </p>
            <p>
              Los datos tratados para el envío de comunicaciones comerciales
              serán conservados en tanto en cuanto el usuario no revoque el
              consentimiento prestado.
            </p>
            <p>
              La dirección IP obtenida a través de las cookies tendrá un plazo
              de conservación de un año, con la finalidad de demostrar el
              consentimiento del usuario.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              5. ¿QUÉ TIPO DE DATOS TRATAMOS DE NUESTROS USUARIOS?
            </h2>
            <p>OCUTECNIA S.L.P.U. trata las siguientes categorías de datos:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>
                <strong>Datos de los usuarios que rellenan formularios:</strong>{' '}
                datos identificativos (nombre y apellidos, teléfono, dirección
                postal y electrónica) y datos relativos a la solicitud.
              </li>
              <li>
                <strong>
                  Datos de los usuarios que navegan por nuestra web:
                </strong>{' '}
                datos proporcionados por las cookies y por Google Analytics.
              </li>
            </ul>
            <div className="bg-yellow-50 p-4 rounded-lg my-4">
              <p className="text-sm">
                <strong>Importante:</strong> Sólo los mayores de 16 años pueden
                facilitar datos a través de nuestra web. Si eres menor de esta
                edad deberás contar con el consentimiento de tus padres o
                tutores legales.
              </p>
            </div>
            <p>
              Los campos marcados con un asterisco (*) o con la palabra
              (requerido) en nuestros formularios son de cumplimentación
              obligatoria, la negativa a suministrarlos supondrá la
              imposibilidad de prestarle el servicio o atender su solicitud.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              6. ¿A QUÉ DESTINATARIOS SE COMUNICARÁN SUS DATOS?
            </h2>
            <p>
              No se cederán datos a terceros salvo obligación legal o en el
              supuesto que sea necesario para atender su solicitud.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              7. ¿QUÉ DERECHOS LE ASISTEN Y CÓMO PUEDE EJERCITARLOS?
            </h2>
            <p>
              El usuario puede ejercer los siguientes derechos ante OCUTECNIA
              S.L.P.U.:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Rectificarlos cuando son inexactos o incompletos</li>
              <li>
                Solicitar la supresión o cancelación de los datos cuando hayan
                dejado de ser necesarios
              </li>
              <li>Oponerse a su tratamiento</li>
              <li>Pedir la limitación del tratamiento de sus datos</li>
              <li>Solicitar la portabilidad de sus datos</li>
              <li>Impedir ser objeto de decisiones automatizadas</li>
              <li>Revocar los consentimientos otorgados</li>
            </ul>
            <p>
              Para ejercer sus derechos, puede contactar mediante correo postal
              a: OCUTECNIA S.L.P.U. Calle El Humo, 10, 1ab, 38003 – Santa Cruz
              De Tenerife, o por email:{' '}
              <a
                href="mailto:amigo@ioamigo.com"
                className="text-blue-600 underline"
              >
                amigo@ioamigo.com
              </a>
              .
            </p>
            <p>
              Los interesados tienen derecho a reclamar ante la Agencia Española
              de Protección de Datos cuando consideren que se han vulnerado sus
              derechos en{' '}
              <a href="https://www.aepd.es" className="text-blue-600 underline">
                www.aepd.es
              </a>
              .
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              8. ¿ESTÁN SEGUROS MIS DATOS?
            </h2>
            <p>
              OCUTECNIA S.L.P.U. tiene alojada su página web en Clouding.io, una
              empresa española que dispone de los últimos sistemas en medidas de
              seguridad.
            </p>
            <p>
              OCUTECNIA S.L.P.U. garantiza la adopción de las medidas oportunas
              para asegurar el tratamiento confidencial de sus datos y se
              compromete a que dichos datos permanezcan secretos, tratándolos
              con la máxima reserva conforme al REGLAMENTO (UE) 2016/679 DEL
              PARLAMENTO EUROPEO Y DEL CONSEJO (RGPD).
            </p>
            <p>
              Todos los datos facilitados a través de nuestra plataforma se
              realizan mediante un protocolo seguro. Nuestra web posee un
              certificado SSL que permite establecer una conexión cifrada.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              9. ENLACES A OTROS SITIOS WEB
            </h2>
            <p>
              Si opta por abandonar nuestro sitio Web a través de enlaces a
              otros sitios Web no pertenecientes a nuestra entidad, OCUTECNIA
              S.L.P.U. no se hará responsable de las políticas de privacidad de
              dichos sitios Web ni de las cookies que estos puedan almacenar en
              el ordenador del usuario.
            </p>

            <div className="bg-gray-100 p-4 rounded-lg mt-8">
              <p className="text-sm text-gray-600">
                <strong>Versión:</strong> 2.0 | <strong>Fecha:</strong>{' '}
                28/04/2020
              </p>
              <p className="text-sm text-gray-600 mt-2">
                © 2018-2020 Copyright AIXA CORPORE, S.L
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
