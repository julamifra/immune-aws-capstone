import { useLocation } from 'react-router-dom';
import { routePaths, routeMessages } from '@/config/routes';

const Loader = ({ text }) => {
  const { pathname } = useLocation();

  const getReadableRouteName = () => {
    const key = Object.keys(routePaths).find((k) => routePaths[k] === pathname);
    return routeMessages[key] || 'la página';
  };

  // Si se proporciona texto, usamos un estilo más compacto.
  if (text) {
    return (
      <div className="flex items-center space-x-2 p-3 rounded-lg max-w-xs bg-gray-200 text-black self-start">
        <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-blue-500 border-solid" />
        <p className="text-sm text-gray-600">{text}...</p>
      </div>
    );
  }

  // Estilo por defecto para carga de página completa.
  return (
    <div className="flex flex-col justify-center items-center h-[60vh] text-center space-y-4">
      <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 border-solid" />
      <p className="text-sm text-gray-500">
        Cargando <span className="font-medium">{getReadableRouteName()}</span>
        ...
      </p>
    </div>
  );
};

export default Loader;
