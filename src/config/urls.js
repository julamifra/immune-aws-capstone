const SUPABASE_IMAGE_BASE_URL =
  'https://vknsnmxtlpzjvopwhxyl.supabase.co/storage/v1/object/public/new-images';
const UNSPLASH_BASE = 'https://images.unsplash.com/photo-';

export const imageUrls = {
  homePageImage: `${SUPABASE_IMAGE_BASE_URL}/home_page_img.png`,
  homePageImage_versions: [
    `${SUPABASE_IMAGE_BASE_URL}/home_page_img-480w.webp`,
    `${SUPABASE_IMAGE_BASE_URL}/home_page_img-768w.webp`,
    `${SUPABASE_IMAGE_BASE_URL}/home_page_img-1024w.webp`,
    `${SUPABASE_IMAGE_BASE_URL}/home_page_img-1440w.webp`,
    `${SUPABASE_IMAGE_BASE_URL}/home_page_img-1920w.webp`,
    `${SUPABASE_IMAGE_BASE_URL}/home_page_img-2560w.webp`,
    `${SUPABASE_IMAGE_BASE_URL}/home_page_img-3840w.webp`,
  ],
  homePageVideo: `${SUPABASE_IMAGE_BASE_URL}/video_presentacion_ioamigo.mp4`,
  // ioaLogo: '/logo.jpg',
  // chatbot: `${SUPABASE_IMAGE_BASE_URL}/robot2.png`,
  chatbot_versions: [
    `${SUPABASE_IMAGE_BASE_URL}/robot2-40x40.webp`,
    `${SUPABASE_IMAGE_BASE_URL}/robot2-80x80.webp`,
    `${SUPABASE_IMAGE_BASE_URL}/robot2-120x120.webp`,
  ],
  ioaLogo_original: `${SUPABASE_IMAGE_BASE_URL}/logo1.jpg`,
  ioaLogo_versions: [
    `${SUPABASE_IMAGE_BASE_URL}/logo1-100W.webp`,
    `${SUPABASE_IMAGE_BASE_URL}/logo1-200W.webp`,
    `${SUPABASE_IMAGE_BASE_URL}/logo1-300W.webp`,
  ],
  ioaLogoDark: `${SUPABASE_IMAGE_BASE_URL}/logo3.png`,
  ioaLogoDark_versions: [
    `${SUPABASE_IMAGE_BASE_URL}/logo3-150w.webp`,
    `${SUPABASE_IMAGE_BASE_URL}/logo3-200w.webp`,
  ],
  ioaLogoWhite: `${SUPABASE_IMAGE_BASE_URL}/logo4.png`,
  vistaLogo_principal: `${SUPABASE_IMAGE_BASE_URL}/LOGO-PRINCIPAL-VISTA-OFTALMOLOGOS.png`,
  vistaLogo_original: `${SUPABASE_IMAGE_BASE_URL}/LOGOS-VISTA-OFTALMOLOGOS-01.png`,
  vistaLogo_versions: [
    `${SUPABASE_IMAGE_BASE_URL}/LOGOS-VISTA-OFTALMOLOGOS-100W.webp`,
    `${SUPABASE_IMAGE_BASE_URL}/LOGOS-VISTA-OFTALMOLOGOS-01-200W.webp`,
    `${SUPABASE_IMAGE_BASE_URL}/LOGOS-VISTA-OFTALMOLOGOS-01-300W.webp`,
  ],
  defaultSpecialtyPreview: `${UNSPLASH_BASE}1677528778386-6dabbed49e80`,
  whyChooseUsImage: `${SUPABASE_IMAGE_BASE_URL}/dr_amigo_femto.webp`,
  subtleGridPattern:
    'https://www.transparenttextures.com/patterns/subtle-grid.png',
  newsDetailFallbackImage: `${UNSPLASH_BASE}1594969551748-fca4d0b2041d`,
  newsPageHeader: `${UNSPLASH_BASE}1701580881481-081bcab321c8`,
  specialtyDetailHeader_original: `${SUPABASE_IMAGE_BASE_URL}/specialtiesDetailHeader.jpg`,
  specialtyDetailHeader_versions: [
    `${SUPABASE_IMAGE_BASE_URL}/specialtiesDetailHeader-480w.webp`,
    `${SUPABASE_IMAGE_BASE_URL}/specialtiesDetailHeader-800w.webp`,
    `${SUPABASE_IMAGE_BASE_URL}/specialtiesDetailHeader-1200w.webp`,
    `${SUPABASE_IMAGE_BASE_URL}/specialtiesDetailHeader-1600w.webp`,
    `${SUPABASE_IMAGE_BASE_URL}/specialtiesDetailHeader-2000w.webp`,
    `${SUPABASE_IMAGE_BASE_URL}/specialtiesDetailHeader.webp`,
  ],
  facilitiesPreview: {
    technology: `${SUPABASE_IMAGE_BASE_URL}/maquina_1.jpg`,
    quirofano: `${SUPABASE_IMAGE_BASE_URL}/quirofano_1.jpg`,
    recepcion: `${SUPABASE_IMAGE_BASE_URL}/sala_de_espera.jpg`,
  },
  historyPage: {
    header: `${SUPABASE_IMAGE_BASE_URL}/fachada_3.jpg`,
  },
  aboutUsPage: {
    header: `${SUPABASE_IMAGE_BASE_URL}/recepcion_1.jpg`,
    sala1: `${SUPABASE_IMAGE_BASE_URL}/sala_1.jpg`,
  },
  facilitiesPage: {
    headerImg: `${SUPABASE_IMAGE_BASE_URL}/entrada_principal.jpg`,
    salaEspera: `${SUPABASE_IMAGE_BASE_URL}/sala_de_espera.jpg`,
    recepcion1: `${SUPABASE_IMAGE_BASE_URL}/recepcion_1.jpg`,
    recepcion2: `${SUPABASE_IMAGE_BASE_URL}/recepcion_2.jpg`,
    recepcion3: `${SUPABASE_IMAGE_BASE_URL}/recepcion_3.jpg`,
    recepcion4: `${SUPABASE_IMAGE_BASE_URL}/recepcion_4.jpg`,
    fachada2: `${SUPABASE_IMAGE_BASE_URL}/fachada_2.jpg`,
    entradaFachada: `${SUPABASE_IMAGE_BASE_URL}/entrada_principal.jpg`,
    salaEsperaQuirofano: `${SUPABASE_IMAGE_BASE_URL}/sala_espera_quirofano.jpg`,
    recepcionQuirofano: `${SUPABASE_IMAGE_BASE_URL}/recepcion_quirofano.jpg`,
    sala1: `${SUPABASE_IMAGE_BASE_URL}/sala_1.jpg`,
    sala2: `${SUPABASE_IMAGE_BASE_URL}/sala_2.jpg`,
    sala21: `${SUPABASE_IMAGE_BASE_URL}/sala_2_1.jpg`,
    sala3: `${SUPABASE_IMAGE_BASE_URL}/sala_3.jpg`,
    sala4: `${SUPABASE_IMAGE_BASE_URL}/sala_4.jpg`,
    sala5: `${SUPABASE_IMAGE_BASE_URL}/sala_5.jpg`,
    equipoMedico1: `${SUPABASE_IMAGE_BASE_URL}/equipo_medico.jpg`,
    equipoMedico2: `${SUPABASE_IMAGE_BASE_URL}/equipo_medico_2.jpg`,
    exterior1: `${SUPABASE_IMAGE_BASE_URL}/exterior_1.jpg`,
    quirofano1: `${SUPABASE_IMAGE_BASE_URL}/quirofano_1.jpg`,
    quirofano2: `${SUPABASE_IMAGE_BASE_URL}/quirofano_2.jpg`,
    quirofano3: `${SUPABASE_IMAGE_BASE_URL}/quirofano_3.jpg`,
    doctorMaquina2: `${SUPABASE_IMAGE_BASE_URL}/doctor_maquina_2.jpg`,
    doctorMaquina3: `${SUPABASE_IMAGE_BASE_URL}/doctor_maquina_3.jpg`,
    maquinaEyeStart: `${SUPABASE_IMAGE_BASE_URL}/maquina_eye_star_900.jpg`,
    maquinaOctCirrus: `${SUPABASE_IMAGE_BASE_URL}/maquina_oct_cirrus_500.jpg`,
    maquinaOculusKeratograph: `${SUPABASE_IMAGE_BASE_URL}/maquina_oculus_keratograph_4.jpg`,
    laserFemto: `${SUPABASE_IMAGE_BASE_URL}/femto.jpg`,
  },
  teamPage: {
    header: `${SUPABASE_IMAGE_BASE_URL}/equipo_medico.jpg`,
    teamMemberDefault: `${UNSPLASH_BASE}1588966915713-6d43603478e5`,
    profielDacil: `${SUPABASE_IMAGE_BASE_URL}/dacil_verano.jpg`,
    profielDavid: `${SUPABASE_IMAGE_BASE_URL}/david_reyes.jpg`,
    profielMarga: `${SUPABASE_IMAGE_BASE_URL}/marga_socas.jpg`,
    profielEva: `${SUPABASE_IMAGE_BASE_URL}/eva_hernandez.jpg`,
    profielAlfredo: `${SUPABASE_IMAGE_BASE_URL}/alfredo_amigo.jpg`,
    profielMercedes: `${SUPABASE_IMAGE_BASE_URL}/mercedes_frances.jpg`,
    profielEvaAyala: `${SUPABASE_IMAGE_BASE_URL}/eva_ayala.jpg`,
    profielDanielPerera: `${SUPABASE_IMAGE_BASE_URL}/daniel_perera.jpg`,
  },
  contactPage: {
    team: `${SUPABASE_IMAGE_BASE_URL}/equipo_medico_2.jpg`,
  },
  headersBackground: {
    aboutPage: `${SUPABASE_IMAGE_BASE_URL}/header_background_3.png`,
    specialtiesPage: `${SUPABASE_IMAGE_BASE_URL}/header_background_6.webp`,
    newsPage: `${SUPABASE_IMAGE_BASE_URL}/header_background_4.png`,
  },
  specialtyPreviewImages: {
    laserFemtosegundo: `${SUPABASE_IMAGE_BASE_URL}/femtosegundo_laser_home.png`,
    miopiaHipermetropiaAstigmatismo: `${SUPABASE_IMAGE_BASE_URL}/miopia_glasses_home.png`,
    miopia: `${SUPABASE_IMAGE_BASE_URL}/miopia_home.png`,
    hipermetropia: `${SUPABASE_IMAGE_BASE_URL}/hipermetropia_home.png`,
    astigmatismo: `${SUPABASE_IMAGE_BASE_URL}/astigmatismo_home.png`,
    presbicia: `${SUPABASE_IMAGE_BASE_URL}/presbicia_home.png`,
    cataratas: `${SUPABASE_IMAGE_BASE_URL}/catarata_home.png`,
    glaucoma: `${SUPABASE_IMAGE_BASE_URL}/glaucoma_home.png`,
    retinaYMacula: `${SUPABASE_IMAGE_BASE_URL}/retina_home.png`,
    queratocono: `${SUPABASE_IMAGE_BASE_URL}/queratocono_home.png`,
    parpadosYViasLagrimales: `${SUPABASE_IMAGE_BASE_URL}/parpados_home.png`,
    superficieOcular: `${SUPABASE_IMAGE_BASE_URL}/ojo_seco_home.png`,
  },
  specialtyOgImages: {
    laserFemtosegundo: `${SUPABASE_IMAGE_BASE_URL}/femtosegundo_laser_home.png`,
    miopiaHipermetropiaAstigmatismo: `${SUPABASE_IMAGE_BASE_URL}/miopia_glasses_home.png`,
    miopia: `${SUPABASE_IMAGE_BASE_URL}/miopia_home.png`,
    hipermetropia: `${SUPABASE_IMAGE_BASE_URL}/hipermetropia_home.png`,
    astigmatismo: `${SUPABASE_IMAGE_BASE_URL}/astigmatismo_home.png`,
    presbicia: `${SUPABASE_IMAGE_BASE_URL}/presbicia_home.png`,
    cataratas: `${SUPABASE_IMAGE_BASE_URL}/catarata_home.png`,
    glaucoma: `${SUPABASE_IMAGE_BASE_URL}/glaucoma_home.png`,
    retinaYMacula: `${SUPABASE_IMAGE_BASE_URL}/retina_home.png`,
    queratocono: `${SUPABASE_IMAGE_BASE_URL}/queratocono_home.png`,
    parpadosYViasLagrimales: `${SUPABASE_IMAGE_BASE_URL}/parpados_home.png`,
    superficieOcular: `${SUPABASE_IMAGE_BASE_URL}/ojo_seco_home.png`,
  },
  publications: `${SUPABASE_IMAGE_BASE_URL}/publicaciones_oftalmologicas.jpg`,
};

const placeId =
  (import.meta.env && import.meta.env.VITE_PLACE_ID) ||
  // eslint-disable-next-line no-undef
  (typeof process !== 'undefined' ? process.env.VITE_PLACE_ID : undefined) ||
  'ChIJVWQh22LLQQwRSqEGBdoE7D4';
export const googleReadReviewUrl = `https://search.google.com/local/reviews?placeid=${placeId}`;
export const googleWriteReviewUrl = `https://search.google.com/local/writereview?placeid=${placeId}`;
export const googleMapsEmbedUrl =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.5717552765323!2d-16.252561523717336!3d28.462323091788317!2m3!1f0!1f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc41cb62db216455%3A0x3eec04da0506a14a!2sInstituto%20Oftalmologico%20Amig%C3%B3!5e0!3m2!1ses!2ses!4v1752738228448!5m2!1ses!2ses';

export const google3DViewMapUrl =
  'https://www.google.com/maps?q=instituto+oftalmol%C3%B3gico+amig%C3%B3&layer=c&sll=28.462351,-16.249931&cid=4534004259288949066&panoid=B5iemYvBa0wAAAQJOEx96Q&cbp=13,100.39,,0,5.81&hl=es&ie=UTF8&hq=instituto+oftalmol%C3%B3gico+amig%C3%B3&hnear=&t=m&cbll=28.462352,-16.250033&source=embed&ll=28.460184,-16.250024&spn=0.007546,0.017166&z=16&output=svembed';
export const googleMapGoToUrl = 'https://maps.app.goo.gl/N1b2KE1kbrZ74y2R9';

export const socialLinks = {
  twitter: 'https://twitter.com/iodramigo',
  instagram: 'https://www.instagram.com/oftalmologoamigo/',
  youtube: 'https://www.youtube.com/@Ioamigo',
  linkedin:
    'https://www.linkedin.com/company/instituto-oftalmol%C3%B3gico-amig%C3%B3/',
};

export const baseThumbnailUrl = 'https://img.youtube.com/vi/';
export const videoIds = {
  cataratas: 'rQIzIzL8o_M',
  laserFemtosegundo: 'UDNPE0obYDM',
  presbicia: 'byl91haMTaM',
};
