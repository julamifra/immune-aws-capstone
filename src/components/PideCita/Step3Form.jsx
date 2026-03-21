import React, { useState, useEffect, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import PreferredDatePicker from './PreferredDatePicker';
import { useToast } from '@/components/ui/use-toast';

const Step3Form = ({ initialData, onSubmit, onBack, isSubmitting }) => {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const recaptchaRef = useRef(null);
  const { toast } = useToast();

  const MONDAY_WEDNESDAY_THURSDAY_RANGES = ['14:30 - 16:30', '16:30 - 18:30'];
  const FRIDAY_RANGES = ['09:00 - 11:00', '11:00 - 13:00'];

  const [availableTimeRanges, setAvailableTimeRanges] = useState([]);

  useEffect(() => {
    if (formData.preferredDate) {
      const day = formData.preferredDate.getDay();
      let newRanges = [];
      if (day === 1 || day === 3 || day === 4) {
        // Lunes, Miércoles o Jueves
        newRanges = MONDAY_WEDNESDAY_THURSDAY_RANGES;
      } else if (day === 5) {
        // Viernes
        newRanges = FRIDAY_RANGES;
      }
      setAvailableTimeRanges(newRanges);

      // Reset preferredTime if the current one is no longer valid for the new day
      if (
        formData.preferredTime &&
        !newRanges.includes(formData.preferredTime)
      ) {
        setFormData((prev) => ({ ...prev, preferredTime: '' }));
      }
    } else {
      setAvailableTimeRanges([]);
      setFormData((prev) => ({ ...prev, preferredTime: '' }));
    }
  }, [formData.preferredDate]);

  const handleDateChange = (date) => {
    setFormData({ ...formData, preferredDate: date });
    if (errors.preferredDate) {
      setErrors({ ...errors, preferredDate: null });
    }
  };

  const validateAndSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.fullName)
      validationErrors.fullName = 'El nombre es obligatorio.';
    if (!formData.phone) validationErrors.phone = 'El teléfono es obligatorio.';
    if (!formData.email) {
      validationErrors.email = 'El correo es obligatorio.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'El formato del correo no es válido.';
    }
    if (!formData.preferredDate)
      validationErrors.preferredDate = 'La fecha es obligatoria.';
    if (!formData.preferredTime)
      validationErrors.preferredTime = 'La hora es obligatoria.';

    const token = recaptchaRef.current.getValue();
    if (!token) {
      toast({
        title: 'Verificación Requerida',
        description: 'Por favor, completa el reCAPTCHA para continuar.',
        variant: 'destructive',
      });
      return;
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    onSubmit({ ...formData, recaptchaToken: token });
    recaptchaRef.current.reset();
  };

  return (
    <form onSubmit={validateAndSubmit} className="space-y-4" noValidate>
      <h3 className="text-xl font-semibold mb-6 text-center">
        Completa tus datos
      </h3>

      <div className="space-y-2">
        <Label htmlFor="fullName">
          Nombre y Apellidos<span className="text-red-600 ml-1">*</span>
        </Label>
        <Input
          id="fullName"
          placeholder="Tu nombre completo"
          value={formData.fullName}
          onChange={(e) => {
            setFormData({ ...formData, fullName: e.target.value });
            if (errors.fullName) setErrors({ ...errors, fullName: null });
          }}
          required
        />
        {errors.fullName && (
          <p className="text-sm text-red-600 mt-1">{errors.fullName}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">
          Teléfono<span className="text-red-600 ml-1">*</span>
        </Label>
        <Input
          id="phone"
          type="tel"
          placeholder="600 000 000"
          value={formData.phone}
          onChange={(e) => {
            setFormData({ ...formData, phone: e.target.value });
            if (errors.phone) setErrors({ ...errors, phone: null });
          }}
          required
        />
        {errors.phone && (
          <p className="text-sm text-red-600 mt-1">{errors.phone}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">
          Correo electrónico<span className="text-red-600 ml-1">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="tu@correo.com"
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
            if (errors.email) setErrors({ ...errors, email: null });
          }}
          required
        />
        {errors.email && (
          <p className="text-sm text-red-600 mt-1">{errors.email}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Información adicional (opcional)</Label>
        <Textarea
          id="message"
          placeholder="Si quieres añadir algún detalle sobre tu consulta, puedes hacerlo aquí."
          value={formData.message}
          onChange={(e) => {
            setFormData({ ...formData, message: e.target.value });
          }}
        />
      </div>

      <div className="space-y-3 pt-2">
        <h4 className="font-semibold text-gray-800">
          Fecha/horario preferente de cita:
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="preferredDate">
              Fecha preferida<span className="text-red-600 ml-1">*</span>
            </Label>
            <PreferredDatePicker
              value={formData.preferredDate}
              onChange={handleDateChange}
            />
            {errors.preferredDate && (
              <p className="text-sm text-red-600 mt-1">
                {errors.preferredDate}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="preferredTime">
              Hora preferida<span className="text-red-600 ml-1">*</span>
            </Label>
            <select
              id="preferredTime"
              value={formData.preferredTime}
              onChange={(e) => {
                setFormData({ ...formData, preferredTime: e.target.value });
                if (errors.preferredTime)
                  setErrors({ ...errors, preferredTime: null });
              }}
              required
              disabled={availableTimeRanges.length === 0}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="" disabled>
                {availableTimeRanges.length === 0
                  ? 'Selecciona una fecha primero'
                  : 'Selecciona un rango'}
              </option>
              {availableTimeRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>{' '}
            {errors.preferredTime && (
              <p className="text-sm text-red-600 mt-1">
                {errors.preferredTime}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="whatsapp"
          checked={formData.whatsappPreference}
          onChange={(e) =>
            setFormData({ ...formData, whatsappPreference: e.target.checked })
          }
          className="h-4 w-4"
        />
        <Label htmlFor="whatsapp">Prefiero que me contacten por WhatsApp</Label>
      </div>

      <div className="flex justify-center py-4">
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
        />
      </div>

      <div className="pt-4">
        <Button
          type="submit"
          className="w-full text-lg py-3 h-auto bg-gradient-to-r from-brand-DEFAULT to-brand-dark hover:from-brand-dark hover:to-brand-DEFAULT text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
        </Button>
        <button
          onClick={onBack}
          className="w-full mt-4 text-center text-sm text-gray-600 hover:underline"
          disabled={isSubmitting}
        >
          Volver atrás
        </button>
      </div>
    </form>
  );
};

export default Step3Form;
