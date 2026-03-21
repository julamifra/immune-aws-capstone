import React from 'react';
import { motion } from 'framer-motion';
import HelmetPage from '@/components/HelmetPage';
import { termsOfUsePageMeta } from '@/data/Metadata/termsOfUsePageMeta';

const TermsOfUsePage = () => {
  return (
    <div className="bg-gray-50">
      <HelmetPage {...termsOfUsePageMeta} />
      <div className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 md:p-12 rounded-2xl shadow-xl"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Aviso Legal
          </h1>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-sm text-gray-500">
              Última actualización: 16 julio 2020 - Versión: V.1.0
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
              <h2 className="text-lg font-semibold text-yellow-800 mb-2">
                Aviso de Propiedad Intelectual
              </h2>
              <p className="text-yellow-700">
                Todos los documentos entregados como consecuencia de esta
                relación contractual, son propiedad de AIXA CORPORE, S.L y están
                protegidos por los derechos de Propiedad Intelectual e
                Industrial. El destinatario únicamente tiene derecho a un uso
                privado de los mismos en OCUTECNIA S.L.P.U., y necesita
                autorización expresa para modificarlos, reproducirlos,
                explotarlos y especialmente comercializarlos.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              1. Objeto y aceptación
            </h2>
            <p>
              El presente aviso legal regula el uso del sitio Web:{' '}
              <a
                href="https://ioamigo.com"
                className="text-blue-600 hover:text-blue-800"
              >
                www.ioamigo.com
              </a>
            </p>
            <p>
              El sitio web www.ioamigo.com presta servicios cuyo objetivo
              primordial es permitir el contacto entre los usuarios y la
              entidad, bien para ponerse en contacto con nosotros, responder a
              su solicitud, gestionar su reclamación, tramitar su compra,
              ejercitar sus derechos en protección de datos o para pedir
              presupuestos.
            </p>
            <p>
              La navegación por la página www.ioamigo.com atribuye la condición
              de usuario de la misma e implica la aceptación plena y sin
              reservas de todas y cada una de las disposiciones incluidas en
              este Aviso Legal, que pueden sufrir modificaciones.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              2. Titularidad de la web e identificación del Prestador de
              Servicios
            </h2>
            <p>
              Con la finalidad de dar cumplimiento al principio de Información
              general exigido por el Artículo 10 de la Ley 34/2002, de 11 de
              julio, de servicios de la sociedad de la información y de comercio
              electrónico informamos a nuestros usuarios que el presente sitio
              web pertenece a OCUTECNIA S.L.P.U. con CIF B38500096.
            </p>

            <div className="bg-gray-100 p-4 rounded-lg mt-4">
              <h3 className="font-semibold mb-2">Datos de contacto:</h3>
              <p>
                <strong>Dirección:</strong> Calle El Humo, 10, 1ab, 38003 –
                Santa Cruz De Tenerife
              </p>
              <p>
                <strong>Correo-e:</strong>{' '}
                <a
                  href="mailto:mercedesfrances@ioamigo.com"
                  className="text-blue-600 hover:text-blue-800"
                >
                  mercedesfrances@ioamigo.com
                </a>
              </p>
              <p>
                <strong>Teléfono:</strong> 922535971
              </p>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              3. Condiciones generales de acceso y utilización
            </h2>
            <p>
              El sitio Web y sus servicios son de acceso libre y gratuito, si
              bien la utilización de determinadas áreas o servicios está
              condicionada a cumplimentar formularios de recogida de datos. Sólo
              los mayores de 18 años podrán facilitar datos a través de nuestra
              web, y los menores de 14 años no pueden facilitarlos sin el
              consentimiento de los padres o tutores.
            </p>
            <p>
              El Usuario garantiza la autenticidad y actualidad de todos
              aquellos datos que comunique a OCUTECNIA S.L.P.U. y será el único
              responsable de las manifestaciones falsas o inexactas que realice.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              Tipos de usuarios de www.ioamigo.com:
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Usuarios que aportan datos en cualquiera de los formularios
                disponibles
              </li>
              <li>
                Usuarios que no han contactado pero de los que se recogen datos
                (cookies)
              </li>
              <li>Usuarios de nuestra área privada</li>
              <li>Usuarios que realizan comentarios en el blog</li>
              <li>
                Usuarios que realizan compras a través de nuestra tienda on-line
              </li>
              <li>Usuarios que nos remiten su curriculum vitae</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              3.1 Reglas y prohibiciones de uso
            </h3>
            <p>
              El Usuario se compromete expresamente a hacer un uso adecuado de
              los contenidos y servicios ofrecidos y a no emplearlos para:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Difundir contenidos delictivos, violentos, pornográficos,
                racistas, xenófobo, ofensivos, de apología del terrorismo o
                contrarios a la ley
              </li>
              <li>
                Introducir virus informáticos o realizar actuaciones
                susceptibles de alterar, estropear, interrumpir o generar
                errores
              </li>
              <li>
                Intentar acceder a áreas restringidas de los sistemas
                informáticos
              </li>
              <li>
                Vulnerar los derechos de propiedad intelectual o industrial
              </li>
              <li>
                Suplantar la identidad de otro Usuario, administraciones
                públicas o terceros
              </li>
              <li>
                Reproducir, copiar, distribuir o modificar los Contenidos sin
                autorización
              </li>
              <li>
                Recabar datos con finalidad publicitaria sin consentimiento
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">
              3.2. Procedimiento en caso de actividades ilícitas
            </h3>
            <p>
              En el caso de que cualquier usuario o un tercero considere que
              existen hechos o circunstancias que revelen el carácter ilícito de
              la utilización de cualquier contenido, deberá enviar una
              notificación a OCUTECNIA S.L.P.U. identificándose debidamente y
              especificando las supuestas infracciones.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              4. Política de privacidad
            </h2>
            <p>
              El usuario puede consultar cómo OCUTECNIA S.L.P.U. utiliza sus
              datos y las medidas de seguridad implantadas en el enlace:
              «Política de privacidad»
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              5. Política de cookies
            </h2>
            <p>
              OCUTECNIA S.L.P.U. instala cookies en el ordenador del usuario.
              Para conocer más las cookies de nuestro sitio web acuda al
              siguiente enlace: «política de cookies»
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              6. Notificaciones
            </h2>
            <p>
              Todas las notificaciones y comunicaciones entre los usuarios y
              OCUTECNIA S.L.P.U. se considerarán eficaces cuando se realicen a
              través de:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Correo postal: OCUTECNIA S.L.P.U. – Calle El Humo, 10, 1ab,
                38003 – Santa Cruz De Tenerife
              </li>
              <li>
                Correo electrónico:{' '}
                <a
                  href="mailto:mercedesfrances@ioamigo.com"
                  className="text-blue-600 hover:text-blue-800"
                >
                  mercedesfrances@ioamigo.com
                </a>
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              7. Propiedad Industrial y propiedad intelectual
            </h2>
            <p>
              Todos los contenidos del sitio Web, como textos, fotografías,
              gráficos, imágenes, iconos, tecnología, software, así como su
              diseño gráfico y códigos fuente, constituyen una obra cuya
              propiedad pertenece a OCUTECNIA S.L.P.U., sin que puedan
              entenderse cedidos al Usuario ninguno de los derechos de
              explotación sobre los mismos más allá de lo estrictamente
              necesario para el correcto uso de la Web.
            </p>
            <p>
              Los usuarios que accedan a este sitio Web pueden visualizar los
              contenidos y efectuar copias privadas autorizadas siempre que los
              elementos reproducidos no sean cedidos posteriormente a terceros,
              ni se instalen a servidores conectados a redes, ni sean objeto de
              ningún tipo de explotación.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              8. Exención de responsabilidad
            </h2>
            <p>
              La web www.ioamigo.com utiliza técnicas de seguridad de la
              información tales como firewalls, procedimientos de control de
              acceso y mecanismos criptográficos, todo ello con el objetivo de
              evitar el acceso no autorizado a los datos y garantizar la
              confidencialidad de los mismos.
            </p>
            <p>
              OCUTECNIA S.L.P.U. se reserva el derecho de eliminar o suspender
              su difusión, total o parcialmente, y a modificar la estructura y
              contenido de este sitio Web sin aviso previo. OCUTECNIA S.L.P.U.
              no responderá de los daños o perjuicios causados por decisiones
              tomadas en base a la información difundida.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              9. Nulidad parcial
            </h2>
            <p>
              Si alguna de las presentes cláusulas fuese declarada nula y sin
              efecto por resolución firme dictada por autoridad competente, los
              restantes términos y condiciones permanecerán en vigor, sin que
              queden afectados por dicha declaración de nulidad.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              10. Ley aplicable y tribunales competentes
            </h2>
            <p>
              El presente sitio web queda sometido a lo establecido por la
              legislación española y normativa europea que resulte de
              aplicación.
            </p>
            <p>
              Cualquier controversia que surja o guarde relación con el uso de
              la página web será sometida a la jurisdicción no exclusiva de los
              juzgados y tribunales españoles de la provincia de Santa Cruz de
              Tenerife.
            </p>
            <p>
              Si se trata de un consumidor final, nada en la presente cláusula
              afectará a los derechos que como tal le reconoce la legislación
              vigente, pudiendo elegir presentar una reclamación ante el Juez o
              Tribunales que correspondan a su domicilio.
            </p>

            <div className="bg-gray-100 p-4 rounded-lg mt-8">
              <p className="text-sm text-gray-600 mb-2">
                <strong>© 2018-2020 Copyright AIXA CORPORE, S.L</strong>
              </p>
              <p className="text-sm text-gray-600">
                Fecha: 16 julio 2020 | Versión: V.1.0
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfUsePage;
