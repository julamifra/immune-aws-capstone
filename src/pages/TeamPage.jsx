import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Linkedin,
  Star,
  ChevronRight,
  Expand,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { imageUrls } from '@/config/urls';
import { teamMembers } from '@/data/teamMembersData';
import HelmetPage from '@/components/HelmetPage';
import { getTeamPageMeta } from '@/data/Metadata/teamPageMeta';

const TeamPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="bg-white min-h-screen">
      <HelmetPage {...getTeamPageMeta()} />
      <header className="relative h-[400px] lg:h-[400px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Equipo de médicos profesionales posando juntos"
            className="w-full h-full object-cover object-top"
            src={imageUrls.teamPage.header}
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-white/0"></div>
        </div>

        <div className="container-custom relative z-10 flex flex-col justify-end lg:justify-between h-full pb-8 lg:pb-0">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl lg:text-5xl font-bold text-brand-dark lg:pt-20 mb-2"
          >
            Nuestro Equipo
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-black lg:mb-5 text-justify"
          >
            Nuestro compromiso es ofrecerte una atención personalizada, cercana
            y basada en la excelencia clínica y una dilatada experiencia.
          </motion.p>
        </div>
      </header>
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 mb-16">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Dialog>
                  <Card className="h-full card-hover border-0 shadow-xl overflow-hidden flex flex-col lg:flex-row">
                    <div className="lg:w-1/3 relative">
                      <img
                        className="w-full h-64 lg:h-full object-cover object-top lg:object-center"
                        alt={`Retrato de ${member.name}, ${member.title}`}
                        src={member.urlImg}
                        loading="lazy"
                      />
                      <DialogTrigger asChild>
                        <div
                          className="absolute top-2 right-2 bg-white rounded-full p-2 cursor-pointer hover:bg-gray-200 transition-all duration-200"
                          onClick={() => setSelectedImage(member.urlImg)}
                        >
                          <Expand className="w-5 h-5 text-gray-800" />
                        </div>
                      </DialogTrigger>
                    </div>
                    <div className="lg:w-2/3 flex flex-col">
                      <CardHeader className="p-6">
                        <CardTitle className="text-2xl font-bold text-brand-dark">
                          {member.name}
                        </CardTitle>
                        <CardDescription className="text-brand-DEFAULT font-semibold">
                          {member.title}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-6 flex-grow">
                        <div className="space-y-3 text-sm">
                          <div className="flex items-start space-x-2 text-gray-700">
                            <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                            <span>
                              <strong>Especialidad:</strong> {member.specialty}
                            </span>
                          </div>
                          {member.education && (
                            <div className="flex items-start space-x-2 text-gray-700">
                              <GraduationCap className="w-4 h-4 text-brand-DEFAULT mt-0.5 flex-shrink-0" />
                              <span>
                                <strong>Formación:</strong> {member.education}
                              </span>
                            </div>
                          )}
                          <div className="space-y-1 mt-2">
                            <span className="font-semibold text-gray-800 block">
                              Experiencia:
                            </span>
                            <ul className="list-disc list-inside space-y-1 pl-1">
                              {member.experiences
                                .slice(0, 3)
                                .map((achievement, i) => (
                                  <li key={i} className="text-gray-600">
                                    {achievement}
                                  </li>
                                ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                      {member.linkedin && (
                        <div className="p-6 border-t border-gray-200">
                          <Button
                            asChild
                            variant="link"
                            className="text-brand-DEFAULT hover:text-brand-dark p-0"
                          >
                            <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Ver perfil en LinkedIn{' '}
                              <Linkedin className="w-4 h-4 ml-2" />
                            </a>
                          </Button>
                        </div>
                      )}
                    </div>
                  </Card>
                  <DialogContent className="max-w-3xl">
                    <img
                      src={selectedImage}
                      alt="Imagen ampliada del miembro del equipo"
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <section className="section-padding bg-gray-100 relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-40"
          style={{ backgroundImage: `url(${imageUrls.subtleGridPattern})` }}
        />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-brand-secondary rounded-2xl p-8 lg:p-12 text-center shadow-xl"
          >
            <h2 className="text-3xl font-bold mb-4 text-brand-dark">
              Soluciones para Cada Necesidad Visual
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Nuestro equipo de expertos cubre todas las áreas de la
              oftalmología para ofrecerte un cuidado integral.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-brand-DEFAULT to-brand-dark hover:from-brand-dark hover:to-brand-DEFAULT text-white font-semibold lg:px-10  transform hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              <Link to="/especialidades">
                Descubre Nuestras Especialidades
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
