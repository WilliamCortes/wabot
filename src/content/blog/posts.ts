import type { BlogPost } from './types';

export const posts: BlogPost[] = [
  {
    slug: 'como-crear-chatbot-whatsapp-guia-completa',
    title: 'Cómo crear un chatbot de WhatsApp para tu negocio: guía completa',
    description:
      'Todo lo que necesitas saber para poner en marcha un chatbot de WhatsApp: qué es la API oficial de WhatsApp Business, cómo funciona el precio por mensaje y qué pasos sigue una implementación real.',
    cluster: 'guias',
    publishedAt: '2026-08-20',
    keywords: ['chatbot de whatsapp', 'whatsapp business api', 'crear chatbot whatsapp'],
    coverVariant: 1,
    coverEyebrow: 'Guía completa',
    readingTime: '7 min',
    body: [
      {
        type: 'p',
        text: 'Un tendero en Bogotá revisa su WhatsApp a las 11 de la noche y encuentra 40 mensajes sin responder: pedidos, preguntas de horario, gente pidiendo el mismo catálogo por quinta vez ese día. No es un problema de mal servicio, es un problema de escala: un humano no puede estar despierto y disponible las 24 horas. Ahí es exactamente donde entra un chatbot de WhatsApp.',
      },
      {
        type: 'p',
        text: 'Esta guía explica, sin rodeos técnicos, qué es un chatbot de WhatsApp, sobre qué infraestructura corre y qué pasos sigue una implementación real, de las que sí llegan a producción.',
      },
      { type: 'h2', text: 'Qué es exactamente un chatbot de WhatsApp' },
      {
        type: 'p',
        text: 'Es un programa que responde automáticamente los mensajes que llegan a un número de WhatsApp Business: contesta preguntas frecuentes, muestra catálogo, toma pedidos, agenda citas y, cuando la conversación lo requiere, la pasa a una persona del equipo. No es magia ni "IA genérica conectada a un número cualquiera": para operar de forma estable y verificada, corre sobre la WhatsApp Business Platform de Meta.',
      },
      { type: 'h2', text: 'La diferencia entre la app de WhatsApp Business y la API' },
      {
        type: 'p',
        text: 'La app gratuita de WhatsApp Business (la que se instala en un celular) sirve para negocios pequeños que responden manualmente. La WhatsApp Business Platform —conocida como la API— es la infraestructura que usan las empresas para automatizar, integrar con sistemas propios y operar desde varios agentes a la vez. Según la documentación oficial de Meta for Developers, esta plataforma permite configurar agentes de IA que operan conversaciones de forma autónoma usando fuentes de conocimiento propias y conectores a sistemas externos.',
      },
      { type: 'h2', text: 'Cómo funciona el precio: ya no es "por conversación"' },
      {
        type: 'p',
        text: 'Durante años, Meta cobró por "conversaciones" de 24 horas: una tarifa plana por categoría y país, con una ventana gratuita si el cliente escribía primero. Eso cambió: desde julio de 2025 la WhatsApp Business Platform factura por mensaje entregado (marketing, utilidad o autenticación), según su categoría, el país del destinatario y el volumen. La ventana de servicio de 24 horas sigue existiendo: si el cliente te escribe primero, puedes responderle con texto libre o plantillas de utilidad sin costo adicional.',
      },
      {
        type: 'callout',
        text: 'En la práctica, esto significa que un negocio que solo responde a quien le escribe (soporte, pedidos, citas) paga mucho menos que uno que envía campañas masivas de marketing. Vale la pena diseñar el chatbot pensando primero en resolver, no en enviar.',
      },
      { type: 'h2', text: 'Los pasos de una implementación real' },
      {
        type: 'ol',
        items: [
          'Verificación del negocio: se registra la empresa en Meta Business Manager y se verifica el número de WhatsApp que va a operar el chatbot.',
          'Mapeo de conversaciones: se listan las preguntas y procesos más frecuentes (horarios, precios, disponibilidad, pedidos) para diseñar los flujos del bot antes de escribir una sola respuesta.',
          'Configuración de plantillas: los mensajes que inician una conversación (recordatorios, confirmaciones) deben pre-aprobarse como plantillas ante Meta.',
          'Entrenamiento con el catálogo real: el bot se carga con los productos, precios y políticas reales del negocio, no con respuestas genéricas.',
          'Prueba con tráfico real y ajuste: se lanza con un grupo reducido de conversaciones reales, se revisan los casos donde el bot falla y se corrigen los flujos.',
          'Traspaso a un humano definido: se establece con claridad cuándo y cómo una conversación pasa de el bot a una persona, para que el cliente nunca sienta que quedó atrapado.',
        ],
      },
      { type: 'h2', text: 'Errores comunes al lanzar un chatbot de WhatsApp' },
      {
        type: 'ul',
        items: [
          'Automatizar todo desde el día uno, sin dejar una salida clara hacia un humano.',
          'Usar un número personal en vez de verificar el negocio en la plataforma oficial, lo que aumenta el riesgo de bloqueos.',
          'No actualizar el catálogo o los precios del bot cuando cambian en el negocio real.',
          'Medir solo "cuántos mensajes respondió el bot" y no cuántas conversaciones terminaron en una venta o una cita agendada.',
        ],
      },
      {
        type: 'faq',
        items: [
          {
            q: '¿Necesito saber programar para tener un chatbot de WhatsApp?',
            a: 'No. La mayoría de negocios lo implementan a través de un proveedor que configura la plataforma, diseña los flujos y hace el mantenimiento. Tu trabajo es definir el catálogo, los precios y las respuestas que quieres dar.',
          },
          {
            q: '¿Cuánto se demora en quedar activo?',
            a: 'Depende de la complejidad, pero un chatbot con flujos básicos (catálogo, pedidos, horarios) suele quedar en producción en 48 a 72 horas una vez se verifica el negocio.',
          },
        ],
      },
    ],
    sources: [
      {
        title: 'About the WhatsApp Business Platform',
        url: 'https://developers.facebook.com/documentation/business-messaging/whatsapp/about-the-platform',
        publisher: 'Meta for Developers',
      },
      {
        title: 'Conversation-based pricing (Deprecated)',
        url: 'https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/conversation-based-pricing',
        publisher: 'Meta for Developers',
      },
    ],
  },

  {
    slug: 'whatsapp-business-estadisticas-2026',
    title: 'WhatsApp Business en cifras: lo que dicen los datos oficiales sobre negocios en 2026',
    description:
      'Cuántas empresas usan WhatsApp Business, cuántas personas les escriben cada día y qué tan rápido esperan respuesta. Los números detrás de por qué WhatsApp se volvió el canal de ventas número uno.',
    cluster: 'datos',
    publishedAt: '2026-08-21',
    keywords: ['estadisticas whatsapp business', 'whatsapp business 2026', 'datos whatsapp negocios'],
    coverVariant: 2,
    coverEyebrow: 'Datos y estadísticas',
    readingTime: '6 min',
    body: [
      {
        type: 'p',
        text: 'Cuando un negocio decide automatizar su WhatsApp, la primera pregunta suele ser "¿de verdad vale la pena?". Los números ayudan más que cualquier opinión. Estos son los datos más recientes, tomados directamente de los informes oficiales de WhatsApp Business y de firmas de investigación del sector, sobre cómo se está usando WhatsApp para hacer negocios.',
      },
      { type: 'h2', text: 'Crecimiento del uso empresarial' },
      {
        type: 'ul',
        items: [
          'Las cuentas activas de WhatsApp Business llegaron a 284 millones en 2026, un aumento del 42% en dos años.',
          '234 millones de personas escriben a diario a cuentas de negocio en WhatsApp.',
          'India concentra el mayor número de empresas usando WhatsApp Business, con más de 15 millones de negocios activos en la plataforma.',
        ],
      },
      { type: 'h2', text: 'Por qué WhatsApp gana frente a otros canales' },
      {
        type: 'p',
        text: 'La tasa de apertura de un mensaje de WhatsApp es del 98,2%, frente a un promedio global de apertura de correo electrónico de apenas 21,4%. No es una pequeña ventaja: es la diferencia entre un canal que la gente realmente revisa y uno que vive ignorado en la bandeja de spam.',
      },
      {
        type: 'quote',
        text: 'El 75,1% de los consumidores quiere poder escribirle a las empresas de la misma forma en que le escribe a sus amigos y familiares.',
        cite: 'The State of Business Messaging, WhatsApp Business',
      },
      { type: 'h2', text: 'Lo que esperan los clientes de una empresa en WhatsApp' },
      {
        type: 'table',
        headers: ['Expectativa del cliente', 'Dato'],
        rows: [
          ['Satisfacción reportada por negocios que usan WhatsApp Business', '73%'],
          ['Consumidores que esperan respuesta en menos de 24 horas', '82%'],
          ['Consumidores que creen que la IA mejoraría su experiencia de mensajería', '42,9%'],
        ],
      },
      { type: 'h2', text: 'Lo que significa esto para un negocio pequeño' },
      {
        type: 'p',
        text: 'Estas cifras no son solo curiosidades de reporte corporativo: son la razón por la que un chatbot de WhatsApp deja de ser "un lujo tecnológico" y pasa a ser infraestructura básica de atención. Si el 82% de tus clientes espera respuesta en menos de 24 horas y tú solo tienes dos personas contestando manualmente, la brecha entre lo que esperan y lo que reciben se paga en clientes perdidos.',
      },
      {
        type: 'callout',
        text: 'Un chatbot no reemplaza la atención humana: cierra la brecha entre cuándo escribe el cliente y cuándo puede responder tu equipo.',
      },
    ],
    sources: [
      {
        title: 'The State of Business Messaging',
        url: 'https://business.whatsapp.com/resources/resource-library/state-of-business-messaging',
        publisher: 'WhatsApp Business',
      },
    ],
  },

  {
    slug: 'chatbots-ia-vs-agentes-humanos-atencion-cliente',
    title: 'Chatbots con IA vs. agentes humanos: qué dicen los datos sobre atención al cliente',
    description:
      'HubSpot, Zendesk y McKinsey coinciden: la IA no reemplaza al equipo humano, lo libera de lo repetitivo. Un repaso a los datos reales de adopción, resultados y expectativas de los consumidores.',
    cluster: 'ia-atencion',
    publishedAt: '2026-08-22',
    keywords: ['ia en atencion al cliente', 'chatbot vs humano', 'automatizacion atencion cliente'],
    coverVariant: 3,
    coverEyebrow: 'IA y atención al cliente',
    readingTime: '6 min',
    body: [
      {
        type: 'p',
        text: '"¿El chatbot me va a quitar a mi equipo de atención?" Es la pregunta que más nos hacen los dueños de negocio antes de automatizar su WhatsApp. La respuesta honesta, según los datos de la industria, es que no: la IA se está usando para absorber lo repetitivo, no para reemplazar el criterio humano en lo que sí lo necesita.',
      },
      { type: 'h2', text: 'Lo que muestra la adopción real' },
      {
        type: 'ul',
        items: [
          'El 77% de los equipos de servicio al cliente que usan IA reportan resultados excelentes; 92% dice que mejora su tiempo de respuesta y 86% su satisfacción del cliente (CSAT), según el reporte State of Service de HubSpot.',
          'Los equipos que adoptan IA resuelven entre 11% y 30% de su volumen de soporte sin intervención humana.',
          'El 90% de los líderes de experiencia de cliente encuestados por Zendesk reporta retorno de inversión positivo en sus herramientas de IA.',
        ],
      },
      { type: 'h2', text: 'La IA no reemplaza: amplifica' },
      {
        type: 'quote',
        text: 'El 75% de los líderes de experiencia de cliente ve la IA como una fuerza que amplifica la inteligencia humana, no que la reemplaza.',
        cite: 'Zendesk CX Trends Report',
      },
      {
        type: 'p',
        text: 'McKinsey llega a una conclusión parecida desde otro ángulo: aplicar IA generativa a funciones de atención al cliente puede aumentar la productividad entre 30% y 45% del costo actual de la función, no eliminando personas, sino quitándoles de encima las preguntas repetitivas para que dediquen su tiempo a los casos que sí requieren juicio humano.',
      },
      { type: 'h2', text: 'Lo que de verdad importa para el cliente' },
      {
        type: 'table',
        headers: ['Expectativa', 'Dato'],
        rows: [
          ['Consumidores que ya ven la IA como parte normal del servicio', '81%'],
          ['Clientes que esperan atención disponible 24/7', '74%'],
          ['Clientes frustrados por repetir su caso a distintos agentes', '74%'],
          ['Prefiere un chatbot antes que esperar a un humano para algo simple y rápido', '82%'],
        ],
      },
      {
        type: 'p',
        text: 'El patrón es consistente en los tres reportes: la gente no rechaza la automatización, rechaza la automatización mal diseñada, la que la obliga a repetir su historia o la deja sin salida hacia una persona real cuando el caso lo amerita.',
      },
      {
        type: 'callout',
        text: 'La pregunta correcta no es "IA o humano", sino "qué parte de la conversación le corresponde a cada uno". Las preguntas frecuentes, los horarios y los pedidos estándar: al bot. Las quejas, las negociaciones y los casos raros: a tu equipo.',
      },
    ],
    sources: [
      { title: '70+ customer service statistics to know', url: 'https://blog.hubspot.com/service/customer-service-stats', publisher: 'HubSpot' },
      { title: '92 customer service statistics you need to know', url: 'https://www.zendesk.com/blog/customer-service-statistics/', publisher: 'Zendesk' },
      {
        title: 'The next frontier of customer engagement: AI-enabled customer service',
        url: 'https://www.mckinsey.com/~/media/mckinsey/business%20functions/operations/our%20insights/the%20next%20frontier%20of%20customer%20engagement%20ai%20enabled%20customer%20service/the-next-frontier-of-customer-engagement-ai-enabled-customer-service.pdf',
        publisher: 'McKinsey & Company',
      },
    ],
  },

  {
    slug: 'restaurante-automatizar-pedidos-whatsapp',
    title: 'Cómo un restaurante puede automatizar pedidos por WhatsApp sin perder el toque humano',
    description:
      'La hora pico no debería significar clientes esperando 20 minutos por una respuesta. Cómo diseñar un flujo de pedidos por WhatsApp que resuelve lo repetitivo y deja lo importante para tu equipo.',
    cluster: 'casos-de-uso',
    publishedAt: '2026-08-23',
    keywords: ['chatbot whatsapp restaurante', 'pedidos por whatsapp', 'automatizar pedidos restaurante'],
    coverVariant: 4,
    coverEyebrow: 'Caso de uso',
    readingTime: '5 min',
    body: [
      {
        type: 'p',
        text: 'Son las 12:40 p.m. un viernes. El celular del restaurante no para de sonar: "¿tienen mesa?", "¿hacen domicilio hasta el norte?", "¿cuál es el menú de hoy?", tres personas preguntando lo mismo casi al mismo tiempo. Mientras alguien del equipo intenta responder, la cocina también necesita esa misma persona. Ese cuello de botella —no la falta de clientes— es lo que le cuesta ventas a un restaurante en hora pico.',
      },
      { type: 'h2', text: 'Qué sí conviene automatizar' },
      {
        type: 'ul',
        items: [
          'El menú del día y los precios: la pregunta más repetida en cualquier restaurante.',
          'Horarios de atención y zonas de domicilio.',
          'Toma del pedido completo (plato, cantidad, dirección) antes de pasarlo a cocina.',
          'Confirmación automática del pedido con tiempo estimado de entrega.',
        ],
      },
      { type: 'h2', text: 'Qué NO conviene dejarle al bot' },
      {
        type: 'ul',
        items: [
          'Quejas sobre un pedido que llegó mal o incompleto: eso necesita una disculpa humana, no una respuesta automática.',
          'Pedidos grandes o para eventos, que suelen requerir negociación de precio o menú especial.',
          'Cualquier cliente que pida explícitamente hablar con una persona.',
        ],
      },
      { type: 'h2', text: 'Un flujo real, paso a paso' },
      {
        type: 'ol',
        items: [
          'El cliente escribe y el bot responde en segundos con el menú del día y las opciones (recoger o domicilio).',
          'El bot pregunta dirección (si es domicilio) y forma de pago.',
          'El bot confirma el pedido completo y da un tiempo estimado.',
          'El pedido llega automáticamente al equipo de cocina o al sistema de pedidos que ya use el restaurante.',
          'Si el cliente escribe algo fuera del flujo ("necesito cancelar", "esto llegó frío"), el bot lo pasa de inmediato a una persona.',
        ],
      },
      {
        type: 'quote',
        text: 'En 2023, el 36% de los compradores ya hacía compras a través de una app de mensajería, un aumento del 227% desde 2021.',
        cite: 'State of Commerce Report, Salesforce',
      },
      {
        type: 'callout',
        text: 'El objetivo no es que el cliente sienta que "le tocó un robot", sino que sienta que le respondieron rápido. Un buen flujo de pedidos se nota en que nadie se da cuenta de que fue automático hasta que lo piensa.',
      },
    ],
    sources: [
      {
        title: 'Highlights from the State of Commerce Report',
        url: 'https://www.salesforce.com/resources/research-reports/state-of-commerce/',
        publisher: 'Salesforce',
      },
    ],
  },

  {
    slug: 'chatbot-whatsapp-vs-linea-telefonica',
    title: 'Chatbot de WhatsApp vs. línea telefónica tradicional: ¿cuál conviene a tu negocio?',
    description:
      'Comparamos costo, velocidad de respuesta, capacidad de atender varios clientes a la vez y experiencia del cliente entre un chatbot de WhatsApp y una línea de atención telefónica clásica.',
    cluster: 'comparativas',
    publishedAt: '2026-08-24',
    keywords: ['chatbot whatsapp vs telefono', 'linea de atencion whatsapp', 'call center vs whatsapp'],
    coverVariant: 5,
    coverEyebrow: 'Comparativa',
    readingTime: '5 min',
    body: [
      {
        type: 'p',
        text: 'Durante décadas, la línea telefónica fue la única forma "seria" de atender a un cliente. Hoy, para la mayoría de negocios pequeños y medianos, ya no es la opción más eficiente ni la que prefiere el cliente. Esta comparación es directa, sin vender humo: en qué gana cada canal y cuándo tiene sentido combinarlos.',
      },
      {
        type: 'table',
        headers: ['Criterio', 'Chatbot de WhatsApp', 'Línea telefónica'],
        rows: [
          ['Clientes atendidos a la vez', 'Ilimitados, en paralelo', 'Uno por línea disponible'],
          ['Disponibilidad', '24/7 sin costo de personal adicional', 'Limitada al horario del equipo'],
          ['Costo por interacción', 'Fracción del costo de un agente telefónico', 'Alto: salario, planta telefónica, tiempos muertos'],
          ['Deja registro escrito', 'Sí, siempre', 'Solo si se graba explícitamente'],
          ['Preferencia del cliente para trámites simples', '82% prefiere chat a esperar en línea', '—'],
        ],
      },
      { type: 'h2', text: 'Dónde gana el teléfono' },
      {
        type: 'p',
        text: 'Para negociaciones complejas, quejas delicadas o clientes que necesitan sentir el tono de voz de una persona, una llamada sigue siendo insustituible. Ningún chatbot bien diseñado intenta reemplazar eso: lo que hace es filtrar el volumen de preguntas simples para que, cuando alguien sí necesite hablar, encuentre a una persona disponible y no una fila de espera.',
      },
      { type: 'h2', text: 'El modelo que mejor funciona: no es uno u otro' },
      {
        type: 'p',
        text: 'Los negocios que mejores resultados obtienen no eligen entre chatbot o teléfono: usan el chatbot como primera línea para resolver lo repetitivo (horarios, precios, pedidos, citas) y reservan la atención telefónica o humana para lo que de verdad la necesita.',
      },
      {
        type: 'faq',
        items: [
          {
            q: '¿Un chatbot de WhatsApp puede reemplazar por completo un call center?',
            a: 'En negocios pequeños y medianos, sí puede absorber la mayoría del volumen de consultas repetitivas. Para operaciones grandes con soporte técnico complejo, suele funcionar mejor como primer filtro antes de escalar a un agente humano.',
          },
          {
            q: '¿Es más barato un chatbot que una línea telefónica?',
            a: 'Sí. Un chatbot de WhatsApp bien configurado tiene un costo fijo mensual mucho menor que mantener personal dedicado a contestar llamadas, y puede atender múltiples conversaciones al mismo tiempo sin costo adicional por cada una.',
          },
        ],
      },
    ],
    sources: [
      { title: '70+ customer service statistics to know', url: 'https://blog.hubspot.com/service/customer-service-stats', publisher: 'HubSpot' },
    ],
  },

  {
    slug: 'whatsapp-colombia-92-por-ciento-usuarios',
    title: 'Por qué el 92% de los colombianos usa WhatsApp (y cómo tu negocio puede aprovecharlo)',
    description:
      'WhatsApp es, de lejos, el canal digital más usado en Colombia. Los datos de la Cámara Colombiana de Comercio Electrónico y de plataformas locales muestran por qué ya no es opcional para vender.',
    cluster: 'colombia',
    publishedAt: '2026-08-25',
    keywords: ['whatsapp colombia', 'ecommerce colombia whatsapp', 'vender por whatsapp colombia'],
    coverVariant: 6,
    coverEyebrow: 'Mercado colombiano',
    readingTime: '5 min',
    body: [
      {
        type: 'p',
        text: 'Si vendes algo en Colombia, tu cliente casi con seguridad tiene WhatsApp abierto en este momento. No es una exageración de marketing: es lo que muestran, de forma consistente, los datos del comercio electrónico colombiano.',
      },
      { type: 'h2', text: 'El canal que ya ganó' },
      {
        type: 'ul',
        items: [
          'Entre el 92% y el 94% de los usuarios de internet en Colombia, de 16 a 64 años, usa WhatsApp mensualmente.',
          'El 84,1% de las tiendas en línea colombianas usa WhatsApp como canal de venta, según el informe NubeCommerce Colombia de Tiendanube: muy por encima de Instagram Shopping (42,9%) o los marketplaces (36,2%).',
          'El comercio electrónico colombiano creció 19,9% en número de operaciones frente a 2024, según cifras de la Cámara Colombiana de Comercio Electrónico (CCCE).',
        ],
      },
      {
        type: 'quote',
        text: 'El eCommerce en Colombia alcanzó $27,3 billones en ventas en línea solo en el primer trimestre, con un crecimiento anual del 16,4%.',
        cite: 'Cámara Colombiana de Comercio Electrónico (CCCE)',
      },
      { type: 'h2', text: 'Lo que esto significa para un negocio local' },
      {
        type: 'p',
        text: 'No se trata de "estar en WhatsApp" —eso ya lo hacen casi todos los negocios colombianos, aunque sea de forma manual desde un celular—. Se trata de que ese canal, al ser el más usado, es también el que más rápido se satura de mensajes sin responder si no tiene un sistema detrás. La ventaja competitiva ya no es tener WhatsApp: es responder ahí más rápido y mejor que el negocio de la cuadra de al lado.',
      },
      { type: 'h2', text: 'Tres señales de que tu WhatsApp necesita un chatbot' },
      {
        type: 'ol',
        items: [
          'Respondes los mismos horarios, precios o direcciones más de diez veces al día.',
          'Pierdes pedidos porque el mensaje se quedó "perdido" entre otras conversaciones.',
          'Solo una persona del equipo sabe responder el WhatsApp del negocio, y cuando no está, las ventas se frenan.',
        ],
      },
      {
        type: 'callout',
        text: 'En un mercado donde 9 de cada 10 personas conectadas usa WhatsApp todos los meses, no automatizar ese canal no es "quedarse igual": es quedarse atrás frente a quien sí lo hizo.',
      },
    ],
    sources: [
      {
        title: 'WhatsApp se consolida como aliado clave del comercio electrónico en Colombia',
        url: 'https://www.portafolio.co/tecnologia/whatsapp-se-consolida-como-aliado-clave-del-comercio-electronico-en-colombia-segun-informe-de-e-commerce-489757',
        publisher: 'Portafolio',
      },
      {
        title: 'Informe Trimestral del Comercio Electrónico en Colombia',
        url: 'https://ccce.org.co/noticias/informe-trimestral-del-comercio-electronico-en-colombia-2025-i/',
        publisher: 'Cámara Colombiana de Comercio Electrónico (CCCE)',
      },
    ],
  },

  {
    slug: 'ventana-24-horas-whatsapp-business',
    title: 'Qué es la ventana de 24 horas de WhatsApp y cómo evitar que te cueste dinero',
    description:
      'La regla más importante y menos entendida de la WhatsApp Business Platform: qué puedes enviar gratis, qué necesita una plantilla pre-aprobada y cómo diseñar tu chatbot para no pagar de más.',
    cluster: 'guias',
    publishedAt: '2026-08-26',
    keywords: ['ventana 24 horas whatsapp', 'sesion de servicio whatsapp', 'plantillas whatsapp'],
    coverVariant: 2,
    coverEyebrow: 'Guía práctica',
    readingTime: '5 min',
    body: [
      {
        type: 'p',
        text: 'Muchos negocios descubren la "ventana de 24 horas" de la peor forma posible: cuando intentan responderle a un cliente dos días después de su último mensaje y el envío falla. Entender esta regla es la diferencia entre un chatbot que factura de forma predecible y uno que sorprende con cargos que nadie esperaba.',
      },
      { type: 'h2', text: 'Qué es la ventana de servicio de 24 horas' },
      {
        type: 'p',
        text: 'Cada vez que un cliente te escribe, se abre una ventana de 24 horas en la que puedes responderle con mensajes de texto libre o plantillas de utilidad sin costo adicional por mensaje. Pasadas esas 24 horas sin que el cliente vuelva a escribir, cualquier mensaje que quieras enviarle debe ser una plantilla pre-aprobada por Meta, y esa plantilla sí tiene costo según su categoría.',
      },
      { type: 'h2', text: 'Las tres categorías de plantillas que existen' },
      {
        type: 'table',
        headers: ['Categoría', 'Para qué sirve'],
        rows: [
          ['Autenticación', 'Enviar códigos de un solo uso; Meta define el texto y no se puede modificar.'],
          ['Utilidad', 'Confirmar, recordar o dar seguimiento a una transacción ya acordada (un pedido, una cita).'],
          ['Marketing', 'Promociones, novedades de producto o cualquier mensaje comercial no solicitado en ese momento.'],
        ],
      },
      {
        type: 'p',
        text: 'Elegir mal la categoría no es un detalle menor: Meta revisa cada plantilla al registrarla y puede reclasificarla automáticamente si no cumple con las reglas de su categoría, lo que puede pausar el envío mientras se corrige.',
      },
      { type: 'h2', text: 'Cómo diseñar tu chatbot para aprovechar la ventana' },
      {
        type: 'ul',
        items: [
          'Prioriza que el cliente inicie la conversación: si él escribe primero, tienes 24 horas de mensajería libre.',
          'Reserva las plantillas de marketing para lo que de verdad necesita reactivar una conversación cerrada, no para cada aviso.',
          'Usa plantillas de utilidad para confirmaciones y recordatorios: son más baratas que las de marketing y tienen mejor tasa de entrega.',
          'Diseña el flujo para resolver todo lo posible dentro de esa primera ventana, en lugar de dejar preguntas a medias para el día siguiente.',
        ],
      },
      {
        type: 'callout',
        text: 'La regla de oro: si el cliente ya te escribió hoy, aprovecha esa ventana para resolver, confirmar y cerrar. Lo que quede pendiente para después de 24 horas es lo único que realmente necesita una plantilla pagada.',
      },
    ],
    sources: [
      {
        title: 'Template Categorization',
        url: 'https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/template-categorization',
        publisher: 'Meta for Developers',
      },
    ],
  },

  {
    slug: 'verificar-negocio-meta-business-manager',
    title: 'Cómo verificar tu negocio en Meta Business Manager, paso a paso',
    description:
      'Antes de operar un chatbot de WhatsApp a escala necesitas verificar tu empresa ante Meta. Esta es la ruta completa, sin pasos ocultos ni sorpresas de último momento.',
    cluster: 'guias',
    publishedAt: '2026-08-26',
    keywords: ['verificar negocio meta', 'meta business manager whatsapp', 'verificacion whatsapp business'],
    coverVariant: 4,
    coverEyebrow: 'Guía práctica',
    readingTime: '5 min',
    body: [
      {
        type: 'p',
        text: 'La verificación del negocio es el paso que más negocios subestiman y el que más dolores de cabeza evita después. Sin ella, tu número queda limitado en volumen de mensajes y con más riesgo de restricciones. Con ella, empiezas a operar con la confianza de que Meta reconoce a tu empresa como legítima.',
      },
      { type: 'h2', text: 'Lo que necesitas antes de empezar' },
      {
        type: 'ul',
        items: [
          'Un correo corporativo o, en su defecto, uno que puedas asociar de forma clara al negocio.',
          'El nombre legal de la empresa tal como aparece en el registro mercantil o documento equivalente.',
          'Un número de WhatsApp que no esté ya vinculado a otra cuenta personal o de otro Business Manager.',
          'Un documento que confirme la dirección o existencia legal del negocio, en caso de que Meta lo solicite.',
        ],
      },
      { type: 'h2', text: 'El proceso, paso a paso' },
      {
        type: 'ol',
        items: [
          'Crear (o entrar a) tu cuenta de Meta Business Manager con el correo del negocio.',
          'Ir a la sección de configuración del negocio y seleccionar "Verificación de la empresa".',
          'Completar los datos legales: razón social, país, dirección y número de identificación tributaria.',
          'Elegir el número de teléfono que operará el chatbot y confirmarlo por SMS o llamada.',
          'Esperar la revisión de Meta, que puede tardar desde minutos hasta un par de días según el volumen de solicitudes.',
          'Una vez aprobado, conectar el número a la WhatsApp Business Platform para empezar la configuración del chatbot.',
        ],
      },
      {
        type: 'callout',
        text: 'Un error común es intentar verificar con datos que no coinciden exactamente entre el registro mercantil y lo que se escribe en Meta Business Manager. Cuando los nombres o direcciones no calzan letra por letra, la revisión se demora más o se rechaza.',
      },
      { type: 'h2', text: 'Qué pasa si tu negocio no tiene registro formal' },
      {
        type: 'p',
        text: 'Meta también permite operar con un perfil de negocio no verificado a nivel legal, pero con límites más bajos de mensajería y menor confianza de marca frente al cliente. Para un negocio que ya está creciendo o piensa automatizar en serio, verificar es la inversión de tiempo que despeja ese techo.',
      },
    ],
    sources: [
      {
        title: 'About the WhatsApp Business Platform',
        url: 'https://developers.facebook.com/documentation/business-messaging/whatsapp/about-the-platform',
        publisher: 'Meta for Developers',
      },
    ],
  },

  {
    slug: 'plantillas-mensaje-whatsapp-aprobacion',
    title: 'Plantillas de mensaje en WhatsApp: qué son y cómo lograr que Meta las apruebe',
    description:
      'Una plantilla mal categorizada puede frenar tus envíos justo cuando más los necesitas. Cómo escribir plantillas que pasen la revisión de Meta a la primera.',
    cluster: 'guias',
    publishedAt: '2026-08-26',
    keywords: ['plantillas whatsapp business', 'aprobar plantilla whatsapp', 'template whatsapp meta'],
    coverVariant: 6,
    coverEyebrow: 'Guía práctica',
    readingTime: '5 min',
    body: [
      {
        type: 'p',
        text: 'Una plantilla de WhatsApp es cualquier mensaje que tu negocio quiere enviar fuera de la ventana de 24 horas: un recordatorio de cita, una confirmación de pedido, una promoción. Antes de poder usarla, Meta la revisa y la clasifica en una de tres categorías. Si la categoría no calza con el contenido real del mensaje, la aprobación se complica.',
      },
      { type: 'h2', text: 'Por qué se rechazan la mayoría de plantillas' },
      {
        type: 'ul',
        items: [
          'Mezclar contenido promocional dentro de una plantilla marcada como "utilidad" (por ejemplo, añadir un descuento a un recordatorio de cita).',
          'Usar variables sin contexto suficiente, lo que dificulta que el revisor entienda qué información real recibirá el cliente.',
          'Textos genéricos que no reflejan una transacción específica y verificable con el destinatario.',
          'Enlaces o números de contacto que no coinciden con los registrados para el negocio.',
        ],
      },
      { type: 'h2', text: 'Cómo escribir una plantilla que pase la revisión' },
      {
        type: 'ol',
        items: [
          'Define primero la categoría real del mensaje: si es sobre una transacción ya acordada, es utilidad, no marketing.',
          'Escribe el texto completo con las variables en contexto claro (ej. "Tu pedido {{1}} llega el {{2}}"), no frases sueltas.',
          'Evita lenguaje promocional o urgente ("¡Oferta única!") en plantillas de utilidad.',
          'Revisa que el nombre del negocio y los datos de contacto coincidan exactamente con los verificados en Meta Business Manager.',
        ],
      },
      {
        type: 'p',
        text: 'Si Meta reclasifica una plantilla de forma automática porque detecta que no cumple su categoría declarada, es posible solicitar una revisión manual desde WhatsApp Manager, en la sección de plantillas de mensaje, seleccionando "Actualización de categoría de plantilla".',
      },
    ],
    sources: [
      {
        title: 'Template Categorization',
        url: 'https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/template-categorization',
        publisher: 'Meta for Developers',
      },
    ],
  },

  {
    slug: 'evitar-bloqueo-numero-whatsapp-business',
    title: 'Cómo evitar que bloqueen tu número de WhatsApp Business',
    description:
      'La calificación de calidad de tu número determina cuántos mensajes puedes enviar y qué tan cerca estás de una suspensión. Qué la baja y cómo mantenerla en verde.',
    cluster: 'guias',
    publishedAt: '2026-08-26',
    keywords: ['bloqueo whatsapp business', 'calificacion de calidad whatsapp', 'suspension whatsapp business'],
    coverVariant: 3,
    coverEyebrow: 'Guía práctica',
    readingTime: '5 min',
    body: [
      {
        type: 'p',
        text: 'Perder el número de WhatsApp del negocio de un día para otro es una de las peores cosas que le puede pasar a un chatbot bien construido. Casi siempre es evitable, porque no ocurre al azar: Meta califica la calidad de cada número y esa calificación es la que determina el riesgo real de suspensión.',
      },
      { type: 'h2', text: 'Cómo funciona la calificación de calidad' },
      {
        type: 'p',
        text: 'Cada número tiene una calificación —verde, amarilla o roja— que se recalcula sobre una ventana móvil de los últimos siete días, basada en las señales de los propios clientes: cuántos bloquean el número, cuántos lo reportan como spam y cómo responden a los mensajes recibidos. Una calificación roja congela el límite de envío y pone al número en riesgo elevado de suspensión si la situación persiste.',
      },
      { type: 'h2', text: 'Qué detona la mayoría de bloqueos' },
      {
        type: 'ul',
        items: [
          'Escribirle a personas que nunca dieron su número o que no esperaban ese mensaje.',
          'Enviar mensajes a alta velocidad desde un número recién creado, sin historial previo.',
          'Ignorar reportes o bloqueos repetidos sin ajustar la estrategia de envío.',
          'Usar plantillas de marketing disfrazadas de mensajes transaccionales.',
        ],
      },
      { type: 'h2', text: 'Cómo mantener tu calificación en verde' },
      {
        type: 'ol',
        items: [
          'Solo escríbele primero a quien haya dado su número de forma explícita (un formulario, un pedido, una cita agendada).',
          'Empieza con volúmenes bajos si el número es nuevo, y auméntalos de forma gradual.',
          'Da siempre una salida clara para que el cliente pueda dejar de recibir mensajes si así lo pide.',
          'Revisa la calificación de calidad regularmente desde la pestaña de números en WhatsApp Manager, no solo cuando ya hay un problema.',
        ],
      },
      {
        type: 'callout',
        text: 'La mejor protección contra un bloqueo no es técnica, es de diseño: si el cliente siente que le escribiste porque él lo pidió, casi nunca reporta el número.',
      },
    ],
    sources: [
      {
        title: "About Your WhatsApp Business Phone Number's Quality Rating",
        url: 'https://www.facebook.com/business/help/896873687365001',
        publisher: 'Meta Business Help Center',
      },
      {
        title: 'WhatsApp Business Platform policy and spam enforcement',
        url: 'https://developers.facebook.com/documentation/business-messaging/whatsapp/policy-enforcement',
        publisher: 'Meta for Developers',
      },
    ],
  },

  {
    slug: 'tasa-apertura-whatsapp-vs-email-instagram',
    title: 'La tasa de apertura del 98%: por qué WhatsApp le gana al correo y a Instagram',
    description:
      'Comparamos, con datos de la industria, la efectividad real de WhatsApp frente al email marketing y los mensajes directos de Instagram para llegar a un cliente.',
    cluster: 'datos',
    publishedAt: '2026-08-26',
    keywords: ['tasa de apertura whatsapp', 'whatsapp vs email marketing', 'whatsapp vs instagram'],
    coverVariant: 5,
    coverEyebrow: 'Datos y estadísticas',
    readingTime: '4 min',
    body: [
      {
        type: 'p',
        text: 'Si tuvieras que elegir un solo canal para asegurarte de que un cliente vea tu mensaje, los datos ya eligieron por ti. La brecha entre WhatsApp y el resto de canales digitales no es marginal: es de varias veces.',
      },
      {
        type: 'table',
        headers: ['Canal', 'Tasa de apertura promedio'],
        rows: [
          ['WhatsApp', '98,2%'],
          ['Correo electrónico', '21,4%'],
        ],
      },
      {
        type: 'p',
        text: 'Esa diferencia se explica por el hábito: la gente revisa WhatsApp varias veces por hora, casi como una extensión de su conversación con amigos y familia, mientras que el correo se acumula sin abrir durante días. Por eso el 75,1% de los consumidores dice que quiere poder escribirle a las empresas de la misma forma en que le escribe a sus contactos personales.',
      },
      { type: 'h2', text: 'Y frente a Instagram, ¿qué pasa?' },
      {
        type: 'p',
        text: 'Instagram sigue siendo un canal fuerte para descubrimiento de marca —el 42,9% de las tiendas en línea colombianas lo usa como canal de venta—, pero funciona distinto: es un canal de exploración, no de conversación transaccional. WhatsApp es donde ocurre la conversación que sí cierra la venta: la pregunta de precio, la dirección de envío, la confirmación del pedido.',
      },
      {
        type: 'callout',
        text: 'La estrategia que mejor funciona no es "WhatsApp o Instagram": es usar Instagram para que te descubran y WhatsApp para que te compren.',
      },
    ],
    sources: [
      {
        title: 'The State of Business Messaging',
        url: 'https://business.whatsapp.com/resources/resource-library/state-of-business-messaging',
        publisher: 'WhatsApp Business',
      },
    ],
  },

  {
    slug: 'costo-no-responder-a-tiempo',
    title: 'Cuánto cuesta realmente no responder a tiempo a un cliente',
    description:
      'Los datos de HubSpot y Zendesk muestran que el tiempo de respuesta ya no es un detalle de servicio: es una de las principales razones por las que un cliente se va con la competencia.',
    cluster: 'datos',
    publishedAt: '2026-08-26',
    keywords: ['tiempo de respuesta cliente', 'costo de no responder', 'atencion al cliente lenta'],
    coverVariant: 1,
    coverEyebrow: 'Datos y estadísticas',
    readingTime: '4 min',
    body: [
      {
        type: 'p',
        text: 'Un cliente que espera demasiado no siempre se queja: muchas veces, simplemente se va a comprarle a otro negocio sin decir nada. Ese silencio es el costo más caro y menos visible de una atención lenta.',
      },
      {
        type: 'ul',
        items: [
          'El 85% de los líderes de experiencia de cliente reconoce que los clientes abandonan una marca por problemas sin resolver, incluso en el primer contacto, según Zendesk.',
          'El 88% de los clientes espera hoy respuestas más rápidas que hace apenas un año.',
          'Los equipos que adoptan IA para atención han recortado el tiempo de manejo de llamadas en 45% y resuelto casos 44% más rápido, según HubSpot.',
        ],
      },
      {
        type: 'quote',
        text: 'El 74% de los clientes encuentra frustrante tener que repetir su historia a distintos agentes.',
        cite: 'Zendesk CX Trends Report',
      },
      { type: 'h2', text: 'Por qué esto pega más fuerte en negocios pequeños' },
      {
        type: 'p',
        text: 'Una empresa grande puede absorber algunos clientes insatisfechos sin notarlo. Un negocio pequeño, no: cada cliente que se va en silencio por una respuesta tardía es un porcentaje real de sus ingresos del mes. La buena noticia es que la solución no requiere contratar más personal, sino automatizar las respuestas que hoy toman más tiempo del que deberían.',
      },
    ],
    sources: [
      { title: '92 customer service statistics you need to know', url: 'https://www.zendesk.com/blog/customer-service-statistics/', publisher: 'Zendesk' },
      { title: '70+ customer service statistics to know', url: 'https://blog.hubspot.com/service/customer-service-stats', publisher: 'HubSpot' },
    ],
  },

  {
    slug: 'chatbot-arbol-decisiones-vs-ia-generativa',
    title: 'Chatbot con árbol de decisiones vs. IA generativa: ¿cuál necesita tu negocio?',
    description:
      'No todo chatbot es igual. Comparamos el modelo clásico de botones y flujos fijos contra los agentes de IA generativa que entienden lenguaje natural, y cuándo conviene cada uno.',
    cluster: 'ia-atencion',
    publishedAt: '2026-08-26',
    keywords: ['chatbot arbol de decisiones', 'ia generativa whatsapp', 'tipos de chatbot'],
    coverVariant: 2,
    coverEyebrow: 'IA y atención',
    readingTime: '5 min',
    body: [
      {
        type: 'p',
        text: '"Chatbot" no es una sola cosa. Hay una diferencia enorme entre un bot que solo entiende botones y menús fijos, y un agente de IA generativa que interpreta lo que el cliente escribe en lenguaje natural. Ninguno es mejor en abstracto: cada uno resuelve un problema distinto.',
      },
      {
        type: 'table',
        headers: ['', 'Árbol de decisiones', 'IA generativa'],
        rows: [
          ['Cómo funciona', 'Menús y botones predefinidos', 'Entiende lenguaje natural y contexto'],
          ['Predictibilidad', 'Alta: siempre responde lo mismo', 'Variable: se adapta a cada mensaje'],
          ['Costo de implementación', 'Bajo', 'Medio a alto'],
          ['Ideal para', 'Procesos simples y repetitivos (horarios, pedidos estándar)', 'Consultas variadas o catálogos complejos'],
          ['Riesgo principal', 'Se siente rígido si el cliente se sale del guion', 'Puede responder algo impreciso si no está bien entrenado'],
        ],
      },
      { type: 'h2', text: 'Cuándo conviene cada modelo' },
      {
        type: 'p',
        text: 'Si tu negocio vive de procesos muy repetibles —un restaurante con un menú fijo, una peluquería con horarios estándar— un árbol de decisiones bien diseñado resuelve el 90% de los casos con menor costo y cero riesgo de respuestas inesperadas. Si tu catálogo es amplio, tus clientes hacen preguntas muy variadas o compites en un mercado donde la experiencia conversacional es parte del valor, la IA generativa justifica su costo adicional.',
      },
      {
        type: 'callout',
        text: 'Muchas implementaciones exitosas combinan ambos: un árbol de decisiones para lo estructurado (menú, horarios, pedidos) y una capa de IA generativa solo para las preguntas abiertas que el árbol no contempla.',
      },
    ],
    sources: [
      {
        title: 'About the WhatsApp Business Platform',
        url: 'https://developers.facebook.com/documentation/business-messaging/whatsapp/about-the-platform',
        publisher: 'Meta for Developers',
      },
    ],
  },

  {
    slug: 'momento-bot-pasa-a-humano',
    title: 'Cómo diseñar el momento exacto en que el bot pasa la conversación a un humano',
    description:
      'El error más común al automatizar WhatsApp no es el bot: es no decidir con claridad cuándo debe dejar de responder y avisarle a una persona. Cómo diseñar esa transición.',
    cluster: 'ia-atencion',
    publishedAt: '2026-08-26',
    keywords: ['bot a humano whatsapp', 'escalar conversacion chatbot', 'transferencia a agente humano'],
    coverVariant: 4,
    coverEyebrow: 'IA y atención',
    readingTime: '4 min',
    body: [
      {
        type: 'p',
        text: 'La queja más frecuente sobre los chatbots no es que existan: es sentirse atrapado en uno sin poder hablar con una persona. Ese único momento —cuándo y cómo el bot cede el control— define si el cliente termina la conversación satisfecho o frustrado.',
      },
      { type: 'h2', text: 'Señales que deberían activar el traspaso a un humano' },
      {
        type: 'ul',
        items: [
          'El cliente escribe algo que el bot no reconoce dos veces seguidas.',
          'Aparecen palabras asociadas a quejas, reclamos o insatisfacción ("mal", "reembolso", "queja", "nunca llegó").',
          'El cliente pide explícitamente hablar con una persona, en cualquier momento del flujo.',
          'El pedido o la solicitud supera cierto valor o complejidad definida de antemano.',
        ],
      },
      { type: 'h2', text: 'Cómo hacer el traspaso sin que se sienta brusco' },
      {
        type: 'ol',
        items: [
          'El bot confirma que entendió que se necesita ayuda humana, sin fingir que puede resolverlo.',
          'Resume en un mensaje interno para el equipo humano lo que ya se conversó, para que el cliente no tenga que repetir todo.',
          'Da un tiempo estimado de respuesta si el equipo no está disponible en el momento.',
          'Deja la conversación etiquetada como "esperando humano" para que nadie la pierda de vista.',
        ],
      },
      {
        type: 'quote',
        text: 'El 74% de los clientes encuentra frustrante tener que contar su historia una y otra vez a distintos agentes.',
        cite: 'Zendesk CX Trends Report',
      },
      {
        type: 'callout',
        text: 'Un buen traspaso no es una falla del bot: es la parte del diseño que demuestra que el chatbot conoce sus propios límites.',
      },
    ],
    sources: [
      { title: '92 customer service statistics you need to know', url: 'https://www.zendesk.com/blog/customer-service-statistics/', publisher: 'Zendesk' },
    ],
  },

  {
    slug: 'peluquerias-salones-belleza-whatsapp',
    title: 'Peluquerías y salones de belleza: agenda sin llamadas perdidas',
    description:
      'Entre un corte y un tinte no hay tiempo de contestar el teléfono. Cómo un chatbot de WhatsApp puede agendar, confirmar y recordar citas sin que el salón pierda un solo cliente.',
    cluster: 'casos-de-uso',
    publishedAt: '2026-08-26',
    keywords: ['chatbot whatsapp peluqueria', 'agendar citas whatsapp salon de belleza', 'whatsapp para peluquerias'],
    coverVariant: 6,
    coverEyebrow: 'Caso de uso',
    readingTime: '4 min',
    body: [
      {
        type: 'p',
        text: 'En un salón de belleza, las manos que podrían contestar el teléfono están casi siempre ocupadas: cortando, aplicando color, secando. Cada llamada perdida es, casi siempre, una cita que se agenda con la competencia en su lugar.',
      },
      { type: 'h2', text: 'Lo que un chatbot puede resolver solo' },
      {
        type: 'ul',
        items: [
          'Mostrar servicios y precios sin que nadie tenga que dejar a un cliente a medias para contestar.',
          'Ofrecer los horarios disponibles del día o la semana y agendar directamente.',
          'Enviar un recordatorio automático el día anterior, reduciendo las citas a las que el cliente simplemente no llega.',
          'Reagendar o cancelar sin que eso implique una llamada de ida y vuelta.',
        ],
      },
      { type: 'h2', text: 'Un flujo típico' },
      {
        type: 'ol',
        items: [
          'El cliente escribe pidiendo un servicio ("quiero corte y color").',
          'El bot muestra la duración estimada y los horarios disponibles esa semana.',
          'El cliente elige un horario y el bot confirma la cita con el nombre del estilista.',
          'Un día antes, el bot envía un recordatorio con opción de confirmar o reagendar.',
        ],
      },
      {
        type: 'callout',
        text: 'El recordatorio automático es, en la práctica, la función que más rápido se paga sola: cada cita a la que el cliente sí llega, en vez de olvidarla, es tiempo de silla que no se pierde.',
      },
    ],
    sources: [],
  },

  {
    slug: 'consultorios-medicos-odontologicos-whatsapp',
    title: 'Consultorios médicos y odontológicos: citas por WhatsApp sin saturar la línea',
    description:
      'Recepción saturada, pacientes que no llegan, recordatorios manuales que consumen tiempo del personal. Cómo automatizar la agenda de un consultorio sin perder el trato cercano con el paciente.',
    cluster: 'casos-de-uso',
    publishedAt: '2026-08-26',
    keywords: ['chatbot whatsapp consultorio medico', 'citas odontologicas whatsapp', 'whatsapp para clinicas'],
    coverVariant: 3,
    coverEyebrow: 'Caso de uso',
    readingTime: '5 min',
    body: [
      {
        type: 'p',
        text: 'En un consultorio médico u odontológico, cada minuto que la recepcionista pasa al teléfono agendando una cita es un minuto que no dedica al paciente que sí está frente a ella. Y cada paciente que no llega a su cita sin avisar es un espacio de agenda que se pierde por completo.',
      },
      { type: 'h2', text: 'Dónde ayuda más un chatbot en salud' },
      {
        type: 'ul',
        items: [
          'Agendamiento de citas según disponibilidad real del profesional, sin ida y vuelta telefónica.',
          'Recordatorios automáticos 24 y 2 horas antes de la cita, reduciendo el ausentismo.',
          'Respuestas a preguntas frecuentes: requisitos previos a un examen, documentos necesarios, ubicación.',
          'Confirmación o cancelación de la cita directamente desde el mensaje del recordatorio.',
        ],
      },
      { type: 'h2', text: 'Lo que debe quedar siempre en manos humanas' },
      {
        type: 'p',
        text: 'Ningún chatbot debería dar diagnósticos, interpretar síntomas o reemplazar el criterio médico. Su función es exclusivamente administrativa: agenda, recordatorios y logística. Cualquier mensaje que describa síntomas o una urgencia debe pasar de inmediato a una persona del consultorio.',
      },
      {
        type: 'callout',
        text: 'El objetivo no es que el paciente hable con un robot sobre su salud: es que nunca tenga que esperar en línea para agendar una cita o recibir un recordatorio que evite que la olvide.',
      },
      {
        type: 'faq',
        items: [
          {
            q: '¿Es seguro manejar datos de pacientes en un chatbot de WhatsApp?',
            a: 'El chatbot debe limitarse a datos administrativos (nombre, fecha, motivo general de consulta) y seguir las mismas políticas de protección de datos personales que ya aplica el consultorio, evitando el manejo de información clínica sensible por ese canal.',
          },
        ],
      },
    ],
    sources: [],
  },

  {
    slug: 'catalogo-whatsapp-que-vende',
    title: 'Cómo armar un catálogo de WhatsApp que sí vende',
    description:
      'El catálogo de WhatsApp Business convierte tu chat en una vitrina permanente. Cómo organizarlo, qué información no puede faltar y los errores que hacen que un cliente cierre el chat sin comprar.',
    cluster: 'guias',
    publishedAt: '2026-08-27',
    keywords: ['catalogo de whatsapp', 'whatsapp catalog', 'vender por catalogo whatsapp'],
    coverVariant: 5,
    coverEyebrow: 'Guía práctica',
    readingTime: '5 min',
    body: [
      {
        type: 'p',
        text: 'El catálogo de WhatsApp es, en esencia, una vitrina que vive dentro del chat: el cliente puede ver productos, precios y fotos sin salir de la conversación, y el negocio puede enviar un producto puntual como si fuera un mensaje más. Bien armado, reduce a la mitad las preguntas de "¿cuánto cuesta esto?" y "¿tienen esto en tal color?".',
      },
      { type: 'h2', text: 'Lo que no puede faltar en cada producto' },
      {
        type: 'ul',
        items: [
          'Una foto clara, con buena luz, del producto real (no una imagen genérica de internet).',
          'Nombre específico, no genérico: "Camisa lino blanca talla M" en vez de "Camisa".',
          'Precio visible y actualizado: nada rompe más la confianza que un precio desactualizado.',
          'Disponibilidad real: si algo está agotado, sacarlo del catálogo en vez de dejarlo visible.',
        ],
      },
      { type: 'h2', text: 'Cómo organizarlo para que sea fácil de navegar' },
      {
        type: 'ol',
        items: [
          'Agrupa por categorías claras (no más de 6-8), como haría cualquier tienda física bien organizada.',
          'Pon primero lo que más vendes, no lo que quieres impulsar: el catálogo debe reflejar demanda real.',
          'Usa el catálogo dentro del flujo del chatbot: que el bot pueda enviar un producto específico cuando el cliente pregunta por él.',
          'Revisa y actualiza el catálogo con la misma frecuencia con la que cambian tus precios o tu inventario.',
        ],
      },
      {
        type: 'callout',
        text: 'Un catálogo desactualizado es peor que no tener catálogo: genera la sensación de que el negocio no está prestando atención.',
      },
    ],
    sources: [
      {
        title: 'About the WhatsApp Business Platform',
        url: 'https://developers.facebook.com/documentation/business-messaging/whatsapp/about-the-platform',
        publisher: 'Meta for Developers',
      },
    ],
  },

  {
    slug: 'metricas-chatbot-whatsapp',
    title: 'Métricas que sí debes medir en tu chatbot de WhatsApp (y cuáles son solo vanidad)',
    description:
      'Contar "mensajes respondidos" no dice si tu chatbot está vendiendo. Estas son las métricas que de verdad muestran si la automatización está funcionando para tu negocio.',
    cluster: 'guias',
    publishedAt: '2026-08-27',
    keywords: ['metricas chatbot whatsapp', 'kpi chatbot', 'medir chatbot whatsapp'],
    coverVariant: 1,
    coverEyebrow: 'Guía práctica',
    readingTime: '4 min',
    body: [
      {
        type: 'p',
        text: 'Es fácil sentirse bien viendo que el chatbot "respondió 500 mensajes esta semana". Es un número que no dice nada sobre si esas 500 respuestas generaron una venta, una cita o un cliente frustrado que abandonó la conversación a la mitad.',
      },
      { type: 'h2', text: 'Métricas de vanidad (miden actividad, no resultados)' },
      {
        type: 'ul',
        items: [
          'Número total de mensajes enviados o recibidos.',
          'Número de conversaciones iniciadas.',
          'Tiempo que el bot tardó en responder (importa, pero no dice si la respuesta sirvió).',
        ],
      },
      { type: 'h2', text: 'Métricas que sí importan' },
      {
        type: 'ul',
        items: [
          'Tasa de resolución sin humano: qué porcentaje de conversaciones se cerraron sin necesitar una persona.',
          'Tasa de conversión: de las conversaciones que llegaron al bot, cuántas terminaron en una venta, cita o pedido confirmado.',
          'Tasa de abandono: en qué paso del flujo los clientes dejan de responder, para saber dónde está fallando el diseño.',
          'Tiempo hasta la primera respuesta útil, no solo hasta cualquier respuesta automática.',
          'Satisfacción reportada por el cliente cuando la conversación pasa a un humano, para medir si el traspaso fue oportuno.',
        ],
      },
      {
        type: 'callout',
        text: 'Si solo puedes medir una cosa, mide la tasa de conversión por flujo: te dice exactamente qué parte del chatbot está generando negocio y cuál solo está generando tráfico de mensajes.',
      },
    ],
    sources: [],
  },

  {
    slug: 'opt-in-consentimiento-politicas-whatsapp',
    title: 'Opt-in y consentimiento: cómo cumplir las políticas de mensajería de WhatsApp',
    description:
      'Escribirle a quien no dio su consentimiento es la primera causa de bloqueos y de mala reputación de marca. Qué exige la política de WhatsApp y cómo pedir el opt-in sin fricción.',
    cluster: 'guias',
    publishedAt: '2026-08-27',
    keywords: ['opt-in whatsapp', 'consentimiento mensajes whatsapp', 'politica de mensajeria whatsapp'],
    coverVariant: 2,
    coverEyebrow: 'Guía práctica',
    readingTime: '4 min',
    body: [
      {
        type: 'p',
        text: 'La política de la WhatsApp Business Platform es clara en un punto que muchos negocios pasan por alto: no se puede iniciar una conversación de marketing con alguien que no dio su consentimiento explícito para recibir mensajes de ese negocio.',
      },
      { type: 'h2', text: 'Qué cuenta como opt-in válido' },
      {
        type: 'ul',
        items: [
          'El cliente escribe primero al número de WhatsApp del negocio.',
          'El cliente completa un formulario (web o físico) donde acepta de forma explícita recibir mensajes por WhatsApp.',
          'El cliente confirma por otro canal (SMS, correo) que quiere ser contactado por WhatsApp, dejando registro de esa aceptación.',
        ],
      },
      { type: 'h2', text: 'Lo que NO cuenta como consentimiento' },
      {
        type: 'ul',
        items: [
          'Tener el número de un cliente por haber comprado una sola vez, sin que haya aceptado recibir mensajes futuros.',
          'Listas de números compradas o recolectadas de otras fuentes sin relación directa con el negocio.',
          'Asumir consentimiento porque el número "es público" en redes sociales.',
        ],
      },
      {
        type: 'callout',
        text: 'Pedir el opt-in de forma clara no es solo un requisito de la plataforma: es la razón principal por la que un cliente no reporta ni bloquea el número, porque siente que dio permiso para esa conversación.',
      },
    ],
    sources: [
      {
        title: 'WhatsApp Business Platform policy and spam enforcement',
        url: 'https://developers.facebook.com/documentation/business-messaging/whatsapp/policy-enforcement',
        publisher: 'Meta for Developers',
      },
    ],
  },

  {
    slug: 'crecimiento-comercio-conversacional-datos',
    title: 'Cuánto crece cada año el comercio conversacional (y por qué no es una moda pasajera)',
    description:
      'De comprar por catálogo impreso a comprar hablando con una IA en un chat. Los datos de Salesforce muestran una curva de crecimiento que no se ha detenido desde 2021.',
    cluster: 'datos',
    publishedAt: '2026-08-27',
    keywords: ['comercio conversacional', 'conversational commerce datos', 'crecimiento ventas por chat'],
    coverVariant: 4,
    coverEyebrow: 'Datos y estadísticas',
    readingTime: '4 min',
    body: [
      {
        type: 'p',
        text: 'Cada tanto aparece una tecnología que se etiqueta como "moda pasajera" hasta que los datos muestran una curva de crecimiento sostenida año tras año. El comercio conversacional —comprar a través de una conversación de chat en vez de un formulario de checkout— ya superó esa etapa.',
      },
      {
        type: 'ul',
        items: [
          'En 2023, el 36% de los compradores ya había hecho una compra a través de una app de mensajería, un aumento del 227% frente a 2021, según el State of Commerce Report de Salesforce.',
          'El uso de búsqueda impulsada por IA como primer paso del proceso de compra creció 200% año contra año.',
          'Implementar o expandir IA es hoy la prioridad número uno de los líderes de comercio para el próximo año, y también su principal reto anticipado.',
        ],
      },
      {
        type: 'quote',
        text: 'El 86% de los líderes de comercio afirma que la IA está elevando la barra de lo que esperan sus clientes.',
        cite: 'State of Commerce Report, Salesforce',
      },
      { type: 'h2', text: 'Lo que esto significa para un negocio que todavía no automatiza' },
      {
        type: 'p',
        text: 'No es que el comercio conversacional vaya a reemplazar el checkout tradicional de un día para otro. Es que, para un número creciente de clientes, la primera y a veces única interacción de compra ya ocurre dentro de un chat, y los negocios que no están presentes ahí, con una respuesta rápida, están perdiendo esa conversación antes de que empiece.',
      },
    ],
    sources: [
      {
        title: 'Highlights from the State of Commerce Report',
        url: 'https://www.salesforce.com/resources/research-reports/state-of-commerce/',
        publisher: 'Salesforce',
      },
      {
        title: "Shopping's New First Step: Agentic Search Grows 200%",
        url: 'https://www.salesforce.com/news/stories/agentic-search-growth/',
        publisher: 'Salesforce',
      },
    ],
  },

  {
    slug: 'confianza-datos-personales-chatbot',
    title: 'Lo que dicen los consumidores sobre confiar sus datos a un chatbot',
    description:
      'Automatizar sin cuidar la confianza del cliente es un error caro. Los datos de Twilio muestran qué espera realmente un consumidor de una marca que usa IA para atenderlo.',
    cluster: 'datos',
    publishedAt: '2026-08-27',
    keywords: ['confianza chatbot datos personales', 'transparencia ia clientes', 'privacidad chatbot whatsapp'],
    coverVariant: 6,
    coverEyebrow: 'Datos y estadísticas',
    readingTime: '4 min',
    body: [
      {
        type: 'p',
        text: 'Automatizar la atención trae una responsabilidad que pocos negocios discuten en voz alta: qué tan cómodo se siente el cliente sabiendo que una parte de esa conversación la maneja una IA con acceso a sus datos.',
      },
      {
        type: 'ul',
        items: [
          'El 49% de los consumidores dice que confiaría más en una marca si esta fuera transparente sobre cómo usa sus datos en interacciones con IA, según el reporte de Twilio.',
          'Los consumidores gastan en promedio 54% más en marcas que personalizan bien su experiencia.',
          'Sin embargo, solo el 16% de las marcas siente que tiene los datos que necesita para personalizar de forma efectiva.',
        ],
      },
      {
        type: 'quote',
        text: 'La IA está generando un retorno claro, pero si las marcas no ganan también la confianza del consumidor y aciertan en el momento, están dejando valor real sobre la mesa.',
        cite: "Twilio's State of Customer Engagement Report",
      },
      { type: 'h2', text: 'Qué significa esto en la práctica' },
      {
        type: 'p',
        text: 'Un chatbot no necesita esconder que es un chatbot. La mayoría de clientes no le molesta hablar con una IA si sabe que puede pedir un humano en cualquier momento y si siente que sus datos (nombre, dirección, historial de pedidos) se usan solo para atenderlo mejor, no para fines que no autorizó.',
      },
    ],
    sources: [
      {
        title: "Twilio's State of Customer Engagement Report",
        url: 'https://www.twilio.com/en-us/state-of-customer-engagement',
        publisher: 'Twilio',
      },
    ],
  },

  {
    slug: 'agentes-ia-meta-business-agent-whatsapp',
    title: 'Meta Business Agent: los agentes de IA nativos de WhatsApp, explicados',
    description:
      'Meta ya integró agentes de IA operables directamente desde la WhatsApp Business Platform. Qué son, qué pueden hacer y en qué se diferencian de un chatbot tradicional configurado por un tercero.',
    cluster: 'ia-atencion',
    publishedAt: '2026-08-27',
    keywords: ['meta business agent', 'agentes de ia whatsapp', 'ia nativa whatsapp business'],
    coverVariant: 3,
    coverEyebrow: 'IA y atención',
    readingTime: '4 min',
    body: [
      {
        type: 'p',
        text: 'Durante años, tener un chatbot "inteligente" en WhatsApp significaba conectar la API de Meta con una herramienta externa que aportaba la capa de IA. Eso está cambiando: Meta ya ofrece dentro de su propia plataforma la posibilidad de configurar agentes de IA que operan conversaciones de forma autónoma.',
      },
      { type: 'h2', text: 'Qué puede hacer un Meta Business Agent' },
      {
        type: 'ul',
        items: [
          'Responder preguntas usando fuentes de conocimiento propias del negocio (catálogos, políticas, preguntas frecuentes).',
          'Conectarse a sistemas externos a través de conectores, por ejemplo para consultar inventario o estado de un pedido en tiempo real.',
          'Operar conversaciones completas de forma autónoma, no solo respuestas puntuales.',
        ],
      },
      {
        type: 'p',
        text: 'La diferencia clave frente a un chatbot tradicional es que la capa de IA vive dentro de la infraestructura oficial de Meta, en vez de depender por completo de una herramienta externa. Esto no elimina la necesidad de configurar bien el negocio: alguien todavía tiene que definir las fuentes de conocimiento, los conectores y los límites de lo que el agente puede y no puede decidir por sí solo.',
      },
      {
        type: 'callout',
        text: 'Tener acceso a la tecnología no es lo mismo que tener un chatbot bien configurado. La IA nativa de Meta es una herramienta más potente, pero sigue necesitando el mismo trabajo de diseño de flujos, catálogo actualizado y reglas claras de traspaso a un humano.',
      },
    ],
    sources: [
      {
        title: 'About the WhatsApp Business Platform',
        url: 'https://developers.facebook.com/documentation/business-messaging/whatsapp/about-the-platform',
        publisher: 'Meta for Developers',
      },
    ],
  },

  {
    slug: 'errores-ia-espantan-clientes',
    title: 'Errores de IA que espantan clientes (y cómo evitarlos)',
    description:
      'Una IA mal entrenada puede hacer más daño que no tener chatbot. Los errores más comunes que hacen que un cliente pierda la confianza en la atención automatizada de un negocio.',
    cluster: 'ia-atencion',
    publishedAt: '2026-08-27',
    keywords: ['errores chatbot ia', 'chatbot mal configurado', 'ia atencion al cliente errores'],
    coverVariant: 5,
    coverEyebrow: 'IA y atención',
    readingTime: '5 min',
    body: [
      {
        type: 'p',
        text: 'Un chatbot mal diseñado no es neutral: activamente daña la percepción del negocio. Estos son los errores que con más frecuencia hacen que un cliente pierda la paciencia con la atención automatizada.',
      },
      { type: 'h2', text: 'Los cinco errores más comunes' },
      {
        type: 'ol',
        items: [
          'Responder con seguridad algo incorrecto en vez de admitir que no tiene la información y ofrecer pasar a un humano.',
          'Repetir el mismo mensaje genérico cuando no entiende, en lugar de reformular o escalar.',
          'No reconocer cuando el cliente ya expresó frustración, y seguir con el mismo tono neutro de siempre.',
          'Forzar al cliente a navegar un menú largo para algo que podría resolverse con una sola pregunta directa.',
          'No dejar nunca claro que existe la opción de hablar con una persona.',
        ],
      },
      {
        type: 'p',
        text: 'Ninguno de estos errores es exclusivo de la IA generativa: un árbol de decisiones mal diseñado los comete igual. La diferencia es que una IA generativa mal entrenada puede, además, inventar información con total seguridad, lo que es más difícil de detectar a tiempo que un simple "no entendí tu mensaje".',
      },
      {
        type: 'callout',
        text: 'La prueba más simple para detectar estos errores: haz que alguien externo al negocio use el chatbot con preguntas reales, sin guion, y anota cada momento en que sintió que "no lo entendieron".',
      },
    ],
    sources: [],
  },

  {
    slug: 'inmobiliarias-chatbot-whatsapp',
    title: 'Inmobiliarias: cómo filtrar interesados antes de mostrar una propiedad',
    description:
      'No todo el que pregunta por un apartamento está listo para visitarlo. Cómo un chatbot de WhatsApp puede calificar interesados y ahorrarle tiempo real al equipo comercial.',
    cluster: 'casos-de-uso',
    publishedAt: '2026-08-27',
    keywords: ['chatbot whatsapp inmobiliaria', 'calificar leads inmobiliaria whatsapp', 'whatsapp para bienes raices'],
    coverVariant: 1,
    coverEyebrow: 'Caso de uso',
    readingTime: '4 min',
    body: [
      {
        type: 'p',
        text: 'Coordinar una visita a una propiedad toma tiempo: agenda del asesor, disponibilidad del inmueble, y muchas veces un interesado que solo estaba "mirando" y termina por no presentarse. Ese tiempo perdido es, para una inmobiliaria, el costo más alto de un proceso comercial mal filtrado.',
      },
      { type: 'h2', text: 'Cómo un chatbot puede pre-calificar antes de agendar' },
      {
        type: 'ul',
        items: [
          'Preguntar presupuesto aproximado y zona de interés antes de ofrecer una visita.',
          'Confirmar si la búsqueda es para compra o arriendo, y en qué plazo se piensa decidir.',
          'Enviar fichas técnicas y fotos de propiedades que sí calzan con el perfil, antes de comprometer la agenda de un asesor.',
          'Agendar la visita solo cuando el interesado confirma disponibilidad real y sigue interesado tras ver la ficha.',
        ],
      },
      {
        type: 'p',
        text: 'El chatbot no reemplaza al asesor inmobiliario: hace el trabajo de filtro que hoy consume buena parte de su tiempo, para que la persona dedique sus horas a los interesados que de verdad están listos para dar el siguiente paso.',
      },
      {
        type: 'callout',
        text: 'Una inmobiliaria que automatiza bien este primer filtro no agenda menos visitas: agenda mejores visitas, con gente que llega con expectativas ya alineadas al inmueble real.',
      },
    ],
    sources: [],
  },

  {
    slug: 'tiendas-de-ropa-catalogo-whatsapp',
    title: 'Tiendas de ropa: catálogo, tallas y pedidos por WhatsApp sin perder ventas',
    description:
      'Preguntas de talla, color y disponibilidad repetidas decenas de veces al día. Cómo una tienda de ropa puede automatizar su catálogo por WhatsApp sin sacrificar la asesoría de estilo.',
    cluster: 'casos-de-uso',
    publishedAt: '2026-08-27',
    keywords: ['chatbot whatsapp tienda de ropa', 'catalogo whatsapp moda', 'vender ropa por whatsapp'],
    coverVariant: 2,
    coverEyebrow: 'Caso de uso',
    readingTime: '4 min',
    body: [
      {
        type: 'p',
        text: '"¿Tienen esta blusa en talla M?", "¿en qué colores viene?", "¿hacen envío a Medellín?". En una tienda de ropa, estas tres preguntas se repiten cientos de veces al mes, casi siempre con la misma respuesta.',
      },
      { type: 'h2', text: 'Lo que un chatbot resuelve sin intervención' },
      {
        type: 'ul',
        items: [
          'Mostrar el catálogo completo con fotos, tallas disponibles y precio actualizado.',
          'Confirmar disponibilidad de talla y color antes de que el cliente decida comprar.',
          'Informar zonas y tiempos de envío según la ciudad del cliente.',
          'Tomar el pedido completo (producto, talla, color, dirección) antes de pasarlo a empaque.',
        ],
      },
      { type: 'h2', text: 'Dónde sigue ganando el trato humano' },
      {
        type: 'p',
        text: 'La asesoría de estilo —qué combina con qué, qué le queda mejor a cada cliente— sigue siendo terreno humano. El chatbot no debería intentar reemplazar esa conversación: debería resolver todo lo operativo (talla, color, envío, pago) para que, cuando el cliente sí quiera consejo de estilo, alguien del equipo pueda dedicarle tiempo real a esa conversación.',
      },
    ],
    sources: [],
  },

  {
    slug: 'whatsapp-vs-instagram-dm',
    title: 'WhatsApp vs. Instagram DM: ¿dónde responde mejor tu negocio?',
    description:
      'Ambos canales conviven en la mayoría de negocios digitales, pero cumplen funciones distintas. Cuándo conviene dirigir la conversación hacia WhatsApp y cuándo dejarla en Instagram.',
    cluster: 'comparativas',
    publishedAt: '2026-08-27',
    keywords: ['whatsapp vs instagram', 'instagram dm vs whatsapp', 'canal de ventas instagram o whatsapp'],
    coverVariant: 6,
    coverEyebrow: 'Comparativa',
    readingTime: '5 min',
    body: [
      {
        type: 'p',
        text: 'Un negocio digital típico recibe mensajes tanto en Instagram como en WhatsApp, y pocas veces se detiene a pensar cuál de los dos debería ser el canal donde realmente ocurre la venta.',
      },
      {
        type: 'table',
        headers: ['Criterio', 'Instagram DM', 'WhatsApp'],
        rows: [
          ['Función principal', 'Descubrimiento y primer contacto', 'Conversación transaccional'],
          ['Automatización con catálogo y bot robusto', 'Limitada', 'Amplia (WhatsApp Business Platform)'],
          ['Uso como canal de venta en Colombia', '42,9% de tiendas en línea', '84,1% de tiendas en línea'],
          ['Percepción del cliente', 'Canal de marca / exploración', 'Canal cercano, tipo conversación personal'],
        ],
      },
      { type: 'h2', text: 'La estrategia que mejor funciona' },
      {
        type: 'p',
        text: 'La mayoría de negocios exitosos no eligen uno u otro: usan Instagram para atraer y mostrar producto, y dirigen la conversación de compra hacia WhatsApp en el momento en que el interés es real ("escríbenos por WhatsApp para separar tu pedido"). Ese traspaso deliberado evita perder ventas en un canal donde la automatización y el seguimiento son más limitados.',
      },
    ],
    sources: [
      {
        title: 'WhatsApp se consolida como aliado clave del comercio electrónico en Colombia',
        url: 'https://www.portafolio.co/tecnologia/whatsapp-se-consolida-como-aliado-clave-del-comercio-electronico-en-colombia-segun-informe-de-e-commerce-489757',
        publisher: 'Portafolio',
      },
    ],
  },

  {
    slug: 'migrar-app-whatsapp-business-a-api',
    title: 'Cómo migrar de la app gratuita de WhatsApp Business a la API oficial',
    description:
      'Cuando un negocio crece, la app de WhatsApp Business se queda corta: un solo dispositivo, sin automatización real. Los pasos para migrar a la WhatsApp Business Platform sin perder el historial ni los contactos.',
    cluster: 'guias',
    publishedAt: '2026-08-27',
    keywords: ['migrar whatsapp business a api', 'pasar de app a api whatsapp', 'whatsapp business platform migracion'],
    coverVariant: 4,
    coverEyebrow: 'Guía práctica',
    readingTime: '5 min',
    body: [
      {
        type: 'p',
        text: 'La app de WhatsApp Business funciona bien mientras una sola persona puede manejar el chat desde su celular. El síntoma de que ya se quedó corta es siempre el mismo: mensajes que se cruzan entre varios miembros del equipo, un dispositivo que se vuelve el cuello de botella de todo el negocio.',
      },
      { type: 'h2', text: 'Qué se gana al migrar a la API' },
      {
        type: 'ul',
        items: [
          'Varios agentes pueden atender desde el mismo número, sin depender de un solo celular físico.',
          'Automatización real: chatbot, catálogo integrado y respuestas basadas en reglas o IA.',
          'Integración con sistemas propios (CRM, inventario, agenda) a través de la API.',
          'Reportes y métricas que la app gratuita simplemente no ofrece.',
        ],
      },
      { type: 'h2', text: 'Los pasos de la migración' },
      {
        type: 'ol',
        items: [
          'Verificar el negocio en Meta Business Manager (si aún no está verificado).',
          'Decidir si se conserva el mismo número de teléfono o se estrena uno nuevo para la API.',
          'Si se conserva el número, solicitar la migración desde la configuración de la cuenta, lo que desactiva la app en ese número.',
          'Configurar la plataforma con un proveedor o integrador que administre la API (la mayoría de negocios no la conectan directo).',
          'Recrear el catálogo y las respuestas frecuentes dentro del nuevo sistema, ya que no se migran automáticamente desde la app.',
          'Avisar a los clientes frecuentes, si el número cambia, para no perder ese historial de relación.',
        ],
      },
      {
        type: 'callout',
        text: 'El historial de conversaciones de la app no se traslada automáticamente a la API. Vale la pena exportar o anotar la información clave de clientes frecuentes antes de hacer el cambio.',
      },
    ],
    sources: [
      {
        title: 'About the WhatsApp Business Platform',
        url: 'https://developers.facebook.com/documentation/business-messaging/whatsapp/about-the-platform',
        publisher: 'Meta for Developers',
      },
    ],
  },

  {
    slug: 'conectar-whatsapp-calendario-citas',
    title: 'Cómo conectar WhatsApp con tu calendario para agendar citas automáticamente',
    description:
      'Agendar por WhatsApp sin que el calendario del negocio se desincronice es el reto técnico más común al automatizar citas. Cómo funciona esa conexión y qué evitar.',
    cluster: 'guias',
    publishedAt: '2026-08-27',
    keywords: ['whatsapp google calendar', 'agendar citas automaticas whatsapp', 'sincronizar agenda whatsapp'],
    coverVariant: 3,
    coverEyebrow: 'Guía práctica',
    readingTime: '4 min',
    body: [
      {
        type: 'p',
        text: 'Un chatbot que agenda citas sin estar conectado al calendario real del negocio genera el peor tipo de error: dos clientes citados a la misma hora, o un espacio "disponible" que en realidad ya está ocupado.',
      },
      { type: 'h2', text: 'Cómo funciona la conexión' },
      {
        type: 'p',
        text: 'El chatbot no reemplaza el calendario: consulta su disponibilidad en tiempo real antes de ofrecer un horario, y escribe la cita confirmada directamente en él. Esto se logra conectando la plataforma del chatbot con un calendario (Google Calendar u otro) a través de una integración o API, de forma que ambos sistemas queden siempre sincronizados.',
      },
      { type: 'h2', text: 'Lo que debe cumplir una buena integración' },
      {
        type: 'ul',
        items: [
          'Consultar disponibilidad real antes de ofrecer un horario, no una lista fija predefinida.',
          'Bloquear el horario en el momento en que el cliente confirma, para que no lo tome otra persona mientras tanto.',
          'Reflejar cancelaciones o reagendamientos en ambos sistemas al instante.',
          'Avisar al equipo humano si el cliente pide algo que el calendario no puede resolver solo (un horario especial, una excepción).',
        ],
      },
      {
        type: 'callout',
        text: 'La señal de que esta integración está bien hecha es sencilla: nadie en el negocio tiene que revisar dos calendarios distintos para saber qué citas hay hoy.',
      },
    ],
    sources: [],
  },

  {
    slug: 'roi-automatizar-whatsapp',
    title: 'ROI real de automatizar WhatsApp: lo que muestran los casos documentados',
    description:
      'Más allá de "ahorra tiempo", los datos de McKinsey y HubSpot muestran ganancias medibles en conversión, tiempo de resolución y costo operativo al automatizar la atención al cliente.',
    cluster: 'datos',
    publishedAt: '2026-08-27',
    keywords: ['roi chatbot whatsapp', 'retorno de inversion chatbot', 'beneficios automatizar whatsapp'],
    coverVariant: 5,
    coverEyebrow: 'Datos y estadísticas',
    readingTime: '5 min',
    body: [
      {
        type: 'p',
        text: '"Automatizar ahorra tiempo" es cierto, pero es una frase demasiado vaga para justificar una inversión. Los datos documentados por McKinsey y HubSpot sí ponen números concretos sobre la mesa.',
      },
      { type: 'h2', text: 'Ganancias medibles reportadas en la industria' },
      {
        type: 'table',
        headers: ['Métrica', 'Mejora reportada'],
        rows: [
          ['Productividad en funciones de atención al cliente (McKinsey)', '30% a 45% del costo actual de la función'],
          ['Aumento en conversión (caso documentado por McKinsey)', '5% a 10%'],
          ['Reducción de pedidos cancelados (mismo caso)', '10% a 20%'],
          ['Reducción en tiempo de manejo de casos (HubSpot)', '44% a 45%'],
          ['Volumen de soporte resuelto sin humano', '11% a 30%'],
        ],
      },
      {
        type: 'p',
        text: 'Estos rangos varían según el negocio, el sector y qué tan bien diseñado esté el chatbot: los mismos reportes advierten que la tecnología por sí sola no genera estos resultados, deben implementarse con cuidado y con procesos claros detrás.',
      },
      {
        type: 'callout',
        text: 'La pregunta más honesta para calcular tu propio ROI no es "¿cuánto cuesta el chatbot?", sino "¿cuántas ventas o citas se están perdiendo hoy por no responder a tiempo?". Ese número, multiplicado por un mes, casi siempre supera el costo de automatizar.',
      },
    ],
    sources: [
      {
        title: 'The next frontier of customer engagement: AI-enabled customer service',
        url: 'https://www.mckinsey.com/~/media/mckinsey/business%20functions/operations/our%20insights/the%20next%20frontier%20of%20customer%20engagement%20ai%20enabled%20customer%20service/the-next-frontier-of-customer-engagement-ai-enabled-customer-service.pdf',
        publisher: 'McKinsey & Company',
      },
      { title: '70+ customer service statistics to know', url: 'https://blog.hubspot.com/service/customer-service-stats', publisher: 'HubSpot' },
    ],
  },

  {
    slug: 'abandono-carrito-whatsapp',
    title: 'Abandono de carrito por WhatsApp: por qué pasa y cómo recuperar esas ventas',
    description:
      'Un cliente que preguntó precio y nunca respondió no siempre perdió el interés: muchas veces solo se le olvidó. Cómo diseñar un seguimiento automático que recupera ventas sin ser invasivo.',
    cluster: 'datos',
    publishedAt: '2026-08-27',
    keywords: ['abandono de carrito whatsapp', 'recuperar ventas whatsapp', 'seguimiento automatico clientes'],
    coverVariant: 6,
    coverEyebrow: 'Datos y estadísticas',
    readingTime: '4 min',
    body: [
      {
        type: 'p',
        text: 'Un cliente pregunta el precio de un producto, dice "listo, lo pienso" y nunca vuelve a escribir. La mayoría de negocios lo da por perdido. En muchos casos, ese cliente simplemente se distrajo, y un buen seguimiento —no una insistencia agresiva— es suficiente para recuperar la venta.',
      },
      { type: 'h2', text: 'Cómo diseñar un seguimiento que no incomode' },
      {
        type: 'ol',
        items: [
          'Esperar un tiempo razonable (24 a 48 horas) antes de retomar la conversación.',
          'Retomar con una pregunta útil, no con presión de venta: "¿Sigues interesado en el producto que preguntaste? Puedo resolver cualquier duda que te haya quedado."',
          'Ofrecer una razón concreta para responder ahora, si aplica (disponibilidad limitada, un dato que faltaba).',
          'Detener el seguimiento después de uno o dos intentos si el cliente no responde, para no cruzar a spam.',
        ],
      },
      {
        type: 'p',
        text: 'Este tipo de mensaje de seguimiento, al retomar una conversación fuera de la ventana de 24 horas, requiere una plantilla pre-aprobada por Meta —generalmente de categoría marketing o utilidad según el enfoque exacto del mensaje—.',
      },
      {
        type: 'callout',
        text: 'El seguimiento automático no busca convencer a quien ya dijo que no: busca alcanzar al cliente que sí quería comprar pero simplemente se le pasó responder, que en la práctica es la mayoría de los "carritos abandonados".',
      },
    ],
    sources: [],
  },

  {
    slug: 'entrenar-chatbot-preguntas-reales',
    title: 'Cómo entrenar un chatbot con las preguntas reales de tus clientes',
    description:
      'El error más común al lanzar un chatbot es entrenarlo con preguntas que el negocio imagina, no con las que los clientes hacen de verdad. Cómo construir el entrenamiento a partir de datos reales.',
    cluster: 'ia-atencion',
    publishedAt: '2026-08-27',
    keywords: ['entrenar chatbot whatsapp', 'preguntas frecuentes chatbot', 'entrenamiento ia atencion cliente'],
    coverVariant: 1,
    coverEyebrow: 'IA y atención',
    readingTime: '4 min',
    body: [
      {
        type: 'p',
        text: 'Cuando un negocio se sienta a escribir "las preguntas frecuentes de mis clientes" desde cero, casi siempre se le olvidan las que de verdad importan, porque las que un dueño imagina no coinciden con las que un cliente real escribe.',
      },
      { type: 'h2', text: 'Dónde buscar las preguntas reales' },
      {
        type: 'ul',
        items: [
          'El historial de WhatsApp de los últimos tres meses: es la fuente más confiable de todas.',
          'Comentarios y mensajes directos en redes sociales.',
          'Preguntas que recibe el equipo de ventas cara a cara o por teléfono.',
          'Reseñas o quejas, que suelen revelar dudas que el negocio nunca contestó bien.',
        ],
      },
      { type: 'h2', text: 'Cómo convertir ese historial en entrenamiento' },
      {
        type: 'ol',
        items: [
          'Agrupar las preguntas por tema (precio, envío, disponibilidad, garantía) para detectar los patrones más frecuentes.',
          'Escribir la respuesta ideal para cada grupo, con el tono real del negocio, no un tono genérico de manual corporativo.',
          'Incluir variaciones de la misma pregunta ("¿cuánto cuesta?", "¿precio?", "¿valor?") para que el bot las reconozca todas.',
          'Revisar mensualmente las conversaciones donde el bot falló, y sumar esas preguntas nuevas al entrenamiento.',
        ],
      },
      {
        type: 'callout',
        text: 'Un chatbot entrenado con preguntas inventadas por el dueño del negocio suele fallar justo en las primeras conversaciones reales. Un chatbot entrenado con el historial real de WhatsApp acierta desde el primer día.',
      },
    ],
    sources: [],
  },

  {
    slug: 'agentic-commerce-futuro-compras-ia',
    title: 'Agentic commerce: el futuro de comprar hablando con una IA',
    description:
      'Cada vez más compras empiezan con una conversación en un chat de IA, no en un buscador. Qué es el "agentic commerce" y qué significa para los negocios pequeños en los próximos años.',
    cluster: 'ia-atencion',
    publishedAt: '2026-08-27',
    keywords: ['agentic commerce', 'compras con ia', 'futuro del comercio conversacional'],
    coverVariant: 2,
    coverEyebrow: 'IA y atención',
    readingTime: '4 min',
    body: [
      {
        type: 'p',
        text: 'Durante años, el punto de partida de una compra fue un buscador: escribir lo que se necesita y comparar resultados. Eso está cambiando hacia lo que la industria llama "agentic commerce": el punto de partida es una conversación con una IA que entiende la necesidad, compara opciones y, en algunos casos, hasta completa la compra.',
      },
      {
        type: 'quote',
        text: 'El uso de búsqueda agéntica como primer paso del proceso de compra creció 200% año contra año.',
        cite: 'Salesforce',
      },
      { type: 'h2', text: 'Qué significa esto para un negocio pequeño hoy' },
      {
        type: 'p',
        text: 'No se trata de construir "un asistente de IA propio" mañana mismo. Se trata de entender que la conversación —no el catálogo estático, no el formulario web— se está convirtiendo en el punto de entrada real de la compra. Un negocio que ya tiene su WhatsApp automatizado, con catálogo claro y respuestas rápidas, ya está construyendo la base de lo que este modelo de comercio exige: información estructurada, accesible y conversacional.',
      },
      {
        type: 'callout',
        text: 'Los negocios que hoy invierten en tener su información de producto clara y accesible por chat —precio, disponibilidad, políticas— no solo mejoran su WhatsApp: se preparan para un comercio donde cada vez más decisiones de compra empiezan en una conversación con una IA.',
      },
    ],
    sources: [
      {
        title: "Shopping's New First Step: Agentic Search Grows 200%",
        url: 'https://www.salesforce.com/news/stories/agentic-search-growth/',
        publisher: 'Salesforce',
      },
    ],
  },

  {
    slug: 'ferreterias-tiendas-barrio-whatsapp',
    title: 'Ferreterías y tiendas de barrio: pedidos por WhatsApp sin salir del mostrador',
    description:
      'El negocio de barrio vive de la atención rápida y personal. Cómo un chatbot puede tomar pedidos y confirmar disponibilidad sin que el dueño tenga que soltar el mostrador cada vez que suena el teléfono.',
    cluster: 'casos-de-uso',
    publishedAt: '2026-08-27',
    keywords: ['chatbot whatsapp ferreteria', 'whatsapp tienda de barrio', 'pedidos whatsapp negocio local'],
    coverVariant: 4,
    coverEyebrow: 'Caso de uso',
    readingTime: '4 min',
    body: [
      {
        type: 'p',
        text: 'En una ferretería o tienda de barrio, el dueño suele ser al mismo tiempo cajero, vendedor y quien contesta el WhatsApp. Cuando hay un cliente en el mostrador y el celular suena con un pedido, algo tiene que esperar, y casi siempre es el pedido por WhatsApp.',
      },
      { type: 'h2', text: 'Lo que un chatbot puede resolver sin que nadie suelte el mostrador' },
      {
        type: 'ul',
        items: [
          'Confirmar si un producto específico está disponible, antes de que el cliente se desplace hasta el local.',
          'Dar precios actualizados de los productos más consultados.',
          'Tomar pedidos para recoger o domicilio, con dirección y forma de pago.',
          'Avisar horarios de atención, incluyendo festivos.',
        ],
      },
      {
        type: 'p',
        text: 'Para un negocio de barrio, el chatbot no necesita ser sofisticado: necesita cubrir las cinco o diez preguntas que se repiten todos los días, para que el dueño solo tenga que intervenir en lo que realmente requiere su criterio, como una recomendación técnica sobre qué material usar.',
      },
      {
        type: 'callout',
        text: 'El objetivo no es reemplazar la cercanía del tendero de barrio: es que esa cercanía no se pierda entre veinte mensajes de "¿tienen esto?" que un bot podría responder solo.',
      },
    ],
    sources: [
      {
        title: 'WhatsApp se consolida como aliado clave del comercio electrónico en Colombia',
        url: 'https://www.portafolio.co/tecnologia/whatsapp-se-consolida-como-aliado-clave-del-comercio-electronico-en-colombia-segun-informe-de-e-commerce-489757',
        publisher: 'Portafolio',
      },
    ],
  },

  {
    slug: 'gimnasios-inscripciones-recordatorios-whatsapp',
    title: 'Gimnasios: inscripciones y recordatorios automáticos por WhatsApp',
    description:
      'Entre atender la recepción y guiar una clase, pocos gimnasios tienen tiempo de dar seguimiento manual a cada inscrito. Cómo automatizar inscripciones, pagos y recordatorios sin perder cercanía.',
    cluster: 'casos-de-uso',
    publishedAt: '2026-08-27',
    keywords: ['chatbot whatsapp gimnasio', 'whatsapp para gimnasios', 'recordatorios pago gimnasio whatsapp'],
    coverVariant: 6,
    coverEyebrow: 'Caso de uso',
    readingTime: '4 min',
    body: [
      {
        type: 'p',
        text: 'Un gimnasio vive de la constancia de sus inscritos, pero el seguimiento manual —recordar pagos, avisar clases nuevas, confirmar horarios— es de las tareas administrativas que primero se dejan de lado cuando el equipo está ocupado en el piso.',
      },
      { type: 'h2', text: 'Lo que se puede automatizar' },
      {
        type: 'ul',
        items: [
          'Información de planes y precios para nuevos interesados.',
          'Recordatorio de vencimiento de mensualidad antes de que la membresía se corte.',
          'Confirmación de cupo en clases grupales con horario limitado.',
          'Aviso de cambios de horario o cierre por festivo.',
        ],
      },
      {
        type: 'p',
        text: 'El recordatorio de pago automático suele ser la función que más rápido justifica la inversión: reduce las membresías que se vencen "por olvido" en vez de por decisión real de cancelar, que es la principal fuga silenciosa de ingresos en un gimnasio.',
      },
      {
        type: 'callout',
        text: 'Automatizar lo administrativo libera tiempo para lo que sí retiene a un cliente de gimnasio: la atención personal del entrenador, no un mensaje de bienvenida genérico.',
      },
    ],
    sources: [],
  },

  {
    slug: 'veterinarias-citas-recordatorios-whatsapp',
    title: 'Veterinarias: citas y recordatorios de vacunas por WhatsApp',
    description:
      'Coordinar citas y no olvidar el refuerzo de una vacuna es, para muchos dueños de mascotas, una tarea que depende de la memoria. Cómo una veterinaria puede automatizar ese seguimiento.',
    cluster: 'casos-de-uso',
    publishedAt: '2026-08-27',
    keywords: ['chatbot whatsapp veterinaria', 'recordatorio vacunas mascotas whatsapp', 'citas veterinarias whatsapp'],
    coverVariant: 3,
    coverEyebrow: 'Caso de uso',
    readingTime: '4 min',
    body: [
      {
        type: 'p',
        text: 'Una veterinaria maneja dos tipos de seguimiento que dependen de que alguien se acuerde en el momento correcto: agendar la próxima cita y recordar el refuerzo de una vacuna. Cuando ese recordatorio no llega, la mascota se atrasa en su esquema de salud y la clínica pierde una consulta que ya tenía prácticamente asegurada.',
      },
      { type: 'h2', text: 'Cómo ayuda un chatbot en este caso' },
      {
        type: 'ul',
        items: [
          'Agendar citas de consulta general según disponibilidad real del veterinario.',
          'Recordar automáticamente la fecha del próximo refuerzo de vacuna o control, según el historial de cada mascota.',
          'Responder preguntas frecuentes sobre horarios de urgencias y servicios disponibles.',
          'Confirmar la cita el día anterior, reduciendo las ausencias sin aviso.',
        ],
      },
      {
        type: 'p',
        text: 'Igual que en salud humana, cualquier consulta sobre síntomas o el estado de salud de la mascota debe pasar directamente a un veterinario: el chatbot se limita a la parte de agenda y recordatorios, no a orientación clínica.',
      },
      {
        type: 'callout',
        text: 'El recordatorio de vacunas es, para una veterinaria, el equivalente al recordatorio de cita en un consultorio médico: una función simple que evidencia cuidado real por el paciente, en este caso de cuatro patas.',
      },
    ],
    sources: [],
  },

  {
    slug: 'whatsapp-business-app-vs-api',
    title: 'WhatsApp Business app vs. API: cuándo pasar a la versión profesional',
    description:
      'No todo negocio necesita la API desde el primer día. Las señales concretas que indican que ya es momento de dejar la app gratuita y pasar a la WhatsApp Business Platform.',
    cluster: 'comparativas',
    publishedAt: '2026-08-27',
    keywords: ['whatsapp business app vs api', 'cuando pasar a la api de whatsapp', 'whatsapp business platform vs app'],
    coverVariant: 5,
    coverEyebrow: 'Comparativa',
    readingTime: '4 min',
    body: [
      {
        type: 'table',
        headers: ['', 'App de WhatsApp Business', 'WhatsApp Business Platform (API)'],
        rows: [
          ['Costo', 'Gratuita', 'Costo por mensaje según categoría y volumen'],
          ['Usuarios simultáneos', 'Uno por dispositivo vinculado', 'Múltiples agentes en paralelo'],
          ['Automatización', 'Respuestas rápidas y mensajes de ausencia básicos', 'Chatbot completo, IA, integraciones'],
          ['Reportes', 'Ninguno', 'Métricas de entrega, calidad y desempeño'],
          ['Ideal para', 'Negocios unipersonales o muy pequeños', 'Negocios con volumen de mensajes en crecimiento'],
        ],
      },
      { type: 'h2', text: 'Tres señales de que ya es momento de migrar' },
      {
        type: 'ol',
        items: [
          'Más de una persona necesita responder desde el mismo número al mismo tiempo.',
          'Las mismas preguntas se repiten decenas de veces al día y ya no hay tiempo de contestarlas todas manualmente.',
          'El negocio necesita reportes reales para saber qué tan bien está funcionando su atención por WhatsApp.',
        ],
      },
      {
        type: 'p',
        text: 'Si ninguna de estas señales aplica todavía, la app gratuita sigue siendo una opción razonable. La API no es "mejor" en abstracto: es la herramienta correcta cuando el volumen y la complejidad ya superaron lo que una sola persona puede manejar desde un celular.',
      },
    ],
    sources: [
      {
        title: 'About the WhatsApp Business Platform',
        url: 'https://developers.facebook.com/documentation/business-messaging/whatsapp/about-the-platform',
        publisher: 'Meta for Developers',
      },
    ],
  },

  {
    slug: 'colegios-comunicacion-acudientes-whatsapp',
    title: 'Colegios: comunicación con acudientes sin grupos de WhatsApp caóticos',
    description:
      'Un grupo de WhatsApp de curso con cien mensajes al día no es comunicación, es ruido. Cómo un colegio puede usar un chatbot para avisos, citas y preguntas frecuentes sin depender de grupos.',
    cluster: 'casos-de-uso',
    publishedAt: '2026-08-27',
    keywords: ['whatsapp para colegios', 'chatbot comunicacion acudientes', 'whatsapp institucion educativa'],
    coverVariant: 1,
    coverEyebrow: 'Caso de uso',
    readingTime: '4 min',
    body: [
      {
        type: 'p',
        text: 'Cualquier acudiente que haya estado en un grupo de WhatsApp de curso conoce el problema: cien mensajes al día, la mitad respuestas a la misma pregunta, y el aviso importante de la rectoría perdido entre memes de buenos días. Un colegio necesita comunicarse, no generar ruido.',
      },
      { type: 'h2', text: 'Lo que un chatbot institucional puede resolver' },
      {
        type: 'ul',
        items: [
          'Responder preguntas frecuentes: horarios, calendario académico, requisitos de matrícula.',
          'Agendar citas con coordinación o psicología escolar sin llamadas cruzadas.',
          'Enviar avisos importantes de forma directa, sin depender de que alguien los reenvíe en un grupo.',
          'Canalizar inquietudes puntuales hacia el área correcta (académica, administrativa, financiera) desde el primer mensaje.',
        ],
      },
      {
        type: 'callout',
        text: 'Un chatbot institucional no reemplaza la comunicación humana del colegio con las familias: reemplaza el caos de un grupo masivo por un canal directo, donde cada acudiente encuentra la información que necesita sin tener que leer cien mensajes ajenos.',
      },
    ],
    sources: [],
  },

  {
    slug: 'abogados-asesores-primer-filtro-whatsapp',
    title: 'Abogados y asesores: cómo hacer el primer filtro de consultas por WhatsApp',
    description:
      'No toda consulta que llega por WhatsApp necesita el tiempo de un abogado o asesor senior. Cómo diseñar un primer filtro automatizado que respeta la confidencialidad y ahorra tiempo real.',
    cluster: 'casos-de-uso',
    publishedAt: '2026-08-27',
    keywords: ['chatbot whatsapp abogados', 'whatsapp para asesorias', 'filtrar consultas legales whatsapp'],
    coverVariant: 3,
    coverEyebrow: 'Caso de uso',
    readingTime: '4 min',
    body: [
      {
        type: 'p',
        text: 'Un despacho de abogados o una firma de asesoría recibe consultas de todo tipo por WhatsApp: desde preguntas simples de tarifas hasta casos que sí ameritan la atención de un profesional senior. Responder ambas con el mismo nivel de tiempo no es eficiente ni necesario.',
      },
      { type: 'h2', text: 'Qué puede resolver un chatbot en este contexto' },
      {
        type: 'ul',
        items: [
          'Explicar áreas de práctica y tarifas generales de consulta.',
          'Recolectar información básica del caso (tipo de trámite, urgencia) antes de agendar una cita.',
          'Agendar la primera cita de asesoría según disponibilidad del abogado o asesor correspondiente.',
          'Dirigir el caso al área correcta dentro del despacho, si hay varias especialidades.',
        ],
      },
      {
        type: 'p',
        text: 'Es clave que el chatbot deje claro, desde el primer mensaje, que no está dando asesoría legal ni sustituye la opinión de un profesional: su función es organizar la información inicial para que la conversación con el abogado empiece con contexto, no desde cero.',
      },
      {
        type: 'callout',
        text: 'El valor de este filtro no es responder más rápido preguntas legales: es que el abogado dedique su tiempo a analizar el caso, no a repetir la misma explicación de tarifas y procesos con cada nuevo contacto.',
      },
    ],
    sources: [],
  },

  {
    slug: 'transporte-encomiendas-cotizacion-whatsapp',
    title: 'Transporte y encomiendas: cotización automática por WhatsApp',
    description:
      'Cotizar un envío a mano, mensaje por mensaje, no escala cuando el volumen crece. Cómo una empresa de transporte o encomiendas puede automatizar la cotización sin perder precisión.',
    cluster: 'casos-de-uso',
    publishedAt: '2026-08-27',
    keywords: ['whatsapp para transporte de encomiendas', 'cotizar envio por whatsapp', 'chatbot logistica whatsapp'],
    coverVariant: 4,
    coverEyebrow: 'Caso de uso',
    readingTime: '4 min',
    body: [
      {
        type: 'p',
        text: 'Cotizar un envío depende de pocos datos fijos: origen, destino, peso o volumen aproximado. Es exactamente el tipo de proceso que un chatbot puede resolver en segundos, en vez de esperar a que alguien del equipo tenga tiempo de calcularlo a mano.',
      },
      { type: 'h2', text: 'Un flujo de cotización típico' },
      {
        type: 'ol',
        items: [
          'El bot pregunta origen y destino del envío.',
          'El bot pide peso o dimensiones aproximadas del paquete.',
          'El bot calcula y muestra el valor estimado según las tarifas cargadas en el sistema.',
          'Si el cliente confirma, el bot agenda la recolección y da un número de seguimiento.',
        ],
      },
      {
        type: 'p',
        text: 'Para envíos con condiciones especiales —carga frágil, sobredimensionada, con seguro adicional— el bot debe pasar la conversación a una persona en vez de intentar calcular una tarifa que depende de criterio humano.',
      },
      {
        type: 'callout',
        text: 'La cotización automática no solo ahorra tiempo interno: le da al cliente una respuesta inmediata en el momento en que está comparando opciones, que suele ser el momento decisivo para elegir un transportador u otro.',
      },
    ],
    sources: [],
  },

  {
    slug: 'talleres-mecanicos-agenda-whatsapp',
    title: 'Talleres mecánicos: agenda de citas y seguimiento del vehículo por WhatsApp',
    description:
      'Coordinar la entrada de vehículos y mantener informado al cliente sobre el estado de su carro son dos tareas que un chatbot puede aliviar en un taller sin sistemas complejos.',
    cluster: 'casos-de-uso',
    publishedAt: '2026-08-27',
    keywords: ['chatbot whatsapp taller mecanico', 'whatsapp para talleres', 'agenda taller automotriz whatsapp'],
    coverVariant: 2,
    coverEyebrow: 'Caso de uso',
    readingTime: '4 min',
    body: [
      {
        type: 'p',
        text: 'En un taller mecánico, el teléfono suena mientras alguien tiene las manos ocupadas bajo el capó de otro vehículo. Coordinar cuándo llevar el carro y saber en qué va el diagnóstico son las dos preguntas que más interrumpen el trabajo del día.',
      },
      { type: 'h2', text: 'Lo que puede automatizarse' },
      {
        type: 'ul',
        items: [
          'Agendar la cita de ingreso del vehículo según disponibilidad del taller.',
          'Confirmar servicios disponibles y tiempos estimados de entrega.',
          'Enviar actualizaciones automáticas del estado del vehículo (recibido, en diagnóstico, listo para recoger).',
          'Recordar mantenimientos preventivos según el kilometraje o la fecha del último servicio.',
        ],
      },
      {
        type: 'callout',
        text: 'El aviso automático de "tu carro está listo" es, para el cliente, una de las señales más claras de un taller organizado, incluso antes de ver el trabajo terminado.',
      },
    ],
    sources: [],
  },

  {
    slug: 'spas-centros-estetica-reservas-whatsapp',
    title: 'Spas y centros de estética: reservas y recordatorios sin llamadas perdidas',
    description:
      'Igual que en peluquerías, en un spa las manos ocupadas no pueden contestar el teléfono. Cómo automatizar reservas, paquetes y recordatorios en un centro de estética.',
    cluster: 'casos-de-uso',
    publishedAt: '2026-08-27',
    keywords: ['chatbot whatsapp spa', 'whatsapp centro de estetica', 'reservas spa automaticas'],
    coverVariant: 5,
    coverEyebrow: 'Caso de uso',
    readingTime: '4 min',
    body: [
      {
        type: 'p',
        text: 'Un spa o centro de estética vende tiempo y atención personalizada, justo lo que se pierde cuando alguien del equipo tiene que interrumpir un tratamiento para contestar el teléfono. Automatizar la parte administrativa protege esa experiencia, no la reemplaza.',
      },
      { type: 'h2', text: 'Lo que un chatbot puede resolver' },
      {
        type: 'ul',
        items: [
          'Mostrar servicios, paquetes y precios sin intervención humana.',
          'Reservar citas según disponibilidad real de cada especialista.',
          'Recordar la cita el día anterior y confirmar asistencia.',
          'Informar sobre promociones o paquetes vigentes cuando el cliente pregunta.',
        ],
      },
      {
        type: 'callout',
        text: 'En un negocio donde la experiencia del cliente es el producto mismo, cada minuto que el equipo no pierde en tareas administrativas es un minuto más de atención real dentro del servicio.',
      },
    ],
    sources: [],
  },

  {
    slug: 'tiendas-mascotas-pedidos-recurrentes-whatsapp',
    title: 'Tiendas de mascotas: pedidos recurrentes de alimento por WhatsApp',
    description:
      'El alimento para mascotas se compra de forma predecible, mes tras mes. Cómo una tienda puede automatizar ese pedido recurrente antes de que el cliente se le olvide y compre en otro lado.',
    cluster: 'casos-de-uso',
    publishedAt: '2026-08-27',
    keywords: ['whatsapp tienda de mascotas', 'pedidos recurrentes whatsapp', 'chatbot venta alimento mascotas'],
    coverVariant: 6,
    coverEyebrow: 'Caso de uso',
    readingTime: '4 min',
    body: [
      {
        type: 'p',
        text: 'El alimento para mascotas tiene algo que pocos productos tienen: un ciclo de recompra predecible. Si un cliente compra un bulto que le dura un mes, ese mes es exactamente cuándo debería recibir un recordatorio, no un mes y medio después cuando ya compró en otra parte por necesidad urgente.',
      },
      { type: 'h2', text: 'Cómo automatizar la recompra' },
      {
        type: 'ol',
        items: [
          'Registrar qué producto compró el cliente y cada cuánto suele durarle.',
          'Programar un recordatorio automático unos días antes de que se le acabe.',
          'Confirmar el pedido y la forma de entrega (domicilio o recoger en tienda) directamente por el chat.',
          'Aprovechar ese mismo contacto para sugerir productos complementarios reales, no genéricos.',
        ],
      },
      {
        type: 'callout',
        text: 'Este tipo de recordatorio no se siente como publicidad: se siente como un buen servicio, porque llega justo cuando el cliente lo necesita, no cuando al negocio le conviene vender.',
      },
    ],
    sources: [],
  },

  {
    slug: 'negocios-eventos-cotizacion-whatsapp',
    title: 'Negocios de eventos: cotización y separación de fecha por WhatsApp',
    description:
      'Salones de eventos, decoración y catering reciben decenas de solicitudes de cotización que compiten por la misma fecha. Cómo un chatbot ayuda a calificar, cotizar y separar sin perder el control de la agenda.',
    cluster: 'casos-de-uso',
    publishedAt: '2026-08-27',
    keywords: ['whatsapp para eventos', 'cotizar evento por whatsapp', 'chatbot salon de eventos'],
    coverVariant: 1,
    coverEyebrow: 'Caso de uso',
    readingTime: '4 min',
    body: [
      {
        type: 'p',
        text: 'En el negocio de eventos, la pregunta más común y más urgente es "¿tienen disponible tal fecha?". Responderla rápido no es un lujo: es la diferencia entre asegurar la reserva o que el cliente siga preguntando en otro lugar mientras espera.',
      },
      { type: 'h2', text: 'Cómo estructurar el flujo de cotización' },
      {
        type: 'ol',
        items: [
          'El bot pregunta tipo de evento, número de invitados aproximado y fecha deseada.',
          'El bot confirma si esa fecha está disponible según la agenda del negocio.',
          'El bot envía paquetes y precios generales según el tipo de evento.',
          'Si el cliente quiere avanzar, el bot agenda una cita presencial o llamada con el equipo comercial para cerrar detalles.',
        ],
      },
      {
        type: 'callout',
        text: 'Confirmar disponibilidad de fecha en segundos, sin esperar a que alguien revise una agenda física, suele ser la razón por la que un cliente elige un proveedor antes que otro.',
      },
    ],
    sources: [],
  },

  {
    slug: 'farmacias-domicilios-disponibilidad-whatsapp',
    title: 'Farmacias: consultas de disponibilidad y domicilios por WhatsApp',
    description:
      'Preguntar si hay un medicamento disponible antes de salir de casa es, para muchos clientes, el primer paso antes de comprar. Cómo una farmacia puede resolver esa consulta al instante.',
    cluster: 'casos-de-uso',
    publishedAt: '2026-08-27',
    keywords: ['chatbot whatsapp farmacia', 'whatsapp para farmacias', 'domicilios farmacia whatsapp'],
    coverVariant: 3,
    coverEyebrow: 'Caso de uso',
    readingTime: '4 min',
    body: [
      {
        type: 'p',
        text: 'Nadie quiere desplazarse hasta una farmacia para descubrir que el medicamento que necesita no está disponible. Esa consulta previa —"¿tienen tal producto?"— es, para muchas farmacias de barrio, uno de los mensajes más frecuentes de todo el día.',
      },
      { type: 'h2', text: 'Lo que un chatbot puede resolver' },
      {
        type: 'ul',
        items: [
          'Confirmar disponibilidad de productos de venta libre y de cuidado personal.',
          'Informar precios y presentaciones disponibles.',
          'Tomar el pedido para domicilio con dirección y forma de pago.',
          'Indicar horarios de atención, incluyendo turnos de farmacia de guardia si aplica.',
        ],
      },
      {
        type: 'p',
        text: 'Cualquier consulta relacionada con dosis, interacciones entre medicamentos o recomendaciones de salud debe remitirse siempre al químico farmacéutico del establecimiento: el chatbot se limita a disponibilidad, precio y logística del pedido.',
      },
      {
        type: 'callout',
        text: 'Responder "sí, tenemos disponible" en segundos, en vez de minutos, suele ser lo que decide si el cliente compra en esa farmacia o sigue preguntando en otra.',
      },
    ],
    sources: [],
  },

  {
    slug: 'chatbot-propio-vs-plantillas-genericas',
    title: 'Chatbot propio vs. plantillas genéricas de un proveedor: qué elegir',
    description:
      'No todos los "chatbots de WhatsApp" que se venden en el mercado son iguales. La diferencia entre un flujo genérico reutilizado y uno diseñado específicamente para tu negocio.',
    cluster: 'comparativas',
    publishedAt: '2026-08-27',
    keywords: ['chatbot personalizado vs generico', 'plantillas de chatbot whatsapp', 'chatbot a medida'],
    coverVariant: 2,
    coverEyebrow: 'Comparativa',
    readingTime: '4 min',
    body: [
      {
        type: 'p',
        text: 'Muchos proveedores ofrecen "chatbots de WhatsApp" que en realidad son la misma plantilla genérica reutilizada para decenas de negocios distintos, con el nombre y el logo cambiados. Funciona para empezar, pero tiene un techo bajo.',
      },
      {
        type: 'table',
        headers: ['Criterio', 'Plantilla genérica', 'Chatbot diseñado a medida'],
        rows: [
          ['Costo inicial', 'Bajo', 'Medio'],
          ['Ajuste al catálogo y procesos reales', 'Limitado', 'Completo'],
          ['Tono y lenguaje', 'Genérico', 'El del negocio real'],
          ['Capacidad de crecer con el negocio', 'Baja', 'Alta'],
          ['Ideal para', 'Validar la idea rápido, presupuesto muy ajustado', 'Negocios que ya saben que van a automatizar en serio'],
        ],
      },
      {
        type: 'p',
        text: 'Una plantilla genérica puede servir como primer paso, siempre que el negocio sepa que en algún momento tendrá que reemplazarla por algo diseñado con su catálogo, sus precios y las preguntas reales de sus clientes, no las de un negocio genérico imaginado por el proveedor.',
      },
    ],
    sources: [],
  },

  {
    slug: 'comprar-leads-vs-automatizar-whatsapp-propio',
    title: 'Comprar leads vs. automatizar tu propio WhatsApp: dónde rinde más el presupuesto',
    description:
      'Invertir en pauta para generar contactos nuevos y no tener cómo atenderlos rápido es, literalmente, tirar el presupuesto. Por qué automatizar la atención suele rendir más que comprar más leads.',
    cluster: 'comparativas',
    publishedAt: '2026-08-27',
    keywords: ['comprar leads vs automatizar', 'presupuesto marketing chatbot', 'pauta vs atencion al cliente'],
    coverVariant: 4,
    coverEyebrow: 'Comparativa',
    readingTime: '4 min',
    body: [
      {
        type: 'p',
        text: 'Es común que un negocio invierta en pauta para generar más contactos por WhatsApp, sin haber resuelto primero que puede atender bien los que ya le llegan. El resultado es predecible: más mensajes sin responder, no más ventas.',
      },
      { type: 'h2', text: 'La pregunta que hay que hacerse antes de invertir en más leads' },
      {
        type: 'p',
        text: '¿Cuánto tiempo tarda hoy mi negocio en responder el primer mensaje de un cliente? Si la respuesta es más de unas pocas horas, el problema no es la falta de contactos: es la capacidad de atenderlos. En ese caso, cada peso adicional en pauta compra contactos que se van a perder de la misma forma que se están perdiendo los actuales.',
      },
      {
        type: 'quote',
        text: 'El 82% de los consumidores espera una respuesta por WhatsApp en menos de 24 horas.',
        cite: 'The State of Business Messaging, WhatsApp Business',
      },
      { type: 'h2', text: 'Cuándo sí conviene invertir en más leads' },
      {
        type: 'p',
        text: 'Una vez que el WhatsApp del negocio responde rápido y de forma consistente —con o sin automatización— invertir en generar más contactos empieza a rendir de verdad, porque cada nuevo lead entra a un sistema que sí puede convertirlo. El orden importa: primero la capacidad de atender, después el volumen de contactos.',
      },
    ],
    sources: [
      {
        title: 'The State of Business Messaging',
        url: 'https://business.whatsapp.com/resources/resource-library/state-of-business-messaging',
        publisher: 'WhatsApp Business',
      },
    ],
  },

  {
    slug: 'dia-sin-iva-black-friday-whatsapp',
    title: 'Día sin IVA y Black Friday: cómo no colapsar tu WhatsApp en fechas pico',
    description:
      'Las fechas de mayor demanda del año son también las que más rápido saturan un WhatsApp sin automatizar. Cómo preparar tu chatbot antes de que llegue el pico de mensajes.',
    cluster: 'colombia',
    publishedAt: '2026-08-27',
    keywords: ['dia sin iva whatsapp', 'black friday colombia whatsapp', 'chatbot temporada alta'],
    coverVariant: 6,
    coverEyebrow: 'Mercado colombiano',
    readingTime: '4 min',
    body: [
      {
        type: 'p',
        text: 'El Día sin IVA y el Black Friday son, para el comercio colombiano, los días de mayor volumen de mensajes del año: todos preguntando disponibilidad, precio y si el descuento aplica a tal producto, casi al mismo tiempo. Es exactamente el escenario donde un WhatsApp sin automatizar colapsa.',
      },
      { type: 'h2', text: 'Cómo preparar el chatbot antes del pico' },
      {
        type: 'ul',
        items: [
          'Actualizar el catálogo con los precios y descuentos reales antes de que empiece la fecha, no durante.',
          'Configurar respuestas específicas para las preguntas más probables ese día: qué aplica al descuento, horarios extendidos, stock limitado.',
          'Definir con claridad qué productos tienen unidades limitadas, para no prometer disponibilidad que ya no existe.',
          'Reforzar el equipo humano solo para los casos que el bot no pueda resolver, en vez de intentar atender manualmente todo el volumen.',
        ],
      },
      {
        type: 'callout',
        text: 'Las fechas exactas del Día sin IVA las define cada año el Ministerio de Hacienda a través de la DIAN, así que vale la pena confirmar el calendario oficial vigente antes de planear la campaña, en vez de asumir las fechas del año anterior.',
      },
    ],
    sources: [],
  },

  {
    slug: 'ventas-whatsapp-ciudades-intermedias-colombia',
    title: 'Cómo venden por WhatsApp los negocios en ciudades intermedias de Colombia',
    description:
      'El comercio digital colombiano no se concentra solo en Bogotá, Medellín y Cali. Cómo negocios en ciudades intermedias están usando WhatsApp como su canal principal de venta.',
    cluster: 'colombia',
    publishedAt: '2026-08-27',
    keywords: ['whatsapp ciudades intermedias colombia', 'ecommerce regiones colombia', 'venta por whatsapp provincia'],
    coverVariant: 2,
    coverEyebrow: 'Mercado colombiano',
    readingTime: '4 min',
    body: [
      {
        type: 'p',
        text: 'Buena parte de la conversación sobre comercio digital en Colombia se concentra en las tres ciudades más grandes, pero el WhatsApp como canal de venta no tiene esa limitación: funciona igual de bien —a veces mejor, por la cercanía del trato— en ciudades como Ibagué, Manizales, Villavicencio o Montería.',
      },
      { type: 'h2', text: 'Por qué WhatsApp encaja bien en mercados regionales' },
      {
        type: 'ul',
        items: [
          'No depende de infraestructura logística compleja: el negocio local ya conoce su zona de entrega.',
          'El trato cercano, típico del comercio de ciudad intermedia, se traslada de forma natural a una conversación de WhatsApp.',
          'La penetración de WhatsApp (92-94% de usuarios de internet en el país) es pareja en todas las regiones, no un fenómeno solo de las capitales.',
        ],
      },
      {
        type: 'p',
        text: 'La diferencia real no está en la ciudad, sino en si el negocio automatiza o no la parte repetitiva de su atención. Un negocio en una ciudad intermedia que responde rápido por WhatsApp compite en igualdad de condiciones —a veces con ventaja, por el trato personal— frente a competidores mucho más grandes en las capitales.',
      },
    ],
    sources: [],
  },

  {
    slug: 'ley-1581-proteccion-datos-chatbot',
    title: 'Lo que dice la Ley 1581 sobre los datos que recoge tu chatbot',
    description:
      'Un chatbot de WhatsApp recoge nombres, números y en ocasiones direcciones. Qué exige la Ley 1581 de 2012 sobre esos datos y cómo cumplirla sin complicarle la vida a tu negocio.',
    cluster: 'colombia',
    publishedAt: '2026-08-27',
    keywords: ['ley 1581 chatbot', 'proteccion de datos whatsapp colombia', 'habeas data chatbot'],
    coverVariant: 5,
    coverEyebrow: 'Mercado colombiano',
    readingTime: '5 min',
    body: [
      {
        type: 'p',
        text: 'Cada conversación que un chatbot de WhatsApp mantiene con un cliente recoge datos personales: al menos un nombre y un número de teléfono, y con frecuencia una dirección o una preferencia de compra. En Colombia, eso activa la Ley 1581 de 2012, la norma general de protección de datos personales.',
      },
      { type: 'h2', text: 'Lo que exige la ley, en términos simples' },
      {
        type: 'ul',
        items: [
          'Informar al titular de los datos para qué se van a usar (atención, pedidos, envío de información) antes o al momento de recogerlos.',
          'Obtener su autorización, que puede darse de forma implícita al iniciar la conversación con el negocio, pero debe quedar claro qué uso se le dará a esa información.',
          'Garantizar que el titular pueda conocer, actualizar o pedir la eliminación de sus datos cuando lo solicite.',
          'No compartir esos datos con terceros sin autorización, salvo las excepciones que la propia ley contempla.',
        ],
      },
      { type: 'h2', text: 'Cómo aplicar esto en la práctica sin complicarse' },
      {
        type: 'ol',
        items: [
          'Tener una política de privacidad clara y accesible (en la web del negocio) que explique qué datos recoge el chatbot y para qué.',
          'Evitar recoger datos que el chatbot no necesita realmente para operar (por ejemplo, no pedir número de cédula si no es indispensable).',
          'Definir un canal claro (un correo de contacto) para que cualquier cliente pueda ejercer sus derechos sobre sus datos.',
          'Revisar que el proveedor que administra el chatbot también cumpla con estándares razonables de seguridad de la información.',
        ],
      },
      {
        type: 'callout',
        text: 'Cumplir la Ley 1581 no es un trámite adicional para "cuando el negocio crezca": es parte de operar un canal de atención serio desde el primer cliente que escribe.',
      },
    ],
    sources: [
      {
        title: 'Ley 1581 de 2012',
        url: 'http://www.secretariasenado.gov.co/senado/basedoc/ley_1581_2012.html',
        publisher: 'Secretaría del Senado de la República de Colombia',
      },
    ],
  },

  {
    slug: 'tendero-digital-ia-tiendas-de-barrio',
    title: 'El tendero digital: cómo la IA está llegando a las tiendas de barrio en Colombia',
    description:
      'La imagen del tendero de barrio anotando pedidos en un cuaderno está cambiando. Cómo la automatización y la IA, antes reservadas a grandes cadenas, ya son accesibles para el comercio de barrio.',
    cluster: 'colombia',
    publishedAt: '2026-08-27',
    keywords: ['tendero digital colombia', 'ia tiendas de barrio', 'automatizacion pequeños negocios colombia'],
    coverVariant: 3,
    coverEyebrow: 'Mercado colombiano',
    readingTime: '4 min',
    body: [
      {
        type: 'p',
        text: 'Durante mucho tiempo, la automatización de la atención al cliente fue terreno de grandes empresas con presupuestos que un negocio de barrio nunca podía igualar. Eso cambió: la misma infraestructura que usan las marcas grandes en WhatsApp hoy está al alcance de una tienda de barrio, una peluquería o una ferretería.',
      },
      { type: 'h2', text: 'Lo que hizo posible este cambio' },
      {
        type: 'ul',
        items: [
          'La WhatsApp Business Platform ya no exige integraciones complejas propias: existen proveedores locales que configuran todo por un costo mensual accesible.',
          'El 84,1% de las tiendas en línea colombianas ya usa WhatsApp como canal de venta, lo que demuestra que el canal ya está adoptado; lo que falta es automatizarlo bien.',
          'La IA generativa bajó de costo lo suficiente como para que un chatbot bien entrenado ya no sea un lujo corporativo.',
        ],
      },
      {
        type: 'p',
        text: 'El tendero digital no es una figura futurista: es el mismo dueño de negocio de siempre, que ahora tiene una herramienta que antes solo tenían las cadenas grandes, para responder rápido, tomar pedidos organizados y no perder ventas por no poder atender a todos al mismo tiempo.',
      },
      {
        type: 'callout',
        text: 'La ventaja competitiva del comercio de barrio siempre fue la cercanía con el cliente. La automatización bien usada no le quita eso: le da más tiempo para ejercerla.',
      },
    ],
    sources: [
      {
        title: 'WhatsApp se consolida como aliado clave del comercio electrónico en Colombia',
        url: 'https://www.portafolio.co/tecnologia/whatsapp-se-consolida-como-aliado-clave-del-comercio-electronico-en-colombia-segun-informe-de-e-commerce-489757',
        publisher: 'Portafolio',
      },
    ],
  },
];
